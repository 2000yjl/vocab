const LANGUAGE_META = {
  en: { name: "English", native: "英语", locale: "en-US" },
  ko: { name: "Korean", native: "韩语", locale: "ko-KR" },
  ja: { name: "Japanese", native: "日语", locale: "ja-JP" },
  de: { name: "German", native: "德语", locale: "de-DE" },
  es: { name: "Spanish", native: "西班牙语", locale: "es-ES" },
  fr: { name: "French", native: "法语", locale: "fr-FR" }
};
const LANGUAGE_PACKS = [
  { lang: "ko", title: "韩语零基础", desc: "从韩文字母、收音和日常短句开始。", words: [
    ["안녕하세요", "你好", "an-nyeong-ha-se-yo", "안녕하세요, 처음 뵙겠습니다.", "你好，初次见面。"],
    ["감사합니다", "谢谢", "gam-sa-ham-ni-da", "도와주셔서 감사합니다.", "谢谢你的帮助。"],
    ["괜찮아요", "没关系/可以", "gwaen-chan-a-yo", "저는 괜찮아요.", "我没关系。"],
    ["주세요", "请给我", "ju-se-yo", "물 주세요.", "请给我水。"],
    ["어디예요", "在哪里", "eo-di-ye-yo", "화장실이 어디예요?", "洗手间在哪里？"]
  ]},
  { lang: "ja", title: "日语零基础", desc: "从常用问候、假名感和生活句子开始。", words: [
    ["こんにちは", "你好", "konnichiwa", "こんにちは、よろしくお願いします。", "你好，请多关照。"],
    ["ありがとう", "谢谢", "arigatou", "手伝ってくれてありがとう。", "谢谢你帮我。"],
    ["すみません", "不好意思/对不起", "sumimasen", "すみません、駅はどこですか。", "不好意思，车站在哪里？"],
    ["お願いします", "拜托/请", "onegaishimasu", "これをお願いします。", "请给我这个。"],
    ["大丈夫", "没关系/可以", "daijoubu", "私は大丈夫です。", "我没关系。"]
  ]},
  { lang: "de", title: "德语零基础", desc: "从发音规则、名词性别和基础句型开始。", words: [
    ["Hallo", "你好", "ha-lo", "Hallo, ich heiße Tom.", "你好，我叫 Tom。"],
    ["Danke", "谢谢", "dan-ke", "Danke für Ihre Hilfe.", "谢谢您的帮助。"],
    ["bitte", "请/不客气", "bi-te", "Ein Wasser, bitte.", "请给我一瓶水。"],
    ["Entschuldigung", "对不起/打扰一下", "ent-shul-di-gung", "Entschuldigung, wo ist der Bahnhof?", "打扰一下，火车站在哪里？"],
    ["lernen", "学习", "ler-nen", "Ich lerne jeden Tag Deutsch.", "我每天学习德语。"]
  ]},
  { lang: "es", title: "西班牙语零基础", desc: "从重音、性数和高频动词块开始。", words: [
    ["hola", "你好", "o-la", "Hola, ¿cómo estás?", "你好，你怎么样？"],
    ["gracias", "谢谢", "gra-sias", "Gracias por tu ayuda.", "谢谢你的帮助。"],
    ["quiero", "我想要", "kie-ro", "Quiero un café.", "我想要一杯咖啡。"],
    ["necesito", "我需要", "ne-se-si-to", "Necesito estudiar hoy.", "我今天需要学习。"],
    ["¿cuánto cuesta?", "多少钱", "kwan-to kwes-ta", "¿Cuánto cuesta este libro?", "这本书多少钱？"]
  ]},
  { lang: "fr", title: "法语零基础", desc: "从法语发音、连读和生活表达开始。", words: [
    ["bonjour", "你好", "bon-jour", "Bonjour, je voudrais un café.", "你好，我想要一杯咖啡。"],
    ["merci", "谢谢", "mer-si", "Merci beaucoup pour votre aide.", "非常感谢您的帮助。"],
    ["s'il vous plaît", "请", "sil-vu-ple", "Un billet, s'il vous plaît.", "请给我一张票。"],
    ["excusez-moi", "打扰一下/对不起", "ex-ku-ze-mwa", "Excusez-moi, où est la gare?", "打扰一下，火车站在哪里？"],
    ["je comprends", "我明白", "zhe kom-pron", "Je comprends cette phrase.", "我明白这个句子。"]
  ]}
];
const EXTRA_LANGUAGE_WORDS = {
  ko: [
    ["네", "是/好的", "ne", "네, 알겠습니다.", "好的，我明白了。"],
    ["아니요", "不是/不用", "a-ni-yo", "아니요, 괜찮습니다.", "不用了，没关系。"],
    ["좋아요", "好/喜欢", "jo-a-yo", "이 방법이 좋아요.", "这个方法很好。"],
    ["몰라요", "不知道", "mol-la-yo", "저는 아직 몰라요.", "我还不知道。"],
    ["천천히", "慢慢地", "cheon-cheon-hi", "천천히 말해 주세요.", "请慢一点说。"],
    ["다시", "再一次", "da-si", "다시 한 번 말해 주세요.", "请再说一遍。"],
    ["오늘", "今天", "o-neul", "오늘 공부할 거예요.", "我今天要学习。"],
    ["내일", "明天", "nae-il", "내일 다시 만나요.", "明天再见。"],
    ["친구", "朋友", "chin-gu", "친구와 같이 공부해요.", "我和朋友一起学习。"],
    ["시간", "时间", "si-gan", "시간이 조금 있어요.", "我有一点时间。"]
  ],
  ja: [
    ["はい", "是/好的", "hai", "はい、分かりました。", "好的，我明白了。"],
    ["いいえ", "不是/不用", "iie", "いいえ、大丈夫です。", "不用，没关系。"],
    ["分かります", "明白", "wakarimasu", "この文は分かります。", "我明白这个句子。"],
    ["分かりません", "不明白", "wakarimasen", "すみません、分かりません。", "不好意思，我不明白。"],
    ["もう一度", "再一次", "mou ichido", "もう一度お願いします。", "请再来一次。"],
    ["ゆっくり", "慢慢地", "yukkuri", "ゆっくり話してください。", "请慢慢说。"],
    ["今日", "今天", "kyou", "今日は日本語を勉強します。", "今天我学习日语。"],
    ["明日", "明天", "ashita", "明日また来ます。", "明天我还会来。"],
    ["友達", "朋友", "tomodachi", "友達と駅で会います。", "我和朋友在车站见面。"],
    ["時間", "时间", "jikan", "少し時間があります。", "我有一点时间。"]
  ],
  de: [
    ["ja", "是", "ya", "Ja, das stimmt.", "是的，那是对的。"],
    ["nein", "不", "nain", "Nein, das brauche ich nicht.", "不，我不需要那个。"],
    ["heute", "今天", "hoy-te", "Heute lerne ich neue Wörter.", "今天我学习新单词。"],
    ["morgen", "明天", "mor-gen", "Morgen habe ich Zeit.", "明天我有时间。"],
    ["sprechen", "说话", "shpre-chen", "Können Sie langsamer sprechen?", "您能说慢一点吗？"],
    ["verstehen", "理解", "fer-shte-en", "Ich verstehe die Frage.", "我理解这个问题。"],
    ["wichtig", "重要的", "vich-tig", "Diese Information ist wichtig.", "这个信息很重要。"],
    ["einfach", "简单的", "ain-fach", "Die Lösung ist einfach.", "这个解决办法很简单。"],
    ["schwierig", "困难的", "shvee-rig", "Deutsch ist manchmal schwierig.", "德语有时候很难。"],
    ["zusammen", "一起", "tsu-za-men", "Wir lernen zusammen.", "我们一起学习。"]
  ],
  es: [
    ["sí", "是", "si", "Sí, entiendo.", "是的，我明白。"],
    ["no", "不", "no", "No necesito ayuda ahora.", "我现在不需要帮助。"],
    ["hoy", "今天", "oy", "Hoy estudio español.", "今天我学习西班牙语。"],
    ["mañana", "明天", "ma-nya-na", "Mañana tengo tiempo.", "明天我有时间。"],
    ["hablar", "说话", "a-blar", "¿Puede hablar más despacio?", "您可以说慢一点吗？"],
    ["entender", "理解", "en-ten-der", "Entiendo esta frase.", "我理解这个句子。"],
    ["importante", "重要的", "im-por-tan-te", "Esta reunión es importante.", "这次会议很重要。"],
    ["fácil", "简单的", "fa-sil", "La respuesta es fácil.", "答案很简单。"],
    ["difícil", "困难的", "di-fi-sil", "Este tema es difícil.", "这个主题很难。"],
    ["juntos", "一起", "hun-tos", "Estudiamos juntos.", "我们一起学习。"]
  ],
  fr: [
    ["oui", "是", "wi", "Oui, je comprends.", "是的，我明白。"],
    ["non", "不", "non", "Non, merci.", "不用，谢谢。"],
    ["aujourd'hui", "今天", "o-zhoor-dwee", "Aujourd'hui, j'apprends le français.", "今天我学习法语。"],
    ["demain", "明天", "de-man", "Demain, j'ai du temps.", "明天我有时间。"],
    ["parler", "说话", "par-le", "Pouvez-vous parler plus lentement?", "您可以说慢一点吗？"],
    ["comprendre", "理解", "kom-prondr", "Je peux comprendre cette phrase.", "我能理解这个句子。"],
    ["important", "重要的", "an-por-tan", "Ce détail est important.", "这个细节很重要。"],
    ["facile", "简单的", "fa-sil", "La question est facile.", "这个问题很简单。"],
    ["difficile", "困难的", "di-fi-sil", "La prononciation est difficile.", "发音很难。"],
    ["ensemble", "一起", "on-sombl", "Nous apprenons ensemble.", "我们一起学习。"]
  ]
};
LANGUAGE_PACKS.forEach((pack) => {
  pack.words.push(...(EXTRA_LANGUAGE_WORDS[pack.lang] || []));
});
const languageDecks = LANGUAGE_PACKS.map((pack) => ({
  id: `${pack.lang}-basic`,
  language: pack.lang,
  order: LANGUAGE_META[pack.lang].name,
  title: pack.title,
  desc: pack.desc
}));
const newsDeck = {
  id: "en-news",
  language: "en",
  order: "News English",
  title: "新闻英语表达",
  desc: "从真实新闻主题里学习政策、经济、科技和社会表达。"
};
const baseDecks = (window.WORDFORGE_DECKS || []).map((deck) => ({ ...deck, language: "en" }));
const decks = [...baseDecks, newsDeck, ...languageDecks];
const multiEntries = LANGUAGE_PACKS.flatMap((pack, packIndex) => pack.words.map(([word, cn, pronunciation, example, exampleZh], index) => ({
  id: 900000 + packIndex * 100 + index,
  word,
  cn,
  phonetic: pronunciation,
  deckId: `${pack.lang}-basic`,
  deckTitle: pack.title,
  language: pack.lang,
  locale: LANGUAGE_META[pack.lang].locale,
  type: "headword",
  index,
  family: [],
  morphemes: [{ part: word, role: "基础表达", meaning: "先掌握发音、意思和使用场景" }],
  meanings: [{ cn, example, exampleZh }],
  memory: `先听发音，再把“${cn}”放进例句里说一遍。`
})));
const newsEntries = [
  {
    word: "emissions",
    cn: "排放物；排放量",
    phonetic: "/iˈmɪʃənz/",
    example: "The policy debate focused on whether companies should reduce greenhouse gas emissions faster.",
    exampleZh: "这场政策争论的焦点是企业是否应该更快减少温室气体排放。",
    source: "AP News, May 21, 2026, refrigerant rule coverage",
    sourceUrl: "https://apnews.com/article/refrigerants-epa-hfc-air-conditioners-trump-eb0ffc23a65b42171d834c3700585123",
    morphemes: [
      { part: "e-/ex-", role: "前缀", meaning: "out 向外" },
      { part: "mit/miss", role: "词根", meaning: "send 送出" },
      { part: "-ion", role: "后缀", meaning: "动作/结果" }
    ],
    memory: "emissions 就是被“送出去”的东西，在新闻里常指污染或碳排放。"
  },
  {
    word: "regulation",
    cn: "规定；监管",
    phonetic: "/ˌreɡjəˈleɪʃən/",
    example: "Businesses said the new regulation would affect equipment costs and long-term planning.",
    exampleZh: "企业表示，新规定会影响设备成本和长期规划。",
    source: "AP News, May 21, 2026, refrigerant rule coverage",
    sourceUrl: "https://apnews.com/article/refrigerants-epa-hfc-air-conditioners-trump-eb0ffc23a65b42171d834c3700585123",
    morphemes: [
      { part: "regul", role: "词根", meaning: "rule 规则/管理" },
      { part: "-ation", role: "后缀", meaning: "行为/结果" }
    ],
    memory: "regulation 的核心是 rule，不只是“规则”，还常表示政府或行业监管。"
  },
  {
    word: "heritage",
    cn: "遗产；传统",
    phonetic: "/ˈherɪtɪdʒ/",
    example: "For many families, a name can carry heritage, pride and a personal story.",
    exampleZh: "对许多家庭来说，一个名字可以承载传统、自豪感和个人故事。",
    source: "AP News, May 2026, Zimbabwe English names feature",
    sourceUrl: "https://apnews.com/article/zimbabwe-english-names-history-culture-africa-26af7cbbd145daec6948ab5d0c36696b",
    morphemes: [
      { part: "herit", role: "词根", meaning: "inherit 继承" },
      { part: "-age", role: "后缀", meaning: "集合/状态" }
    ],
    memory: "heritage 不是简单的 old things，而是被继承下来的文化、身份和记忆。"
  },
  {
    word: "moderate",
    cn: "温和派；适度的",
    phonetic: "/ˈmɑːdərət/",
    example: "Moderate voters often look for practical policies rather than dramatic promises.",
    exampleZh: "温和派选民通常寻找务实政策，而不是夸张承诺。",
    source: "AP News, March 2026, political moderation coverage",
    sourceUrl: "https://apnews.com/article/2026-2028-election-progressive-moderate-0a8db97aff5e49c22625c2f0d7036fcf",
    morphemes: [
      { part: "mod", role: "词根", meaning: "measure 度量/限度" },
      { part: "-ate", role: "后缀", meaning: "使成为/具有" }
    ],
    memory: "moderate 的感觉是“有分寸”，政治新闻里常指不走极端的人或立场。"
  }
].map((entry, index) => ({
  id: 910000 + index,
  ...entry,
  deckId: "en-news",
  deckTitle: "新闻英语表达",
  language: "en",
  locale: "en-US",
  type: "headword",
  index,
  family: [],
  meanings: [{ cn: entry.cn, example: entry.example, exampleZh: entry.exampleZh }]
}));
const allEntries = [
  ...(window.WORDFORGE_WORDS || []).map((word) => ({ ...word, language: "en", locale: "en-US" })),
  ...newsEntries,
  ...multiEntries
];
const allWords = allEntries.filter((word) => word.type === "headword");
const learnableEntries = allEntries.filter((word) => word.type === "headword" || word.type === "derived");
const STORAGE_KEY = "wordforge-clean-state-v1";
const DAILY_GOAL = 20;
const BOX_INTERVALS = [0, 1, 3, 7, 14, 30, 60];
const PETS = [
  { id: "orange", name: "大橘", image: "./orange.png", mood: "今天稳一点，少量多次最有效。" },
  { id: "tabby", name: "狸花", image: "./tabby.png", mood: "错词不是敌人，是经验包。" },
  { id: "silver", name: "美短", image: "./silver.png", mood: "认识就放远一点，不认识就多见几次。" },
  { id: "blackcat", name: "黑猫学霸", image: "./blackcat.png", mood: "别硬背，先抓住例句里的感觉。" },
  { id: "corgi", name: "单词柯基", image: "./corgi.png", mood: "汪，完成一张卡就算往前走。" }
];

let state = loadState();
let activeLanguage = state.activeLanguage || "en";
let activeDeck = state.activeDeck || decks.find((deck) => deck.language === activeLanguage && deckWords(deck.id).length)?.id || decks[0]?.id;
let activeView = "dashboard";
let currentWord = null;
let quizWord = null;
let quizMode = "choice";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function loadState() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  saved.words ||= {};
  saved.favorite ||= {};
  saved.activeLanguage ||= "en";
  saved.pet ||= PETS[0].id;
  saved.daily ||= { date: todayKey(), done: 0 };
  saved.streak ||= { last: "", count: 0 };
  if (saved.daily.date !== todayKey()) saved.daily = { date: todayKey(), done: 0 };
  return saved;
}

function saveState() {
  state.activeLanguage = activeLanguage;
  state.activeDeck = activeDeck;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderDashboard();
}

function deckWords(deckId = activeDeck) {
  return allWords.filter((word) => word.deckId === deckId);
}

function languageDeckOptions(lang = activeLanguage) {
  return decks.filter((deck) => deck.language === lang && deckWords(deck.id).length);
}

function activeLanguageWords() {
  return allWords.filter((word) => word.language === activeLanguage);
}

function wordState(word) {
  state.words[word.id] ||= { box: 0, right: 0, wrong: 0, due: "", lastSeen: "", mastered: false };
  return state.words[word.id];
}

function isDue(word) {
  const s = wordState(word);
  return !!s.lastSeen && s.due <= todayKey() && !s.mastered;
}

function priorityScore(word) {
  const s = wordState(word);
  let score = 0;
  if (isDue(word)) score += 100;
  score += s.wrong * 16;
  score -= s.box * 10;
  if (!s.lastSeen) score += 32;
  if (s.mastered) score -= 200;
  return score;
}

function learningQueue() {
  return deckWords()
    .slice()
    .sort((a, b) => priorityScore(b) - priorityScore(a) || a.index - b.index);
}

function dueWords() {
  return learnableEntries.filter((word) => word.language === activeLanguage && isDue(word)).sort((a, b) => priorityScore(b) - priorityScore(a));
}

function mistakeWords() {
  return learnableEntries
    .filter((word) => word.language === activeLanguage && (wordState(word).wrong || 0) > 0)
    .sort((a, b) => wordState(b).wrong - wordState(a).wrong || (wordState(a).lastSeen || "").localeCompare(wordState(b).lastSeen || ""));
}

function masteredWords() {
  return activeLanguageWords().filter((word) => wordState(word).mastered || wordState(word).box >= 5);
}

function findEntryByText(text) {
  return allEntries.find((word) => normalize(word.word) === normalize(text));
}

function currentPet() {
  return PETS.find((pet) => pet.id === state.pet) || PETS[0];
}

function markDailyActivity() {
  const today = todayKey();
  if (state.streak.last !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toISOString().slice(0, 10);
    state.streak.count = state.streak.last === yesterdayKey ? (state.streak.count || 0) + 1 : 1;
    state.streak.last = today;
  }
}

function markWord(word, known) {
  const s = wordState(word);
  s.lastSeen = todayKey();
  markDailyActivity();
  if (known) {
    s.right += 1;
    s.box = Math.min(BOX_INTERVALS.length - 1, s.box + 1);
    s.mastered = s.box >= 5;
    s.due = addDays(BOX_INTERVALS[s.box]);
    state.daily.done = Math.min(DAILY_GOAL, (state.daily.done || 0) + 1);
  } else {
    s.wrong += 1;
    s.box = 0;
    s.mastered = false;
    s.due = todayKey();
    state.daily.done = Math.min(DAILY_GOAL, (state.daily.done || 0) + 1);
  }
  saveState();
}

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function normalize(value) {
  return String(value || "").trim().toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, " ");
}

function firstMeaning(word) {
  const meaning = word.meanings?.[0] || { cn: word.cn, example: word.example || "" };
  return { ...meaning, exampleZh: meaning.exampleZh || meaning.cn || word.cn };
}

function difficultyLabel(word) {
  const s = wordState(word);
  if (s.wrong >= 3) return "重点复习";
  if (s.box >= 4) return "接近掌握";
  if (s.box >= 2) return "熟悉中";
  return "新词";
}

function memoryTip(word) {
  const special = {
    abandon: "它不只是“放弃”，更像把人或东西丢下不管，带有“抛弃、遗弃”的情绪。",
    achieve: "achieve 是进度条到 100%，不是想做，而是真的完成目标。",
    alternative: "alternative 就是 Plan B，主方案不行时立刻登场。",
    deadline: "deadline 是死线，线没到，人已经开始冲刺。"
  };
  return special[word.word] || word.memory || "把这个词放进一个具体场景里，再用自己的话说一遍。";
}

function renderDashboard() {
  const lang = LANGUAGE_META[activeLanguage] || LANGUAGE_META.en;
  $("#streakDays").textContent = state.streak.count || 0;
  $("#masteredCount").textContent = masteredWords().length;
  $("#dueCount").textContent = dueWords().length;
  $("#mistakeCount").textContent = mistakeWords().length;
  const progress = Math.round(((state.daily.done || 0) / DAILY_GOAL) * 100);
  $("#todayProgress").textContent = `${Math.min(100, progress)}%`;
  $("#todayHeadline").textContent = dueWords().length
    ? `先复习 ${Math.min(dueWords().length, DAILY_GOAL)} 个到期词`
    : "今天可以学习一组新词";
  $("#todayHint").textContent = dueWords().length
    ? "系统会优先安排不认识和答错的词，已经掌握的词会延后出现。"
    : `${lang.native}当前没有大量堆叠任务，今天只要完成一小组就很好。`;
  renderDeckGrid();
  renderPetPanel();
}

function renderPetPanel() {
  let panel = $("#petPanel");
  if (!panel) {
    $("#dashboard .stat-grid").insertAdjacentHTML("afterend", `<section id="petPanel" class="pet-panel"></section>`);
    panel = $("#petPanel");
  }
  const pet = currentPet();
  const mood = dueWords().length ? "我把该复习的词放在前面了，不会让你乱刷。" : pet.mood;
  panel.innerHTML = `
    <img src="${pet.image}" alt="${pet.name}" />
    <div>
      <p class="eyebrow">成长伙伴</p>
      <h3>${pet.name}</h3>
      <p>${mood}</p>
      <div class="pet-switcher">
        ${PETS.map((item) => `<button class="${item.id === pet.id ? "active" : ""}" data-pet="${item.id}">${item.name}</button>`).join("")}
      </div>
    </div>
  `;
  panel.querySelectorAll("[data-pet]").forEach((button) => button.addEventListener("click", () => {
    state.pet = button.dataset.pet;
    saveState();
  }));
}

function renderDeckGrid() {
  $("#deckGrid").innerHTML = languageDeckOptions()
    .map((deck) => {
      const words = deckWords(deck.id);
      const done = words.filter((word) => wordState(word).mastered || wordState(word).box >= 3).length;
      const pct = Math.round((done / words.length) * 100);
      return `<button class="deck-card ${deck.id === activeDeck ? "active" : ""}" data-deck="${deck.id}">
        <span>${escapeHtml(deck.order)}</span>
        <h4>${escapeHtml(deck.title)}</h4>
        <p>${escapeHtml(deck.desc)}</p>
        <div class="mini-progress"><i style="width:${pct}%"></i></div>
        <small>${words.length} 词 · 熟悉 ${pct}%</small>
      </button>`;
    }).join("");
  $$(".deck-card").forEach((button) => button.addEventListener("click", () => {
    activeDeck = button.dataset.deck;
    saveState();
    startLearning();
  }));
}

function renderWordCard(word) {
  if (!word) return;
  currentWord = word;
  const meaning = firstMeaning(word);
  const favorited = state.favorite[word.id];
  const parent = word.parent ? findEntryByText(word.parent) : null;
  const related = (word.family || []).map(findEntryByText).filter(Boolean).slice(0, 8);
  const morphemes = (word.morphemes || []).slice(0, 4);
  const isEnglish = word.language === "en";
  const soundButtons = isEnglish
    ? `<button class="ghost sound-btn" data-speak="en-US">美音</button><button class="ghost sound-btn" data-speak="en-GB">英音</button>`
    : `<button class="ghost sound-btn" data-speak="${escapeHtml(word.locale || LANGUAGE_META[word.language]?.locale || "en-US")}">发音</button>`;
  $("#wordCard").classList.remove("flip-in");
  void $("#wordCard").offsetWidth;
  $("#wordCard").classList.add("flip-in");
  $("#wordCard").innerHTML = `
    <div class="card-top">
      <span class="tag">${difficultyLabel(word)}</span>
      <button class="icon-btn ${favorited ? "active" : ""}" id="toggleFavorite" title="收藏">★</button>
    </div>
    <h2>${escapeHtml(word.word)}</h2>
    <div class="sound-line">
      <p class="phonetic">${escapeHtml(word.phonetic || (isEnglish ? "音标加载中" : ""))}</p>
      ${soundButtons}
    </div>
    <p class="meaning">${escapeHtml(word.cn)}</p>
    <div class="example">
      <p>${escapeHtml(meaning.example || word.example || "Review this word in a clear sentence.")}</p>
      <span>${escapeHtml(meaning.exampleZh || meaning.cn || word.cn)}</span>
      ${word.source ? `<small class="source-line">来源主题：<a href="${escapeHtml(word.sourceUrl || "#")}" target="_blank" rel="noreferrer">${escapeHtml(word.source)}</a></small>` : ""}
    </div>
    <div class="memory-tip">
      <b>记忆提示</b>
      <span>${escapeHtml(memoryTip(word))}</span>
    </div>
    ${morphemes.length ? `<div class="word-section"><b>词根 / 构词</b><div class="morpheme-row">${morphemes.map((item) => `<span><strong>${escapeHtml(item.part)}</strong>${escapeHtml(item.role)} · ${escapeHtml(item.meaning)}</span>`).join("")}</div></div>` : ""}
    ${(related.length || parent) ? `<div class="word-section"><b>${parent ? "衍生词学习" : "延伸相关词"}</b><div class="related-row">
      ${parent ? `<button class="primary mini" data-open-entry="${parent.id}">返回主词：${escapeHtml(parent.word)}</button>` : ""}
      ${related.map((item) => `<button class="ghost mini" data-open-entry="${item.id}">${escapeHtml(item.word)}</button>`).join("")}
    </div></div>` : ""}
    <div class="learn-actions">
      <button class="ghost" id="unknownBtn">不认识</button>
      <button class="primary" id="knownBtn">认识</button>
    </div>
  `;
  $("#toggleFavorite").addEventListener("click", () => {
    state.favorite[word.id] = !state.favorite[word.id];
    saveState();
    renderWordCard(word);
  });
  $$(".sound-btn").forEach((button) => button.addEventListener("click", () => speakWord(word.word, button.dataset.speak)));
  $$("[data-open-entry]").forEach((button) => button.addEventListener("click", () => renderWordCard(allEntries.find((item) => item.id === Number(button.dataset.openEntry)))));
  $("#unknownBtn").addEventListener("click", () => {
    markWord(word, false);
    showNextWord();
  });
  $("#knownBtn").addEventListener("click", () => {
    markWord(word, true);
    showNextWord();
  });
  hydratePhonetic(word);
}

async function hydratePhonetic(word) {
  if (word.language !== "en") return;
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.word)}`);
    if (!response.ok) return;
    const entry = (await response.json())?.[0];
    const phonetic = entry?.phonetic || entry?.phonetics?.find((item) => item.text)?.text;
    if (phonetic && currentWord?.id === word.id) $(".phonetic").textContent = phonetic;
  } catch {}
}

async function speakWord(text, locale) {
  if (/^en-/i.test(locale)) {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(text)}`);
      if (response.ok) {
        const entry = (await response.json())?.[0];
        const audio = entry?.phonetics?.find((item) => locale === "en-GB" ? /uk|gb/i.test(item.audio || "") : /us/i.test(item.audio || ""))?.audio
          || entry?.phonetics?.find((item) => item.audio)?.audio;
        if (audio) {
          new Audio(audio).play();
          return;
        }
      }
    } catch {}
  }
  if (!("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = locale;
  utterance.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function showNextWord() {
  renderWordCard(learningQueue()[0] || deckWords()[0]);
  renderLearnPanel();
}

function renderLearnPanel() {
  const queue = learningQueue();
  const due = queue.filter(isDue).length;
  $("#learnQueueTitle").textContent = due ? `${due} 个词优先复习` : "学习一组新词";
  $("#learnQueueHint").textContent = "不认识的词会马上进入复习队列；已经掌握的词会隔几天再出现。";
  $("#learnProgressBar").style.width = `${Math.min(100, Math.round(((state.daily.done || 0) / DAILY_GOAL) * 100))}%`;
}

function startLearning() {
  switchView("learn");
  showNextWord();
}

function quizPool() {
  const due = dueWords();
  if (due.length) return due;
  return activeLanguageWords().slice().sort((a, b) => priorityScore(b) - priorityScore(a)).slice(0, 120);
}

function makeChoices(word) {
  const choices = [word.cn];
  const pool = activeLanguageWords().filter((item) => item.id !== word.id).sort(() => Math.random() - 0.5);
  for (const item of pool) {
    if (choices.length >= 4) break;
    if (!choices.includes(item.cn)) choices.push(item.cn);
  }
  return choices.sort(() => Math.random() - 0.5);
}

function renderQuiz() {
  const pool = quizPool();
  quizWord = pool[Math.floor(Math.random() * pool.length)] || allWords[0];
  $("#quizFeedback").textContent = "";
  $("#quizFeedback").className = "feedback";
  $("#quizModeLabel").textContent = quizMode === "choice" ? "选择题" : "拼写题";
  $("#toggleQuizMode").textContent = quizMode === "choice" ? "切换拼写题" : "切换选择题";
  $("#quizPrompt").textContent = quizMode === "choice" ? quizWord.word : quizWord.cn;
  $("#spellInput").classList.toggle("hidden", quizMode !== "spell");
  $("#spellInput").value = "";
  $("#quizOptions").classList.toggle("hidden", quizMode !== "choice");
  $("#quizOptions").innerHTML = quizMode === "choice"
    ? makeChoices(quizWord).map((choice) => `<button data-choice="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join("")
    : "";
  $$("#quizOptions button").forEach((button) => button.addEventListener("click", () => checkQuiz(button.dataset.choice)));
}

function checkQuiz(answer) {
  const ok = quizMode === "choice" ? answer === quizWord.cn : normalize(answer) === normalize(quizWord.word);
  markWord(quizWord, ok);
  $("#quizFeedback").textContent = ok
    ? "答对了，很稳。这个词会晚一点再来找你。"
    : `没关系，正确答案是 ${quizWord.word}：${quizWord.cn}。它会优先进入复习。`;
  $("#quizFeedback").classList.toggle("ok", ok);
  $("#quizFeedback").classList.toggle("bad", !ok);
}

function renderMistakes() {
  const list = mistakeWords();
  $("#mistakeList").innerHTML = list.length ? list.map((word) => {
    const s = wordState(word);
    return `<article class="mistake-card">
      <div>
        <h4>${escapeHtml(word.word)}</h4>
        <p>${escapeHtml(word.cn)}</p>
      </div>
      <span>错误 ${s.wrong} 次</span>
      <small>上次学习：${s.lastSeen || "还没有记录"}</small>
      <button class="ghost" data-review="${word.id}">重新复习</button>
    </article>`;
  }).join("") : `<div class="empty-state">暂时没有错词。很好，但别急着骄傲，复习会让它更稳。</div>`;
  $$("[data-review]").forEach((button) => button.addEventListener("click", () => {
    switchView("learn");
    renderWordCard(allEntries.find((word) => word.id === Number(button.dataset.review)));
  }));
}

function switchView(id) {
  activeView = id;
  $$(".nav-btn").forEach((button) => button.classList.toggle("active", button.dataset.view === id));
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === id));
  const titles = { dashboard: "Dashboard", learn: "单词学习", quiz: "小测验", mistakes: "错词本" };
  $("#pageTitle").textContent = titles[id];
  if (id === "dashboard") renderDashboard();
  if (id === "learn") showNextWord();
  if (id === "quiz") renderQuiz();
  if (id === "mistakes") renderMistakes();
}

function updateClock() {
  const now = new Date();
  $("#liveClock").textContent = now.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false });
  const hour = now.getHours();
  $("#timeMood").textContent = hour < 10 ? "清晨轻学" : hour < 15 ? "午间推进" : hour < 19 ? "傍晚复盘" : "夜晚慢读";
}

function renderSelectors() {
  $("#languageSelect").innerHTML = Object.entries(LANGUAGE_META)
    .map(([code, meta]) => `<option value="${code}">${escapeHtml(meta.native)} · ${escapeHtml(meta.name)}</option>`)
    .join("");
  $("#languageSelect").value = activeLanguage;
  const options = languageDeckOptions();
  if (!options.some((deck) => deck.id === activeDeck)) activeDeck = options[0]?.id || decks[0]?.id;
  $("#deckSelect").innerHTML = options
    .map((deck) => `<option value="${deck.id}">${escapeHtml(deck.title)}</option>`)
    .join("");
  $("#deckSelect").value = activeDeck;
}

function changeLanguage(lang) {
  activeLanguage = lang;
  activeDeck = languageDeckOptions(lang)[0]?.id || decks.find((deck) => deck.language === lang)?.id || decks[0]?.id;
  renderSelectors();
  saveState();
  if (activeView === "learn") showNextWord();
  if (activeView === "quiz") renderQuiz();
  if (activeView === "mistakes") renderMistakes();
}

function boot() {
  renderSelectors();
  $("#languageSelect").addEventListener("change", () => changeLanguage($("#languageSelect").value));
  $("#deckSelect").addEventListener("change", () => {
    activeDeck = $("#deckSelect").value;
    saveState();
    if (activeView === "learn") showNextWord();
  });
  $$(".nav-btn").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
  $("#startTodayBtn").addEventListener("click", startLearning);
  $("#favoriteBtn").addEventListener("click", () => currentWord && $("#toggleFavorite")?.click());
  $("#toggleQuizMode").addEventListener("click", () => {
    quizMode = quizMode === "choice" ? "spell" : "choice";
    renderQuiz();
  });
  $("#spellInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkQuiz($("#spellInput").value);
  });
  $("#nextQuizBtn").addEventListener("click", renderQuiz);
  updateClock();
  setInterval(updateClock, 1000);
  renderDashboard();
}

boot();
