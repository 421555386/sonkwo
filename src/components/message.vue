<template>
<div class="message">
    <v-head>
        <li slot="left" class="left">
            <i @click="back()" class="iconfont sk-icon-tbicon-test"></i>
        </li>
        <li slot="center" class="center">
            <span>消息中心</span>
        </li>
        <li slot="right" class="right">
            
        </li>
    </v-head>
    <main>
        <ul>
            <li>
                <i class="iconfont sk-icon-tbxiaoxi"></i>
                <span>评论/回复我的</span>
                <i class="iconfont sk-icon-tbicon-test1"></i>
            </li>
            <li>
                <i class="iconfont">@</i>
                <span>提到我的</span>
                <i class="iconfont sk-icon-tbicon-test1"></i>
            </li>
            <li>
                <i class="iconfont sk-icon-tbdianzan"></i>
                <span>赞和关注</span>
                <i class="iconfont sk-icon-tbicon-test1"></i>
            </li>
            <li>
                <img src="../assets/img/gxm.png">
                <span>果小蜜</span>
                <i class="iconfont sk-icon-tbicon-test1"></i>
            </li>
        </ul>
    </main>
</div>
</template>

<script>
import head from './head'
export default {

    components:{
      'v-head' : head,
    },
    methods:{
        back(){
           this.$router.replace('/movie')
        },
    }
}
</script>

<style>
.message main{
    width: 100%;
    position: fixed;
    top: 45.6px;
    height: calc(100% - 45.6px);
    overflow: auto;
}
.message main ul li{
    padding: 0 10px 0 20px;
    font-size: 20px;
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid #efefef;
}
.message main ul li .iconfont{
    font-size: 33px;
    margin-right: 28px;
}
.message main ul li img{
    vertical-align: middle;
    margin-right: 10px;
    width: 50px;
}
</style>