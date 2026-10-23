/* 英语启蒙 · 数字、颜色、动物、水果、小猪佩奇、汪汪队、生活情境语块
   4–5岁是语音敏感期，只"听和说"，结合原版动画与生活情境，自然习得整句表达！ */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
id:'eng', name:'英语磨耳朵', short:'英语', icon:'🔤', color:'#14b8a6',
desc:'原版动画经典台词（小猪佩奇、汪汪队）、生活日常高频句、数字与动物。只听和说，轻松开口！',
sets:[
{
em:'🔢', name:'英语数字 1–6',
qs:[
{pic:'<span style="color:#f97316">🍬</span>', q:'"1" 用英语怎么说？', h:'听英文儿歌里常有这个词。', opts:['one','two','three'], a:0, w:'<b>one</b>（万）就是数字 1。one、two、three……像唱歌一样说出来！'},
{pic:'<span style="color:#3b82f6">🍬 🍬</span>', q:'"2" 用英语怎么说？', h:'它和"too"听起来一样。', opts:['three','two','one'], a:1, w:'<b>two</b>（兔）就是数字 2，和小兔子 rabbit 的耳朵一样，竖起来！'},
{pic:'<span style="color:#10b981">🍬 🍬 🍬</span>', q:'"3" 用英语怎么说？', h:'小树 tree 去掉后面的读音。', opts:['one','two','three'], a:2, w:'<b>three</b>（斯瑞）就是数字 3。发 th 音时小舌头轻轻碰一下牙齿。'},
{pic:'<span style="color:#8b5cf6">🍬 🍬 🍬 🍬</span>', q:'"4" 用英语怎么说？', h:'和"为了(for)"听起来很像。', opts:['four','five','three'], a:0, w:'<b>four</b>（佛尔）就是数字 4。4 根棒棒糖 four candies！'},
{pic:'<span style="color:#ec4899">🍬 🍬 🍬 🍬 🍬</span>', q:'"5" 用英语怎么说？', h:'伸出手指个数，这个词是"高五"的音。', opts:['six','five','four'], a:1, w:'<b>five</b>（发爱五）就是数字 5。一只手 five fingers——5 个手指头！'},
{pic:'<span style="color:#f59e0b">🍬 🍬 🍬 🍬 🍬 🍬</span>', q:'"6" 用英语怎么说？', h:'它和"sick"押韵。', opts:['seven','six','five'], a:1, w:'<b>six</b>（西克斯）就是数字 6。six candies，6 颗糖！'}
]
},
{
em:'🌈', name:'英语数字 7–10 和颜色',
qs:[
{pic:'<span style="color:#0ea5e9">🍬 🍬 🍬 🍬 🍬 🍬 🍬</span>', q:'"7" 用英语怎么说？', h:'七天是 one week 里的一天。', opts:['seven','eight','six'], a:0, w:'<b>seven</b>（赛文）就是数字 7。seven days 就是 7 天，一星期正好 7 天！'},
{pic:'<span style="color:#ef4444">🍬 🍬 🍬 🍬 🍬 🍬 🍬 🍬</span>', q:'"8" 用英语怎么说？', h:'章鱼 octopus 有 8 只脚。', opts:['nine','eight','seven'], a:1, w:'<b>eight</b>（诶特）就是数字 8。eight legs——章鱼正好 8 条腿！'},
{pic:'<span style="color:#14b8a6">🍬 🍬 🍬 🍬 🍬 🍬 🍬 🍬 🍬</span>', q:'"9" 用英语怎么说？', h:'和"耐"发音很像。', opts:['ten','eight','nine'], a:2, w:'<b>nine</b>（耐恩）就是数字 9。nine balloons，9 个气球飞上天！'},
{pic:'<span style="color:#6366f1">🍬 🍬 🍬 🍬 🍬 🍬 🍬 🍬 🍬 🍬</span>', q:'"10" 用英语怎么说？', h:'两只手的手指全加起来。', opts:['ten','two','nine'], a:0, w:'<b>ten</b>（特恩）就是数字 10。ten fingers——10 个手指头，全部数一遍！'},
{pic:'<svg viewBox="0 0 80 80" style="width:70px"><circle cx="40" cy="40" r="33" fill="#ef4444"/></svg>', q:'"红色" 用英语怎么说？', h:'红苹果是 ___ apple。', opts:['red','blue','green'], a:0, w:'<b>red</b>（瑞德）是红色。red apple 红苹果，red 帽子小红帽！'},
{pic:'<svg viewBox="0 0 80 80" style="width:70px"><circle cx="40" cy="40" r="33" fill="#3b82f6"/></svg>', q:'"蓝色" 用英语怎么说？', h:'天空和大海的颜色。', opts:['yellow','blue','red'], a:1, w:'<b>blue</b>（布鲁）是蓝色。blue sky 蓝天，blue sea 蓝色的大海！'},
{pic:'<svg viewBox="0 0 80 80" style="width:70px"><circle cx="40" cy="40" r="33" fill="#10b981"/></svg>', q:'"绿色" 用英语怎么说？', h:'小草的颜色。', opts:['green','yellow','blue'], a:0, w:'<b>green</b>（格瑞恩）是绿色。green grass 绿草地，green leaf 绿叶。'},
{pic:'<svg viewBox="0 0 80 80" style="width:70px"><circle cx="40" cy="40" r="33" fill="#f59e0b"/></svg>', q:'"黄色" 用英语怎么说？', h:'香蕉的颜色。', opts:['red','yellow','green'], a:1, w:'<b>yellow</b>（耶楼）是黄色。yellow banana 黄香蕉，yellow star 小黄星！'}
]
},
{
em:'🐾', name:'英语小动物',
qs:[
{pic:'🐱', q:'"小猫" 用英语怎么说？', h:'它喵喵叫，英文名只有三个字母。', opts:['cat','dog','pig'], a:0, w:'<b>cat</b>（凯特）是小猫。A cat says "meow, meow"——小猫喵喵叫！'},
{pic:'🐶', q:'"小狗" 用英语怎么说？', h:'它汪汪叫。', opts:['dog','cat','bird'], a:0, w:'<b>dog</b>（道格）是小狗。A dog says "woof, woof"——小狗汪汪叫，还会摇尾巴！'},
{pic:'🐷', q:'"小猪" 用英语怎么说？', h:'粉粉的小猪英文名是 P 开头。', opts:['pig','cat','fish'], a:0, w:'<b>pig</b>（皮格）是小猪。A pig says "oink, oink"——小猪噜噜叫！'},
{pic:'🐰', q:'"小兔子" 用英语怎么说？', h:'它跳跳跳，英文名是 R 开头。', opts:['rabbit','dog','bird'], a:0, w:'<b>rabbit</b>（瑞比特）是小兔子。A rabbit can hop, hop, hop——小兔跳跳跳！'},
{pic:'🐟', q:'"小鱼" 用英语怎么说？', h:'它在水里游，英文名 F 开头。', opts:['fish','cat','pig'], a:0, w:'<b>fish</b>（费什）是小鱼。A fish can swim——小鱼水里游，一天到晚吐泡泡！'},
{pic:'🐦', q:'"小鸟" 用英语怎么说？', h:'它会飞，英文名 B 开头。', opts:['bird','dog','rabbit'], a:0, w:'<b>bird</b>（伯德）是小鸟。A bird can fly——小鸟天上飞，叽叽喳喳唱不停！'},{pic:'🔤', q:'English Matching: 动动小手，把英文小动物和对应图画连起来吧！', h:'Cat 是小猫，Dog 是小狗，Bird 是小鸟，Fish 是小鱼！', opts:['连线完成','Cat-小猫, Dog-小狗','Bird-小鸟, Fish-小鱼'], a:0, w:'Well done! <b>Cat 🐱 是小猫、Dog 🐶 是小狗、Bird 🐦 是小鸟、Fish 🐟 是小鱼</b>！', match:{pairs:[{left:{text:'Cat',pic:'🐱'},right:{text:'小花猫',pic:'🐱'}},{left:{text:'Dog',pic:'🐶'},right:{text:'小狗狗',pic:'🐶'}},{left:{text:'Bird',pic:'🐦'},right:{text:'小鸟儿',pic:'🐦'}},{left:{text:'Fish',pic:'🐟'},right:{text:'小鱼儿',pic:'🐟'}}]}}
]
},
{
em:'🍎', name:'英语水果和礼貌语',
qs:[
{pic:'🍎', q:'"苹果" 用英语怎么说？', h:'手机、电脑上都有它的名字。', opts:['apple','banana','orange'], a:0, w:'<b>apple</b>（哎破）是苹果。An apple a day keeps the doctor away——每天一个苹果，医生远离我！'},
{pic:'🍌', q:'"香蕉" 用英语怎么说？', h:'黄黄的、弯弯的。', opts:['apple','banana','grape'], a:1, w:'<b>banana</b>（不拿拿）是香蕉。Monkeys love bananas——小猴子最爱吃香蕉！'},
{pic:'🍊', q:'"橙子" 用英语怎么说？', h:'它和颜色"橙色"是同一个词。', opts:['orange','apple','grape'], a:0, w:'<b>orange</b>（奥润知）是橙子，也是橙色！orange juice 就是橙汁，喝过吗？'},
{pic:'🍇', q:'"葡萄" 用英语怎么说？', h:'一颗一颗圆圆的。', opts:['grape','banana','apple'], a:0, w:'<b>grape</b>（格瑞普）是葡萄。一串葡萄叫 a bunch of grapes。'},
{pic:'🌅', q:'早上见到老师，说"早上好"用英语怎么说？', h:'先"古德"再"猫宁"。', opts:['Good morning','Thank you','Goodbye'], a:0, w:'<b>Good morning</b>（古德猫宁）是"早上好"。每天上学见到老师大声说：Good morning！'},
{pic:'🎁', q:'收到礼物，说"谢谢你"用英语怎么说？', h:'三个字，T 开头。', opts:['Sorry','Goodbye','Thank you'], a:2, w:'<b>Thank you</b>（三克油）是"谢谢你"。别人帮助你，说 Thank you，最有礼貌！'},
{pic:'👋', q:'放学回家，说"再见"用英语怎么说？', h:'拜拜用英文怎么念？', opts:['Goodbye','Hello','Sorry'], a:0, w:'<b>Goodbye</b>（古德拜）是"再见"。或者更简单地说 Bye-bye！'},
{pic:'🙏', q:'不小心碰到别人，说"对不起"用英语怎么说？', h:'S 开头。', opts:['Sad','Sorry','Sit'], a:1, w:'<b>Sorry</b>（骚瑞）是"对不起"。做错事先说 Sorry，别人回答 That\'s OK（没关系），还是好朋友！'}
]
},
{
em:'🐷', name:'动画大明星 · 小猪佩奇原声口语',
qs:[
{pic:'🐷 🎀', q:'小猪佩奇开心地向大家自我介绍，她会说什么呢？', h:'我是佩奇，这是我的弟弟乔治。', opts:['I\'m Peppa Pig!','Good night!','I\'m hungry.'], a:0, w:'<b>I\'m Peppa Pig!</b>（我是小猪佩奇！）每集动画片开头的经典台词，你也可以大声向大家介绍自己哦！'},
{pic:'🌧️ 💦 👢', q:'天下雨了，佩奇最爱穿上雨靴去踩泥坑，她会兴奋地喊什么？', h:'踩泥坑英文是 muddy puddles！', opts:['I love muddy puddles!','I want water.','Go to school.'], a:0, w:'<b>I love muddy puddles!</b>（我最爱泥坑啦！）佩奇踩水时还会开心地说 Jump up and down（跳上跳下）！'},
{pic:'🦖 🦕', q:'乔治最爱的玩具是绿色大恐龙，他模仿恐龙叫会喊什么？', h:'恐龙英文叫 Dinosaur，还会嗷呜叫！', opts:['Dinosaur! Grrr!','Kitty! Meow!','Puppy! Woof!'], a:0, w:'<b>Dinosaur! Grrr!</b>（大恐龙！嗷呜！）恐龙就是 Dinosaur，乔治睡觉都要抱着它呢！'},
{pic:'🍝 😋 🍽️', q:'晚饭时间到了，佩奇想吃最爱的意大利面，她怎么礼貌地向猪妈妈表达？', h:'表达想要某样东西加 please。', opts:['Spaghetti, please!','No, thank you.','Goodbye!'], a:0, w:'<b>Spaghetti, please!</b>（请给我意大利面！）表达想要什么东西，在后面加上 please 最有礼貌啦！'},
{pic:'🛏️ 🌙 ⭐', q:'刷完牙躺在床上准备睡觉了，佩奇和乔治互道晚安会说什么？', h:'晚安英文叫 Good night。', opts:['Good night, sleep tight!','Good morning!','Let\'s go play!'], a:0, w:'<b>Good night, sleep tight!</b>（晚安，睡个好觉！）小猪佩奇一家晚上都会温柔地说 Good night，Sweet dreams（做个好梦）！'},
{pic:'🚲 👧 🌳', q:'佩奇学会了骑两轮自行车，她开心地对爸爸喊什么？', h:'看！我会骑车啦！', opts:['Look, I can ride my bike!','Where is my shoe?','I\'m tired.'], a:0, w:'<b>Look, I can ride my bike!</b>（看呀，我会骑自行车啦！）展示新本领时大声说 Look, I can do it！'},
{pic:'🙈 🌳 🔍', q:'佩奇和好朋友小羊苏西玩捉迷藏，数完数去抓人时会大喊什么？', h:'不管你藏没藏好，我来啦！', opts:['Ready or not, here I come!','Sit down, please.','Thank you!'], a:0, w:'<b>Ready or not, here I come!</b>（准备好没有，我来找你们啦！）捉迷藏必学的地道口头禅！'},
{pic:'😂 🐷 🎈', q:'佩奇和全家人倒在地上哈哈大笑，佩奇开心地哼哼叫并说什么？', h:'太好玩啦，太逗啦！', opts:['That\'s so funny!','I am sad.','Help me, please.'], a:0, w:'<b>That\'s so funny!</b>（太好笑啦！太逗啦！）佩奇还会开心地发出经典的 Snort, snort（猪叫欢笑声）！'}
]
},
{
em:'🐾', name:'动画大明星 · 汪汪队立大功',
qs:[
{pic:'🐶 🚨 🐕', q:'莱德队长吹哨召集狗狗们，准备出发救援时，最著名的口号是什么？', h:'汪汪队要出动啦！', opts:['PAW Patrol is on a roll!','Go to sleep, pups!','Eat your dinner!'], a:0, w:'<b>PAW Patrol is on a roll!</b>（汪汪队要出动啦 / 出发救援！）全剧最燃最热血的出动口号！'},
{pic:'👮 🐕 🚨', q:'勇敢的德国牧羊犬阿奇（Chase）接受任务时，会自信满满地说什么？', h:'包在阿奇身上！', opts:['Chase is on the case!','I want ice cream.','Where is my hat?'], a:0, w:'<b>Chase is on the case!</b>（包在阿奇身上 / 阿奇来解决！）遇到小困难，像阿奇一样勇敢自信！'},
{pic:'🚒 🐶 🔥', q:'热情又可爱的斑点狗毛毛（Marshall）准备救火救援时，会兴奋地喊什么？', h:'我准备好汪汪救援啦！', opts:['I\'m ready for a ruff-ruff rescue!','Good night, Marshall.','No, I can\'t.'], a:0, w:'<b>I\'m ready for a ruff-ruff rescue!</b>（我准备好大显身手去救援啦！）毛毛虽然爱摔跤，但救援从不退缩！'},
{pic:'🚁 🐶 💖', q:'会开直升机的小狗天天（Skye），准备展翅高飞时会欢呼什么？', h:'让我们飞上天空！', opts:['Let\'s take to the sky!','Wash your paws!','Sit on the floor.'], a:0, w:'<b>Let\'s take to the sky!</b>（让我们飞上蓝天吧！）天天翻着跟头飞向天空，太帅气啦！'},
{pic:'🏆 🐕 🐾', q:'汪汪队最温暖人心、鼓励每一个小朋友的经典格言是什么？', h:'没有困难的工作，只有勇敢的狗狗！', opts:['No job is too big, no pup is too small!','Stop and go back!','I am too small.'], a:0, w:'<b>No job is too big, no pup is too small!</b>（没有困难的工作，只有勇敢的狗狗！）说明再小的小朋友也能发挥大力量！'},
{pic:'🤝 🐶 💖', q:'市长爷爷被救了，对狗狗们说 Thank you，狗狗们会礼貌地回答什么？', h:'不用谢，随时为您效劳！', opts:['You\'re welcome!','Goodbye!','I\'m sorry.'], a:0, w:'<b>You\'re welcome!</b>（不用客气 / 很高兴能帮到您！）帮助了别人听到感谢，要大声回答 You\'re welcome！'},
{pic:'📞 🚨 🐕', q:'莱德队长对市民们常说的求助电话承诺是什么？', h:'只要遇到麻烦，大声呼救就行啦！', opts:['Whenever you\'re in trouble, just yelp for help!','Don\'t call me.','Go away, trouble.'], a:0, w:'<b>Whenever you\'re in trouble, just yelp for help!</b>（只要遇到麻烦，尽管大声呼救！）yelp for help 就是呼救的意思！'},
{pic:'🚜 🐶 🟡', q:'开推土机的斗牛犬小力（Rubble），准备开工时最爱喊什么？', h:'小力快速出动！', opts:['Rubble on the double!','I want to sleep.','Look at the cat.'], a:0, w:'<b>Rubble on the double!</b>（小力全速出动 / 开工啦！）on the double 就是动作快快的意思！'}
]
},
{
em:'🖐️', name:'生活情境脱口秀（Kids Daily Talk）',
qs:[
{pic:'🥛 💦', q:'口渴了想喝水，怎样用英语整句话向爸爸妈妈表达？', h:'我想要水，请给我水。', opts:['I want some water, please!','Give me water!','Water is bad.'], a:0, w:'<b>I want some water, please!</b>（请给我倒点水好吗！）完整的表达加上 please，礼貌又可爱！'},
{pic:'🍓 😋', q:'吃完了一颗草莓还想再吃一颗，最简单地道的英语怎么说？', h:'还想要，请再给一点。', opts:['More, please!','No more!','I am full.'], a:0, w:'<b>More, please!</b>（请再给我一点 / 我还想要！）小朋友最快学会的日常高频语块！'},
{pic:'🎁 🤝', q:'把画笔或者玩具递给同伴，嘴里应该微笑着说什么？', h:'给你拿好哦。', opts:['Here you go!','Don\'t touch!','Mine!'], a:0, w:'<b>Here you go!</b>（给你拿好啦！）双手递东西给别人说 Here you go，对方会回你一句 Thank you！'},
{pic:'👟 🚪', q:'准备出门去公园玩啦，妈妈提醒你穿上鞋子会怎么说？', h:'Put on 就是穿戴上的意思。', opts:['Put on your shoes! Let\'s go!','Take off shoes!','Stay home.'], a:0, w:'<b>Put on your shoes! Let\'s go!</b>（穿上鞋子，我们出发啦！）自己穿好鞋大声喊 Let\'s go！'},
{pic:'🧼 💧', q:'准备吃饭啦，爸爸喊你去洗洗手，会做出搓手动作说什么？', h:'让我们把小手洗干净。', opts:['Let\'s wash hands!','Don\'t wash.','Eat directly.'], a:0, w:'<b>Let\'s wash hands!</b>（我们去洗手手吧！）洗手时还可以唱 Wash, wash, wash your hands！'},
{pic:'🍰 😋', q:'吃到一口甜甜的水果蛋糕，开心地向大家夸赞味道好极了，会喊什么？', h:'真美味！真好吃！', opts:['Yummy! It\'s so delicious!','It\'s too salty.','I don\'t like it.'], a:0, w:'<b>Yummy! It\'s so delicious!</b>（真好吃！太美味啦！）摸摸小肚子开心地说 Yummy yummy！'},
{pic:'🚌 🛑', q:'在马路上看见一辆红色的双层大巴士，惊讶地指给妈妈看，怎么描述？', h:'看！一辆红色大巴士！', opts:['Look, a big red bus!','It is a small bike.','I can\'t see.'], a:0, w:'<b>Look, a big red bus!</b>（看呀，好大一辆红色的公交车！）学会用 Look + 颜色 + 物品，描述身边事物！'},
{pic:'🧸 🔍', q:'找不到最心爱的小熊玩偶了，急急忙忙问妈妈，应该怎么问？', h:'我的小熊在哪里呢？', opts:['Where is my teddy bear?','I hate teddy bear.','Teddy bear is sleeping.'], a:0, w:'<b>Where is my teddy bear?</b>（我的小熊玩具在哪里呀？）找到之后就可以大声欢呼 Here it is（在这里呀）！'},
{pic:'🥱 🛏️', q:'晚上玩累了揉眼睛打哈欠，告诉爸爸你困了，怎么说？', h:'我累了，我困了。', opts:['I\'m tired. Time for bed!','I\'m energetic.','Let\'s run!'], a:0, w:'<b>I\'m tired. Time for bed!</b>（我好困呀，该睡觉啦！）tired 是累了困了，说一句 Good night 睡个香香觉！'},
{pic:'🛒 🏪', q:'过家家玩超市买东西游戏，店长阿姨微笑着问你：What do you want？你怎么回答？', h:'我想要两个苹果，请给我。', opts:['Two apples, please!','I have no money.','Goodbye store.'], a:0, w:'<b>Two apples, please!</b>（请给我两个苹果！）数字 + 水果 + please，秒变英文流利小顾客！'}
]
}
]
});
