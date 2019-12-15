(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{285:function(t,e,l){"use strict";l.r(e);var v=l(0),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"配置-columns"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#配置-columns"}},[t._v("#")]),t._v(" 配置: columns")]),t._v(" "),l("h2",{attrs:{id:"title"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),l("ul",[l("li",[t._v("说明: 表格列名")]),t._v(" "),l("li",[t._v("类型: String")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"key"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" key")]),t._v(" "),l("ul",[l("li",[t._v("说明: data 中对应列的键名")]),t._v(" "),l("li",[t._v("类型: String")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"width"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#width"}},[t._v("#")]),t._v(" width")]),t._v(" "),l("ul",[l("li",[t._v("说明: 对应列的宽度")]),t._v(" "),l("li",[t._v("类型: String")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"minwidth"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#minwidth"}},[t._v("#")]),t._v(" minWidth")]),t._v(" "),l("ul",[l("li",[t._v("说明: 对应列的最小宽度，与 width 的区别是 width 是固定的，minWidth 会把剩余宽度按比例分配给设置了 minWidth 的列")]),t._v(" "),l("li",[t._v("类型: String")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"fixed"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#fixed"}},[t._v("#")]),t._v(" fixed")]),t._v(" "),l("ul",[l("li",[t._v("说明: 列是否固定在左侧或者右侧，true 表示固定在左侧")]),t._v(" "),l("li",[t._v("类型: String / Boolean")]),t._v(" "),l("li",[t._v("可选值: true / left / right")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"renderheader"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#renderheader"}},[t._v("#")]),t._v(" renderHeader")]),t._v(" "),l("ul",[l("li",[t._v("说明: 列标题 Label 区域渲染使用的 Function")]),t._v(" "),l("li",[t._v("类型: Function (h, { column, $index })")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"sortable"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#sortable"}},[t._v("#")]),t._v(" sortable")]),t._v(" "),l("ul",[l("li",[t._v("说明: 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件")]),t._v(" "),l("li",[t._v("类型: Boolean / String")]),t._v(" "),l("li",[t._v("可选值: true, false, 'custom'")]),t._v(" "),l("li",[t._v("默认值: false")])]),t._v(" "),l("h2",{attrs:{id:"sortmethod"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#sortmethod"}},[t._v("#")]),t._v(" sortMethod")]),t._v(" "),l("ul",[l("li",[t._v("说明: 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致")]),t._v(" "),l("li",[t._v("类型: Function (a, b)")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"sortby"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#sortby"}},[t._v("#")]),t._v(" sortBy")]),t._v(" "),l("ul",[l("li",[t._v("说明: 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推")]),t._v(" "),l("li",[t._v("类型: String / Array / Function (row, index)")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"sortorders"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#sortorders"}},[t._v("#")]),t._v(" sortOrders")]),t._v(" "),l("ul",[l("li",[t._v("说明: 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序")]),t._v(" "),l("li",[t._v("类型: array")]),t._v(" "),l("li",[t._v("可选值: 数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序")]),t._v(" "),l("li",[t._v("默认值: ['ascending', 'descending', null]")])]),t._v(" "),l("h2",{attrs:{id:"resizable"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#resizable"}},[t._v("#")]),t._v(" resizable")]),t._v(" "),l("ul",[l("li",[t._v("说明: 对应列是否可以通过拖动改变宽度（需要在 "),l("code",[t._v("options")]),t._v(" 中设置 border 属性为 true")]),t._v(" "),l("li",[t._v("类型: Boolean")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: true")])]),t._v(" "),l("h2",{attrs:{id:"formatter"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#formatter"}},[t._v("#")]),t._v(" formatter")]),t._v(" "),l("ul",[l("li",[t._v("说明: 用来格式化内容")]),t._v(" "),l("li",[t._v("类型: Function (row, column, cellValue, index)")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"showoverflowtooltip"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#showoverflowtooltip"}},[t._v("#")]),t._v(" showOverflowTooltip")]),t._v(" "),l("ul",[l("li",[t._v("说明: 当内容过长被隐藏时显示 tooltip")]),t._v(" "),l("li",[t._v("类型: Boolean")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: false")])]),t._v(" "),l("h2",{attrs:{id:"align"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#align"}},[t._v("#")]),t._v(" align")]),t._v(" "),l("ul",[l("li",[t._v("说明: 对齐方式")]),t._v(" "),l("li",[t._v("类型: String")]),t._v(" "),l("li",[t._v("可选值: left / center / right")]),t._v(" "),l("li",[t._v("默认值: left")])]),t._v(" "),l("h2",{attrs:{id:"headeralign"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#headeralign"}},[t._v("#")]),t._v(" headerAlign")]),t._v(" "),l("ul",[l("li",[t._v("说明: 表头对齐方式，若不设置该项，则使用表格的对齐方式")]),t._v(" "),l("li",[t._v("类型: String")]),t._v(" "),l("li",[t._v("可选值: left / center / right")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"classname"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#classname"}},[t._v("#")]),t._v(" className")]),t._v(" "),l("ul",[l("li",[t._v("说明: 列的 className")]),t._v(" "),l("li",[t._v("类型: String")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"labelclassname"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#labelclassname"}},[t._v("#")]),t._v(" labelClassName")]),t._v(" "),l("ul",[l("li",[t._v("说明: 当前列标题的自定义类名")]),t._v(" "),l("li",[t._v("类型: String")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"filters"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#filters"}},[t._v("#")]),t._v(" filters")]),t._v(" "),l("ul",[l("li",[t._v("说明: 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。")]),t._v(" "),l("li",[t._v("类型: Function ({ text, value })")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"filterplacement"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#filterplacement"}},[t._v("#")]),t._v(" filterPlacement")]),t._v(" "),l("ul",[l("li",[t._v("说明: 过滤弹出框的定位")]),t._v(" "),l("li",[t._v("类型: String")]),t._v(" "),l("li",[t._v("可选值: top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end")]),t._v(" "),l("li",[t._v("默认值: bottom")])]),t._v(" "),l("h2",{attrs:{id:"filtermultiple"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#filtermultiple"}},[t._v("#")]),t._v(" filterMultiple")]),t._v(" "),l("ul",[l("li",[t._v("说明: 数据过滤的选项是否多选")]),t._v(" "),l("li",[t._v("类型: Boolean")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: true")])]),t._v(" "),l("h2",{attrs:{id:"filtermethod"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#filtermethod"}},[t._v("#")]),t._v(" filterMethod")]),t._v(" "),l("ul",[l("li",[t._v("说明: 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。")]),t._v(" "),l("li",[t._v("类型: Function (value, row, column)")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"filteredvalue"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#filteredvalue"}},[t._v("#")]),t._v(" filteredValue")]),t._v(" "),l("ul",[l("li",[t._v("说明: 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。")]),t._v(" "),l("li",[t._v("类型: Array")]),t._v(" "),l("li",[t._v("可选值: 无")]),t._v(" "),l("li",[t._v("默认值: 无")])]),t._v(" "),l("h2",{attrs:{id:"component-name"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#component-name"}},[t._v("#")]),t._v(" component.name")]),t._v(" "),l("ul",[l("li",[t._v("说明: 表格渲染的组件名，组件请参考 "),l("a",{attrs:{href:"http://element-cn.eleme.io/#/zh-CN/component",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件"),l("OutboundLink")],1)]),t._v(" "),l("li",[t._v("类型: String")]),t._v(" "),l("li",[t._v("可选值: el-input / el-input-number / el-radio / el-checkbox / el-select / el-cascader / el-switch / el-slider / el-time-select / el-time-picker / el-date-picker / el-rate / el-color-picker / 自定义组件")]),t._v(" "),l("li",[t._v("默认值: 无")])])])}),[],!1,null,null,null);e.default=a.exports}}]);