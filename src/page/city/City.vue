<template>
    <div id="List">
        <div>我是详情415646</div>
        <div @click="goback">去首页</div>
    </div>
</template>
<script>
export default {
 name:'List',
 methods:{
     goback(){
        //  console.log(456465)
        this.$router.back(-1)
     }
 },
 computed:{

 }
}
</script>
<style>

</style>
