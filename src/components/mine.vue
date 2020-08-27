<template>
<main id="mine">
    <div class="box1">
        <div class="line1">
            <div class="left">
                <img class="avatar" :src="avatar">
                <span class="userName">{{userName}}<img class="memberLevel" :src="memberLevel"></span>
                <p class="playerLevel">{{playerLevel}}</p>
            </div>
            <div class="right">
                <p class="mypage">个人主页></p>
                <span class="label_qd">签到</span>
                <br><span @click="unLogin()">退出登录</span>
            </div>
        </div>
        <div class="line2">
            <span class="integral">积分：{{integral}}</span>
            <span class="fruitCoin"><img class="icon" src="../assets/img/mine/ficon.png">果币：{{fruitCoin}}</span>
            <span class="task">做任务赚积分>></span>
        </div>
    </div>
    <div class="box2">
        <ul>
            <li>
                <router-link to='/message'>
                    信息中心
                    <i class="iconfont sk-icon-tbicon-test1"></i>
                    <span class="newac">果友互动，降价促销</span>
                </router-link>
            </li>
            <li>
                点评
                <mt-badge size="small" type="error">3</mt-badge>
                <i class="iconfont sk-icon-tbicon-test1"></i>
            </li>
        </ul>
    </div>
    <div class="box3">
        <ul>
            <li v-for="item in menuList">
                <img :src="item.src">
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</main>
</template>

<script>
export default {
    data(){
        return{
            avatar:'./src/assets/img/mine/default.jpg',
            userName:'用户10086',
            memberLevel:'./src/assets/img/mine/v2.png',
            playerLevel:'普通玩家',
            integral:8,
            fruitCoin:1.1,
            menuList:[
                {
                    src:'./src/assets/img/mine/dd.png',
                    title:'订单'
                },
                {
                    src:'./src/assets/img/mine/jhm.png',
                    title:'激活码'
                },
                {
                    src:'./src/assets/img/mine/xyd.png',
                    title:'心愿单'
                },
                {
                    src:'./src/assets/img/mine/yhj.png',
                    title:'优惠劵'
                },
                {
                    src:'./src/assets/img/mine/sc.png',
                    title:'收藏'
                },
                {
                    src:'./src/assets/img/mine/gt.png',
                    title:'果贴'
                },
                {
                    src:'./src/assets/img/mine/xz.png',
                    title:'小组'
                },
                {
                    src:'./src/assets/img/mine/yx.png',
                    title:'游戏'
                },
                {
                    src:'./src/assets/img/mine/jbxx.png',
                    title:'基本信息'
                },
                {
                    src:'./src/assets/img/mine/zhaq.png',
                    title:'账号安全'
                },
                {
                    src:'./src/assets/img/mine/shdz.png',
                    title:'收货地址'
                },
                {
                    src:'./src/assets/img/mine/qb.png',
                    title:'钱包'
                },
            ]
        }
    },
    methods:{
        unLogin(){
            this.$store.commit('unlogin')
            this.$router.replace({
                path:`index`
            })
        }
    }
}
</script>

<style>
#mine{
    top: 0px;
    height: calc(100% - 45.6px);
}
.box1{
    width: 88%;
    padding: 6% 6%;
    background-image: linear-gradient(#333,rgb(51,57,77));
    color: #FFF;
    overflow: hidden;
}
.box1>*{
    float: left;
    vertical-align: top;
}
.box1 .line1{
    width: 100%;
}
.box1 .line1 .left{
    float: left;
    width: 70%;
    line-height: 30px;
}
.avatar{
    width: 54px;
    float: left;
}
.userName{
    margin-left: 14px;
}
.playerLevel{
    margin-left: 68px;
    font-size: 12px;
    color: #999;
}

.box1 .line1 .right{
    float: right;
    width: 30%;
    text-align: right;
    line-height: 30px;
}
.mypage{
    font-size: 14px;
    color: #999;
}
.label_qd{
    border: 1px solid #ff5700;
    color: #ff5700;
    padding: 5px 20px;
    font-size: 10px;
    border-radius: 20px;
}
.line2{
    width: 100%;
    margin: 20px 0px;
    font-size: 12px;
}
.integral{
    color: #ff5700;
}
.fruitCoin{
    margin-left: 10px;
}
.task{
    float: right;
    color: #666;
}
.memberLevel{
    width: 15px;
}
.icon{
    margin-right: 10px;
    width: 16px;
}
main .box2{
    border-bottom: 20px solid #EFEFEF;
}
.box2 li{
    height: 50px;
    line-height: 50px;
    padding: 0px 10px;
}
.box2 .newac{
    font-size: 11px;
    color: #666;
    float: right;
}
.box2 .mint-badge{
    line-height: 10px;
    width: 9px;
    height: 9px;
    position: relative;
    bottom: 10px;
    padding: 2px 2px;
    border-radius: 50%;
}
.box3 ul{
    overflow: hidden;
}
.box3 li{
    width: 25%;
    height: 100px;
    padding: 20px 0px;
    float: left;
    text-align: center;
    box-sizing: border-box;
}
.box3 li img{
    width: 30px;
}
.box3 li span{
    display: inline-block;
    width: 100%;
}

</style>