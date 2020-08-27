<template>
    <div class="headlines">
        <v-head>
            <router-link slot="left" to='/message'>
            <li class="left">
                <i class="iconfont sk-icon-tbmessage"></i>
            </li>
            </router-link>
            <li slot="center" class="center">
                <span>杉果头条</span>
            </li>
            <li slot="right" class="right"></li>
        </v-head>
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
            class="main">
            <li>
                <mt-swipe :auto="400000">
                  <mt-swipe-item v-for="(item,index) in swipeiImg">
                    <img :src='item'>
                  </mt-swipe-item>
                </mt-swipe>
            </li>
            <li>
                <!-- navbar -->
                <mt-navbar v-model="selected">
                  <mt-tab-item id="0">推荐</mt-tab-item>
                  <mt-tab-item id="1">资讯</mt-tab-item>
                  <mt-tab-item id="2">文章</mt-tab-item>
                  <mt-tab-item id="3">视频</mt-tab-item>
                  <mt-tab-item id="4">电台</mt-tab-item>
                </mt-navbar>
                <!-- tab-container -->
                <mt-tab-container v-model="selected">
                  <mt-tab-container-item id="0">
                    <li class="tabbox" v-for="item in recommend">
                        <img class="mainimg" :src="item.src">
                        <h1>{{item.tiltle}}</h1>
                        <img class='avatar' :src="item.avatar">
                        <span class='userName'>{{item.userName}}</span>
                        <span class="from">{{item.from}}</span>
                        <span class="data">{{item.data}}</span>
                    </li>
                  </mt-tab-container-item>
                  <mt-tab-container-item id="1">
                    <li class="tabbox" v-for="item in recommend">
                        <img class="mainimg" :src="item.src">
                        <h1>{{item.tiltle}}</h1>
                        <img class='avatar' :src="item.avatar">
                        <span class='userName'>{{item.userName}}</span>
                        <span class="from">{{item.from}}</span>
                        <span class="data">{{item.data}}</span>
                    </li>
                  </mt-tab-container-item>
                  <mt-tab-container-item id="2">
                  <li class="tabbox" v-for="item in recommend">
                        <img class="mainimg" :src="item.src">
                        <h1>{{item.tiltle}}</h1>
                        <img class='avatar' :src="item.avatar">
                        <span class='userName'>{{item.userName}}</span>
                        <span class="from">{{item.from}}</span>
                        <span class="data">{{item.data}}</span>
                    </li>
                  </mt-tab-container-item>
                  <mt-tab-container-item id="3">
                  <li class="tabbox" v-for="item in recommend">
                    <img class="mainimg" :src="item.src">
                    <h1>{{item.tiltle}}</h1>
                    <img class='avatar' :src="item.avatar">
                    <span class='userName'>{{item.userName}}</span>
                    <span class="from">{{item.from}}</span>
                    <span class="data">{{item.data}}</span>
                  </li>
                  </mt-tab-container-item>
                  <mt-tab-container-item id="4">
                  <li class="tabbox" v-for="item in recommend">
                        <img class="mainimg" :src="item.src">
                        <h1>{{item.tiltle}}</h1>
                        <img class='avatar' :src="item.avatar">
                        <span class='userName'>{{item.userName}}</span>
                        <span class="from">{{item.from}}</span>
                        <span class="data">{{item.data}}</span>
                    </li>
                  </mt-tab-container-item>
                </mt-tab-container>
            </li>
        </ul>
    </div>
</template>

<script>
import head from './head'
import '../assets/css/headlines.css'
export default {
    
    data(){
        return{
            selected:'0',
            headComponent:{
              left:``,
              center:``,
              right:``
            },
            swipeiImg:[
                './src/assets/img/headlines/1.jpg',
                './src/assets/img/headlines/2.jpg',
                './src/assets/img/headlines/3.jpg',
                './src/assets/img/headlines/4.jpg',
                './src/assets/img/headlines/5.jpg',
                './src/assets/img/headlines/6.jpg',
                './src/assets/img/headlines/7.jpg',
                './src/assets/img/headlines/8.jpg',
            ],
            recommend:[
                {
                    src:'./src/assets/img/headlines/9.jpg',
                    tiltle:'孤岛惊魂复刻版发售日公布；《赛博朋克2077》包含免费DLC',
                    avatar:'./src/assets/img/headlines/10.jpg',
                    userName:'杉果-破枪瘦马',
                    data:'8月24日',
                    from:'杉果早报',
                },
                {
                    src:'./src/assets/img/headlines/11.jpg',
                    tiltle:'2077算什么？3D眩晕症噩梦，所有游戏都用第一人称的发行商',
                    avatar:'./src/assets/img/headlines/10.jpg',
                    userName:'杉果-破枪瘦马',
                    data:'8月21日',
                    from:'折扣信息',
                },
                {
                    src:'./src/assets/img/headlines/12.jpg',
                    tiltle:'《漫威复仇者》PC测试周末开始；《微软模拟飞行》退款时限延长',
                    avatar:'./src/assets/img/headlines/10.jpg',
                    userName:'杉果-破枪瘦马',
                    data:'8月21日',
                    from:'杉果早报',
                },
                {
                    src:'./src/assets/img/headlines/13.jpg',
                    tiltle:'赛博朋克RPG《骇游侠探》中文演示发布，9月杉果π提供试玩',
                    avatar:'./src/assets/img/headlines/10.jpg',
                    userName:'杉果-破枪瘦马',
                    data:'8月24日',
                    from:'新闻',
                },
            ]
        }
    },
    components:{
      'v-head' : head,
    },
    methods:{
        loadMore() {
          this.loading = true;
          setTimeout(() => {
            for (let i = 1; i <= 4; i++) {
              let last = this.recommend[this.recommend.length - 4];
              this.recommend.push(last);
            }
            this.loading = false;
          }, 1000);
        }
    }
}
</script>

<style>

</style>