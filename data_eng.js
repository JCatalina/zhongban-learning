/* 英语启蒙 · 数字、颜色、动物、水果、礼貌语（磨耳朵, 不要求拼写） */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
id:'eng', name:'英语磨耳朵', short:'英语', icon:'🔤', color:'#14b8a6',
desc:'数字、颜色、动物、水果、礼貌语。4–5岁是语音敏感期，只"听和说"，不要求写！',
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
{pic:'🐦', q:'"小鸟" 用英语怎么说？', h:'它会飞，英文名 B 开头。', opts:['bird','dog','rabbit'], a:0, w:'<b>bird</b>（伯德）是小鸟。A bird can fly——小鸟天上飞，叽叽喳喳唱不停！'}
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
}
]
});