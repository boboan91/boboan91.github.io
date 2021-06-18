<template>
  <div class="about">
    <!-- <h1>This is child page</h1>
    <p>{{ msg }}</p>

    <p style="color:red">
      <slot></slot>
    </p>
    <p style="color:blue">
      <slot name="header"></slot>
    </p>

    <p style="color:pink">
      <slot name="footer"></slot>
    </p>
    <ul>
      <slot v-for="item in toList" :row="item"></slot>
    </ul> -->
    <flow-panel></flow-panel>
  </div>
</template>
<script>
import FlowPanel from '@/components/ef/panel'
export default {
  name: "Child",
  components: {
    FlowPanel,
  },
  props: ["toList"],
  data() {
    return {
      msg: "我是子组件",
    };
  },
  mounted() {
    console.log(this.$slots);
  },
};
</script>
