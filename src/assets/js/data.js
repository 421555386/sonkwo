// 使用vuex的时候，必须引入vue
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state放置的是数据 类似于之前的data  this.$store.state.数据名字
    // 可以修改数据，但是不建议
  state: {
    isLogin:false,
    reqPath:'',
    user:[
      {
        phoneOrEmil:'123',
        password:'123',
      },
      {
        phoneOrEmil:'admin',
        password:'admin',
      },
      {
        phoneOrEmil:'zs',
        password:'zs',
      },
    ],
    gameDetails:[
      {
        title:'NBA 2K20',
        title_en:'NBA 2K20',
        videosrc:'./src/assets/video/NBA2K20.mp4',
        nowprice:'￥16.0',
        discount:'-92%',
        oldprice:'-199.0',
        platform:'Steam平台',
        papers:[
            {
                tiltle:'【¥3】满￥49.9可用【暑期甜点券】',
                unit:'¥',
                decrease:'3',
                closingDate:'2020-08-28'
            },
            {
                tiltle:'【¥6】满￥99.9可用【暑期清凉券】',
                unit:'¥',
                decrease:'6',
                closingDate:'2020-08-28'
            },
            {
                tiltle:'【¥12】满￥199.9可用【暑期冰点券】',
                unit:'¥',
                decrease:'12',
                closingDate:'2020-08-28'
            },
        ],
        editions:[
            {
                edition:'NBA 2K20 数字豪华版',
                price:'￥334.0',
                introduce:`
                <br>
                <img src='./src/assets/img/details/2K20_Infographic_DigitalSKU.png'>
                预订NBA 2K20数字豪华版。此版本包括35000虚拟货币、10000 MyTEAM积分、MyTEAM卡包、供您的MyPLAYER使用的数字版道具等!<br><br>
                NBA 2K20数字豪华版包括以下数字项目:<br><br>
                35000虚拟货币<br><br>
                10000 MyTEAM积分<br><br>
                10 MyCAREER提升<br><br>
                MyPLAYER服装胶囊<br><br>
                10个MyTEAM联盟卡包(每周交付一个)<br><br>
                10个MyTEAMHeat Check主题包(从NBA赛季开始，每周提供一个)<br><br>
                1张蓝宝石MyTEAM封面运动员卡<br><br>`
            },
            {
                edition:'NBA 2K20 传奇版',
                price:'￥469.0',
                introduce:`
                <br>
                <img src='./src/assets/img/details/2K20_Infographic_LegendSKU.png'>
                预购NBA 2K20传奇版。此版本包括100000虚拟货币、50000MyTEAM积分、MyTEAM卡包、您的MyPLAYER的数字版道具等!<br><br>
                NBA 2K20传奇版包括以下数字项目:<br><br>
                10万虚拟货币<br><br>
                50000MyTEAM积分<br><br>
                20MyCAREER技能提升<br><br>
                MyPLAYER服装胶囊<br><br>
                MyPLAYER服装系列<br><br>
                'Pick 10'MyPLAYER鞋系列(10双鞋，用户选择)<br><br>
                20个MyTEAM联盟卡包(每周交付一个)<br><br>
                20个MyTEAM Heat Check卡包(从NBA赛季开始，每周提供一个)<br><br>
                5个MyTEAM主题包(前五个版本中每个主题版本一个)<br><br>
                2张蓝宝石MyTeam封面运动员卡<br><br>`
            },
        ],
        publisher:{
            developers:'Visual Concepts',
            publisher:'2K',
            issueDate:'2019-09-07',
            language:['简体中文','英文','法语','意大利语','德语'],
            downloadMethod:['第三方平台'],
            supportSystem:['Win'],
        },
        configure:[
            {
                platform:'window',
                minconfig:{
                    '操作系统':'Windows 7 64-bit,Windows 8.1 64-bit or Windows 10 64-bit',
                    '内存':'4 GB RAM',
                    '处理器':'lntelR CoreTM i3-530 @ 2.93 GHz/AMD FX-4100 @ 3.60 GHz or better',
                    'DirectX 版本':'11',
                    '声卡':'DirectX 9.0x compatible',
                    '图形':'NVIDIARGeForceR GT 450 1GB/AMDRRadeonTMHD 7770 1GB or better',
                    '硬盘':'需要80 GB可用空间',
                    '附注事项':'lnitial installation requires one-time internet connection for Steam auth entication; software installations required (included with the game) include DirectX and Visual C++ Redistributable 2012.'
                },
                recconfig:{
                    '操作系统':'Windows 7 64-bit,Windows 8.1 64-bit or Windows 10 64-bit',
                    '内存':'8 GB RAM',
                    '处理器':'lntelR CoreTM i5-4430 @ 3 GHz/AMD FX-8370 @ 3.4 GHz or better',
                    'DirectX 版本':'11',
                    '声卡':'DirectX 9.0c compatible sound card',
                    '图形':'NVIDIARGeForceR GTX 770 2GB/AMDRRadeonTM R9 270 2GB or better',
                    '硬盘':'需要80 GB可用空间',
                    '附注事项':'Dual-analog gamepad'
                }
            },
            {
                platform:'Mac',
                minconfig:{},
                recconfig:{},
            }
        ]
      },
      {
        title:'飞吧史莱姆',
        title_en:'Flying slime',
        videosrc:'./src/assets/video/NBA2K20.mp4',
        nowprice:'￥7.0',
        discount:'-36%',
        oldprice:'-11.0',
        platform:'Steam平台',
        papers:[
            {
                tiltle:'【¥4】满￥39.9可用【2020返校季】',
                unit:'¥',
                decrease:'4',
                closingDate:'2020-09-14'
            },
        ],
        editions:[
            {
                edition:'飞吧史莱姆',
                price:'￥7.0',
                introduce:`
                <br>
                《Flying slime》是—款基于物理重力特性的横版过关休闲游戏，唯美的画质加上呆萌的主角Slime，可以在游戏中感受不同的场景!
                <br><br>
                利用左、右两条触角，来操控移动方向，再加上slime的“体重”，可以跑的更快!
                <br><br>
                <img src='./src/assets/img/details/FS1.jpg'>
                `
            },
        ],
        publisher:{
            developers:'JoinGames',
            publisher:'电钮组',
            issueDate:'2020-08-20',
            language:['简体中文','英文'],
            downloadMethod:['第三方平台'],
            supportSystem:['Win'],
        },
        configure:[
            {
                platform:'window',
                minconfig:{
                    '操作系统':'Windows 7 64-bit,Windows 8.1 64-bit or Windows 10 64-bit',
                    '内存':'4 GB RAM',
                    '处理器':'lntelR CoreTM i3-530 @ 2.93 GHz/AMD FX-4100 @ 3.60 GHz or better',
                    'DirectX 版本':'11',
                    '声卡':'DirectX 9.0x compatible',
                    '图形':'NVIDIARGeForceR GT 450 1GB/AMDRRadeonTMHD 7770 1GB or better',
                    '硬盘':'需要80 GB可用空间',
                    '附注事项':'lnitial installation requires one-time internet connection for Steam auth entication; software installations required (included with the game) include DirectX and Visual C++ Redistributable 2012.'
                },
                recconfig:{
                    '操作系统':'Windows 7 64-bit,Windows 8.1 64-bit or Windows 10 64-bit',
                    '内存':'8 GB RAM',
                    '处理器':'lntelR CoreTM i5-4430 @ 3 GHz/AMD FX-8370 @ 3.4 GHz or better',
                    'DirectX 版本':'11',
                    '声卡':'DirectX 9.0c compatible sound card',
                    '图形':'NVIDIARGeForceR GTX 770 2GB/AMDRRadeonTM R9 270 2GB or better',
                    '硬盘':'需要80 GB可用空间',
                    '附注事项':'Dual-analog gamepad'
                }
            },
            {
                platform:'Mac',
                minconfig:{},
                recconfig:{},
            }
        ]
      },
      {
        title:'人类：一败涂地',
        title_en:'Flying slime',
        videosrc:'./src/assets/video/NBA2K20.mp4',
        nowprice:'￥7.0',
        discount:'-36%',
        oldprice:'-11.0',
        platform:'Steam平台',
        papers:[
            {
                tiltle:'【¥4】满￥39.9可用【2020返校季】',
                unit:'¥',
                decrease:'4',
                closingDate:'2020-09-14'
            },
        ],
        editions:[
            {
                edition:'飞吧史莱姆',
                price:'￥7.0',
                introduce:`
                <br>
                《Flying slime》是—款基于物理重力特性的横版过关休闲游戏，唯美的画质加上呆萌的主角Slime，可以在游戏中感受不同的场景!
                <br><br>
                利用左、右两条触角，来操控移动方向，再加上slime的“体重”，可以跑的更快!
                <br><br>
                <img src='./src/assets/img/details/FS1.jpg'>
                `
            },
        ],
        publisher:{
            developers:'JoinGames',
            publisher:'电钮组',
            issueDate:'2020-08-20',
            language:['简体中文','英文'],
            downloadMethod:['第三方平台'],
            supportSystem:['Win'],
        },
        configure:[
            {
                platform:'window',
                minconfig:{
                    '操作系统':'Windows 7 64-bit,Windows 8.1 64-bit or Windows 10 64-bit',
                    '内存':'4 GB RAM',
                    '处理器':'lntelR CoreTM i3-530 @ 2.93 GHz/AMD FX-4100 @ 3.60 GHz or better',
                    'DirectX 版本':'11',
                    '声卡':'DirectX 9.0x compatible',
                    '图形':'NVIDIARGeForceR GT 450 1GB/AMDRRadeonTMHD 7770 1GB or better',
                    '硬盘':'需要80 GB可用空间',
                    '附注事项':'lnitial installation requires one-time internet connection for Steam auth entication; software installations required (included with the game) include DirectX and Visual C++ Redistributable 2012.'
                },
                recconfig:{
                    '操作系统':'Windows 7 64-bit,Windows 8.1 64-bit or Windows 10 64-bit',
                    '内存':'8 GB RAM',
                    '处理器':'lntelR CoreTM i5-4430 @ 3 GHz/AMD FX-8370 @ 3.4 GHz or better',
                    'DirectX 版本':'11',
                    '声卡':'DirectX 9.0c compatible sound card',
                    '图形':'NVIDIARGeForceR GTX 770 2GB/AMDRRadeonTM R9 270 2GB or better',
                    '硬盘':'需要80 GB可用空间',
                    '附注事项':'Dual-analog gamepad'
                }
            },
            {
                platform:'Mac',
                minconfig:{},
                recconfig:{},
            }
        ]
      }
    ],
    allGameslist:[
      {
        src:'./src/assets/img/games/Flying-slime.jpg',
        dc:'促销',
        tiltle:'飞吧史莱姆',
        nowprice:'￥7.3',
        discount:'-36%',
        gtype:['独立','冒险','休闲','动作'],
        path:'/details',
      },
      { 
        src:'./src/assets/img/games/Peaky-Blinders-Mastermind.jpg',
        dc:'促销',
        site:'国际站',
        tiltle:'浴血黑帮：傀儡师',
        nowprice:'￥64.0',
        discount:'-20%',
        gtype:['独立','冒险','策略'],
        path:'/details',
      },
      { 
        src:'./src/assets/img/games/Deathendre.jpg',
        dc:'促销',
        site:'国际站',
        tiltle:'死亡终局 轮回试炼2',
        nowprice:'￥7.3',
        discount:'-36%',
        gtype:['  冒险','角色扮演','动作'],
        path:'/details',
      },
    ],
    promotionlist:[
      {
        tiltle:`【促销】多人同乐推荐`,
        list:[
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/HFF.jpg',
            site:'国际站',
            tiltle:'人类：一败涂地',
            nowprice:'￥19',
            discount:'-60%',
            oldprice:'48',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/Fallout76.jpg',
            site:'国际站',
            tiltle:'辐射76',
            nowprice:'￥64',
            discount:'-50%',
            oldprice:'129',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/mhw.jpg',
            site:'国际站',
            tiltle:'怪物猎人：世界',
            nowprice:'￥142',
            discount:'-30%',
            oldprice:'203',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/jb5.jpg',
            site:'国际站',
            tiltle:'街霸 V',
            nowprice:'￥56',
            discount:'50%',
            oldprice:'112',
            path:'/details',
          },
          // {
          //   src:'',
          //   site:'',
          //   tiltle:'',
          //   nowprice:'',
          //   discount:'',
          //   oldprice:'',
          //   path:'/details',
          // },
        ]
      },
      {
        tiltle:`【促销】Bethesda推荐`,
        list:[
          {
            src:'./src/assets/img/games/Bethesda_d.jpg',
            site:'',
            tiltle:'Bethesda特价专题',
            nowprice:'',
            discount:'',
            oldprice:'',
            path:'/details',
          },
        ]
      },
      {
        tiltle:`【促销】足不出户推荐`,
        list:[
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
        ]
      },
      {
        tiltle:`【促销】提前买有惊喜`,
        list:[
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
        ]
      },
      {
        tiltle:`【促销】突突突就完事`,
        list:[
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
        ]
      },
      {
        tiltle:`【促销】近期上架推荐`,
        list:[
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
        ]
      },
      {
        tiltle:`【促销】经典头牌推荐`,
        list:[
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
        ]
      },
      {
        tiltle:`热门小组`,
        list:[
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
          {
            src:'./src/assets/img/games/NBA-2K20.jpg',
            site:'国际站',
            tiltle:'NBA 2K20',
            nowprice:'￥16',
            discount:'-92%',
            oldprice:'199',
            path:'/details',
          },
        ]
      },
    ],
    gameslist:[
      {
        title:'最新',
        list:[
          { 
            src:'./src/assets/img/games/Flying-slime.jpg',
            dc:'促销',
            tiltle:'飞吧史莱姆',
            nowprice:'￥7.3',
            discount:'-36%',
            gtype:['独立','冒险','休闲','动作'],
            path:'/details',
          },
          { 
            src:'./src/assets/img/games/Peaky-Blinders-Mastermind.jpg',
            dc:'促销',
            site:'国际站',
            tiltle:'浴血黑帮：傀儡师',
            nowprice:'￥64.0',
            discount:'-20%',
            gtype:['独立','冒险','策略'],
            path:'/details',
          },
          { 
            src:'./src/assets/img/games/Deathendre.jpg',
            dc:'促销',
            site:'国际站',
            tiltle:'死亡终局 轮回试炼2',
            nowprice:'￥7.3',
            discount:'-36%',
            gtype:['  冒险','角色扮演','动作'],
            path:'/details',
          },
          { 
            src:'./src/assets/img/games/BitetheBullet.jpg',
            dc:'促销',
            site:'国际站',
            tiltle:'飞吧史莱姆',
            nowprice:'￥7.3',
            discount:'-36%',
            gtype:['独立','冒险','休闲','动作'],
            path:'/details',
          },
          { 
            src:'./src/assets/img/games/Curtains.jpg',
            dc:'促销',
            site:'国际站',
            tiltle:'飞吧史莱姆',
            nowprice:'￥7.3',
            discount:'-36%',
            gtype:['独立','冒险','休闲','动作'],
            path:'/details',
          },
        ],
        
      },
      {
        title:'促销',
        list:[
          { 
            src:'./src/assets/img/games/Flying-slime.jpg',
            dc:'促销',
            site:'国际站',
            tiltle:'飞吧史莱姆',
            nowprice:'￥7.3',
            discount:'-36%',
            gtype:['独立','冒险','休闲','动作'],
            path:'/details',
          },
        ],
      },
      {
        title:'预售',
        list:[
          { 
            src:'./src/assets/img/games/Flying-slime.jpg',
            dc:'促销',
            site:'国际站',
            tiltle:'飞吧史莱姆',
            nowprice:'￥7.3',
            discount:'-36%',
            gtype:['独立','冒险','休闲','动作'],
            path:'/details',
          },
        ],
      },
      {
        title:'周排行',
        list:[
          { 
            src:'./src/assets/img/games/Flying-slime.jpg',
            dc:'促销',
            site:'国际站',
            tiltle:'飞吧史莱姆',
            nowprice:'￥7.3',
            discount:'-36%',
            gtype:['独立','冒险','休闲','动作'],
            path:'/details',
          },
        ],
      },
      {
        title:'月排行',
        list:[
          { 
            src:'./src/assets/img/games/Flying-slime.jpg',
            dc:'促销',
            site:'国际站',
            tiltle:'飞吧史莱姆',
            nowprice:'￥7.3',
            discount:'-36%',
            gtype:['独立','冒险','休闲','动作'],
            path:'/details',
          },
        ],
      },
    ],
  },
//   mutations放置的是方法。类似之前的methods this.$store.commit('方法名',k,k)k代表的是参数
  mutations: {
    login(state){
      state.isLogin=true;
    },
    unlogin(state){
      state.isLogin=false;
    }
  }
})