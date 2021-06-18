<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <input @[eventName]="event" />
    <button @click="eventName='change'">change</button>
    <button @click="eventName='focus'">focus</button>
    <button @click="changeList">focus</button>
    <p v-for="(item,i) in list" :key="i">{{item.a}}</p> -->
    <!-- <child></child> -->
    <!-- <parent></parent> -->
    <olmap />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import olmap from '../components/olmap.vue'
// import Vue from 'vue';
// const child = Vue.component('child', function (resolve) {
//     setTimeout(function () {
//         require(['./vueTest/child.vue'], resolve)
//     }, 3000);
// });
// const parent = Vue.component('parent', function (resolve) {
//     require(['./vueTest/parent.vue'], resolve)
// });
export default {
  name: 'Home',
  components: {
    // HelloWorld
    // child,
    // parent,
    olmap
  },
  data(){
    return{
      msg:'',
      eventName:'',
      list:[{a:1},{a:2},{a:3},{a:4}]
    }
  },
  methods:{
    event(){
      console.log('触发了' + this.eventName + '事件')
    },
    changeList(){
      this.list.map(item=>item.a = 9)
    }
  }
}
</script>
<style scoped>
  .home{
    height :1000px
  }
</style>
