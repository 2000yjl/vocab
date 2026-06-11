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
function makeRows(text, lang) {
  const templates = {
    en: (word, cn) => [`${word}`, cn, word, `I can hear and use "${word}" clearly.`, `我能清楚听出并使用“${cn}”。`],
    ko: (word, cn) => [word, cn, word, `오늘은 "${word}"를 또렷하게 듣고 따라 해요.`, `今天清楚听辨并跟读“${cn}”。`],
    ja: (word, cn) => [word, cn, word, `今日は「${word}」を聞いて、声に出します。`, `今天听辨并跟读“${cn}”。`],
    de: (word, cn) => [word, cn, word, `Ich benutze "${word}" in einem klaren Satz.`, `我把“${cn}”放进一个清楚的句子。`],
    es: (word, cn) => [word, cn, word, `Uso "${word}" en una frase clara.`, `我把“${cn}”放进一个清楚的句子。`],
    fr: (word, cn) => [word, cn, word, `J'utilise "${word}" dans une phrase claire.`, `我把“${cn}”放进一个清楚的句子。`]
  };
  return text.trim().split(/\s*,\s*/).filter(Boolean).map((pair) => {
    const [word, cn] = pair.split(":");
    return templates[lang](word.trim(), (cn || "").trim());
  });
}
const COURSE_PACKS = [
  { lang: "en", id: "en-phonics", order: "0. Sound", title: "英语字母与自然拼读", desc: "先从字母名、常见短元音和辅音组合开始，建立听音辨词能力。", words: makeRows("A:/eɪ/ 字母 A,B:/biː/ 字母 B,C:/siː/ 字母 C,D:/diː/ 字母 D,E:/iː/ 字母 E,F:/ef/ 字母 F,G:/dʒiː/ 字母 G,H:/eɪtʃ/ 字母 H,I:/aɪ/ 字母 I,J:/dʒeɪ/ 字母 J,K:/keɪ/ 字母 K,L:/el/ 字母 L,M:/em/ 字母 M,N:/en/ 字母 N,O:/oʊ/ 字母 O,P:/piː/ 字母 P,Q:/kjuː/ 字母 Q,R:/ɑːr/ 字母 R,S:/es/ 字母 S,T:/tiː/ 字母 T,U:/juː/ 字母 U,V:/viː/ 字母 V,W:/ˈdʌbəljuː/ 字母 W,X:/eks/ 字母 X,Y:/waɪ/ 字母 Y,Z:/ziː/ 字母 Z,short a:短 a,short e:短 e,short i:短 i,short o:短 o,short u:短 u,ch:/tʃ/ 组合音,sh:/ʃ/ 组合音,th:/θ/ 或 /ð/,ph:/f/ 组合音,tion:/ʃən/ 词尾音", "en") },
  { lang: "ko", id: "ko-sounds", order: "0. Sound", title: "韩语发音与韩文字母", desc: "从元音、辅音、收音和音变开始，不先硬背整句。", words: makeRows("ㅏ:a 元音,ㅓ:eo 元音,ㅗ:o 元音,ㅜ:u 元音,ㅡ:eu 元音,ㅣ:i 元音,ㅐ:ae 元音,ㅔ:e 元音,ㅑ:ya 元音,ㅕ:yeo 元音,ㅛ:yo 元音,ㅠ:yu 元音,ㄱ:g/k 辅音,ㄴ:n 辅音,ㄷ:d/t 辅音,ㄹ:r/l 辅音,ㅁ:m 辅音,ㅂ:b/p 辅音,ㅅ:s 辅音,ㅇ:零声母/ng,ㅈ:j 辅音,ㅊ:ch 辅音,ㅋ:k 辅音,ㅌ:t 辅音,ㅍ:p 辅音,ㅎ:h 辅音,ㄲ:紧音 kk,ㄸ:紧音 tt,ㅃ:紧音 pp,ㅆ:紧音 ss,ㅉ:紧音 jj,받침:收音,연음:连音,된소리:紧音化,비음화:鼻音化", "ko") },
  { lang: "ko", id: "ko-core", order: "1. Core", title: "韩语基础高频词", desc: "零基础第一阶段：人称、时间、地点、基本动作。", words: makeRows("나:我,저:我 敬语,너:你,우리:我们,사람:人,친구:朋友,가족:家人,이름:名字,집:家,학교:学校,회사:公司,가게:商店,길:路,문:门,방:房间,물:水,밥:饭,커피:咖啡,차:茶,돈:钱,시간:时间,오늘:今天,내일:明天,어제:昨天,아침:早上,점심:中午/午饭,저녁:晚上/晚饭,지금:现在,여기:这里,거기:那里,어디:哪里,무엇:什么,왜:为什么,언제:什么时候,좋다:好,나쁘다:不好,크다:大,작다:小,많다:多,적다:少,빠르다:快,느리다:慢,쉽다:容易,어렵다:难,있다:有/在,없다:没有/不在,가다:去,오다:来,보다:看,듣다:听,말하다:说,먹다:吃,마시다:喝,사다:买,주다:给,받다:收到,알다:知道,모르다:不知道,하다:做,공부하다:学习,일하다:工作,쉬다:休息,기다리다:等待,필요하다:需要,원하다:想要,좋아하다:喜欢,싫어하다:讨厌,시작하다:开始,끝나다:结束", "ko") },
  { lang: "ko", id: "ko-life", order: "2. Life", title: "韩语生活场景", desc: "餐厅、购物、交通、住宿、身体不适等真实场景。", words: makeRows("메뉴:菜单,주문:点餐,계산:结账,영수증:收据,카드:卡,현금:现金,가격:价格,할인:折扣,사이즈:尺码,색깔:颜色,옷:衣服,신발:鞋,역:车站,버스:公交,지하철:地铁,택시:出租车,공항:机场,표:票,출구:出口,입구:入口,예약:预约/预订,호텔:酒店,방문:房门,열쇠:钥匙,주소:地址,전화번호:电话号码,병원:医院,약국:药店,감기:感冒,열:发烧,아프다:疼/不舒服,도와주세요:请帮我,괜찮습니다:没关系,잠깐만요:请稍等,천천히 말해 주세요:请慢慢说,다시 말해 주세요:请再说一遍", "ko") },
  { lang: "ko", id: "ko-business", order: "3. Work", title: "韩语职场与邮件", desc: "会议、汇报、客户、进度、确认和请求。", words: makeRows("회의:会议,일정:日程,자료:资料,보고:汇报,확인:确认,요청:请求,답장:回复,첨부:附件,마감:截止,진행:进行,완료:完成,문제:问题,해결:解决,제안:提案,고객:客户,담당자:负责人,계약:合同,견적:报价,예산:预算,매출:销售额,비용:费用,승인:批准,검토:检查/审阅,수정:修改,공유:共享,협력:合作,우선순위:优先级,효율:效率,품질:质量,목표:目标", "ko") },
  { lang: "ko", id: "ko-advanced", order: "4. Advanced", title: "韩语考试与高级阅读", desc: "TOPIK、新闻、评论和正式表达常见抽象词。", words: makeRows("사회:社会,경제:经济,정치:政治,문화:文化,교육:教育,환경:环境,기술:技术,인공지능:人工智能,변화:变化,발전:发展,영향:影响,원인:原因,결과:结果,가능성:可能性,필요성:必要性,중요성:重要性,관계:关系,경향:趋势,자료:资料,분석:分析,주장:主张,근거:根据,비교:比较,차이:差异,공통점:共同点,장점:优点,단점:缺点,해결책:解决方案,정책:政策,제도:制度,권리:权利,책임:责任,참여:参与,갈등:冲突,협력:合作,지속가능성:可持续性", "ko") },
  { lang: "ja", id: "ja-sounds", order: "0. Sound", title: "日语假名与发音", desc: "从五十音、浊音、拗音、长音、促音开始。", words: makeRows("あ:a,い:i,う:u,え:e,お:o,か:ka,き:ki,く:ku,け:ke,こ:ko,さ:sa,し:shi,す:su,せ:se,そ:so,た:ta,ち:chi,つ:tsu,て:te,と:to,な:na,に:ni,ぬ:nu,ね:ne,の:no,は:ha,ひ:hi,ふ:fu,へ:he,ほ:ho,ま:ma,み:mi,む:mu,め:me,も:mo,や:ya,ゆ:yu,よ:yo,ら:ra,り:ri,る:ru,れ:re,ろ:ro,わ:wa,を:o 助词,ん:n,が:ga,ざ:za,だ:da,ば:ba,ぱ:pa,きゃ:kya,しゅ:shu,ちょ:cho,っ:促音,ー:长音", "ja") },
  { lang: "ja", id: "ja-core", order: "1. Core", title: "日语基础高频词", desc: "人称、时间、地点、动作、形容词，先把句子骨架搭起来。", words: makeRows("私:我,あなた:你,人:人,友達:朋友,家族:家人,名前:名字,家:家,学校:学校,会社:公司,店:店,駅:车站,道:路,部屋:房间,水:水,ご飯:饭,お茶:茶,お金:钱,時間:时间,今日:今天,明日:明天,昨日:昨天,朝:早上,昼:中午,夜:晚上,今:现在,ここ:这里,そこ:那里,あそこ:那里,どこ:哪里,何:什么,なぜ:为什么,いつ:什么时候,良い:好,悪い:坏,大きい:大,小さい:小,多い:多,少ない:少,早い:早/快,遅い:慢/晚,簡単:简单,難しい:难,ある:有 无生命,いる:有 有生命,行く:去,来る:来,見る:看,聞く:听,話す:说,食べる:吃,飲む:喝,買う:买,使う:使用,分かる:明白,勉強する:学习,働く:工作,休む:休息,待つ:等待,必要:必要,好き:喜欢,嫌い:讨厌,始める:开始,終わる:结束", "ja") },
  { lang: "ja", id: "ja-life", order: "2. Life", title: "日语生活场景", desc: "点餐、购物、交通、住宿、问路、身体不适。", words: makeRows("メニュー:菜单,注文:点餐,会計:结账,領収書:收据,カード:卡,現金:现金,値段:价格,割引:折扣,サイズ:尺码,色:颜色,服:衣服,靴:鞋,電車:电车,地下鉄:地铁,バス:公交,タクシー:出租车,空港:机场,切符:票,出口:出口,入口:入口,予約:预约/预订,ホテル:酒店,鍵:钥匙,住所:地址,電話番号:电话号码,病院:医院,薬局:药店,風邪:感冒,熱:发烧,痛い:疼,助けてください:请帮我,大丈夫です:没关系,少し待ってください:请稍等,ゆっくり話してください:请慢慢说,もう一度お願いします:请再来一次", "ja") },
  { lang: "ja", id: "ja-business", order: "3. Work", title: "日语职场与邮件", desc: "敬语环境下的确认、依赖、报告、进度和客户沟通。", words: makeRows("会議:会议,予定:日程,資料:资料,報告:汇报,確認:确认,依頼:委托/请求,返信:回复,添付:附件,締切:截止,進捗:进度,完了:完成,問題:问题,解決:解决,提案:提案,顧客:客户,担当者:负责人,契約:合同,見積もり:报价,予算:预算,売上:销售额,費用:费用,承認:批准,検討:讨论/审阅,修正:修改,共有:共享,協力:合作,優先順位:优先级,効率:效率,品質:质量,目標:目标", "ja") },
  { lang: "ja", id: "ja-advanced", order: "4. Advanced", title: "日语考试与高级阅读", desc: "JLPT、新闻、评论和大学阅读常见抽象词。", words: makeRows("社会:社会,経済:经济,政治:政治,文化:文化,教育:教育,環境:环境,技術:技术,人工知能:人工智能,変化:变化,発展:发展,影響:影响,原因:原因,結果:结果,可能性:可能性,必要性:必要性,重要性:重要性,関係:关系,傾向:趋势,資料:资料,分析:分析,主張:主张,根拠:根据,比較:比较,違い:差异,共通点:共同点,長所:优点,短所:缺点,解決策:解决方案,政策:政策,制度:制度,権利:权利,責任:责任,参加:参与,対立:对立,協力:合作,持続可能性:可持续性", "ja") },
  { lang: "de", id: "de-sounds", order: "0. Sound", title: "德语字母与发音规则", desc: "从字母、变元音、ch/r/ei/ie 等核心规则开始。", words: makeRows("A:a,B:be,C:tse,D:de,E:e,F:ef,G:ge,H:ha,I:i,J:jot,K:ka,L:el,M:em,N:en,O:o,P:pe,Q:ku,R:er,S:es,T:te,U:u,V:fau,W:ve,X:iks,Y:ypsilon,Z:tset,ä:变元音 ae,ö:变元音 oe,ü:变元音 ue,ß:ss,ei:ai 音,ie:i 长音,eu:oy 音,sch:sh 音,ch:喉音/软腭音,sp:词首 shp,st:词首 sht", "de") },
  { lang: "de", id: "de-core", order: "1. Core", title: "德语基础高频词", desc: "名词性别、基础动词、时间地点和形容词。", words: makeRows("ich:我,du:你,er:他,sie:她/他们,wir:我们,ihr:你们,der Mann:男人,die Frau:女人,das Kind:孩子,der Freund:朋友,die Familie:家庭,das Haus:房子,die Schule:学校,die Arbeit:工作,die Stadt:城市,der Weg:路,das Wasser:水,das Essen:食物,der Kaffee:咖啡,das Geld:钱,die Zeit:时间,heute:今天,morgen:明天,gestern:昨天,jetzt:现在,hier:这里,dort:那里,wo:哪里,was:什么,warum:为什么,wann:什么时候,gut:好,schlecht:坏,groß:大,klein:小,viel:多,wenig:少,schnell:快,langsam:慢,einfach:简单,schwierig:困难,haben:有,sein:是/在,gehen:去,kommen:来,sehen:看,hören:听,sprechen:说,essen:吃,trinken:喝,kaufen:买,geben:给,nehmen:拿,wissen:知道,lernen:学习,arbeiten:工作,warten:等待,brauchen:需要,mögen:喜欢,beginnen:开始,enden:结束", "de") },
  { lang: "de", id: "de-life", order: "2. Life", title: "德语生活场景", desc: "餐厅、购物、交通、住宿、医疗和问路。", words: makeRows("die Speisekarte:菜单,bestellen:点餐,bezahlen:付款,die Rechnung:账单,die Quittung:收据,bar:现金地,die Karte:卡,der Preis:价格,der Rabatt:折扣,die Größe:尺码,die Farbe:颜色,die Kleidung:衣服,der Schuh:鞋,der Bahnhof:火车站,die U-Bahn:地铁,der Bus:公交,das Taxi:出租车,der Flughafen:机场,die Fahrkarte:车票,der Ausgang:出口,der Eingang:入口,die Reservierung:预订,das Hotel:酒店,der Schlüssel:钥匙,die Adresse:地址,das Krankenhaus:医院,die Apotheke:药店,die Erkältung:感冒,das Fieber:发烧,weh tun:疼,helfen:帮助,langsam sprechen:慢慢说,wiederholen:重复", "de") },
  { lang: "de", id: "de-business", order: "3. Work", title: "德语职场与邮件", desc: "办公室、会议、邮件、客户和项目推进。", words: makeRows("die Besprechung:会议,der Termin:预约/日程,die Unterlagen:资料,der Bericht:报告,bestätigen:确认,die Anfrage:询问/请求,antworten:回复,der Anhang:附件,die Frist:截止期限,der Fortschritt:进展,abschließen:完成,das Problem:问题,lösen:解决,der Vorschlag:建议,der Kunde:客户,verantwortlich:负责的,der Vertrag:合同,das Angebot:报价,das Budget:预算,der Umsatz:销售额,die Kosten:费用,genehmigen:批准,prüfen:检查,ändern:修改,teilen:共享,zusammenarbeiten:合作,die Priorität:优先级,die Effizienz:效率,die Qualität:质量,das Ziel:目标", "de") },
  { lang: "de", id: "de-advanced", order: "4. Advanced", title: "德语考试与高级阅读", desc: "TestDaF、新闻和学术阅读常见抽象词。", words: makeRows("die Gesellschaft:社会,die Wirtschaft:经济,die Politik:政治,die Kultur:文化,die Bildung:教育,die Umwelt:环境,die Technologie:技术,künstliche Intelligenz:人工智能,die Veränderung:变化,die Entwicklung:发展,der Einfluss:影响,die Ursache:原因,das Ergebnis:结果,die Möglichkeit:可能性,die Notwendigkeit:必要性,die Bedeutung:重要性,die Beziehung:关系,die Tendenz:趋势,die Analyse:分析,die Behauptung:主张,die Grundlage:根据,der Vergleich:比较,der Unterschied:差异,die Gemeinsamkeit:共同点,der Vorteil:优点,der Nachteil:缺点,die Lösung:解决方案,die Politikmaßnahme:政策措施,das System:制度,das Recht:权利,die Verantwortung:责任,die Teilnahme:参与,der Konflikt:冲突,die Zusammenarbeit:合作,die Nachhaltigkeit:可持续性", "de") },
  { lang: "es", id: "es-sounds", order: "0. Sound", title: "西班牙语字母与发音", desc: "从元音、重音、rr、ll、ñ、j 等规则开始。", words: makeRows("a:a 元音,e:e 元音,i:i 元音,o:o 元音,u:u 元音,b:b/v 音,c:k 或 s,ch:ch 音,d:d 音,g:g 或 h 音,h:不发音,j:h 喉音,ll:y/zh 音,ñ:ny 音,qu:k 音,r:单击 r,rr:颤音 rr,s:s 音,v:b/v 音,z:s/th 音,gue:ge 音,gui:gi 音,ción:sion 词尾,mente:副词词尾,á:重音 a,é:重音 e,í:重音 i,ó:重音 o,ú:重音 u", "es") },
  { lang: "es", id: "es-core", order: "1. Core", title: "西班牙语基础高频词", desc: "人称、性数、基础动词和日常高频形容词。", words: makeRows("yo:我,tú:你,él:他,ella:她,nosotros:我们,ustedes:你们/您们,persona:人,amigo:朋友,familia:家庭,nombre:名字,casa:家,escuela:学校,trabajo:工作,ciudad:城市,calle:街道,agua:水,comida:食物,café:咖啡,dinero:钱,tiempo:时间,hoy:今天,mañana:明天,ayer:昨天,ahora:现在,aquí:这里,allí:那里,dónde:哪里,qué:什么,por qué:为什么,cuándo:什么时候,bueno:好,malo:坏,grande:大,pequeño:小,mucho:多,poco:少,rápido:快,lento:慢,fácil:简单,difícil:困难,tener:有,ser:是,estar:处于/在,ir:去,venir:来,ver:看,oír:听,hablar:说,comer:吃,beber:喝,comprar:买,dar:给,tomar:拿/喝,saber:知道,aprender:学习,trabajar:工作,esperar:等待,necesitar:需要,querer:想要/爱,gustar:喜欢,empezar:开始,terminar:结束", "es") },
  { lang: "es", id: "es-life", order: "2. Life", title: "西班牙语生活场景", desc: "餐厅、购物、交通、住宿、医疗和求助。", words: makeRows("menú:菜单,pedir:点餐,pagar:付款,cuenta:账单,recibo:收据,tarjeta:卡,efectivo:现金,precio:价格,descuento:折扣,talla:尺码,color:颜色,ropa:衣服,zapatos:鞋,estación:车站,metro:地铁,autobús:公交,taxi:出租车,aeropuerto:机场,billete:票,salida:出口,entrada:入口,reserva:预订,hotel:酒店,llave:钥匙,dirección:地址,teléfono:电话,hospital:医院,farmacia:药店,resfriado:感冒,fiebre:发烧,doler:疼,ayuda:帮助,despacio:慢慢地,repetir:重复", "es") },
  { lang: "es", id: "es-business", order: "3. Work", title: "西班牙语职场与邮件", desc: "会议、邮件、客户、项目、报价和进度。", words: makeRows("reunión:会议,cita:预约,documento:文件,informe:报告,confirmar:确认,solicitud:请求,responder:回复,adjunto:附件,plazo:期限,progreso:进展,completar:完成,problema:问题,resolver:解决,propuesta:提案,cliente:客户,responsable:负责人,contrato:合同,presupuesto:预算,cotización:报价,ventas:销售额,costo:成本,aprobar:批准,revisar:检查/mod,modificar:修改,compartir:分享,colaborar:合作,prioridad:优先级,eficiencia:效率,calidad:质量,objetivo:目标", "es") },
  { lang: "es", id: "es-advanced", order: "4. Advanced", title: "西班牙语考试与高级阅读", desc: "DELE、新闻、评论、学术和专业表达。", words: makeRows("sociedad:社会,economía:经济,política:政治,cultura:文化,educación:教育,medio ambiente:环境,tecnología:技术,inteligencia artificial:人工智能,cambio:变化,desarrollo:发展,influencia:影响,causa:原因,resultado:结果,posibilidad:可能性,necesidad:必要性,importancia:重要性,relación:关系,tendencia:趋势,análisis:分析,afirmación:主张,fundamento:根据,comparación:比较,diferencia:差异,punto común:共同点,ventaja:优点,desventaja:缺点,solución:解决方案,política pública:公共政策,sistema:制度,derecho:权利,responsabilidad:责任,participación:参与,conflicto:冲突,cooperación:合作,sostenibilidad:可持续性", "es") },
  { lang: "fr", id: "fr-sounds", order: "0. Sound", title: "法语字母与发音", desc: "从鼻化元音、连读、哑音、r、u/ou/eu 开始。", words: makeRows("a:a 元音,e:e/弱读,i:i 元音,o:o 元音,u:圆唇 u,ou:u 音,eu:eu 音,an:鼻化音,en:鼻化音,on:鼻化音,in:鼻化音,un:鼻化音,r:小舌 r,ç:s 音,ch:sh 音,gn:ny 音,ill:y 音,ai:e 音,au:o 音,eau:o 音,oi:wa 音,tion:sion 词尾,ment:副词词尾,liaison:连读,muet:哑音", "fr") },
  { lang: "fr", id: "fr-core", order: "1. Core", title: "法语基础高频词", desc: "阴阳性、基础动词、时间地点和常用形容词。", words: makeRows("je:我,tu:你,il:他,elle:她,nous:我们,vous:你们/您,on:我们/人们,personne:人,ami:朋友,famille:家庭,nom:名字,maison:家,école:学校,travail:工作,ville:城市,rue:街道,eau:水,nourriture:食物,café:咖啡,argent:钱,temps:时间,aujourd'hui:今天,demain:明天,hier:昨天,maintenant:现在,ici:这里,là:那里,où:哪里,quoi:什么,pourquoi:为什么,quand:什么时候,bon:好,mauvais:坏,grand:大,petit:小,beaucoup:多,peu:少,rapide:快,lent:慢,facile:简单,difficile:困难,avoir:有,être:是/在,aller:去,venir:来,voir:看,écouter:听,parler:说,manger:吃,boire:喝,acheter:买,donner:给,prendre:拿/乘坐,savoir:知道,apprendre:学习,travailler:工作,attendre:等待,avoir besoin de:需要,vouloir:想要,aimer:喜欢,commencer:开始,finir:结束", "fr") },
  { lang: "fr", id: "fr-life", order: "2. Life", title: "法语生活场景", desc: "餐厅、购物、交通、住宿、医疗和日常求助。", words: makeRows("menu:菜单,commander:点餐,payer:付款,addition:账单,reçu:收据,carte:卡,espèces:现金,prix:价格,réduction:折扣,taille:尺码,couleur:颜色,vêtement:衣服,chaussures:鞋,gare:车站,métro:地铁,bus:公交,taxi:出租车,aéroport:机场,billet:票,sortie:出口,entrée:入口,réservation:预订,hôtel:酒店,clé:钥匙,adresse:地址,téléphone:电话,hôpital:医院,pharmacie:药店,rhume:感冒,fièvre:发烧,avoir mal:疼,aide:帮助,lentement:慢慢地,répéter:重复", "fr") },
  { lang: "fr", id: "fr-business", order: "3. Work", title: "法语职场与邮件", desc: "会议、邮件、客户、项目、报价和进度表达。", words: makeRows("réunion:会议,rendez-vous:预约,document:文件,rapport:报告,confirmer:确认,demande:请求,répondre:回复,pièce jointe:附件,délai:期限,progrès:进展,terminer:完成,problème:问题,résoudre:解决,proposition:提案,client:客户,responsable:负责人,contrat:合同,budget:预算,devis:报价,ventes:销售额,coût:成本,approuver:批准,vérifier:检查,modifier:修改,partager:分享,collaborer:合作,priorité:优先级,efficacité:效率,qualité:质量,objectif:目标", "fr") },
  { lang: "fr", id: "fr-advanced", order: "4. Advanced", title: "法语考试与高级阅读", desc: "DELF/DALF、新闻、评论和学术阅读高频词。", words: makeRows("société:社会,économie:经济,politique:政治,culture:文化,éducation:教育,environnement:环境,technologie:技术,intelligence artificielle:人工智能,changement:变化,développement:发展,influence:影响,cause:原因,résultat:结果,possibilité:可能性,nécessité:必要性,importance:重要性,relation:关系,tendance:趋势,analyse:分析,affirmation:主张,fondement:根据,comparaison:比较,différence:差异,point commun:共同点,avantage:优点,inconvénient:缺点,solution:解决方案,politique publique:公共政策,système:制度,droit:权利,responsabilité:责任,participation:参与,conflit:冲突,coopération:合作,durabilité:可持续性", "fr") }
];
const MEGA_LANGUAGE_PACKS = [
  { lang: "ko", id: "ko-mega", order: "5. Mega", title: "韩语综合高频扩展", desc: "继续扩充身体、情绪、自然、社会、学习、媒体和专业主题词。", words: makeRows("머리:头,눈:眼睛,코:鼻子,입:嘴,귀:耳朵,손:手,발:脚,몸:身体,마음:内心,건강:健康,운동:运动,잠:睡眠,꿈:梦,기분:心情,행복:幸福,슬픔:悲伤,분노:愤怒,두려움:恐惧,걱정:担心,희망:希望,사랑:爱,믿음:信任,습관:习惯,선택:选择,기회:机会,위험:风险,실수:错误,경험:经验,성공:成功,실패:失败,계획:计划,준비:准备,연습:练习,시험:考试,질문:问题,대답:回答,설명:说明,의견:意见,생각:想法,정보:信息,뉴스:新闻,기사:报道,인터넷:互联网,사진:照片,영상:视频,음악:音乐,영화:电影,책:书,글:文章,언어:语言,문법:语法,발음:发音,단어:单词,문장:句子,자연:自然,하늘:天空,바다:大海,강:河流,산:山,숲:森林,비:雨,눈:雪,바람:风,날씨:天气,동물:动物,식물:植物,에너지:能源,기후:气候,오염:污染,보호:保护,도시:城市,마을:村庄,건물:建筑,도로:道路,교통:交通,인구:人口,산업:产业,시장:市场,가격:价格,소비:消费,생산:生产,서비스:服务,법:法律,권리:权利,자유:自由,평등:平等,안전:安全,범죄:犯罪,역사:历史,전통:传统,예술:艺术,과학:科学,연구:研究,자료:资料,증거:证据,전략:战略,결정:决定,성과:成果,전문가:专家", "ko") },
  { lang: "ja", id: "ja-mega", order: "5. Mega", title: "日语综合高频扩展", desc: "覆盖身体、情绪、自然、社会、学习、媒体和专业主题。", words: makeRows("頭:头,目:眼睛,鼻:鼻子,口:嘴,耳:耳朵,手:手,足:脚,体:身体,心:心,健康:健康,運動:运动,睡眠:睡眠,夢:梦,気分:心情,幸せ:幸福,悲しみ:悲伤,怒り:愤怒,恐れ:恐惧,心配:担心,希望:希望,愛:爱,信頼:信任,習慣:习惯,選択:选择,機会:机会,危険:风险,間違い:错误,経験:经验,成功:成功,失敗:失败,計画:计划,準備:准备,練習:练习,試験:考试,質問:问题,答え:回答,説明:说明,意見:意见,考え:想法,情報:信息,ニュース:新闻,記事:报道,インターネット:互联网,写真:照片,動画:视频,音楽:音乐,映画:电影,本:书,文章:文章,言語:语言,文法:语法,発音:发音,単語:单词,文:句子,自然:自然,空:天空,海:大海,川:河流,山:山,森:森林,雨:雨,雪:雪,風:风,天気:天气,動物:动物,植物:植物,エネルギー:能源,気候:气候,汚染:污染,保護:保护,都市:城市,村:村庄,建物:建筑,道路:道路,交通:交通,人口:人口,産業:产业,市場:市场,価格:价格,消費:消费,生産:生产,サービス:服务,法律:法律,権利:权利,自由:自由,平等:平等,安全:安全,犯罪:犯罪,歴史:历史,伝統:传统,芸術:艺术,科学:科学,研究:研究,資料:资料,証拠:证据,戦略:战略,決定:决定,成果:成果,専門家:专家", "ja") },
  { lang: "de", id: "de-mega", order: "5. Mega", title: "德语综合高频扩展", desc: "从 A2 到 C1 常见主题：身体、情绪、自然、社会、学习和专业表达。", words: makeRows("der Kopf:头,das Auge:眼睛,die Nase:鼻子,der Mund:嘴,das Ohr:耳朵,die Hand:手,der Fuß:脚,der Körper:身体,das Herz:心,die Gesundheit:健康,die Bewegung:运动,der Schlaf:睡眠,der Traum:梦,die Stimmung:心情,das Glück:幸福,die Trauer:悲伤,die Wut:愤怒,die Angst:恐惧,die Sorge:担心,die Hoffnung:希望,die Liebe:爱,das Vertrauen:信任,die Gewohnheit:习惯,die Wahl:选择,die Chance:机会,das Risiko:风险,der Fehler:错误,die Erfahrung:经验,der Erfolg:成功,das Scheitern:失败,der Plan:计划,die Vorbereitung:准备,die Übung:练习,die Prüfung:考试,die Frage:问题,die Antwort:回答,die Erklärung:说明,die Meinung:意见,der Gedanke:想法,die Information:信息,die Nachrichten:新闻,der Artikel:报道,das Internet:互联网,das Foto:照片,das Video:视频,die Musik:音乐,der Film:电影,das Buch:书,der Text:文章,die Sprache:语言,die Grammatik:语法,die Aussprache:发音,das Wort:单词,der Satz:句子,die Natur:自然,der Himmel:天空,das Meer:大海,der Fluss:河流,der Berg:山,der Wald:森林,der Regen:雨,der Schnee:雪,der Wind:风,das Wetter:天气,das Tier:动物,die Pflanze:植物,die Energie:能源,das Klima:气候,die Verschmutzung:污染,der Schutz:保护,die Großstadt:大城市,das Dorf:村庄,das Gebäude:建筑,die Straße:道路,der Verkehr:交通,die Bevölkerung:人口,die Industrie:产业,der Markt:市场,der Preis:价格,der Konsum:消费,die Produktion:生产,die Dienstleistung:服务,das Gesetz:法律,das Recht:权利,die Freiheit:自由,die Gleichheit:平等,die Sicherheit:安全,das Verbrechen:犯罪,die Geschichte:历史,die Tradition:传统,die Kunst:艺术,die Wissenschaft:科学,die Forschung:研究,die Daten:数据,der Beweis:证据,die Strategie:战略,die Entscheidung:决定,die Leistung:成果,der Experte:专家", "de") },
  { lang: "es", id: "es-mega", order: "5. Mega", title: "西班牙语综合高频扩展", desc: "覆盖生活、情绪、自然、社会、学习、媒体和专业阅读。", words: makeRows("cabeza:头,ojo:眼睛,nariz:鼻子,boca:嘴,oído:耳朵,mano:手,pie:脚,cuerpo:身体,corazón:心,salud:健康,ejercicio:运动,sueño:睡眠,sueño meta:梦想,ánimo:心情,felicidad:幸福,tristeza:悲伤,ira:愤怒,miedo:恐惧,preocupación:担心,esperanza:希望,amor:爱,confianza:信任,hábito:习惯,elección:选择,oportunidad:机会,riesgo:风险,error:错误,experiencia:经验,éxito:成功,fracaso:失败,plan:计划,preparación:准备,práctica:练习,examen:考试,pregunta:问题,respuesta:回答,explicación:说明,opinión:意见,pensamiento:想法,información:信息,noticias:新闻,artículo:报道,internet:互联网,foto:照片,vídeo:视频,música:音乐,película:电影,libro:书,texto:文章,idioma:语言,gramática:语法,pronunciación:发音,palabra:单词,frase:句子,naturaleza:自然,cielo:天空,mar:大海,río:河流,montaña:山,bosque:森林,lluvia:雨,nieve:雪,viento:风,clima:天气/气候,animal:动物,planta:植物,energía:能源,contaminación:污染,protección:保护,ciudad:城市,pueblo:村庄,edificio:建筑,carretera:道路,tráfico:交通,población:人口,industria:产业,mercado:市场,precio:价格,consumo:消费,producción:生产,servicio:服务,ley:法律,derecho:权利,libertad:自由,igualdad:平等,seguridad:安全,delito:犯罪,historia:历史,tradición:传统,arte:艺术,ciencia:科学,investigación:研究,datos:数据,prueba:证据,estrategia:战略,decisión:决定,rendimiento:成果,experto:专家", "es") },
  { lang: "fr", id: "fr-mega", order: "5. Mega", title: "法语综合高频扩展", desc: "从生活词到 C1 阅读主题，补足长期学习需要的词量。", words: makeRows("tête:头,œil:眼睛,nez:鼻子,bouche:嘴,oreille:耳朵,main:手,pied:脚,corps:身体,cœur:心,santé:健康,exercice:运动,sommeil:睡眠,rêve:梦,humeur:心情,bonheur:幸福,tristesse:悲伤,colère:愤怒,peur:恐惧,inquiétude:担心,espoir:希望,amour:爱,confiance:信任,habitude:习惯,choix:选择,occasion:机会,risque:风险,erreur:错误,expérience:经验,succès:成功,échec:失败,plan:计划,préparation:准备,pratique:练习,examen:考试,question:问题,réponse:回答,explication:说明,opinion:意见,pensée:想法,information:信息,actualités:新闻,article:报道,internet:互联网,photo:照片,vidéo:视频,musique:音乐,film:电影,livre:书,texte:文章,langue:语言,grammaire:语法,prononciation:发音,mot:单词,phrase:句子,nature:自然,ciel:天空,mer:大海,rivière:河流,montagne:山,forêt:森林,pluie:雨,neige:雪,vent:风,météo:天气,animal:动物,plante:植物,énergie:能源,climat:气候,pollution:污染,protection:保护,ville:城市,village:村庄,bâtiment:建筑,route:道路,circulation:交通,population:人口,industrie:产业,marché:市场,prix:价格,consommation:消费,production:生产,service:服务,loi:法律,droit:权利,liberté:自由,égalité:平等,sécurité:安全,crime:犯罪,histoire:历史,tradition:传统,art:艺术,science:科学,recherche:研究,données:数据,preuve:证据,stratégie:战略,décision:决定,résultat:成果,expert:专家", "fr") }
];
COURSE_PACKS.push(...MEGA_LANGUAGE_PACKS);
LANGUAGE_PACKS.push(...COURSE_PACKS);
const languageDecks = LANGUAGE_PACKS.map((pack) => ({
  id: pack.id || `${pack.lang}-basic`,
  language: pack.lang,
  order: pack.order || LANGUAGE_META[pack.lang].name,
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
  phonetic: pronunciation || word,
  deckId: pack.id || `${pack.lang}-basic`,
  deckTitle: pack.title,
  language: pack.lang,
  locale: LANGUAGE_META[pack.lang].locale,
  type: "headword",
  index,
  family: [],
  morphemes: [{ part: word, role: "基础表达", meaning: "先掌握发音、意思和使用场景" }],
  meanings: [{ cn, example: example || word, exampleZh: exampleZh || cn }],
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
