<template>
    <div class="community">
        <v-head>
            <li slot="left" class="left">
                <router-link to='/message'>
                    <i class="iconfont sk-icon-tbmessage"></i>
                </router-link>
            </li>
            <li slot="center" class="center">
                <span>杉果社区</span>
            </li>
            <li slot="right" class="right">
                <i class="iconfont  sk-icon-tbsearch"></i>
            </li>
        </v-head>
        <main>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">帖子</mt-tab-item>
                <mt-tab-item id="2">小组</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <ul>
                        <li class="swipe">
                            <mt-swipe :auto="100000">
                                <mt-swipe-item v-for="(item,index) in comSwipe">
                                    <img :src="item.src" alt="">
                                    <p>{{item.tiltle}}</p>
                                </mt-swipe-item>
                            </mt-swipe>
                        </li>
                        <li class="yw">
                            <h1><img src="../assets/img/community/yw.png">社区要闻</h1>
                            <p class="tiltle">【有求必应】疑难杂症来请教圆子!</p>
                            <p class="tiltle">【杉果科普】十字军东征是怎么回事?</p>
                            <p class="tiltle">【社区活动】返校季接龙抢券~!</p>
                            <p class="tiltle">【缺补公示】游戏缺补Key进度公示</p>
                        </li>
                        <li class="tz">
                            <h1><img src="../assets/img/community/tz.png">帖子</h1>
                            <mt-navbar v-model="selected2">
                                <mt-tab-item id="1">最热帖子</mt-tab-item>
                                <mt-tab-item id="2">最新帖子</mt-tab-item>
                            </mt-navbar>
                            <mt-tab-container v-model="selected2">
                                <mt-tab-container-item id="1">
                                    <ul>
                                        <li class="tzList" v-for="(item,index) in forHot()">
                                            <div>
                                                <img class="avater" :src="item.avater">
                                                <span class="date">{{item.date}}</span>
                                                <span v-if="item.isTop" class="lable">置顶</span>
                                            </div>
                                            <div>
                                                {{item.tiltle}}
                                            </div>
                                            <div class="bottom">
                                                <span>来自：<span>{{item.user}}</span></span>
                                                <span class="right" @click="item.likes++"><i class="iconfont sk-icon-tbdianzan"></i>{{item.likes}}</span>
                                                <span class="right"><i class="iconfont sk-icon-tbxiaoxi"></i>{{item.comment}}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </mt-tab-container-item>
                                <mt-tab-container-item id="2">
                                   
                                </mt-tab-container-item>
                            </mt-tab-container>
                        </li>
                    </ul>
                </mt-tab-container-item>
                <mt-tab-container-item id="2" class="xz">
                    
                    <ul class="left">
                        <li v-for="(item,index) in typeList" @click="sel=index" :class="{current:sel==index}">
                            <label>{{item.type}}</label>
                        </li>
                    </ul>

                    <ul class="right">
                        <li v-for="(item,index) in visited(sel)" @click="item.isVisit=true">
                            <img :src="item.src">
                            <div>
                                <h4>{{item.name}}</h4>
                                <div>
                                    <span><i class="iconfont sk-icon-tbnickname"></i>{{item.member}}</span>
                                    <span><i class="iconfont sk-icon-tbinstruction"></i>{{item.discuss}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>

                </mt-tab-container-item>
            </mt-tab-container>
        </main>

<ul>
    <li @click="sel=index" index></li>
</ul>
<ul>
    <li v-if="sel==0"></li>
    <li v-if="sel==1"></li>
    <li v-if="sel==2"></li>
</ul>

    </div>
</template>

<script>
import head from './head'
import '../assets/css/community.css'
export default {
    data(){
        return{
            selected:'2',
            selected2:'1',
            selected3:'1',
            sel:0,
            comSwipe:[
              {
                  src:"./src/assets/img/community/1.jpg",
                  tiltle:'【社区活动】开学返校遇七夕，接龙领券喜上喜~',
                  path:'/',
              },
              {
                  src:"./src/assets/img/community/2.jpg",
                  tiltle:'杉果社区版规发布啦~',
                  path:'/',
              },
              {
                  src:"./src/assets/img/community/3.jpg",
                  tiltle:'【杉果π】2020线上狂欢，圆子带你玩转杉果π！',
                  path:'/',
              },
              {
                  src:"./src/assets/img/community/4.jpg",
                  tiltle:'【今日果聊打卡】Vol.65你对“悟空”抱有多大的希望？',
                  path:'/',
              },
              {
                  src:"./src/assets/img/community/5.jpg",
                  tiltle:'这是最好的时代，也是最坏的时代——维多利亚时代工业革命背景文化及人物简析',
                  path:'/',
              },
              {
                  src:"./src/assets/img/community/6.jpg",
                  tiltle:'如何快速获取积分的姿势？',
                  path:'/',
              },
              {
                  src:"./src/assets/img/community/7.jpg",
                  tiltle:'【社区活动】这是剃刀党的命令！“浴血黑帮”接龙等你回应~',
                  path:'/',
              },
              {
                  src:"./src/assets/img/community/8.jpg",
                  tiltle:'小杉果游戏评测大汇总',
                  path:'/',
              },
              {
                  src:"./src/assets/img/community/9.jpg",
                  tiltle:'小杉果游戏科普大汇总',
                  path:'/',
              },
            ],
            tzList:[
                {
                    avater:'./src/assets/img/mine/default.jpg',
                    date:'2020-8-5',
                    isTop:true,
                    tiltle:'【社区活动】硬核玩家鉴定题目征集！',
                    user:'杉果π2020',
                    comment:265,
                    likes:40,
                },
                {
                    avater:'./src/assets/img/mine/default.jpg',
                    date:'2020-8-5',
                    isTop:false,
                    tiltle:'【社区活动】开学返校遇七夕，接龙领卷喜上喜~',
                    user:'杉果综合讨论组',
                    comment:356,
                    likes:61,
                },
                {
                    avater:'./src/assets/img/mine/default.jpg',
                    date:'2020-8-5',
                    isTop:false,
                    tiltle:'【社区活动】这是剃刀党的指令！“浴血黑帮”接龙等你回应~',
                    user:'杉果综合讨论组',
                    comment:846,
                    likes:18,
                },
                
            ],
            typeList:[
                {
                    type:'最近访问',
                    con:[
                        
                    ]
                },
                {
                    type:'官方小组',
                    con:[
                        {
                            name:'杉果综合讨论组',
                            src:'./src/assets/img/type/a1.png',
                            member:1128492,
                            discuss:10002,
                            isVisit:false,
                        },
                        {
                            name:'彩虹六号：围攻',
                            src:'./src/assets/img/type/a2.jpg',
                            member:46652,
                            discuss:118,
                            isVisit:false,
                        },
                        {
                            name:'席德·梅尔之文明Ⅵ',
                            src:'./src/assets/img/type/a3.jpg',
                            member:62202,
                            discuss:39,
                            isVisit:false,
                        },
                        {
                            name:'圣女战旗',
                            src:'./src/assets/img/type/a4.jpg',
                            member:9672,
                            discuss:206,
                            isVisit:false,
                        },
                        {
                            name:'疑问集中营',
                            src:'./src/assets/img/type/a5.jpg',
                            member:403,
                            discuss:1349,
                            isVisit:false,
                        },
                        {
                            name:'全境封锁2',
                            src:'./src/assets/img/type/a6.jpg',
                            member:146896,
                            discuss:230,
                            isVisit:false,
                        },
                        {
                            name:'奇迹一刻',
                            src:'./src/assets/img/type/a7.jpg',
                            member:653,
                            discuss:248,
                            isVisit:false,
                        },
                        {
                            name:'无主之地3',
                            src:'./src/assets/img/type/a8.jpg',
                            member:32272,
                            discuss:188,
                            isVisit:false,
                        },
                        {
                            name:'生化危机3 重制版',
                            src:'./src/assets/img/type/a9.jpg',
                            member:10145,
                            discuss:130,
                            isVisit:false,
                        },
                        {
                            name:'杉果Π2020',
                            src:'./src/assets/img/type/a10.jpg',
                            member:170,
                            discuss:54,
                            isVisit:false,
                        },
                    ]
                },
                {
                    type:'新游上线',
                    con:[
                        {
                            name:'暗黑血统3',
                            src:'./src/assets/img/type/b1.jpg',
                            member:1192,
                            discuss:11,
                            isVisit:false,
                        },
                        {
                            name:'叛乱：沙漠风暴',
                            src:'./src/assets/img/type/b2.jpg',
                            member:2431,
                            discuss:9,
                            isVisit:false,
                        },
                        {
                            name:'生化危机2重制版',
                            src:'./src/assets/img/type/b3.jpg',
                            member:9451,
                            discuss:120,
                            isVisit:false,
                        },
                        {
                            name:'克苏鲁的呼唤',
                            src:'./src/assets/img/type/b4.jpg',
                            member:1009,
                            discuss:5,
                            isVisit:false,
                        },
                        {
                            name:'开拓者：拥王者',
                            src:'./src/assets/img/type/b5.jpg',
                            member:822,
                            discuss:12,
                            isVisit:false,
                        },
                        {
                            name:'救赎之路',
                            src:'./src/assets/img/type/b6.jpg',
                            member:134,
                            discuss:4,
                            isVisit:false,
                        },
                    ]
                },
                {
                    type:'动作冒险',
                    con:[
                        {
                            name:'街霸V',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                    ]
                },
                {
                    type:'角色扮演',
                    con:[
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                    ]
                },
                {
                    type:'射击竞技',
                    con:[
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                    ]
                },
                {
                    type:'策略模拟',
                    con:[
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                    ]
                },
                {
                    type:'体育竞速',
                    con:[
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                    ]
                },
                {
                    type:'更多',
                    con:[
                        {
                            name:'黑暗之魂3',
                            src:'./src/assets/img/type/darksouls3.jpg',
                            member:1,
                            discuss:1,
                            isVisit:false,
                        },
                    ]
                },
            ],
        }
    },
    components:{
      'v-head' : head,
    },
    methods:{
        forHot(){
            let newList = this.tzList.slice().sort(this.compare('likes'))
            let top;
            for(var i in newList){
                if(newList[i].isTop){
                    top = newList.splice(i,1)
                }
            }
            newList.unshift(top[0]);
            return newList
        },
        compare(key){
            return function(value1,value2){
                var val1=value1[key];
                var val2=value2[key];
                return val2-val1;
            }
        },
        visited(sel){
            if(sel==0){
                let newList = [];
                for(let i in this.typeList){
                    for(let j in this.typeList[i].con){
                        if(this.typeList[i].con[j].isVisit){
                            newList.push(this.typeList[i].con[j])
                        }
                    }
                }
                console.log(newList);
                return newList
            }else{
                return this.typeList[sel].con
            }
        }
    },
}
</script>

<style>

</style>