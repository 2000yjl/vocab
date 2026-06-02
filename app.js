const DEFAULT_AUTH = {
  teacher: "123456",
  ...Object.fromEntries(Array.from({ length: 300 }, (_, i) => [String(i + 1).padStart(3, "0"), "123456"]))
};

let AUTH = loadAuth();
let user = localStorage.getItem("wordforge-user") || "";
let authMode = "local";
let state = {};
let activeDeck = "cet4";
let activeWordId = 1;
let readerIndex = 0;
let quizIndex = 0;
let quizMode = "recall";
let answerShown = false;
let streak = 0;
let availableVoices = [];
const dictionaryCache = new Map();
const translationCache = new Map();
const CAT_TYPES = {
  orange: { name: "大橘", image: "./orange.png", line: "今天也一起翻一页吧。" },
  tabby: { name: "狸花", image: "./tabby.png", line: "我会陪你把难词抓出来。" },
  silver: { name: "美短", image: "./silver.png", line: "连续学习会有新的礼物。" }
};
const PET_FILTERS = ["none", "saturate(.78) brightness(1.12)", "sepia(.38) saturate(1.18)", "hue-rotate(18deg) saturate(.82)", "grayscale(.58) contrast(1.08)", "hue-rotate(328deg) saturate(.92)", "brightness(.88) saturate(1.24)", "sepia(.62) brightness(.98)", "hue-rotate(52deg) saturate(.7)", "contrast(1.18) brightness(1.04)", "grayscale(.92) brightness(1.18)"];
const PET_SUFFIXES = ["原野", "奶糖", "琥珀", "云朵", "晚霞", "星尘", "可可", "月光", "薄荷", "墨影", "霜雪"];
const PET_RARITIES = ["普通", "普通", "普通", "稀有", "稀有", "稀有", "珍贵", "珍贵", "史诗", "史诗", "传说"];
const PET_CATALOG = [
  ...Object.entries(CAT_TYPES).flatMap(([type, item]) => PET_SUFFIXES.map((suffix, index) => ({
    id: `${type}-${index}`, name: index ? `${item.name}·${suffix}` : item.name, image: item.image,
    line: item.line, rarity: PET_RARITIES[index], filter: PET_FILTERS[index], species: "猫咪"
  }))),
  { id: "corgi-0", name: "单词柯基", image: "./corgi.png", line: "汪！今天也记住一个新词。", rarity: "隐藏", filter: "none", species: "彩蛋伙伴" },
  { id: "rabbit-0", name: "书页垂耳兔", image: "./rabbit.png", line: "慢慢翻页，也会走得很远。", rarity: "隐藏", filter: "none", species: "彩蛋伙伴" },
  { id: "hamster-0", name: "眼镜仓鼠", image: "./hamster.png", line: "我把难词收进小本子里了。", rarity: "隐藏", filter: "none", species: "彩蛋伙伴" }
];
const REWARD_POOL = ["柔软猫毛", "猫咪便签", "小鱼干", "逗猫棒", "幸运猫爪", "猫砂纪念章"];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const decks = window.WORDFORGE_DECKS || [];
const words = window.WORDFORGE_WORDS || [];
const roots = window.WORDFORGE_ROOTS || [];
const supabaseConfig = window.WORDFORGE_SUPABASE || null;
const supabaseClient = window.supabase && supabaseConfig
  ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey)
  : null;

function loadAuth() {
  return { ...DEFAULT_AUTH, ...JSON.parse(localStorage.getItem("wordforge-custom-auth") || "{}") };
}

function saveCustomAuth(nextAuth) {
  const custom = {};
  for (const [name, pass] of Object.entries(nextAuth)) {
    if (DEFAULT_AUTH[name] !== pass) custom[name] = pass;
  }
  localStorage.setItem("wordforge-custom-auth", JSON.stringify(custom));
  AUTH = loadAuth();
}

function isDefaultAccount(name) {
  return name === "teacher" || /^\d{3}$/.test(name);
}

function accountEmail(name) {
  return `${name}@${supabaseConfig?.emailDomain || "wordforge.local"}`;
}

function accountNameFromEmail(email) {
  return String(email || "").split("@")[0];
}

function stateKey(name) { return `wordforge-state-${name}`; }

function loadState() {
  state = JSON.parse(localStorage.getItem(stateKey(user)) || "{}");
  streak = Number(localStorage.getItem(`${stateKey(user)}-streak`) || 0);
  ensureMeta();
  activeDeck = learnerMeta().lastDeck || activeDeck;
  readerIndex = Number(learnerMeta().deckCursor[activeDeck] || 0);
}

function saveState() {
  ensureMeta();
  localStorage.setItem(stateKey(user), JSON.stringify(state));
  localStorage.setItem(`${stateKey(user)}-streak`, String(streak));
  renderStats();
  renderDailyPlan();
}

function todayKey() { return new Date().toISOString().slice(0, 10); }

function ensureMeta() {
  state._meta ||= {};
  const meta = state._meta;
  meta.xp ||= 0;
  meta.points ||= 0;
  meta.level ||= 1;
  meta.lastStudy ||= todayKey();
  meta.lastLogin ||= "";
  meta.cat ||= "orange";
  meta.catGrowth ||= 1;
  meta.catHunger ??= 82;
  meta.rewards ||= [];
  meta.kittens ||= [];
  meta.eggs ??= 0;
  meta.learnedSinceEgg ??= 0;
  meta.petUnlocks ||= ["orange-0", "tabby-0", "silver-0"];
  if (["orange", "tabby", "silver"].includes(meta.cat)) meta.cat = `${meta.cat}-0`;
  meta.deckCursor ||= {};
  meta.completedDecks ||= {};
  if (meta.lastLogin !== todayKey()) {
    meta.lastLogin = todayKey();
    meta.points += 20;
    meta.xp += 20;
    meta.catHunger = Math.min(100, meta.catHunger + 10);
  }
  meta.lastHungerCheck ||= todayKey();
  const idleDays = Math.max(0, Math.floor((Date.now() - new Date(`${meta.lastHungerCheck}T00:00:00`).getTime()) / 86400000));
  meta.catHunger = Math.max(0, meta.catHunger - idleDays * 8);
  meta.lastHungerCheck = todayKey();
  meta.catGrowth = Math.max(0.55, Math.min(1.35, 0.72 + meta.level * 0.035 + meta.catHunger / 500));
}

function learnerMeta() {
  ensureMeta();
  return state._meta;
}

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function normalize(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, " ").trim();
}

function normalizeAnswer(value) {
  return String(value || "").toLowerCase().replace(/[，。！？,.!?；;：:\s]/g, "");
}

function getWord(id) { return words.find((word) => word.id === Number(id)) || words[0]; }
function findWordByText(text) { return words.find((word) => normalize(word.word) === normalize(text)); }
function studyWords() { return words.filter((word) => word.type === "headword"); }
function phraseWords() { return words.filter((word) => word.type === "phrase"); }
function deckWords(deckId = activeDeck) { return studyWords().filter((word) => word.deckId === deckId); }
function deckPhraseWords(deckId = activeDeck) { return phraseWords().filter((word) => word.deckId === deckId); }

function sortedDeckWords(deckId = activeDeck) {
  const list = deckWords(deckId);
  const mode = $("#sortMode")?.value || "book";
  if (mode === "az") return [...list].sort((a, b) => a.word.localeCompare(b.word));
  if (mode === "hard") return [...list].sort((a, b) => wordScore(b) - wordScore(a));
  return [...list].sort((a, b) => a.index - b.index || a.word.localeCompare(b.word));
}

function wordScore(word) {
  const s = state[word.id] || {};
  return (s.wrong || 0) * 3 - (s.right || 0) * 2;
}

function deckProgress(deckId) {
  const list = deckWords(deckId);
  if (!list.length) return 0;
  const known = list.filter((word) => state[word.id]?.completed || (state[word.id]?.right || 0) >= 2).length;
  return Math.round((known / list.length) * 100);
}

function deckCompletedCount(deckId) {
  return deckWords(deckId).filter((word) => state[word.id]?.completed).length;
}

function deckUnlockCost(index) {
  return Math.max(0, (index - 2) * 120);
}

function isDeckUnlocked(deck, index = decks.findIndex((item) => item.id === deck.id)) {
  if (index < 3 || deck.id === "native") return true;
  return learnerMeta().points >= deckUnlockCost(index);
}

function awardStudy(word, points = 10) {
  const meta = learnerMeta();
  state[word.id] ||= { right: 0, wrong: 0 };
  const first = !state[word.id].completed;
  state[word.id].completed = true;
  state[word.id].lastSeen = todayKey();
  meta.lastStudy = todayKey();
  meta.catHunger = Math.min(100, meta.catHunger + (first ? 4 : 2));
  meta.points += first ? points : 2;
  meta.xp += first ? points : 2;
  meta.level = Math.floor(meta.xp / 180) + 1;
  if (first && meta.xp % 90 < points) {
    meta.rewards.unshift(REWARD_POOL[Math.floor(Math.random() * REWARD_POOL.length)]);
    meta.rewards = meta.rewards.slice(0, 8);
  }
  if (first) {
    meta.learnedSinceEgg += 1;
    if (meta.learnedSinceEgg >= 6) {
      meta.learnedSinceEgg = 0;
      meta.eggs += 1;
      meta.rewards.unshift("新的幼猫蛋");
    }
  }
  const completed = deckCompletedCount(word.deckId);
  const total = deckWords(word.deckId).length;
  if (total && completed === total && !meta.completedDecks[word.deckId]) {
    meta.completedDecks[word.deckId] = true;
    meta.points += 120;
    meta.xp += 120;
    meta.rewards.unshift("词典毕业徽章");
  }
  if (first && meta.level >= 4 && meta.level % 3 === 0 && !meta.kittens.includes(meta.level)) {
    meta.kittens.push(meta.level);
    meta.eggs += 1;
    meta.rewards.unshift(`随机幼猫蛋 Lv.${meta.level}`);
  }
}

function hatchPet() {
  const meta = learnerMeta();
  if (meta.eggs < 1) return;
  const locked = PET_CATALOG.filter((pet) => !meta.petUnlocks.includes(pet.id));
  if (!locked.length) return;
  const pet = locked[Math.floor(Math.random() * locked.length)];
  meta.eggs -= 1;
  meta.petUnlocks.push(pet.id);
  meta.cat = pet.id;
  meta.rewards.unshift(`孵化成功：${pet.name}`);
  saveState();
  renderPetCollection();
}

function renderPetCenter() {
  const holder = $("#petCenter");
  if (!holder) return;
  const meta = learnerMeta();
  const cat = PET_CATALOG.find((pet) => pet.id === meta.cat) || PET_CATALOG[0];
  const rewards = meta.rewards.length ? meta.rewards.map((reward) => `<span>${escapeHtml(reward)}</span>`).join("") : "<span>完成学习后会收到礼物</span>";
  const life = meta.catHunger <= 0 ? "离开小窝，学习后可以把它接回来" : meta.catHunger <= 18 ? "饿了，需要马上学习" : meta.catHunger >= 82 ? "精神很好" : "正在陪你成长";
  holder.innerHTML = `
    <div class="pet-stage">
      <img class="pet-avatar" style="--pet-scale:${meta.catGrowth};filter:${cat.filter}" src="${cat.image}" alt="${cat.name}" />
      <div class="pet-bubble">${meta.catHunger <= 10 ? "我有点饿了，陪我学几个词吧。" : escapeHtml(cat.line)}</div>
    </div>
    <div class="pet-dashboard">
      <p class="eyebrow">成长伙伴</p>
      <h3>${escapeHtml(cat.name)} · Lv.${meta.level}</h3>
      <div class="pet-meter"><span style="width:${meta.catHunger}%"></span></div>
      <p class="hint">状态：${life} · 饱腹 ${meta.catHunger}% · 积分 ${meta.points} · 经验 ${meta.xp} · 幼猫蛋 ${meta.eggs}</p>
      <div class="cat-picker">
        ${meta.petUnlocks.slice(0, 6).map((id) => PET_CATALOG.find((pet) => pet.id === id)).filter(Boolean).map((item) => `<button class="${meta.cat === item.id ? "active" : ""}" data-cat="${item.id}">${item.name}</button>`).join("")}
      </div>
      <div class="pet-actions">
        <button class="ghost" type="button" data-open-collection>伙伴图鉴 ${meta.petUnlocks.length}/${PET_CATALOG.length}</button>
        <button class="primary" type="button" data-hatch ${meta.eggs && meta.petUnlocks.length < PET_CATALOG.length ? "" : "disabled"}>孵化幼猫蛋</button>
      </div>
      <div class="reward-row">${rewards}</div>
    </div>
  `;
  holder.querySelectorAll("[data-cat]").forEach((button) => button.addEventListener("click", () => {
    learnerMeta().cat = button.dataset.cat;
    saveState();
    renderPetCenter();
  }));
  holder.querySelector("[data-open-collection]").addEventListener("click", renderPetCollection);
  holder.querySelector("[data-hatch]").addEventListener("click", hatchPet);
}

function renderPetCollection() {
  const holder = $("#petCollection");
  const meta = learnerMeta();
  holder.classList.remove("hidden");
  holder.innerHTML = `
    <div class="collection-head">
      <div><p class="eyebrow">学习伙伴图鉴</p><h3>已收集 ${meta.petUnlocks.length} / ${PET_CATALOG.length}</h3></div>
      <button class="ghost" type="button" data-close-collection>关闭</button>
    </div>
    <p class="hint">每学会 6 个新单词获得一枚幼猫蛋。孵化不会重复，隐藏伙伴会在图鉴里随机出现。</p>
    <div class="pet-grid">
      ${PET_CATALOG.map((pet) => {
        const unlocked = meta.petUnlocks.includes(pet.id);
        return `<button class="pet-card ${unlocked ? "" : "mystery"} ${meta.cat === pet.id ? "active" : ""}" type="button" ${unlocked ? `data-pet-id="${pet.id}"` : "disabled"}>
          <img src="${pet.image}" style="filter:${unlocked ? pet.filter : "brightness(0) opacity(.24)"}" alt="${unlocked ? pet.name : "未解锁伙伴"}" />
          <b>${unlocked ? pet.name : "待孵化"}</b><small>${unlocked ? `${pet.rarity} · ${pet.species}` : "??? · 未解锁"}</small>
        </button>`;
      }).join("")}
    </div>
  `;
  holder.querySelector("[data-close-collection]").addEventListener("click", () => holder.classList.add("hidden"));
  holder.querySelectorAll("[data-pet-id]").forEach((button) => button.addEventListener("click", () => {
    learnerMeta().cat = button.dataset.petId;
    saveState();
    holder.classList.add("hidden");
  }));
}

function recommendedDeck() {
  return [...decks].filter((deck) => deckWords(deck.id).length).sort((a, b) => deckProgress(a.id) - deckProgress(b.id))[0] || decks[0];
}

async function login(name, pass) {
  if (supabaseClient) {
    const result = await loginWithSupabase(name, pass);
    if (!result.ok) throw new Error(result.message);
    authMode = "supabase";
  } else if (!AUTH[name] || AUTH[name] !== pass) {
    return false;
  }
  user = name;
  localStorage.setItem("wordforge-user", user);
  loadState();
  $("#login").classList.add("hidden");
  $("#app").classList.remove("hidden");
  renderAll();
  return true;
}

async function loginWithSupabase(name, pass) {
  const email = accountEmail(name);
  let { data, error } = await supabaseClient.auth.signInWithPassword({ email, password: pass });
  if (!error && data?.session) return { ok: true };

  const canBootstrap = isDefaultAccount(name) && pass === "123456";
  if (!canBootstrap) {
    return { ok: false, message: "账号或密码不正确。" };
  }

  const signup = await supabaseClient.auth.signUp({
    email,
    password: pass,
    options: { data: { login_name: name } }
  });
  if (signup.error && !/registered|exists|already/i.test(signup.error.message)) {
    if (/rate limit|email/i.test(signup.error.message)) {
      return { ok: false, message: "Supabase 正在尝试发送确认邮件或触发邮件限制。请在 Authentication > Providers > Email 里关闭 Confirm email。" };
    }
    return { ok: false, message: signup.error.message };
  }
  if (!signup.data?.session) {
    const retry = await supabaseClient.auth.signInWithPassword({ email, password: pass });
    if (retry.error || !retry.data?.session) {
      return { ok: false, message: "Supabase 已创建/识别账号，但当前项目可能开启了邮箱确认。请在 Authentication 里关闭 Confirm email 后再试。" };
    }
  }
  return { ok: true };
}

function renderStats() {
  const main = studyWords();
  $("#totalCount").textContent = main.length;
  $("#knownCount").textContent = main.filter((word) => (state[word.id]?.right || 0) >= 2).length;
  $("#dueCount").textContent = main.filter((word) => (state[word.id]?.wrong || 0) > (state[word.id]?.right || 0)).length;
  $("#streakCount").textContent = streak;
  renderPetCenter();
}

function renderDailyPlan() {
  const holder = $("#dailyPlan");
  if (!holder) return;
  const deck = recommendedDeck();
  const due = studyWords().filter((word) => (state[word.id]?.wrong || 0) > (state[word.id]?.right || 0)).length;
  holder.innerHTML = `
    <button class="daily-card" data-action="continue">
      <small>今日 20 分钟</small>
      <strong>${escapeHtml(deck.title)}</strong>
          <span>从掌握率最低的一本开始，先学主单词，再看短语和衍生旁支。</span>
    </button>
    <button class="daily-card" data-action="sound">
      <small>听读训练</small>
      <strong>美音 + 英音</strong>
      <span>先听单词，再听例句，跟读到能自然说出来。</span>
    </button>
    <button class="daily-card" data-action="review">
      <small>错题回炉</small>
      <strong>${due} 个待复习</strong>
      <span>用主动回忆处理错词，比反复看中文更牢。</span>
    </button>
  `;
  holder.querySelector('[data-action="continue"]').addEventListener("click", () => openDeck(deck.id));
  holder.querySelector('[data-action="sound"]').addEventListener("click", () => openDeck(deck.id));
  holder.querySelector('[data-action="review"]').addEventListener("click", () => {
    quizMode = "recall";
    switchView("practice");
  });
}

function renderShelf() {
  $("#deckShelf").innerHTML = decks.map((deck, index) => {
    const total = deckWords(deck.id).length;
    const phraseTotal = deckPhraseWords(deck.id).length;
    const progress = deckProgress(deck.id);
    const meta = total
      ? `${total} 个主单词${phraseTotal ? ` · ${phraseTotal} 条短语` : ""} · 掌握 ${progress}%`
      : `${phraseTotal} 条短语 · 独立短语库`;
    const unlocked = isDeckUnlocked(deck, index);
    return `
      <button class="deck-cover ${unlocked ? "" : "locked"}" data-deck="${deck.id}" data-tone="${deck.tone}" ${unlocked ? "" : "disabled"}>
        <span class="book-tag">${escapeHtml(deck.order)}</span>
        <div>
          <h3>${escapeHtml(deck.title)}</h3>
          <p>${escapeHtml(deck.desc)}</p>
        </div>
        <div>
          <p>${unlocked ? meta : `需要 ${deckUnlockCost(index)} 积分解锁`}</p>
          <span class="deck-progress"><i style="width:${progress}%"></i></span>
        </div>
      </button>
    `;
  }).join("");
  $$(".deck-cover").forEach((button) => {
    button.addEventListener("click", () => openDeck(button.dataset.deck));
  });
}

function renderDeckFilter() {
  $("#deckFilter").innerHTML = `<option value="all">全部主单词</option>${decks.map((deck) => `<option value="${deck.id}">${escapeHtml(deck.title)}</option>`).join("")}`;
  $("#deckFilter").value = activeDeck;
}

function openDeck(deckId) {
  activeDeck = deckId;
  readerIndex = Number(learnerMeta().deckCursor[deckId] || 0);
  const list = sortedDeckWords(deckId);
  const phraseList = deckPhraseWords(deckId);
  if (!list.length && phraseList.length) {
    activeWordId = phraseList[0].id;
    switchView("dictionary");
    if ($("#deckFilter")) $("#deckFilter").value = deckId;
    if ($("#searchBox")) $("#searchBox").value = "";
    renderDictionary(activeWordId);
    return;
  }
  const first = list[0];
  readerIndex = Math.min(readerIndex, Math.max(0, list.length - 1));
  activeWordId = list[readerIndex]?.id || first.id;
  switchView("reader");
  renderReader();
}

function refreshVoices() {
  if (!("speechSynthesis" in window)) return [];
  availableVoices = window.speechSynthesis.getVoices();
  return availableVoices;
}

function voiceRank(voice, locale) {
  const name = `${voice.name} ${voice.voiceURI}`.toLowerCase();
  let score = voice.lang === locale ? 40 : voice.lang.startsWith(locale.slice(0, 2)) ? 20 : 0;
  if (/natural|neural|enhanced|premium|online|google|samantha|daniel|serena|arthur|ava|allison|karen|moira/.test(name)) score += 30;
  if (/microsoft/.test(name)) score -= 8;
  if (voice.localService === false) score += 4;
  return score;
}

function bestVoice(locale) {
  const voices = availableVoices.length ? availableVoices : refreshVoices();
  return [...voices]
    .filter((voice) => voice.lang === locale || voice.lang.startsWith(locale.slice(0, 2)))
    .sort((a, b) => voiceRank(b, locale) - voiceRank(a, locale))[0] || null;
}

function voiceLabel(locale) {
  const voice = bestVoice(locale);
  if (!voice) return locale === "en-US" ? "美音：浏览器默认" : "英音：浏览器默认";
  return `${locale === "en-US" ? "美音" : "英音"}：${voice.name}`;
}

async function speak(text, locale) {
  if (/^[a-z]+$/i.test(text)) {
    const live = await fetchDictionaryEntry(text);
    const audio = locale === "en-GB" ? live?.audioGB || live?.audioUS : live?.audioUS || live?.audioGB;
    if (audio) {
      new Audio(audio).play().catch(() => {});
      return;
    }
  }
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = locale;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.voice = bestVoice(locale);
  window.speechSynthesis.speak(utterance);
}

async function translateSentence(text) {
  if (!text) return "";
  if (translationCache.has(text)) return translationCache.get(text);
  try {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|zh-CN`);
    const data = await response.json();
    const translated = data?.responseData?.translatedText || "";
    translationCache.set(text, translated);
    return translated;
  } catch {
    return "";
  }
}

async function fetchDictionaryEntry(word) {
  const key = String(word || "").toLowerCase();
  if (!/^[a-z]+$/.test(key)) return null;
  if (dictionaryCache.has(key)) return dictionaryCache.get(key);
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(key)}`);
    if (!response.ok) throw new Error("dictionary lookup failed");
    const entries = await response.json();
    const entry = entries[0] || {};
    const phonetic = entry.phonetic || entry.phonetics?.find((item) => item.text)?.text || "";
    const audioUS = entry.phonetics?.find((item) => /-us\.mp3|_us_|\/us\//i.test(item.audio || ""))?.audio
      || entry.phonetics?.find((item) => item.audio)?.audio || "";
    const audioGB = entry.phonetics?.find((item) => /-uk\.mp3|_uk_|\/uk\//i.test(item.audio || ""))?.audio
      || entry.phonetics?.find((item) => item.audio)?.audio || "";
    const definitions = (entry.meanings || []).flatMap((meaning) => (meaning.definitions || []).map((definition) => ({
      partOfSpeech: meaning.partOfSpeech,
      example: definition.example || "",
      definition: definition.definition || "",
      synonyms: definition.synonyms || [],
      antonyms: definition.antonyms || []
    })));
    const examples = definitions.filter((item) => item.example).slice(0, 3);
    const synonyms = [...new Set(definitions.flatMap((item) => item.synonyms))].slice(0, 8);
    const antonyms = [...new Set(definitions.flatMap((item) => item.antonyms))].slice(0, 8);
    const result = { phonetic, audioUS, audioGB, examples, synonyms, antonyms };
    dictionaryCache.set(key, result);
    return result;
  } catch {
    dictionaryCache.set(key, null);
    return null;
  }
}

async function hydrateDictionaryDetail(container, word) {
  if (!container || word.type === "phrase") return;
  const live = await fetchDictionaryEntry(word.word);
  if (!live || activeWordId !== word.id) {
    if (activeWordId === word.id) {
      const holder = container.querySelector("[data-live-examples]");
      if (holder) holder.innerHTML = `<div class="meaning-row"><p>在线词典暂未收录这个词的权威例句。这里不再使用自动拼接的伪例句。</p></div>`;
    }
    return;
  }
  const phonetic = container.querySelector("[data-live-phonetic]");
  if (phonetic) phonetic.textContent = live.phonetic || "在线词典暂未收录音标";
  const exampleHolder = container.querySelector("[data-live-examples]");
  if (exampleHolder && live.examples.length) {
    const translated = await Promise.all(live.examples.map(async (item) => ({ ...item, cn: await translateSentence(item.example) })));
    if (activeWordId !== word.id) return;
    exampleHolder.innerHTML = translated.map((item, index) => `
      <div class="meaning-row">
        <b>${index + 1}. ${escapeHtml(item.partOfSpeech || "example")}</b>
        <p>${escapeHtml(item.example)}</p>
        <small>${escapeHtml(item.cn || "中文翻译暂不可用")}</small>
        <button class="ghost speak sentence-sound" type="button" data-locale="en-US" data-text="${escapeHtml(item.example)}">朗读例句</button>
      </div>
    `).join("");
    bindDetailLinks(exampleHolder);
  } else if (exampleHolder) {
    exampleHolder.innerHTML = `<div class="meaning-row"><p>在线词典暂未收录这个词的权威例句。这里不再使用自动拼接的伪例句。</p></div>`;
  }
  const relationHolder = container.querySelector("[data-live-relations]");
  if (relationHolder) {
    relationHolder.innerHTML = `
      <p><b>近义词</b> ${live.synonyms.length ? live.synonyms.map((item) => `<button class="link-chip" type="button" data-lookup-word="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("") : "在线词典暂未收录"}</p>
      <p><b>反义词</b> ${live.antonyms.length ? live.antonyms.map((item) => `<button class="link-chip" type="button" data-lookup-word="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("") : "在线词典暂未收录"}</p>
    `;
    bindDetailLinks(relationHolder);
  }
}

function rootExplanation(rootName) {
  const found = roots.find((root) => root.root === rootName);
  return found ? `${found.meaning}。${found.method}` : "";
}

function detailHtml(word) {
  const familyLinks = word.family.map((item) => {
    const target = findWordByText(item);
    const attr = target ? `data-word-id="${target.id}"` : "disabled";
    return `<button class="link-chip" type="button" ${attr}>${escapeHtml(item)}</button>`;
  }).join("");
  const parent = word.parent ? findWordByText(word.parent) : null;
  const parentLink = parent ? `<button class="link-chip" type="button" data-word-id="${parent.id}">核心词：${escapeHtml(word.parent)}</button>` : "";
  const localMeanings = word.type === "phrase" ? (word.meanings || [{ cn: word.cn, example: word.example }]) : [];
  const meaningRows = localMeanings.length ? localMeanings.map((item, index) => `
    <div class="meaning-row">
      <b>${index + 1}. ${escapeHtml(item.cn)}</b>
      <p>${escapeHtml(item.example)}</p>
      <button class="ghost speak sentence-sound" type="button" data-locale="en-US" data-text="${escapeHtml(item.example)}">朗读例句</button>
    </div>
  `).join("") : `<div class="meaning-row"><p>正在从在线词典获取真实例句和对应中文...</p></div>`;
  const phraseRows = (word.phraseItems || word.phrases.map((phrase) => ({ text: phrase, cn: "" }))).map((phrase) => `
    <div class="phrase">
      <b>${escapeHtml(phrase.text)}</b>
      <span>${escapeHtml(phrase.cn)}</span>
    </div>
  `).join("");
  const morphemeRows = (word.morphemes || []).map((item) => `
    <div class="morpheme">
      <b>${escapeHtml(item.part)}</b>
      <span>${escapeHtml(item.role)} · ${escapeHtml(item.meaning)}</span>
    </div>
  `).join("");
  const memoryTitle = "构词记忆";
  const memoryBody = `${morphemeRows ? `<div class="morpheme-list">${morphemeRows}</div>` : ""}<p>${escapeHtml(word.memory)}</p>`;
  return `
    <div class="word-head">
      <div>
        <div class="word-title">${escapeHtml(word.word)}</div>
        <div class="phonetic"><span data-live-phonetic>${escapeHtml(word.phonetic || "正在获取真实音标...")}</span> · ${escapeHtml(word.cn)} · ${escapeHtml(word.deckTitle)}</div>
      </div>
      <div class="sound-row">
        <button class="ghost speak" data-locale="en-US" data-text="${escapeHtml(word.word)}">美音</button>
        <button class="ghost speak" data-locale="en-GB" data-text="${escapeHtml(word.word)}">英音</button>
      </div>
    </div>
    <div class="voice-note">单词优先使用在线词典真人录音；缺少录音时使用设备语音。例句朗读使用设备语音。</div>
    <div class="detail-grid">
      <section class="detail-box">
        <h4>${memoryTitle}</h4>
        ${memoryBody}
      </section>
      <section class="detail-box">
        <h4>范例短语</h4>
        <div class="phrase-list">${phraseRows}</div>
      </section>
      <section class="detail-box">
        <h4>释义与母语例句</h4>
        <div class="meaning-list" data-live-examples>${meaningRows}</div>
      </section>
      <section class="detail-box">
        <h4>衍生/相关词</h4>
        <p>${familyLinks || "暂无衍生词"}</p>
        <p>${parentLink}</p>
        <div class="relation-list" data-live-relations><p>正在获取近义词和反义词...</p></div>
      </section>
    </div>
  `;
}

function bindDetailLinks(container) {
  container.querySelectorAll(".speak").forEach((button) => {
    button.addEventListener("click", () => speak(button.dataset.text, button.dataset.locale));
  });
  container.querySelectorAll(".link-chip[data-word-id]").forEach((button) => {
    if (!button.dataset.wordId) return;
    button.addEventListener("click", () => openWord(Number(button.dataset.wordId)));
  });
  container.querySelectorAll(".link-chip[data-lookup-word]").forEach((button) => {
    button.addEventListener("click", () => {
      $("#searchBox").value = button.dataset.lookupWord;
      $("#deckFilter").value = "all";
      switchView("dictionary");
      renderDictionary();
    });
  });
}

function renderReader() {
  const deck = decks.find((item) => item.id === activeDeck) || decks[0];
  const list = sortedDeckWords(activeDeck);
  const word = list[readerIndex] || list[0];
  activeWordId = word.id;
  learnerMeta().lastDeck = activeDeck;
  learnerMeta().deckCursor[activeDeck] = readerIndex;
  localStorage.setItem(stateKey(user), JSON.stringify(state));
  $("#readerDeckTitle").textContent = deck.title;
  $("#readerDeckMeta").textContent = `${deck.desc} 当前 ${readerIndex + 1} / ${list.length}`;
  const completed = deckCompletedCount(activeDeck);
  const percent = list.length ? ((completed / list.length) * 100).toFixed(1) : "0.0";
  $("#readerProgressBar").style.width = `${percent}%`;
  $("#readerProgressLabel").textContent = `已完成 ${completed} / ${list.length}，本词典进度 ${percent}%`;
  const page = $("#wordPage");
  page.classList.add("flip");
  setTimeout(() => {
    page.innerHTML = detailHtml(word);
    bindDetailLinks(page);
    hydrateDictionaryDetail(page, word);
    page.classList.remove("flip");
  }, 120);
}

function openWord(id) {
  const word = getWord(id);
  activeDeck = word.deckId;
  const list = sortedDeckWords(activeDeck);
  readerIndex = Math.max(0, list.findIndex((item) => item.id === word.id));
  activeWordId = word.id;
  if ($("#deckFilter")) $("#deckFilter").value = word.deckId;
  if ($("#searchBox")) $("#searchBox").value = "";
  switchView("dictionary");
  renderDictionary(word.id);
}

function filteredWords() {
  const deck = $("#deckFilter").value;
  const q = normalize($("#searchBox").value);
  const deckMain = deck === "all" ? studyWords() : deckWords(deck);
  const source = deck !== "all" && !deckMain.length ? deckPhraseWords(deck) : deckMain;
  return source.filter((word) => {
    const inDeck = deck === "all" || word.deckId === deck;
    const hay = normalize(`${word.word} ${word.cn} ${word.root} ${word.phrases.join(" ")} ${word.family.join(" ")}`);
    return inDeck && (!q || hay.includes(q));
  });
}

function renderDictionary(selectedId = activeWordId) {
  const list = filteredWords();
  const direct = selectedId ? getWord(selectedId) : null;
  const selected = list.find((word) => word.id === selectedId) || (direct && direct.id === Number(selectedId) ? direct : null) || list[0] || studyWords()[0] || words[0];
  activeWordId = selected.id;
  $("#resultMeta").textContent = `${list.length} 个结果`;
  $("#wordList").innerHTML = list.map((word) => `
    <button class="word-row ${word.id === selected.id ? "active" : ""}" data-word-id="${word.id}">
      <span>${escapeHtml(word.word)}</span>
      <small>${escapeHtml(word.cn)}</small>
    </button>
  `).join("");
  $("#detailPanel").innerHTML = detailHtml(selected);
  bindDetailLinks($("#detailPanel"));
  hydrateDictionaryDetail($("#detailPanel"), selected);
  $$(".word-row").forEach((button) => button.addEventListener("click", () => renderDictionary(Number(button.dataset.wordId))));
}

function quizPool() {
  const learned = studyWords().filter((word) => state[word.id]?.completed || (state[word.id]?.wrong || 0));
  return (learned.length ? learned : studyWords()).sort((a, b) => wordScore(b) - wordScore(a));
}

function renderQuiz() {
  const pool = quizPool();
  const word = pool[quizIndex % pool.length];
  activeWordId = word.id;
  answerShown = false;
  $("#practiceMode").textContent = quizMode === "spell" ? "中译英拼写" : quizMode === "meaning" ? "英译中回忆" : "主动回忆";
  $("#quizPrompt").textContent = quizMode === "meaning" ? word.word : word.cn;
  $("#quizMeta").textContent = `${word.deckTitle} · 主单词`;
  $("#quizAnswer").innerHTML = detailHtml(word);
  bindDetailLinks($("#quizAnswer"));
  hydrateDictionaryDetail($("#quizAnswer"), word);
  $("#quizAnswer").classList.add("hidden");
  $("#spellInput").classList.toggle("hidden", !["spell", "meaning"].includes(quizMode));
  $("#spellInput").placeholder = quizMode === "meaning" ? "输入中文释义" : "拼写英文";
  $("#spellInput").value = "";
  $("#practiceFeedback").textContent = "";
  $("#practiceFeedback").className = "feedback";
  $("#hardBtn").disabled = true;
  $("#easyBtn").disabled = true;
}

function markQuiz(ok) {
  const word = getWord(activeWordId);
  state[word.id] ||= { right: 0, wrong: 0 };
  ok ? state[word.id].right++ : state[word.id].wrong++;
  awardStudy(word, ok ? 6 : 2);
  streak = ok ? streak + 1 : 0;
  quizIndex++;
  saveState();
  renderQuiz();
}

function checkSpell() {
  const word = getWord(activeWordId);
  const input = $("#spellInput").value;
  const ok = quizMode === "meaning"
    ? normalizeAnswer(word.cn).includes(normalizeAnswer(input)) || normalizeAnswer(input).includes(normalizeAnswer(word.cn))
    : normalize(input) === normalize(word.word);
  $("#practiceFeedback").textContent = ok ? "正确。现在听一遍再读一遍。" : `答案：${quizMode === "meaning" ? word.cn : word.word}`;
  $("#practiceFeedback").classList.add(ok ? "ok" : "bad");
  $("#hardBtn").disabled = false;
  $("#easyBtn").disabled = false;
}

function switchView(id) {
  $$(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === id));
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === id));
  if (id === "reader") renderReader();
  if (id === "dictionary") renderDictionary();
  if (id === "practice") renderQuiz();
  if (id === "settings") showSettings();
}

function showSettings() {
  $("#currentAccountLabel").textContent = `当前账号：${user}`;
  $("#currentPassword").value = "";
  $("#newUsername").value = user;
  $("#newPassword").value = "";
  $("#accountFeedback").textContent = "";
  $("#accountFeedback").className = "feedback";
}

async function saveAccountSettings() {
  const currentPassword = $("#currentPassword").value.trim();
  const nextName = $("#newUsername").value.trim();
  const nextPassword = $("#newPassword").value.trim();
  const feedback = $("#accountFeedback");
  feedback.className = "feedback";
  if (!supabaseClient && AUTH[user] !== currentPassword) {
    feedback.textContent = "当前密码不正确。";
    feedback.classList.add("bad");
    return;
  }
  if (!/^[A-Za-z0-9_-]{2,24}$/.test(nextName)) {
    feedback.textContent = "新账号只能用英文、数字、下划线或短横线，2-24 位。";
    feedback.classList.add("bad");
    return;
  }
  if (nextPassword.length < 4) {
    feedback.textContent = "新密码至少 4 位。";
    feedback.classList.add("bad");
    return;
  }
  if (nextName !== user && AUTH[nextName]) {
    feedback.textContent = "这个账号已经存在。";
    feedback.classList.add("bad");
    return;
  }
  if (supabaseClient) {
    const signedIn = await supabaseClient.auth.signInWithPassword({
      email: accountEmail(user),
      password: currentPassword
    });
    if (signedIn.error) {
      feedback.textContent = "当前密码不正确。";
      feedback.classList.add("bad");
      return;
    }
    const updatePayload = { password: nextPassword, data: { login_name: nextName } };
    if (nextName !== user) updatePayload.email = accountEmail(nextName);
    const updated = await supabaseClient.auth.updateUser(updatePayload);
    if (updated.error) {
      feedback.textContent = updated.error.message;
      feedback.classList.add("bad");
      return;
    }
  } else {
    const nextAuth = { ...AUTH };
    delete nextAuth[user];
    nextAuth[nextName] = nextPassword;
    saveCustomAuth(nextAuth);
  }
  user = nextName;
  localStorage.setItem("wordforge-user", user);
  feedback.textContent = supabaseClient
    ? "已保存到 Supabase。其他设备请使用新账号和新密码登录。"
    : "已保存。本机浏览器下次请用新账号和新密码登录。";
  feedback.classList.add("ok");
  showSettings();
}

function renderAll() {
  renderStats();
  renderDailyPlan();
  renderShelf();
  renderDeckFilter();
  renderDictionary();
  renderReader();
  renderQuiz();
}

$("#loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  $("#loginError").textContent = "";
  try {
    const ok = await login($("#username").value.trim(), $("#password").value.trim());
    $("#loginError").textContent = ok ? "" : "账号或密码不正确。";
  } catch (error) {
    $("#loginError").textContent = error.message || "登录失败。";
  }
});

$$(".tab").forEach((tab) => tab.addEventListener("click", () => switchView(tab.dataset.view)));
$("#logoutBtn").addEventListener("click", async () => {
  if (supabaseClient) await supabaseClient.auth.signOut();
  localStorage.removeItem("wordforge-user");
  location.reload();
});
$("#prevWord").addEventListener("click", () => { readerIndex = Math.max(0, readerIndex - 1); renderReader(); });
$("#nextWord").addEventListener("click", () => { readerIndex = (readerIndex + 1) % sortedDeckWords(activeDeck).length; renderReader(); });
$("#completeWord").addEventListener("click", () => {
  awardStudy(getWord(activeWordId));
  saveState();
  renderReader();
  renderShelf();
});
$("#sortMode").addEventListener("change", () => { readerIndex = 0; renderReader(); });
$("#deckFilter").addEventListener("change", () => renderDictionary());
$("#searchBox").addEventListener("input", () => renderDictionary());
$("#showAnswer").addEventListener("click", () => {
  answerShown = true;
  $("#quizAnswer").classList.remove("hidden");
  $("#hardBtn").disabled = false;
  $("#easyBtn").disabled = false;
});
$("#speakQuizUS").addEventListener("click", () => speak(getWord(activeWordId).word, "en-US"));
$("#speakQuizUK").addEventListener("click", () => speak(getWord(activeWordId).word, "en-GB"));
$("#hardBtn").addEventListener("click", () => markQuiz(false));
$("#easyBtn").addEventListener("click", () => markQuiz(true));
$("#spellModeBtn").addEventListener("click", () => { quizMode = quizMode === "spell" ? "recall" : "spell"; renderQuiz(); });
$("#meaningModeBtn").addEventListener("click", () => { quizMode = quizMode === "meaning" ? "recall" : "meaning"; renderQuiz(); });
$("#spellInput").addEventListener("keydown", (event) => { if (event.key === "Enter") checkSpell(); });
$("#saveAccountBtn").addEventListener("click", saveAccountSettings);
$("#continueBtn").addEventListener("click", () => openDeck(recommendedDeck().id));
$("#reviewBtn").addEventListener("click", () => {
  quizMode = "recall";
  switchView("practice");
});

if ("speechSynthesis" in window) {
  refreshVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    refreshVoices();
    if (!$("#app").classList.contains("hidden")) {
      const panel = $("#detailPanel");
      if (panel?.innerHTML) renderDictionary(activeWordId);
    }
  };
}

async function boot() {
  let hasSupabaseSession = false;
  if (supabaseClient) {
    const { data } = await supabaseClient.auth.getSession();
    if (data?.session?.user?.email) {
      authMode = "supabase";
      hasSupabaseSession = true;
      user = accountNameFromEmail(data.session.user.email);
      localStorage.setItem("wordforge-user", user);
    } else {
      localStorage.removeItem("wordforge-user");
      user = "";
    }
  }
  if (user && ((supabaseClient && hasSupabaseSession) || (!supabaseClient && AUTH[user]))) {
    loadState();
    $("#login").classList.add("hidden");
    $("#app").classList.remove("hidden");
    renderAll();
    const requestedView = new URLSearchParams(location.search).get("view");
    if (requestedView && document.getElementById(requestedView)) switchView(requestedView);
  }
}

boot();
