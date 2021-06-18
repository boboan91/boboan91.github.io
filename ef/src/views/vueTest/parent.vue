<template>
  <div class="about">
    <h1>This is parent page</h1>
    <p>{{msg}}</p>
    <Child :toList="toList">
      <!-- 普通插槽 -->
      <p>插槽的内容</p>

      具名插槽
      <template v-slot:header>
            <h1>Here might be a page title</h1>
        </template>

        <p>A paragraph for the main content.</p>
        <p>And another one.</p>

        <template v-slot:footer>
            <p>Here's some contact info</p>
      </template>
        <template v-slot:default="props">
            <p>{{props.row}}</p>
        </template>
    </Child>
  </div>
</template>
<script>
import Child from "./child.vue";
export default {
  name: "Parent",
  components: {
    Child
  },
  data() {
    return {
      msg: "我是父组件",
      toList: [
        {
          id: 1,
          name: "js",
          price: 100
        },
        {
          id: 2,
          name: "vue",
          price: 200
        },
        {
          id: 3,
          name: "java",
          price: 300
        }
      ]
    };
  },
  methods: {
    getRow(scope) {
      console.log(scope);
    }
  }
};
</script>
