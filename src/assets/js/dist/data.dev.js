"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 使用vuex的时候，必须引入vue
_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  // state放置的是数据 类似于之前的data  this.$store.state.数据名字
  // 可以修改数据，但是不建议
  state: {
    isLogin: false,
    reqPath: '',
    user: [{
      phoneOrEmil: '123',
      password: '123'
    }, {
      phoneOrEmil: 'admin',
      password: 'admin'
    }, {
      phoneOrEmil: 'zs',
      password: 'zs'
    }],
    gameDetails: [{
      title: 'NBA 2K20',
      title_en: 'NBA 2K20',
      videosrc: './src/assets/video/NBA2K20.mp4',
      nowprice: '￥16.0',
      discount: '-92%',
      oldprice: '-199.0',
      platform: 'Steam平台',
      papers: [{
        tiltle: '【¥3】满￥49.9可用【暑期甜点券】',
        unit: '¥',
        decrease: '3',
        closingDate: '2020-08-28'
      }, {
        tiltle: '【¥6】满￥99.9可用【暑期清凉券】',
        unit: '¥',
        decrease: '6',
        closingDate: '2020-08-28'
      }, {
        tiltle: '【¥12】满￥199.9可用【暑期冰点券】',
        unit: '¥',
        decrease: '12',
        closingDate: '2020-08-28'
      }],
      editions: [{
        edition: 'NBA 2K20 数字豪华版',
        price: '￥334.0',
        introduce: "\n                <br>\n                <img src='./src/assets/img/details/2K20_Infographic_DigitalSKU.png'>\n                \u9884\u8BA2NBA 2K20\u6570\u5B57\u8C6A\u534E\u7248\u3002\u6B64\u7248\u672C\u5305\u62EC35000\u865A\u62DF\u8D27\u5E01\u300110000 MyTEAM\u79EF\u5206\u3001MyTEAM\u5361\u5305\u3001\u4F9B\u60A8\u7684MyPLAYER\u4F7F\u7528\u7684\u6570\u5B57\u7248\u9053\u5177\u7B49!<br><br>\n                NBA 2K20\u6570\u5B57\u8C6A\u534E\u7248\u5305\u62EC\u4EE5\u4E0B\u6570\u5B57\u9879\u76EE:<br><br>\n                35000\u865A\u62DF\u8D27\u5E01<br><br>\n                10000 MyTEAM\u79EF\u5206<br><br>\n                10 MyCAREER\u63D0\u5347<br><br>\n                MyPLAYER\u670D\u88C5\u80F6\u56CA<br><br>\n                10\u4E2AMyTEAM\u8054\u76DF\u5361\u5305(\u6BCF\u5468\u4EA4\u4ED8\u4E00\u4E2A)<br><br>\n                10\u4E2AMyTEAMHeat Check\u4E3B\u9898\u5305(\u4ECENBA\u8D5B\u5B63\u5F00\u59CB\uFF0C\u6BCF\u5468\u63D0\u4F9B\u4E00\u4E2A)<br><br>\n                1\u5F20\u84DD\u5B9D\u77F3MyTEAM\u5C01\u9762\u8FD0\u52A8\u5458\u5361<br><br>"
      }, {
        edition: 'NBA 2K20 传奇版',
        price: '￥469.0',
        introduce: "\n                <br>\n                <img src='./src/assets/img/details/2K20_Infographic_LegendSKU.png'>\n                \u9884\u8D2DNBA 2K20\u4F20\u5947\u7248\u3002\u6B64\u7248\u672C\u5305\u62EC100000\u865A\u62DF\u8D27\u5E01\u300150000MyTEAM\u79EF\u5206\u3001MyTEAM\u5361\u5305\u3001\u60A8\u7684MyPLAYER\u7684\u6570\u5B57\u7248\u9053\u5177\u7B49!<br><br>\n                NBA 2K20\u4F20\u5947\u7248\u5305\u62EC\u4EE5\u4E0B\u6570\u5B57\u9879\u76EE:<br><br>\n                10\u4E07\u865A\u62DF\u8D27\u5E01<br><br>\n                50000MyTEAM\u79EF\u5206<br><br>\n                20MyCAREER\u6280\u80FD\u63D0\u5347<br><br>\n                MyPLAYER\u670D\u88C5\u80F6\u56CA<br><br>\n                MyPLAYER\u670D\u88C5\u7CFB\u5217<br><br>\n                'Pick 10'MyPLAYER\u978B\u7CFB\u5217(10\u53CC\u978B\uFF0C\u7528\u6237\u9009\u62E9)<br><br>\n                20\u4E2AMyTEAM\u8054\u76DF\u5361\u5305(\u6BCF\u5468\u4EA4\u4ED8\u4E00\u4E2A)<br><br>\n                20\u4E2AMyTEAM Heat Check\u5361\u5305(\u4ECENBA\u8D5B\u5B63\u5F00\u59CB\uFF0C\u6BCF\u5468\u63D0\u4F9B\u4E00\u4E2A)<br><br>\n                5\u4E2AMyTEAM\u4E3B\u9898\u5305(\u524D\u4E94\u4E2A\u7248\u672C\u4E2D\u6BCF\u4E2A\u4E3B\u9898\u7248\u672C\u4E00\u4E2A)<br><br>\n                2\u5F20\u84DD\u5B9D\u77F3MyTeam\u5C01\u9762\u8FD0\u52A8\u5458\u5361<br><br>"
      }],
      publisher: {
        developers: 'Visual Concepts',
        publisher: '2K',
        issueDate: '2019-09-07',
        language: ['简体中文', '英文', '法语', '意大利语', '德语'],
        downloadMethod: ['第三方平台'],
        supportSystem: ['Win']
      },
      configure: [{
        platform: 'window',
        minconfig: {
          '操作系统': 'Windows 7 64-bit,Windows 8.1 64-bit or Windows 10 64-bit',
          '内存': '4 GB RAM',
          '处理器': 'lntelR CoreTM i3-530 @ 2.93 GHz/AMD FX-4100 @ 3.60 GHz or better',
          'DirectX 版本': '11',
          '声卡': 'DirectX 9.0x compatible',
          '图形': 'NVIDIARGeForceR GT 450 1GB/AMDRRadeonTMHD 7770 1GB or better',
          '硬盘': '需要80 GB可用空间',
          '附注事项': 'lnitial installation requires one-time internet connection for Steam auth entication; software installations required (included with the game) include DirectX and Visual C++ Redistributable 2012.'
        },
        recconfig: {
          '操作系统': 'Windows 7 64-bit,Windows 8.1 64-bit or Windows 10 64-bit',
          '内存': '8 GB RAM',
          '处理器': 'lntelR CoreTM i5-4430 @ 3 GHz/AMD FX-8370 @ 3.4 GHz or better',
          'DirectX 版本': '11',
          '声卡': 'DirectX 9.0c compatible sound card',
          '图形': 'NVIDIARGeForceR GTX 770 2GB/AMDRRadeonTM R9 270 2GB or better',
          '硬盘': '需要80 GB可用空间',
          '附注事项': 'Dual-analog gamepad'
        }
      }, {
        platform: 'Mac',
        minconfig: {},
        recconfig: {}
      }]
    }, {
      title: '飞吧史莱姆',
      title_en: 'Flying slime',
      videosrc: './src/assets/video/NBA2K20.mp4',
      nowprice: '￥7.0',
      discount: '-36%',
      oldprice: '-11.0',
      platform: 'Steam平台',
      papers: [{
        tiltle: '【¥4】满￥39.9可用【2020返校季】',
        unit: '¥',
        decrease: '4',
        closingDate: '2020-09-14'
      }],
      editions: [{
        edition: '飞吧史莱姆',
        price: '￥7.0',
        introduce: "\n                <br>\n                \u300AFlying slime\u300B\u662F\u2014\u6B3E\u57FA\u4E8E\u7269\u7406\u91CD\u529B\u7279\u6027\u7684\u6A2A\u7248\u8FC7\u5173\u4F11\u95F2\u6E38\u620F\uFF0C\u552F\u7F8E\u7684\u753B\u8D28\u52A0\u4E0A\u5446\u840C\u7684\u4E3B\u89D2Slime\uFF0C\u53EF\u4EE5\u5728\u6E38\u620F\u4E2D\u611F\u53D7\u4E0D\u540C\u7684\u573A\u666F!\n                <br><br>\n                \u5229\u7528\u5DE6\u3001\u53F3\u4E24\u6761\u89E6\u89D2\uFF0C\u6765\u64CD\u63A7\u79FB\u52A8\u65B9\u5411\uFF0C\u518D\u52A0\u4E0Aslime\u7684\u201C\u4F53\u91CD\u201D\uFF0C\u53EF\u4EE5\u8DD1\u7684\u66F4\u5FEB!\n                <br><br>\n                <img src='./src/assets/img/details/FS1.jpg'>\n                "
      }],
      publisher: {
        developers: 'JoinGames',
        publisher: '电钮组',
        issueDate: '2020-08-20',
        language: ['简体中文', '英文'],
        downloadMethod: ['第三方平台'],
        supportSystem: ['Win']
      },
      configure: [{
        platform: 'window',
        minconfig: {
          '操作系统': 'Windows 7 64-bit,Windows 8.1 64-bit or Windows 10 64-bit',
          '内存': '4 GB RAM',
          '处理器': 'lntelR CoreTM i3-530 @ 2.93 GHz/AMD FX-4100 @ 3.60 GHz or better',
          'DirectX 版本': '11',
          '声卡': 'DirectX 9.0x compatible',
          '图形': 'NVIDIARGeForceR GT 450 1GB/AMDRRadeonTMHD 7770 1GB or better',
          '硬盘': '需要80 GB可用空间',
          '附注事项': 'lnitial installation requires one-time internet connection for Steam auth entication; software installations required (included with the game) include DirectX and Visual C++ Redistributable 2012.'
        },
        recconfig: {
          '操作系统': 'Windows 7 64-bit,Windows 8.1 64-bit or Windows 10 64-bit',
          '内存': '8 GB RAM',
          '处理器': 'lntelR CoreTM i5-4430 @ 3 GHz/AMD FX-8370 @ 3.4 GHz or better',
          'DirectX 版本': '11',
          '声卡': 'DirectX 9.0c compatible sound card',
          '图形': 'NVIDIARGeForceR GTX 770 2GB/AMDRRadeonTM R9 270 2GB or better',
          '硬盘': '需要80 GB可用空间',
          '附注事项': 'Dual-analog gamepad'
        }
      }, {
        platform: 'Mac',
        minconfig: {},
        recconfig: {}
      }]
    }, {
      title: '人类：一败涂地',
      title_en: 'Flying slime',
      videosrc: './src/assets/video/NBA2K20.mp4',
      nowprice: '￥7.0',
      discount: '-36%',
      oldprice: '-11.0',
      platform: 'Steam平台',
      papers: [{
        tiltle: '【¥4】满￥39.9可用【2020返校季】',
        unit: '¥',
        decrease: '4',
        closingDate: '2020-09-14'
      }],
      editions: [{
        edition: '飞吧史莱姆',
        price: '￥7.0',
        introduce: "\n                <br>\n                \u300AFlying slime\u300B\u662F\u2014\u6B3E\u57FA\u4E8E\u7269\u7406\u91CD\u529B\u7279\u6027\u7684\u6A2A\u7248\u8FC7\u5173\u4F11\u95F2\u6E38\u620F\uFF0C\u552F\u7F8E\u7684\u753B\u8D28\u52A0\u4E0A\u5446\u840C\u7684\u4E3B\u89D2Slime\uFF0C\u53EF\u4EE5\u5728\u6E38\u620F\u4E2D\u611F\u53D7\u4E0D\u540C\u7684\u573A\u666F!\n                <br><br>\n                \u5229\u7528\u5DE6\u3001\u53F3\u4E24\u6761\u89E6\u89D2\uFF0C\u6765\u64CD\u63A7\u79FB\u52A8\u65B9\u5411\uFF0C\u518D\u52A0\u4E0Aslime\u7684\u201C\u4F53\u91CD\u201D\uFF0C\u53EF\u4EE5\u8DD1\u7684\u66F4\u5FEB!\n                <br><br>\n                <img src='./src/assets/img/details/FS1.jpg'>\n                "
      }],
      publisher: {
        developers: 'JoinGames',
        publisher: '电钮组',
        issueDate: '2020-08-20',
        language: ['简体中文', '英文'],
        downloadMethod: ['第三方平台'],
        supportSystem: ['Win']
      },
      configure: [{
        platform: 'window',
        minconfig: {
          '操作系统': 'Windows 7 64-bit,Windows 8.1 64-bit or Windows 10 64-bit',
          '内存': '4 GB RAM',
          '处理器': 'lntelR CoreTM i3-530 @ 2.93 GHz/AMD FX-4100 @ 3.60 GHz or better',
          'DirectX 版本': '11',
          '声卡': 'DirectX 9.0x compatible',
          '图形': 'NVIDIARGeForceR GT 450 1GB/AMDRRadeonTMHD 7770 1GB or better',
          '硬盘': '需要80 GB可用空间',
          '附注事项': 'lnitial installation requires one-time internet connection for Steam auth entication; software installations required (included with the game) include DirectX and Visual C++ Redistributable 2012.'
        },
        recconfig: {
          '操作系统': 'Windows 7 64-bit,Windows 8.1 64-bit or Windows 10 64-bit',
          '内存': '8 GB RAM',
          '处理器': 'lntelR CoreTM i5-4430 @ 3 GHz/AMD FX-8370 @ 3.4 GHz or better',
          'DirectX 版本': '11',
          '声卡': 'DirectX 9.0c compatible sound card',
          '图形': 'NVIDIARGeForceR GTX 770 2GB/AMDRRadeonTM R9 270 2GB or better',
          '硬盘': '需要80 GB可用空间',
          '附注事项': 'Dual-analog gamepad'
        }
      }, {
        platform: 'Mac',
        minconfig: {},
        recconfig: {}
      }]
    }],
    allGameslist: [{
      src: './src/assets/img/games/Flying-slime.jpg',
      dc: '促销',
      tiltle: '飞吧史莱姆',
      nowprice: '￥7.3',
      discount: '-36%',
      gtype: ['独立', '冒险', '休闲', '动作'],
      path: '/details'
    }, {
      src: './src/assets/img/games/Peaky-Blinders-Mastermind.jpg',
      dc: '促销',
      site: '国际站',
      tiltle: '浴血黑帮：傀儡师',
      nowprice: '￥64.0',
      discount: '-20%',
      gtype: ['独立', '冒险', '策略'],
      path: '/details'
    }, {
      src: './src/assets/img/games/Deathendre.jpg',
      dc: '促销',
      site: '国际站',
      tiltle: '死亡终局 轮回试炼2',
      nowprice: '￥7.3',
      discount: '-36%',
      gtype: ['  冒险', '角色扮演', '动作'],
      path: '/details'
    }],
    promotionlist: [{
      tiltle: "\u3010\u4FC3\u9500\u3011\u591A\u4EBA\u540C\u4E50\u63A8\u8350",
      list: [{
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/HFF.jpg',
        site: '国际站',
        tiltle: '人类：一败涂地',
        nowprice: '￥19',
        discount: '-60%',
        oldprice: '48',
        path: '/details'
      }, {
        src: './src/assets/img/games/Fallout76.jpg',
        site: '国际站',
        tiltle: '辐射76',
        nowprice: '￥64',
        discount: '-50%',
        oldprice: '129',
        path: '/details'
      }, {
        src: './src/assets/img/games/mhw.jpg',
        site: '国际站',
        tiltle: '怪物猎人：世界',
        nowprice: '￥142',
        discount: '-30%',
        oldprice: '203',
        path: '/details'
      }, {
        src: './src/assets/img/games/jb5.jpg',
        site: '国际站',
        tiltle: '街霸 V',
        nowprice: '￥56',
        discount: '50%',
        oldprice: '112',
        path: '/details'
      } // {
      //   src:'',
      //   site:'',
      //   tiltle:'',
      //   nowprice:'',
      //   discount:'',
      //   oldprice:'',
      //   path:'/details',
      // },
      ]
    }, {
      tiltle: "\u3010\u4FC3\u9500\u3011Bethesda\u63A8\u8350",
      list: [{
        src: './src/assets/img/games/Bethesda_d.jpg',
        site: '',
        tiltle: 'Bethesda特价专题',
        nowprice: '',
        discount: '',
        oldprice: '',
        path: '/details'
      }]
    }, {
      tiltle: "\u3010\u4FC3\u9500\u3011\u8DB3\u4E0D\u51FA\u6237\u63A8\u8350",
      list: [{
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }]
    }, {
      tiltle: "\u3010\u4FC3\u9500\u3011\u63D0\u524D\u4E70\u6709\u60CA\u559C",
      list: [{
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }]
    }, {
      tiltle: "\u3010\u4FC3\u9500\u3011\u7A81\u7A81\u7A81\u5C31\u5B8C\u4E8B",
      list: [{
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }]
    }, {
      tiltle: "\u3010\u4FC3\u9500\u3011\u8FD1\u671F\u4E0A\u67B6\u63A8\u8350",
      list: [{
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }]
    }, {
      tiltle: "\u3010\u4FC3\u9500\u3011\u7ECF\u5178\u5934\u724C\u63A8\u8350",
      list: [{
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }]
    }, {
      tiltle: "\u70ED\u95E8\u5C0F\u7EC4",
      list: [{
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }, {
        src: './src/assets/img/games/NBA-2K20.jpg',
        site: '国际站',
        tiltle: 'NBA 2K20',
        nowprice: '￥16',
        discount: '-92%',
        oldprice: '199',
        path: '/details'
      }]
    }],
    gameslist: [{
      title: '最新',
      list: [{
        src: './src/assets/img/games/Flying-slime.jpg',
        dc: '促销',
        tiltle: '飞吧史莱姆',
        nowprice: '￥7.3',
        discount: '-36%',
        gtype: ['独立', '冒险', '休闲', '动作'],
        path: '/details'
      }, {
        src: './src/assets/img/games/Peaky-Blinders-Mastermind.jpg',
        dc: '促销',
        site: '国际站',
        tiltle: '浴血黑帮：傀儡师',
        nowprice: '￥64.0',
        discount: '-20%',
        gtype: ['独立', '冒险', '策略'],
        path: '/details'
      }, {
        src: './src/assets/img/games/Deathendre.jpg',
        dc: '促销',
        site: '国际站',
        tiltle: '死亡终局 轮回试炼2',
        nowprice: '￥7.3',
        discount: '-36%',
        gtype: ['  冒险', '角色扮演', '动作'],
        path: '/details'
      }, {
        src: './src/assets/img/games/BitetheBullet.jpg',
        dc: '促销',
        site: '国际站',
        tiltle: '飞吧史莱姆',
        nowprice: '￥7.3',
        discount: '-36%',
        gtype: ['独立', '冒险', '休闲', '动作'],
        path: '/details'
      }, {
        src: './src/assets/img/games/Curtains.jpg',
        dc: '促销',
        site: '国际站',
        tiltle: '飞吧史莱姆',
        nowprice: '￥7.3',
        discount: '-36%',
        gtype: ['独立', '冒险', '休闲', '动作'],
        path: '/details'
      }]
    }, {
      title: '促销',
      list: [{
        src: './src/assets/img/games/Flying-slime.jpg',
        dc: '促销',
        site: '国际站',
        tiltle: '飞吧史莱姆',
        nowprice: '￥7.3',
        discount: '-36%',
        gtype: ['独立', '冒险', '休闲', '动作'],
        path: '/details'
      }]
    }, {
      title: '预售',
      list: [{
        src: './src/assets/img/games/Flying-slime.jpg',
        dc: '促销',
        site: '国际站',
        tiltle: '飞吧史莱姆',
        nowprice: '￥7.3',
        discount: '-36%',
        gtype: ['独立', '冒险', '休闲', '动作'],
        path: '/details'
      }]
    }, {
      title: '周排行',
      list: [{
        src: './src/assets/img/games/Flying-slime.jpg',
        dc: '促销',
        site: '国际站',
        tiltle: '飞吧史莱姆',
        nowprice: '￥7.3',
        discount: '-36%',
        gtype: ['独立', '冒险', '休闲', '动作'],
        path: '/details'
      }]
    }, {
      title: '月排行',
      list: [{
        src: './src/assets/img/games/Flying-slime.jpg',
        dc: '促销',
        site: '国际站',
        tiltle: '飞吧史莱姆',
        nowprice: '￥7.3',
        discount: '-36%',
        gtype: ['独立', '冒险', '休闲', '动作'],
        path: '/details'
      }]
    }]
  },
  //   mutations放置的是方法。类似之前的methods this.$store.commit('方法名',k,k)k代表的是参数
  mutations: {
    login: function login(state) {
      state.isLogin = true;
    },
    unlogin: function unlogin(state) {
      state.isLogin = false;
    }
  }
});

exports["default"] = _default;