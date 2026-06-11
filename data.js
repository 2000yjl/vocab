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
    id: "native", title: "母语者口语短语库", tone: "green", order: "真实对话",
    desc: "自然、地道、不过度正式的英语口语块，作为短语库单独学习。",
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

DECK_SOURCES.push({
  id: "megaWords",
  title: "真实主单词扩展词典",
  tone: "gold",
  order: "纯单词大库",
  desc: "只收录可以作为主线学习的单词，不把短语和派生词混进翻页队列。",
  words: "abroad:在国外,absence:缺席,absolute:绝对的,absorb:吸收,abuse:滥用,accent:口音,acceptable:可接受的,accompany:陪伴,accomplish:完成,accountant:会计,accuse:指责,accustomed:习惯的,acid:酸,acre:英亩,addition:增加,additional:额外的,adequately:充分地,adjustment:调整,admire:钦佩,admission:准入,adolescent:青少年,advance:前进/进步,advanced:高级的,advertise:做广告,advertisement:广告,affair:事务,affection:喜爱,afterward:后来,agent:代理人,agriculture:农业,airline:航空公司,alarm:警报,album:相册/专辑,alcohol:酒精,alert:警觉的,alike:相似的,alive:活着的,alongside:在旁边,alter:改变,altogether:总共,ambition:雄心,ancient:古代的,anger:愤怒,angle:角度,anniversary:周年纪念,annual:年度的,anxiously:焦急地,apartment:公寓,apology:道歉,appeal:吸引/呼吁,appearance:外貌,appetite:胃口,applaud:鼓掌,appointment:预约,appreciate:感激/欣赏,approximately:大约,architect:建筑师,argument:争论,arise:出现,arrangement:安排,arrival:到达,arrow:箭,ashamed:羞愧的,aside:在旁边,aspect:方面,assist:帮助,assistant:助手,association:协会,astonish:使惊讶,atmosphere:气氛,attach:附上,attempt:尝试,attend:参加,attitude:态度,attract:吸引,attractive:有吸引力的,automatic:自动的,available:可获得的,avenue:大道,award:奖项,aware:意识到的,awkward:尴尬的,baggage:行李,balanced:平衡的,barrier:障碍,basis:基础,battle:战斗,bean:豆,behalf:代表,belief:信念,bend:弯曲,beneath:在下方,beside:在旁边,betray:背叛,bitter:苦的,blame:责备,blank:空白的,bleed:流血,bless:祝福,blind:盲的,block:阻塞,boil:煮沸,bold:大胆的,border:边界,bother:打扰,bounce:弹起,boundary:边界,brave:勇敢的,breath:呼吸,breathe:呼吸,brick:砖,briefly:简短地,brilliant:杰出的,broadcast:广播,bunch:一束/一群,burden:负担,bury:埋葬,cabin:小屋,cable:电缆,calculate:计算,calm:平静的,cancel:取消,candidate:候选人,cap:帽子,capable:有能力的,capital:首都/资本,career:职业,carpet:地毯,carve:雕刻,casual:随意的,category:类别,ceiling:天花板,celebrate:庆祝,ceremony:仪式,certificate:证书,chain:链条,chairman:主席,challenging:有挑战性的,champion:冠军,channel:频道/渠道,chapter:章节,characteristic:特征,charm:魅力,chemical:化学的,chief:主要的/首领,childhood:童年,cigarette:香烟,circumstance:情况,classic:经典的,clerk:职员,client:客户,cliff:悬崖,clinic:诊所,clue:线索,coach:教练,coal:煤,coast:海岸,collapse:倒塌/崩溃,collar:衣领,collection:收藏,combine:结合,comfort:安慰,command:命令,commercial:商业的,commit:承诺/犯错,committee:委员会,communicate:沟通,comparison:比较,compete:竞争,complain:抱怨,complexity:复杂性,component:组成部分,compose:组成/创作,concentrate:集中,concept:概念,conclude:得出结论,confidently:自信地,conflict:冲突,confuse:使困惑,conscious:有意识的,consequence:结果,considerably:相当地,consist:由……组成,constant:持续的,construction:建设,consult:咨询,consumer:消费者,contain:包含,content:内容,continuous:连续的,contract:合同,contrast:对比,convenience:便利,convince:说服,cooperate:合作,cope:应对,core:核心,corporation:公司,correctly:正确地,cottage:小屋,council:委员会,county:县,courage:勇气,craft:手艺,crash:碰撞,creature:生物,criminal:罪犯,critic:评论家,crop:农作物,crossing:十字路口,cruel:残酷的,currency:货币,custom:习俗,cycle:循环,daily:每日的,dairy:乳制品,deadline:截止日期,deaf:聋的,debate:辩论,debt:债务,decade:十年,declare:宣布,decorate:装饰,decrease:减少,defeat:击败,defend:防御,delight:高兴,democracy:民主,demonstrate:展示/证明,dense:密集的,deny:否认,departure:离开,dependent:依赖的,deposit:押金,desert:沙漠,desire:渴望,desperate:绝望的,device:设备,devote:奉献,diagram:图表,differ:不同,dignity:尊严,directly:直接地,director:导演/主管,disability:残疾,disappear:消失,disappoint:使失望,disaster:灾难,discipline:纪律/学科,discount:折扣,display:展示,distant:遥远的,distinct:明显不同的,disturb:打扰,divide:分开,document:文件,domestic:国内的,donate:捐赠,dramatically:显著地,drawer:抽屉,due:到期的,dust:灰尘,duty:职责,eager:渴望的,earn:赚得,eastern:东方的,economics:经济学,editor:编辑,educate:教育,efficiently:高效地,elder:年长者,electric:电的,elegant:优雅的,elementary:初级的,embarrass:使尴尬,emotional:情绪的,emphasize:强调,enable:使能够,encounter:遇到,ending:结尾,endless:无尽的,engaged:忙于/订婚的,engineer:工程师,enormous:巨大的,ensure:确保,entertain:娱乐,entrance:入口,entry:进入/条目,envelope:信封,episode:一集/事件,equal:平等的,equipment:设备,escape:逃脱,essay:文章,essential:必要的,establish:建立,estimate:估计,ethical:伦理的,evaluate:评估,eventually:最终,evidence:证据,evil:邪恶的,evolution:进化,examine:检查,exchange:交换,excitement:兴奋,existence:存在,expand:扩大,expense:费用,experiment:实验,explode:爆炸,explore:探索,export:出口,exposure:暴露,extend:延伸,extraordinary:非凡的,facility:设施,faith:信任/信仰,familiar:熟悉的,fantastic:极好的,fare:票价,fascinate:使着迷,fashion:时尚,fault:错误,feather:羽毛,feature:特征/功能,federal:联邦的,fee:费用,fellow:同伴,fence:栅栏,festival:节日,fiction:小说,finance:金融,finding:发现,firm:公司/坚定的,flame:火焰,flash:闪光,flavor:味道,flexible:灵活的,float:漂浮,fold:折叠,folk:民间的,forecast:预测,forever:永远,formal:正式的,formerly:以前,fortunate:幸运的,founder:创始人,freeze:冻结,frequent:频繁的,friendship:友谊,frighten:使害怕,fuel:燃料,function:功能,gain:获得,gap:差距,garage:车库,gather:聚集,gene:基因,genuine:真正的,gesture:手势,global:全球的,glory:荣耀,govern:统治,gradually:逐渐地,grain:谷物,grand:宏大的,grant:授予,grateful:感激的,gravity:重力,grocery:杂货,guarantee:保证,guidance:指导,guilty:内疚的,habit:习惯,handle:处理,harbor:港口,hardly:几乎不,harmful:有害的,harvest:收获,hesitate:犹豫,highlight:突出,historical:历史的,hollow:空的,household:家庭的,humor:幽默,ideal:理想的,identity:身份,ignore:忽视,illegal:非法的,illustrate:说明,immediate:立即的,immigrant:移民,impact:影响,import:进口,impress:留下印象,income:收入,indeed:确实,independent:独立的,index:索引,indicate:表明,individual:个人,industrial:工业的,informal:非正式的,ingredient:原料,initial:最初的,injury:伤害,inner:内部的,innocent:无辜的,inquiry:询问,insist:坚持,instant:瞬间,institute:机构,instruction:说明,insurance:保险,intellectual:知识分子/智力的,intense:强烈的,intention:意图,internal:内部的,interpret:解释,interrupt:打断,interval:间隔,investigate:调查,involve:涉及,issue:问题/发布,journal:期刊,judge:判断,junior:初级的,justice:正义,keen:热衷的,knee:膝盖,knowledgeable:知识渊博的,label:标签,labor:劳动,laboratory:实验室,lack:缺乏,landscape:风景,lately:最近,launch:发起/发射,layer:层,leading:领先的,leather:皮革,lecture:讲座,legal:法律的,leisure:休闲,lend:借出,length:长度,liberty:自由,lifetime:一生,likely:可能的,limit:限制,literature:文学,load:负载,loan:贷款,location:位置,logical:合乎逻辑的,loyal:忠诚的,maintain:维持,majority:大多数,manufacture:制造,margin:边缘/利润,marine:海洋的,marriage:婚姻,massive:巨大的,master:掌握/大师,maximum:最大值,meanwhile:与此同时,measure:测量,mechanical:机械的,medicine:药,mental:心理的,merchant:商人,merely:仅仅,merit:优点,minority:少数,mission:任务,mixture:混合物,moderate:适度的,monitor:监控,moral:道德的,moreover:此外,motion:运动,motivate:激励,mountainous:多山的,multiply:乘,mutual:相互的,narrow:狭窄的,native:本地的,necessity:必要性,negotiate:谈判,nevertheless:然而,nod:点头,nominate:提名,normal:正常的,notion:概念,novel:小说/新颖的,nuclear:核的,numerous:许多的,obey:服从,object:物体/反对,obligation:义务,observe:观察,obtain:获得,occasion:场合,occupy:占据,occur:发生,odd:奇怪的,offense:冒犯/罪行,operate:操作,opponent:对手,oppose:反对,optimistic:乐观的,orbit:轨道,ordinary:普通的,organ:器官,origin:起源,otherwise:否则,outcome:结果,outline:提纲,output:输出,overall:总体的,overcome:克服,overlook:忽视,ownership:所有权,pace:步速,package:包裹,painful:痛苦的,panic:恐慌,participation:参与,partly:部分地,passage:段落,passenger:乘客,passion:热情,patience:耐心,peaceful:和平的,penalty:惩罚,perceive:感知,percentage:百分比,performance:表现,permanent:永久的,permission:许可,personally:亲自,phenomenon:现象,philosophy:哲学,phrase:短语,physical:身体的,planet:行星,platform:平台,pleasant:愉快的,plenty:大量,plot:情节,poetry:诗歌,political:政治的,politician:政治家,pollution:污染,popularity:流行,portion:部分,portrait:肖像,possess:拥有,poverty:贫困,practical:实用的,precious:珍贵的,precise:精确的,predict:预测,preference:偏好,pregnant:怀孕的,preparation:准备,pretend:假装,previously:以前,principle:原则,priority:优先事项,procedure:程序,profession:职业,profit:利润,progress:进步,prohibit:禁止,promise:承诺,promote:促进,proof:证明,proper:合适的,proposal:提案,prospect:前景,protest:抗议,psychology:心理学,purchase:购买,pure:纯粹的,qualify:使合格,quantity:数量,quarter:四分之一,rare:稀有的,react:反应,reasonable:合理的,recall:回忆,receipt:收据,recover:恢复,reduce:减少,reference:参考,reflect:反映,refuse:拒绝,regard:认为/尊重,region:地区,regular:规则的,release:释放/发布,relevant:相关的,reliable:可靠的,relief:缓解,remote:遥远的,remove:移除,repair:修理,replace:替换,represent:代表,reputation:名声,require:要求,researcher:研究者,reserve:保留/预订,resident:居民,resist:抵抗,resource:资源,respond:回应,restore:恢复,restrict:限制,retain:保留,reveal:揭示,revenue:收入,reverse:逆转,reward:奖励,rough:粗糙的,routine:常规,ruin:毁坏,rural:农村的,salary:工资,satellite:卫星,satisfy:满足,scale:规模/刻度,scarce:稀缺的,scenario:情景,schedule:日程,scholar:学者,scientific:科学的,secure:安全的,seek:寻找,select:选择,senior:高级的,sequence:顺序,session:会议/一节课,severe:严重的,shallow:浅的,shelter:庇护所,shift:转移,shortage:短缺,significant:显著的,silence:沉默,similarity:相似性,simply:仅仅,site:地点/网站,slight:轻微的,software:软件,solid:坚固的,somehow:不知何故,specific:具体的,spirit:精神,stable:稳定的,statue:雕像,steady:稳定的,stimulate:刺激,strategy:策略,strength:力量,strict:严格的,structure:结构,struggle:奋斗,substance:物质,substantial:大量的,suffer:遭受,sufficient:足够的,summarize:总结,supply:供应,supportive:支持的,surface:表面,survive:生存,suspect:怀疑,sustain:维持,swallow:吞下,sympathy:同情,talent:才能,technical:技术的,temporary:暂时的,therefore:因此,threat:威胁,throughout:贯穿,tight:紧的,tolerate:忍受,topic:话题,tradition:传统,transfer:转移,translate:翻译,transport:运输,trend:趋势,trial:试验/审判,typically:通常地,ultimate:最终的,unable:不能的,uncertain:不确定的,undergo:经历,unique:独特的,universe:宇宙,urban:城市的,urgent:紧急的,valuable:有价值的,variation:变化,variety:多样性,various:各种各样的,vehicle:车辆,venture:冒险事业,version:版本,victim:受害者,violence:暴力,visible:可见的,vision:视力/愿景,visual:视觉的,volume:音量/卷,volunteer:志愿者,wealth:财富,whereas:然而,widespread:广泛的,willing:愿意的,wisdom:智慧,witness:目击者,worship:崇拜,youth:青年"
});

const SUPPLEMENTAL_DECK_WORDS = {
  cet4: "accident:事故,activity:活动,adult:成年人,advice:建议,agree:同意,airport:机场,allow:允许,alone:独自,animal:动物,answer:回答,apartment:公寓,apple:苹果,area:地区,article:文章,attention:注意,bag:包,basic:基础的,because:因为,before:以前,begin:开始,behind:在后面,believe:相信,bicycle:自行车,biology:生物学,borrow:借入,bottle:瓶子,break:打破,bridge:桥,business:商业,careful:小心的,carry:携带,central:中心的,cheap:便宜的,choice:选择,clean:干净的,climb:攀登,collect:收集,common:常见的,complete:完成,computer:电脑,continue:继续,correct:正确的,cost:花费,course:课程,cover:覆盖,crowd:人群,danger:危险,dark:黑暗的,deal:处理,deep:深的,different:不同的,difficult:困难的,direction:方向,doctor:医生,draw:画,driver:司机,during:在……期间,early:早的,easy:容易的,either:任一,empty:空的,enjoy:享受,enough:足够,enter:进入,exam:考试,example:例子,excited:兴奋的,exercise:练习,expensive:昂贵的,famous:著名的,farmer:农民,favorite:最喜欢的,festival:节日,finish:完成,foreign:外国的,forget:忘记,friendly:友好的,garden:花园,grade:年级,habit:习惯,half:一半,healthy:健康的,history:历史,holiday:假期,hospital:医院,hungry:饥饿的,important:重要的,inside:在里面,interest:兴趣,Internet:互联网,invite:邀请,journey:旅程,kitchen:厨房,language:语言,library:图书馆,local:当地的,lovely:可爱的,market:市场,medicine:药,meeting:会议,message:消息,middle:中间的,mistake:错误,modern:现代的,music:音乐,necessary:必要的,nervous:紧张的,noise:噪音,notice:通知/注意,office:办公室,opinion:观点,ordinary:普通的,outside:外面,patient:病人/耐心的,picture:图片,planet:行星,possible:可能的,practice:练习,present:现在/礼物,price:价格,problem:问题,program:节目/程序,protect:保护,provide:提供,public:公共的,purpose:目的,quickly:快速地,quiet:安静的,realize:意识到,receive:收到,record:记录,remember:记得,repair:修理,report:报告,return:返回,review:复习,season:季节,secret:秘密,service:服务,several:几个,share:分享,simple:简单的,situation:情况,society:社会,special:特别的,station:车站,straight:直的,strange:奇怪的,success:成功,suggest:建议,surprise:惊喜,together:一起,tomorrow:明天,traffic:交通,trouble:麻烦,useful:有用的,village:村庄,visitor:访客,weather:天气,without:没有,wonderful:精彩的",
  cet6: "abandonment:放弃,absurd:荒谬的,abundance:丰富,accelerate:加速,accessible:可接近的,accordingly:因此,accumulate:积累,accuracy:准确性,acknowledge:承认,adaptation:适应,administration:管理,advocate:提倡,agenda:议程,aggressive:有攻击性的,allege:声称,ambition:抱负,analogy:类比,anonymous:匿名的,appreciate:欣赏/感激,arbitrary:任意的,assemble:集合/组装,assert:断言,asset:资产,assign:分配,associate:联系,attain:获得,attribute:归因于,authentic:真实的,barrier:障碍,capable:有能力的,characteristic:特征,circumstance:情况,clarity:清晰,coincide:同时发生,collapse:崩溃,colleague:同事,collective:集体的,commitment:承诺,commodity:商品,compatible:兼容的,compel:迫使,compete:竞争,complexity:复杂性,complicated:复杂的,comprise:包括,conceive:设想,conclude:得出结论,conform:遵守,confront:面对,conserve:保护/节约,constant:持续的,consult:咨询,context:语境,contrary:相反的,contribute:贡献,conventional:传统的,cooperate:合作,corporate:公司的,correlate:相关,crisis:危机,criticize:批评,cultivate:培养,dedicate:奉献,deficiency:不足,define:定义,demonstrate:证明/展示,denote:表示,depression:抑郁/萧条,deserve:值得,determine:决定,differentiate:区分,diminish:减少,discipline:学科/纪律,dispose:处理,distinctive:独特的,distinguish:区分,diversity:多样性,dominate:支配,durable:耐用的,eliminate:消除,empirical:实证的,encounter:遇到,endeavor:努力,engage:参与,enormous:巨大的,ensure:确保,ethical:伦理的,evolution:进化,exaggerate:夸大,exceed:超过,exception:例外,excessive:过度的,exhibit:展示,explicit:明确的,exploit:利用,external:外部的,feasible:可行的,fluctuate:波动,fragment:碎片,frequency:频率,frustrate:使沮丧,functional:功能性的,fundamental:根本的,gradual:逐渐的,guarantee:保证,hostile:敌对的,ideology:意识形态,illustrate:说明,immense:巨大的,implicit:含蓄的,imply:暗示,impose:强加,incentive:激励,inevitable:不可避免的,infer:推断,innovation:创新,insight:洞察,integral:不可或缺的,internal:内部的,intervention:干预,intrinsic:内在的,isolate:隔离,justify:证明合理,legitimate:合法的,liberal:自由的,logic:逻辑,manipulate:操纵,mature:成熟的,maximize:最大化,modify:修改,motive:动机,mutual:相互的,neglect:忽视,neutral:中立的,notion:概念,obligation:义务,occupy:占据,occur:发生,oppose:反对,optimistic:乐观的,outcome:结果,overall:总体的,paradox:悖论,parallel:平行的,parameter:参数,perceive:感知,persist:坚持,pose:造成/提出,precede:先于,preserve:保存,presume:假定,prevail:盛行,proceed:继续,prohibit:禁止,proportion:比例,prospect:前景,pursue:追求,radical:激进的,rational:理性的,recognize:认出/承认,refine:改进,reinforce:加强,reluctant:不情愿的,reside:居住,retain:保留,reveal:揭示,reverse:逆转,revise:修改,rigid:僵硬的,scenario:情景,sequence:顺序,simultaneously:同时,solely:仅仅,specify:具体说明,stimulate:刺激,substitute:替代,sufficient:足够的,supplement:补充,symbolic:象征性的,temporary:暂时的,tension:紧张,terminate:终止,thereby:因此,transition:过渡,trigger:触发,undergo:经历,undertake:承担,uniform:统一的,valid:有效的,vary:变化,violate:违反,voluntary:自愿的,widespread:广泛的",
  toefl: "archaeology:考古学,artifact:人工制品,astronomy:天文学,atmospheric:大气的,biodiversity:生物多样性,carbon:碳,cell:细胞,clay:黏土,climate:气候,colony:群体/殖民地,comet:彗星,crust:地壳,decay:腐烂/衰退,deforestation:森林砍伐,deposit:沉积物,ecosystem:生态系统,emission:排放,erosion:侵蚀,evaporation:蒸发,fossil:化石,galaxy:星系,genetic:遗传的,glacier:冰川,gravity:重力,herbivore:食草动物,indigenous:本土的,insulate:隔热,isotope:同位素,larva:幼虫,lava:熔岩,mammal:哺乳动物,marine:海洋的,mineral:矿物,molecule:分子,nutrient:营养物,orbit:轨道,organism:有机体,oxygen:氧气,particle:粒子,pollination:授粉,predator:捕食者,prehistoric:史前的,protein:蛋白质,radiation:辐射,reproduction:繁殖,sediment:沉积物,solar:太阳的,species:物种,tectonic:构造的,territory:领地,thermal:热的,tissue:组织,volcano:火山,watershed:流域",
  ielts: "achievement:成就,advertising:广告,agriculture:农业,animal:动物,architecture:建筑,automation:自动化,biodiversity:生物多样性,childcare:儿童照护,citizenship:公民身份,consumerism:消费主义,creativity:创造力,curriculum:课程,demographic:人口统计的,diet:饮食,digital:数字的,discipline:纪律,diversity:多样性,equality:平等,expenditure:支出,facility:设施,gender:性别,generation:一代,heritage:遗产,homelessness:无家可归,immigration:移民,inequality:不平等,innovation:创新,investment:投资,leisure:休闲,minority:少数群体,mobility:流动性,multicultural:多元文化的,neighborhood:社区,nutrition:营养,overcrowding:过度拥挤,parenting:育儿,pedestrian:行人,productivity:生产力,renewable:可再生的,retirement:退休,sanitation:卫生设施,shortage:短缺,subsidy:补贴,tourism:旅游业,unemployment:失业,wildlife:野生动物",
  toeic: "accounting:会计,acquisition:收购,advertisement:广告,appliance:电器,attendance:出勤,authorize:授权,beverage:饮料,brochure:宣传册,bulk:大批量,commute:通勤,compensation:补偿,complaint:投诉,consultant:顾问,coordinator:协调员,corporation:公司,customize:定制,defective:有缺陷的,delivery:配送,demonstration:演示,distributor:经销商,extension:延期/分机,facility:设施,forecast:预测,franchise:特许经营,fulfill:履行,handbook:手册,inspection:检查,installation:安装,interview:面试,maintenance:维护,merchandise:商品,merger:合并,opening:职位空缺,outlet:门店,overtime:加班,packaging:包装,personnel:人事,quotation:报价,reimbursement:报销,relocate:搬迁,renovation:翻新,retailer:零售商,review:评审,seminar:研讨会,supervisor:主管,tenant:租户,training:培训,venue:场地,warehouse:仓库"
};

SUPPLEMENTAL_DECK_WORDS.toefl += ",adaptation:适应,agricultural:农业的,amphibian:两栖动物,anatomy:解剖学,annual:年度的,aquatic:水生的,arid:干旱的,bacteria:细菌,behavioral:行为的,breed:繁殖,burrow:洞穴,canopy:树冠层,carnivore:食肉动物,civilization:文明,cluster:群,coastal:沿海的,compensate:补偿,competition:竞争,conservation:保护,continental:大陆的,coral:珊瑚,crater:火山口,crevice:裂缝,crustacean:甲壳动物,crystalline:结晶的,cycle:循环,decompose:分解,density:密度,desertification:荒漠化,diurnal:白天活动的,drought:干旱,ecological:生态的,enzyme:酶,equator:赤道,extinction:灭绝,fauna:动物群,flora:植物群,forage:觅食,formation:形成,fungus:真菌,geological:地质的,germinate:发芽,habitable:适宜居住的,hibernate:冬眠,humidity:湿度,igneous:火成的,impermeable:不透水的,instinct:本能,irrigation:灌溉,limestone:石灰岩,metabolism:新陈代谢,microbe:微生物,migration:迁徙,nocturnal:夜间活动的,nucleus:细胞核,organic:有机的,photosynthesis:光合作用,plankton:浮游生物,precipitation:降水,primate:灵长类动物,reef:礁,regulate:调节,renewable:可再生的,reptile:爬行动物,residue:残留物,salinity:盐度,savanna:稀树草原,scarcity:稀缺,seismic:地震的,shelter:庇护所,submerge:淹没,symbiosis:共生,temperate:温带的,terrain:地形,terrestrial:陆地的,tidal:潮汐的,vegetation:植被,vertebrate:脊椎动物,vessel:血管/容器,volcanic:火山的";
SUPPLEMENTAL_DECK_WORDS.ielts += ",affluence:富裕,aging:老龄化,allocation:分配,amenity:便利设施,aspiration:抱负,communal:社区的,congestion:拥堵,conservation:保护,consumption:消费,contamination:污染,deforestation:森林砍伐,dependency:依赖,disposable:一次性的,domestic:家庭的/国内的,emission:排放,endangered:濒危的,entrepreneur:企业家,epidemic:流行病,excessive:过度的,feasible:可行的,financial:金融的,flexibility:灵活性,habitat:栖息地,household:家庭的,hygiene:卫生,illiteracy:文盲,impractical:不实际的,incentive:激励,inclusive:包容的,industrialization:工业化,infrastructure:基础设施,legislation:立法,livelihood:生计,literacy:识字能力,mandatory:强制的,migration:迁移,obesity:肥胖,organic:有机的,participation:参与,pesticide:杀虫剂,prosperity:繁荣,regulation:规定,residential:住宅的,resource:资源,restriction:限制,shortcoming:缺点,spacious:宽敞的,suburban:郊区的,taxation:税收,urbanization:城市化,vocational:职业的";
SUPPLEMENTAL_DECK_WORDS.toeic += ",accommodate:容纳/满足,adjustment:调整,affiliate:分支机构,announcement:公告,apologize:道歉,appraisal:评估,automated:自动化的,availability:可用性,benefit:福利/好处,bill:账单,booklet:小册子,briefing:简报,carrier:承运人,catalog:目录,caterer:餐饮承办商,clearance:清仓/许可,complimentary:免费的,confirmation:确认,consignment:托运货物,contractor:承包商,convention:大会,coupon:优惠券,credential:资质,deadline:截止日期,delighted:高兴的,departmental:部门的,discounted:打折的,dispatch:派送,documentation:文件,domestic:国内的,eligible:符合条件的,enclosed:随附的,equipment:设备,estimate:估价,executive:高管,expiration:到期,feedback:反馈,headquarters:总部,inquiry:询问,inventory:库存,invoice:发票,itemize:逐项列出,logistics:物流,manufacturer:制造商,membership:会员资格,memo:备忘录,notify:通知,operator:操作员,participant:参与者,postage:邮费,preferred:首选的,procedure:流程,processing:处理,procurement:采购,productivity:生产力,promotional:促销的,punctual:准时的,recipient:收件人,recruitment:招聘,refundable:可退款的,registration:登记,remittance:汇款,representative:代表,reschedule:改期,resume:简历,shipment:装运,signature:签名,subscription:订阅,subsidiary:子公司,survey:调查,temporary:临时的,transaction:交易,verification:验证,warranty:保修";
SUPPLEMENTAL_DECK_WORDS.mind = "admiration:钦佩,affection:喜爱,aggression:攻击性,alienated:疏远的,ashamed:羞愧的,attachment:依恋,awkward:尴尬的,belonging:归属感,betray:背叛,bitter:怨恨的,blame:责备,bored:无聊的,brave:勇敢的,calm:平静的,cheerful:开心的,comforting:安慰人的,compassion:同情,conflict:冲突,confused:困惑的,considerate:体贴的,cope:应对,courage:勇气,defensive:防备的,delighted:高兴的,dependent:依赖的,disappointed:失望的,discouraged:泄气的,embarrassed:尴尬的,empathy:共情,envy:嫉妒,exhausted:筋疲力尽的,fearful:害怕的,grief:悲伤,guilt:内疚,helpless:无助的,homesick:想家的,hopeful:有希望的,hostile:敌对的,humiliated:受羞辱的,insecure:缺乏安全感的,jealous:嫉妒的,lonely:孤独的,loyal:忠诚的,miserable:痛苦的,moody:情绪化的,numb:麻木的,optimistic:乐观的,overwhelmed:不堪重负的,panic:恐慌,peaceful:平和的,protective:保护欲强的,proud:自豪的,regret:后悔,rejection:拒绝/被拒,resentful:怨恨的,sensitive:敏感的,shy:害羞的,sincere:真诚的,stressful:有压力的,sympathy:同情,thoughtful:体贴的,tolerant:宽容的,vulnerable:脆弱的,withdrawn:沉默寡言的,worried:担心的";

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

const MORPHEME_PATTERNS = [
  { key: "alter/altern", re: /alter|altern/, meaning: "other/change 另一、改变", role: "词根" },
  { key: "nat/native", re: /nat|nativ/, meaning: "born 出生、本来的", role: "词根" },
  { key: "port", re: /port/, meaning: "carry 搬运、携带", role: "词根" },
  { key: "struct", re: /struct/, meaning: "build 建造、结构", role: "词根" },
  { key: "spect", re: /spect/, meaning: "look 看、观察", role: "词根" },
  { key: "scrib/script", re: /scrib|script/, meaning: "write 写、记录", role: "词根" },
  { key: "vis/vid", re: /vis|vid/, meaning: "see 看见", role: "词根" },
  { key: "form", re: /form/, meaning: "shape 形成、形状", role: "词根" },
  { key: "press", re: /press/, meaning: "push 压、推进", role: "词根" },
  { key: "ject", re: /ject/, meaning: "throw 投、扔出", role: "词根" },
  { key: "mit/miss", re: /mit|miss/, meaning: "send 送出、传递", role: "词根" },
  { key: "cred", re: /cred/, meaning: "believe 相信", role: "词根" },
  { key: "cap/capt/cept", re: /cap|capt|cept/, meaning: "take/grab 拿取、抓住", role: "词根" },
  { key: "duc/duct", re: /duc|duct/, meaning: "lead 引导、带领", role: "词根" },
  { key: "fac/fact/fect", re: /fac|fact|fect/, meaning: "make/do 做、制造", role: "词根" },
  { key: "fer", re: /fer/, meaning: "carry 带来、携带", role: "词根" },
  { key: "fin", re: /fin/, meaning: "end/boundary 结束、边界", role: "词根" },
  { key: "grad/gress", re: /grad|gress/, meaning: "step/go 步、前进", role: "词根" },
  { key: "graph/gram", re: /graph|gram/, meaning: "write/record 写、记录", role: "词根" },
  { key: "log", re: /log/, meaning: "word/reason 语言、逻辑", role: "词根" },
  { key: "man/manu", re: /manu?/, meaning: "hand 手、操作", role: "词根" },
  { key: "mot/mov/mob", re: /mot|mov|mob/, meaning: "move 移动", role: "词根" },
  { key: "pel/puls", re: /pel|puls/, meaning: "push/drive 推动", role: "词根" },
  { key: "pos/pon", re: /pos|pon/, meaning: "put 放置", role: "词根" },
  { key: "scrib/script", re: /scrib|script/, meaning: "write 写", role: "词根" },
  { key: "sens/sent", re: /sens|sent/, meaning: "feel 感觉", role: "词根" },
  { key: "tain/ten/tent", re: /tain|ten|tent/, meaning: "hold 握住、保持", role: "词根" },
  { key: "tract", re: /tract/, meaning: "pull 拉、引", role: "词根" },
  { key: "use/ut", re: /use|util|ut/, meaning: "use 使用", role: "词根" }
];

const PREFIX_PATTERNS = [
  ["anti", "against 反对"], ["auto", "self 自己/自动"], ["co", "together 共同"], ["com", "together/intensive 共同/加强"],
  ["con", "together 共同"], ["de", "down/away 向下/去掉"], ["dis", "not/apart 不/分开"], ["en", "make 使……"],
  ["ex", "out/former 向外/以前"], ["extra", "beyond 额外"], ["fore", "before 预先"], ["im", "not/in 进入/不"],
  ["in", "in/not 进入/不"], ["inter", "between 相互/之间"], ["mal", "bad 坏"], ["micro", "small 小"],
  ["mis", "wrong 错误"], ["multi", "many 多"], ["non", "not 不"], ["over", "too much 过度"],
  ["post", "after 之后"], ["pre", "before 之前"], ["pro", "forward/support 向前/支持"], ["re", "again/back 再/回"],
  ["sub", "under 下"], ["super", "above 超级/上方"], ["trans", "across/change 跨越/转变"], ["un", "not 不"]
];

const SUFFIX_PATTERNS = [
  ["ability", "ability 状态/能力"], ["ibility", "ability 状态/能力"], ["ation", "act/result 动作/结果"], ["ition", "act/result 动作/结果"],
  ["ative", "having the nature of 具有……性质的"], ["ence", "state 状态"], ["ance", "state 状态"], ["ment", "result/process 结果/过程"],
  ["ness", "state 状态"], ["ship", "state/skill 身份/关系"], ["ity", "state/quality 性质/状态"], ["ism", "system/belief 主义/体系"],
  ["ist", "person 人"], ["er", "person/tool 人/工具"], ["or", "person/tool 人/工具"], ["al", "related to 与……有关的"],
  ["ial", "related to 与……有关的"], ["ic", "related to 与……有关的"], ["ical", "related to 与……有关的"], ["ive", "having tendency 有……倾向的"],
  ["ous", "full of 充满……的"], ["able", "can be 能被……的"], ["ible", "can be 能被……的"], ["less", "without 没有"],
  ["ful", "full of 充满"], ["ly", "in a way 以……方式"], ["ize", "make 使成为"], ["ise", "make 使成为"], ["ify", "make 使成为"]
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
  communicate: ["communicate clearly", "communication skills", "communicate with others", "effective communication"],
  alternative: ["an alternative approach", "alternative options", "an alternative solution", "a practical alternative"]
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
  "communication skills": "沟通技能",
  "an alternative approach": "另一种方法",
  "alternative options": "替代选项",
  "an alternative solution": "替代解决方案",
  "a practical alternative": "一个实用的替代方案"
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
  if (/alter|altern/.test(word)) return "alter/altern";
  if (/nativ|nat/.test(word)) return "nat/native";
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

function morphemesFor(word) {
  const clean = String(word || "").toLowerCase().replace(/[^a-z]/g, "");
  if (!clean) return [];
  const parts = [];
  const prefix = PREFIX_PATTERNS
    .filter(([key]) => clean.startsWith(key) && clean.length > key.length + 3)
    .sort((a, b) => b[0].length - a[0].length)[0];
  const suffix = SUFFIX_PATTERNS
    .filter(([key]) => clean.endsWith(key) && clean.length > key.length + 3)
    .sort((a, b) => b[0].length - a[0].length)[0];
  if (prefix) parts.push({ part: prefix[0] + "-", role: "前缀", meaning: prefix[1] });
  const root = MORPHEME_PATTERNS.find((item) => item.re.test(clean));
  if (root) parts.push({ part: root.key, role: root.role, meaning: root.meaning });
  if (suffix) parts.push({ part: "-" + suffix[0], role: "后缀", meaning: suffix[1] });
  if (!parts.length && clean.length > 7) {
    const head = clean.slice(0, Math.ceil(clean.length / 2));
    const tail = clean.slice(Math.ceil(clean.length / 2));
    return [
      { part: head, role: "音形块", meaning: "先锁定前半段拼写" },
      { part: tail, role: "音形块", meaning: "再补全后半段拼写" }
    ];
  }
  return parts;
}

function phoneticFor(word) {
  const clean = word.replace(/-.*/, "").replace(/\s+.*/, "");
  return `/${clean.split("").slice(0, 7).join(" ")}/`;
}

function accurateMorphemesFor(word) {
  const clean = String(word || "").toLowerCase().replace(/[^a-z]/g, "");
  if (!clean) return [];
  const overrides = {
    abnormal: [["ab-", "前缀", "away from 偏离"], ["norm", "词根", "rule, standard 规则、标准"], ["-al", "后缀", "related to 与...有关的"]],
    adapt: [["ad-", "前缀", "to, toward 向、朝"], ["apt", "词根", "fit 合适"]],
    alternative: [["alter/altern", "词根", "other 另一个、其他的"], ["-ative", "后缀", "having the nature of 具有...性质的"]],
    active: [["act", "词根", "do, act 做、行动"], ["-ive", "后缀", "having a tendency or quality 具有...倾向或性质的"]],
    unable: [["un-", "前缀", "not 不、没有"], ["able", "词根", "capable 能够"]],
    credible: [["cred", "词根", "believe, trust 相信、信任"], ["-ible", "后缀", "can be 能够被...的"]],
    beneficial: [["bene-", "词根", "good 好"], ["fic", "词根", "make, do 做、产生"], ["-ial", "后缀", "related to 与...有关的"]],
    productive: [["pro-", "前缀", "forward 向前"], ["duct", "词根", "lead 引导、带领"], ["-ive", "后缀", "having a tendency or quality 具有...倾向或性质的"]],
    construction: [["con-", "前缀", "together 一起"], ["struct", "词根", "build 建造"], ["-ion", "后缀", "action or result 动作或结果"]],
    transportation: [["trans-", "前缀", "across 跨越"], ["port", "词根", "carry 搬运、携带"], ["-ation", "后缀", "action or result 动作或结果"]],
    international: [["inter-", "前缀", "between 在...之间"], ["nat", "词根", "born 出生"], ["-ional", "后缀", "related to 与...有关的"]]
  };
  if (overrides[clean]) return overrides[clean].map(([part, role, meaning]) => ({ part, role, meaning }));
  const trustedRoots = MORPHEME_PATTERNS.filter((item) => !["log", "man/manu", "use/ut"].includes(item.key));
  const root = trustedRoots.find((item) => item.re.test(clean));
  const prefix = PREFIX_PATTERNS
    .filter(([key]) => clean.startsWith(key) && clean.length > key.length + 3)
    .sort((a, b) => b[0].length - a[0].length)[0];
  const suffix = SUFFIX_PATTERNS
    .filter(([key]) => clean.endsWith(key) && clean.length > key.length + 3)
    .sort((a, b) => b[0].length - a[0].length)[0];
  const parts = [];
  if (prefix && root) parts.push({ part: prefix[0] + "-", role: "前缀", meaning: prefix[1] });
  if (root) parts.push({ part: root.key, role: "词根", meaning: root.meaning });
  if (suffix && root) parts.push({ part: "-" + suffix[0], role: "后缀", meaning: suffix[1] });
  if (parts.length) return parts;
  if (clean.length > 7) {
    const middle = Math.ceil(clean.length / 2);
    return [
      { part: clean.slice(0, middle), role: "音形块（非词根）", meaning: "用于辅助拼写，不代表词源" },
      { part: clean.slice(middle), role: "音形块（非词根）", meaning: "用于辅助拼写，不代表词源" }
    ];
  }
  return [{ part: clean, role: "整体记忆", meaning: "暂无可靠拆分，结合例句记忆" }];
}

function plural(word) {
  if (word.endsWith("y")) return `${word.slice(0, -1)}ies`;
  if (/(s|x|ch|sh)$/.test(word)) return `${word}es`;
  if (word.endsWith("s")) return word;
  return `${word}s`;
}

function pastTense(word) {
  if (word.endsWith("e")) return `${word}d`;
  return `${word}ed`;
}

function gerund(word) {
  if (word.endsWith("e") && !word.endsWith("ee")) return `${word.slice(0, -1)}ing`;
  return `${word}ing`;
}

function familyFor(word) {
  const manual = MANUAL_FAMILY[word] || [];
  if (isPhrase(word) || manual.length) return [...new Set(manual)].slice(0, 5);
  const verbLike = /^(abandon|achieve|adapt|adjust|affect|approve|arrange|assume|compare|confirm|consider|create|decline|deliver|describe|develop|explain|focus|include|expand|allocate|anticipate|cease|collapse|consume|contradict|derive|emerge|enhance|evaluate|exclude|generate|highlight|interpret|obtain|participate|accumulate|alter|attribute|compensate|conduct|constrain|convert|detect|establish|evolve|extract|facilitate|integrate|monitor|clarify|coordinate|delegate|implement|prioritize|summarize|update|request|reschedule|postpone|resolve|install|delete|download|upload|configure|encrypt|forgive|encourage|understand|apologize|address|tackle)$/.test(word);
  const nounLike = /^(account|advantage|challenge|culture|detail|effort|environment|experience|agenda|applicant|appointment|branch|budget|candidate|client|conference|contract|deadline|department|deposit|discount|employee|expense|invoice|manager|notice|procedure|proposal|purchase|receipt|refund|reservation|schedule|supplier|transaction|warranty|appliance|balcony|bank|battery|clinic|complaint|entrance|grocery|landlord|neighbor|package|pharmacy|queue|roommate|screen|signal|subway|wallet|passport|ticket|visa|route|souvenir|emotion|expectation|relationship|choice|argument)$/.test(word);
  const safe = verbLike
    ? [`${word}s`, pastTense(word), gerund(word)]
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
  if (adjectiveLike) {
    const article = /^[aeiou]/.test(word) ? "an" : "a";
    return [`${article} ${word} approach`, `${word} options`, `${article} ${word} solution`, `a more ${word} choice`];
  }
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
  if (phrase === `a ${word} approach` || phrase === `an ${word} approach`) return `${meaning}的方法`;
  if (phrase === `${word} information`) return `${meaning}的信息`;
  if (phrase === `${word} options`) return `${meaning}的选项`;
  if (phrase === `a ${word} solution` || phrase === `an ${word} solution`) return `${meaning}的解决方案`;
  if (phrase === `a more ${word} choice`) return `一个更${meaning}的选择`;
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
  const parts = accurateMorphemesFor(word);
  if (parts.length && !parts.every((item) => item.role.includes("整体记忆") || item.role.includes("音形块"))) {
    return `先看构词：${parts.map((item) => `${item.part}=${item.meaning.split(" ")[0]}`).join(" + ")}，再把整体意思“${cn}”放进例句里记。`;
  }
  const hooks = {
    abandon: "abandon 像把东西直接丢下不管：不仅是放弃，更有抛弃、遗弃的感觉。",
    achieve: "achieve 像游戏进度终于达到 100%：不是想做，而是真的实现。",
    deadline: "deadline 就是死线：线还没到，人已经开始冲刺。",
    awkward: "awkward 像聊天突然冷场：空气都开始替你尴尬。",
    procrastinate: "procrastinate 就是把今天的任务礼貌地推给明天的自己。"
  };
  return hooks[word] || `搞怪联想：给“${word} = ${cn}”配一个夸张画面，再用自己的话复述一遍。`;
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
    morphemes: entry.morphemes || accurateMorphemesFor(entry.word),
    phraseItems: entry.phraseItems || phraseItemsFor(entry.word, entry.deckId, entry.cn),
    meanings: entry.meanings || meaningExamplesFor(entry.word, entry.cn, entry.deckId)
  };
}

function parseWords() {
  let id = 1;
  const entries = [];
  const seenHeadwords = new Set();
  for (const deck of DECK_SOURCES) {
    const rawWords = [deck.words, SUPPLEMENTAL_DECK_WORDS[deck.id]].filter(Boolean).join(",");
    const pairs = rawWords.split(",");
    pairs.forEach((pair, index) => {
      const [word, cn] = pair.split(":");
      if (!word || !cn) return;
      const key = `${deck.id}:${word.toLowerCase()}`;
      if (seenHeadwords.has(key)) return;
      seenHeadwords.add(key);
      const root = rootFor(word);
      const family = familyFor(word);
      const entryType = isPhrase(word) ? "phrase" : "headword";
      entries.push(registerTextMap({
        id: id++,
        word, cn,
        deckId: deck.id,
        deckTitle: deck.title,
        index,
        phonetic: "",
        root,
        family,
        phrases: phrasesFor(word, deck.id),
        memory: memoryFor(word, cn, root),
        example: exampleFor(word, deck.id),
        type: entryType
      }));
    });
  }

  const seen = new Set(entries.map((x) => x.word));
  const generated = [];
  for (const base of entries.filter((entry) => entry.type === "headword")) {
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
        phonetic: "",
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
  return entries.concat(generated);
}

window.WORDFORGE_DECKS = DECK_SOURCES.map(({ words, ...deck }) => ({
  ...deck,
  count: words.split(",").length
}));
window.WORDFORGE_ROOTS = ROOT_LIBRARY;
window.WORDFORGE_WORDS = parseWords();
