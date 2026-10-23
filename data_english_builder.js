// 中班少儿英语三阶自然习得（认单词 ➔ 学语法句架 ➔ 生活造句）超大题库
// 6 大核心生活高频主题，每个主题满额 50 组，全量共 300 组造句链
// 结构契约：每个词组包含 word(单词识别), grammar(语法骨架插槽), sentence(生活完整造句)
window.DATA_ENG_BUILDER = [
  {
    "topicId": "food",
    "topicName": "美食餐具",
    "icon": "🍔",
    "desc": "水、牛奶、苹果、面包、餐具等餐桌常见物品与需求句型",
    "items": [
      {
        "id": "eb_food_1",
        "word": {
          "text": "water",
          "cn": "水",
          "pic": "💧"
        },
        "grammar": {
          "pattern": "Give me some [___].",
          "cn": "给我一些...",
          "tip": "口渴想喝东西时用 Give me some！"
        },
        "sentence": {
          "full": "Give me some water.",
          "cn": "给我一些水。",
          "sceneTip": "口渴想喝温水时对爸爸妈妈说",
          "chunks": [
            "Give me",
            "some water."
          ]
        }
      },
      {
        "id": "eb_food_2",
        "word": {
          "text": "milk",
          "cn": "牛奶",
          "pic": "🥛"
        },
        "grammar": {
          "pattern": "I want [___].",
          "cn": "我想要...",
          "tip": "想要喝香甜饮品时用 I want！"
        },
        "sentence": {
          "full": "I want some milk.",
          "cn": "我想要喝牛奶。",
          "sceneTip": "早餐想喝香甜牛奶时说",
          "chunks": [
            "I want",
            "some milk."
          ]
        }
      },
      {
        "id": "eb_food_3",
        "word": {
          "text": "apple",
          "cn": "苹果",
          "pic": "🍎"
        },
        "grammar": {
          "pattern": "Please give me a/an [___].",
          "cn": "请给我一个...",
          "tip": "礼貌向大人要水果吃时用 Please give me！"
        },
        "sentence": {
          "full": "Please give me an apple.",
          "cn": "请给我一个苹果。",
          "sceneTip": "想吃脆甜红苹果时懂礼貌地说",
          "chunks": [
            "Please give me",
            "an apple."
          ]
        }
      },
      {
        "id": "eb_food_4",
        "word": {
          "text": "banana",
          "cn": "香蕉",
          "pic": "🍌"
        },
        "grammar": {
          "pattern": "I like [___].",
          "cn": "我喜欢...",
          "tip": "表达自己喜欢的食物时用 I like！"
        },
        "sentence": {
          "full": "I like bananas.",
          "cn": "我喜欢吃香蕉。",
          "sceneTip": "指着黄色香蕉表达喜爱",
          "chunks": [
            "I like",
            "bananas."
          ]
        }
      },
      {
        "id": "eb_food_5",
        "word": {
          "text": "bread",
          "cn": "面包",
          "pic": "🍞"
        },
        "grammar": {
          "pattern": "I eat [___] for breakfast.",
          "cn": "我早餐吃...",
          "tip": "介绍自己早上吃什么时使用！"
        },
        "sentence": {
          "full": "I eat bread for breakfast.",
          "cn": "我早餐吃软软的面包。",
          "sceneTip": "早餐吃吐司切片时说",
          "chunks": [
            "I eat bread",
            "for breakfast."
          ]
        }
      },
      {
        "id": "eb_food_6",
        "word": {
          "text": "egg",
          "cn": "鸡蛋",
          "pic": "🥚"
        },
        "grammar": {
          "pattern": "This is a yummy [___].",
          "cn": "这是一个美味的...",
          "tip": "夸赞某种食物真香真好吃时使用！"
        },
        "sentence": {
          "full": "This is a yummy egg.",
          "cn": "这是一个美味的鸡蛋。",
          "sceneTip": "剥开白水蛋吃蛋黄时说",
          "chunks": [
            "This is",
            "a yummy egg."
          ]
        }
      },
      {
        "id": "eb_food_7",
        "word": {
          "text": "rice",
          "cn": "米饭",
          "pic": "🍚"
        },
        "grammar": {
          "pattern": "I want to eat [___].",
          "cn": "我想吃...",
          "tip": "肚子饿了想吃主食时使用！"
        },
        "sentence": {
          "full": "I want to eat rice.",
          "cn": "我想吃香喷喷的米饭。",
          "sceneTip": "正餐坐在小饭桌前说",
          "chunks": [
            "I want to eat",
            "rice."
          ]
        }
      },
      {
        "id": "eb_food_8",
        "word": {
          "text": "noodles",
          "cn": "面条",
          "pic": "🍜"
        },
        "grammar": {
          "pattern": "Slurp! Delicious [___]!",
          "cn": "吸溜！美味的...",
          "tip": "吃长长面条时发出快乐的声音！"
        },
        "sentence": {
          "full": "Slurp! Delicious noodles!",
          "cn": "吸溜！好吃的面条！",
          "sceneTip": "用小筷子挑起面条吃时说",
          "chunks": [
            "Slurp!",
            "Delicious noodles!"
          ]
        }
      },
      {
        "id": "eb_food_9",
        "word": {
          "text": "soup",
          "cn": "热汤",
          "pic": "🥣"
        },
        "grammar": {
          "pattern": "The [___] is hot.",
          "cn": "...好烫呀。",
          "tip": "提醒食物热气腾腾需要吹一吹！"
        },
        "sentence": {
          "full": "The soup is hot.",
          "cn": "热汤好烫，吹吹再喝。",
          "sceneTip": "喝蔬菜蛋花汤时提醒自己吹一吹",
          "chunks": [
            "The soup",
            "is hot."
          ]
        }
      },
      {
        "id": "eb_food_10",
        "word": {
          "text": "cookie",
          "cn": "饼干",
          "pic": "🍪"
        },
        "grammar": {
          "pattern": "Can I have a [___]?",
          "cn": "我可以吃一块...吗？",
          "tip": "礼貌询问能不能吃小零食！"
        },
        "sentence": {
          "full": "Can I have a cookie?",
          "cn": "我可以吃一块小饼干吗？",
          "sceneTip": "想吃酥脆饼干时懂礼貌地问",
          "chunks": [
            "Can I have",
            "a cookie?"
          ]
        }
      },
      {
        "id": "eb_food_11",
        "word": {
          "text": "cake",
          "cn": "蛋糕",
          "pic": "🎂"
        },
        "grammar": {
          "pattern": "Look at the birthday [___]!",
          "cn": "看那个生日...",
          "tip": "庆祝生日看到漂亮蛋糕时说！"
        },
        "sentence": {
          "full": "Look at the birthday cake!",
          "cn": "快看这个大大的生日蛋糕！",
          "sceneTip": "吹蜡烛前兴奋地指着蛋糕",
          "chunks": [
            "Look at",
            "the birthday cake!"
          ]
        }
      },
      {
        "id": "eb_food_12",
        "word": {
          "text": "juice",
          "cn": "果汁",
          "pic": "🧃"
        },
        "grammar": {
          "pattern": "Sweet orange [___], please.",
          "cn": "请给我甜甜的...",
          "tip": "想要喝多汁水果饮品时说！"
        },
        "sentence": {
          "full": "Sweet orange juice, please.",
          "cn": "请给我甜甜的橙汁。",
          "sceneTip": "拿起吸管杯喝果汁时说",
          "chunks": [
            "Sweet orange juice,",
            "please."
          ]
        }
      },
      {
        "id": "eb_food_13",
        "word": {
          "text": "strawberry",
          "cn": "草莓",
          "pic": "🍓"
        },
        "grammar": {
          "pattern": "The [___] is sweet and red.",
          "cn": "...又红又甜。",
          "tip": "描述草莓的颜色和口感！"
        },
        "sentence": {
          "full": "The strawberry is sweet and red.",
          "cn": "红草莓又甜又多汁。",
          "sceneTip": "咬一口大红草莓时赞美",
          "chunks": [
            "The strawberry",
            "is sweet and red."
          ]
        }
      },
      {
        "id": "eb_food_14",
        "word": {
          "text": "watermelon",
          "cn": "西瓜",
          "pic": "🍉"
        },
        "grammar": {
          "pattern": "Sweet summer [___]!",
          "cn": "夏天的甜甜...",
          "tip": "夏天吃大西瓜解暑时说！"
        },
        "sentence": {
          "full": "Sweet summer watermelon!",
          "cn": "夏天的大西瓜真甜呀！",
          "sceneTip": "吃绿皮红瓤西瓜时开心地说",
          "chunks": [
            "Sweet summer",
            "watermelon!"
          ]
        }
      },
      {
        "id": "eb_food_15",
        "word": {
          "text": "grapes",
          "cn": "葡萄",
          "pic": "🍇"
        },
        "grammar": {
          "pattern": "One, two, purple [___]!",
          "cn": "一粒粒紫色的...",
          "tip": "数一数圆圆的小葡萄！"
        },
        "sentence": {
          "full": "One, two, purple grapes!",
          "cn": "一颗颗圆圆的紫葡萄！",
          "sceneTip": "摘下一粒葡萄放嘴里时说",
          "chunks": [
            "One, two,",
            "purple grapes!"
          ]
        }
      },
      {
        "id": "eb_food_16",
        "word": {
          "text": "orange",
          "cn": "橙子",
          "pic": "🍊"
        },
        "grammar": {
          "pattern": "Peel the [___], please.",
          "cn": "请帮我剥...",
          "tip": "需要大人帮忙剥水果皮时说！"
        },
        "sentence": {
          "full": "Peel the orange, please.",
          "cn": "请帮我剥开甜橙子。",
          "sceneTip": "拿着金黄大橙子递给妈妈",
          "chunks": [
            "Peel the orange,",
            "please."
          ]
        }
      },
      {
        "id": "eb_food_17",
        "word": {
          "text": "pear",
          "cn": "雪梨",
          "pic": "🍐"
        },
        "grammar": {
          "pattern": "Juicy sweet [___].",
          "cn": "多汁甘甜的...",
          "tip": "秋天吃梨润喉咙时说！"
        },
        "sentence": {
          "full": "Juicy sweet pear.",
          "cn": "咬一口多汁甘甜的雪梨。",
          "sceneTip": "吃甜甜脆梨时说",
          "chunks": [
            "Juicy sweet",
            "pear."
          ]
        }
      },
      {
        "id": "eb_food_18",
        "word": {
          "text": "peach",
          "cn": "桃子",
          "pic": "🍑"
        },
        "grammar": {
          "pattern": "I love fuzzy [___].",
          "cn": "我喜欢粉粉的...",
          "tip": "摸摸桃子毛茸茸表皮时说！"
        },
        "sentence": {
          "full": "I love fuzzy peach.",
          "cn": "我喜欢粉嘟嘟的大桃子。",
          "sceneTip": "洗桃子准备吃时说",
          "chunks": [
            "I love",
            "fuzzy peach."
          ]
        }
      },
      {
        "id": "eb_food_19",
        "word": {
          "text": "vegetables",
          "cn": "蔬菜",
          "pic": "🥦"
        },
        "grammar": {
          "pattern": "Eat your [___] to grow tall.",
          "cn": "多吃...快快长高。",
          "tip": "鼓励自己好好吃健康蔬菜！"
        },
        "sentence": {
          "full": "Eat your vegetables to grow tall.",
          "cn": "多吃蔬菜快快长大长高！",
          "sceneTip": "大口吃西兰花和青菜时说",
          "chunks": [
            "Eat your vegetables",
            "to grow tall."
          ]
        }
      },
      {
        "id": "eb_food_20",
        "word": {
          "text": "carrot",
          "cn": "胡萝卜",
          "pic": "🥕"
        },
        "grammar": {
          "pattern": "The bunny loves [___].",
          "cn": "小兔子喜欢吃...",
          "tip": "联想小动物爱吃的橙色蔬菜！"
        },
        "sentence": {
          "full": "The bunny loves carrots.",
          "cn": "小兔子最爱吃脆脆的胡萝卜。",
          "sceneTip": "吃胡萝卜片时学小白兔蹦跳",
          "chunks": [
            "The bunny",
            "loves carrots."
          ]
        }
      },
      {
        "id": "eb_food_21",
        "word": {
          "text": "tomato",
          "cn": "番茄",
          "pic": "🍅"
        },
        "grammar": {
          "pattern": "The [___] is round and red.",
          "cn": "...又圆又红。",
          "tip": "观察红彤彤的番茄形状！"
        },
        "sentence": {
          "full": "The tomato is round and red.",
          "cn": "大番茄圆滚滚、红彤彤。",
          "sceneTip": "指着菜篮里的小番茄说",
          "chunks": [
            "The tomato",
            "is round and red."
          ]
        }
      },
      {
        "id": "eb_food_22",
        "word": {
          "text": "potato",
          "cn": "土豆",
          "pic": "🥔"
        },
        "grammar": {
          "pattern": "Mashed [___] is yummy!",
          "cn": "...泥真好吃！",
          "tip": "吃软糯可口的土豆泥时说！"
        },
        "sentence": {
          "full": "Mashed potato is yummy!",
          "cn": "香软土豆泥真美味！",
          "sceneTip": "用勺子挖土豆泥吃时夸赞",
          "chunks": [
            "Mashed potato",
            "is yummy!"
          ]
        }
      },
      {
        "id": "eb_food_23",
        "word": {
          "text": "fries",
          "cn": "薯条",
          "pic": "🍟"
        },
        "grammar": {
          "pattern": "Crispy golden [___]!",
          "cn": "金黄酥脆的...",
          "tip": "吃金黄炸薯条时高兴地说！"
        },
        "sentence": {
          "full": "Crispy golden fries!",
          "cn": "金黄酥脆的炸薯条！",
          "sceneTip": "和爸爸分享薯条时说",
          "chunks": [
            "Crispy golden",
            "fries!"
          ]
        }
      },
      {
        "id": "eb_food_24",
        "word": {
          "text": "chicken",
          "cn": "鸡肉",
          "pic": "🍗"
        },
        "grammar": {
          "pattern": "I like tender [___].",
          "cn": "我喜欢吃鲜嫩的...",
          "tip": "品尝美味肉肉时表达喜爱！"
        },
        "sentence": {
          "full": "I like tender chicken.",
          "cn": "我喜欢吃鲜嫩的鸡肉。",
          "sceneTip": "大口啃小鸡腿时说",
          "chunks": [
            "I like",
            "tender chicken."
          ]
        }
      },
      {
        "id": "eb_food_25",
        "word": {
          "text": "fish",
          "cn": "鲜鱼",
          "pic": "🐟"
        },
        "grammar": {
          "pattern": "Fresh [___] makes me strong.",
          "cn": "新鲜的...让我更强壮。",
          "tip": "吃健康少刺鱼肉时说！"
        },
        "sentence": {
          "full": "Fresh fish makes me strong.",
          "cn": "吃新鲜鱼肉让我变强壮。",
          "sceneTip": "吃蒸鱼补充蛋白质时说",
          "chunks": [
            "Fresh fish",
            "makes me strong."
          ]
        }
      },
      {
        "id": "eb_food_26",
        "word": {
          "text": "meat",
          "cn": "肉肉",
          "pic": "🥩"
        },
        "grammar": {
          "pattern": "Yummy [___] on my plate.",
          "cn": "盘子里好吃的...",
          "tip": "指着餐盘里的肉丸或瘦肉！"
        },
        "sentence": {
          "full": "Yummy meat on my plate.",
          "cn": "盘子里有美味的肉肉。",
          "sceneTip": "正餐吃肉长力气时说",
          "chunks": [
            "Yummy meat",
            "on my plate."
          ]
        }
      },
      {
        "id": "eb_food_27",
        "word": {
          "text": "cheese",
          "cn": "奶酪",
          "pic": "🧀"
        },
        "grammar": {
          "pattern": "Say [___] and smile!",
          "cn": "说...然后微笑！",
          "tip": "照相或者吃芝士棒时喊！"
        },
        "sentence": {
          "full": "Say cheese and smile!",
          "cn": "笑一笑，大声说 cheese！",
          "sceneTip": "吃奶酪棒露出开心小牙齿",
          "chunks": [
            "Say cheese",
            "and smile!"
          ]
        }
      },
      {
        "id": "eb_food_28",
        "word": {
          "text": "ice cream",
          "cn": "冰淇淋",
          "pic": "🍦"
        },
        "grammar": {
          "pattern": "Cold sweet [___], please.",
          "cn": "请给我凉凉甜甜的...",
          "tip": "夏天吃美味甜筒时说！"
        },
        "sentence": {
          "full": "Cold sweet ice cream, please.",
          "cn": "请给我甜甜凉凉的冰淇淋。",
          "sceneTip": "舔一口草莓味甜筒时说",
          "chunks": [
            "Cold sweet ice cream,",
            "please."
          ]
        }
      },
      {
        "id": "eb_food_29",
        "word": {
          "text": "candy",
          "cn": "糖果",
          "pic": "🍬"
        },
        "grammar": {
          "pattern": "Just one sweet [___] today.",
          "cn": "今天只能吃一颗...",
          "tip": "养成少吃糖护牙的好习惯！"
        },
        "sentence": {
          "full": "Just one sweet candy today.",
          "cn": "今天只吃一颗甜糖果。",
          "sceneTip": "吃完糖果乖乖去漱口时说",
          "chunks": [
            "Just one sweet candy",
            "today."
          ]
        }
      },
      {
        "id": "eb_food_30",
        "word": {
          "text": "chocolate",
          "cn": "巧克力",
          "pic": "🍫"
        },
        "grammar": {
          "pattern": "Sweet brown [___].",
          "cn": "甜甜的棕色...",
          "tip": "品尝香浓巧克力时说！"
        },
        "sentence": {
          "full": "Sweet brown chocolate.",
          "cn": "甜香浓郁的巧克力。",
          "sceneTip": "吃一小块巧克力时说",
          "chunks": [
            "Sweet brown",
            "chocolate."
          ]
        }
      },
      {
        "id": "eb_food_31",
        "word": {
          "text": "pizza",
          "cn": "披萨",
          "pic": "🍕"
        },
        "grammar": {
          "pattern": "Let's share this [___]!",
          "cn": "我们一起分享这个...吧！",
          "tip": "和小伙伴分享大片披萨时说！"
        },
        "sentence": {
          "full": "Let's share this pizza!",
          "cn": "我们一起分享香脆披萨吧！",
          "sceneTip": "拉丝披萨上桌时开心地喊",
          "chunks": [
            "Let's share",
            "this pizza!"
          ]
        }
      },
      {
        "id": "eb_food_32",
        "word": {
          "text": "burger",
          "cn": "汉堡",
          "pic": "🍔"
        },
        "grammar": {
          "pattern": "A big round [___]!",
          "cn": "一个又大又圆的...",
          "tip": "双手捧着大汉堡时说！"
        },
        "sentence": {
          "full": "A big round burger!",
          "cn": "一个又大又圆的美味汉堡！",
          "sceneTip": "咬一大口汉堡时说",
          "chunks": [
            "A big round",
            "burger!"
          ]
        }
      },
      {
        "id": "eb_food_33",
        "word": {
          "text": "hot dog",
          "cn": "热狗",
          "pic": "🌭"
        },
        "grammar": {
          "pattern": "Yummy [___] in my hands.",
          "cn": "我手里香喷喷的...",
          "tip": "吃热狗面包夹香肠时说！"
        },
        "sentence": {
          "full": "Yummy hot dog in my hands.",
          "cn": "我手里拿着用心做的热狗。",
          "sceneTip": "野餐吃热狗时说",
          "chunks": [
            "Yummy hot dog",
            "in my hands."
          ]
        }
      },
      {
        "id": "eb_food_34",
        "word": {
          "text": "sandwich",
          "cn": "三明治",
          "pic": "🥪"
        },
        "grammar": {
          "pattern": "Mom makes a healthy [___].",
          "cn": "妈妈做了一个健康的...",
          "tip": "夸赞妈妈亲手做的营养早餐！"
        },
        "sentence": {
          "full": "Mom makes a healthy sandwich.",
          "cn": "妈妈做了营养健康的美味三明治。",
          "sceneTip": "春游带三明治吃时夸赞",
          "chunks": [
            "Mom makes",
            "a healthy sandwich."
          ]
        }
      },
      {
        "id": "eb_food_35",
        "word": {
          "text": "pancake",
          "cn": "松饼",
          "pic": "🥞"
        },
        "grammar": {
          "pattern": "Fluffy golden [___]!",
          "cn": "松软金黄的...",
          "tip": "早餐吃热乎松软小松饼时说！"
        },
        "sentence": {
          "full": "Fluffy golden pancake!",
          "cn": "金黄松软的热松饼！",
          "sceneTip": "淋上蜂蜜吃小松饼时说",
          "chunks": [
            "Fluffy golden",
            "pancake!"
          ]
        }
      },
      {
        "id": "eb_food_36",
        "word": {
          "text": "honey",
          "cn": "蜂蜜",
          "pic": "🍯"
        },
        "grammar": {
          "pattern": "Sweet like [___].",
          "cn": "甜得像...一样。",
          "tip": "形容味道甜丝丝像蜜一样！"
        },
        "sentence": {
          "full": "Sweet like honey.",
          "cn": "味道像蜂蜜一样甜美。",
          "sceneTip": "喝一杯温蜂蜜水时说",
          "chunks": [
            "Sweet like",
            "honey."
          ]
        }
      },
      {
        "id": "eb_food_37",
        "word": {
          "text": "bowl",
          "cn": "小饭碗",
          "pic": "🥣"
        },
        "grammar": {
          "pattern": "This is my little [___].",
          "cn": "这是我的专属小...",
          "tip": "坐在餐桌前认准自己的小餐具！"
        },
        "sentence": {
          "full": "This is my little bowl.",
          "cn": "这是我的专属小饭碗。",
          "sceneTip": "端好自己的小碗吃饭",
          "chunks": [
            "This is",
            "my little bowl."
          ]
        }
      },
      {
        "id": "eb_food_38",
        "word": {
          "text": "plate",
          "cn": "盘子",
          "pic": "🍽️"
        },
        "grammar": {
          "pattern": "Put food on the [___].",
          "cn": "把食物放在...里。",
          "tip": "把洗好的水果盛在盘子里！"
        },
        "sentence": {
          "full": "Put food on the plate.",
          "cn": "把洗好的水果盛在盘子里。",
          "sceneTip": "帮妈妈摆放盘子时说",
          "chunks": [
            "Put food",
            "on the plate."
          ]
        }
      },
      {
        "id": "eb_food_39",
        "word": {
          "text": "spoon",
          "cn": "小勺子",
          "pic": "🥄"
        },
        "grammar": {
          "pattern": "Hold the [___] with care.",
          "cn": "拿好你的小...",
          "tip": "练习自己正确握勺大口吃饭！"
        },
        "sentence": {
          "full": "Hold the spoon with care.",
          "cn": "握好小勺子，大口吃饭不掉渣。",
          "sceneTip": "用小勺子喝汤或舀米饭时说",
          "chunks": [
            "Hold the spoon",
            "with care."
          ]
        }
      },
      {
        "id": "eb_food_40",
        "word": {
          "text": "fork",
          "cn": "小叉子",
          "pic": "🍴"
        },
        "grammar": {
          "pattern": "Use a [___] to eat fruit.",
          "cn": "用...叉水果吃。",
          "tip": "用儿童安全叉子吃苹果块！"
        },
        "sentence": {
          "full": "Use a fork to eat fruit.",
          "cn": "用小叉子叉甜甜的水果吃。",
          "sceneTip": "吃西瓜块时用叉子叉起",
          "chunks": [
            "Use a fork",
            "to eat fruit."
          ]
        }
      },
      {
        "id": "eb_food_41",
        "word": {
          "text": "chopsticks",
          "cn": "小筷子",
          "pic": "🥢"
        },
        "grammar": {
          "pattern": "I can use [___] now!",
          "cn": "我学会用...啦！",
          "tip": "自豪展示学会拿筷子的小本领！"
        },
        "sentence": {
          "full": "I can use chopsticks now!",
          "cn": "我学会自己用筷子夹菜啦！",
          "sceneTip": "夹起一颗肉丸时自豪地喊",
          "chunks": [
            "I can use chopsticks",
            "now!"
          ]
        }
      },
      {
        "id": "eb_food_42",
        "word": {
          "text": "cup",
          "cn": "小水杯",
          "pic": "🥛"
        },
        "grammar": {
          "pattern": "Drink from your [___].",
          "cn": "用你的...喝水。",
          "tip": "双手捧着小水杯咕咚咕咚喝水！"
        },
        "sentence": {
          "full": "Drink from your cup.",
          "cn": "双手捧起自己的小水杯喝水。",
          "sceneTip": "口渴时拿起小杯子喝水",
          "chunks": [
            "Drink from",
            "your cup."
          ]
        }
      },
      {
        "id": "eb_food_43",
        "word": {
          "text": "bottle",
          "cn": "小水壶",
          "pic": "🍼"
        },
        "grammar": {
          "pattern": "Bring your water [___].",
          "cn": "带上你的小...",
          "tip": "出门去户外前装满温开水！"
        },
        "sentence": {
          "full": "Bring your water bottle.",
          "cn": "出门记得带上自己的小水壶。",
          "sceneTip": "书包侧边放上小水壶时说",
          "chunks": [
            "Bring your",
            "water bottle."
          ]
        }
      },
      {
        "id": "eb_food_44",
        "word": {
          "text": "napkin",
          "cn": "餐巾纸",
          "pic": "🧻"
        },
        "grammar": {
          "pattern": "Wipe mouth with a [___].",
          "cn": "用...擦擦小嘴巴。",
          "tip": "吃完饭擦干净嘴巴养成好礼貌！"
        },
        "sentence": {
          "full": "Wipe mouth with a napkin.",
          "cn": "吃完饭用餐巾纸擦干净嘴巴。",
          "sceneTip": "吃完饭擦嘴巴时说",
          "chunks": [
            "Wipe mouth",
            "with a napkin."
          ]
        }
      },
      {
        "id": "eb_food_45",
        "word": {
          "text": "salt",
          "cn": "食盐",
          "pic": "🧂"
        },
        "grammar": {
          "pattern": "Just a pinch of [___].",
          "cn": "只要放一小撮...",
          "tip": "做饭时调味只要一点点！"
        },
        "sentence": {
          "full": "Just a pinch of salt.",
          "cn": "做菜时只要放一小撮食盐。",
          "sceneTip": "看妈妈烧汤放盐时说",
          "chunks": [
            "Just a pinch",
            "of salt."
          ]
        }
      },
      {
        "id": "eb_food_46",
        "word": {
          "text": "sugar",
          "cn": "白糖",
          "pic": "🍬"
        },
        "grammar": {
          "pattern": "Sweet white [___] is sweet.",
          "cn": "白白的...甜甜的。",
          "tip": "认识白糖甜甜的味道！"
        },
        "sentence": {
          "full": "Sweet white sugar is sweet.",
          "cn": "白糖尝起来甜丝丝的。",
          "sceneTip": "拌番茄加一勺糖时说",
          "chunks": [
            "Sweet white sugar",
            "is sweet."
          ]
        }
      },
      {
        "id": "eb_food_47",
        "word": {
          "text": "breakfast",
          "cn": "美味早餐",
          "pic": "🥣"
        },
        "grammar": {
          "pattern": "Time for [___]!",
          "cn": "吃...的时间到啦！",
          "tip": "早晨起床精神饱满吃早饭！"
        },
        "sentence": {
          "full": "Time for breakfast!",
          "cn": "吃热腾腾早餐的时间到啦！",
          "sceneTip": "早晨洗漱完跑向餐桌时说",
          "chunks": [
            "Time for",
            "breakfast!"
          ]
        }
      },
      {
        "id": "eb_food_48",
        "word": {
          "text": "lunch",
          "cn": "丰盛午餐",
          "pic": "🍱"
        },
        "grammar": {
          "pattern": "Let's have a good [___].",
          "cn": "我们吃顿好好的...吧。",
          "tip": "中午在幼儿园或家里吃午饭！"
        },
        "sentence": {
          "full": "Let's have a good lunch.",
          "cn": "中午一起享用美味营养的午餐。",
          "sceneTip": "中午和小朋友排队洗手吃午饭",
          "chunks": [
            "Let's have",
            "a good lunch."
          ]
        }
      },
      {
        "id": "eb_food_49",
        "word": {
          "text": "dinner",
          "cn": "全家晚餐",
          "pic": "🍲"
        },
        "grammar": {
          "pattern": "Family [___] together.",
          "cn": "全家人一起吃...",
          "tip": "晚上爸爸妈妈下班全家团聚吃饭！"
        },
        "sentence": {
          "full": "Family dinner together.",
          "cn": "全家热热闹闹吃温馨晚餐。",
          "sceneTip": "全家人围坐在饭桌前说",
          "chunks": [
            "Family dinner",
            "together."
          ]
        }
      },
      {
        "id": "eb_food_50",
        "word": {
          "text": "snack",
          "cn": "美味加餐",
          "pic": "🍿"
        },
        "grammar": {
          "pattern": "Afternoon [___] time!",
          "cn": "下午...时间到！",
          "tip": "幼儿园下午睡醒吃点心水果！"
        },
        "sentence": {
          "full": "Afternoon snack time!",
          "cn": "下午美味加餐点心时间到啦！",
          "sceneTip": "起床吃小点心和水果时喊",
          "chunks": [
            "Afternoon snack",
            "time!"
          ]
        }
      }
    ]
  },
  {
    "topicId": "home",
    "topicName": "居家玩具",
    "icon": "🧸",
    "desc": "床、书、积木、玩具车、日常用品与生活收纳句型",
    "items": [
      {
        "id": "eb_home_1",
        "word": {
          "text": "bed",
          "cn": "小床",
          "pic": "🛏️"
        },
        "grammar": {
          "pattern": "Go to your [___], little one.",
          "cn": "去...睡觉吧，小宝贝。",
          "tip": "晚上按时上床睡觉好习惯！"
        },
        "sentence": {
          "full": "Go to your bed, little one.",
          "cn": "去小床上睡觉吧，小宝贝。",
          "sceneTip": "晚上听完故事钻进被窝",
          "chunks": [
            "Go to your bed,",
            "little one."
          ]
        }
      },
      {
        "id": "eb_home_2",
        "word": {
          "text": "sofa",
          "cn": "沙发",
          "pic": "🛋️"
        },
        "grammar": {
          "pattern": "Sit on the soft [___].",
          "cn": "坐在软软的...上。",
          "tip": "累了在客厅软沙发上歇一歇！"
        },
        "sentence": {
          "full": "Sit on the soft sofa.",
          "cn": "坐在软软的沙发上休息。",
          "sceneTip": "和爸爸一起坐在沙发上看绘本",
          "chunks": [
            "Sit on",
            "the soft sofa."
          ]
        }
      },
      {
        "id": "eb_home_3",
        "word": {
          "text": "chair",
          "cn": "小椅子",
          "pic": "🪑"
        },
        "grammar": {
          "pattern": "Please sit on the [___].",
          "cn": "请坐在...上。",
          "tip": "提醒小可爱端端正正坐好！"
        },
        "sentence": {
          "full": "Please sit on the chair.",
          "cn": "请坐在小椅子上坐端正。",
          "sceneTip": "画画或做手工时坐好",
          "chunks": [
            "Please sit",
            "on the chair."
          ]
        }
      },
      {
        "id": "eb_home_4",
        "word": {
          "text": "table",
          "cn": "桌子",
          "pic": "🪵"
        },
        "grammar": {
          "pattern": "Clear the [___] after dinner.",
          "cn": "吃完饭收拾干净...。",
          "tip": "饭后帮家人一起擦擦餐桌！"
        },
        "sentence": {
          "full": "Clear the table after dinner.",
          "cn": "吃完饭把小桌子擦得干干净净。",
          "sceneTip": "吃完饭主动帮忙擦桌子",
          "chunks": [
            "Clear the table",
            "after dinner."
          ]
        }
      },
      {
        "id": "eb_home_5",
        "word": {
          "text": "door",
          "cn": "房门",
          "pic": "🚪"
        },
        "grammar": {
          "pattern": "Please close the [___].",
          "cn": "请把...顺手关上。",
          "tip": "进出房间养成顺手关门好礼貌！"
        },
        "sentence": {
          "full": "Please close the door.",
          "cn": "请把房门轻轻关好。",
          "sceneTip": "进出书房或卧室时顺手关门",
          "chunks": [
            "Please close",
            "the door."
          ]
        }
      },
      {
        "id": "eb_home_6",
        "word": {
          "text": "window",
          "cn": "窗户",
          "pic": "🪟"
        },
        "grammar": {
          "pattern": "Look outside the [___].",
          "cn": "看看...外面的风景。",
          "tip": "早起打开窗帘看看美丽大自然！"
        },
        "sentence": {
          "full": "Look outside the window.",
          "cn": "看看窗外美丽风景与小鸟。",
          "sceneTip": "早晨看窗外小鸟飞过时说",
          "chunks": [
            "Look outside",
            "the window."
          ]
        }
      },
      {
        "id": "eb_home_7",
        "word": {
          "text": "light",
          "cn": "电灯",
          "pic": "💡"
        },
        "grammar": {
          "pattern": "Turn off the [___] before sleep.",
          "cn": "睡觉前把...关掉。",
          "tip": "节约用电、关灯睡觉！"
        },
        "sentence": {
          "full": "Turn off the light before sleep.",
          "cn": "睡觉前把电灯关掉，晚安。",
          "sceneTip": "睡觉前伸手按下开关关灯",
          "chunks": [
            "Turn off the light",
            "before sleep."
          ]
        }
      },
      {
        "id": "eb_home_8",
        "word": {
          "text": "clock",
          "cn": "小闹钟",
          "pic": "⏰"
        },
        "grammar": {
          "pattern": "Tick-tock goes the [___].",
          "cn": "...滴答滴答走。",
          "tip": "听小钟表有节奏的走动声！"
        },
        "sentence": {
          "full": "Tick-tock goes the clock.",
          "cn": "小闹钟滴答滴答有规律地走。",
          "sceneTip": "看着小闹钟学习时间概念",
          "chunks": [
            "Tick-tock",
            "goes the clock."
          ]
        }
      },
      {
        "id": "eb_home_9",
        "word": {
          "text": "mirror",
          "cn": "小镜子",
          "pic": "🪞"
        },
        "grammar": {
          "pattern": "Look in the [___] and smile.",
          "cn": "照照...笑一笑。",
          "tip": "早晨洗完脸对着镜子露出笑容！"
        },
        "sentence": {
          "full": "Look in the mirror and smile.",
          "cn": "照照小镜子，露出灿烂微笑。",
          "sceneTip": "洗完小脸对着镜子笑一笑",
          "chunks": [
            "Look in the mirror",
            "and smile."
          ]
        }
      },
      {
        "id": "eb_home_10",
        "word": {
          "text": "toothbrush",
          "cn": "小牙刷",
          "pic": "🪥"
        },
        "grammar": {
          "pattern": "Hold your little [___].",
          "cn": "拿好你的小...。",
          "tip": "早晚认真刷牙讲卫生！"
        },
        "sentence": {
          "full": "Hold your little toothbrush.",
          "cn": "拿好你的小牙刷，上下认真刷。",
          "sceneTip": "站在小水池前准备刷牙",
          "chunks": [
            "Hold your",
            "little toothbrush."
          ]
        }
      },
      {
        "id": "eb_home_11",
        "word": {
          "text": "toothpaste",
          "cn": "草莓牙膏",
          "pic": "🧴"
        },
        "grammar": {
          "pattern": "Squeeze a little [___].",
          "cn": "挤一点点...。",
          "tip": "挤黄豆粒大小儿童牙膏！"
        },
        "sentence": {
          "full": "Squeeze a little toothpaste.",
          "cn": "挤一点点香甜草莓牙膏。",
          "sceneTip": "在牙刷毛上轻轻挤牙膏",
          "chunks": [
            "Squeeze a little",
            "toothpaste."
          ]
        }
      },
      {
        "id": "eb_home_12",
        "word": {
          "text": "soap",
          "cn": "香皂",
          "pic": "🧼"
        },
        "grammar": {
          "pattern": "Wash with bubbling [___].",
          "cn": "用起泡泡的...洗手。",
          "tip": "饭前便后用香皂洗干净小手！"
        },
        "sentence": {
          "full": "Wash with bubbling soap.",
          "cn": "用香皂搓出好多洁白小泡泡。",
          "sceneTip": "洗小手搓出满满白色泡泡",
          "chunks": [
            "Wash with",
            "bubbling soap."
          ]
        }
      },
      {
        "id": "eb_home_13",
        "word": {
          "text": "towel",
          "cn": "软毛巾",
          "pic": "🧖"
        },
        "grammar": {
          "pattern": "Dry hands with a soft [___].",
          "cn": "用软软的...把手擦干。",
          "tip": "洗完手拿专属毛巾擦干！"
        },
        "sentence": {
          "full": "Dry hands with a soft towel.",
          "cn": "用柔软小毛巾把双手擦干爽。",
          "sceneTip": "洗完小手挂毛巾擦干",
          "chunks": [
            "Dry hands",
            "with a soft towel."
          ]
        }
      },
      {
        "id": "eb_home_14",
        "word": {
          "text": "tissue",
          "cn": "抽纸巾",
          "pic": "🧻"
        },
        "grammar": {
          "pattern": "Wipe nose with a [___].",
          "cn": "用...擦擦小鼻子。",
          "tip": "打喷嚏或流鼻涕拿纸巾轻轻擦！"
        },
        "sentence": {
          "full": "Wipe nose with a tissue.",
          "cn": "抽一张软纸巾轻轻擦干净鼻涕。",
          "sceneTip": "感冒流小鼻涕时抽出纸巾擦",
          "chunks": [
            "Wipe nose",
            "with a tissue."
          ]
        }
      },
      {
        "id": "eb_home_15",
        "word": {
          "text": "trash can",
          "cn": "垃圾桶",
          "pic": "🗑️"
        },
        "grammar": {
          "pattern": "Throw it in the [___].",
          "cn": "把它扔进...里。",
          "tip": "讲卫生不乱扔，垃圾准确定位！"
        },
        "sentence": {
          "full": "Throw it in the trash can.",
          "cn": "把果皮纸屑扔进垃圾桶里。",
          "sceneTip": "吃完香蕉把香蕉皮投进垃圾桶",
          "chunks": [
            "Throw it in",
            "the trash can."
          ]
        }
      },
      {
        "id": "eb_home_16",
        "word": {
          "text": "key",
          "cn": "钥匙",
          "pic": "🔑"
        },
        "grammar": {
          "pattern": "Where is Daddy's [___]?",
          "cn": "爸爸的...在哪里？",
          "tip": "找一找开门的小钥匙！"
        },
        "sentence": {
          "full": "Where is Daddy's key?",
          "cn": "爸爸的金属开门钥匙放在哪里？",
          "sceneTip": "帮爸爸在玄关钥匙盒里找钥匙",
          "chunks": [
            "Where is",
            "Daddy's key?"
          ]
        }
      },
      {
        "id": "eb_home_17",
        "word": {
          "text": "phone",
          "cn": "手机",
          "pic": "📱"
        },
        "grammar": {
          "pattern": "Ring-ring, answer the [___]!",
          "cn": "叮铃铃，快接...呀！",
          "tip": "电话响了提醒大人接听！"
        },
        "sentence": {
          "full": "Ring-ring, answer the phone!",
          "cn": "叮铃铃，电话响啦快来接！",
          "sceneTip": "听到铃声提醒正在做饭的妈妈",
          "chunks": [
            "Ring-ring,",
            "answer the phone!"
          ]
        }
      },
      {
        "id": "eb_home_18",
        "word": {
          "text": "computer",
          "cn": "电脑",
          "pic": "💻"
        },
        "grammar": {
          "pattern": "Daddy is working on the [___].",
          "cn": "爸爸正在...前工作。",
          "tip": "大人工作时不吵不闹懂礼貌！"
        },
        "sentence": {
          "full": "Daddy is working on the computer.",
          "cn": "爸爸正在电脑前认真工作。",
          "sceneTip": "路过书房轻轻走过",
          "chunks": [
            "Daddy is working",
            "on the computer."
          ]
        }
      },
      {
        "id": "eb_home_19",
        "word": {
          "text": "TV",
          "cn": "电视机",
          "pic": "📺"
        },
        "grammar": {
          "pattern": "Time to turn off the [___].",
          "cn": "关掉...的时间到啦。",
          "tip": "爱护眼睛，看动画片不超时！"
        },
        "sentence": {
          "full": "Time to turn off the TV.",
          "cn": "看动画片时间到啦，自觉关电视。",
          "sceneTip": "看满两集小猪佩奇主动关电视",
          "chunks": [
            "Time to turn off",
            "the TV."
          ]
        }
      },
      {
        "id": "eb_home_20",
        "word": {
          "text": "book",
          "cn": "故事书",
          "pic": "📖"
        },
        "grammar": {
          "pattern": "Open your story [___].",
          "cn": "打开你的绘本...。",
          "tip": "开启温馨美好的睡前共读！"
        },
        "sentence": {
          "full": "Open your story book.",
          "cn": "打开生动有趣的绘本故事书。",
          "sceneTip": "抱着绘本依偎在妈妈怀里",
          "chunks": [
            "Open your",
            "story book."
          ]
        }
      },
      {
        "id": "eb_home_21",
        "word": {
          "text": "pencil",
          "cn": "铅笔",
          "pic": "✏️"
        },
        "grammar": {
          "pattern": "Draw a line with a [___].",
          "cn": "用...画一条直线。",
          "tip": "握好笔画迷宫和线条！"
        },
        "sentence": {
          "full": "Draw a line with a pencil.",
          "cn": "用小铅笔画出笔直的连线。",
          "sceneTip": "在纸上练习画直线和圈圈",
          "chunks": [
            "Draw a line",
            "with a pencil."
          ]
        }
      },
      {
        "id": "eb_home_22",
        "word": {
          "text": "crayon",
          "cn": "彩色蜡笔",
          "pic": "🖍️"
        },
        "grammar": {
          "pattern": "Color with bright [___].",
          "cn": "用鲜艳的...涂颜色。",
          "tip": "给大太阳涂上漂亮金黄色！"
        },
        "sentence": {
          "full": "Color with bright crayons.",
          "cn": "用彩色蜡笔给大太阳涂上金黄。",
          "sceneTip": "画图画本时挑选喜欢的颜色",
          "chunks": [
            "Color with",
            "bright crayons."
          ]
        }
      },
      {
        "id": "eb_home_23",
        "word": {
          "text": "scissors",
          "cn": "安全剪刀",
          "pic": "✂️"
        },
        "grammar": {
          "pattern": "Be careful with [___].",
          "cn": "用儿童...要小心。",
          "tip": "做手工安全第一，小手不乱晃！"
        },
        "sentence": {
          "full": "Be careful with safe scissors.",
          "cn": "用儿童安全圆头剪刀要专注小心。",
          "sceneTip": "做剪纸手工时小心操作",
          "chunks": [
            "Be careful with",
            "safe scissors."
          ]
        }
      },
      {
        "id": "eb_home_24",
        "word": {
          "text": "glue",
          "cn": "手工胶水",
          "pic": "🧴"
        },
        "grammar": {
          "pattern": "Stick it with [___].",
          "cn": "用...把图形粘牢。",
          "tip": "把小爱心纸片贴在贺卡上！"
        },
        "sentence": {
          "full": "Stick it with glue.",
          "cn": "用儿童胶水把小爱心贴牢固。",
          "sceneTip": "做母亲节贺卡时粘贴花瓣",
          "chunks": [
            "Stick it",
            "with glue."
          ]
        }
      },
      {
        "id": "eb_home_25",
        "word": {
          "text": "paper",
          "cn": "白纸",
          "pic": "📄"
        },
        "grammar": {
          "pattern": "Draw a star on the [___].",
          "cn": "在...上画一颗闪亮小星星。",
          "tip": "在一尘不染的白纸上自由涂鸦！"
        },
        "sentence": {
          "full": "Draw a star on the paper.",
          "cn": "在白白的大画纸上画一颗闪亮星星。",
          "sceneTip": "铺开画纸开始自由创作",
          "chunks": [
            "Draw a star",
            "on the paper."
          ]
        }
      },
      {
        "id": "eb_home_26",
        "word": {
          "text": "schoolbag",
          "cn": "小书包",
          "pic": "🎒"
        },
        "grammar": {
          "pattern": "Pack your little [___].",
          "cn": "把自己的...整理整齐。",
          "tip": "把水壶和画本放进书包！"
        },
        "sentence": {
          "full": "Pack your little schoolbag.",
          "cn": "把水壶和小手帕装进小书包。",
          "sceneTip": "晚上睡前准备明天去幼儿园的包",
          "chunks": [
            "Pack your",
            "little schoolbag."
          ]
        }
      },
      {
        "id": "eb_home_27",
        "word": {
          "text": "blocks",
          "cn": "彩色积木",
          "pic": "🧱"
        },
        "grammar": {
          "pattern": "Build a castle with [___]!",
          "cn": "用...搭一座城堡吧！",
          "tip": "发挥想象力搭建高高的大楼！"
        },
        "sentence": {
          "full": "Build a castle with blocks!",
          "cn": "用彩色积木搭一座雄伟的大城堡！",
          "sceneTip": "和小伙伴一起在垫子上拼积木",
          "chunks": [
            "Build a castle",
            "with blocks!"
          ]
        }
      },
      {
        "id": "eb_home_28",
        "word": {
          "text": "toy car",
          "cn": "小玩具车",
          "pic": "🚗"
        },
        "grammar": {
          "pattern": "Vroom! My fast [___]!",
          "cn": "呜呜！我的酷炫小...！",
          "tip": "推着小汽车在地毯上飞驰！"
        },
        "sentence": {
          "full": "Vroom! My fast toy car!",
          "cn": "呜呜！看我的红色彩条玩具小车！",
          "sceneTip": "在地毯上推着小汽车跑来跑去",
          "chunks": [
            "Vroom!",
            "My fast toy car!"
          ]
        }
      },
      {
        "id": "eb_home_29",
        "word": {
          "text": "teddy bear",
          "cn": "泰迪熊",
          "pic": "🧸"
        },
        "grammar": {
          "pattern": "Hug my soft [___].",
          "cn": "抱抱软乎乎的...。",
          "tip": "毛绒玩具是睡觉的好伙伴！"
        },
        "sentence": {
          "full": "Hug my soft teddy bear.",
          "cn": "紧紧抱住我软乎乎的泰迪小熊。",
          "sceneTip": "入睡前抱着泰迪熊感到很安心",
          "chunks": [
            "Hug my soft",
            "teddy bear."
          ]
        }
      },
      {
        "id": "eb_home_30",
        "word": {
          "text": "doll",
          "cn": "洋娃娃",
          "pic": "🪆"
        },
        "grammar": {
          "pattern": "Comb the pretty [___]'s hair.",
          "cn": "给漂亮...梳理头发。",
          "tip": "给小玩偶穿衣服、梳辫子！"
        },
        "sentence": {
          "full": "Comb the pretty doll's hair.",
          "cn": "给漂亮的洋娃娃温柔梳理头发。",
          "sceneTip": "玩角色扮演过家家游戏",
          "chunks": [
            "Comb the pretty",
            "doll's hair."
          ]
        }
      },
      {
        "id": "eb_home_31",
        "word": {
          "text": "puzzle",
          "cn": "拼图",
          "pic": "🧩"
        },
        "grammar": {
          "pattern": "Find the right [___] piece.",
          "cn": "找到对的那块...。",
          "tip": "锻炼观察力和手眼协调！"
        },
        "sentence": {
          "full": "Find the right puzzle piece.",
          "cn": "找到正确的那块拼图拼完整。",
          "sceneTip": "拼出小恐龙拼图时开心地笑",
          "chunks": [
            "Find the right",
            "puzzle piece."
          ]
        }
      },
      {
        "id": "eb_home_32",
        "word": {
          "text": "ball",
          "cn": "大皮球",
          "pic": "⚽"
        },
        "grammar": {
          "pattern": "Kick the bouncy [___]!",
          "cn": "踢那个弹跳的...！",
          "tip": "在草地上追皮球锻炼大运动！"
        },
        "sentence": {
          "full": "Kick the bouncy ball!",
          "cn": "大力踢那个弹性十足的大皮球！",
          "sceneTip": "户外活动时和小朋友踢球",
          "chunks": [
            "Kick the",
            "bouncy ball!"
          ]
        }
      },
      {
        "id": "eb_home_33",
        "word": {
          "text": "balloon",
          "cn": "红气球",
          "pic": "🎈"
        },
        "grammar": {
          "pattern": "Fly high, red [___]!",
          "cn": "高高飞吧，红...！",
          "tip": "系好绳子看气球轻盈飘浮！"
        },
        "sentence": {
          "full": "Fly high, red balloon!",
          "cn": "红气球轻盈地飞向蓝天！",
          "sceneTip": "拿着系着彩绳的气球开心地跑",
          "chunks": [
            "Fly high,",
            "red balloon!"
          ]
        }
      },
      {
        "id": "eb_home_34",
        "word": {
          "text": "kite",
          "cn": "小风筝",
          "pic": "🪁"
        },
        "grammar": {
          "pattern": "Fly a [___] in the park.",
          "cn": "在公园里放...。",
          "tip": "春天微风吹拂时把风筝放飞！"
        },
        "sentence": {
          "full": "Fly a kite in the park.",
          "cn": "趁着微风在公园绿草地上放风筝。",
          "sceneTip": "春暖花开和爸爸一起放燕子风筝",
          "chunks": [
            "Fly a kite",
            "in the park."
          ]
        }
      },
      {
        "id": "eb_home_35",
        "word": {
          "text": "robot",
          "cn": "机器人",
          "pic": "🤖"
        },
        "grammar": {
          "pattern": "Beep-boop, friendly [___]!",
          "cn": "哔哔啵啵，友好的...！",
          "tip": "按按按钮听机械音效！"
        },
        "sentence": {
          "full": "Beep-boop, friendly robot!",
          "cn": "哔哔啵啵，发光的智能小机器人！",
          "sceneTip": "按动玩具开关看机器人亮灯",
          "chunks": [
            "Beep-boop,",
            "friendly robot!"
          ]
        }
      },
      {
        "id": "eb_home_36",
        "word": {
          "text": "dinosaur",
          "cn": "霸王龙",
          "pic": "🦖"
        },
        "grammar": {
          "pattern": "Roar! The mighty [___]!",
          "cn": "嗷呜！威猛的大...！",
          "tip": "学小恐龙迈大步张牙舞爪！"
        },
        "sentence": {
          "full": "Roar! The mighty dinosaur!",
          "cn": "嗷呜！绿色霸王龙大声吼叫！",
          "sceneTip": "拿着恐龙模型学恐龙大步走路",
          "chunks": [
            "Roar! The mighty",
            "dinosaur!"
          ]
        }
      },
      {
        "id": "eb_home_37",
        "word": {
          "text": "rocket",
          "cn": "小火箭",
          "pic": "🚀"
        },
        "grammar": {
          "pattern": "Zoom! The space [___] flies!",
          "cn": "嗖！太空...升空啦！",
          "tip": "倒数 3-2-1 飞向宇宙！"
        },
        "sentence": {
          "full": "Zoom! The space rocket flies!",
          "cn": "倒数三二一，小火箭嗖地升空！",
          "sceneTip": "玩太空探索积木拼搭时喊口号",
          "chunks": [
            "Zoom! The space",
            "rocket flies!"
          ]
        }
      },
      {
        "id": "eb_home_38",
        "word": {
          "text": "sticker",
          "cn": "奖励贴纸",
          "pic": "✨"
        },
        "grammar": {
          "pattern": "Get a shiny reward [___]!",
          "cn": "得到一张闪亮的...！",
          "tip": "好好表现收获大红花与金星！"
        },
        "sentence": {
          "full": "Get a shiny reward sticker!",
          "cn": "自己把饭吃干净，得到小金星贴纸！",
          "sceneTip": "贴在额头或打卡手册上很自豪",
          "chunks": [
            "Get a shiny",
            "reward sticker!"
          ]
        }
      },
      {
        "id": "eb_home_39",
        "word": {
          "text": "box",
          "cn": "玩具箱",
          "pic": "📦"
        },
        "grammar": {
          "pattern": "Put toys in the toy [___].",
          "cn": "把玩具放回...里。",
          "tip": "玩好玩具物归原位好习惯！"
        },
        "sentence": {
          "full": "Put toys in the toy box.",
          "cn": "玩完积木把它们全部放回玩具箱。",
          "sceneTip": "收拾房间把散落玩具归位",
          "chunks": [
            "Put toys in",
            "the toy box."
          ]
        }
      },
      {
        "id": "eb_home_40",
        "word": {
          "text": "basket",
          "cn": "果篮",
          "pic": "🧺"
        },
        "grammar": {
          "pattern": "A [___] full of fruits.",
          "cn": "装满水果的...。",
          "tip": "去野餐或超市买菜装满篮子！"
        },
        "sentence": {
          "full": "A basket full of fruits.",
          "cn": "竹篮子里装满新鲜甜美的水果。",
          "sceneTip": "提着小菜篮帮奶奶挑选苹果",
          "chunks": [
            "A basket",
            "full of fruits."
          ]
        }
      },
      {
        "id": "eb_home_41",
        "word": {
          "text": "slide",
          "cn": "彩虹滑梯",
          "pic": "🛝"
        },
        "grammar": {
          "pattern": "Whee! Down the [___]!",
          "cn": "哇！滑下大...真开心！",
          "tip": "排队有序滑滑梯不推挤！"
        },
        "sentence": {
          "full": "Whee! Down the slide!",
          "cn": "哇！排队滑下彩虹大滑梯真刺激！",
          "sceneTip": "两手扶好顺着滑道哧溜滑下",
          "chunks": [
            "Whee!",
            "Down the slide!"
          ]
        }
      },
      {
        "id": "eb_home_42",
        "word": {
          "text": "swing",
          "cn": "小秋千",
          "pic": "🎠"
        },
        "grammar": {
          "pattern": "Swing high on the [___]!",
          "cn": "在...上荡得高又高！",
          "tip": "双手抓紧铁链随风荡秋千！"
        },
        "sentence": {
          "full": "Swing high on the swing!",
          "cn": "抓紧两边绳索，在秋千上高高飞荡！",
          "sceneTip": "在小区游乐场荡秋千欢笑",
          "chunks": [
            "Swing high",
            "on the swing!"
          ]
        }
      },
      {
        "id": "eb_home_43",
        "word": {
          "text": "sandbox",
          "cn": "小沙坑",
          "pic": "🏖️"
        },
        "grammar": {
          "pattern": "Dig in the fun [___].",
          "cn": "在好玩的...里挖城堡。",
          "tip": "拿铲子小桶堆沙堡！"
        },
        "sentence": {
          "full": "Dig in the fun sandbox.",
          "cn": "和小伙伴一起在沙坑里挖护城河。",
          "sceneTip": "在公园沙池里玩过家家",
          "chunks": [
            "Dig in the",
            "fun sandbox."
          ]
        }
      },
      {
        "id": "eb_home_44",
        "word": {
          "text": "bucket",
          "cn": "小沙桶",
          "pic": "🪣"
        },
        "grammar": {
          "pattern": "Fill the sand [___].",
          "cn": "把...装满细沙。",
          "tip": "倒扣过来变成一座圆形小塔！"
        },
        "sentence": {
          "full": "Fill the sand bucket.",
          "cn": "把塑料小桶装满湿润的细沙。",
          "sceneTip": "倒扣沙桶造出坚固的小城堡堡垒",
          "chunks": [
            "Fill the sand",
            "bucket."
          ]
        }
      },
      {
        "id": "eb_home_45",
        "word": {
          "text": "plant",
          "cn": "小绿植",
          "pic": "🪴"
        },
        "grammar": {
          "pattern": "Water the green [___].",
          "cn": "给绿油油的...浇浇水。",
          "tip": "拿小水壶观察植物一天天生长！"
        },
        "sentence": {
          "full": "Water the green plant.",
          "cn": "拿小喷壶给阳台上的绿萝浇浇水。",
          "sceneTip": "观察叶子上晶莹剔透的水珠",
          "chunks": [
            "Water the",
            "green plant."
          ]
        }
      },
      {
        "id": "eb_home_46",
        "word": {
          "text": "blanket",
          "cn": "保暖小毯",
          "pic": "🧣"
        },
        "grammar": {
          "pattern": "Pull up the warm [___].",
          "cn": "盖好暖暖的...。",
          "tip": "天冷午睡把肚子和小脚盖好！"
        },
        "sentence": {
          "full": "Pull up the warm blanket.",
          "cn": "午睡把小花毯拉好，肚子不受凉。",
          "sceneTip": "午休盖好小毯子进入梦乡",
          "chunks": [
            "Pull up the",
            "warm blanket."
          ]
        }
      },
      {
        "id": "eb_home_47",
        "word": {
          "text": "pillow",
          "cn": "小枕头",
          "pic": "🪶"
        },
        "grammar": {
          "pattern": "Rest your head on the [___].",
          "cn": "把小脑袋靠在...上。",
          "tip": "舒舒服服枕在小枕头上睡觉！"
        },
        "sentence": {
          "full": "Rest your head on the pillow.",
          "cn": "把小脑袋舒舒服服枕在软枕头上。",
          "sceneTip": "闭上眼睛躺在小床上休息",
          "chunks": [
            "Rest your head",
            "on the pillow."
          ]
        }
      },
      {
        "id": "eb_home_48",
        "word": {
          "text": "broom",
          "cn": "小扫把",
          "pic": "🧹"
        },
        "grammar": {
          "pattern": "Sweep floor with a [___].",
          "cn": "用...帮妈妈扫地。",
          "tip": "劳动小能手帮做力所能及家务！"
        },
        "sentence": {
          "full": "Sweep floor with a broom.",
          "cn": "拿起轻便小扫把把客厅地面扫干净。",
          "sceneTip": "饭后帮爸爸扫掉地上的小纸屑",
          "chunks": [
            "Sweep floor",
            "with a broom."
          ]
        }
      },
      {
        "id": "eb_home_49",
        "word": {
          "text": "mop",
          "cn": "拖把",
          "pic": "🪣"
        },
        "grammar": {
          "pattern": "Help mom with the [___].",
          "cn": "拿...帮妈妈拖地板。",
          "tip": "把地面擦得干干净净、闪闪发光！"
        },
        "sentence": {
          "full": "Help mom with the mop.",
          "cn": "帮妈妈一起把木地板拖得光溜溜。",
          "sceneTip": "大扫除时当勤劳的家务小帮手",
          "chunks": [
            "Help mom",
            "with the mop."
          ]
        }
      },
      {
        "id": "eb_home_50",
        "word": {
          "text": "plug",
          "cn": "电源插座",
          "pic": "🔌"
        },
        "grammar": {
          "pattern": "Never touch the [___]!",
          "cn": "绝对不能碰危险的...！",
          "tip": "安全第一！湿手和小手绝不碰！"
        },
        "sentence": {
          "full": "Never touch the dangerous plug!",
          "cn": "绝对不能用小手去碰危险的插座！",
          "sceneTip": "路过墙角插座牢记安全警示",
          "chunks": [
            "Never touch",
            "the dangerous plug!"
          ]
        }
      }
    ]
  },
  {
    "topicId": "clothes",
    "topicName": "穿戴身体",
    "icon": "👕",
    "desc": "衣服、鞋帽、小手、眼睛、笑容等自理穿戴与身体保护句型",
    "items": [
      {
        "id": "eb_clothes_1",
        "word": {
          "text": "shirt",
          "cn": "小衬衫",
          "pic": "👕"
        },
        "grammar": {
          "pattern": "Put on your clean [___].",
          "cn": "穿上你干净的...。",
          "tip": "出门前穿好整洁漂亮的上衣！"
        },
        "sentence": {
          "full": "Put on your clean shirt.",
          "cn": "穿上你干净整洁的蓝色小衬衫。",
          "sceneTip": "早晨起床自己挑选小衬衫穿上",
          "chunks": [
            "Put on your",
            "clean shirt."
          ]
        }
      },
      {
        "id": "eb_clothes_2",
        "word": {
          "text": "pants",
          "cn": "长裤",
          "pic": "👖"
        },
        "grammar": {
          "pattern": "Pull up your blue [___].",
          "cn": "拉好你的...。",
          "tip": "自己练习提裤子生活自理！"
        },
        "sentence": {
          "full": "Pull up your blue pants.",
          "cn": "自己把深蓝色长裤提得平平整整。",
          "sceneTip": "穿好裤子把裤脚拉整齐",
          "chunks": [
            "Pull up your",
            "blue pants."
          ]
        }
      },
      {
        "id": "eb_clothes_3",
        "word": {
          "text": "shorts",
          "cn": "小短裤",
          "pic": "🩳"
        },
        "grammar": {
          "pattern": "Cool summer [___].",
          "cn": "夏天凉快的...。",
          "tip": "天气热时穿透气小短裤！"
        },
        "sentence": {
          "full": "Cool summer shorts.",
          "cn": "夏日换上凉快舒服的运动短裤。",
          "sceneTip": "去户外踢球穿轻便短裤",
          "chunks": [
            "Cool summer",
            "shorts."
          ]
        }
      },
      {
        "id": "eb_clothes_4",
        "word": {
          "text": "dress",
          "cn": "连衣裙",
          "pic": "👗"
        },
        "grammar": {
          "pattern": "A pretty pink [___].",
          "cn": "一条粉色漂亮的...。",
          "tip": "转个圈圈展示漂亮小裙子！"
        },
        "sentence": {
          "full": "A pretty pink dress.",
          "cn": "穿上一条漂亮的粉色小花连衣裙。",
          "sceneTip": "转个圈圈让裙摆轻轻飘起来",
          "chunks": [
            "A pretty",
            "pink dress."
          ]
        }
      },
      {
        "id": "eb_clothes_5",
        "word": {
          "text": "coat",
          "cn": "保暖外套",
          "pic": "🧥"
        },
        "grammar": {
          "pattern": "Zip up your warm [___].",
          "cn": "拉好你厚厚的外套...。",
          "tip": "冬天外出防寒保暖第一名！"
        },
        "sentence": {
          "full": "Zip up your warm coat.",
          "cn": "天冷外出把厚外套的拉链拉好。",
          "sceneTip": "出门前把外套拉链拉到领口",
          "chunks": [
            "Zip up your",
            "warm coat."
          ]
        }
      },
      {
        "id": "eb_clothes_6",
        "word": {
          "text": "jacket",
          "cn": "帅气夹克",
          "pic": "🧥"
        },
        "grammar": {
          "pattern": "Put on your cool [___].",
          "cn": "穿上你帅气的...。",
          "tip": "春秋天微风天穿防风夹克！"
        },
        "sentence": {
          "full": "Put on your cool jacket.",
          "cn": "穿上一件帅气的连帽防风夹克。",
          "sceneTip": "去公园郊游时穿防风夹克",
          "chunks": [
            "Put on your",
            "cool jacket."
          ]
        }
      },
      {
        "id": "eb_clothes_7",
        "word": {
          "text": "sweater",
          "cn": "羊毛衫",
          "pic": "🧶"
        },
        "grammar": {
          "pattern": "A cozy wool [___].",
          "cn": "一件软糯暖和的...。",
          "tip": "妈妈织的毛衣暖洋洋！"
        },
        "sentence": {
          "full": "A cozy wool sweater.",
          "cn": "穿上一件柔软舒适的羊毛小毛衣。",
          "sceneTip": "深秋天降温套上一件暖毛衣",
          "chunks": [
            "A cozy",
            "wool sweater."
          ]
        }
      },
      {
        "id": "eb_clothes_8",
        "word": {
          "text": "shoes",
          "cn": "小跑鞋",
          "pic": "👟"
        },
        "grammar": {
          "pattern": "Put on your own [___].",
          "cn": "自己穿好...。",
          "tip": "分清左右脚，自己动手穿鞋！"
        },
        "sentence": {
          "full": "Put on your own shoes.",
          "cn": "分清左右脚，自己穿好运动鞋。",
          "sceneTip": "出门前坐在小矮凳上自己穿鞋",
          "chunks": [
            "Put on your",
            "own shoes."
          ]
        }
      },
      {
        "id": "eb_clothes_9",
        "word": {
          "text": "socks",
          "cn": "彩色棉袜",
          "pic": "🧦"
        },
        "grammar": {
          "pattern": "Two matching [___] on feet.",
          "cn": "脚上穿一对搭配的...。",
          "tip": "拉好脚后跟，脚趾不挤压！"
        },
        "sentence": {
          "full": "Two matching socks on feet.",
          "cn": "双脚穿上一双舒服透气的彩色纯棉袜。",
          "sceneTip": "早起自己把袜子套在脚丫上",
          "chunks": [
            "Two matching socks",
            "on feet."
          ]
        }
      },
      {
        "id": "eb_clothes_10",
        "word": {
          "text": "hat",
          "cn": "遮阳帽",
          "pic": "🧢"
        },
        "grammar": {
          "pattern": "Wear a sunny [___] outside.",
          "cn": "外出戴好防晒...。",
          "tip": "夏天大太阳戴好帽子防中暑！"
        },
        "sentence": {
          "full": "Wear a sunny hat outside.",
          "cn": "太阳大外出记得戴上遮阳鸭舌帽。",
          "sceneTip": "去沙滩或户外戴好遮阳帽",
          "chunks": [
            "Wear a sunny hat",
            "outside."
          ]
        }
      },
      {
        "id": "eb_clothes_11",
        "word": {
          "text": "gloves",
          "cn": "保暖手套",
          "pic": "🧤"
        },
        "grammar": {
          "pattern": "Warm winter [___] for hands.",
          "cn": "给小手戴上冬天暖暖的...。",
          "tip": "冬天手套护小手堆雪人！"
        },
        "sentence": {
          "full": "Warm winter gloves for hands.",
          "cn": "冬天出门戴上厚实温暖的小手套。",
          "sceneTip": "下雪天戴上手套出门滚雪球",
          "chunks": [
            "Warm winter gloves",
            "for hands."
          ]
        }
      },
      {
        "id": "eb_clothes_12",
        "word": {
          "text": "scarf",
          "cn": "软围巾",
          "pic": "🧣"
        },
        "grammar": {
          "pattern": "Wrap a warm [___] around neck.",
          "cn": "脖子上围好暖融融的...。",
          "tip": "冬天脖子不灌风受凉！"
        },
        "sentence": {
          "full": "Wrap a warm scarf around neck.",
          "cn": "脖子上系上一条毛茸茸的红色围巾。",
          "sceneTip": "起大风把围巾系好挡风寒",
          "chunks": [
            "Wrap a warm scarf",
            "around neck."
          ]
        }
      },
      {
        "id": "eb_clothes_13",
        "word": {
          "text": "boots",
          "cn": "防雨靴",
          "pic": "🥾"
        },
        "grammar": {
          "pattern": "Splash in puddles with rain [___]!",
          "cn": "穿上雨...开心踩水坑！",
          "tip": "雨天穿雨靴踩小泥坑真好玩！"
        },
        "sentence": {
          "full": "Splash in puddles with rain boots!",
          "cn": "穿上高筒黄雨靴，踩水坑水花飞溅！",
          "sceneTip": "下雨天穿上雨靴跟佩奇一样踩泥坑",
          "chunks": [
            "Splash in puddles",
            "with rain boots!"
          ]
        }
      },
      {
        "id": "eb_clothes_14",
        "word": {
          "text": "slippers",
          "cn": "居家拖鞋",
          "pic": "🩴"
        },
        "grammar": {
          "pattern": "Step into comfy [___] at home.",
          "cn": "回家换上舒服的...。",
          "tip": "进门脱鞋换拖鞋讲卫生！"
        },
        "sentence": {
          "full": "Step into comfy slippers at home.",
          "cn": "进家门立刻换上软乎乎的居家拖鞋。",
          "sceneTip": "玄关处脱下皮鞋换上拖鞋",
          "chunks": [
            "Step into comfy slippers",
            "at home."
          ]
        }
      },
      {
        "id": "eb_clothes_15",
        "word": {
          "text": "raincoat",
          "cn": "黄色雨衣",
          "pic": "🧥"
        },
        "grammar": {
          "pattern": "Wear your yellow [___].",
          "cn": "穿上你的黄色...。",
          "tip": "下雨天穿雨衣双手自由！"
        },
        "sentence": {
          "full": "Wear your yellow raincoat.",
          "cn": "下雨天上学穿上醒目的亮黄色小雨衣。",
          "sceneTip": "撑开小雨帽扣好雨衣按扣",
          "chunks": [
            "Wear your",
            "yellow raincoat."
          ]
        }
      },
      {
        "id": "eb_clothes_16",
        "word": {
          "text": "underwear",
          "cn": "干净内裤",
          "pic": "🩲"
        },
        "grammar": {
          "pattern": "Change into clean [___].",
          "cn": "换上干干净净的...。",
          "tip": "讲卫生勤换洗身体棒！"
        },
        "sentence": {
          "full": "Change into clean underwear.",
          "cn": "每天洗完澡换上干净纯棉小内裤。",
          "sceneTip": "洗完香香澡自己拿内裤穿上",
          "chunks": [
            "Change into",
            "clean underwear."
          ]
        }
      },
      {
        "id": "eb_clothes_17",
        "word": {
          "text": "pajamas",
          "cn": "舒服睡衣",
          "pic": "🥋"
        },
        "grammar": {
          "pattern": "Slip into soft [___].",
          "cn": "换上柔软舒服的...。",
          "tip": "睡前换衣服准备好梦连连！"
        },
        "sentence": {
          "full": "Slip into soft pajamas.",
          "cn": "换上一套松软透气的小熊图案睡衣。",
          "sceneTip": "刷完牙换上睡衣钻进被窝",
          "chunks": [
            "Slip into",
            "soft pajamas."
          ]
        }
      },
      {
        "id": "eb_clothes_18",
        "word": {
          "text": "zipper",
          "cn": "金色拉链",
          "pic": "🤐"
        },
        "grammar": {
          "pattern": "Pull the golden [___] up.",
          "cn": "把衣服...向上拉好。",
          "tip": "对准插销慢慢往上拉顺畅！"
        },
        "sentence": {
          "full": "Pull the golden zipper up.",
          "cn": "抓住金色拉链头，顺畅地拉到领口。",
          "sceneTip": "穿外套时对准插销往上拉拉链",
          "chunks": [
            "Pull the golden",
            "zipper up."
          ]
        }
      },
      {
        "id": "eb_clothes_19",
        "word": {
          "text": "buttons",
          "cn": "圆纽扣",
          "pic": "🔘"
        },
        "grammar": {
          "pattern": "Button up the round [___].",
          "cn": "扣好一颗颗圆圆的...。",
          "tip": "锻炼手指灵活性与耐心！"
        },
        "sentence": {
          "full": "Button up the round buttons.",
          "cn": "对准扣眼，把衣服上的圆纽扣扣好。",
          "sceneTip": "自己把衬衫纽扣按顺序扣好",
          "chunks": [
            "Button up",
            "the round buttons."
          ]
        }
      },
      {
        "id": "eb_clothes_20",
        "word": {
          "text": "pocket",
          "cn": "小口袋",
          "pic": "👝"
        },
        "grammar": {
          "pattern": "Put treasures in the [___].",
          "cn": "把小宝贝装进衣服...里。",
          "tip": "小纸巾或小卡片随身带！"
        },
        "sentence": {
          "full": "Put treasures in the pocket.",
          "cn": "把捡到的一片漂亮落叶装进小口袋。",
          "sceneTip": "在衣服口袋里放一张备用手帕",
          "chunks": [
            "Put treasures",
            "in the pocket."
          ]
        }
      },
      {
        "id": "eb_clothes_21",
        "word": {
          "text": "head",
          "cn": "聪明脑袋",
          "pic": "🙆"
        },
        "grammar": {
          "pattern": "Nod your little [___].",
          "cn": "点点头，动动小...。",
          "tip": "动脑筋想问题点头表示赞同！"
        },
        "sentence": {
          "full": "Nod your little head.",
          "cn": "听懂了老师的问题，点点头小脑袋。",
          "sceneTip": "回答好问题自信地点点头",
          "chunks": [
            "Nod your",
            "little head."
          ]
        }
      },
      {
        "id": "eb_clothes_22",
        "word": {
          "text": "hair",
          "cn": "整齐头发",
          "pic": "💇"
        },
        "grammar": {
          "pattern": "Comb your neat [___].",
          "cn": "把...梳得整整齐齐。",
          "tip": "每天出门前梳理头发容光焕发！"
        },
        "sentence": {
          "full": "Comb your neat hair.",
          "cn": "拿小木梳把头发梳理得整齐漂亮。",
          "sceneTip": "照着镜子把额前刘海梳齐",
          "chunks": [
            "Comb your",
            "neat hair."
          ]
        }
      },
      {
        "id": "eb_clothes_23",
        "word": {
          "text": "eyes",
          "cn": "明亮眼睛",
          "pic": "👀"
        },
        "grammar": {
          "pattern": "Blink your bright [___].",
          "cn": "眨眨你水汪汪的...。",
          "tip": "保护视力，多看远方绿色！"
        },
        "sentence": {
          "full": "Blink your bright eyes.",
          "cn": "眨眨清澈大眼睛，看清楚远处的花。",
          "sceneTip": "做完眼保健操眨眨眼睛",
          "chunks": [
            "Blink your",
            "bright eyes."
          ]
        }
      },
      {
        "id": "eb_clothes_24",
        "word": {
          "text": "ears",
          "cn": "灵巧耳朵",
          "pic": "👂"
        },
        "grammar": {
          "pattern": "Listen with two [___].",
          "cn": "用两只小...认真倾听。",
          "tip": "倾听大自然和故事美妙声音！"
        },
        "sentence": {
          "full": "Listen with two ears.",
          "cn": "竖起两只灵巧的小耳朵，仔细听音乐。",
          "sceneTip": "听小动物叫声竖起耳朵辨别",
          "chunks": [
            "Listen with",
            "two ears."
          ]
        }
      },
      {
        "id": "eb_clothes_25",
        "word": {
          "text": "nose",
          "cn": "小鼻子",
          "pic": "👃"
        },
        "grammar": {
          "pattern": "Smell flowers with your [___].",
          "cn": "用你的...闻闻花香。",
          "tip": "呼吸新鲜空气闻香气！"
        },
        "sentence": {
          "full": "Smell flowers with your nose.",
          "cn": "用小鼻子深深吸一口芬芳的花香。",
          "sceneTip": "走过花园闻到甜甜桂花香",
          "chunks": [
            "Smell flowers",
            "with your nose."
          ]
        }
      },
      {
        "id": "eb_clothes_26",
        "word": {
          "text": "mouth",
          "cn": "嘴巴",
          "pic": "👄"
        },
        "grammar": {
          "pattern": "Open your [___] and say Ah!",
          "cn": "张大...说“啊—”。",
          "tip": "医生检查喉咙或大口吃苹果！"
        },
        "sentence": {
          "full": "Open your mouth and say Ah!",
          "cn": "配合医生叔叔张大嘴巴说“啊—”。",
          "sceneTip": "体检时张大嘴巴检查扁桃体",
          "chunks": [
            "Open your mouth",
            "and say Ah!"
          ]
        }
      },
      {
        "id": "eb_clothes_27",
        "word": {
          "text": "teeth",
          "cn": "洁白牙齿",
          "pic": "🦷"
        },
        "grammar": {
          "pattern": "Brush your white [___].",
          "cn": "认真刷白白的小...。",
          "tip": "早晚各一次，虫牙全走开！"
        },
        "sentence": {
          "full": "Brush your white teeth.",
          "cn": "打圈刷牙两分钟，牙齿洁白不生虫。",
          "sceneTip": "早起在洗手台前咕噜漱口刷牙",
          "chunks": [
            "Brush your",
            "white teeth."
          ]
        }
      },
      {
        "id": "eb_clothes_28",
        "word": {
          "text": "tongue",
          "cn": "小舌头",
          "pic": "👅"
        },
        "grammar": {
          "pattern": "Stick out your [___].",
          "cn": "俏皮地吐吐小...。",
          "tip": "尝甜酸苦咸全靠舌头味蕾！"
        },
        "sentence": {
          "full": "Stick out your tongue.",
          "cn": "调皮地伸出粉红小舌头尝雪花。",
          "sceneTip": "尝一滴甜果汁舔舔嘴唇",
          "chunks": [
            "Stick out",
            "your tongue."
          ]
        }
      },
      {
        "id": "eb_clothes_29",
        "word": {
          "text": "face",
          "cn": "可爱脸蛋",
          "pic": "😊"
        },
        "grammar": {
          "pattern": "Wash your cute [___].",
          "cn": "洗干净红扑扑的...。",
          "tip": "温水洗脸精神一整天！"
        },
        "sentence": {
          "full": "Wash your cute face.",
          "cn": "捧起温水把红扑扑的小脸蛋洗干净。",
          "sceneTip": "早晨洗完脸擦干感到神清气爽",
          "chunks": [
            "Wash your",
            "cute face."
          ]
        }
      },
      {
        "id": "eb_clothes_30",
        "word": {
          "text": "neck",
          "cn": "小脖子",
          "pic": "🧣"
        },
        "grammar": {
          "pattern": "Touch your gentle [___].",
          "cn": "摸摸你修长的...。",
          "tip": "像小天鹅一样挺拔自信！"
        },
        "sentence": {
          "full": "Touch your gentle neck.",
          "cn": "挺直小胸膛，展示天鹅般修长脖子。",
          "sceneTip": "做早操伸展颈部活动筋骨",
          "chunks": [
            "Touch your",
            "gentle neck."
          ]
        }
      },
      {
        "id": "eb_clothes_31",
        "word": {
          "text": "arms",
          "cn": "结实手臂",
          "pic": "💪"
        },
        "grammar": {
          "pattern": "Stretch your strong [___].",
          "cn": "伸展你结实的...。",
          "tip": "像小鸟翅膀一样平举飞翔！"
        },
        "sentence": {
          "full": "Stretch your strong arms.",
          "cn": "两只小手臂向两侧展开，做伸展操。",
          "sceneTip": "做广播体操伸直双手",
          "chunks": [
            "Stretch your",
            "strong arms."
          ]
        }
      },
      {
        "id": "eb_clothes_32",
        "word": {
          "text": "hands",
          "cn": "勤劳双手",
          "pic": "🖐️"
        },
        "grammar": {
          "pattern": "Clap your two [___] together!",
          "cn": "大家一起拍拍小...！",
          "tip": "鼓掌鼓励小伙伴，洗干净小手！"
        },
        "sentence": {
          "full": "Clap your two hands together!",
          "cn": "和小朋友一起拍起节拍，掌声欢快！",
          "sceneTip": "唱儿歌时跟随节奏开心鼓掌",
          "chunks": [
            "Clap your two hands",
            "together!"
          ]
        }
      },
      {
        "id": "eb_clothes_33",
        "word": {
          "text": "fingers",
          "cn": "灵巧手指",
          "pic": "☝️"
        },
        "grammar": {
          "pattern": "Wiggle ten little [___].",
          "cn": "动一动十个小...。",
          "tip": "数一数十个指头多灵巧！"
        },
        "sentence": {
          "full": "Wiggle ten little fingers.",
          "cn": "动动十个小手指，弹奏空气小钢琴。",
          "sceneTip": "做手指操锻炼大脑协调",
          "chunks": [
            "Wiggle ten",
            "little fingers."
          ]
        }
      },
      {
        "id": "eb_clothes_34",
        "word": {
          "text": "legs",
          "cn": "快跑双腿",
          "pic": "🦵"
        },
        "grammar": {
          "pattern": "Run with two fast [___].",
          "cn": "迈开两条...飞快奔跑。",
          "tip": "操场奔跑充满活力！"
        },
        "sentence": {
          "full": "Run with two fast legs.",
          "cn": "迈开轻快的小步伐，在跑道上加速！",
          "sceneTip": "体育课练习折返跑冲刺",
          "chunks": [
            "Run with",
            "two fast legs."
          ]
        }
      },
      {
        "id": "eb_clothes_35",
        "word": {
          "text": "knees",
          "cn": "膝盖",
          "pic": "🦿"
        },
        "grammar": {
          "pattern": "Bend your two [___].",
          "cn": "弯弯你的两个...。",
          "tip": "下蹲起立做热身保护关节！"
        },
        "sentence": {
          "full": "Bend your two knees.",
          "cn": "弯曲膝盖微微下蹲，准备起跳！",
          "sceneTip": "做蛙跳或深蹲前活动膝关节",
          "chunks": [
            "Bend your",
            "two knees."
          ]
        }
      },
      {
        "id": "eb_clothes_36",
        "word": {
          "text": "feet",
          "cn": "双脚丫",
          "pic": "🦶"
        },
        "grammar": {
          "pattern": "Stamp your little [___]!",
          "cn": "用力跺跺你的...！",
          "tip": "感受脚踏实地的力量！"
        },
        "sentence": {
          "full": "Stamp your little feet!",
          "cn": "伴随欢快的节拍，开心地跺跺小脚！",
          "sceneTip": "跳踢踏舞欢快踩踏地板",
          "chunks": [
            "Stamp your",
            "little feet!"
          ]
        }
      },
      {
        "id": "eb_clothes_37",
        "word": {
          "text": "toes",
          "cn": "脚趾头",
          "pic": "👣"
        },
        "grammar": {
          "pattern": "Wiggle your tiny [___].",
          "cn": "动动可爱的...。",
          "tip": "光脚踩在沙滩上软绵绵！"
        },
        "sentence": {
          "full": "Wiggle your tiny toes.",
          "cn": "光着小脚丫踩在细沙上，扭扭脚趾。",
          "sceneTip": "夏天在沙滩赤足踩水花",
          "chunks": [
            "Wiggle your",
            "tiny toes."
          ]
        }
      },
      {
        "id": "eb_clothes_38",
        "word": {
          "text": "tummy",
          "cn": "小肚子",
          "pic": "🤰"
        },
        "grammar": {
          "pattern": "Rub your round [___].",
          "cn": "揉揉圆滚滚的...。",
          "tip": "吃饱饭轻轻揉肚子助消化！"
        },
        "sentence": {
          "full": "Rub your round tummy.",
          "cn": "吃饱了营养饭菜，揉揉鼓鼓的小肚子。",
          "sceneTip": "饭后顺时针给小肚子做抚触",
          "chunks": [
            "Rub your",
            "round tummy."
          ]
        }
      },
      {
        "id": "eb_clothes_39",
        "word": {
          "text": "back",
          "cn": "后背",
          "pic": "🎒"
        },
        "grammar": {
          "pattern": "Straighten your [___].",
          "cn": "挺直你直直的...。",
          "tip": "坐如钟站如松姿态端正！"
        },
        "sentence": {
          "full": "Straighten your back.",
          "cn": "背靠椅背坐端正，把后背挺得直直的。",
          "sceneTip": "写字画画端正坐姿不驼背",
          "chunks": [
            "Straighten",
            "your back."
          ]
        }
      },
      {
        "id": "eb_clothes_40",
        "word": {
          "text": "shoulders",
          "cn": "肩膀",
          "pic": "🤷"
        },
        "grammar": {
          "pattern": "Shrug your two [___].",
          "cn": "耸一耸两个...。",
          "tip": "放松肩颈舒展身心！"
        },
        "sentence": {
          "full": "Shrug your two shoulders.",
          "cn": "耸耸小肩膀转两圈，放松身体好轻松。",
          "sceneTip": "做肩部放松操活动筋骨",
          "chunks": [
            "Shrug your",
            "two shoulders."
          ]
        }
      },
      {
        "id": "eb_clothes_41",
        "word": {
          "text": "heart",
          "cn": "小心脏",
          "pic": "🫀"
        },
        "grammar": {
          "pattern": "Thump-thump beats my [___].",
          "cn": "扑通扑通跳动的是我的...。",
          "tip": "运动完感受心跳生命力！"
        },
        "sentence": {
          "full": "Thump-thump beats my heart.",
          "cn": "跑完步把手放在胸口，感受扑通心跳。",
          "sceneTip": "跑步后手按左胸感受心跳",
          "chunks": [
            "Thump-thump",
            "beats my heart."
          ]
        }
      },
      {
        "id": "eb_clothes_42",
        "word": {
          "text": "chin",
          "cn": "小下巴",
          "pic": "💆"
        },
        "grammar": {
          "pattern": "Rest hands under your [___].",
          "cn": "双手托着你的小...。",
          "tip": "认真听故事专注思考！"
        },
        "sentence": {
          "full": "Rest hands under your chin.",
          "cn": "双手托着可爱下巴，聚精会神听故事。",
          "sceneTip": "坐在地毯上听老师娓娓讲故事",
          "chunks": [
            "Rest hands under",
            "your chin."
          ]
        }
      },
      {
        "id": "eb_clothes_43",
        "word": {
          "text": "cheeks",
          "cn": "红脸颊",
          "pic": "🧏"
        },
        "grammar": {
          "pattern": "Rosy pink [___].",
          "cn": "粉扑扑的两个小...。",
          "tip": "运动完红通通健康可爱！"
        },
        "sentence": {
          "full": "Rosy pink cheeks.",
          "cn": "跑完步小脸蛋像熟透的红苹果。",
          "sceneTip": "冬天户外玩耍后脸蛋粉扑扑",
          "chunks": [
            "Rosy pink",
            "cheeks."
          ]
        }
      },
      {
        "id": "eb_clothes_44",
        "word": {
          "text": "eyebrows",
          "cn": "小眉毛",
          "pic": "👁️"
        },
        "grammar": {
          "pattern": "Wiggle your [___].",
          "cn": "挑挑你的两道...。",
          "tip": "喜怒哀乐眉毛生动变化！"
        },
        "sentence": {
          "full": "Wiggle your eyebrows.",
          "cn": "对着镜子做鬼脸，挑动逗趣的小眉毛。",
          "sceneTip": "做各种夸张小表情逗笑家人",
          "chunks": [
            "Wiggle your",
            "eyebrows."
          ]
        }
      },
      {
        "id": "eb_clothes_45",
        "word": {
          "text": "nails",
          "cn": "手指甲",
          "pic": "💅"
        },
        "grammar": {
          "pattern": "Clip your clean [___].",
          "cn": "剪干净小手上的...。",
          "tip": "勤剪指甲不藏污纳垢！"
        },
        "sentence": {
          "full": "Clip your clean nails.",
          "cn": "妈妈用儿童指甲剪把指甲修剪干净。",
          "sceneTip": "周末例行洗手剪指甲讲卫生",
          "chunks": [
            "Clip your",
            "clean nails."
          ]
        }
      },
      {
        "id": "eb_clothes_46",
        "word": {
          "text": "elbows",
          "cn": "手肘关节",
          "pic": "🩸"
        },
        "grammar": {
          "pattern": "Bend your two [___].",
          "cn": "弯曲你的两个...。",
          "tip": "给爸爸妈妈一个大大的环抱！"
        },
        "sentence": {
          "full": "Bend your two elbows.",
          "cn": "弯起两只手肘，给妈妈一个紧紧的拥抱。",
          "sceneTip": "张开手臂做出拥抱动作",
          "chunks": [
            "Bend your",
            "two elbows."
          ]
        }
      },
      {
        "id": "eb_clothes_47",
        "word": {
          "text": "body",
          "cn": "健康身体",
          "pic": "🧍"
        },
        "grammar": {
          "pattern": "Healthy [___] grows strong.",
          "cn": "健康的...茁壮成长。",
          "tip": "不挑食多运动长得高又壮！"
        },
        "sentence": {
          "full": "Healthy body grows strong.",
          "cn": "早睡早起多运动，身体强壮不生病。",
          "sceneTip": "每天户外锻炼一小时身体棒",
          "chunks": [
            "Healthy body",
            "grows strong."
          ]
        }
      },
      {
        "id": "eb_clothes_48",
        "word": {
          "text": "skin",
          "cn": "娇嫩皮肤",
          "pic": "🧖"
        },
        "grammar": {
          "pattern": "Soft and smooth [___].",
          "cn": "滑溜溜的柔嫩...。",
          "tip": "涂上儿童润肤霜香喷喷！"
        },
        "sentence": {
          "full": "Soft and smooth skin.",
          "cn": "洗完澡涂上润肤乳，皮肤滑溜溜。",
          "sceneTip": "冬天洗澡后涂面霜防干燥",
          "chunks": [
            "Soft and smooth",
            "skin."
          ]
        }
      },
      {
        "id": "eb_clothes_49",
        "word": {
          "text": "tears",
          "cn": "眼泪",
          "pic": "😭"
        },
        "grammar": {
          "pattern": "Wipe away sad [___].",
          "cn": "擦掉难过的...。",
          "tip": "做个勇敢坚强的小男子汉/小公主！"
        },
        "sentence": {
          "full": "Wipe away sad tears.",
          "cn": "摔疼了不怕，擦干眼泪站起来继续玩。",
          "sceneTip": "摔倒后自己拍拍灰尘擦干眼泪",
          "chunks": [
            "Wipe away",
            "sad tears."
          ]
        }
      },
      {
        "id": "eb_clothes_50",
        "word": {
          "text": "smile",
          "cn": "灿烂笑容",
          "pic": "😄"
        },
        "grammar": {
          "pattern": "Show me a big happy [___]!",
          "cn": "露出一个开心的...！",
          "tip": "每天开开心心充满阳光正能量！"
        },
        "sentence": {
          "full": "Show me a big happy smile!",
          "cn": "咧开小嘴巴，露出世界上最甜的笑容！",
          "sceneTip": "拍照时喊茄子露出灿烂笑容",
          "chunks": [
            "Show me a big",
            "happy smile!"
          ]
        }
      }
    ]
  },
  {
    "topicId": "nature",
    "topicName": "萌宠自然",
    "icon": "🐼",
    "desc": "小狗、小猫、大熊猫、太阳、彩虹等动植物与大自然句型",
    "items": [
      {
        "id": "eb_nature_1",
        "word": {
          "text": "dog",
          "cn": "小狗狗",
          "pic": "🐶"
        },
        "grammar": {
          "pattern": "The friendly [___] wags tail.",
          "cn": "友善的...摇尾巴。",
          "tip": "看见主人开心地摇尾巴欢迎！"
        },
        "sentence": {
          "full": "The friendly dog wags its tail.",
          "cn": "小狗看到主人回家，开心地摇起尾巴。",
          "sceneTip": "路遇可爱小柯基摇尾巴打招呼",
          "chunks": [
            "The friendly dog",
            "wags its tail."
          ]
        }
      },
      {
        "id": "eb_nature_2",
        "word": {
          "text": "cat",
          "cn": "小花猫",
          "pic": "🐱"
        },
        "grammar": {
          "pattern": "The cute [___] says Meow.",
          "cn": "可爱的...喵喵叫。",
          "tip": "晒太阳打呼噜温柔乖巧！"
        },
        "sentence": {
          "full": "The cute cat says Meow.",
          "cn": "小花猫蜷在阳光下，温柔地喵喵叫。",
          "sceneTip": "抚摸小猫咪听它发出呼噜声",
          "chunks": [
            "The cute cat",
            "says Meow."
          ]
        }
      },
      {
        "id": "eb_nature_3",
        "word": {
          "text": "bird",
          "cn": "林中小鸟",
          "pic": "🐦"
        },
        "grammar": {
          "pattern": "The little [___] can fly high.",
          "cn": "小巧的...展翅高飞。",
          "tip": "站在枝头叽叽喳喳唱迎清晨！"
        },
        "sentence": {
          "full": "The little bird can fly high.",
          "cn": "小鸟儿张开轻盈翅膀，飞向蔚蓝天空。",
          "sceneTip": "仰望树梢看小鸟筑巢唱歌",
          "chunks": [
            "The little bird",
            "can fly high."
          ]
        }
      },
      {
        "id": "eb_nature_4",
        "word": {
          "text": "fish",
          "cn": "水中游鱼",
          "pic": "🐟"
        },
        "grammar": {
          "pattern": "The golden [___] swims fast.",
          "cn": "小金...在水里游得欢。",
          "tip": "摇动鱼尾游来游去真自在！"
        },
        "sentence": {
          "full": "The golden fish swims in water.",
          "cn": "金色小鱼甩着漂亮大尾巴在水草间游。",
          "sceneTip": "在鱼缸前看小金鱼吐泡泡",
          "chunks": [
            "The golden fish",
            "swims in water."
          ]
        }
      },
      {
        "id": "eb_nature_5",
        "word": {
          "text": "rabbit",
          "cn": "小白兔",
          "pic": "🐰"
        },
        "grammar": {
          "pattern": "Hop-hop goes the little [___]!",
          "cn": "蹦蹦跳跳的小...！",
          "tip": "长耳朵红眼睛最爱吃胡萝卜！"
        },
        "sentence": {
          "full": "Hop-hop goes the little rabbit!",
          "cn": "长耳朵小白兔一蹦一跳真灵巧！",
          "sceneTip": "看小白兔吃草三瓣嘴动呀动",
          "chunks": [
            "Hop-hop goes",
            "the little rabbit!"
          ]
        }
      },
      {
        "id": "eb_nature_6",
        "word": {
          "text": "duck",
          "cn": "小鸭子",
          "pic": "🦆"
        },
        "grammar": {
          "pattern": "Quack-quack says the yellow [___].",
          "cn": "黄色小...嘎嘎叫。",
          "tip": "池塘水里游水捉小鱼！"
        },
        "sentence": {
          "full": "Quack-quack says the yellow duck.",
          "cn": "毛茸茸的黄小鸭排着队在水里嘎嘎叫。",
          "sceneTip": "公园湖边看野鸭子戏水",
          "chunks": [
            "Quack-quack says",
            "the yellow duck."
          ]
        }
      },
      {
        "id": "eb_nature_7",
        "word": {
          "text": "chick",
          "cn": "小雏鸡",
          "pic": "🐥"
        },
        "grammar": {
          "pattern": "Peep-peep says the baby [___].",
          "cn": "刚出壳的...叽叽叫。",
          "tip": "跟在鸡妈妈身后啄小米！"
        },
        "sentence": {
          "full": "Peep-peep says the baby chick.",
          "cn": "小鸡宝宝跟着母鸡妈妈在草地上捉虫。",
          "sceneTip": "看毛茸茸小黄鸡啄米粒",
          "chunks": [
            "Peep-peep says",
            "the baby chick."
          ]
        }
      },
      {
        "id": "eb_nature_8",
        "word": {
          "text": "elephant",
          "cn": "长鼻大象",
          "pic": "🐘"
        },
        "grammar": {
          "pattern": "The [___] has a long nose.",
          "cn": "大...有长长的鼻子。",
          "tip": "吸水喷水像高压小喷泉！"
        },
        "sentence": {
          "full": "The elephant has a long nose.",
          "cn": "温和的大象用长长的鼻子卷起树枝。",
          "sceneTip": "在动物园看大象吸水洗澡",
          "chunks": [
            "The elephant",
            "has a long nose."
          ]
        }
      },
      {
        "id": "eb_nature_9",
        "word": {
          "text": "lion",
          "cn": "森林之王狮子",
          "pic": "🦁"
        },
        "grammar": {
          "pattern": "The mighty [___] roars loud!",
          "cn": "威武的...大声吼叫！",
          "tip": "金黄浓密鬃毛威风凛凛！"
        },
        "sentence": {
          "full": "The mighty lion roars loud!",
          "cn": "森林之王大狮子仰头发出威武吼叫！",
          "sceneTip": "看绘本里的辛巴威武奔跑",
          "chunks": [
            "The mighty lion",
            "roars loud!"
          ]
        }
      },
      {
        "id": "eb_nature_10",
        "word": {
          "text": "tiger",
          "cn": "花纹猛虎",
          "pic": "🐯"
        },
        "grammar": {
          "pattern": "The brave [___] has stripes.",
          "cn": "勇敢的...身上有漂亮条纹。",
          "tip": "额头上顶着一个威风“王”字！"
        },
        "sentence": {
          "full": "The brave tiger has stripes.",
          "cn": "威猛的大老虎身上有着霸气的黑黄条纹。",
          "sceneTip": "看老虎在假山上矫健散步",
          "chunks": [
            "The brave tiger",
            "has stripes."
          ]
        }
      },
      {
        "id": "eb_nature_11",
        "word": {
          "text": "monkey",
          "cn": "机灵小猴",
          "pic": "🐵"
        },
        "grammar": {
          "pattern": "The clever [___] climbs trees.",
          "cn": "机灵的...擅长爬大树。",
          "tip": "尾巴倒挂金钩剥香蕉吃！"
        },
        "sentence": {
          "full": "The clever monkey climbs trees.",
          "cn": "机灵的小猴子抓着藤蔓在树间荡来荡去。",
          "sceneTip": "看猴山上小猴子剥花生吃",
          "chunks": [
            "The clever monkey",
            "climbs trees."
          ]
        }
      },
      {
        "id": "eb_nature_12",
        "word": {
          "text": "panda",
          "cn": "国宝大熊猫",
          "pic": "🐼"
        },
        "grammar": {
          "pattern": "The cute [___] eats green bamboo.",
          "cn": "国宝...爱吃鲜嫩竹子。",
          "tip": "黑眼圈圆滚滚啃竹子萌翻天！"
        },
        "sentence": {
          "full": "The cute panda eats green bamboo.",
          "cn": "圆滚滚的大熊猫抱着青脆竹子嚼得香。",
          "sceneTip": "看大熊猫抱竹笋咔咔啃食",
          "chunks": [
            "The cute panda",
            "eats green bamboo."
          ]
        }
      },
      {
        "id": "eb_nature_13",
        "word": {
          "text": "giraffe",
          "cn": "长颈鹿",
          "pic": "🦒"
        },
        "grammar": {
          "pattern": "The tall [___] eats high leaves.",
          "cn": "高高的...吃树顶上的嫩叶。",
          "tip": "脖子长长优雅散步！"
        },
        "sentence": {
          "full": "The tall giraffe eats high leaves.",
          "cn": "长颈鹿伸长脖子，优雅品尝树梢嫩芽。",
          "sceneTip": "仰着头看长颈鹿悠闲吃树叶",
          "chunks": [
            "The tall giraffe",
            "eats high leaves."
          ]
        }
      },
      {
        "id": "eb_nature_14",
        "word": {
          "text": "zebra",
          "cn": "条纹斑马",
          "pic": "🦓"
        },
        "grammar": {
          "pattern": "The [___] wears striped coat.",
          "cn": "...穿着黑白条纹外衣。",
          "tip": "在开阔草原奔跑如黑白旋风！"
        },
        "sentence": {
          "full": "The zebra wears black and white stripes.",
          "cn": "黑白斑马在辽阔的青青草原上飞驰。",
          "sceneTip": "辨认斑马黑白相间的条纹图案",
          "chunks": [
            "The zebra wears",
            "black and white stripes."
          ]
        }
      },
      {
        "id": "eb_nature_15",
        "word": {
          "text": "bear",
          "cn": "大棕熊",
          "pic": "🐻"
        },
        "grammar": {
          "pattern": "The big brown [___] loves honey.",
          "cn": "大棕...最爱舔甜蜂蜜。",
          "tip": "憨厚笨拙冬天要冬眠！"
        },
        "sentence": {
          "full": "The big brown bear loves honey.",
          "cn": "大棕熊伸出厚厚的熊掌，品尝甜蜂蜜。",
          "sceneTip": "看绘本里小熊和蜜蜂做朋友",
          "chunks": [
            "The big brown bear",
            "loves honey."
          ]
        }
      },
      {
        "id": "eb_nature_16",
        "word": {
          "text": "pig",
          "cn": "粉色小猪",
          "pic": "🐷"
        },
        "grammar": {
          "pattern": "Oink-oink says the pink [___].",
          "cn": "粉粉的...哼哼叫。",
          "tip": "大耳朵卷尾巴在泥巴里打滚！"
        },
        "sentence": {
          "full": "Oink-oink says the pink pig.",
          "cn": "粉色小猪摇着卷卷小尾巴，开心哼哼叫。",
          "sceneTip": "像佩奇一样喜欢在泥巴坑跳跃",
          "chunks": [
            "Oink-oink says",
            "the pink pig."
          ]
        }
      },
      {
        "id": "eb_nature_17",
        "word": {
          "text": "cow",
          "cn": "花斑奶牛",
          "pic": "🐮"
        },
        "grammar": {
          "pattern": "Moo-moo, the [___] gives milk.",
          "cn": "牟牟叫的...生产新鲜牛奶。",
          "tip": "在牧场吃青草奉献甘甜！"
        },
        "sentence": {
          "full": "Moo-moo, the cow gives sweet milk.",
          "cn": "花斑奶牛在牧场吃草，产出香甜牛奶。",
          "sceneTip": "去牧场看奶牛悠闲吃青草",
          "chunks": [
            "Moo-moo, the cow",
            "gives sweet milk."
          ]
        }
      },
      {
        "id": "eb_nature_18",
        "word": {
          "text": "sheep",
          "cn": "温顺绵羊",
          "pic": "🐑"
        },
        "grammar": {
          "pattern": "Baa-baa, the fluffy [___] runs.",
          "cn": "咩咩叫的毛茸茸...在奔跑。",
          "tip": "雪白羊毛像云朵飘落在大地！"
        },
        "sentence": {
          "full": "Baa-baa, the fluffy sheep has soft wool.",
          "cn": "温顺的小绵羊身上长满洁白蓬松的羊毛。",
          "sceneTip": "摸一摸纯羊毛制品软软滑滑",
          "chunks": [
            "Baa-baa, the fluffy sheep",
            "has soft wool."
          ]
        }
      },
      {
        "id": "eb_nature_19",
        "word": {
          "text": "horse",
          "cn": "奔腾骏马",
          "pic": "🐴"
        },
        "grammar": {
          "pattern": "Neigh! The fast [___] runs!",
          "cn": "咴咴叫！奔跑的...速度快！",
          "tip": "四蹄飞扬驰骋广阔天地！"
        },
        "sentence": {
          "full": "Neigh! The fast horse runs across grass.",
          "cn": "高头大马甩着鬃毛，在草原上迅猛奔跑。",
          "sceneTip": "看骏马在开阔原野疾驰",
          "chunks": [
            "Neigh! The fast horse",
            "runs across grass."
          ]
        }
      },
      {
        "id": "eb_nature_20",
        "word": {
          "text": "frog",
          "cn": "跳跃青蛙",
          "pic": "🐸"
        },
        "grammar": {
          "pattern": "Ribbit! The green [___] jumps.",
          "cn": "呱呱叫！碧绿的...跳得远。",
          "tip": "池塘荷叶上的庄稼卫士捕虫能手！"
        },
        "sentence": {
          "full": "Ribbit! The green frog jumps far.",
          "cn": "绿青蛙蹲在碧绿荷叶上，噗通跳进水里。",
          "sceneTip": "夏天荷塘边听取蛙声一片",
          "chunks": [
            "Ribbit! The green frog",
            "jumps far."
          ]
        }
      },
      {
        "id": "eb_nature_21",
        "word": {
          "text": "butterfly",
          "cn": "彩蝶",
          "pic": "🦋"
        },
        "grammar": {
          "pattern": "A colorful [___] dances on flowers.",
          "cn": "五彩斑斓的...在花丛中飞舞。",
          "tip": "翅膀像花瓣一样轻盈翩跹！"
        },
        "sentence": {
          "full": "A colorful butterfly dances on flowers.",
          "cn": "美丽的蝴蝶拍打彩色翅膀，落在花蕊上。",
          "sceneTip": "追随花丛中跳舞的花蝴蝶",
          "chunks": [
            "A colorful butterfly",
            "dances on flowers."
          ]
        }
      },
      {
        "id": "eb_nature_22",
        "word": {
          "text": "bee",
          "cn": "勤劳蜜蜂",
          "pic": "🐝"
        },
        "grammar": {
          "pattern": "Buzz-buzz, the busy [___] works.",
          "cn": "嗡嗡叫，勤劳的...在采蜜。",
          "tip": "早出晚归酿出百花甘甜！"
        },
        "sentence": {
          "full": "Buzz-buzz, the busy bee makes honey.",
          "cn": "勤劳的小蜜蜂在花海中穿梭，采集花蜜。",
          "sceneTip": "观察花朵上沾满花粉的小蜜蜂",
          "chunks": [
            "Buzz-buzz, the busy bee",
            "makes honey."
          ]
        }
      },
      {
        "id": "eb_nature_23",
        "word": {
          "text": "ant",
          "cn": "小小蚂蚁",
          "pic": "🐜"
        },
        "grammar": {
          "pattern": "Tiny [___] carries heavy crumb.",
          "cn": "小小的...扛起沉重食物。",
          "tip": "团结互助排队运粮大力量！"
        },
        "sentence": {
          "full": "Tiny ant carries heavy food.",
          "cn": "小蚂蚁排成长长队伍，齐心合力搬面包渣。",
          "sceneTip": "蹲在树下观察蚂蚁搬家避雨",
          "chunks": [
            "Tiny ant",
            "carries heavy food."
          ]
        }
      },
      {
        "id": "eb_nature_24",
        "word": {
          "text": "turtle",
          "cn": "长寿乌龟",
          "pic": "🐢"
        },
        "grammar": {
          "pattern": "Slow and steady [___] walks.",
          "cn": "不慌不忙的...慢慢爬。",
          "tip": "背着硬硬甲壳遇到危险缩回去！"
        },
        "sentence": {
          "full": "Slow and steady turtle walks.",
          "cn": "小乌龟驮着绿色硬壳，一步一步往前爬。",
          "sceneTip": "看小乌龟在石头上伸头晒壳",
          "chunks": [
            "Slow and steady",
            "turtle walks."
          ]
        }
      },
      {
        "id": "eb_nature_25",
        "word": {
          "text": "snail",
          "cn": "可爱蜗牛",
          "pic": "🐌"
        },
        "grammar": {
          "pattern": "The little [___] carries its shell.",
          "cn": "小巧的...背着自己的小房子。",
          "tip": "下雨后在湿润绿叶上慢悠悠爬行！"
        },
        "sentence": {
          "full": "The little snail carries its shell.",
          "cn": "小蜗牛头顶两只触角，背着贝壳慢爬。",
          "sceneTip": "雨后在冬青树叶上发现小蜗牛",
          "chunks": [
            "The little snail",
            "carries its shell."
          ]
        }
      },
      {
        "id": "eb_nature_26",
        "word": {
          "text": "penguin",
          "cn": "南极企鹅",
          "pic": "🐧"
        },
        "grammar": {
          "pattern": "Waddle-waddle goes the cute [___].",
          "cn": "摇摇摆摆的可爱...在雪地走。",
          "tip": "像穿黑燕尾服的绅士跳进冰海！"
        },
        "sentence": {
          "full": "Waddle-waddle goes the cute penguin.",
          "cn": "胖乎乎的小企鹅挺着白肚皮，摇晃走路。",
          "sceneTip": "看海洋馆企鹅在冰面上滑行",
          "chunks": [
            "Waddle-waddle goes",
            "the cute penguin."
          ]
        }
      },
      {
        "id": "eb_nature_27",
        "word": {
          "text": "dolphin",
          "cn": "灵动海豚",
          "pic": "🐬"
        },
        "grammar": {
          "pattern": "The playful [___] leaps high.",
          "cn": "调皮聪明的...跃出浪花。",
          "tip": "会微笑的海洋精灵智商超群！"
        },
        "sentence": {
          "full": "The playful dolphin jumps from sea.",
          "cn": "海豚跃出蔚蓝海面，在空中优美翻滚。",
          "sceneTip": "在海边看海豚乘风破浪跳跃",
          "chunks": [
            "The playful dolphin",
            "jumps from sea."
          ]
        }
      },
      {
        "id": "eb_nature_28",
        "word": {
          "text": "whale",
          "cn": "深海巨鲸",
          "pic": "🐋"
        },
        "grammar": {
          "pattern": "The giant [___] spouts water high!",
          "cn": "巨大的...喷出冲天水柱！",
          "tip": "深海庞然大物温柔歌唱！"
        },
        "sentence": {
          "full": "The giant whale spouts water high!",
          "cn": "巨大的蓝鲸浮上海面，喷出高高的水花。",
          "sceneTip": "看纪录片里巨鲸遨游深海",
          "chunks": [
            "The giant whale",
            "spouts water high!"
          ]
        }
      },
      {
        "id": "eb_nature_29",
        "word": {
          "text": "crab",
          "cn": "小螃蟹",
          "pic": "🦀"
        },
        "grammar": {
          "pattern": "The funny [___] walks sideways.",
          "cn": "滑稽的...横着大步走。",
          "tip": "挥舞两只大钳子咔嚓咔嚓！"
        },
        "sentence": {
          "full": "The funny crab walks sideways.",
          "cn": "小沙蟹挥舞着红色大钳子，在沙滩横行。",
          "sceneTip": "海滩边沙坑里挖出一只小蟹",
          "chunks": [
            "The funny crab",
            "walks sideways."
          ]
        }
      },
      {
        "id": "eb_nature_30",
        "word": {
          "text": "octopus",
          "cn": "大章鱼",
          "pic": "🐙"
        },
        "grammar": {
          "pattern": "The clever [___] has eight arms.",
          "cn": "机智的...拥有八只长长触手。",
          "tip": "变色伪装躲避敌人喷出墨汁！"
        },
        "sentence": {
          "full": "The clever octopus has eight arms.",
          "cn": "聪明的大章鱼用八只长触手在海底漫步。",
          "sceneTip": "看海底世界章鱼吸附在岩石上",
          "chunks": [
            "The clever octopus",
            "has eight arms."
          ]
        }
      },
      {
        "id": "eb_nature_31",
        "word": {
          "text": "sun",
          "cn": "灿烂太阳",
          "pic": "☀️"
        },
        "grammar": {
          "pattern": "The bright [___] shines warm today.",
          "cn": "明亮的...洒下温暖阳光。",
          "tip": "带来光明与万物生长的金色能源！"
        },
        "sentence": {
          "full": "The bright sun shines warm today.",
          "cn": "金色的太阳从东方升起，照耀大地。",
          "sceneTip": "早晨拉开窗帘迎接第一缕晨光",
          "chunks": [
            "The bright sun",
            "shines warm today."
          ]
        }
      },
      {
        "id": "eb_nature_32",
        "word": {
          "text": "moon",
          "cn": "弯弯月亮",
          "pic": "🌙"
        },
        "grammar": {
          "pattern": "The curved [___] glows in night sky.",
          "cn": "弯弯的...挂在深蓝夜空。",
          "tip": "像一把金黄小香蕉照亮梦乡！"
        },
        "sentence": {
          "full": "The curved moon glows in night sky.",
          "cn": "弯弯如小船的月亮静静挂在深蓝夜幕上。",
          "sceneTip": "睡前抬头向月亮道声晚安",
          "chunks": [
            "The curved moon",
            "glows in night sky."
          ]
        }
      },
      {
        "id": "eb_nature_33",
        "word": {
          "text": "star",
          "cn": "闪烁星星",
          "pic": "⭐"
        },
        "grammar": {
          "pattern": "Twinkle, twinkle, little [___]!",
          "cn": "一闪一闪，闪亮的小...！",
          "tip": "眨着眼睛陪伴每个好梦！"
        },
        "sentence": {
          "full": "Twinkle, twinkle, little star!",
          "cn": "一闪一闪亮晶晶，漫天都是小星星。",
          "sceneTip": "躺在草席上看满天繁星闪烁",
          "chunks": [
            "Twinkle, twinkle,",
            "little star!"
          ]
        }
      },
      {
        "id": "eb_nature_34",
        "word": {
          "text": "cloud",
          "cn": "洁白云朵",
          "pic": "☁️"
        },
        "grammar": {
          "pattern": "White fluffy [___] in blue sky.",
          "cn": "蓝天里飘着的白色软绵绵...。",
          "tip": "变小狗变城堡变大棉花糖！"
        },
        "sentence": {
          "full": "White fluffy cloud in blue sky.",
          "cn": "天空中漂浮着一团团像棉花糖的白云。",
          "sceneTip": "抬头指认云朵像什么小动物",
          "chunks": [
            "White fluffy cloud",
            "in blue sky."
          ]
        }
      },
      {
        "id": "eb_nature_35",
        "word": {
          "text": "rain",
          "cn": "淅沥小雨",
          "pic": "🌧️"
        },
        "grammar": {
          "pattern": "Pitter-patter falls gentle [___].",
          "cn": "淅淅沥沥，温和的...落下来。",
          "tip": "滋润大地唤醒花草树木！"
        },
        "sentence": {
          "full": "Pitter-patter falls the gentle rain.",
          "cn": "淅淅沥沥的春雨落在泥土里，滋润种子。",
          "sceneTip": "趴在窗前听雨滴敲打玻璃声",
          "chunks": [
            "Pitter-patter falls",
            "the gentle rain."
          ]
        }
      },
      {
        "id": "eb_nature_36",
        "word": {
          "text": "snow",
          "cn": "白雪花",
          "pic": "❄️"
        },
        "grammar": {
          "pattern": "Cold white [___] covers ground.",
          "cn": "洁白的...覆盖整个大地。",
          "tip": "漫天银白世界堆雪人打雪仗！"
        },
        "sentence": {
          "full": "Cold white snow makes a snowman!",
          "cn": "漫天雪花落下来，大家一起开心堆雪人！",
          "sceneTip": "冬天戴手套在雪地里滚雪球",
          "chunks": [
            "Cold white snow",
            "makes a snowman!"
          ]
        }
      },
      {
        "id": "eb_nature_37",
        "word": {
          "text": "rainbow",
          "cn": "美丽彩虹",
          "pic": "🌈"
        },
        "grammar": {
          "pattern": "Look! A beautiful [___] in sky!",
          "cn": "看！天边挂起一道七彩...！",
          "tip": "红橙黄绿青蓝紫天边桥梁！"
        },
        "sentence": {
          "full": "Look! A beautiful rainbow in the sky!",
          "cn": "雨过天晴，天边架起一道美丽的七彩虹！",
          "sceneTip": "雨后推开窗惊喜发现绚丽彩虹",
          "chunks": [
            "Look! A beautiful rainbow",
            "in the sky!"
          ]
        }
      },
      {
        "id": "eb_nature_38",
        "word": {
          "text": "wind",
          "cn": "清新微风",
          "pic": "💨"
        },
        "grammar": {
          "pattern": "Gentle [___] blows leaves away.",
          "cn": "柔和的...吹动沙沙树叶。",
          "tip": "放风筝转风车带来阵阵凉意！"
        },
        "sentence": {
          "full": "Gentle wind blows leaves away.",
          "cn": "温和的微风拂过面颊，彩色风车转得欢。",
          "sceneTip": "举着小风车逆着微风欢跑",
          "chunks": [
            "Gentle wind",
            "blows leaves away."
          ]
        }
      },
      {
        "id": "eb_nature_39",
        "word": {
          "text": "tree",
          "cn": "参天大树",
          "pic": "🌳"
        },
        "grammar": {
          "pattern": "The tall green [___] gives shade.",
          "cn": "高大的绿...撑开绿荫。",
          "tip": "鸟儿筑巢松鼠安家的大雨伞！"
        },
        "sentence": {
          "full": "The tall green tree gives cool shade.",
          "cn": "枝繁叶茂的大树为林荫道撒下一地清凉。",
          "sceneTip": "夏天在老槐树绿荫下乘凉",
          "chunks": [
            "The tall green tree",
            "gives cool shade."
          ]
        }
      },
      {
        "id": "eb_nature_40",
        "word": {
          "text": "flower",
          "cn": "盛开鲜花",
          "pic": "🌸"
        },
        "grammar": {
          "pattern": "Smell the sweet pink [___].",
          "cn": "闻闻粉色盛开的...。",
          "tip": "春天百花齐放争奇斗艳！"
        },
        "sentence": {
          "full": "Smell the sweet pink flower.",
          "cn": "走近盛开的花坛，闻一闻粉红花朵香气。",
          "sceneTip": "蹲在花坛边轻嗅芬芳的花蕊",
          "chunks": [
            "Smell the sweet",
            "pink flower."
          ]
        }
      },
      {
        "id": "eb_nature_41",
        "word": {
          "text": "grass",
          "cn": "碧绿青草",
          "pic": "🌱"
        },
        "grammar": {
          "pattern": "Green [___] tickles bare feet.",
          "cn": "绿油油的...踩上去软软的。",
          "tip": "春天破土而出顽强茁壮生命力！"
        },
        "sentence": {
          "full": "Green grass tickles bare feet.",
          "cn": "碧绿的小草如绒毯般铺满整座足球场。",
          "sceneTip": "脱掉鞋子踩在柔嫩绿草坪上",
          "chunks": [
            "Green grass",
            "tickles bare feet."
          ]
        }
      },
      {
        "id": "eb_nature_42",
        "word": {
          "text": "leaf",
          "cn": "金黄树叶",
          "pic": "🍂"
        },
        "grammar": {
          "pattern": "Golden autumn [___] dances down.",
          "cn": "秋天金黄的...翩翩起舞落下。",
          "tip": "做树叶贴画捡落叶当书签！"
        },
        "sentence": {
          "full": "Golden autumn leaf dances down.",
          "cn": "金黄色的枫叶旋转着从树枝飘落到地面。",
          "sceneTip": "弯腰捡起一片掌心形状的枫叶",
          "chunks": [
            "Golden autumn leaf",
            "dances down."
          ]
        }
      },
      {
        "id": "eb_nature_43",
        "word": {
          "text": "stone",
          "cn": "光滑鹅卵石",
          "pic": "🪨"
        },
        "grammar": {
          "pattern": "A smooth round [___] by river.",
          "cn": "河边圆溜溜的光滑...。",
          "tip": "溪水冲刷万次打磨出光滑表面！"
        },
        "sentence": {
          "full": "A smooth round stone by river.",
          "cn": "小溪边捡到一颗圆滑如玉的小鹅卵石。",
          "sceneTip": "在溪水浅滩挑选平整石头打水漂",
          "chunks": [
            "A smooth round stone",
            "by river."
          ]
        }
      },
      {
        "id": "eb_nature_44",
        "word": {
          "text": "river",
          "cn": "清清小河",
          "pic": "🏞️"
        },
        "grammar": {
          "pattern": "Clean blue [___] flows gently.",
          "cn": "清澈的蓝...缓缓流向远方。",
          "tip": "小鱼畅游水草摇曳的美丽画卷！"
        },
        "sentence": {
          "full": "Clean blue river flows gently.",
          "cn": "清澈的小河穿过村庄，缓缓流向大海。",
          "sceneTip": "看小木船在平静河面缓缓荡漾",
          "chunks": [
            "Clean blue river",
            "flows gently."
          ]
        }
      },
      {
        "id": "eb_nature_45",
        "word": {
          "text": "sea",
          "cn": "蔚蓝大海",
          "pic": "🌊"
        },
        "grammar": {
          "pattern": "Blue [___] waves splash shore.",
          "cn": "蔚蓝大...浪花涌向沙滩。",
          "tip": "无边无际潮起潮落波澜壮阔！"
        },
        "sentence": {
          "full": "Blue sea waves splash shore.",
          "cn": "蔚蓝海浪轻轻拍打金黄沙滩，溅起白沫。",
          "sceneTip": "在沙滩边追赶退下去的小浪花",
          "chunks": [
            "Blue sea waves",
            "splash shore."
          ]
        }
      },
      {
        "id": "eb_nature_46",
        "word": {
          "text": "mountain",
          "cn": "高大山峰",
          "pic": "⛰️"
        },
        "grammar": {
          "pattern": "High green [___] touches clouds.",
          "cn": "高耸入云的绿...耸立天地间。",
          "tip": "一步一个脚印勇敢攀登登顶！"
        },
        "sentence": {
          "full": "The high green mountain touches clouds.",
          "cn": "高耸的大山披着绿装，山顶隐没在云海。",
          "sceneTip": "跟爸爸手拉手拾级而上登高远眺",
          "chunks": [
            "The high green mountain",
            "touches clouds."
          ]
        }
      },
      {
        "id": "eb_nature_47",
        "word": {
          "text": "forest",
          "cn": "深密森林",
          "pic": "🌲"
        },
        "grammar": {
          "pattern": "Animals live in big green [___].",
          "cn": "动物们居住在广袤绿...中。",
          "tip": "地球绿肺释放最新鲜氧气！"
        },
        "sentence": {
          "full": "Animals live in the big forest.",
          "cn": "各种可爱小动物在茂密的原始森林安家。",
          "sceneTip": "翻阅动物百科认识森林大家庭",
          "chunks": [
            "Animals live in",
            "the big forest."
          ]
        }
      },
      {
        "id": "eb_nature_48",
        "word": {
          "text": "beach",
          "cn": "金黄沙滩",
          "pic": "🏖️"
        },
        "grammar": {
          "pattern": "Build a sandcastle on [___].",
          "cn": "在金黄色的...上堆沙堡。",
          "tip": "捡贝壳踩沙粒听海浪唱歌！"
        },
        "sentence": {
          "full": "Build a sandcastle on the beach.",
          "cn": "在细软的金黄沙滩上挖隧道搭城堡。",
          "sceneTip": "戴着遮阳帽和小伙伴挖沙运水",
          "chunks": [
            "Build a sandcastle",
            "on the beach."
          ]
        }
      },
      {
        "id": "eb_nature_49",
        "word": {
          "text": "park",
          "cn": "城市公园",
          "pic": "🏕️"
        },
        "grammar": {
          "pattern": "Let's play in sunny [___]!",
          "cn": "我们去阳光洒满的...玩吧！",
          "tip": "跑步滑板踢球跳绳开心游玩！"
        },
        "sentence": {
          "full": "Let's play in the sunny park!",
          "cn": "周末阳光明媚，一家人去湿地公园野餐！",
          "sceneTip": "推着滑板车在公园林荫道飞驰",
          "chunks": [
            "Let's play in",
            "the sunny park!"
          ]
        }
      },
      {
        "id": "eb_nature_50",
        "word": {
          "text": "garden",
          "cn": "奶奶的花园",
          "pic": "🌷"
        },
        "grammar": {
          "pattern": "Butterflies fly in colorful [___].",
          "cn": "彩蝶飞舞在繁花似锦的...里。",
          "tip": "亲手播种向日葵静候丰收绽放！"
        },
        "sentence": {
          "full": "Butterflies fly in Grandma's garden.",
          "cn": "奶奶的小花园里种满月季花与小向日葵。",
          "sceneTip": "提着小水壶帮奶奶给花圃松土",
          "chunks": [
            "Butterflies fly in",
            "Grandma's garden."
          ]
        }
      }
    ]
  },
  {
    "topicId": "vehicle",
    "topicName": "出行人物",
    "icon": "🚌",
    "desc": "小汽车、公交车、红绿灯、学校、妈妈、医生等交通人物句型",
    "items": [
      {
        "id": "eb_vehicle_1",
        "word": {
          "text": "car",
          "cn": "小汽车",
          "pic": "🚗"
        },
        "grammar": {
          "pattern": "Beep-beep goes the fast [___]!",
          "cn": "嘀嘀！开得快的...跑得飞快！",
          "tip": "系好安全带，坐在后排安全座椅！"
        },
        "sentence": {
          "full": "Beep-beep goes the fast car!",
          "cn": "嘀嘀！红色小汽车在公路上平稳行驶。",
          "sceneTip": "坐进后排自己扣好儿童安全带",
          "chunks": [
            "Beep-beep goes",
            "the fast car!"
          ]
        }
      },
      {
        "id": "eb_vehicle_2",
        "word": {
          "text": "bus",
          "cn": "大公交车",
          "pic": "🚌"
        },
        "grammar": {
          "pattern": "Hop on the yellow school [___]!",
          "cn": "跳上黄色校车...去上学！",
          "tip": "排队上车前门上前门刷卡！"
        },
        "sentence": {
          "full": "Hop on the yellow school bus!",
          "cn": "排好队整齐走上黄色校车去上学。",
          "sceneTip": "在站台牵着妈妈手排队等公交",
          "chunks": [
            "Hop on the yellow",
            "school bus!"
          ]
        }
      },
      {
        "id": "eb_vehicle_3",
        "word": {
          "text": "subway",
          "cn": "高速地铁",
          "pic": "🚇"
        },
        "grammar": {
          "pattern": "Zoom! The speedy [___] under ground!",
          "cn": "嗖！地底下飞驰的...！",
          "tip": "快捷准时绿色出行穿梭城市！"
        },
        "sentence": {
          "full": "Zoom! The speedy subway under ground!",
          "cn": "地铁列车在隧道里飞驰，又快又平稳。",
          "sceneTip": "进站后站在黄色安全线内候车",
          "chunks": [
            "Zoom! The speedy subway",
            "under ground!"
          ]
        }
      },
      {
        "id": "eb_vehicle_4",
        "word": {
          "text": "taxi",
          "cn": "出租车",
          "pic": "🚕"
        },
        "grammar": {
          "pattern": "Wave to call a bright [___].",
          "cn": "招招手拦一辆亮黄色的...。",
          "tip": "出门着急乘出租安全送达目的地！"
        },
        "sentence": {
          "full": "Wave to call a bright taxi.",
          "cn": "站在路边挥挥手，叫一辆出租车。",
          "sceneTip": "下雨天出门拦一辆出租车避雨",
          "chunks": [
            "Wave to call",
            "a bright taxi."
          ]
        }
      },
      {
        "id": "eb_vehicle_5",
        "word": {
          "text": "train",
          "cn": "长长火车",
          "pic": "🚆"
        },
        "grammar": {
          "pattern": "Choo-choo! The long [___] travels far!",
          "cn": "呜呜呜！长长的...开向远方！",
          "tip": "铁轨延伸穿越田野山峦去旅游！"
        },
        "sentence": {
          "full": "Choo-choo! The long train travels far!",
          "cn": "呜呜呜！高铁列车飞快开向远方城市！",
          "sceneTip": "坐在列车车窗边看窗外原野后退",
          "chunks": [
            "Choo-choo! The long train",
            "travels far!"
          ]
        }
      },
      {
        "id": "eb_vehicle_6",
        "word": {
          "text": "airplane",
          "cn": "大飞机",
          "pic": "✈️"
        },
        "grammar": {
          "pattern": "Fly high, silver [___] in clouds!",
          "cn": "银色大...高高飞进云海！",
          "tip": "插上银色双翼飞往世界各地！"
        },
        "sentence": {
          "full": "Fly high, silver airplane in clouds!",
          "cn": "大飞机滑行起飞，穿入棉花糖云层。",
          "sceneTip": "仰望蓝天看客机划过长长白尾迹",
          "chunks": [
            "Fly high, silver airplane",
            "in clouds!"
          ]
        }
      },
      {
        "id": "eb_vehicle_7",
        "word": {
          "text": "ship",
          "cn": "远洋巨轮",
          "pic": "🚢"
        },
        "grammar": {
          "pattern": "The big [___] sails on deep ocean.",
          "cn": "巨大的客...在大海上航行。",
          "tip": "汽笛长鸣乘风破浪驶向彼岸！"
        },
        "sentence": {
          "full": "The big ship sails on ocean.",
          "cn": "巨轮拉响沉稳汽笛，在深蓝色大海航行。",
          "sceneTip": "在码头看巨大的远洋货轮卸集装箱",
          "chunks": [
            "The big ship",
            "sails on ocean."
          ]
        }
      },
      {
        "id": "eb_vehicle_8",
        "word": {
          "text": "boat",
          "cn": "小木船",
          "pic": "🛶"
        },
        "grammar": {
          "pattern": "Row, row, row your gentle [___].",
          "cn": "摇啊摇，划着你的轻巧小...。",
          "tip": "荡起双桨推开层层波浪！"
        },
        "sentence": {
          "full": "Row, row, row your gentle boat.",
          "cn": "划着轻快小木船，在荷花池里穿梭。",
          "sceneTip": "穿好救生衣泛舟公园湖心",
          "chunks": [
            "Row, row, row",
            "your gentle boat."
          ]
        }
      },
      {
        "id": "eb_vehicle_9",
        "word": {
          "text": "bike",
          "cn": "自行车",
          "pic": "🚲"
        },
        "grammar": {
          "pattern": "Ring-ring! Ride my little [___]!",
          "cn": "叮铃铃！骑上我的小...！",
          "tip": "戴好头盔护膝练习平衡感！"
        },
        "sentence": {
          "full": "Ring-ring! Ride my little bike!",
          "cn": "叮铃铃！戴上护具骑着小车转圈圈。",
          "sceneTip": "在小区空旷广场练习踩脚踏板",
          "chunks": [
            "Ring-ring! Ride",
            "my little bike!"
          ]
        }
      },
      {
        "id": "eb_vehicle_10",
        "word": {
          "text": "scooter",
          "cn": "滑板车",
          "pic": "🛴"
        },
        "grammar": {
          "pattern": "Kick and glide on my [___]!",
          "cn": "蹬一脚，踩着...滑得顺溜！",
          "tip": "右脚稳踩踏板左脚轻蹬加速！"
        },
        "sentence": {
          "full": "Kick and glide on my scooter!",
          "cn": "单脚轻快用力一蹬，滑板车向前滑行！",
          "sceneTip": "在平整水泥路面上轻快滑行",
          "chunks": [
            "Kick and glide",
            "on my scooter!"
          ]
        }
      },
      {
        "id": "eb_vehicle_11",
        "word": {
          "text": "police car",
          "cn": "巡逻警车",
          "pic": "🚓"
        },
        "grammar": {
          "pattern": "Wee-woo! The brave [___] patrols!",
          "cn": "呜哇呜哇！威风的...在巡逻！",
          "tip": "红蓝警灯闪耀保卫人民生命财产！"
        },
        "sentence": {
          "full": "Wee-woo! The brave police car patrols!",
          "cn": "呜哇呜哇！警车亮着警灯在街道巡逻。",
          "sceneTip": "看到警车开过由衷敬佩警察叔叔",
          "chunks": [
            "Wee-woo! The brave police car",
            "patrols!"
          ]
        }
      },
      {
        "id": "eb_vehicle_12",
        "word": {
          "text": "fire truck",
          "cn": "消防救援车",
          "pic": "🚒"
        },
        "grammar": {
          "pattern": "The red [___] rushes to help!",
          "cn": "红色的...火速赶往救援！",
          "tip": "高压水枪云梯救火英雄冲锋在前！"
        },
        "sentence": {
          "full": "Wee-woo! The red fire truck rushes to help!",
          "cn": "红色大消防车拉响警报，赶赴救援一线！",
          "sceneTip": "给呼啸而过的消防车主动让行",
          "chunks": [
            "Wee-woo! The red fire truck",
            "rushes to help!"
          ]
        }
      },
      {
        "id": "eb_vehicle_13",
        "word": {
          "text": "ambulance",
          "cn": "救护车",
          "pic": "🚑"
        },
        "grammar": {
          "pattern": "Make way for urgent [___]!",
          "cn": "为紧急运送病人的...让道！",
          "tip": "生命救护绿色通道分秒必争！"
        },
        "sentence": {
          "full": "Make way for the urgent ambulance!",
          "cn": "听到救护车鸣笛，所有车辆行人主动让道。",
          "sceneTip": "听到救护车呼啸而过心中默默祝福",
          "chunks": [
            "Make way for the",
            "urgent ambulance!"
          ]
        }
      },
      {
        "id": "eb_vehicle_14",
        "word": {
          "text": "truck",
          "cn": "大卡车",
          "pic": "🚚"
        },
        "grammar": {
          "pattern": "The heavy [___] carries big loads.",
          "cn": "厚实的大...运载重重货物。",
          "tip": "强劲马力运送生活物资跨越千里！"
        },
        "sentence": {
          "full": "The heavy truck carries big loads.",
          "cn": "八轮大卡车平稳运载着整车新鲜水果。",
          "sceneTip": "高速公路上看大卡车整齐前行",
          "chunks": [
            "The heavy truck",
            "carries big loads."
          ]
        }
      },
      {
        "id": "eb_vehicle_15",
        "word": {
          "text": "tractor",
          "cn": "绿色拖拉机",
          "pic": "🚜"
        },
        "grammar": {
          "pattern": "The green [___] helps on farm.",
          "cn": "绿油油的...在田间辛勤劳作。",
          "tip": "耕地播种收割农家好帮手！"
        },
        "sentence": {
          "full": "The green tractor helps on farm.",
          "cn": "绿色的拖拉机在广袤麦田里翻耕泥土。",
          "sceneTip": "看农田里拖拉机轰隆隆翻出新土",
          "chunks": [
            "The green tractor",
            "helps on farm."
          ]
        }
      },
      {
        "id": "eb_vehicle_16",
        "word": {
          "text": "traffic light",
          "cn": "红绿灯",
          "pic": "🚦"
        },
        "grammar": {
          "pattern": "Red light stop, green light [___]!",
          "cn": "红灯停下，绿灯...起来！",
          "tip": "红灯停绿灯行黄灯等一等！"
        },
        "sentence": {
          "full": "Red light stop, green light go!",
          "cn": "看到红灯站稳脚跟，绿灯亮起大步向前！",
          "sceneTip": "过马路抬头看红绿灯遵守交规",
          "chunks": [
            "Red light stop,",
            "green light go!"
          ]
        }
      },
      {
        "id": "eb_vehicle_17",
        "word": {
          "text": "crosswalk",
          "cn": "斑马线",
          "pic": "🦓"
        },
        "grammar": {
          "pattern": "Hold hands and cross on [___].",
          "cn": "手拉手走在黑白相间的...上。",
          "tip": "不横穿马路，走专用安全通道！"
        },
        "sentence": {
          "full": "Hold hands and cross on the crosswalk.",
          "cn": "小手牵着大人的大手，从斑马线过马路。",
          "sceneTip": "过街走斑马线左右观察看车辆",
          "chunks": [
            "Hold hands and cross",
            "on the crosswalk."
          ]
        }
      },
      {
        "id": "eb_vehicle_18",
        "word": {
          "text": "stop sign",
          "cn": "红色停步标志",
          "pic": "🛑"
        },
        "grammar": {
          "pattern": "Look at red [___] and freeze.",
          "cn": "看到八角形...立刻停下脚步。",
          "tip": "确认左右无车再安全慢行通过！"
        },
        "sentence": {
          "full": "Look at the red stop sign and freeze.",
          "cn": "路口看到八角形红色停步牌，停步观察。",
          "sceneTip": "在小区路口看到停步标志停下慢行",
          "chunks": [
            "Look at the red stop sign",
            "and freeze."
          ]
        }
      },
      {
        "id": "eb_vehicle_19",
        "word": {
          "text": "station",
          "cn": "公交车站",
          "pic": "🚉"
        },
        "grammar": {
          "pattern": "Wait politely at bus [___].",
          "cn": "在...前有秩序文明排队。",
          "tip": "前门上后门下尊老爱幼礼让座！"
        },
        "sentence": {
          "full": "Wait politely at the bus station.",
          "cn": "在公交站牌下文明排队，有序等车进站。",
          "sceneTip": "在站台长椅上耐心等候下一班车",
          "chunks": [
            "Wait politely at",
            "the bus station."
          ]
        }
      },
      {
        "id": "eb_vehicle_20",
        "word": {
          "text": "airport",
          "cn": "国际机场",
          "pic": "🛫"
        },
        "grammar": {
          "pattern": "Watch planes take off at [___].",
          "cn": "在...透明玻璃窗前看飞机起降。",
          "tip": "拖着行李箱准备开启探索世界旅程！"
        },
        "sentence": {
          "full": "Watch airplanes take off at the airport.",
          "cn": "站在机场大候机厅，看银白客机展翅升空。",
          "sceneTip": "去机场候机楼看客机滑行起飞",
          "chunks": [
            "Watch airplanes take off",
            "at the airport."
          ]
        }
      },
      {
        "id": "eb_vehicle_21",
        "word": {
          "text": "home",
          "cn": "温暖小家",
          "pic": "🏠"
        },
        "grammar": {
          "pattern": "Sweet, cozy [___] with mommy.",
          "cn": "有爸爸妈妈陪伴的温馨舒适...。",
          "tip": "世界上最安全幸福避风港湾！"
        },
        "sentence": {
          "full": "Sweet, cozy home with mommy and daddy.",
          "cn": "灯光暖洋洋，全家团聚的家最温馨。",
          "sceneTip": "放学推开家门大声喊爸爸妈妈我回来啦",
          "chunks": [
            "Sweet, cozy home",
            "with mommy and daddy."
          ]
        }
      },
      {
        "id": "eb_vehicle_22",
        "word": {
          "text": "school",
          "cn": "美丽学校",
          "pic": "🏫"
        },
        "grammar": {
          "pattern": "Good morning! Time for [___]!",
          "cn": "早上好！到...开启美好新一天！",
          "tip": "朗朗书声欢声笑语知识殿堂！"
        },
        "sentence": {
          "full": "Good morning! Time for school!",
          "cn": "清晨朝阳初升，背起书包开心去上学！",
          "sceneTip": "穿过校园林荫道向保安叔叔道声早",
          "chunks": [
            "Good morning!",
            "Time for school!"
          ]
        }
      },
      {
        "id": "eb_vehicle_23",
        "word": {
          "text": "kindergarten",
          "cn": "快乐幼儿园",
          "pic": "🚸"
        },
        "grammar": {
          "pattern": "I love my [___] friends!",
          "cn": "我喜欢...里的亲切小伙伴！",
          "tip": "滑滑梯做游戏学本领快乐成长！"
        },
        "sentence": {
          "full": "I love my happy kindergarten friends!",
          "cn": "在幼儿园和小伙伴一起堆积木做游戏。",
          "sceneTip": "在幼儿园班级圈里合唱儿歌",
          "chunks": [
            "I love my happy",
            "kindergarten friends!"
          ]
        }
      },
      {
        "id": "eb_vehicle_24",
        "word": {
          "text": "playground",
          "cn": "儿童游乐场",
          "pic": "🎠"
        },
        "grammar": {
          "pattern": "Let's play together at [___]!",
          "cn": "我们一起去室外...痛快玩耍吧！",
          "tip": "滑梯跷跷板攀爬架放飞童真！"
        },
        "sentence": {
          "full": "Let's play together at the playground!",
          "cn": "我们在游乐场的转椅上快乐旋转！",
          "sceneTip": "和小区同龄小朋友在游乐区奔跑",
          "chunks": [
            "Let's play together",
            "at the playground!"
          ]
        }
      },
      {
        "id": "eb_vehicle_25",
        "word": {
          "text": "supermarket",
          "cn": "生鲜超市",
          "pic": "🛒"
        },
        "grammar": {
          "pattern": "Push the cart in [___].",
          "cn": "在...里推着小购物车买菜。",
          "tip": "认识蔬菜水果比价格文明选购！"
        },
        "sentence": {
          "full": "Help push the cart in the supermarket.",
          "cn": "帮妈妈推着购物车，挑选新鲜水灵的水果。",
          "sceneTip": "在收银台前有序排队付账",
          "chunks": [
            "Help push the cart",
            "in the supermarket."
          ]
        }
      },
      {
        "id": "eb_vehicle_26",
        "word": {
          "text": "hospital",
          "cn": "友好医院",
          "pic": "🏥"
        },
        "grammar": {
          "pattern": "The kind doctor helps at [___].",
          "cn": "亲切白衣天使在...救死扶伤。",
          "tip": "量体温听肺部按时吃药早康复！"
        },
        "sentence": {
          "full": "The gentle doctor helps at the hospital.",
          "cn": "医生阿姨温柔地量体温，安抚生病宝宝。",
          "sceneTip": "感冒发烧听医生嘱咐多喝水休息",
          "chunks": [
            "The gentle doctor helps",
            "at the hospital."
          ]
        }
      },
      {
        "id": "eb_vehicle_27",
        "word": {
          "text": "zoo",
          "cn": "动物乐园",
          "pic": "🦁"
        },
        "grammar": {
          "pattern": "See monkeys and pandas at [___].",
          "cn": "在...里观赏长颈鹿与大老虎。",
          "tip": "爱护野生动物严禁私自乱投喂！"
        },
        "sentence": {
          "full": "See monkeys and pandas at the zoo.",
          "cn": "在野生动物园透过玻璃窗观察小熊猫玩耍。",
          "sceneTip": "手持动物地图逐个场馆打卡探索",
          "chunks": [
            "See monkeys and pandas",
            "at the zoo."
          ]
        }
      },
      {
        "id": "eb_vehicle_28",
        "word": {
          "text": "restaurant",
          "cn": "美味餐厅",
          "pic": "🍜"
        },
        "grammar": {
          "pattern": "Eat dumplings at [___].",
          "cn": "在...里品尝刚出锅的热饺子。",
          "tip": "餐桌礼仪不挑食安静享用美味！"
        },
        "sentence": {
          "full": "Eat yummy dumplings at the restaurant.",
          "cn": "周末全家在温馨餐厅品尝美味热腾腾饺子。",
          "sceneTip": "在餐馆坐在宝宝椅上自己用勺吃饭",
          "chunks": [
            "Eat yummy dumplings",
            "at the restaurant."
          ]
        }
      },
      {
        "id": "eb_vehicle_29",
        "word": {
          "text": "cinema",
          "cn": "少儿影院",
          "pic": "🍿"
        },
        "grammar": {
          "pattern": "Watch fun cartoons at [___].",
          "cn": "在...里看引人入胜的动画大片。",
          "tip": "戴好3D眼镜安静观影不喧哗！"
        },
        "sentence": {
          "full": "Watch fun cartoons at the cinema.",
          "cn": "抱一小桶爆米花，在影院看佩奇大电影。",
          "sceneTip": "关灯后戴上小眼镜安静沉浸看动画",
          "chunks": [
            "Watch fun cartoons",
            "at the cinema."
          ]
        }
      },
      {
        "id": "eb_vehicle_30",
        "word": {
          "text": "restroom",
          "cn": "整洁洗手间",
          "pic": "🚻"
        },
        "grammar": {
          "pattern": "May I go to [___], please?",
          "cn": "老师，请问我能去一下...吗？",
          "tip": "举手示意文明如厕便后冲水洗手！"
        },
        "sentence": {
          "full": "May I go to the restroom, teacher?",
          "cn": "有礼貌地举手询问老师：能去趟洗手间吗？",
          "sceneTip": "课堂上需要上厕所礼貌举手表达",
          "chunks": [
            "May I go to the restroom,",
            "teacher?"
          ]
        }
      },
      {
        "id": "eb_vehicle_31",
        "word": {
          "text": "room",
          "cn": "整洁小卧室",
          "pic": "🛋️"
        },
        "grammar": {
          "pattern": "Keep your little [___] tidy.",
          "cn": "把自己的小...收拾得井井有条。",
          "tip": "叠被子收画笔自己的事情自己做！"
        },
        "sentence": {
          "full": "Keep your little room tidy.",
          "cn": "每天早晨自觉把小床被子铺叠整齐。",
          "sceneTip": "把写字台上的绘本和画笔摆放端正",
          "chunks": [
            "Keep your little room",
            "tidy."
          ]
        }
      },
      {
        "id": "eb_vehicle_32",
        "word": {
          "text": "kitchen",
          "cn": "飘香厨房",
          "pic": "🍳"
        },
        "grammar": {
          "pattern": "Mom cooks in the [___].",
          "cn": "妈妈正在...做香气四溢的晚饭。",
          "tip": "注意安全远离火源刀具油烟锅！"
        },
        "sentence": {
          "full": "Mom is cooking yummy food in the kitchen.",
          "cn": "厨房飘出阵阵香气，妈妈正在精心熬骨汤。",
          "sceneTip": "闻到红烧排骨香气在门口探头期盼",
          "chunks": [
            "Mom is cooking yummy food",
            "in the kitchen."
          ]
        }
      },
      {
        "id": "eb_vehicle_33",
        "word": {
          "text": "father",
          "cn": "勇敢爸爸",
          "pic": "👨"
        },
        "grammar": {
          "pattern": "My brave [___] gives strong hugs.",
          "cn": "我勇敢坚强的...力大无穷！",
          "tip": "抗在肩头看高处像座伟岸大山！"
        },
        "sentence": {
          "full": "My brave father gives strong hugs.",
          "cn": "爸爸把我高高举过头顶，像飞在云朵上。",
          "sceneTip": "挽着爸爸粗壮有力的手臂散步",
          "chunks": [
            "My brave father",
            "gives strong hugs."
          ]
        }
      },
      {
        "id": "eb_vehicle_34",
        "word": {
          "text": "mother",
          "cn": "温柔妈妈",
          "pic": "👩"
        },
        "grammar": {
          "pattern": "My sweet [___] tells stories.",
          "cn": "我美丽温柔的...声线动听。",
          "tip": "一双巧手做羹汤睡前故事抚慰心灵！"
        },
        "sentence": {
          "full": "My sweet mother tells bedtime stories.",
          "cn": "妈妈坐在床头，轻声细语讲安徒生童话。",
          "sceneTip": "靠在妈妈怀里听温和睡前故事",
          "chunks": [
            "My sweet mother",
            "tells bedtime stories."
          ]
        }
      },
      {
        "id": "eb_vehicle_35",
        "word": {
          "text": "grandpa",
          "cn": "慈祥爷爷",
          "pic": "👴"
        },
        "grammar": {
          "pattern": "Walk with dear [___] in park.",
          "cn": "牵着亲爱的...在绿道悠闲散步。",
          "tip": "白发白胡须教下象棋写毛笔字！"
        },
        "sentence": {
          "full": "Walk with dear grandpa in garden.",
          "cn": "牵着爷爷满是老茧的温暖双手一起看荷花。",
          "sceneTip": "给下棋回家的爷爷端上一杯温茶",
          "chunks": [
            "Walk with dear grandpa",
            "in garden."
          ]
        }
      },
      {
        "id": "eb_vehicle_36",
        "word": {
          "text": "grandma",
          "cn": "亲切奶奶",
          "pic": "👵"
        },
        "grammar": {
          "pattern": "Sweet [___] bakes cookies.",
          "cn": "慈祥可亲的...烤出酥脆小饼干。",
          "tip": "缝补纽扣织毛衣脸上堆满慈祥笑容！"
        },
        "sentence": {
          "full": "Sweet grandma bakes delicious cookies.",
          "cn": "奶奶从烤箱端出香气扑鼻的蔓越莓饼干。",
          "sceneTip": "帮摘下老花镜的奶奶捶捶后背",
          "chunks": [
            "Sweet grandma",
            "bakes delicious cookies."
          ]
        }
      },
      {
        "id": "eb_vehicle_37",
        "word": {
          "text": "brother",
          "cn": "阳光兄弟",
          "pic": "👦"
        },
        "grammar": {
          "pattern": "Share toy blocks with [___].",
          "cn": "和...一起拼搭双层车库模型。",
          "tip": "手足情深共同成长互相帮助！"
        },
        "sentence": {
          "full": "Share toy blocks with my brother.",
          "cn": "和兄弟一起把彩色积木搭到天花板那么高。",
          "sceneTip": "和小弟弟一起玩遥控赛车竞速",
          "chunks": [
            "Share toy blocks",
            "with my brother."
          ]
        }
      },
      {
        "id": "eb_vehicle_38",
        "word": {
          "text": "sister",
          "cn": "懂事姐妹",
          "pic": "👧"
        },
        "grammar": {
          "pattern": "Sing songs with my dear [___].",
          "cn": "和亲爱的...手拉手合唱童谣。",
          "tip": "分享漂亮头绳编小辫子过家家！"
        },
        "sentence": {
          "full": "Sing songs with my dear sister.",
          "cn": "和姐妹在穿衣镜前一起跳欢快的新舞蹈。",
          "sceneTip": "给小妹妹戴上漂亮的蝴蝶结发夹",
          "chunks": [
            "Sing songs with",
            "my dear sister."
          ]
        }
      },
      {
        "id": "eb_vehicle_39",
        "word": {
          "text": "baby",
          "cn": "可爱婴儿",
          "pic": "👶"
        },
        "grammar": {
          "pattern": "Shh! The cute [___] is sleeping.",
          "cn": "嘘！襁褓中的...正在甜美熟睡。",
          "tip": "轻手轻脚不吵醒小婴儿的梦境！"
        },
        "sentence": {
          "full": "Shh! The cute baby is sleeping.",
          "cn": "轻手轻脚走过婴儿床，小婴儿在咂嘴睡觉。",
          "sceneTip": "悄悄踮起脚尖不吵醒熟睡的小宝宝",
          "chunks": [
            "Shh! The cute baby",
            "is sleeping."
          ]
        }
      },
      {
        "id": "eb_vehicle_40",
        "word": {
          "text": "friend",
          "cn": "亲密好友",
          "pic": "🤝"
        },
        "grammar": {
          "pattern": "You are my best [___] forever!",
          "cn": "你是我一辈子最好的知心...！",
          "tip": "有福同享有玩具一起玩难过互相安慰！"
        },
        "sentence": {
          "full": "You are my best friend forever!",
          "cn": "伸出小拇指拉钩：我们是永远的好朋友！",
          "sceneTip": "和好朋友并肩坐秋千分享小饼干",
          "chunks": [
            "You are my best friend",
            "forever!"
          ]
        }
      },
      {
        "id": "eb_vehicle_41",
        "word": {
          "text": "teacher",
          "cn": "敬爱老师",
          "pic": "👩‍🏫"
        },
        "grammar": {
          "pattern": "Listen to kind [___] in class.",
          "cn": "在课堂上全神贯注听...讲课。",
          "tip": "传道授业解惑像园丁浇灌幼苗成长！"
        },
        "sentence": {
          "full": "Listen to kind teacher in class.",
          "cn": "目光追随讲台上笑容可掬的带班老师。",
          "sceneTip": "遇到不懂的问题主动举手问老师",
          "chunks": [
            "Listen to kind teacher",
            "in class."
          ]
        }
      },
      {
        "id": "eb_vehicle_42",
        "word": {
          "text": "doctor",
          "cn": "崇高医生",
          "pic": "👨‍⚕️"
        },
        "grammar": {
          "pattern": "The kind [___] checks heartbeat.",
          "cn": "仁心仁术的...仔细听心音。",
          "tip": "战胜病魔守护千家万户身体安康！"
        },
        "sentence": {
          "full": "The kind doctor checks my heartbeat.",
          "cn": "医生戴着听诊器，认真倾听胸膛扑通心跳。",
          "sceneTip": "不怕吃药打针听从医生叔叔建议",
          "chunks": [
            "The kind doctor",
            "checks my heartbeat."
          ]
        }
      },
      {
        "id": "eb_vehicle_43",
        "word": {
          "text": "nurse",
          "cn": "白衣护士",
          "pic": "👩‍⚕️"
        },
        "grammar": {
          "pattern": "The gentle [___] puts on band-aid.",
          "cn": "细致耐心的...轻柔贴创口贴。",
          "tip": "量血压测体温轻声细语抚平恐惧！"
        },
        "sentence": {
          "full": "The gentle nurse puts on a band-aid.",
          "cn": "护士阿姨动作轻柔，给擦伤贴上海绵创口贴。",
          "sceneTip": "换药时护士阿姨夸我真勇敢",
          "chunks": [
            "The gentle nurse",
            "puts on a band-aid."
          ]
        }
      },
      {
        "id": "eb_vehicle_44",
        "word": {
          "text": "firefighter",
          "cn": "逆行消防员",
          "pic": "🧑‍🚒"
        },
        "grammar": {
          "pattern": "Brave [___] puts out big fire.",
          "cn": "英勇无畏的...奋勇扑灭火灾。",
          "tip": "穿厚重橙色战斗服随时准备出击！"
        },
        "sentence": {
          "full": "Brave firefighter puts out big fire.",
          "cn": "消防员叔叔手握高压水枪，勇敢逆行扑灭大火。",
          "sceneTip": "向鸣笛飞驰的红色消防车敬礼致意",
          "chunks": [
            "Brave firefighter",
            "puts out big fire."
          ]
        }
      },
      {
        "id": "eb_vehicle_45",
        "word": {
          "text": "police officer",
          "cn": "正义警察",
          "pic": "👮"
        },
        "grammar": {
          "pattern": "Ask [___] for help when lost.",
          "cn": "遇险或走失向穿警服的...求助。",
          "tip": "维持社会秩序震慑坏人保护安全！"
        },
        "sentence": {
          "full": "Ask the police officer for help when lost.",
          "cn": "万一找不到家人，立即向穿制服的警察求援。",
          "sceneTip": "迷路时在原地站稳找巡逻民警求助",
          "chunks": [
            "Ask the police officer",
            "for help when lost."
          ]
        }
      },
      {
        "id": "eb_vehicle_46",
        "word": {
          "text": "chef",
          "cn": "金牌大厨",
          "pic": "👨‍🍳"
        },
        "grammar": {
          "pattern": "The tall-hat [___] cooks meals.",
          "cn": "戴着高高白帽子的...掌勺烹饪。",
          "tip": "煎炒烹炸做出色香味俱全的大餐！"
        },
        "sentence": {
          "full": "The tall-hat chef cooks delicious meals.",
          "cn": "大厨颠动大炒锅，炒出香味扑鼻的扬州炒饭。",
          "sceneTip": "看餐厅开放厨房里厨师利落炒菜",
          "chunks": [
            "The tall-hat chef",
            "cooks delicious meals."
          ]
        }
      },
      {
        "id": "eb_vehicle_47",
        "word": {
          "text": "pilot",
          "cn": "帅气飞行员",
          "pic": "🧑‍✈️"
        },
        "grammar": {
          "pattern": "The cool [___] flies across sky.",
          "cn": "制服笔挺的...驾驶客机翱翔。",
          "tip": "操控精密仪表将乘客平稳送达彼岸！"
        },
        "sentence": {
          "full": "The cool pilot flies across sky.",
          "cn": "帅气的机长在驾驶舱沉着操控大型客机。",
          "sceneTip": "登机时向驾驶室里的飞行员挥手",
          "chunks": [
            "The cool pilot",
            "flies across sky."
          ]
        }
      },
      {
        "id": "eb_vehicle_48",
        "word": {
          "text": "farmer",
          "cn": "辛勤农夫",
          "pic": "👨‍🌾"
        },
        "grammar": {
          "pattern": "The [___] grows rice and fruit.",
          "cn": "面朝黄土背朝天的...耕耘沃土。",
          "tip": "谁知盘中餐粒粒皆辛苦珍惜粮食！"
        },
        "sentence": {
          "full": "The hardworking farmer grows rice and fruit.",
          "cn": "辛勤的农民伯伯在水田里插秧，汗流浃背。",
          "sceneTip": "每一粒大米都凝结着农民伯伯汗水",
          "chunks": [
            "The hardworking farmer",
            "grows rice and fruit."
          ]
        }
      },
      {
        "id": "eb_vehicle_49",
        "word": {
          "text": "postman",
          "cn": "绿衣邮差",
          "pic": "📮"
        },
        "grammar": {
          "pattern": "Friendly [___] brings letters.",
          "cn": "骑着绿色自行车的...投递信件。",
          "tip": "无论严寒酷暑穿街走巷传递讯息！"
        },
        "sentence": {
          "full": "Friendly postman brings letters to door.",
          "cn": "绿衣邮递员叔叔把远方亲人的明信片送上门。",
          "sceneTip": "从信箱里取出装有贺卡的厚信封",
          "chunks": [
            "Friendly postman",
            "brings letters to door."
          ]
        }
      },
      {
        "id": "eb_vehicle_50",
        "word": {
          "text": "cleaner",
          "cn": "城市美容师",
          "pic": "🧹"
        },
        "grammar": {
          "pattern": "Hardworking [___] keeps road clean.",
          "cn": "起早贪黑的...让街道纤尘不染。",
          "tip": "挥动大扫帚默默装点整洁城市市容！"
        },
        "sentence": {
          "full": "Hardworking cleaner keeps streets clean.",
          "cn": "环卫工人黎明就走上街头，把落叶打扫干净。",
          "sceneTip": "不乱扔废纸垃圾尊重清洁工劳动",
          "chunks": [
            "Hardworking cleaner",
            "keeps streets clean."
          ]
        }
      }
    ]
  },
  {
    "topicId": "action",
    "topicName": "动作社交",
    "icon": "🏃",
    "desc": "走、跑、跳、洗手、拥抱、开心、谢谢、晚安等社交礼貌句型",
    "items": [
      {
        "id": "eb_action_1",
        "word": {
          "text": "walk",
          "cn": "散步漫步",
          "pic": "🚶"
        },
        "grammar": {
          "pattern": "Let's [___] to park together.",
          "cn": "我们手牵手一起...去公园。",
          "tip": "饭后百步走活到九十九强身健体！"
        },
        "sentence": {
          "full": "Let's walk to the park together.",
          "cn": "晚饭后牵着爸爸妈妈的手，散步去小公园。",
          "sceneTip": "呼吸傍晚凉爽空气沿着绿道漫步",
          "chunks": [
            "Let's walk to the park",
            "together."
          ]
        }
      },
      {
        "id": "eb_action_2",
        "word": {
          "text": "run",
          "cn": "加速奔跑",
          "pic": "🏃"
        },
        "grammar": {
          "pattern": "The puppy can [___] fast.",
          "cn": "活泼的小狗在草地...得飞快。",
          "tip": "张开双臂像小飞机一样逆风飞驰！"
        },
        "sentence": {
          "full": "Look! The puppy can run so fast!",
          "cn": "快看！小狗狗撒开四条小腿在草地上飞跑！",
          "sceneTip": "在开阔大草坪上开怀追逐奔跑",
          "chunks": [
            "Look! The puppy",
            "can run so fast!"
          ]
        }
      },
      {
        "id": "eb_action_3",
        "word": {
          "text": "jump",
          "cn": "原地跳跃",
          "pic": "🦘"
        },
        "grammar": {
          "pattern": "Can you [___] as high as bunny?",
          "cn": "你能像小白兔一样...得高高的吗？",
          "tip": "双脚蹬地腾空而起锻炼弹跳力！"
        },
        "sentence": {
          "full": "Can you jump as high as a bunny?",
          "cn": "双腿用力一蹬，看谁跳得像小白兔一样高！",
          "sceneTip": "在跳格子的方块里灵活双脚跳",
          "chunks": [
            "Can you jump",
            "as high as a bunny?"
          ]
        }
      },
      {
        "id": "eb_action_4",
        "word": {
          "text": "climb",
          "cn": "稳步攀爬",
          "pic": "🧗"
        },
        "grammar": {
          "pattern": "Safely [___] up ladder.",
          "cn": "手抓紧脚踩稳，安全...上滑梯。",
          "tip": "双手紧握扶梯一步一步踩踏结实！"
        },
        "sentence": {
          "full": "Safely climb up the playground ladder.",
          "cn": "双手握牢两边铁栏杆，一步一步稳当攀登。",
          "sceneTip": "在攀爬架前专注手脚并用往上登",
          "chunks": [
            "Safely climb up",
            "the playground ladder."
          ]
        }
      },
      {
        "id": "eb_action_5",
        "word": {
          "text": "sit",
          "cn": "端正坐下",
          "pic": "🪑"
        },
        "grammar": {
          "pattern": "Please [___] down quietly.",
          "cn": "请在自己的小椅子上规矩...好。",
          "tip": "小手放膝盖抬头挺胸听讲好习惯！"
        },
        "sentence": {
          "full": "Please sit down quietly on your chair.",
          "cn": "双手平放膝头，在小椅子上安静端正坐好。",
          "sceneTip": "听到集合口令立刻找椅子坐好",
          "chunks": [
            "Please sit down quietly",
            "on your chair."
          ]
        }
      },
      {
        "id": "eb_action_6",
        "word": {
          "text": "stand",
          "cn": "笔直站立",
          "pic": "🧍"
        },
        "grammar": {
          "pattern": "[___] up tall like soldier!",
          "cn": "像小士兵一样笔直挺拔地...立！",
          "tip": "昂首挺胸目视前方英姿飒爽！"
        },
        "sentence": {
          "full": "Stand up tall like a soldier!",
          "cn": "双腿并拢双手贴紧裤缝，笔直如青松！",
          "sceneTip": "升国旗奏国歌时肃立行注目礼",
          "chunks": [
            "Stand up tall",
            "like a soldier!"
          ]
        }
      },
      {
        "id": "eb_action_7",
        "word": {
          "text": "sleep",
          "cn": "甜美安睡",
          "pic": "🛌"
        },
        "grammar": {
          "pattern": "Close eyes and [___] well.",
          "cn": "闭上疲倦双眼，安安心心...个好觉。",
          "tip": "充足睡眠才能快快长高长大长聪明！"
        },
        "sentence": {
          "full": "Close your eyes and sleep well, sweetie.",
          "cn": "拉好温暖小花被，闭上双眼做个甜蜜好梦。",
          "sceneTip": "听完轻柔催眠曲沉沉进入梦乡",
          "chunks": [
            "Close your eyes",
            "and sleep well, sweetie."
          ]
        }
      },
      {
        "id": "eb_action_8",
        "word": {
          "text": "wake",
          "cn": "清晨醒来",
          "pic": "🌅"
        },
        "grammar": {
          "pattern": "[___] up, sun is shining!",
          "cn": "小懒虫快快...，太阳公公照屁股啦！",
          "tip": "伸个大懒腰迎接朝气蓬勃新一天！"
        },
        "sentence": {
          "full": "Wake up, sleepy head, sun is shining!",
          "cn": "快揉揉眼睛醒醒神，太阳公公已经升起啦！",
          "sceneTip": "闹钟欢快响起一骨碌爬起床",
          "chunks": [
            "Wake up, sleepy head,",
            "sun is shining!"
          ]
        }
      },
      {
        "id": "eb_action_9",
        "word": {
          "text": "look",
          "cn": "极目远眺",
          "pic": "👀"
        },
        "grammar": {
          "pattern": "[___] at colorful butterfly!",
          "cn": "快...那只翩翩起舞的花蝴蝶！",
          "tip": "用敏锐眼睛发现大自然无穷乐趣！"
        },
        "sentence": {
          "full": "Look at that colorful butterfly!",
          "cn": "伸出小手指引大家看那只展翅的彩蝶！",
          "sceneTip": "在万花丛中惊喜发现罕见花纹",
          "chunks": [
            "Look at that",
            "colorful butterfly!"
          ]
        }
      },
      {
        "id": "eb_action_10",
        "word": {
          "text": "listen",
          "cn": "竖耳倾听",
          "pic": "👂"
        },
        "grammar": {
          "pattern": "[___] to sweet bird singing.",
          "cn": "屏住呼吸，静心...小鸟婉转歌唱。",
          "tip": "听风声雨声树叶沙沙声世界好动听！"
        },
        "sentence": {
          "full": "Listen to the sweet bird singing.",
          "cn": "闭上小嘴巴竖起两只耳朵，听黄鹂鸣翠柳。",
          "sceneTip": "在静谧树林里辨识不同鸟鸣",
          "chunks": [
            "Listen to the",
            "sweet bird singing."
          ]
        }
      },
      {
        "id": "eb_action_11",
        "word": {
          "text": "smell",
          "cn": "轻嗅香气",
          "pic": "👃"
        },
        "grammar": {
          "pattern": "[___] the fresh sweet flowers!",
          "cn": "深深吸气，...一朵朵盛开百花的芬芳。",
          "tip": "春天郁金香夏天栀子花秋天金桂飘香！"
        },
        "sentence": {
          "full": "Smell the fresh sweet flowers!",
          "cn": "把小鼻子凑近花蕊，深深嗅吸纯净香气。",
          "sceneTip": "走过盛放的茉莉花丛陶醉深呼吸",
          "chunks": [
            "Smell the fresh",
            "sweet flowers!"
          ]
        }
      },
      {
        "id": "eb_action_12",
        "word": {
          "text": "taste",
          "cn": "品尝美味",
          "pic": "👅"
        },
        "grammar": {
          "pattern": "[___] this sweet strawberry!",
          "cn": "轻轻咬一口，...鲜红多汁草莓的甘甜。",
          "tip": "酸甜可口慢慢咀嚼回味无穷！"
        },
        "sentence": {
          "full": "Taste this sweet, juicy strawberry!",
          "cn": "咬下一半草莓，品尝满口四溢的鲜甜果汁。",
          "sceneTip": "品尝刚出锅的小点心赞叹美味",
          "chunks": [
            "Taste this sweet,",
            "juicy strawberry!"
          ]
        }
      },
      {
        "id": "eb_action_13",
        "word": {
          "text": "touch",
          "cn": "温柔抚摸",
          "pic": "🖐️"
        },
        "grammar": {
          "pattern": "Gently [___] puppy's fur.",
          "cn": "动作轻柔，伸手...小柯基柔软的皮毛。",
          "tip": "对小动物温柔以待不拉扯尾巴！"
        },
        "sentence": {
          "full": "Gently touch the puppy's soft fur.",
          "cn": "平伸出手掌让小狗嗅一嗅，再温柔抚摸背部。",
          "sceneTip": "和小动物互动前先轻抚额头示好",
          "chunks": [
            "Gently touch the",
            "puppy's soft fur."
          ]
        }
      },
      {
        "id": "eb_action_14",
        "word": {
          "text": "eat",
          "cn": "细嚼慢咽",
          "pic": "🥣"
        },
        "grammar": {
          "pattern": "[___] slowly, chew food well.",
          "cn": "一口一口慢慢...，不挑食身体健壮。",
          "tip": "细嚼慢咽保护肠胃不狼吞虎咽！"
        },
        "sentence": {
          "full": "Eat slowly, chew your food well.",
          "cn": "小口进食细嚼慢咽，营养全面吸收身体好。",
          "sceneTip": "每口饭咀嚼二十下咽下好习惯",
          "chunks": [
            "Eat slowly,",
            "chew your food well."
          ]
        }
      },
      {
        "id": "eb_action_15",
        "word": {
          "text": "drink",
          "cn": "补充水分",
          "pic": "🥤"
        },
        "grammar": {
          "pattern": "[___] warm water every day.",
          "cn": "养成定时...充足温开水的好习惯。",
          "tip": "水是生命之源促进新陈代谢排毒素！"
        },
        "sentence": {
          "full": "Drink warm water every day.",
          "cn": "运动出汗后，小口慢饮一杯暖洋洋的温水。",
          "sceneTip": "大课间跑步后拿出水壶小口补水",
          "chunks": [
            "Drink warm water",
            "every day."
          ]
        }
      },
      {
        "id": "eb_action_16",
        "word": {
          "text": "sing",
          "cn": "放声歌唱",
          "pic": "🎶"
        },
        "grammar": {
          "pattern": "[___] an ABC song with me!",
          "cn": "扬起清脆童音，跟我一起齐声...儿歌！",
          "tip": "快乐音符流淌洋溢童年无限快乐！"
        },
        "sentence": {
          "full": "Sing an ABC song with me!",
          "cn": "拍起双手昂首挺胸，合唱旋律动听的字母歌！",
          "sceneTip": "在班级合唱汇演中大声欢唱",
          "chunks": [
            "Sing an ABC song",
            "with me!"
          ]
        }
      },
      {
        "id": "eb_action_17",
        "word": {
          "text": "dance",
          "cn": "起舞翩翩",
          "pic": "💃"
        },
        "grammar": {
          "pattern": "Spin and [___] with rhythm!",
          "cn": "跟着节拍转个圈，欢快迈步...起来！",
          "tip": "舒展形体律动节奏像只快乐小天鹅！"
        },
        "sentence": {
          "full": "Spin around and dance with rhythm!",
          "cn": "脚尖轻点旋转起舞，裙角荡漾起动人涟漪。",
          "sceneTip": "随欢快早操音乐踏步拍掌做动作",
          "chunks": [
            "Spin around and dance",
            "with rhythm!"
          ]
        }
      },
      {
        "id": "eb_action_18",
        "word": {
          "text": "draw",
          "cn": "挥毫涂鸦",
          "pic": "🎨"
        },
        "grammar": {
          "pattern": "[___] a happy smiling face!",
          "cn": "拿起五彩画笔，在白纸上...张灿烂笑脸！",
          "tip": "点线面色彩交融绘出心中七彩梦想！"
        },
        "sentence": {
          "full": "Draw a happy smiling face!",
          "cn": "红黄蓝三原色涂抹，画下一幅全家幸福像。",
          "sceneTip": "在图画纸上画出彩色太阳和房子",
          "chunks": [
            "Draw a happy",
            "smiling face!"
          ]
        }
      },
      {
        "id": "eb_action_19",
        "word": {
          "text": "play",
          "cn": "尽情玩乐",
          "pic": "⚽"
        },
        "grammar": {
          "pattern": "Let's [___] hide-and-seek!",
          "cn": "大家一起来...捉迷藏的小游戏吧！",
          "tip": "遵守游戏规则输得起赢得漂亮好伙伴！"
        },
        "sentence": {
          "full": "Let's play hide-and-seek together!",
          "cn": "倒数十个数闭上双眼，我们来玩捉迷藏！",
          "sceneTip": "在树丛后和假山旁快乐嬉闹",
          "chunks": [
            "Let's play hide-and-seek",
            "together!"
          ]
        }
      },
      {
        "id": "eb_action_20",
        "word": {
          "text": "laugh",
          "cn": "开怀大笑",
          "pic": "😄"
        },
        "grammar": {
          "pattern": "Funny cartoon makes us [___]!",
          "cn": "滑稽幽默的桥段逗得我们合不拢嘴直...！",
          "tip": "笑一笑十年少心胸宽广阳光灿烂！"
        },
        "sentence": {
          "full": "Funny cartoon makes us laugh loud!",
          "cn": "小丑打喷嚏掉帽子的滑稽动作，逗得全场大笑。",
          "sceneTip": "和小伙伴看到滑稽图画笑作一团",
          "chunks": [
            "Funny cartoon makes us",
            "laugh loud!"
          ]
        }
      },
      {
        "id": "eb_action_21",
        "word": {
          "text": "cry",
          "cn": "抚慰哭泣",
          "pic": "😭"
        },
        "grammar": {
          "pattern": "Don't [___], mommy is here.",
          "cn": "擦干泪水别...啦，最爱你的妈妈就在身旁。",
          "tip": "接纳负面情绪倾诉委屈勇敢排解！"
        },
        "sentence": {
          "full": "Don't cry, little darling, mommy is here.",
          "cn": "温暖臂弯轻轻摇晃：别哭啦，有妈妈保护你。",
          "sceneTip": "情绪受委屈时扑进大人怀里擦泪",
          "chunks": [
            "Don't cry, little darling,",
            "mommy is here."
          ]
        }
      },
      {
        "id": "eb_action_22",
        "word": {
          "text": "hug",
          "cn": "深情拥抱",
          "pic": "🫂"
        },
        "grammar": {
          "pattern": "Give mommy a warm [___]!",
          "cn": "张开双臂，给辛劳的妈妈一个大大的...！",
          "tip": "肢体接触传递最纯粹深厚的人间温情！"
        },
        "sentence": {
          "full": "Give mommy a big warm hug!",
          "cn": "双手紧紧环抱妈妈脖颈，小脸贴在肩膀上。",
          "sceneTip": "放学见面奔向妈妈张开双臂扑怀",
          "chunks": [
            "Give mommy a big",
            "warm hug!"
          ]
        }
      },
      {
        "id": "eb_action_23",
        "word": {
          "text": "kiss",
          "cn": "温馨飞吻",
          "pic": "💋"
        },
        "grammar": {
          "pattern": "Blow a sweet [___] to daddy.",
          "cn": "手指按唇轻轻一吹，给上班的爸爸送个...！",
          "tip": "甜蜜仪式感表达挂念与浓浓爱意！"
        },
        "sentence": {
          "full": "Blow a sweet kiss to daddy.",
          "cn": "站在玄关摇晃小手，送给出门上班的爸爸飞吻。",
          "sceneTip": "向隔窗道别的长辈吹出爱心飞吻",
          "chunks": [
            "Blow a sweet kiss",
            "to daddy."
          ]
        }
      },
      {
        "id": "eb_action_24",
        "word": {
          "text": "speak",
          "cn": "清晰表达",
          "pic": "🗣️"
        },
        "grammar": {
          "pattern": "[___] clearly and politely.",
          "cn": "大大方方有礼貌地...出自己的心声。",
          "tip": "吐字清晰语句连贯眼睛看着对方交流！"
        },
        "sentence": {
          "full": "Speak clearly and politely.",
          "cn": "抬起头看着对方的眼睛，清楚说出礼貌用语。",
          "sceneTip": "在众人面前勇敢表达自己的愿望",
          "chunks": [
            "Speak clearly",
            "and politely."
          ]
        }
      },
      {
        "id": "eb_action_25",
        "word": {
          "text": "read",
          "cn": "博览群书",
          "pic": "📖"
        },
        "grammar": {
          "pattern": "[___] a picture book together.",
          "cn": "坐在地垫上，和好朋友一起静心...生动绘本。",
          "tip": "开卷有益徜徉故事海洋丰富认知视野！"
        },
        "sentence": {
          "full": "Read a fun picture book together.",
          "cn": "手指点着图画书上的文字，一字一句认真跟读。",
          "sceneTip": "午休后自选一本喜欢的立体故事书",
          "chunks": [
            "Read a fun picture book",
            "together."
          ]
        }
      },
      {
        "id": "eb_action_26",
        "word": {
          "text": "write",
          "cn": "一笔一划",
          "pic": "✏️"
        },
        "grammar": {
          "pattern": "[___] your own little name.",
          "cn": "握紧铅笔，端端正正...下自己的名字。",
          "tip": "横平竖直结构工整从小练就一手好字！"
        },
        "sentence": {
          "full": "Write your own little name.",
          "cn": "一笔一划在作业本封面写下工工整整的姓名。",
          "sceneTip": "在画作右下角署上自己的英文名",
          "chunks": [
            "Write your own",
            "little name."
          ]
        }
      },
      {
        "id": "eb_action_27",
        "word": {
          "text": "help",
          "cn": "热心相助",
          "pic": "🆘"
        },
        "grammar": {
          "pattern": "Can you [___] me clean table?",
          "cn": "你能伸出援手...我把桌子收拾干净吗？",
          "tip": "助人为乐赠人玫瑰手有余香好品格！"
        },
        "sentence": {
          "full": "Can you help me clean the table??",
          "cn": "热心地帮阿姨分发点心盘，端正摆好小椅子。",
          "sceneTip": "看到同学散落一地积木主动蹲下帮捡",
          "chunks": [
            "Can you help me",
            "clean the table?"
          ]
        }
      },
      {
        "id": "eb_action_28",
        "word": {
          "text": "give",
          "cn": "乐于给予",
          "pic": "🎁"
        },
        "grammar": {
          "pattern": "[___] your friend high five!",
          "cn": "击掌相庆，...你并肩作战的战友掌声！",
          "tip": "学会分享学会给予赢得更多真诚友谊！"
        },
        "sentence": {
          "full": "Give your friend a high five!",
          "cn": "举起右手啪地击掌：我们合作搭成大桥真棒！",
          "sceneTip": "挑战拼图成功后跟伙伴击掌庆祝",
          "chunks": [
            "Give your friend",
            "a high five!"
          ]
        }
      },
      {
        "id": "eb_action_29",
        "word": {
          "text": "take",
          "cn": "从容拿取",
          "pic": "🤲"
        },
        "grammar": {
          "pattern": "[___] time, be patient.",
          "cn": "循序渐进不争抢，从从容容耐心...取。",
          "tip": "排队有序先来后到温良恭俭让！"
        },
        "sentence": {
          "full": "Take your time, be patient.",
          "cn": "不推不挤遵守秩序，轮到自己再双手接过物品。",
          "sceneTip": "在自助餐台前耐心排队按需取食",
          "chunks": [
            "Take your time,",
            "be patient."
          ]
        }
      },
      {
        "id": "eb_action_30",
        "word": {
          "text": "wash",
          "cn": "洗净尘埃",
          "pic": "🧼"
        },
        "grammar": {
          "pattern": "[___] hands with soap.",
          "cn": "抹上芬芳肥皂，七步洗手法...净小手。",
          "tip": "内外交弓大立腕把病菌彻底冲洗掉！"
        },
        "sentence": {
          "full": "Wash your hands with bubbly soap.",
          "cn": "用流水把肥皂泡沫彻底冲净，手心手背干爽。",
          "sceneTip": "户外玩泥巴后在水龙头前揉搓指缝",
          "chunks": [
            "Wash your hands",
            "with bubbly soap."
          ]
        }
      },
      {
        "id": "eb_action_31",
        "word": {
          "text": "clean",
          "cn": "收纳整齐",
          "pic": "✨"
        },
        "grammar": {
          "pattern": "Help [___] up your toys.",
          "cn": "玩过之后主动把所有积木画笔...理归位。",
          "tip": "自己的玩具自己管井然有序不乱丢！"
        },
        "sentence": {
          "full": "Help clean up your toys after playing.",
          "cn": "把散落的积木和轨道车整齐分门别类收纳。",
          "sceneTip": "游戏时间结束听到铃声自觉归拢玩具",
          "chunks": [
            "Help clean up your toys",
            "after playing."
          ]
        }
      },
      {
        "id": "eb_action_32",
        "word": {
          "text": "open",
          "cn": "敞开胸怀",
          "pic": "🚪"
        },
        "grammar": {
          "pattern": "[___] the door for grandpa.",
          "cn": "懂礼貌双手推...房门让老人家先行。",
          "tip": "尊老爱幼细节展现中华传统美德！"
        },
        "sentence": {
          "full": "Open the door for grandpa, please.",
          "cn": "懂事地帮拎重物的长辈推开大门，礼让先行。",
          "sceneTip": "进单元门时侧身双手扶门让长辈先过",
          "chunks": [
            "Open the door for grandpa,",
            "please."
          ]
        }
      },
      {
        "id": "eb_action_33",
        "word": {
          "text": "close",
          "cn": "严实关闭",
          "pic": "🔒"
        },
        "grammar": {
          "pattern": "[___] fridge door tight.",
          "cn": "拿好酸奶记得把冰箱保鲜室...紧闭。",
          "tip": "随手关门关窗节约能源防蚊蝇！"
        },
        "sentence": {
          "full": "Close the fridge door tight.",
          "cn": "确认冰箱门严丝合缝关紧，发出清脆吸附声。",
          "sceneTip": "离开房间随手轻合房门不让冷气外泄",
          "chunks": [
            "Close the fridge door",
            "tight."
          ]
        }
      },
      {
        "id": "eb_action_34",
        "word": {
          "text": "stop",
          "cn": "戛然而止",
          "pic": "🛑"
        },
        "grammar": {
          "pattern": "[___]! Wait for light change.",
          "cn": "红灯亮起原地...步，确保百分百安全！",
          "tip": "一慢二看三通过宁停三分不抢一秒！"
        },
        "sentence": {
          "full": "Stop! Wait for the red light to change.",
          "cn": "脚踩安全黄线停稳，耐心注视倒计时转绿。",
          "sceneTip": "路口听到转弯鸣笛立刻收住脚步观察",
          "chunks": [
            "Stop! Wait for the",
            "red light to change."
          ]
        }
      },
      {
        "id": "eb_action_35",
        "word": {
          "text": "start",
          "cn": "昂首启程",
          "pic": "🚀"
        },
        "grammar": {
          "pattern": "Ready, steady, [___] race!",
          "cn": "各就各位预备，冲出起跑线...啦！",
          "tip": "勇敢迈出第一步千里之行始于足下！"
        },
        "sentence": {
          "full": "Ready, steady, start the race!",
          "cn": "听到发令哨声响起，迈大步奋勇冲出起跑线！",
          "sceneTip": "在百米跑道上听到预备哨音紧绷肌肉",
          "chunks": [
            "Ready, steady,",
            "start the race!"
          ]
        }
      },
      {
        "id": "eb_action_36",
        "word": {
          "text": "come",
          "cn": "呼唤走近",
          "pic": "🙋"
        },
        "grammar": {
          "pattern": "[___] here, let's read!",
          "cn": "快快...到身旁来，精彩童话马上开讲！",
          "tip": "拉近心理距离搭建亲切友爱桥梁！"
        },
        "sentence": {
          "full": "Come here, let's read together!",
          "cn": "招招小手呼唤小伙伴：快来一起看立体翻翻书！",
          "sceneTip": "在绘本角呼朋引伴共读趣味故事",
          "chunks": [
            "Come here,",
            "let's read together!"
          ]
        }
      },
      {
        "id": "eb_action_37",
        "word": {
          "text": "wave",
          "cn": "摇曳告别",
          "pic": "👋"
        },
        "grammar": {
          "pattern": "[___] goodbye to friends.",
          "cn": "离别放学时，面向老师同学热情...手告别。",
          "tip": "留下美好印象期待明朝再相逢！"
        },
        "sentence": {
          "full": "Wave goodbye to friends nicely.",
          "cn": "站在校门口转过身子，向敬爱的老师挥手道别。",
          "sceneTip": "坐上校车从车窗里向老师用力摆手",
          "chunks": [
            "Wave goodbye to",
            "friends nicely."
          ]
        }
      },
      {
        "id": "eb_action_38",
        "word": {
          "text": "love",
          "cn": "无私关爱",
          "pic": "❤️"
        },
        "grammar": {
          "pattern": "I [___] you so much, Mommy!",
          "cn": "爸爸妈妈，我从心底深处真挚地...着你们！",
          "tip": "爱是世界上最温暖强大治愈的力量！"
        },
        "sentence": {
          "full": "I love you so much, Mommy and Daddy!",
          "cn": "搂住父母脖子深情表白：爸爸妈妈我永远爱你们！",
          "sceneTip": "母亲节亲手献上自己画的红色大爱心",
          "chunks": [
            "I love you so much,",
            "Mommy and Daddy!"
          ]
        }
      },
      {
        "id": "eb_action_39",
        "word": {
          "text": "happy",
          "cn": "欢欣雀跃",
          "pic": "😃"
        },
        "grammar": {
          "pattern": "I feel [___] on swings!",
          "cn": "坐在飞荡的秋千椅上，内心...极了！",
          "tip": "无忧无虑童年每一天都洒满金辉！"
        },
        "sentence": {
          "full": "I feel so happy when playing swings!",
          "cn": "迎着春风荡高秋千，胸膛里溢满欢快笑声。",
          "sceneTip": "收到心心念念的生日礼物乐不可支",
          "chunks": [
            "I feel so happy",
            "when playing swings!"
          ]
        }
      },
      {
        "id": "eb_action_40",
        "word": {
          "text": "sad",
          "cn": "接纳忧伤",
          "pic": "🥺"
        },
        "grammar": {
          "pattern": "Okay to feel [___] sometimes.",
          "cn": "偶尔感到...不用羞愧，它是正常情绪。",
          "tip": "允许宣泄倾诉过后重拾灿烂晴空！"
        },
        "sentence": {
          "full": "It's okay to feel sad sometimes.",
          "cn": "积木倒了眼眶泛红没关系，拍拍手重新再搭建！",
          "sceneTip": "养的小金鱼游不动了难过抹眼泪",
          "chunks": [
            "It's okay to feel",
            "sad sometimes."
          ]
        }
      },
      {
        "id": "eb_action_41",
        "word": {
          "text": "angry",
          "cn": "平息怒火",
          "pic": "😠"
        },
        "grammar": {
          "pattern": "Breathe deep when [___].",
          "cn": "遇到不如意心生气愤时，深呼吸...静下来。",
          "tip": "学会情绪管理不乱发脾气做情绪小主人！"
        },
        "sentence": {
          "full": "Take a deep breath when feeling angry.",
          "cn": "两手叉腰深吸三大口气，呼出胸口郁结怨气。",
          "sceneTip": "和小伙伴争玩具时克制情绪好好商量",
          "chunks": [
            "Take a deep breath",
            "when feeling angry."
          ]
        }
      },
      {
        "id": "eb_action_42",
        "word": {
          "text": "scared",
          "cn": "战胜畏惧",
          "pic": "😨"
        },
        "grammar": {
          "pattern": "Hold hand, don't be [___].",
          "cn": "握紧我的手掌，男子汉不...漆黑长夜。",
          "tip": "勇气不是不害怕而是害怕依然昂首前行！"
        },
        "sentence": {
          "full": "Hold my hand, don't be scared of dark.",
          "cn": "亮起可爱小夜灯拉住妈妈的手，黑暗不可怕。",
          "sceneTip": "夜间走廊起夜握紧手电筒给自己打气",
          "chunks": [
            "Hold my hand,",
            "don't be scared of dark."
          ]
        }
      },
      {
        "id": "eb_action_43",
        "word": {
          "text": "tired",
          "cn": "休养生息",
          "pic": "🥱"
        },
        "grammar": {
          "pattern": "Rubbing eyes means [___].",
          "cn": "频繁揉搓酸涩眼皮，说明身体已经...啦。",
          "tip": "规律作息劳逸结合养精蓄锐再出发！"
        },
        "sentence": {
          "full": "Rubbing eyes means you are tired.",
          "cn": "打了个大大的哈欠，靠在沙发枕头上眼皮打架。",
          "sceneTip": "奔跑疯玩一下午瘫在沙发上揉眼睛",
          "chunks": [
            "Rubbing eyes means",
            "you are tired."
          ]
        }
      },
      {
        "id": "eb_action_44",
        "word": {
          "text": "hungry",
          "cn": "肚肠辘辘",
          "pic": "😋"
        },
        "grammar": {
          "pattern": "Tummy rumbles, I am [___]!",
          "cn": "小肚子咕噜噜直叫唤，我真的有点...啦！",
          "tip": "健康饮食习惯按时就餐胃口大开！"
        },
        "sentence": {
          "full": "Tummy rumbles, I am hungry now!",
          "cn": "闻到厨房饭菜飘香，肚子咕咕叫唤急着开饭。",
          "sceneTip": "放学跨进家门大声嚷嚷妈妈开饭啦",
          "chunks": [
            "Tummy rumbles,",
            "I am hungry now!"
          ]
        }
      },
      {
        "id": "eb_action_45",
        "word": {
          "text": "thirsty",
          "cn": "渴饮琼浆",
          "pic": "💧"
        },
        "grammar": {
          "pattern": "I am [___], may I drink?",
          "cn": "嗓子眼冒烟了，我实在太...能喝口水吗？",
          "tip": "剧烈运动后补足水分预防脱水！"
        },
        "sentence": {
          "full": "I am thirsty, may I drink water?",
          "cn": "跑得满头大汗，礼貌询问大人递上温水壶。",
          "sceneTip": "踢完球大汗淋漓捧起水壶咕咚喝水",
          "chunks": [
            "I am thirsty,",
            "may I drink water?"
          ]
        }
      },
      {
        "id": "eb_action_46",
        "word": {
          "text": "full",
          "cn": "饱食餍足",
          "pic": "🫄"
        },
        "grammar": {
          "pattern": "Tummy is happily [___].",
          "cn": "抚摸鼓囊囊的小肚皮，我已经彻底吃...啦！",
          "tip": "光盘行动饭菜喷香适量进食不暴饮暴食！"
        },
        "sentence": {
          "full": "My tummy is happily full and round!",
          "cn": "吃完了碗里最后一粒米，拍拍饱鼓鼓小肚皮。",
          "sceneTip": "吃完大餐心满意足靠在椅背上微笑",
          "chunks": [
            "My tummy is happily",
            "full and round!"
          ]
        }
      },
      {
        "id": "eb_action_47",
        "word": {
          "text": "share",
          "cn": "慷慨乐享",
          "pic": "🤝"
        },
        "grammar": {
          "pattern": "Good friends always [___].",
          "cn": "形影不离的好伙伴，懂得...才会更快乐。",
          "tip": "独乐乐不如众乐乐分享放大快乐分量！"
        },
        "sentence": {
          "full": "Good friends always share toys.",
          "cn": "把心爱的磁力片倒在毯子上，招呼大家一起搭。",
          "sceneTip": "把自己最喜欢的蜡笔盒推到中间共用",
          "chunks": [
            "Good friends always",
            "share toys."
          ]
        }
      },
      {
        "id": "eb_action_48",
        "word": {
          "text": "thank",
          "cn": "心怀感恩",
          "pic": "🙏"
        },
        "grammar": {
          "pattern": "Always say [___] you!",
          "cn": "得到他人善意相助，常把真诚的...挂嘴边！",
          "tip": "知恩图报明理懂事人人夸赞的好孩子！"
        },
        "sentence": {
          "full": "Always say Thank you for kindness.",
          "cn": "双手接过阿姨递来的气球，深深鞠躬说谢谢。",
          "sceneTip": "得到小伙伴礼让后真诚看着对方道谢",
          "chunks": [
            "Always say Thank you",
            "for kindness."
          ]
        }
      },
      {
        "id": "eb_action_49",
        "word": {
          "text": "sorry",
          "cn": "勇于担责",
          "pic": "🙇"
        },
        "grammar": {
          "pattern": "Say [___] for mistakes.",
          "cn": "不慎撞倒他人玩具，坦诚认错道句...。",
          "tip": "知错能改善莫大焉胸怀坦荡受人尊敬！"
        },
        "sentence": {
          "full": "Say Sorry when making a mistake.",
          "cn": "不小心踩到同学脚后跟，立即真诚道歉求谅解。",
          "sceneTip": "打碎小杯子主动向妈妈认错不撒谎",
          "chunks": [
            "Say Sorry when",
            "making a mistake."
          ]
        }
      },
      {
        "id": "eb_action_50",
        "word": {
          "text": "night",
          "cn": "温馨晚安",
          "pic": "🌙"
        },
        "grammar": {
          "pattern": "Good [___], sweet dreams!",
          "cn": "星星睡了月亮醒了，互道声...愿美梦香甜！",
          "tip": "褪去喧嚣静谧安歇告别充实温馨的一天！"
        },
        "sentence": {
          "full": "Good night, sleep tight, sweet dreams!",
          "cn": "轻吻父母额头互道晚安，闭上双眸进入童话王国。",
          "sceneTip": "熄灯前向全家人挥手柔声互致晚安",
          "chunks": [
            "Good night, sleep tight,",
            "sweet dreams!"
          ]
        }
      }
    ]
  }
];

// 挂载到主系统 DATASETS 统一管理
(function() {
  if (typeof window !== 'undefined' && window.DATASETS) {
    window.DATASETS.push({
      id: 'eng_builder',
      title: '英语造句学堂',
      icon: '🔤',
      badge: '300句生活造句',
      desc: '认单词 ➔ 学句架 ➔ 乐高积木拼装造句，6大主题300组生活高频表达',
      builderData: window.DATA_ENG_BUILDER
    });
  }
})();
