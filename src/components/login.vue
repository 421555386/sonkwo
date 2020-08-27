<template>
    <div class="login">
        <v-head>
            <li @click="back()" slot="left" class="left">
                <span>关闭</span>
            </li>
            <li slot="center" class="center">
                <span>登录</span>
            </li>
            <router-link slot="right" to='/register'>
                <li class="right">
                    <span>注册</span>
                </li>
            </router-link>
        </v-head>
        <div class="main">
            <img class="logo" src="../assets/img/login/login_logo.png" alt="">
            <form class="form">
                <div class="txt">
                    <label for="phoneOrEmil">
                        <i class="iconfont sk-icon-tbicon_mobilephone"></i>
                    </label>
                    <input type="text" name="" id="phoneOrEmil" placeholder="请输入手机号/邮箱" v-model="phoneOrEmil">
                </div>
                <div class="txt">
                    <label for="password">
                        <i class="iconfont sk-icon-tblocking"></i><i class="iconfont sk-icon-tbeye_protection"></i>
                    </label>
                    <input type="text" name="" id="password" placeholder="请输入密码" v-model="password">
                </div>
                <div class="problem">
                    <mt-popup
                      v-model="popupVisible"
                      position="bottom">
                      <ul class="solve">
                          <li>找回密码</li>
                          <li>客服中心</li>
                          <li>关闭</li>
                      </ul>
                    </mt-popup>
                    <span @click='popupVisible=true'>登录遇到问题</span>
                </div>
                <div>
                    <input class="submit" type="submit" value="登录" @click="login()">
                </div>
                <div class="quicklogin">
                    <span>手机号快捷登录</span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import head from './head'
import '../assets/css/login&register.css'
export default {
    data(){
        return{
            popupVisible:false,
            phoneOrEmil:'',
            password:'',
        }
    },
    components:{
      'v-head' : head,
    },
    methods:{
        back(){
            this.$router.replace('/movie')
        },
        login(){
            for(var i in this.$store.state.user){
                if(this.phoneOrEmil == this.$store.state.user[i].phoneOrEmil){
                    if(this.password == this.$store.state.user[i].password){
                        this.$store.commit('login');
                        if(this.$store.state.reqPath==''){
                            this.$router.replace({
                                path:`/index`
                            })
                            return
                        }
                        else{
                            this.$router.replace({
                                path:`${this.$store.state.reqPath}`
                            })
                            return
                        }
                    }
                }
            }
            alert('手机号/邮箱或密码错误，请重新输入')
            return
        }
    }
}
</script>

<style></style>