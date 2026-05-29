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
  },
  {
    id: "native", title: "母语者口语词典", tone: "green", order: "真实对话",
    desc: "把课本词变成自然、地道、不过度正式的英语表达。",
    words: "catch up:叙旧/赶上,figure out:弄明白,work out:解决/进展顺利,make sense:说得通,come up:出现/被提到,bring up:提起,run into:偶遇/遇到问题,look into:调查,sort out:处理好,hang out:闲逛/一起玩,show up:出现/到场,turn out:结果是,pick up:接人/学会/取东西,drop by:顺路拜访,check in:确认情况/办理入住,follow up:跟进,get back to:回复,reach out:联系,heads up:提前提醒,on the same page:想法一致,no worries:没关系,all set:都准备好了,good to go:可以开始了,not a big deal:没什么大不了,up to you:由你决定,works for me:我可以/对我合适,sounds good:听起来不错,fair enough:也有道理,I mean:我是说,you know:你知道/口语停顿,kind of:有点儿,pretty much:差不多,at some point:找个时候/某个阶段,for now:暂时,so far:到目前为止,right away:马上,in a bit:过一会儿,by the way:顺便说一下,to be honest:说实话,long story short:长话短说,that said:话虽如此,as far as I know:据我所知,I was wondering:我想问一下,would you mind:你介意吗,let me know:告诉我,keep me posted:随时告诉我,I'll take care of it:我来处理,I'm on it:我正在办,I'll pass:我就不了,I'm good:不用了/我可以,can't make it:去不了/赶不上,make it work:想办法搞定"
  },
  {
    id: "core3000", title: "高频核心扩展词典", tone: "blue", order: "Oxford/考试高频",
    desc: "补齐阅读、听力、写作里反复出现的基础高频词，适合长期刷量。",
    words: "accept:接受,accident:事故,according:根据,activity:活动,actually:实际上,address:地址/处理,adult:成年人,advice:建议,against:反对,agency:机构,allow:允许,almost:几乎,alone:独自,along:沿着,already:已经,although:尽管,amount:数量,ancient:古代的,animal:动物,announce:宣布,another:另一个,anxiety:焦虑,anywhere:任何地方,appear:出现,application:申请/应用,area:区域,argue:争论,army:军队,article:文章,artist:艺术家,attention:注意力,audience:观众,authority:权威/当局,avoid:避免,background:背景,basic:基本的,behavior:行为,belong:属于,beyond:超出,billion:十亿,birth:出生,border:边界,brain:大脑,brief:简短的,broad:广泛的,business:商业,camera:相机,campaign:活动/运动,cancer:癌症,career:职业,carry:携带,cause:导致/原因,central:中心的,century:世纪,certain:确定的,chance:机会,character:性格/角色,charge:收费/充电,choice:选择,citizen:公民,claim:声称,classical:经典的,climate:气候,close:关闭/亲密的,collect:收集,college:大学,common:常见的,complete:完成,condition:条件/状况,connection:连接/关系,control:控制,cost:成本,county:县,couple:一对,course:课程/过程,court:法院,cover:覆盖,crowd:人群,current:当前的,damage:损害,danger:危险,debate:辩论,degree:程度/学位,demand:需求,depend:依赖,direction:方向,discuss:讨论,disease:疾病,distance:距离,doctor:医生,doubt:怀疑,dream:梦想/梦,drive:驾驶/驱动,earth:地球,easily:容易地,eastern:东方的,education:教育,either:任一,election:选举,employee:员工,engine:引擎,enjoy:享受,enough:足够,entire:整个的,especially:尤其,event:事件,everyone:每个人,everything:一切,exactly:准确地,except:除了,exercise:锻炼/练习,exist:存在,expect:期待,expert:专家,explain:解释,express:表达,face:面对/脸,facility:设施,factor:因素,failure:失败,family:家庭,famous:著名的,fast:快速的,fear:害怕,feeling:感觉,field:领域/田地,finally:最终,finger:手指,finish:完成,foreign:外国的,forget:忘记,former:以前的,forward:向前,free:免费的/自由的,future:未来,garden:花园,general:一般的,generation:一代,government:政府,great:伟大的,ground:地面,growth:增长,guess:猜测,health:健康,heart:心脏/内心,heavy:重的,history:历史,however:然而,human:人类的,imagine:想象,industry:产业,inside:在里面,instead:代替,interest:兴趣/利益,international:国际的,interview:面试/采访,island:岛屿,journey:旅程,knowledge:知识,language:语言,later:后来,leader:领导者,least:最少,leave:离开,legal:法律的,letter:信/字母,level:水平,likely:可能的,local:当地的,major:主要的,manage:管理,market:市场,material:材料,matter:事情/重要,medical:医学的,member:成员,memory:记忆,message:消息,method:方法,middle:中间的,million:百万,modern:现代的,moment:时刻,money:钱,movement:运动,nation:国家,natural:自然的,necessary:必要的,network:网络,notice:注意/通知,number:数字,object:物体/反对,office:办公室,official:官方的,option:选项,ordinary:普通的,organization:组织,outside:外面,patient:病人/耐心的,pattern:模式,period:时期,personal:个人的,physical:身体的,position:位置/职位,possible:可能的,power:力量,practice:练习,prepare:准备,present:现在的/呈现,private:私人的,probably:可能,process:过程,produce:生产,program:项目/程序,property:财产,protect:保护,provide:提供,purpose:目的,quickly:快速地,realize:意识到,receive:收到,recent:最近的,record:记录,remain:保持,remember:记得,report:报告,return:返回,season:季节,section:部分,serious:严重的,service:服务,several:几个,share:分享,similar:相似的,simple:简单的,single:单个的,society:社会,special:特殊的,standard:标准,station:车站,story:故事,student:学生,success:成功,suddenly:突然,suggest:建议,system:系统,teacher:老师,theory:理论,thought:想法,through:通过,together:一起,toward:朝着,trouble:麻烦,understand:理解,value:价值,various:各种各样的,voice:声音,whole:整个的,window:窗户,within:在……之内,without:没有,wonder:想知道,worker:工人,world:世界"
  },
  {
    id: "advanced", title: "高级阅读扩展词典", tone: "wine", order: "六级/托福/考研",
    desc: "抽象阅读、学术文章、评论文章中高频出现的高级词。",
    words: "abnormal:异常的,abolish:废除,absolute:绝对的,absorb:吸收,accelerate:加速,accessible:可接近的,accompany:陪伴/伴随,accomplish:完成,accordingly:因此,acknowledge:承认,adaptable:适应性强的,administration:管理/政府,advocate:提倡/倡导者,affection:感情,agenda:议程,aggressive:有攻击性的,aid:援助,allege:声称,ambition:抱负,amend:修正,ancestor:祖先,annual:年度的,appeal:吸引/呼吁,appoint:任命,appreciate:欣赏/感激,arbitrary:任意的,assemble:集合/组装,assert:断言,asset:资产,assign:分配,associate:联系/伙伴,attain:获得,automatically:自动地,barrier:障碍,biography:传记,capable:有能力的,capacity:容量/能力,certainty:确定性,characteristic:特征,chronicle:编年史,circumstance:情况,civilization:文明,clarity:清晰,coincide:同时发生,collapse:崩溃,colleague:同事,collective:集体的,commitment:承诺,commodity:商品,compatible:兼容的,compel:迫使,compete:竞争,complexity:复杂性,complicated:复杂的,component:组成部分,comprise:包括,conceive:设想,conclude:得出结论,conflict:冲突,conform:遵守,confront:面对,consecutive:连续的,conserve:保护/节约,considerable:相当大的,constant:持续的,constitute:构成,consult:咨询,consume:消耗,context:语境,contrary:相反的,contribute:贡献,controversy:争议,conventional:传统的,cooperate:合作,corporate:公司的,correlate:相关,credible:可信的,crisis:危机,criticize:批评,crucial:关键的,cultivate:培养,decline:下降/拒绝,dedicate:奉献,defend:防御,deficiency:不足,define:定义,demonstrate:证明/展示,denote:表示,depression:抑郁/萧条,derive:源自,deserve:值得,detect:发现,determine:决定,devote:投入,differentiate:区分,diminish:减少,discipline:学科/纪律,display:展示,dispose:处理,distinctive:独特的,distinguish:区分,diversity:多样性,dominate:支配,dramatic:显著的,durable:耐用的,economical:经济的,eliminate:消除,emerge:出现,emphasis:强调,empirical:实证的,encounter:遇到,endeavor:努力,engage:参与,enhance:提高,enormous:巨大的,ensure:确保,equivalent:等同的,essentially:本质上,estimate:估计,ethical:伦理的,evaluate:评估,eventually:最终,evidently:明显地,evolution:进化,exaggerate:夸大,exceed:超过,exception:例外,excessive:过度的,exclude:排除,exhibit:展示,expand:扩张,explicit:明确的,exploit:利用,external:外部的,facilitate:促进,feasible:可行的,flexibility:灵活性,fluctuate:波动,foundation:基础,fragment:碎片,frequency:频率,frustrate:使沮丧,functional:功能性的,fundamental:根本的,generate:产生,gradual:逐渐的,guarantee:保证,highlight:突出,hostile:敌对的,identical:相同的,ideology:意识形态,ignorance:无知,illustrate:说明,immense:巨大的,implement:实施,implicit:含蓄的,imply:暗示,impose:强加,incentive:激励,increasingly:越来越多地,inevitable:不可避免的,infer:推断,influence:影响,initially:最初,innovation:创新,insight:洞察,inspect:检查,integral:不可或缺的,integrate:整合,interact:互动,internal:内部的,interpret:解释,intervention:干预,intrinsic:内在的,involve:涉及,isolate:隔离,justify:证明合理,legitimate:合法的,liberal:自由的,logic:逻辑,maintain:维持,manipulate:操纵,margin:边缘/利润,mature:成熟的,maximize:最大化,mechanism:机制,migrate:迁移,minimize:最小化,modify:修改,monitor:监控,motive:动机,mutual:相互的,neglect:忽视,neutral:中立的,notion:概念,objective:客观的/目标,obligation:义务,obtain:获得,occupy:占据,occur:发生,oppose:反对,optimistic:乐观的,orientation:方向/定位,outcome:结果,overall:总体的,paradox:悖论,parallel:平行的,parameter:参数,participate:参与,perceive:感知,persist:坚持,perspective:视角,phenomenon:现象,portion:部分,pose:造成/提出,potential:潜在的,precede:先于,preserve:保存,presume:假定,prevail:盛行,primary:主要的,prior:先前的,proceed:继续,prohibit:禁止,proportion:比例,prospect:前景,purchase:购买,pursue:追求,radical:激进的,rational:理性的,react:反应,recognize:认出/承认,refine:改进,reflect:反映,reinforce:加强,relevant:相关的,reliable:可靠的,reluctant:不情愿的,remove:移除,represent:代表,require:要求,reside:居住,resolve:解决,restore:恢复,restrict:限制,retain:保留,reveal:揭示,reverse:逆转,revise:修改,rigid:僵硬的,scenario:情景,sequence:顺序,significance:重要性,simultaneously:同时,solely:仅仅,specify:具体说明,stable:稳定的,statistic:统计数据,stimulate:刺激,subsequent:随后的,substitute:替代,sufficient:足够的,supplement:补充,sustain:维持,symbolic:象征性的,temporary:暂时的,tension:紧张,terminate:终止,thereby:因此,transform:转变,transition:过渡,trigger:触发,undergo:经历,undertake:承担,uniform:统一的,unique:独特的,valid:有效的,vary:变化,vehicle:车辆/媒介,version:版本,via:通过,violate:违反,virtual:虚拟的,visible:可见的,voluntary:自愿的,widespread:广泛的"
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

const PHRASE_CN = {
  "abandon a plan": "放弃一个计划",
  "abandon an idea": "放弃一个想法",
  "abandon the project": "放弃这个项目",
  "abandon hope": "放弃希望",
  "the ability to communicate": "沟通能力",
  "improve your ability": "提高你的能力",
  "academic research": "学术研究",
  "academic writing": "学术写作",
  "academic performance": "学业表现",
  "access the website": "访问网站",
  "internet access": "网络访问权限",
  "limited access": "有限访问权限",
  "access to information": "获取信息的渠道",
  "accurate information": "准确信息",
  "an accurate answer": "准确答案",
  "achieve a goal": "实现目标",
  "achieve success": "取得成功",
  "adapt to change": "适应变化",
  "adapt to a new environment": "适应新环境",
  "analyze the data": "分析数据",
  "analyze the problem": "分析问题",
  "careful analysis": "仔细分析",
  "a practical approach": "实用的方法",
  "approach the problem": "处理这个问题",
  "a different approach": "不同的方法",
  "benefit from practice": "从练习中受益",
  "health benefits": "健康益处",
  "face a challenge": "面对挑战",
  "overcome challenges": "克服挑战",
  "compare A with B": "把 A 和 B 比较",
  "confirm the details": "确认细节",
  "confirmation email": "确认邮件",
  "describe the situation": "描述情况",
  "brief description": "简短描述",
  "improve your English": "提高英语",
  "improve efficiency": "提高效率",
  "indicate a trend": "显示趋势",
  "meet the deadline": "赶上截止日期",
  "miss the deadline": "错过截止日期",
  "send an invoice": "发送发票",
  "invoice number": "发票号码",
  "make a reservation": "预订",
  "cancel a reservation": "取消预订",
  "protect privacy": "保护隐私",
  "privacy settings": "隐私设置",
  "under pressure": "在压力下",
  "reduce pressure": "减轻压力",
  "communicate clearly": "清楚沟通",
  "communication skills": "沟通技能"
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

const SPECIAL_MEANINGS = {
  access: [
    { cn: "进入或使用某物的权限", example: "Employees need secure access to the internal system." },
    { cn: "获取信息、服务或资源", example: "The course gives students access to hundreds of practice questions." }
  ],
  account: [
    { cn: "账户", example: "I created a new account for the learning platform." },
    { cn: "说明或叙述", example: "The witness gave a detailed account of what happened." }
  ],
  approach: [
    { cn: "方法、方式", example: "This approach works well for students who need structure." },
    { cn: "接近、靠近", example: "We watched the train approach the platform." }
  ],
  concern: [
    { cn: "担忧", example: "Cost is still a major concern for many families." },
    { cn: "涉及、关系到", example: "The new policy concerns all international students." }
  ],
  decline: [
    { cn: "下降、减少", example: "The report shows a steady decline in sales." },
    { cn: "礼貌拒绝", example: "She declined the invitation because she was traveling." }
  ],
  conduct: [
    { cn: "实施、进行", example: "The team conducted a survey before changing the product." },
    { cn: "行为、举止", example: "Professional conduct is expected in every meeting." }
  ],
  issue: [
    { cn: "问题、事项", example: "We need to resolve this issue before the launch." },
    { cn: "发布、发出", example: "The company will issue an official statement today." }
  ],
  policy: [
    { cn: "政策", example: "The government introduced a new housing policy." },
    { cn: "公司或机构规定", example: "Please read the refund policy before you make a purchase." }
  ],
  pressure: [
    { cn: "压力", example: "She performs well even under pressure." },
    { cn: "催促、施压", example: "The client pressured the team to finish early." }
  ],
  reservation: [
    { cn: "预订", example: "I made a dinner reservation for seven o'clock." },
    { cn: "保留意见", example: "He supported the idea, but he still had a few reservations." }
  ],
  "figure out": [
    { cn: "弄明白", example: "I need a few minutes to figure out what went wrong." },
    { cn: "想出办法", example: "We'll figure out a better schedule next week." }
  ],
  "catch up": [
    { cn: "叙旧、聊近况", example: "Let's catch up over coffee this weekend." },
    { cn: "赶上进度", example: "I missed two classes, so I need to catch up tonight." }
  ],
  "work out": [
    { cn: "解决、顺利发展", example: "Don't worry. We'll make a plan and work it out." },
    { cn: "锻炼", example: "She works out three times a week after work." }
  ],
  "make sense": [
    { cn: "说得通、有道理", example: "Your explanation makes sense now." },
    { cn: "适合、合理", example: "It makes sense to review the basics first." }
  ],
  "come up": [
    { cn: "出现、发生", example: "Something came up, so I need to leave early." },
    { cn: "被提到", example: "Your name came up during the meeting." }
  ],
  "bring up": [
    { cn: "提起话题", example: "I didn't want to bring up money at dinner." }
  ],
  "run into": [
    { cn: "偶遇", example: "I ran into an old classmate at the station." },
    { cn: "遇到问题", example: "We ran into a small issue with the payment." }
  ],
  "look into": [
    { cn: "调查、了解", example: "I'll look into the problem and get back to you." }
  ],
  "sort out": [
    { cn: "处理好、理顺", example: "Let's sort out the schedule before Friday." }
  ],
  "show up": [
    { cn: "出现、到场", example: "He showed up ten minutes late but apologized right away." }
  ],
  "turn out": [
    { cn: "结果是", example: "It turned out that the file was in the wrong folder." }
  ],
  "pick up": [
    { cn: "接人、取东西", example: "Can you pick me up at the airport tomorrow?" },
    { cn: "学会", example: "She picked up Spanish while living in Mexico." }
  ],
  "drop by": [
    { cn: "顺路拜访", example: "Feel free to drop by if you're in the area." }
  ],
  "get back to": [
    { cn: "回复某人", example: "I'll check the details and get back to you this afternoon." },
    { cn: "回到某事", example: "Let's get back to the main question." }
  ],
  "reach out": [
    { cn: "主动联系", example: "If you have any questions, please reach out anytime." }
  ],
  "heads up": [
    { cn: "提前提醒", example: "Just a heads up: the meeting starts ten minutes early." }
  ],
  "on the same page": [
    { cn: "想法一致、信息同步", example: "Before we continue, let's make sure we're on the same page." }
  ],
  "I was wondering": [
    { cn: "礼貌地提出请求或问题", example: "I was wondering if you could send me the file again." }
  ],
  "would you mind": [
    { cn: "礼貌询问对方是否介意", example: "Would you mind closing the window?" }
  ],
  "keep me posted": [
    { cn: "随时告诉我进展", example: "Please keep me posted if anything changes." }
  ],
  "all set": [
    { cn: "都准备好了", example: "I'm all set for the presentation." }
  ],
  "good to go": [
    { cn: "可以开始了", example: "The slides are ready, so we're good to go." }
  ],
  "works for me": [
    { cn: "对我合适", example: "Tuesday afternoon works for me." }
  ],
  "sounds good": [
    { cn: "听起来不错", example: "Sounds good. I'll see you at three." }
  ],
  "can't make it": [
    { cn: "去不了、赶不上", example: "I'm sorry, but I can't make it to the meeting today." }
  ],
  "I'm on it": [
    { cn: "我正在处理", example: "I'm on it. I'll send you the update in ten minutes." }
  ]
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
  if (/(s|x|ch|sh)$/.test(word)) return `${word}es`;
  if (word.endsWith("s")) return word;
  return `${word}s`;
}

function familyFor(word) {
  const manual = MANUAL_FAMILY[word] || [];
  if (isPhrase(word) || manual.length) return [...new Set(manual)].slice(0, 5);
  const verbLike = /^(abandon|achieve|adapt|adjust|affect|approve|arrange|assume|compare|confirm|consider|create|decline|deliver|describe|develop|explain|focus|include|expand|allocate|anticipate|cease|collapse|consume|contradict|derive|emerge|enhance|evaluate|exclude|generate|highlight|interpret|obtain|participate|accumulate|alter|attribute|compensate|conduct|constrain|convert|detect|establish|evolve|extract|facilitate|integrate|monitor|clarify|coordinate|delegate|implement|prioritize|summarize|update|request|reschedule|postpone|resolve|install|delete|download|upload|configure|encrypt|forgive|encourage|understand|apologize|address|tackle)$/.test(word);
  const nounLike = /^(account|advantage|challenge|culture|detail|effort|environment|experience|agenda|applicant|appointment|branch|budget|candidate|client|conference|contract|deadline|department|deposit|discount|employee|expense|invoice|manager|notice|procedure|proposal|purchase|receipt|refund|reservation|schedule|supplier|transaction|warranty|appliance|balcony|bank|battery|clinic|complaint|entrance|grocery|landlord|neighbor|package|pharmacy|queue|roommate|screen|signal|subway|wallet|passport|ticket|visa|route|souvenir|emotion|expectation|relationship|choice|argument)$/.test(word);
  const safe = verbLike
    ? [`${word}s`, `${word}ed`, `${word}ing`]
    : nounLike
      ? [plural(word)]
      : [];
  return [...new Set([...manual, ...safe])].slice(0, 5);
}

function isPhrase(word) {
  return /\s/.test(word) || word.includes("-");
}

function phrasesFor(word, deckId) {
  if (SPECIAL_PHRASES[word]) return SPECIAL_PHRASES[word];
  if (deckId === "native") {
    const first = word.split(" ")[0].toLowerCase();
    if (/^(catch|figure|work|make|come|bring|run|look|sort|hang|show|turn|pick|drop|check|follow|get|reach|let|keep)$/.test(first)) {
      return [
        `${word} later`,
        `${word} with you`,
        `need to ${word}`,
        `Can we ${word}?`
      ];
    }
    return [
      `${word}.`,
      `That's ${word}.`,
      `It sounds ${word}.`,
      `Use it when the tone is casual.`
    ];
  }
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
  return templates[deckId] || [`a clear example of ${word}`, `${word} in context`, `the meaning of ${word}`, `use "${word}" naturally`];
}

function phraseMeaning(phrase, word, deckId, cn = "") {
  if (PHRASE_CN[phrase]) return PHRASE_CN[phrase];
  const meaning = String(cn).split("/")[0] || word;
  if (deckId === "native") {
    if (phrase.endsWith("later")) return "稍后再聊/稍后处理";
    if (phrase.includes("with you")) return "和你一起说清楚/处理";
    if (phrase.startsWith("need to")) return "需要去做这件事";
    if (phrase.startsWith("Can we")) return "我们可以这样做吗？";
    if (phrase.startsWith("That's")) return "那样说很自然/合适";
    return "自然口语场景里的表达";
  }
  if (phrase.startsWith("a clear example of")) return `关于 ${word} 的清楚例子`;
  if (phrase.endsWith("in context")) return `${word} 在语境中的用法`;
  if (phrase.startsWith("the meaning of")) return `${word} 的含义`;
  if (phrase.startsWith("use ")) return `自然使用 ${word}`;
  if (phrase === `${word} a problem`) return `${meaning}一个问题`;
  if (phrase === `${word} the plan`) return `${meaning}这个计划`;
  if (phrase === `${word} the result`) return `${meaning}结果`;
  if (phrase === `${word} carefully`) return `仔细地${meaning}`;
  if (phrase === `a ${word} approach`) return `${meaning}的方法`;
  if (phrase === `${word} information`) return `${meaning}的信息`;
  if (phrase === `${word} enough`) return `足够${meaning}`;
  if (phrase === `remain ${word}`) return `保持${meaning}`;
  if (phrase === `the ${word} of the system`) return `系统的${meaning}`;
  if (phrase === `${word} process`) return `${meaning}过程`;
  if (phrase === `${word} pattern`) return `${meaning}模式`;
  if (phrase === `a major ${word}`) return `一个重要的${meaning}`;
  if (phrase === `${word} solution`) return `${meaning}解决方案`;
  if (phrase === `daily ${word}`) return `日常${meaning}`;
  if (phrase === `check the ${word}`) return `检查${meaning}`;
  if (phrase === `${word} nearby`) return `附近的${meaning}`;
  if (phrase === `${word} desk`) return `${meaning}服务台`;
  if (phrase === `book a ${word}`) return `预订${meaning}`;
  if (phrase === `more ${word}`) return `更${meaning}`;
  if (phrase === `${word} argument`) return `${meaning}论点`;
  if (phrase === `${word} example`) return `${meaning}例子`;
  if (phrase.includes(" problem")) return `和 ${word} 相关的问题`;
  if (phrase.includes(" evidence")) return `和 ${word} 相关的证据`;
  if (phrase.includes(" policy")) return `和 ${word} 相关的政策`;
  if (phrase.includes(" meeting")) return `和 ${word} 相关的会议`;
  if (phrase.includes(" request")) return `和 ${word} 相关的请求`;
  return `常见搭配：${phrase}`;
}

function phraseItemsFor(word, deckId, cn = "") {
  return phrasesFor(word, deckId).map((phrase) => ({
    text: phrase,
    cn: phraseMeaning(phrase, word, deckId, cn)
  }));
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
    mind: `It is important to talk about ${word} honestly.`,
    native: `You can say "${word}" in a casual conversation without sounding too formal.`
  };
  return map[deckId] || `I can use ${word} in a real sentence.`;
}

function meaningExamplesFor(word, cn, deckId) {
  if (SPECIAL_MEANINGS[word]) return SPECIAL_MEANINGS[word];
  const parts = String(cn).split("/").map((item) => item.trim()).filter(Boolean);
  const baseExamples = {
    cet4: (part) => `A clear sentence helps you understand how "${word}" is used in everyday English.`,
    cet6: (part) => `In formal reading, "${word}" often makes the writer's meaning more precise.`,
    toefl: (part) => `In an academic lecture, you may hear "${word}" when the professor explains a process or idea.`,
    ielts: (part) => `In IELTS speaking or writing, "${word}" can help you express an idea more clearly.`,
    toeic: (part) => `In a workplace email, "${word}" should be used in a clear and professional sentence.`,
    business: (part) => `In a meeting, "${word}" can help you sound clear, practical, and professional.`,
    daily: (part) => `In daily conversation, "${word}" is useful when the situation is familiar and practical.`,
    writing: (part) => `In writing, "${word}" can make a sentence sound more accurate and controlled.`,
    roots: (part) => `The word "${word}" belongs to a family of words with a similar core meaning.`,
    tech: (part) => `In a technology context, "${word}" is useful when you talk about settings, systems, or data.`,
    travel: (part) => `When you travel, "${word}" may appear in signs, bookings, or conversations with staff.`,
    mind: (part) => `When you talk about feelings or relationships, "${word}" helps you express the idea respectfully.`,
    native: (part) => `Native speakers often say "${word}" when they want to sound natural and relaxed.`
  };
  return parts.map((part) => ({
    cn: part,
    example: (baseExamples[deckId] || baseExamples.cet4)(part)
  }));
}

function registerTextMap(entry) {
  return {
    ...entry,
    phraseItems: entry.phraseItems || phraseItemsFor(entry.word, entry.deckId, entry.cn),
    meanings: entry.meanings || meaningExamplesFor(entry.word, entry.cn, entry.deckId)
  };
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
      entries.push(registerTextMap({
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
      }));
    });
  }

  const phraseEntries = [];
  const seenPhrase = new Set(entries.map((x) => x.word));
  for (const base of entries) {
    for (const item of base.phraseItems || []) {
      if (phraseEntries.length >= 2800) break;
      const phrase = item.text;
      if (!phrase || seenPhrase.has(phrase)) continue;
      seenPhrase.add(phrase);
      phraseEntries.push(registerTextMap({
        id: id++,
        word: phrase,
        cn: item.cn,
        deckId: base.deckId,
        deckTitle: base.deckTitle,
        index: base.index + 0.05,
        phonetic: phoneticFor(phrase),
        root: "chunking",
        family: [base.word],
        phrases: [phrase],
        phraseItems: [item],
        meanings: [{ cn: item.cn, example: `Native speakers use "${phrase}" when the situation calls for this exact idea.` }],
        memory: `把 "${phrase}" 当成一个整体短语记，不要逐词翻译。先读顺，再替换场景造句。`,
        example: `You can use "${phrase}" as a ready-made expression in the right situation.`,
        type: "phrase",
        parent: base.word
      }));
    }
  }

  const seen = new Set(entries.map((x) => x.word));
  const generated = [];
  for (const base of entries) {
    for (const fam of base.family) {
      if (generated.length >= 820) break;
      if (!fam || seen.has(fam)) continue;
      seen.add(fam);
      const root = rootFor(fam);
      if (isPhrase(base.word)) continue;
      generated.push(registerTextMap({
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
        example: `${fam.charAt(0).toUpperCase() + fam.slice(1)} is commonly connected with ${base.word} in real usage.`,
        type: "derived",
        parent: base.word
      }));
    }
  }
  return entries.concat(phraseEntries, generated);
}

window.WORDFORGE_DECKS = DECK_SOURCES.map(({ words, ...deck }) => ({
  ...deck,
  count: words.split(",").length
}));
window.WORDFORGE_ROOTS = ROOT_LIBRARY;
window.WORDFORGE_WORDS = parseWords();
