<template>
  <div id="demo">
  <button v-on:click="btnClick">
    Toggle
  </button>
  <transition name="fade">
    <!-- <p v-if="show">hello</p> -->
    <div  id="box">content</div>
  </transition>
  <div v-demo="{ color: 'red', text: 'hello!' }">自定义指令的box</div>

  <input type="text" v-focus placeholder="我有v-focus,所以,我获取了焦点">
</div>
</template>
<script>
    export default {
        name:"VueDemo",
        data(){
            return{
                show: true
            }
        },
        mounted(){
        },
        methods:{
            btnClick(){
                this.show = !this.show
                let dis = this.show?0:300;
                document.getElementById('box').style.marginLeft = dis +'px'
            }
        }
    }
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
#box{
    width: 200px;
    height: 200px;
    background: gray;
    transition:2s
}
</style>