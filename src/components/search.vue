<template>
  <div class="search">
        <v-head>
            <li slot="left" class="left">
                <i @click="back()" class="iconfont sk-icon-tbicon-test"></i>
            </li>
            <li slot="center" class="center">
                <div class="searchbox">
                    <i class="iconfont  sk-icon-tbsearch"></i>
                    <input type="text" v-model="searchGame" placeholder="搜搜你想要的游戏">
                </div>
            </li>
            <li slot="right" class="right">
                <span >搜索</span>
            </li>
        </v-head>
        <main>
            <ul><!--  -->
                <li v-if="searchRule(item.tiltle)" class="result" v-for="(item,index) in this.$store.state.allGameslist" @click='toDetails(item.tiltle)'>
                    <img :src="item.src">
                    <div>
                        <div v-if="item.site" class="label site">{{item.site}}</div>
                        <div v-if="item.dc" class="label dc">{{item.dc}}</div>
                        <span v-if="item.tiltle" class="gtiltle">{{item.tiltle}}</span>
                    </div>
                    <div class="gtypebox">
                        <div v-if="item.gtype" class="label gtype" v-for="item2 in item.gtype">{{item2}}</div>
                    </div>
                    <div>
                        <span v-if="item.nowprice" class="nowprice">{{item.nowprice}}</span>
                        <span v-if="item.discount" class="discount white">{{item.discount}}</span>
                    </div>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
import head from './head'
export default {
    data(){
        return{
            searchGame:'',
        }
    },
    components:{
      'v-head' : head,
    },
    methods:{
        back(){
            // this.$router.go(-1)
            //  打开一个新的页面
            // this.$router.push('/movie')
            // 替换页面 
            this.$router.replace('/movie')
        },
        searchRule(name){
            this.searchGame;
            for(var i in this.searchGame){
                if(name.search(this.searchGame[i]) != -1){
                    return true
                }
                else{
                    return false
                }
            }
        },
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
    }
}
</script>

<style>
.search main{
    position: fixed;
    top: 45.6px;
    overflow: scroll;
    width: 100%;
}
.search .searchbox {
    width: 100%;
    color: #fff;
}
.search .searchbox i{
    position: absolute;
    left: 12%;
}
.search .head input{
    background: #777;
    width: 100%;
    padding: 4px 0% 4px 11%;
    box-sizing: border-box;
    border-radius: 4px;
    color: #fff;
}
.search .head input::-webkit-input-placeholder{
    color: #fff;
}
.search main>ul{
    width: 100%;
}
.search main>ul>li{
    height: 100px;
    width: 90%;
    border-bottom: 1px solid #DDD;
    margin: 0px 0% 20px 0%;
    padding: 10px 5%;
}
.search main>ul>li>*{
    float: left;
}
.search main>ul>li>img{
    width: 30%;
}
.search main>ul>li>div{
    margin-left: 10%;
    width: 60%;
}
</style>