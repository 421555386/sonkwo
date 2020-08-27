<!-- <i class="iconfont  sk-icon-tbrespond"></i> -->
<template>
  <div class="store">
    <v-head>
      <li slot="left" class="left_c2">
        <i class="iconfont sk-icon-tbweizhi"></i>
        <span>大陆站</span>
        <i class="iconfont sk-icon-tbxiangxiazhankai"></i>
      </li>
      <router-link slot="center"  to="/search">
        <li class="center_c2">
          <div class="searchbox">
              <i class="iconfont  sk-icon-tbsearch"></i>
              <span>搜搜你想要的游戏</span>
          </div>
        </li>
      </router-link>
      <router-link slot="right" to='/message'>
        <li class="right_c2">
            <i class="iconfont sk-icon-tbmessage"></i>
        </li>
      </router-link>
    </v-head>
    <router-view></router-view>
    <div>
      <ul class="main">
        <!-- 轮播图 -->
        <li class="swipe">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in mtSwipe">
              <router-link :to="item.path">
                <img :src="item.src" alt="">
              </router-link>
            </mt-swipe-item>
          </mt-swipe>
        </li>
        <!-- 菜单 -->
        <li class="menu">
          <ul>
            <li v-for="(item,index) in sbimg">
              <img :src="item.src">
              <span>{{item.tiltle}}</span>
            </li>
          </ul>
        </li>
        <!-- 头条 -->
        <li class="news">
          <img src="../assets/img/store/logo_lineheight.png">
          <span>赛博朋克RPG《骇游侠探》中文演示发布，9月杉果π提供试玩</span>
        </li>
        <!-- 促销栏 -->
        <li class="promotion">
          <div  v-for="(item,index) in this.$store.state.promotionlist">
            <h1>{{item.tiltle}}</h1>
            <div class="promotionWindow">
              <ul :style="{width: getulwidth(item.list.length)}">
                <li :style="{width:getliwidth(item.list.length)}" v-for="(item2,index) in item.list" @click="toDetails(item2.tiltle)">
                  
                  <img :src="item2.src">
                  <div class="pricetiltle">
                    <span v-if="item2.site" class="label site">{{item2.site}}</span>
                    <span v-if="item2.tiltle" class="gtiltle">{{item2.tiltle}}</span>
                  </div>
                  <div class="pricecontent">
                    <span v-if="item2.nowprice" class="nowprice">{{item2.nowprice}}</span>
                    <span v-if="item2.discount" class="discount">{{item2.discount}}</span>
                    <span v-if="item2.oldprice" class="oldprice">{{item2.oldprice}}</span>
                  </div>
                  
                </li>
              </ul>
            </div>
          </div>
        </li>
        <!-- 列表 -->
        <li>
          <ul class="gameslist">
            <div v-for="(item,index) in this.$store.state.gameslist" class="title">
              <button @click='isClk=index' :class="{current:index==isClk}">{{item.title}}</button>
            </div>
            <li v-for="(item,index) in this.$store.state.gameslist">
              <ul v-if="index==isClk">
                <li v-for="(item2,index) in item.list" @click="toDetails(item2.tiltle)">
                  <img :src="item2.src">
                  <div>
                    <div v-if="item2.site" class="label site">{{item2.site}}</div>
                    <div v-if="item2.dc" class="label dc">{{item2.dc}}</div>
                    <span v-if="item2.tiltle" class="gtiltle">{{item2.tiltle}}</span>
                  </div>
                  <div class="gtypebox">
                    <div v-if="item2.gtype" class="label gtype" v-for="item in item2.gtype">{{item}}</div>
                  </div>
                  <div>
                    <span v-if="item2.nowprice" class="nowprice">{{item2.nowprice}}</span>
                    <span v-if="item2.discount" class="discount white">{{item2.discount}}</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import head from './head'
import '../assets/css/store.css'
export default {
  data(){
    return{
      mtSwipe:[
        {
            src:"./src/assets/img/swipe/discount1.jpg",
            path:'/details',
        },
        {
            src:"./src/assets/img/swipe/discount2.jpg",
            path:'/details',
        },
        {
            src:"./src/assets/img/swipe/discount3.jpg",
            path:'/details',
        },
        {
            src:"./src/assets/img/swipe/discount4.jpg",
            path:'/details',
        },
        {
            src:"./src/assets/img/swipe/discount5.jpg",
            path:'/details',
        },
        {
            src:"./src/assets/img/swipe/discount6.jpg",
            path:'/details',
        },
        {
            src:"./src/assets/img/swipe/discount7.jpg",
            path:'/details',
        },
        {
            src:"./src/assets/img/swipe/discount8.jpg",
            path:'/details',
        },
        {
            src:"./src/assets/img/swipe/discount9.jpg",
            path:'/details',
        },
        {
            src:"./src/assets/img/swipe/discount10.jpg",
            path:'/details',
        },
      ],
      sbimg:[
        {
          src:'./src/assets/img/store/i_activity.jpg',
          tiltle:'活动',
        },
        {
          src:'./src/assets/img/store/i_discount.jpg',
          tiltle:'优惠',
        },
        {
          src:'./src/assets/img/store/i_accessories.jpg',
          tiltle:'周边',
        },
        {
          src:'./src/assets/img/store/i_manufacturer.jpg',
          tiltle:'厂商目录',
        },
      ],
      
      isClk:0,
      fakeName:"人类：一败涂地"
    }
  },
  components:{
      'v-head' : head,
  },
  methods:{
    getulwidth(length){
      if(length<3){
        return 100+'%'
      }
      else{
        return length*40+'%'
      }
    },
    getliwidth(length){
      if(length<3){
        return 40+'%'
      }
      else{
        return (100/length)+'%'
      }
    },
    change(){},
    toDetails(name){
      for(var i in this.$store.state.gameDetails){
          if(this.$store.state.gameDetails[i].title==name){
              this.$router.replace({
                path:`/details/${name}`
              })
          }
          else{
              
          }
      }
      console.log(name);
      return
    }
  },
}
</script>

