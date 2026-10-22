/* 幼儿生活情景英语学堂 (Kids Daily English)
   先学单词 · 再组句子 · 10大生活情景 · 100个日常高频黄金句
   适合 4–5 岁幼儿自然习得与自发展开 */

window.ENGLISH_SCENES = [
  {
    id: "morning",
    num: 1,
    name: "晨起与洗漱",
    enName: "Morning & Wash",
    icon: "🌅",
    bg: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
    themeColor: "#ea580c",
    desc: "太阳公公起得早，伸个懒腰，刷刷牙、洗洗脸！",
    words: [
      { word: "wake up", cn: "起床", emoji: "🥱", audioId: "eng_w_wakeup" },
      { word: "sun", cn: "太阳", emoji: "☀️", audioId: "eng_w_sun" },
      { word: "face", cn: "脸蛋", emoji: "😊", audioId: "eng_w_face" },
      { word: "teeth", cn: "牙齿", emoji: "🦷", audioId: "eng_w_teeth" },
      { word: "brush", cn: "刷牙", emoji: "🪥", audioId: "eng_w_brush" }
    ],
    sentences: [
      { id: "s1", num: 1, en: "Good morning!", cn: "早上好！", chunks: [{ en: "Good", cn: "好" }, { en: "morning", cn: "早晨" }], tip: "见到爸爸妈妈或老师，精神饱满地说一声！", audioId: "eng_s1_1" },
      { id: "s2", num: 2, en: "Time to wake up!", cn: "该起床啦！", chunks: [{ en: "Time to", cn: "该……的时候了" }, { en: "wake up", cn: "醒来起床" }], tip: "小闹钟响了，掀开被子起得早！", audioId: "eng_s1_2" },
      { id: "s3", num: 3, en: "Look at the sun!", cn: "看大太阳出来啦！", chunks: [{ en: "Look at", cn: "看着" }, { en: "the sun", cn: "太阳" }], tip: "拉开窗帘，指着金色阳光开心地说！", audioId: "eng_s1_3" },
      { id: "s4", num: 4, en: "Stretch your arms.", cn: "伸个大大的懒腰。", chunks: [{ en: "Stretch", cn: "伸展" }, { en: "your arms", cn: "你的手臂" }], tip: "像小猫咪一样把小手举高高！", audioId: "eng_s1_4" },
      { id: "s5", num: 5, en: "Wash your face.", cn: "洗洗小脸蛋。", chunks: [{ en: "Wash", cn: "洗洗" }, { en: "your face", cn: "你的脸" }], tip: "温温的毛巾擦一擦，小脸白又净。", audioId: "eng_s1_5" },
      { id: "s6", num: 6, en: "Use the soap, please.", cn: "请用香皂洗洗手。", chunks: [{ en: "Use the soap", cn: "用香皂" }, { en: "please", cn: "请" }], tip: "搓出香喷喷的泡泡，细菌全赶跑。", audioId: "eng_s1_6" },
      { id: "s7", num: 7, en: "Brush your teeth.", cn: "刷刷小牙齿。", chunks: [{ en: "Brush", cn: "刷一刷" }, { en: "your teeth", cn: "你的牙齿" }], tip: "上上下下、里里外外刷干净！", audioId: "eng_s1_7" },
      { id: "s8", num: 8, en: "Wipe with the towel.", cn: "用毛巾擦擦干。", chunks: [{ en: "Wipe with", cn: "擦一擦" }, { en: "the towel", cn: "毛巾" }], tip: "小手小脸擦干爽，真舒服。", audioId: "eng_s1_8" },
      { id: "s9", num: 9, en: "Comb your hair.", cn: "梳梳小头发。", chunks: [{ en: "Comb", cn: "梳理" }, { en: "your hair", cn: "你的头发" }], tip: "照照小镜子，头发整整齐齐。", audioId: "eng_s1_9" },
      { id: "s10", num: 10, en: "I am fresh and clean!", cn: "我干干净净、神清气爽啦！", chunks: [{ en: "I am", cn: "我是" }, { en: "fresh and clean", cn: "清爽又干净" }], tip: "洗漱完毕，精神百倍迎接新一天！", audioId: "eng_s1_10" }
    ]
  },
  {
    id: "breakfast",
    num: 2,
    name: "早餐与美食",
    enName: "Breakfast & Meals",
    icon: "🍳",
    bg: "linear-gradient(135deg, #fef9c3 0%, #fef08a 100%)",
    themeColor: "#d97706",
    desc: "面包鸡蛋牛奶香，吃得饱饱身体棒！",
    words: [
      { word: "water", cn: "水", emoji: "💧", audioId: "eng_w_water" },
      { word: "milk", cn: "牛奶", emoji: "🥛", audioId: "eng_w_milk" },
      { word: "bread", cn: "面包", emoji: "🍞", audioId: "eng_w_bread" },
      { word: "egg", cn: "鸡蛋", emoji: "🥚", audioId: "eng_w_egg" },
      { word: "yummy", cn: "好吃", emoji: "😋", audioId: "eng_w_yummy" }
    ],
    sentences: [
      { id: "s11", num: 11, en: "I am hungry.", cn: "我肚子饿啦。", chunks: [{ en: "I am", cn: "我是" }, { en: "hungry", cn: "饥饿的" }], tip: "摸摸小肚子，告诉妈妈该开饭啦。", audioId: "eng_s2_1" },
      { id: "s12", num: 12, en: "I want water, please.", cn: "请给我倒点水。", chunks: [{ en: "I want", cn: "我想要" }, { en: "water", cn: "水" }, { en: "please", cn: "请" }], tip: "口渴时最礼貌的完整表达！", audioId: "eng_s2_2" },
      { id: "s13", num: 13, en: "Drink some milk.", cn: "喝点香甜牛奶。", chunks: [{ en: "Drink", cn: "喝" }, { en: "some milk", cn: "一些牛奶" }], tip: "咕嘟咕嘟喝牛奶，长得高又壮！", audioId: "eng_s2_3" },
      { id: "s14", num: 14, en: "I like eggs and bread.", cn: "我喜欢鸡蛋和面包。", chunks: [{ en: "I like", cn: "我喜欢" }, { en: "eggs and bread", cn: "鸡蛋和面包" }], tip: "表达自己喜欢的健康食物。", audioId: "eng_s2_4" },
      { id: "s15", num: 15, en: "It's so yummy!", cn: "真好吃呀！", chunks: [{ en: "It's so", cn: "它是如此" }, { en: "yummy", cn: "美味好吃" }], tip: "吃到美味时开心地向大家夸奖！", audioId: "eng_s2_5" },
      { id: "s16", num: 16, en: "Can I have an apple?", cn: "我可以吃个苹果吗？", chunks: [{ en: "Can I have", cn: "我能要" }, { en: "an apple", cn: "一个苹果吗" }], tip: "想吃水果时主动礼貌询问大人。", audioId: "eng_s2_6" },
      { id: "s17", num: 17, en: "More, please.", cn: "我还想要一点。", chunks: [{ en: "More", cn: "更多" }, { en: "please", cn: "请" }], tip: "吃完了还想加餐时最灵巧的短语！", audioId: "eng_s2_7" },
      { id: "s18", num: 18, en: "No, thank you.", cn: "不要了，谢谢你。", chunks: [{ en: "No", cn: "不用了" }, { en: "thank you", cn: "谢谢你" }], tip: "吃饱了礼貌婉拒大人递来的食物。", audioId: "eng_s2_8" },
      { id: "s19", num: 19, en: "Wipe your mouth.", cn: "擦擦小嘴巴。", chunks: [{ en: "Wipe", cn: "擦干净" }, { en: "your mouth", cn: "你的嘴巴" }], tip: "吃完饭用餐巾纸擦干净小嘴巴。", audioId: "eng_s2_9" },
      { id: "s20", num: 20, en: "I am full!", cn: "我吃得饱饱的啦！", chunks: [{ en: "I am", cn: "我是" }, { en: "full", cn: "饱足的" }], tip: "拍拍满足的小肚皮！", audioId: "eng_s2_10" }
    ]
  },
  {
    id: "get_dressed",
    num: 3,
    name: "穿戴出门",
    enName: "Get Dressed & Go Out",
    icon: "👟",
    bg: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
    themeColor: "#0284c7",
    desc: "穿小鞋、戴帽子，背起小书包出发啦！",
    words: [
      { word: "shoes", cn: "鞋子", emoji: "👟", audioId: "eng_w_shoes" },
      { word: "socks", cn: "袜子", emoji: "🧦", audioId: "eng_w_socks" },
      { word: "coat", cn: "外套", emoji: "🧥", audioId: "eng_w_coat" },
      { word: "hat", cn: "帽子", emoji: "🧢", audioId: "eng_w_hat" },
      { word: "put on", cn: "穿戴", emoji: "👕", audioId: "eng_w_puton" }
    ],
    sentences: [
      { id: "s21", num: 21, en: "Put on your socks.", cn: "穿上小袜子。", chunks: [{ en: "Put on", cn: "穿上" }, { en: "your socks", cn: "你的袜子" }], tip: "套上一对暖暖的花袜子。", audioId: "eng_s3_1" },
      { id: "s22", num: 22, en: "Put on your shoes.", cn: "穿上你的鞋子。", chunks: [{ en: "Put on", cn: "穿上" }, { en: "your shoes", cn: "你的鞋子" }], tip: "分清左右脚，小鞋穿整齐！", audioId: "eng_s3_2" },
      { id: "s23", num: 23, en: "Wear your warm coat.", cn: "穿上暖和的外套。", chunks: [{ en: "Wear", cn: "穿着" }, { en: "your warm coat", cn: "你的暖和外套" }], tip: "外面风大，穿上外套不受凉。", audioId: "eng_s3_3" },
      { id: "s24", num: 24, en: "Where is my hat?", cn: "我的帽子在哪里？", chunks: [{ en: "Where is", cn: "在哪里" }, { en: "my hat", cn: "我的帽子" }], tip: "找不到帽子时向妈妈提问。", audioId: "eng_s3_4" },
      { id: "s25", num: 25, en: "Here it is!", cn: "在这里呢！", chunks: [{ en: "Here", cn: "在这里" }, { en: "it is", cn: "它就是" }], tip: "在沙发上找到了，开心地喊出来！", audioId: "eng_s3_5" },
      { id: "s26", num: 26, en: "Zip up your jacket.", cn: "拉上拉链。", chunks: [{ en: "Zip up", cn: "拉上拉链" }, { en: "your jacket", cn: "你的夹克衫" }], tip: "拉链拉拉拉，保暖又帅气！", audioId: "eng_s3_6" },
      { id: "s27", num: 27, en: "Take your backpack.", cn: "背上你的小书包。", chunks: [{ en: "Take", cn: "带上拿起" }, { en: "your backpack", cn: "你的双肩背包" }], tip: "装好水壶和小手帕，背好书包。", audioId: "eng_s3_7" },
      { id: "s28", num: 28, en: "Are you ready?", cn: "你准备好了吗？", chunks: [{ en: "Are you", cn: "你是……吗" }, { en: "ready", cn: "准备好" }], tip: "大人在门口问你准备好了没有。", audioId: "eng_s3_8" },
      { id: "s29", num: 29, en: "Yes, I'm ready!", cn: "是的，我准备好啦！", chunks: [{ en: "Yes", cn: "是的" }, { en: "I'm ready", cn: "我准备好了" }], tip: "大声自信地回应，整装待发！", audioId: "eng_s3_9" },
      { id: "s30", num: 30, en: "Let's go!", cn: "我们出发吧！", chunks: [{ en: "Let's", cn: "让我们" }, { en: "go", cn: "走吧出发" }], tip: "推开家门，欢快迈步去幼儿园！", audioId: "eng_s3_10" }
    ]
  },
  {
    id: "nature",
    num: 4,
    name: "路上与户外观察",
    enName: "On the Way & Nature",
    icon: "🚌",
    bg: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
    themeColor: "#16a34a",
    desc: "大巴车、红绿灯、小狗小花，世界真奇妙！",
    words: [
      { word: "bus", cn: "公交车", emoji: "🚌", audioId: "eng_w_bus" },
      { word: "car", cn: "汽车", emoji: "🚗", audioId: "eng_w_car" },
      { word: "dog", cn: "小狗", emoji: "🐶", audioId: "eng_w_dog" },
      { word: "flower", cn: "花朵", emoji: "🌸", audioId: "eng_w_flower" },
      { word: "stop", cn: "停下", emoji: "🛑", audioId: "eng_w_stop" }
    ],
    sentences: [
      { id: "s31", num: 31, en: "Hold my hand, please.", cn: "请牵好我的手。", chunks: [{ en: "Hold", cn: "握住抓好" }, { en: "my hand", cn: "我的手" }, { en: "please", cn: "请" }], tip: "在马路上紧紧牵着大人的手最安全。", audioId: "eng_s4_1" },
      { id: "s32", num: 32, en: "Look, a big bus!", cn: "看，好大一辆公交车！", chunks: [{ en: "Look", cn: "看呀" }, { en: "a big bus", cn: "一辆大公交车" }], tip: "指着开过去的双层巴士惊叹！", audioId: "eng_s4_2" },
      { id: "s33", num: 33, en: "Red light, stop!", cn: "红灯停！", chunks: [{ en: "Red light", cn: "红色的灯" }, { en: "stop", cn: "停下来" }], tip: "过马路安全规则牢牢记在心。", audioId: "eng_s4_3" },
      { id: "s34", num: 34, en: "Green light, go!", cn: "绿灯行！", chunks: [{ en: "Green light", cn: "绿色的灯" }, { en: "go", cn: "走过去" }], tip: "绿灯亮起，走斑马线稳稳过马路。", audioId: "eng_s4_4" },
      { id: "s35", num: 35, en: "The car is fast.", cn: "小汽车开得好快呀。", chunks: [{ en: "The car is", cn: "小汽车是" }, { en: "fast", cn: "快速的" }], tip: "观察车辆飞驰，感受快与慢。", audioId: "eng_s4_5" },
      { id: "s36", num: 36, en: "Look at the blue sky.", cn: "看看蓝蓝的天空。", chunks: [{ en: "Look at", cn: "看看" }, { en: "the blue sky", cn: "蓝色的天空" }], tip: "抬头望望飘着白云的大晴天。", audioId: "eng_s4_6" },
      { id: "s37", num: 37, en: "I see a little bird.", cn: "我看见一只小鸟。", chunks: [{ en: "I see", cn: "我看见" }, { en: "a little bird", cn: "一只小鸟" }], tip: "树枝上停着小鸟叽叽喳喳唱歌。", audioId: "eng_s4_7" },
      { id: "s38", num: 38, en: "The dog is cute.", cn: "那只小狗好可爱。", chunks: [{ en: "The dog is", cn: "小狗是" }, { en: "cute", cn: "可爱的" }], tip: "看见摇尾巴的小金毛犬。", audioId: "eng_s4_8" },
      { id: "s39", num: 39, en: "Beautiful flowers!", cn: "好漂亮的花朵呀！", chunks: [{ en: "Beautiful", cn: "美丽的" }, { en: "flowers", cn: "花儿们" }], tip: "路边开满了五颜六色的花花。", audioId: "eng_s4_9" },
      { id: "s40", num: 40, en: "What color is it?", cn: "这是什么颜色？", chunks: [{ en: "What color", cn: "什么颜色" }, { en: "is it", cn: "它是" }], tip: "考考爸爸妈妈：Red? Yellow? Blue?", audioId: "eng_s4_10" }
    ]
  },
  {
    id: "playground",
    num: 5,
    name: "公园与游乐场",
    enName: "Park & Playground",
    icon: "🎠",
    bg: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",
    themeColor: "#db2777",
    desc: "滑梯秋千捉迷藏，跑跑跳跳真欢畅！",
    words: [
      { word: "run", cn: "跑", emoji: "🏃", audioId: "eng_w_run" },
      { word: "jump", cn: "跳", emoji: "🦘", audioId: "eng_w_jump" },
      { word: "slide", cn: "滑梯", emoji: "🛝", audioId: "eng_w_slide" },
      { word: "swing", cn: "秋千", emoji: "🪵", audioId: "eng_w_swing" },
      { word: "ball", cn: "球", emoji: "⚽", audioId: "eng_w_ball" }
    ],
    sentences: [
      { id: "s41", num: 41, en: "I can run fast!", cn: "我能跑得好快！", chunks: [{ en: "I can run", cn: "我能跑步" }, { en: "fast", cn: "快快的" }], tip: "在草地上像小旋风一样奔跑！", audioId: "eng_s5_1" },
      { id: "s42", num: 42, en: "Jump up and down!", cn: "跳上跳下！", chunks: [{ en: "Jump", cn: "跳跃" }, { en: "up and down", cn: "上上下下" }], tip: "佩奇踩水坑名句，双脚原地跳！", audioId: "eng_s5_2" },
      { id: "s43", num: 43, en: "Let's go on the slide.", cn: "我们去滑滑梯吧。", chunks: [{ en: "Let's go on", cn: "让我们去玩" }, { en: "the slide", cn: "滑滑梯" }], tip: "排好队，一步步爬上滑梯阶梯。", audioId: "eng_s5_3" },
      { id: "s44", num: 44, en: "Whee, down we go!", cn: "哇，滑下来咯！", chunks: [{ en: "Whee", cn: "哇呼" }, { en: "down we go", cn: "我们滑下去啦" }], tip: "哧溜一声滑到底，欢笑声不停！", audioId: "eng_s5_4" },
      { id: "s45", num: 45, en: "Push me on the swing.", cn: "推我荡秋千吧。", chunks: [{ en: "Push me", cn: "推推我" }, { en: "on the swing", cn: "在秋千上" }], tip: "双手抓紧秋千绳，请爸爸推一把。", audioId: "eng_s5_5" },
      { id: "s46", num: 46, en: "Higher and higher!", cn: "荡得越来越高啦！", chunks: [{ en: "Higher", cn: "更高" }, { en: "and higher", cn: "越来越高" }], tip: "秋千荡起来，像小鸟一样飞翔！", audioId: "eng_s5_6" },
      { id: "s47", num: 47, en: "Catch the ball!", cn: "接住小球！", chunks: [{ en: "Catch", cn: "接住抓到" }, { en: "the ball", cn: "那个球" }], tip: "和小伙伴一起抛球接球游戏。", audioId: "eng_s5_7" },
      { id: "s48", num: 48, en: "Kick the ball!", cn: "踢足球！", chunks: [{ en: "Kick", cn: "用脚踢" }, { en: "the ball", cn: "那个球" }], tip: "抬起小脚，用力把球踢进球门！", audioId: "eng_s5_8" },
      { id: "s49", num: 49, en: "Let's play together.", cn: "我们一起玩吧。", chunks: [{ en: "Let's play", cn: "让我们一起玩" }, { en: "together", cn: "在一起" }], tip: "主动邀请别的小朋友一起做游戏。", audioId: "eng_s5_9" },
      { id: "s50", num: 50, en: "This is so much fun!", cn: "这太好玩啦！", chunks: [{ en: "This is", cn: "这真是" }, { en: "so much fun", cn: "太有趣太好玩啦" }], tip: "满脸灿烂笑容，尽情享受快乐童年！", audioId: "eng_s5_10" }
    ]
  },
  {
    id: "friends",
    num: 6,
    name: "礼貌与社交分享",
    enName: "Manners & Friends",
    icon: "🤝",
    bg: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
    themeColor: "#7c3aed",
    desc: "有礼貌的小明星，请、谢谢、对不起！",
    words: [
      { word: "hello", cn: "你好", emoji: "👋", audioId: "eng_w_hello" },
      { word: "thank you", cn: "谢谢", emoji: "🎁", audioId: "eng_w_thanks" },
      { word: "welcome", cn: "不客气", emoji: "😊", audioId: "eng_w_welcome" },
      { word: "sorry", cn: "对不起", emoji: "🙏", audioId: "eng_w_sorry" },
      { word: "share", cn: "分享", emoji: "🧸", audioId: "eng_w_share" }
    ],
    sentences: [
      { id: "s51", num: 51, en: "Hello, my friend!", cn: "你好，我的好朋友！", chunks: [{ en: "Hello", cn: "你好" }, { en: "my friend", cn: "我的朋友" }], tip: "见到好伙伴，热情招招手。", audioId: "eng_s6_1" },
      { id: "s52", num: 52, en: "What's your name?", cn: "你叫什么名字？", chunks: [{ en: "What's", cn: "是什么" }, { en: "your name", cn: "你的名字" }], tip: "认识新朋友时的第一句魔法问候。", audioId: "eng_s6_2" },
      { id: "s53", num: 53, en: "My name is baby.", cn: "我的名字是宝宝。", chunks: [{ en: "My name is", cn: "我的名字是" }, { en: "baby", cn: "宝宝" }], tip: "大方自信地介绍自己的英文名字。", audioId: "eng_s6_3" },
      { id: "s54", num: 54, en: "Here you go.", cn: "给你拿好。", chunks: [{ en: "Here", cn: "这里" }, { en: "you go", cn: "拿去吧" }], tip: "双手把玩具或彩笔递给对方。", audioId: "eng_s6_4" },
      { id: "s55", num: 55, en: "Thank you so much!", cn: "非常谢谢你！", chunks: [{ en: "Thank you", cn: "谢谢你" }, { en: "so much", cn: "非常多" }], tip: "收到别人帮助或礼物，大声感谢！", audioId: "eng_s6_5" },
      { id: "s56", num: 56, en: "You're welcome.", cn: "不用客气。", chunks: [{ en: "You're", cn: "你是" }, { en: "welcome", cn: "不用客气的" }], tip: "别人对你说谢谢，温和回应这句。", audioId: "eng_s6_6" },
      { id: "s57", num: 57, en: "I'm sorry.", cn: "对不起。", chunks: [{ en: "I'm", cn: "我是" }, { en: "sorry", cn: "抱歉的" }], tip: "不小心碰倒了别的小积木，先道歉。", audioId: "eng_s6_7" },
      { id: "s58", num: 58, en: "That's okay.", cn: "没关系。", chunks: [{ en: "That's", cn: "那是" }, { en: "okay", cn: "没事的好的" }], tip: "大度原谅别人，握握手还是好朋友。", audioId: "eng_s6_8" },
      { id: "s59", num: 59, en: "It's your turn.", cn: "轮到你啦。", chunks: [{ en: "It's", cn: "它是" }, { en: "your turn", cn: "你的轮换次序" }], tip: "轮流荡秋千、排队玩游戏。", audioId: "eng_s6_9" },
      { id: "s60", num: 60, en: "Let's share toys.", cn: "我们一起分享玩具吧。", chunks: [{ en: "Let's share", cn: "让我们分享" }, { en: "toys", cn: "玩具们" }], tip: "懂得分享的小朋友人人都喜欢！", audioId: "eng_s6_10" }
    ]
  },
  {
    id: "feelings",
    num: 7,
    name: "身体感觉与情绪表达",
    enName: "Feelings & Needs",
    icon: "💖",
    bg: "linear-gradient(135deg, #fee2e2 0%, #fecdd3 100%)",
    themeColor: "#e11d48",
    desc: "开心、难过、口渴、求抱抱，勇敢说出我的感受！",
    words: [
      { word: "happy", cn: "开心", emoji: "😄", audioId: "eng_w_happy" },
      { word: "sad", cn: "难过", emoji: "😢", audioId: "eng_w_sad" },
      { word: "cold", cn: "冷", emoji: "🥶", audioId: "eng_w_cold" },
      { word: "hot", cn: "热", emoji: "🥵", audioId: "eng_w_hot" },
      { word: "hug", cn: "拥抱", emoji: "🫂", audioId: "eng_w_hug" }
    ],
    sentences: [
      { id: "s61", num: 61, en: "I am happy today!", cn: "我今天好开心！", chunks: [{ en: "I am happy", cn: "我是开心的" }, { en: "today", cn: "今天" }], tip: "蹦蹦跳跳露出开心的笑容。", audioId: "eng_s7_1" },
      { id: "s62", num: 62, en: "Don't be sad.", cn: "不要难过啦。", chunks: [{ en: "Don't be", cn: "不要成为" }, { en: "sad", cn: "伤心难过" }], tip: "安慰身边掉眼泪的小伙伴。", audioId: "eng_s7_2" },
      { id: "s63", num: 63, en: "I'm cold.", cn: "我觉得有点冷。", chunks: [{ en: "I'm", cn: "我是" }, { en: "cold", cn: "寒冷的" }], tip: "双手抱臂，告诉妈妈添件衣服。", audioId: "eng_s7_3" },
      { id: "s64", num: 64, en: "It's hot outside.", cn: "外面好热呀。", chunks: [{ en: "It's hot", cn: "天气好热" }, { en: "outside", cn: "在外面" }], tip: "夏天太阳晒，扇扇小风扇。", audioId: "eng_s7_4" },
      { id: "s65", num: 65, en: "I need to go to potty.", cn: "我要去上厕所啦。", chunks: [{ en: "I need to", cn: "我需要去" }, { en: "go to potty", cn: "上厕所便便" }], tip: "有了便意，大方及时告诉老师！", audioId: "eng_s7_5" },
      { id: "s66", num: 66, en: "My tummy hurts.", cn: "我肚子有点疼。", chunks: [{ en: "My tummy", cn: "我的小肚子" }, { en: "hurts", cn: "疼痛不适" }], tip: "身体不舒服要第一时间告诉大人。", audioId: "eng_s7_6" },
      { id: "s67", num: 67, en: "It hurts here.", cn: "这里碰疼了。", chunks: [{ en: "It hurts", cn: "它疼痛" }, { en: "here", cn: "在这个位置" }], tip: "用小手指着磕碰的膝盖或手肘。", audioId: "eng_s7_7" },
      { id: "s68", num: 68, en: "Blow, blow, it's okay.", cn: "吹一吹就不疼啦。", chunks: [{ en: "Blow, blow", cn: "吹一吹气" }, { en: "it's okay", cn: "没事的" }], tip: "妈妈温柔地给伤口吹吹气。", audioId: "eng_s7_8" },
      { id: "s69", num: 69, en: "I need a hug.", cn: "我想要一个大大的拥抱。", chunks: [{ en: "I need", cn: "我需要" }, { en: "a hug", cn: "一个拥抱" }], tip: "张开双臂扑进爸爸妈妈怀里。", audioId: "eng_s7_9" },
      { id: "s70", num: 70, en: "I love you!", cn: "我好爱你！", chunks: [{ en: "I love", cn: "我爱" }, { en: "you", cn: "你" }], tip: "亲亲妈妈的脸颊，说出最甜的话！", audioId: "eng_s7_10" }
    ]
  },
  {
    id: "cartoons",
    num: 8,
    name: "动画大明星经典台词",
    enName: "Cartoons & Heroes",
    icon: "🎬",
    bg: "linear-gradient(135deg, #fae8ff 0%, #f5d0fe 100%)",
    themeColor: "#a855f7",
    desc: "小猪佩奇踩泥坑，汪汪队出动大救援！",
    words: [
      { word: "pig", cn: "小猪", emoji: "🐷", audioId: "eng_w_pig" },
      { word: "puppy", cn: "小狗", emoji: "🐶", audioId: "eng_w_puppy" },
      { word: "dinosaur", cn: "恐龙", emoji: "🦖", audioId: "eng_w_dinosaur" },
      { word: "puddle", cn: "泥坑", emoji: "💦", audioId: "eng_w_puddle" },
      { word: "rescue", cn: "救援", emoji: "🚨", audioId: "eng_w_rescue" }
    ],
    sentences: [
      { id: "s71", num: 71, en: "I'm Peppa Pig!", cn: "我是小猪佩奇！", chunks: [{ en: "I'm", cn: "我是" }, { en: "Peppa Pig", cn: "佩奇小猪" }], tip: "小猪佩奇动画片的经典开场第一句！", audioId: "eng_s8_1" },
      { id: "s72", num: 72, en: "I love muddy puddles!", cn: "我最爱踩泥坑啦！", chunks: [{ en: "I love", cn: "我最爱" }, { en: "muddy puddles", cn: "泥泞的水坑" }], tip: "穿上雨靴在泥水里欢呼雀跃！", audioId: "eng_s8_2" },
      { id: "s73", num: 73, en: "Splish, splash, splosh!", cn: "扑通扑通踩水花！", chunks: [{ en: "Splish, splash", cn: "扑哧扑哧" }, { en: "splosh", cn: "水花溅起来" }], tip: "踩水坑时的欢快拟声词！", audioId: "eng_s8_3" },
      { id: "s74", num: 74, en: "Dinosaur, grrr!", cn: "大恐龙，嗷呜！", chunks: [{ en: "Dinosaur", cn: "恐龙玩具" }, { en: "grrr", cn: "嗷呜大吼" }], tip: "乔治最心爱的大恐龙咆哮！", audioId: "eng_s8_4" },
      { id: "s75", num: 75, en: "That's so funny!", cn: "太搞笑啦，太逗啦！", chunks: [{ en: "That's so", cn: "那真是太" }, { en: "funny", cn: "搞笑有趣" }], tip: "佩奇全家倒在地上笑得哼哼叫！", audioId: "eng_s8_5" },
      { id: "s76", num: 76, en: "Ready or not, here I come!", cn: "捉迷藏：我来找你们啦！", chunks: [{ en: "Ready or not", cn: "准备好没有" }, { en: "here I come", cn: "我来找啦" }], tip: "佩奇玩捉迷藏数到十后的名台词！", audioId: "eng_s8_6" },
      { id: "s77", num: 77, en: "PAW Patrol is on a roll!", cn: "汪汪队要出动啦！", chunks: [{ en: "PAW Patrol", cn: "汪汪队" }, { en: "is on a roll", cn: "出动救援行动" }], tip: "莱德队长召集狗狗们的经典口令！", audioId: "eng_s8_7" },
      { id: "s78", num: 78, en: "Chase is on the case!", cn: "包在阿奇身上！", chunks: [{ en: "Chase is", cn: "阿奇警犬" }, { en: "on the case", cn: "来处理这个案件" }], tip: "勇敢警犬阿奇接受任务时的帅气回答！", audioId: "eng_s8_8" },
      { id: "s79", num: 79, en: "I'm fired up!", cn: "毛毛：我热情满满准备救援！", chunks: [{ en: "I'm", cn: "我是" }, { en: "fired up", cn: "充满热情活力" }], tip: "消防小狗毛毛的标志性出击口号！", audioId: "eng_s8_9" },
      { id: "s80", num: 80, en: "Let's take to the sky!", cn: "天天：让我们飞上蓝天吧！", chunks: [{ en: "Let's take to", cn: "让我们去到" }, { en: "the sky", cn: "天空之中" }], tip: "直升机飞行员天天翻跟头飞上天！", audioId: "eng_s8_10" }
    ]
  },
  {
    id: "cleanup",
    num: 9,
    name: "收拾整理与好习惯",
    enName: "Clean Up & Habits",
    icon: "📦",
    bg: "linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)",
    themeColor: "#0d9488",
    desc: "玩具归位、自己动手，我是家务小帮手！",
    words: [
      { word: "clean up", cn: "收拾", emoji: "🧹", audioId: "eng_w_cleanup" },
      { word: "box", cn: "箱子", emoji: "📦", audioId: "eng_w_box" },
      { word: "toy", cn: "玩具", emoji: "🧸", audioId: "eng_w_toy" },
      { word: "help", cn: "帮助", emoji: "🖐️", audioId: "eng_w_help" },
      { word: "good job", cn: "真棒", emoji: "👍", audioId: "eng_w_goodjob" }
    ],
    sentences: [
      { id: "s81", num: 81, en: "Time to clean up.", cn: "该收拾整理啦。", chunks: [{ en: "Time to", cn: "该到时间了" }, { en: "clean up", cn: "收拾干净" }], tip: "做完游戏，送玩具们回家啦！", audioId: "eng_s9_1" },
      { id: "s82", num: 82, en: "Put the toys in the box.", cn: "把玩具放进盒子里。", chunks: [{ en: "Put the toys", cn: "把玩具放好" }, { en: "in the box", cn: "在收纳箱里" }], tip: "积木娃娃整齐收进大箱子。", audioId: "eng_s9_2" },
      { id: "s83", num: 83, en: "Pick up the blocks.", cn: "把地上的积木捡起来。", chunks: [{ en: "Pick up", cn: "捡拾起来" }, { en: "the blocks", cn: "积木块" }], tip: "地上一块也不落下，干干净净。", audioId: "eng_s9_3" },
      { id: "s84", num: 84, en: "I can do it!", cn: "我自己能做到！", chunks: [{ en: "I can", cn: "我能够" }, { en: "do it", cn: "做到这件事" }], tip: "不用大人代劳，自己独立完成！", audioId: "eng_s9_4" },
      { id: "s85", num: 85, en: "Can you help me?", cn: "你能帮帮我吗？", chunks: [{ en: "Can you", cn: "你能……吗" }, { en: "help me", cn: "帮助我" }], tip: "箱子太重搬不动，礼貌请求支援。", audioId: "eng_s9_5" },
      { id: "s86", num: 86, en: "Thank you for your help.", cn: "谢谢你的帮助。", chunks: [{ en: "Thank you for", cn: "感谢你因为" }, { en: "your help", cn: "你的热心帮助" }], tip: "别人搭了把手，真诚说声谢谢。", audioId: "eng_s9_6" },
      { id: "s87", num: 87, en: "Please wait a minute.", cn: "请等一等哦。", chunks: [{ en: "Please wait", cn: "请耐心等待" }, { en: "a minute", cn: "一分钟一下下" }], tip: "学会耐心轮流和等待。", audioId: "eng_s9_7" },
      { id: "s88", num: 88, en: "Listen to Mommy.", cn: "听妈妈说。", chunks: [{ en: "Listen to", cn: "认真倾听" }, { en: "Mommy", cn: "妈妈" }], tip: "安静竖起小耳朵，专心听讲。", audioId: "eng_s9_8" },
      { id: "s89", num: 89, en: "Be careful, sweetie.", cn: "小心一点哦，宝贝。", chunks: [{ en: "Be careful", cn: "要小心谨慎" }, { en: "sweetie", cn: "亲爱的宝贝" }], tip: "走路看路，下台阶慢慢走。", audioId: "eng_s9_9" },
      { id: "s90", num: 90, en: "Good job, little helper!", cn: "做得很棒，小帮手！", chunks: [{ en: "Good job", cn: "做得好" }, { en: "little helper", cn: "家庭小帮手" }], tip: "收拾完房间，妈妈给大大的赞！", audioId: "eng_s9_10" }
    ]
  },
  {
    id: "bedtime",
    num: 10,
    name: "晚安与甜蜜睡前",
    enName: "Bedtime & Sweet Dreams",
    icon: "🌙",
    bg: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
    themeColor: "#475569",
    desc: "月亮星星眨眼睛，晚安吻里进梦乡！",
    words: [
      { word: "sleep", cn: "睡觉", emoji: "😴", audioId: "eng_w_sleep" },
      { word: "bed", cn: "小床", emoji: "🛏️", audioId: "eng_w_bed" },
      { word: "story", cn: "故事", emoji: "📖", audioId: "eng_w_story" },
      { word: "moon", cn: "月亮", emoji: "🌕", audioId: "eng_w_moon" },
      { word: "kiss", cn: "亲吻", emoji: "💋", audioId: "eng_w_kiss" }
    ],
    sentences: [
      { id: "s91", num: 91, en: "It is dark outside.", cn: "外面天黑啦。", chunks: [{ en: "It is dark", cn: "天变黑了" }, { en: "outside", cn: "在外面" }], tip: "太阳公公下山，夜幕悄悄降临。", audioId: "eng_s10_1" },
      { id: "s92", num: 92, en: "Look at the moon and stars.", cn: "看看月亮和小星星。", chunks: [{ en: "Look at", cn: "看着" }, { en: "the moon and stars", cn: "月亮和星星" }], tip: "窗外一闪一闪亮晶晶的小星斗。", audioId: "eng_s10_2" },
      { id: "s93", num: 93, en: "Time for bed.", cn: "该睡觉觉啦。", chunks: [{ en: "Time for", cn: "到了……的时间" }, { en: "bed", cn: "去小床休息" }], tip: "脱下小拖鞋，钻进软软的被窝。", audioId: "eng_s10_3" },
      { id: "s94", num: 94, en: "Let's read a bedtime story.", cn: "我们读一本睡前故事吧。", chunks: [{ en: "Let's read", cn: "让我们读" }, { en: "a bedtime story", cn: "一个睡前故事" }], tip: "依偎在妈妈怀里听经典绘本。", audioId: "eng_s10_4" },
      { id: "s95", num: 95, en: "Turn off the light, please.", cn: "请把灯关上吧。", chunks: [{ en: "Turn off", cn: "关掉" }, { en: "the light", cn: "电灯" }, { en: "please", cn: "请" }], tip: "房间暗下来，让小眼睛好好休息。", audioId: "eng_s10_5" },
      { id: "s96", num: 96, en: "Give me a good night kiss.", cn: "给我一个晚安吻吧。", chunks: [{ en: "Give me", cn: "给我" }, { en: "a good night kiss", cn: "一个晚安亲吻" }], tip: "妈妈在额头上轻轻落下一个吻。", audioId: "eng_s10_6" },
      { id: "s97", num: 97, en: "I love you, Mommy and Daddy.", cn: "我爱你们，爸爸妈妈。", chunks: [{ en: "I love you", cn: "我爱你们" }, { en: "Mommy and Daddy", cn: "妈妈和爸爸" }], tip: "睡前说出最温暖的爱意。", audioId: "eng_s10_7" },
      { id: "s98", num: 98, en: "Good night, sleep tight.", cn: "晚安，睡个好觉。", chunks: [{ en: "Good night", cn: "晚安" }, { en: "sleep tight", cn: "睡得踏实香甜" }], tip: "盖好小被子，做个香甜好梦。", audioId: "eng_s10_8" },
      { id: "s99", num: 99, en: "Close your eyes.", cn: "闭上你的小眼睛。", chunks: [{ en: "Close", cn: "闭上合上" }, { en: "your eyes", cn: "你的眼睛" }], tip: "长长的睫毛垂下来，进入梦乡。", audioId: "eng_s10_9" },
      { id: "s100", num: 100, en: "Sweet dreams!", cn: "做个甜甜的美梦！", chunks: [{ en: "Sweet", cn: "甜蜜的" }, { en: "dreams", cn: "梦乡们" }], tip: "梦见快乐的小白兔和小恐龙！", audioId: "eng_s10_10" }
    ]
  }
];
