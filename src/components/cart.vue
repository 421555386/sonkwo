<template>
    <div class="cart">
        <v-head>
            <li slot="left" class="left">
                <i @click="back()" class="iconfont sk-icon-tbicon-test"></i>
            </li>
            <li slot="center" class="center">
                <span>购物车</span>
            </li>
            <li slot="right" class="right" @click="isEdit=!isEdit">
                <span v-if="isEdit==false">编辑</span>
                <span v-if="isEdit==true">完成</span>
            </li>
        </v-head>
        <main>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">游戏</mt-tab-item>
                <mt-tab-item id="2">周边</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <ul>
                        <li class="topbar">
                            <input v-model="landIsAllSet" class="checkbox"  @click="selMainland()" type="checkbox">
                            <label>大陆站({{mainland.length}})</label>
                            <div @click="isOpen1=!isOpen1" v-if="isOpen1==true">
                                <span >缩放</span>
                                <i class="iconfont sk-icon-tbfold"></i>
                            </div>
                            <div @click="isOpen1=!isOpen1" v-if="isOpen1==false">
                                <span>展开</span>
                                <i class="iconfont sk-icon-tbxiangxiazhankai"></i>
                            </div>
                        </li>
                        <li v-for="(item,index) in mainland" v-if="isOpen1==true" class="cartList">
                            <input @click="hadSel(item.state)" v-model="item.state" class="checkbox"  type="checkbox">
                            <div>
                                <img :src="item.src">
                                <div class="dico_label">有优惠可用</div>
                            </div>
                            <div>
                                <div class="name">{{item.name}}</div>
                                <div class="nowprice">{{item.unit}}{{item.price}}</div>
                                <div class="papers">{{item.discoundpapers}}</div>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li class="topbar">
                            <input v-model="intIsAllSet" class="checkbox"  @click="selInt()" type="checkbox">
                            <label>国际站({{international.length}})</label>
                            <div @click="isOpen2=!isOpen2" v-if="isOpen2==true">
                                <span>缩放</span>
                                <i class="iconfont sk-icon-tbfold"></i>
                            </div>
                            <div @click="isOpen2=!isOpen2" v-if="isOpen2==false">
                                <span>展开</span>
                                <i class="iconfont sk-icon-tbxiangxiazhankai"></i>
                            </div>
                        </li>
                        <li v-for="(item,index) in international" v-if="isOpen2==true" class="cartList">
                            <input @click="hadSel(item.state)" v-model="item.state" class="checkbox"  type="checkbox">
                            <div>
                                <img :src="item.src">
                                <div class="dico_label">有优惠可用</div>
                            </div>
                            <div>
                                <div class="name">{{item.name}}</div>
                                <div class="nowprice">{{item.unit}}{{item.price}}</div>
                                <div class="papers">{{item.discoundpapers}}</div>
                            </div>
                        </li>
                    </ul>
                </mt-tab-container-item>
                
                <mt-tab-container-item id="2">
                    
                </mt-tab-container-item>
            </mt-tab-container>
            <footer>
                <input v-model="isAllSet" class="checkbox" @click="allSel()" type="checkbox">
                <label for="all">全选</label> 
                <span class="zj">总计：{{calculation()}}</span> 
                <span class="submit" v-if="!isEdit" :class='{usable:isHadSel}'>去结算</span>
                <span class="submit" v-if="isEdit" :class='{usable:isHadSel}'>删除</span>
            </footer>
        </main>
    </div>
</template>

<script>
import head from './head'
export default {
    data(){
        return{
            selected:'1',
            isOpen1:true,
            isOpen2:true,
            isEdit:false,
            isHadSel:false,
            landIsAllSet:false,
            intIsAllSet:false,
            isAllSet:false,
            mainland:[
                {
                    state:false,
                    src:'./src/assets/img/games/SKEIRO.jpg',
                    name:'之狼：影逝二度',
                    unit:'￥',
                    price:174.0,
                    discoundpapers:'',
                },
            ],
            international:[
                {
                    state:false,
                    src:'./src/assets/img/games/Deathendre.jpg',
                    name:'死亡终局 轮回试炼 2',
                    unit:'￥',
                    price:199.0,
                    discoundpapers:'',
                },
                {
                    state:false,
                    src:'./src/assets/img/games/NBA-2K20.jpg',
                    name:'NBA 2K20',
                    unit:'￥',
                    price:16.0,
                    discoundpapers:'',
                },
                {
                    state:false,
                    src:'./src/assets/img/games/SKEIRO.jpg',
                    name:'之狼：影逝二度',
                    unit:'￥',
                    price:174.0,
                    discoundpapers:'',
                },
            ],
        }
    },
    components:{
      'v-head' : head,
    },
    methods:{
        back(){
            this.$router.replace('/movie')
        },
        allSel(){
            if(this.isAllSet==true){
                this.landIsAllSet=false
                this.intIsAllSet=false
                for(var i = 0;i<this.mainland.length;i++){
                this.mainland[i].state=false
                }
                for(var i = 0;i<this.international.length;i++){
                    this.international[i].state=false
                }
                this.isHadSel=false;
            }else{
                this.landIsAllSet=true
                this.intIsAllSet=true
                for(var i = 0;i<this.mainland.length;i++){
                this.mainland[i].state=true
                }
                for(var i = 0;i<this.international.length;i++){
                    this.international[i].state=true
                }
                this.isHadSel=true;
            }
        },
        selMainland(){
            if(this.landIsAllSet==true){
                for(var i = 0;i<this.mainland.length;i++){
                    this.mainland[i].state=false;
                    if(this.intIsAllSet==false){
                        this.isHadSel=false;
                    }
                }
            }else{
                for(var i = 0;i<this.mainland.length;i++){
                    this.mainland[i].state=true;
                    this.isHadSel=true;
                }
            }
            
        },
        selInt(){
            if(this.intIsAllSet==true){
                for(var i = 0;i<this.international.length;i++){
                    this.international[i].state=false;
                    if(this.landIsAllSet==false){
                        this.isHadSel=false;
                    }
                }
            }else{
                for(var i = 0;i<this.international.length;i++){
                    this.international[i].state=true;
                    this.isHadSel=true;
                }
            }
        },
        calculation(){
            var num = 0
            for(let i = 0;i<this.mainland.length;i++){
                if(this.mainland[i].state){
                    num = num + this.mainland[i].price;
                }
            }
            for(let i = 0;i<this.international.length;i++){
                if(this.international[i].state){
                    num = num + this.international[i].price;
                }
            }
            return num;
        },
        hadSel(state){
            if(state==false){
                this.isHadSel=true;
            }else{
                this.isHadSel=false;
            }
            
        }
    }
}
</script>

<style>
.cart .right{
    color: #999;
}
.cart main{
    width: 100%;
    position: fixed;
    top: 45.6px;
    height: calc(100% - 136.8px);
    overflow: auto;
    background:#EFEFEF;
}
.cart main .mint-navbar{
    background:#333;
    width: 100%;
}
.cart main .mint-navbar .mint-tab-item{
    color: #fff;
}
.cart main .mint-navbar .mint-tab-item.is-selected{
    border-bottom:#ff5722 3px solid; 
    color: #ff5722;
}

.topbar{
    padding: 00px 15px;
    height: 50px;
    line-height: 50px;
    margin-top: 10px;
    background: white;
}
.topbar>div{
    float: right;
}
.cart .checkbox{
    border-radius: 50%;
}
footer>.checkbox,.topbar>.checkbox{
    margin-left: 4%;
}
.cartList>input{
    margin-left: 4%;
    margin-top: 12%;
}
.cartList{
    padding: 20px 15px;
    background: white;
    overflow: hidden;
    border-top: 1px solid #EFEFEF;
    width: calc(100% - 30px) ;
}
.cartList>*{
    float: left;
}
.cartList>div{
    width: 40%;
    margin-left: 4%;
}

.cartList>div>img{
    width: 100%;
}
.cartList .dico_label{
    float: left;
    width: 100px;
    height: 20px;
    line-height: 20px;
    background: url('../assets/img/papers.jpg') no-repeat;
    background-size: 100%;
    font-size: 10px;
    text-align: center;
} 
.cartList .name{
    margin-bottom: 18%;
}


footer{
    position: fixed;
    bottom: 45.6px;
    width: 95%;
    height: 45.6px;
    border-top: 1px solid black;
    line-height: 45.6px;
    padding: 0px 0px 0px 5%;
}
footer .submit{
    width: 30%;
    text-align: center;
    background: #CCC;
    color: #fff;
    float: right;
}
footer .usable{
    background: #ff5722;
}
footer .zj{
    color: #ff5722;
}
</style>