<template>
    <ul class="head">
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:['hc'],
}
</script>

<style>
    .head{
        width: 100%;
        position: fixed;
        top: 0px;
        overflow: hidden;
        background: #333;
        height: 45.6px;
        line-height: 45.6px;
        text-align: center;
        color: #CCCCCC;
    }
    .head li{
        float: left;
    }
    .head .left{
        width: 10%;
    }
    .head .center{
        width: 80%;
    }
    .head .right{
        width: 10%;
    }



    .sk-icon-tbweizhi{
        color: #FF5722;
        width: 5px;
    }
    .sk-icon-tbxiangxiazhankai{
        color: #999;
    }
    .sk-icon-tbmessage{
        color: #999;
        font-size: 26px;
    }
    .sk-icon-tbsearch{
        vertical-align: middle;
        font-size: 23px;
    }
</style>