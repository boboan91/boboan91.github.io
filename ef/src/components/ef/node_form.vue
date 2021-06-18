<template>
  <div>
    <div class="ef-node-form">
      <el-collapse v-model="isnodeline">
        <el-collapse-item title="对象属性" name="1" v-if="type === 'node'">
          <el-form
            :model="node"
            ref="dataForm"
            label-width="80px"
            v-show="type === 'node'"
          >
            <el-form-item label="类型">
              <el-input v-model="node.type" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="名称">
              <el-input v-model="node.name"></el-input>
            </el-form-item>
            <el-form-item label="测站编号">
              <el-input v-model="node.stcdt"></el-input>
            </el-form-item>
            <el-form-item label="类别编号">
              <el-input v-model="node.stcd"></el-input>
            </el-form-item>
          </el-form>
        </el-collapse-item>

        <el-collapse-item title="站点属性" name="2" v-if="type === 'node'">
          <div>
            <div>
              字体大小 :<span>{{ node.fontSize }}px</span>
            </div>
            <div class="Progress_item">
              <el-slider
                :show-tooltip="false"
                v-model="node.fontSize"
                :min="12"
                :max="22"
                :step="1"
              >
              </el-slider>
            </div>
          </div>
          <div>
            <div>
              字体粗细 :<span>{{ node.fontWeight }}</span>
            </div>
            <div class="Progress_item">
              <el-slider
                :show-tooltip="false"
                v-model="node.fontWeight"
                :min="200"
                :max="700"
                :step="100"
              >
              </el-slider>
            </div>
          </div>
          <div style="margin-bottom:10px;">
            <div>字体颜色 :</div>
            <div class="Progress_item lineColor_item">
              <el-color-picker v-model="node.color"></el-color-picker>
              <el-input v-model="node.color"></el-input>
            </div>
          </div>
          <el-button icon="el-icon-close" size="mini">重置</el-button>
          <el-button
            type="primary"
            icon="el-icon-check"
            @click="save"
            size="mini"
            >保存</el-button
          >
        </el-collapse-item>
        <el-collapse-item title="河道属性" name="3" v-if="type === 'line'">
          <el-form :model="line" ref="dataForm" label-width="80px">
            <el-form-item label="条件">
              <el-input v-model="line.label"></el-input>
            </el-form-item>

            <el-form-item label="线条粗细">
              <div>
                <span>{{ nowLinedata.linewidth }}px</span>
              </div>
              <div class="Progress_item">
                <el-slider
                  :show-tooltip="false"
                  v-model="nowLinedata.linewidth"
                  @change="saveLine"
                  :min="2"
                  :max="10"
                  :step="2"
                >
                </el-slider>
              </div>
            </el-form-item>

            <el-form-item label="线条颜色">
              <div>
                <div class="Progress_item lineColor_item">
                  <el-color-picker
                    v-model="nowLinedata.color"
                    @change="saveLine"
                  ></el-color-picker>
                  <el-input
                    v-model="nowLinedata.color"
                    @keyup.enter.native="saveLine"
                    @blur="saveLine"
                  ></el-input>
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button size="mini" icon="el-icon-close">重置</el-button>
              <el-button
                size="mini"
                type="primary"
                icon="el-icon-check"
                @click="saveLine"
                >保存</el-button
              >
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  data() {
    return {
      visible: true,
      // node 或 line
      type: "node",
      node: {},
      line: {},
      nowLine: null,
      data: {},
      nowLinedata: {},
      isnodeline: ["1", "2", "3"],
    };
  },
  methods: {
    /**
     * 表单修改，这里可以根据传入的ID进行业务信息获取
     * @param data
     * @param id
     */
    nodeInit(data, id) {
      this.type = "node";
      this.data = data;
      data.nodeList.filter((node) => {
        if (node.id === id) {
          this.node = cloneDeep(node);
        }
      });
    },
    lineInit(line, conn) {
      this.type = "line";
      this.line = line;
      this.nowLine = conn;
    },

    lineDataInit(data) {
      this.nowLinedata = data;
    },
    // 修改连线
    saveLine() {
      console.log(this.line);
      this.data.lineList.filter((line) => {
        if (line.from === this.line.from && line.to === this.line.to) {
          line.from = this.nowLinedata.from;
          line.to = this.nowLinedata.to;
          line.label = this.nowLinedata.label;
          line.color = this.nowLinedata.color;
          line.linewidth = this.nowLinedata.linewidth;
        }
      });
      this.$emit("setLineLabel", this.line.from, this.line.to, this.line.label);
      this.$emit("lineStyleChange", this.nowLinedata, this.nowLine);
    },

    save() {
      console.log(this.node);
      this.data.nodeList.filter((node) => {
        if (node.id === this.node.id) {
          node.name = this.node.name;
          node.fontSize = this.node.fontSize;
          node.fontWeight = this.node.fontWeight;
          node.color = this.node.color;
          this.$emit("repaintEverything");
        }
      });
    },
    chooseLineColor() {
      this.$emit("lineStyleChange", this.nowLine);
    },
  },
};
</script>

<style>
.el-node-form-tag {
  position: absolute;
  top: 50%;
  margin-left: -15px;
  height: 40px;
  width: 15px;
  background-color: #fbfbfb;
  border: 1px solid rgb(220, 227, 232);
  border-right: none;
  z-index: 0;
}
</style>
