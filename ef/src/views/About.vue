<template>
  <div class="about">
    <h1>This is an about page</h1>
    <kindeditor :options="options" v-model="val"></kindeditor>
  </div>
</template>
<script>
import kindeditor from "./kindeditor.vue";
export default {
  name: "about",
  components: { kindeditor },
  data() {
    return {
      val: `<div >
        <h1 style="color:#92d050;font-size:30px;text-align: center;">水利部长江水利委员会</h1>
        <hr/>
           <span style="display: inline-block;margin-right: 30px;">等级 &nbsp&nbsp&nbsp  明电 &nbsp&nbsp&nbsp  长水调电[2020]173号</span>
        <hr/>
        <h2 style="text-align: center;">调度令</h2>
        <p>中国长江三峡集团有限公司:</p>
        <p style="text-indent: 24px;line-height:30px;">请你公司及时起逐步平稳调整溪洛渡，向向家坝水库出库流量，9月18日前按溪洛渡水库水位不超过593米，向家坝水库水位不超过377米控制。调度期间，注意流量平稳过度。</p>
        <p>此令</p>
        <div style="overflow: hidden;">
            <p style="text-align: right;">水利部长江水利委员会</p>
            <p style="text-align: right;">2020年9月9日15时</p>
        </div>
        <br/><br/><br/>
        <p >抄送：水利部水旱灾害防御司，四川、重庆，云南省（直辖市）水利厅（局），交通运输部长江航务管理局，长江三峡通航管理局，国家电网有限公司，中国南方电网有限责任公司</p>
        <br/>
        <br/>
        <hr/>
    </div>`,
      options: {
        width: 400,
        height: 600,
      },
    };
  },

  methods: {},
};
</script>
