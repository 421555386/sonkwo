<template>
    <div>
        <v-head>
            <li slot="left" class="left">
                <i @click="back()" class="iconfont sk-icon-tbicon-test"></i>
            </li>
            <li slot="center" class="center">
                <span>{{gameDetail.title}}</span>
            </li>
            <li slot="right" class="right">
                
            </li>
        </v-head>
        <div class="details">
            <video :src="gameDetail.videosrc" controls></video>
            <ul class="syn">
                <li><h1>{{gameDetail.title}}</h1></li>
                <li><h6 class="title_en">{{gameDetail.title_en}}</h6></li>
                <li>
                    <span v-if="gameDetail.nowprice" class="nowprice">{{gameDetail.nowprice}}</span>
                    <span v-if="gameDetail.discount" class="discount white">{{gameDetail.discount}}</span>
                    <span v-if="gameDetail.oldprice" class="oldprice">{{gameDetail.oldprice}}</span>
                </li>
            </ul>
            <ul class="tab">
                <li><h4>激活方式</h4><span><a class="distab" href="https://store.steampowered.com/">{{gameDetail.platform}}</a>安装激活</span></li>
                <li @click="isShowP=true"><span class="discount white">促销</span><span class="distab">共有{{gameDetail.papers.length}}张优惠券</span><i class="iconfont sk-icon-tbicon-test1"></i></li>
            </ul>
            <div @click="isShowE=true">
                <h4>版本</h4><span class="distab">此游戏共有{{gameDetail.editions.length}}个版本</span><i class="iconfont sk-icon-tbicon-test1"></i>
            </div>
            <ul class="tab">
                <li @click="isShowS=true"><h4>发售详情</h4><i class="iconfont sk-icon-tbicon-test1"></i></li>
                <li @click="isShowC=true"><h4>配置详情</h4><i class="iconfont sk-icon-tbicon-test1"></i></li>
            </ul>
            <ul class="introduce">
                <h2>游戏介绍</h2>
                <li v-for="(item,index) in gameDetail.editions">
                   <h3>{{item.edition}}</h3>
                   <p v-html="item.introduce"></p>
                </li> 
            </ul>
        </div>
        <ul class="bottombar">
            <li class="w">
                <div>
                    <i class="iconfont sk-icon-tbcart"></i><br>
                    <span>购物车</span>
                </div>
                <div>
                    <i class="iconfont sk-icon-tbxihuan"></i><br>
                    <span>收藏</span>
                </div>
            </li>
            <li class="y">
                <span>加入购物车</span>
            </li>
            <li class="s">
                <span>立即购买</span>
            </li>
        </ul>
        <div class="poppage paperspage" v-show="isShowP==true">
            <ul>
                <li class="header">
                    <h4>
                        <span>领取优惠券</span>
                        <i  @click="isShowP=false" class="iconfont sk-icon-tbicon_closed"></i>
                    </h4>
                </li>
                <li v-for="(item,index) in gameDetail.papers">
                    <div>
                        <div class="left">
                            <span class="unit">{{item.unit}}</span>
                            <span class="decrease">{{item.decrease}}</span>
                        </div>
                        <div class="center">
                            <p class="tiltle">{{item.tiltle}}</p>
                            <span class="closingDate">截止到 {{item.closingDate}}</span>
                        </div>
                        <div class="right" @click="showToast()">
                            <span>领取</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="poppage editionspage" v-show="isShowE==true">
            <ul>
                <li class="header">
                    <h4>
                        <span>此游戏的其它版本</span>
                        <i  @click="isShowE=false" class="iconfont sk-icon-tbicon_closed"></i>
                    </h4>
                </li>
                <li @click="Selted=index" :class="{selted:Selted==index,selts:true}" v-for="(item,index) in gameDetail.editions">
                    <span class="edition">{{item.edition}}</span>
                    <span class="price">{{item.price}}</span>
                </li>
                <li :class="{hadselt:Selted!=-1,buy:true}">前往购买</li>
            </ul>
        </div>
        <div class="poppage salepage" v-show="isShowS==true">
            <ul>
                <li class="header">
                    <h4>
                        <span>发售详情</span>
                        <i  @click="isShowS=false" class="iconfont sk-icon-tbicon_closed"></i>
                    </h4>
                </li>
                <li>
                    <span class="tiltle">开发商</span>
                    <div class="labelbox">
                        <span class="labels">{{gameDetail.publisher.developers}}</span>
                    </div>
                    
                </li>
                <li>
                    <span class="tiltle">发行商</span>
                    <div class="labelbox">
                        <span class="labels">{{gameDetail.publisher.publisher}}</span>
                    </div>
                </li>
                <li class="issueDate">
                    <span class="tiltle">发行日期</span>
                    <div class="labelbox">
                        <span>{{gameDetail.publisher.issueDate}}</span>
                    </div>
                </li>
                <li>
                    <span class="tiltle">游戏语言</span>
                    <div class="labelbox">
                        <span class="labels" v-for="(item,index) in gameDetail.publisher.language">{{item}}</span>
                    </div>
                </li>
                <li>
                    <span class="tiltle">下载方式</span>
                    <div class="labelbox">
                        <span class="labels" v-for="(item,index) in gameDetail.publisher.downloadMethod">{{item}}</span>
                    </div>
                </li>
                <li>
                    <span class="tiltle">支持系统</span>
                    <div class="labelbox">
                        <span class="labels" v-for="(item,index) in gameDetail.publisher.supportSystem">{{item}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="poppage configurepage" v-show="isShowC==true">
            <ul>
                <li class="header">
                    <h4>
                        <span>配置详情</span>
                        <i  @click="isShowC=false" class="iconfont sk-icon-tbicon_closed"></i>
                    </h4>
                </li>
                <div :class="{configures:true,current:index==isConfigure}" v-for="(item,index) in gameDetail.configure" @click="isConfigure=index">{{item.platform}}</div>
                <li v-for="(item,index) in gameDetail.configure" v-if="isConfigure==index">
                    <mt-navbar class="tabTabF" v-model="selected">
                      <mt-tab-item id="1">最低配置</mt-tab-item>
                      <mt-tab-item id="2">推荐配置</mt-tab-item>
                    </mt-navbar>
                    <div class="ctrl">
                    <mt-tab-container class="tabTab" v-model="selected">
                        <mt-tab-container-item id="1">
                            <table class="configTable">
                                <tr v-for="(item2,index) in item.minconfig">
                                    <td class="column">{{index}}</td>
                                    <td>
                                        <mt-cell id="con" :title="item2" />
                                    </td>
                                </tr>
                            </table>
                        </mt-tab-container-item>
                    </mt-tab-container>
                    <mt-tab-container class="tabTab" v-model="selected">
                        <mt-tab-container-item id="2">
                            <table class="configTable">
                                <tr v-for="(item2,index) in item.recconfig">
                                    <td class="column">{{index}}</td>
                                    <td>
                                        <mt-cell id="con" :title="item2" />
                                    </td>
                                </tr>
                            </table>
                        </mt-tab-container-item>
                   </mt-tab-container>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import '../assets/css/details.css'

import head from './head'
export default {
    
    data(){
        return{
            isShowP:false,
            isShowE:false,
            isShowS:false,
            isShowC:false,
            Selted:-1,
            isConfigure:0,
            selected:'1',
            gameDetail:this.getDetail(),

        }
    },
    components:{
      'v-head' : head,
    },
    methods:{
        back(){
            this.$router.replace('/movie')
        },
        showToast(){
            Toast({
              message: "领取成功", //弹窗内容
              position: "middle", //弹窗位置
              duration: 800, //弹窗时间毫秒,如果值为-1，则不会消失
            });
        },
        getDetail(){
            var gameDetails = this.$store.state.gameDetails
            for(var i in gameDetails){
                if(gameDetails[i].title==this.$route.params.name){
                    return gameDetails[i]
                }
            }
        }
    }
}
</script>

<style>
video{
    width: 100%;
    height: 210px;
    object-fit: fill;
}
</style>