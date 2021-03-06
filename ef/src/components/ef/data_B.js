let dataB = {
  name: "流程B",
  nodeList: [
    {
      id: "nodeA",
      type: "skq_1",
      stcdt: "",
      stcd: "61003101",
      name: "隔河岩",
      left: "118px",
      top: "223px",
      rotate: "icon_rotate_top",
      ico: "el-icon-user-solid",
      fontSize: 12,
      resInfo: null,
      haveRes: false,
      color: "#000",
      fontWeight: 400,
      levels: "3",
      show: true,
      generalizedGraphId: 96,
      classname: "sk",
    },
    {
      id: "nodeB",
      type: "skq_1",
      stcdt: "",
      stcd: "61003101",
      name: "向家坝",
      left: "451px",
      top: "96px",
      rotate: "icon_rotate_top",
      ico: "el-icon-user-solid",
      fontSize: 12,
      resInfo: null,
      haveRes: false,
      color: "#000",
      fontWeight: 400,
      levels: "3",
      show: true,
      generalizedGraphId: 96,
      classname: "sk_sim",
    },
    {
      id: "nodeC",
      type: "skq_1",
      stcdt: "",
      stcd: "61003101",
      name: "溪洛渡",
      left: "454px",
      top: "351px",
      rotate: "icon_rotate_top",
      ico: "el-icon-user-solid",
      fontSize: 12,
      resInfo: null,
      haveRes: false,
      color: "#000",
      fontWeight: 400,
      levels: "3",
      show: true,
      generalizedGraphId: 96,
      classname: "swz",
    },
    {
      id: "nodeD",
      type: "skq_1",
      stcdt: "",
      stcd: "61003101",
      name: "三峡",
      left: "823px",
      top: "215px",
      rotate: "icon_rotate_top",
      ico: "el-icon-user-solid",
      fontSize: 12,
      resInfo: null,
      haveRes: false,
      color: "#000",
      fontWeight: 400,
      levels: "3",
      show: true,
      generalizedGraphId: 96,
      classname: "swz_sim",
    },
  ],
  lineList: [
    {
      from: "nodeA",
      to: "nodeB",
      label: "条件A",
      color: "#FF5280",
      linewidth: 3,
      generalizedGraphId: 96,
    },
    {
      from: "nodeA",
      to: "nodeC",
      label: "条件B",
      color: "#000",
      linewidth: 2,
      generalizedGraphId: 96,
    },
    {
      from: "nodeB",
      to: "nodeD",
      color: "#52bcff",
      linewidth: 2,
      generalizedGraphId: 96,
    },
    {
      from: "nodeC",
      to: "nodeD",
      color: "#52bcff",
      linewidth: 2,
      generalizedGraphId: 96,
    },
  ],
};

export function getDataB() {
  return dataB;
}
