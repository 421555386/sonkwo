<template>
    <div>
        <router-view></router-view>
        <ul class="nav">
            <li v-for="(item,index) in pathList" @click="pageTo(item.path)">
                <i :class="item.icon"></i>
                <p>{{item.p}}</p>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return{
            pathList:[
                {
                    path:'/store',
                    icon:"iconfont  sk-icon-tbchild",
                    p:'商城',
                },
                {
                    path:'/headlines',
                    icon:"iconfont  sk-icon-tbinstruction",
                    p:'头条',
                },
                {
                    path:'/community',
                    icon:"iconfont sk-icon-tbtaolunqu",
                    p:'社区',
                },
                {
                    path:'/Cart',
                    icon:"iconfont  sk-icon-tbcart",
                    p:'购物车',
                },
                {
                    path:'/mine',
                    icon:"iconfont  sk-icon-tbnickname",
                    p:'我的',
                }
            ]
        }
    },
    methods:{
        pageTo(path){
            var isLogin = this.$store.state.isLogin;
            if(this.$route.path==path){
                return
            }
            this.$store.state.reqPath = path;
            if(path=='/Cart'||path=='/mine'){
                if(isLogin==false){
                    this.$router.replace({
                        path:`/login`
                    })
                }
                else{
                    this.$router.replace({
                        path:`${path}`
                    })
                }
            }
            else{
                this.$router.replace({
                    path:`${path}`
                })
            }
        }
    }
}
</script>

<style>
    

    .nav{
        position: fixed;
        bottom: 0px;
        width: 100%;
    }
    .nav li{
        float: left;
        width: 20%;
        text-align: center;
        background: #333;
        color: #AFAFAF;
    }
    
    .nav i{
        font-size: 30px;
        color: #AFAFAF;
    }
    .nav p{
        font-size: 10px;
        position: relative;
        bottom: 5px;
        color: #AFAFAF;
    }
    .router-link-active li i{
        color: #FF5722;
    }
    .router-link-active li p{
        color: #FF5722;
    }
</style>