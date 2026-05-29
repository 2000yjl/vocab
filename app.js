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
}

function saveState() {
  localStorage.setItem(stateKey(user), JSON.stringify(state));
  localStorage.setItem(`${stateKey(user)}-streak`, String(streak));
  renderStats();
  renderDailyPlan();
}

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function normalize(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, " ").trim();
}

function getWord(id) { return words.find((word) => word.id === Number(id)) || words[0]; }
function findWordByText(text) { return words.find((word) => normalize(word.word) === normalize(text)); }
function studyWords() { return words.filter((word) => word.type === "headword"); }
function deckWords(deckId = activeDeck) { return studyWords().filter((word) => word.deckId === deckId); }

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
  const known = list.filter((word) => (state[word.id]?.right || 0) >= 2).length;
  return Math.round((known / list.length) * 100);
}

function recommendedDeck() {
  return [...decks].sort((a, b) => deckProgress(a.id) - deckProgress(b.id))[0] || decks[0];
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
  $("#deckShelf").innerHTML = decks.map((deck) => {
    const total = deckWords(deck.id).length;
    const progress = deckProgress(deck.id);
    return `
      <button class="deck-cover" data-deck="${deck.id}" data-tone="${deck.tone}">
        <span class="book-tag">${escapeHtml(deck.order)}</span>
        <div>
          <h3>${escapeHtml(deck.title)}</h3>
          <p>${escapeHtml(deck.desc)}</p>
        </div>
        <div>
          <p>${total} 个主单词 · 掌握 ${progress}%</p>
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
  $("#deckFilter").innerHTML = `<option value="all">全部词典</option>${decks.map((deck) => `<option value="${deck.id}">${escapeHtml(deck.title)}</option>`).join("")}`;
  $("#deckFilter").value = activeDeck;
}

function openDeck(deckId) {
  activeDeck = deckId;
  readerIndex = 0;
  const first = sortedDeckWords(deckId)[0];
  activeWordId = first.id;
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

function speak(text, locale) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = locale;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.voice = bestVoice(locale);
  window.speechSynthesis.speak(utterance);
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
  const meaningRows = (word.meanings || [{ cn: word.cn, example: word.example }]).map((item, index) => `
    <div class="meaning-row">
      <b>${index + 1}. ${escapeHtml(item.cn)}</b>
      <p>${escapeHtml(item.example)}</p>
      <button class="ghost speak sentence-sound" type="button" data-locale="en-US" data-text="${escapeHtml(item.example)}">朗读例句</button>
    </div>
  `).join("");
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
  const rootNote = word.root !== "chunking" && rootExplanation(word.root)
    ? `<p><strong>${escapeHtml(word.root)}</strong>：${escapeHtml(rootExplanation(word.root))}</p>`
    : "";
  const memoryBody = `${morphemeRows ? `<div class="morpheme-list">${morphemeRows}</div>` : ""}${rootNote}<p>${escapeHtml(word.memory)}</p>`;
  return `
    <div class="word-head">
      <div>
        <div class="word-title">${escapeHtml(word.word)}</div>
        <div class="phonetic">${escapeHtml(word.phonetic)} · ${escapeHtml(word.cn)} · ${escapeHtml(word.deckTitle)}</div>
      </div>
      <div class="sound-row">
        <button class="ghost speak" data-locale="en-US" data-text="${escapeHtml(word.word)}">美音</button>
        <button class="ghost speak" data-locale="en-GB" data-text="${escapeHtml(word.word)}">英音</button>
      </div>
    </div>
    <div class="voice-note">${escapeHtml(voiceLabel("en-US"))} · ${escapeHtml(voiceLabel("en-GB"))}</div>
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
        <div class="meaning-list">${meaningRows}</div>
      </section>
      <section class="detail-box">
        <h4>衍生/相关词</h4>
        <p>${familyLinks || "暂无衍生词"}</p>
        <p>${parentLink}</p>
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
}

function renderReader() {
  const deck = decks.find((item) => item.id === activeDeck) || decks[0];
  const list = sortedDeckWords(activeDeck);
  const word = list[readerIndex] || list[0];
  activeWordId = word.id;
  $("#readerDeckTitle").textContent = deck.title;
  $("#readerDeckMeta").textContent = `${deck.desc} 当前 ${readerIndex + 1} / ${list.length}`;
  const page = $("#wordPage");
  page.classList.add("flip");
  setTimeout(() => {
    page.innerHTML = detailHtml(word);
    bindDetailLinks(page);
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
  return studyWords().filter((word) => {
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
  $$(".word-row").forEach((button) => button.addEventListener("click", () => renderDictionary(Number(button.dataset.wordId))));
}

function quizPool() {
  return [...studyWords()].sort((a, b) => wordScore(b) - wordScore(a));
}

function renderQuiz() {
  const pool = quizPool();
  const word = pool[quizIndex % pool.length];
  activeWordId = word.id;
  answerShown = false;
  $("#practiceMode").textContent = quizMode === "spell" ? "拼写输出" : "主动回忆";
  $("#quizPrompt").textContent = word.cn;
  $("#quizMeta").textContent = `${word.deckTitle} · 主单词`;
  $("#quizAnswer").innerHTML = detailHtml(word);
  bindDetailLinks($("#quizAnswer"));
  $("#quizAnswer").classList.add("hidden");
  $("#spellInput").classList.toggle("hidden", quizMode !== "spell");
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
  streak = ok ? streak + 1 : 0;
  quizIndex++;
  saveState();
  renderQuiz();
}

function checkSpell() {
  const word = getWord(activeWordId);
  const ok = normalize($("#spellInput").value) === normalize(word.word);
  $("#practiceFeedback").textContent = ok ? "正确。现在听一遍再读一遍。" : `答案：${word.word}`;
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
