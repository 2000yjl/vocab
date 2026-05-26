const DECK_SOURCES = [
  {
    id: "cet4", title: "CET-4 核心词典", tone: "green", order: "A-Z + 高频",
    desc: "大学四级高频基础，适合打底和快速恢复词感。",
    words: "abandon:放弃,ability:能力,academic:学术的,access:进入/获取,account:账户/说明,accurate:准确的,achieve:实现,active:积极的,adapt:适应,adequate:足够的,adjust:调整,advantage:优势,affect:影响,afford:负担得起,analyze:分析,approach:方法/接近,approve:批准,arrange:安排,assume:假设,available:可用的,average:平均的,benefit:好处,challenge:挑战,compare:比较,concern:关心/担忧,confirm:确认,consider:考虑,contact:联系,create:创造,culture:文化,decision:决定,decline:下降/拒绝,deliver:递送,describe:描述,design:设计,detail:细节,develop:发展,economy:经济,effective:有效的,effort:努力,environment:环境,evidence:证据,expand:扩张,experience:经验,explain:解释,focus:集中,improve:改善,include:包括,increase:增加,indicate:表明"
  },
  {
    id: "cet6", title: "CET-6 进阶词典", tone: "blue", order: "学术表达优先",
    desc: "六级阅读、写作和听力常见抽象词，重视同义替换。",
    words: "abstract:抽象的,acquire:获得,allocate:分配,alternative:替代选择,ambiguous:模糊的,annual:年度的,anticipate:预期,apparent:明显的,appropriate:合适的,approximately:大约,capacity:能力/容量,category:类别,cease:停止,collapse:倒塌,complex:复杂的,comprehensive:全面的,concept:概念,consequence:结果,consistent:一致的,constitute:构成,consume:消费,contemporary:当代的,contradict:反驳,controversial:有争议的,criteria:标准,crucial:关键的,debate:辩论,derive:源自,dimension:维度,distinct:明显不同的,emerge:出现,emphasis:强调,enhance:增强,equivalent:等同的,evaluate:评估,eventually:最终,evident:明显的,exclude:排除,flexible:灵活的,generate:产生,highlight:突出,identical:相同的,interpret:解释,maintain:维持,obtain:获得,participate:参与,potential:潜在的,previous:以前的,significant:显著的"
  },
  {
    id: "toefl", title: "TOEFL 学术词典", tone: "wine", order: "学科场景",
    desc: "托福阅读、听力讲座常见学术词，强调解释能力。",
    words: "abundant:丰富的,accumulate:积累,adjacent:相邻的,alter:改变,attribute:归因于,biological:生物的,chronological:按时间顺序的,coherent:连贯的,compensate:补偿,component:组成部分,compound:化合物/复合的,concentration:浓度/集中,conduct:实施/行为,constrain:限制,convert:转换,core:核心,correspond:对应,decline:衰退,dense:密集的,detect:探测,device:装置,diverse:多样的,domestic:国内的/驯养的,dominant:占主导的,duration:持续时间,element:元素,establish:建立,evolve:进化,extract:提取,facilitate:促进,feature:特征,foundation:基础,framework:框架,habitat:栖息地,hypothesis:假设,impact:影响,initial:最初的,innovative:创新的,integrate:整合,layer:层,mechanism:机制,migration:迁徙,monitor:监测,observation:观察,phenomenon:现象,region:地区,stable:稳定的,subsequent:随后的,visual:视觉的"
  },
  {
    id: "ielts", title: "IELTS 话题词典", tone: "gold", order: "口写话题",
    desc: "雅思口语和写作主题词，适合观点表达和举例。",
    words: "accommodation:住宿,affordable:负担得起的,awareness:意识,commute:通勤,community:社区,convenient:方便的,crime:犯罪,cultural:文化的,disadvantage:缺点,education:教育,elderly:老年人,employment:就业,energy:能源,globalization:全球化,government:政府,healthcare:医疗保健,housing:住房,individual:个人,infrastructure:基础设施,lifestyle:生活方式,media:媒体,mental:心理的,obesity:肥胖,opportunity:机会,policy:政策,pollution:污染,population:人口,poverty:贫困,privacy:隐私,public:公共的,quality:质量,recycling:回收,responsibility:责任,rural:农村的,social:社会的,solution:解决方案,sustainable:可持续的,technology:科技,traffic:交通,traditional:传统的,transportation:交通运输,urban:城市的,volunteer:志愿者,welfare:福利,workplace:工作场所"
  },
  {
    id: "toeic", title: "TOEIC 商务词典", tone: "blue", order: "办公流程",
    desc: "托业和职场英语，覆盖会议、邮件、客户、财务。",
    words: "agenda:议程,applicant:申请人,appointment:预约,approval:批准,attach:附上,audit:审计,branch:分部,budget:预算,candidate:候选人,client:客户,conference:会议,contract:合同,deadline:截止日期,department:部门,deposit:押金,discount:折扣,employee:员工,estimate:估算,expense:费用,feedback:反馈,headquarters:总部,invoice:发票,inventory:库存,manager:经理,negotiate:谈判,notice:通知,policy:政策,procedure:流程,promotion:促销/晋升,proposal:提案,purchase:购买,receipt:收据,recruit:招聘,refund:退款,registration:登记,representative:代表,reservation:预订,revenue:收入,schedule:日程,shipment:装运,signature:签名,staff:员工,supplier:供应商,transaction:交易,warranty:保修"
  },
  {
    id: "business", title: "商务表达词典", tone: "green", order: "表达功能",
    desc: "邮件、汇报、谈判、项目管理中真正会用到的表达。",
    words: "clarify:澄清,coordinate:协调,delegate:委派,implement:执行,prioritize:优先处理,summarize:总结,update:更新,request:请求,confirm:确认,reschedule:改期,postpone:推迟,resolve:解决,follow-up:跟进,overview:概览,objective:目标,deliverable:交付物,milestone:里程碑,stakeholder:相关方,resource:资源,scope:范围,risk:风险,issue:问题,assumption:假设,constraint:限制,efficient:高效的,specific:具体的,practical:实用的,professional:专业的,urgent:紧急的,flexible:灵活的,reliable:可靠的,productive:高产的,strategic:战略性的,competitive:有竞争力的,profitable:盈利的"
  },
  {
    id: "daily", title: "日常生活词典", tone: "gold", order: "真实生活",
    desc: "购物、租房、出行、手机、健康等日常高频表达。",
    words: "appliance:家用电器,balcony:阳台,bank:银行,battery:电池,borrow:借入,charger:充电器,clinic:诊所,complaint:投诉,delivery:配送,downstairs:楼下,emergency:紧急情况,entrance:入口,grocery:食品杂货,landlord:房东,laundry:洗衣,location:位置,neighbor:邻居,package:包裹,pharmacy:药店,queue:排队,repair:维修,roommate:室友,screen:屏幕,signal:信号,subway:地铁,surroundings:周边环境,upstairs:楼上,utility:水电杂费,wallet:钱包,withdraw:取款"
  },
  {
    id: "writing", title: "写作升级词典", tone: "wine", order: "同义升级",
    desc: "把普通词换成更精确、更正式、更适合作文的表达。",
    words: "important:重要的,vital:至关重要的,essential:必要的,helpful:有帮助的,beneficial:有益的,harmful:有害的,significant:显著的,minor:较小的,numerous:大量的,indicate:表明,demonstrate:证明,illustrate:说明,utilize:利用,enable:使能够,enhance:增强,reduce:减少,decrease:下降,increase:增加,maintain:维持,address:处理,tackle:处理,therefore:因此,however:然而,moreover:此外,nevertheless:然而,consequently:因此,primarily:主要地,approximately:大约,considerably:相当地,relatively:相对地"
  },
  {
    id: "roots", title: "词根派生词典", tone: "green", order: "词根家族",
    desc: "从词根和前后缀出发，一次记住一串词。",
    words: "transport:运输,portable:便携的,export:出口,import:进口,construct:建造,structure:结构,instruction:说明,respect:尊重,inspect:检查,perspective:视角,describe:描述,prescription:处方,visible:可见的,visual:视觉的,evidence:证据,inform:通知,perform:执行,transform:转变,pressure:压力,express:表达,impress:留下印象,project:项目,object:反对,subject:主题,submit:提交,transmit:传送,permit:允许,credible:可信的,credit:信用,beneficial:有益的,malfunction:故障,international:国际的,interaction:互动"
  },
  {
    id: "tech", title: "科技网络词典", tone: "blue", order: "数字生活",
    desc: "软件、硬件、网络、安全和 AI 时代常用词。",
    words: "access:访问,account:账户,algorithm:算法,backup:备份,configure:配置,database:数据库,delete:删除,device:设备,download:下载,feature:功能,hardware:硬件,install:安装,interface:界面,network:网络,password:密码,permission:权限,platform:平台,privacy:隐私,security:安全,software:软件,storage:存储,upload:上传,version:版本,virtual:虚拟的,wireless:无线的,automate:自动化,malware:恶意软件,encrypt:加密,notification:通知,subscription:订阅"
  },
  {
    id: "travel", title: "旅行交通词典", tone: "gold", order: "路线场景",
    desc: "机场、酒店、订票、问路、紧急情况。",
    words: "arrival:到达,baggage:行李,boarding:登机,currency:货币,customs:海关,delay:延误,departure:出发,destination:目的地,downtown:市中心,exchange:兑换,guide:导游,insurance:保险,itinerary:行程,landmark:地标,luggage:行李,passport:护照,platform:站台,reservation:预订,route:路线,souvenir:纪念品,terminal:航站楼,ticket:票,transfer:换乘,visa:签证,accommodation:住宿,available:可用的,local:当地的,suburb:郊区,transport:交通,vehicle:车辆"
  },
  {
    id: "mind", title: "情绪关系词典", tone: "wine", order: "沟通心理",
    desc: "表达情绪、关系、态度和沟通意图。",
    words: "anxious:焦虑的,attitude:态度,comfort:安慰,confident:自信的,curious:好奇的,decision:决定,emotion:情绪,encourage:鼓励,expectation:期待,forgive:原谅,frustrated:沮丧的,grateful:感激的,honest:诚实的,patient:有耐心的,personality:性格,pressure:压力,reliable:可靠的,relieved:宽慰的,respect:尊重,supportive:支持的,trust:信任,understand:理解,upset:难过的,apologize:道歉,communicate:沟通,relationship:关系,choice:选择,compliment:称赞,argument:争论,empathy:同理心"
  }
];

const ROOT_LIBRARY = [
  { root: "port", meaning: "carry 搬运", method: "transport/import/export/portable 都和搬运、携带、转移有关。", examples: ["transport", "import", "export", "portable"] },
  { root: "struct", meaning: "build 建造", method: "structure 是搭起来的结构，construct 是建造。", examples: ["structure", "construct", "instruction"] },
  { root: "spect", meaning: "look 看", method: "inspect 向内看，respect 回头看重视，perspective 是看问题的角度。", examples: ["inspect", "respect", "perspective"] },
  { root: "scrib/script", meaning: "write 写", method: "describe 写下来描述，script 是写好的文本。", examples: ["describe", "script", "prescription"] },
  { root: "vis/vid", meaning: "see 看见", method: "visible 可见，visual 视觉，evidence 是看得见的证据。", examples: ["visible", "visual", "evidence"] },
  { root: "form", meaning: "shape 形成", method: "inform 让信息成形，transform 改变形态，perform 把动作完成。", examples: ["inform", "perform", "transform"] },
  { root: "press", meaning: "push 压", method: "pressure 是压力，express 是把想法压出来。", examples: ["pressure", "express", "impress"] },
  { root: "ject", meaning: "throw 投掷", method: "project 向前投，reject 投回去，object 把意见投出去。", examples: ["project", "object", "subject"] },
  { root: "mit/miss", meaning: "send 送出", method: "submit 送上去，transmit 传过去，permit 允许送行。", examples: ["submit", "transmit", "permit"] },
  { root: "cred", meaning: "believe 相信", method: "credit 来自信任，credible 是可信的。", examples: ["credit", "credible", "credentials"] }
];

const MANUAL_FAMILY = {
  analyze: ["analysis", "analytical", "analyst"], create: ["creative", "creation", "creativity"],
  decide: ["decision", "decisive", "decided"], describe: ["description", "descriptive", "descriptor"],
  develop: ["development", "developer", "developing"], explain: ["explanation", "explanatory"],
  improve: ["improvement", "improved"], indicate: ["indication", "indicative"],
  acquire: ["acquisition", "acquired"], adapt: ["adaptation", "adaptive"],
  approve: ["approval", "approved"], arrange: ["arrangement"], assume: ["assumption"],
  benefit: ["beneficial", "beneficiary"], challenge: ["challenging"], compare: ["comparison", "comparative"],
  confirm: ["confirmation"], consider: ["consideration", "considerable"], construct: ["construction", "constructive"],
  credible: ["credibility", "incredible"], economy: ["economic", "economical"], effect: ["effective", "effectively"],
  evidence: ["evident", "evidently"], express: ["expression", "expressive"], form: ["formal", "formation"],
  inform: ["information", "informative"], permit: ["permission"], pressure: ["pressured"], project: ["projection"],
  respect: ["respectful", "respective"], stable: ["stability", "stabilize"], strategy: ["strategic", "strategically"],
  submit: ["submission"], transform: ["transformation", "transformative"], transport: ["transportation"],
  visual: ["visible", "visibility"], important: ["importance"], significant: ["significance", "significantly"],
  essential: ["essence", "essentially"], maintain: ["maintenance"], reduce: ["reduction"], increase: ["increasingly"],
  technology: ["technological", "technologist"], privacy: ["private"], security: ["secure"], communicate: ["communication"],
  confident: ["confidence"], anxious: ["anxiety"], curious: ["curiosity"], reliable: ["reliability"]
};

const SPECIAL_PHRASES = {
  abandon: ["abandon a plan", "abandon an idea", "abandon the project", "abandon hope"],
  ability: ["the ability to communicate", "improve your ability", "natural ability", "reading ability"],
  academic: ["academic research", "academic writing", "academic performance", "academic pressure"],
  access: ["access the website", "internet access", "limited access", "access to information"],
  accurate: ["accurate information", "an accurate answer", "highly accurate", "accurate data"],
  achieve: ["achieve a goal", "achieve success", "achieve better results", "achieve progress"],
  adapt: ["adapt to change", "adapt quickly", "adapt the plan", "adapt to a new environment"],
  analyze: ["analyze the data", "analyze the problem", "analyze the result", "careful analysis"],
  approach: ["a practical approach", "approach the problem", "a different approach", "teaching approach"],
  benefit: ["a major benefit", "benefit from practice", "health benefits", "mutual benefit"],
  challenge: ["face a challenge", "a serious challenge", "challenge yourself", "overcome challenges"],
  compare: ["compare A with B", "compare the results", "comparison table", "comparative study"],
  confirm: ["confirm the details", "confirm your booking", "confirmation email", "confirm the meeting"],
  describe: ["describe the situation", "brief description", "describe in detail", "descriptive language"],
  improve: ["improve your English", "improve efficiency", "improvement plan", "improve gradually"],
  indicate: ["indicate a trend", "indicate that", "clear indication", "data indicates"],
  deadline: ["meet the deadline", "miss the deadline", "extend the deadline", "tight deadline"],
  invoice: ["send an invoice", "invoice number", "issue an invoice", "invoice date"],
  reservation: ["make a reservation", "confirm a reservation", "reservation number", "cancel a reservation"],
  privacy: ["protect privacy", "privacy policy", "personal privacy", "privacy settings"],
  pressure: ["under pressure", "work pressure", "reduce pressure", "blood pressure"],
  communicate: ["communicate clearly", "communication skills", "communicate with others", "effective communication"]
};

const SPECIAL_EXAMPLES = {
  abandon: "The company had to abandon the project because the cost was too high.",
  ability: "Regular reading can improve your ability to understand long articles.",
  academic: "Academic writing requires clear evidence and careful structure.",
  deadline: "Please send the report before the deadline.",
  invoice: "The supplier emailed the invoice this morning.",
  reservation: "I would like to confirm my hotel reservation.",
  privacy: "You should check the privacy settings before sharing personal information.",
  pressure: "Many students feel pressure before important exams.",
  communicate: "Good managers communicate clearly with their team."
};

function rootFor(word) {
  if (/port/.test(word)) return "port";
  if (/struct/.test(word)) return "struct";
  if (/spect|perspective/.test(word)) return "spect";
  if (/scrib|script|prescription/.test(word)) return "scrib/script";
  if (/vis|vid|evidence/.test(word)) return "vis/vid";
  if (/form/.test(word)) return "form";
  if (/press/.test(word)) return "press";
  if (/ject/.test(word)) return "ject";
  if (/mit|miss/.test(word)) return "mit/miss";
  if (/cred|credit/.test(word)) return "cred";
  if (word.startsWith("trans")) return "trans-";
  if (word.startsWith("inter")) return "inter-";
  if (word.endsWith("tion")) return "-tion";
  if (word.endsWith("able")) return "-able";
  if (word.endsWith("ity")) return "-ity";
  return "chunking";
}

function phoneticFor(word) {
  const clean = word.replace(/-.*/, "").replace(/\s+.*/, "");
  return `/${clean.split("").slice(0, 7).join(" ")}/`;
}

function plural(word) {
  if (word.endsWith("y")) return `${word.slice(0, -1)}ies`;
  if (word.endsWith("s")) return word;
  return `${word}s`;
}

function familyFor(word) {
  const manual = MANUAL_FAMILY[word] || [];
  const safe = word.includes("-") || word.includes(" ") ? [] : [plural(word), `${word}-related`, `${word}-based`];
  return [...new Set([...manual, ...safe])].slice(0, 5);
}

function phrasesFor(word, deckId) {
  if (SPECIAL_PHRASES[word]) return SPECIAL_PHRASES[word];
  const verbLike = /^(abandon|achieve|adapt|adjust|affect|analyze|approve|arrange|assume|compare|confirm|consider|create|decline|deliver|describe|develop|explain|focus|improve|include|increase|indicate|allocate|anticipate|cease|collapse|consume|contradict|derive|emerge|enhance|evaluate|exclude|generate|highlight|interpret|maintain|obtain|participate|accumulate|alter|attribute|compensate|conduct|constrain|convert|detect|establish|evolve|extract|facilitate|integrate|monitor|clarify|coordinate|delegate|implement|prioritize|summarize|update|request|reschedule|postpone|resolve|install|delete|download|upload|configure|encrypt|communicate|forgive|encourage|understand|apologize|reduce|decrease|address|tackle)$/.test(word);
  const adjectiveLike = /(able|al|ive|ous|ful|less|ant|ent|ic|ary|ory)$/.test(word) || /^(active|available|average|complex|dense|diverse|domestic|dominant|initial|stable|urban|rural|public|private|essential|vital|minor|major|urgent|flexible|reliable|confident|anxious|curious|patient|honest|upset)$/.test(word);
  if (verbLike) return [`${word} a problem`, `${word} the plan`, `${word} the result`, `${word} carefully`];
  if (adjectiveLike) return [`a ${word} approach`, `${word} information`, `${word} enough`, `remain ${word}`];
  const templates = {
    toeic: [`${word} request`, `${word} report`, `confirm the ${word}`, `${word} deadline`],
    business: [`clarify the ${word}`, `${word} update`, `${word} plan`, `${word} meeting`],
    toefl: [`the ${word} of the system`, `${word} evidence`, `${word} process`, `${word} pattern`],
    ielts: [`a major ${word}`, `${word} problem`, `${word} policy`, `${word} solution`],
    daily: [`daily ${word}`, `${word} problem`, `check the ${word}`, `${word} nearby`],
    travel: [`${word} information`, `${word} desk`, `${word} problem`, `book a ${word}`],
    writing: [`more ${word}`, `${word} argument`, `${word} evidence`, `${word} example`]
  };
  return templates[deckId] || [`${word} example`, `${word} issue`, `${word} in context`, `use ${word}`];
}

function memoryFor(word, cn, root) {
  if (root !== "chunking") return `抓住 ${root} 这条构词线索，再把它和“${cn}”的场景绑定。`;
  if (word.length <= 6) return `短词用拼写锁定：遮住英文，3 秒内写出 ${word}。`;
  return `把 ${word} 拆成 2-3 个声音块，先读准，再用“${cn}”造一句自己的话。`;
}

function exampleFor(word, deckId) {
  if (SPECIAL_EXAMPLES[word]) return SPECIAL_EXAMPLES[word];
  const verbLike = /^(achieve|adapt|adjust|analyze|approve|arrange|compare|confirm|consider|create|deliver|describe|develop|explain|improve|include|increase|indicate|evaluate|maintain|obtain|clarify|coordinate|implement|summarize|request|resolve|install|delete|download|upload|configure|communicate|encourage|reduce|address)$/.test(word);
  if (verbLike) return `You can ${word} the problem by using a clear example.`;
  const map = {
    cet4: `This word is useful when you explain a common idea: ${word}.`,
    cet6: `The article uses ${word} to make the argument more precise.`,
    toefl: `The professor mentioned ${word} as part of the lecture.`,
    ielts: `This topic is connected with ${word} in modern society.`,
    toeic: `Please include the ${word} in your email before Friday.`,
    business: `We need to discuss the ${word} before making a decision.`,
    daily: `I often use ${word} in daily conversation.`,
    writing: `Using ${word} can make the sentence sound more formal.`,
    travel: `You may need ${word} when you travel abroad.`,
    tech: `Check the ${word} before changing the settings.`,
    mind: `It is important to talk about ${word} honestly.`
  };
  return map[deckId] || `I can use ${word} in a real sentence.`;
}

function parseWords() {
  let id = 1;
  const entries = [];
  for (const deck of DECK_SOURCES) {
    const pairs = deck.words.split(",");
    pairs.forEach((pair, index) => {
      const [word, cn] = pair.split(":");
      const root = rootFor(word);
      const family = familyFor(word);
      entries.push({
        id: id++,
        word, cn,
        deckId: deck.id,
        deckTitle: deck.title,
        index,
        phonetic: phoneticFor(word),
        root,
        family,
        phrases: phrasesFor(word, deck.id),
        memory: memoryFor(word, cn, root),
        example: exampleFor(word, deck.id),
        type: "headword"
      });
    });
  }

  const seen = new Set(entries.map((x) => x.word));
  const generated = [];
  for (const base of entries) {
    for (const fam of base.family) {
      if (generated.length >= 820) break;
      if (!fam || seen.has(fam)) continue;
      seen.add(fam);
      const root = rootFor(fam);
      generated.push({
        id: id++,
        word: fam,
        cn: `${base.cn}的相关派生/搭配`,
        deckId: base.deckId,
        deckTitle: base.deckTitle,
        index: base.index + 0.1,
        phonetic: phoneticFor(fam),
        root,
        family: [base.word],
        phrases: phrasesFor(fam, base.deckId).slice(0, 3),
        memory: `从核心词 ${base.word} 跳到 ${fam}，注意词性和场景变化。`,
        example: `The word ${fam} is connected with ${base.word}.`,
        type: "derived",
        parent: base.word
      });
    }
  }
  return entries.concat(generated);
}

window.WORDFORGE_DECKS = DECK_SOURCES.map(({ words, ...deck }) => ({
  ...deck,
  count: words.split(",").length
}));
window.WORDFORGE_ROOTS = ROOT_LIBRARY;
window.WORDFORGE_WORDS = parseWords();
