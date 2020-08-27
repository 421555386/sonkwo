<template>
    <div class="register">
        <v-head>
            <li @click="toLogin()" slot="left" class="left">
                <span>登录</span>
            </li>
            <li slot="center" class="center">
                <span>注册</span>
            </li>
            <router-link slot="right" to='/register'>
                <li class="right">
                    <span>注册</span>
                </li>
            </router-link>
        </v-head>
        <div class="main">
            <img class="logo" src="../assets/img/login/login_logo.png" alt="">
            <form class="form" action="">
                <div class="area">
                    <i class="iconfont  sk-icon-tbweizhi"></i>
                    <span>中国</span>
                    <h6>根据你所在的区域自动识别，不可修改</h6>
                </div>
                <div class="txt">
                    <label for="phone_emil">
                        <i class="iconfont sk-icon-tbicon_mobilephone"></i>
                    </label>
                    <input type="text" name="" id="phone_emil" placeholder="请输入手机号/邮箱" v-model="phoneOrEmil">
                </div>
                <div class="txt">
                    <label for="vcode">
                        <i class="iconfont sk-icon-tbicon_dmail"></i>
                    </label>
                    <input type="text" name="" id="vcode" placeholder="请输入短信验证码">
                    <button class="obtain">获取</button>
                </div>
                <div class="txt">
                    <label for="password">
                        <i class="iconfont sk-icon-tblocking"></i>
                        <i class="iconfont sk-icon-tbeye_protection"></i>
                    </label>
                    <input type="text" name="" id="password" placeholder="请输入密码" v-model="password">
                </div>
                <div class="sliber">
                    <span class="labsliber">请向右滑动验证块</span>
                    <mt-range
                      v-model="rangeValue"
                      :min="0"
                      :max="1000"
                      :step="1"
                      :bar-height="40">
                    </mt-range>
                </div>
                <div>
                    <input class="submit" type="submit" value="注册" @click="register()">
                </div>
            </form>
            <footer>
                <p>
                    注册代表你同意
                    <span class="agmen">《杉果协议》</span>
                    和
                    <span class="agmen">《隐私协议》</span>
                </p>
            </footer>
        </div>
    </div>
</template>

<script>
import head from './head'
//import '../assets/css/login.css'
export default {
    data(){
        return{
            popupVisible:true,
            rangeValue:0,
            phoneOrEmil:'',
            password:'',
        }
    },
    components:{
      'v-head' : head,
    },
    methods:{
        toLogin(){
            this.$router.replace('/login')
        },
        register(){
            var newUser = {
                phoneOrEmil:'',
                password:''
            };
            newUser.phoneOrEmil = this.phoneOrEmil;
            newUser.password = this.password;
            for(var i in this.$store.state.user){
                if(newUser.phoneOrEmil == this.$store.state.user[i].phoneOrEmil){
                    alert('该手机号/邮箱已被注册');
                    return
                }
            }
            this.$store.state.user.push(newUser);
            alert('注册成功,即将跳转至登录界面');
            this.$router.replace({
                path:`/login`
            });
        }
    }
}
</script>

<style>

</style>