const DEFAULT_AUTH = {
  teacher: "123456",
  ...Object.fromEntries(Array.from({ length: 300 }, (_, i) => [String(i + 1).padStart(3, "0"), "123456"]))
};

let AUTH = loadAuth();
let user = localStorage.getItem("wordforge-user") || "";
let state = {};
let activeDeck = "cet4";
let activeWordId = 1;
let readerIndex = 0;
let quizIndex = 0;
let quizMode = "recall";
let answerShown = false;
let streak = 0;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const decks = window.WORDFORGE_DECKS || [];
const words = window.WORDFORGE_WORDS || [];
const roots = window.WORDFORGE_ROOTS || [];

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

function stateKey(name) { return `wordforge-state-${name}`; }

function loadState() {
  state = JSON.parse(localStorage.getItem(stateKey(user)) || "{}");
  streak = Number(localStorage.getItem(`${stateKey(user)}-streak`) || 0);
}

function saveState() {
  localStorage.setItem(stateKey(user), JSON.stringify(state));
  localStorage.setItem(`${stateKey(user)}-streak`, String(streak));
  renderStats();
}

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function normalize(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, " ").trim();
}

function getWord(id) { return words.find((word) => word.id === Number(id)) || words[0]; }
function findWordByText(text) { return words.find((word) => normalize(word.word) === normalize(text)); }
function deckWords(deckId = activeDeck) { return words.filter((word) => word.deckId === deckId); }

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

function login(name, pass) {
  if (!AUTH[name] || AUTH[name] !== pass) return false;
  user = name;
  localStorage.setItem("wordforge-user", user);
  loadState();
  $("#login").classList.add("hidden");
  $("#app").classList.remove("hidden");
  renderAll();
  return true;
}

function renderStats() {
  $("#totalCount").textContent = words.length;
  $("#knownCount").textContent = words.filter((word) => (state[word.id]?.right || 0) >= 2).length;
  $("#dueCount").textContent = words.filter((word) => (state[word.id]?.wrong || 0) > (state[word.id]?.right || 0)).length;
  $("#streakCount").textContent = streak;
}

function renderShelf() {
  $("#deckShelf").innerHTML = decks.map((deck) => {
    const total = deckWords(deck.id).length;
    return `
      <button class="deck-cover" data-deck="${deck.id}" data-tone="${deck.tone}">
        <span class="book-tag">${escapeHtml(deck.order)}</span>
        <div>
          <h3>${escapeHtml(deck.title)}</h3>
          <p>${escapeHtml(deck.desc)}</p>
        </div>
        <p>${total} 个词条 · 点击翻开</p>
      </button>
    `;
  }).join("");
  $$(".deck-cover").forEach((button) => {
    button.addEventListener("click", () => openDeck(button.dataset.deck));
  });
}

function renderDeckFilter() {
  $("#deckFilter").innerHTML = `<option value="all">全部词典</option>${decks.map((deck) => `<option value="${deck.id}">${escapeHtml(deck.title)}</option>`).join("")}`;
}

function openDeck(deckId) {
  activeDeck = deckId;
  readerIndex = 0;
  const first = sortedDeckWords(deckId)[0];
  activeWordId = first.id;
  switchView("reader");
  renderReader();
}

function speak(text, locale) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = locale;
  utterance.rate = 0.86;
  const voices = window.speechSynthesis.getVoices();
  utterance.voice = voices.find((voice) => voice.lang === locale) || voices.find((voice) => voice.lang.startsWith(locale.slice(0, 2))) || null;
  window.speechSynthesis.speak(utterance);
}

function rootExplanation(rootName) {
  const found = roots.find((root) => root.root === rootName);
  return found ? `${found.meaning}。${found.method}` : "用拆音节、场景句和同类词一起记。";
}

function detailHtml(word) {
  const familyLinks = word.family.map((item) => {
    const target = findWordByText(item);
    const attr = target ? `data-word-id="${target.id}"` : "";
    return `<button class="link-chip" ${attr}>${escapeHtml(item)}</button>`;
  }).join("");
  const parentLink = word.parent ? `<button class="link-chip" data-word-id="${findWordByText(word.parent)?.id || ""}">核心词：${escapeHtml(word.parent)}</button>` : "";
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
    <div class="detail-grid">
      <section class="detail-box">
        <h4>词根/构词</h4>
        <p><strong>${escapeHtml(word.root)}</strong>：${escapeHtml(rootExplanation(word.root))}</p>
        <p>${escapeHtml(word.memory)}</p>
      </section>
      <section class="detail-box">
        <h4>范例短语</h4>
        <div class="phrase-list">${word.phrases.map((phrase) => `<div class="phrase">${escapeHtml(phrase)}</div>`).join("")}</div>
      </section>
      <section class="detail-box">
        <h4>例句</h4>
        <p>${escapeHtml(word.example)}</p>
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
  switchView("dictionary");
  renderDictionary(word.id);
}

function filteredWords() {
  const deck = $("#deckFilter").value;
  const q = normalize($("#searchBox").value);
  return words.filter((word) => {
    const inDeck = deck === "all" || word.deckId === deck;
    const hay = normalize(`${word.word} ${word.cn} ${word.root} ${word.phrases.join(" ")} ${word.family.join(" ")}`);
    return inDeck && (!q || hay.includes(q));
  });
}

function renderDictionary(selectedId = activeWordId) {
  const list = filteredWords();
  const selected = list.find((word) => word.id === selectedId) || list[0] || words[0];
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
  return [...words].sort((a, b) => wordScore(b) - wordScore(a));
}

function renderQuiz() {
  const word = quizPool()[quizIndex % words.length];
  activeWordId = word.id;
  answerShown = false;
  $("#practiceMode").textContent = quizMode === "spell" ? "拼写输出" : "主动回忆";
  $("#quizPrompt").textContent = word.cn;
  $("#quizMeta").textContent = `${word.deckTitle} · ${word.root} · ${word.type === "derived" ? "派生词" : "核心词"}`;
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

function saveAccountSettings() {
  const currentPassword = $("#currentPassword").value.trim();
  const nextName = $("#newUsername").value.trim();
  const nextPassword = $("#newPassword").value.trim();
  const feedback = $("#accountFeedback");
  feedback.className = "feedback";
  if (AUTH[user] !== currentPassword) {
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
  const nextAuth = { ...AUTH };
  delete nextAuth[user];
  nextAuth[nextName] = nextPassword;
  user = nextName;
  localStorage.setItem("wordforge-user", user);
  saveCustomAuth(nextAuth);
  feedback.textContent = "已保存。本机浏览器下次请用新账号和新密码登录。";
  feedback.classList.add("ok");
  showSettings();
}

function renderAll() {
  renderStats();
  renderShelf();
  renderDeckFilter();
  renderDictionary();
  renderReader();
  renderQuiz();
}

$("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const ok = login($("#username").value.trim(), $("#password").value.trim());
  $("#loginError").textContent = ok ? "" : "账号或密码不正确。";
});

$$(".tab").forEach((tab) => tab.addEventListener("click", () => switchView(tab.dataset.view)));
$("#logoutBtn").addEventListener("click", () => { localStorage.removeItem("wordforge-user"); location.reload(); });
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

if (user && AUTH[user]) {
  loadState();
  $("#login").classList.add("hidden");
  $("#app").classList.remove("hidden");
  renderAll();
  const requestedView = new URLSearchParams(location.search).get("view");
  if (requestedView && document.getElementById(requestedView)) switchView(requestedView);
}
