(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c0047c5"],{"1ac4":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addOrModify"},[a("el-dialog",{attrs:{title:t.isAddOrMOdify?"库存新增":"详情页",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("div",{staticStyle:{marginTop:"10px"}},[a("el-button",{attrs:{type:"danger",size:"mini",disabled:t.setStatus("multi")},on:{click:t.add}},[t._v("入库")])],1),t._v(" "),a("el-form",{ref:"applyRule",staticStyle:{marginTop:"10px"},attrs:{model:t.ruleForm,rules:t.rules}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.applyTableData,border:""},on:{"selection-change":t.handleSelectionChange}},[t.isAddOrMOdify?t._e():a("el-table-column",{attrs:{type:"selection",width:"70"}}),t._v(" "),t.isAddOrMOdify?a("el-table-column",{attrs:{type:"selection",width:"70"}}):t._e(),t._v(" "),a("el-table-column",{attrs:{prop:"patentName",label:"二级分类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"itemName",label:"产品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"unitName",label:"单位"}}),t._v(" "),t.isAddOrMOdify?a("el-table-column",{attrs:{prop:"applyTime",label:"申请日期"}}):t._e(),t._v(" "),a("el-table-column",{attrs:{prop:"applyNumber",label:"申请数量"}})],1)],1),t._v(" "),a("div",{staticClass:"submit"},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){t.dialogFormVisible=!t.dialogFormVisible}}},[t._v("取消")])],1)],1)],1)},l=[],s=(a("ac6a"),{data:function(){return{totalMoney:0,applyTableData:[],isAddOrMOdify:"",dialogFormVisible:!1,formLabelWidth:"120",secondOptions:[],ruleForm:{applyNo:""},fixedData:{remark:""},rules:{},newId:0,seletedItem:[]}},watch:{applyTableData:{handler:function(t,e){var a=[],i=0;t.forEach(function(t){""!==t.applyNumber&&""!==t.unitPrice&&a.push(t)}),a.forEach(function(t){i+=t.applyNumber*t.unitPrice}),this.totalMoney=i},deep:!0}},methods:{showDialog:function(t,e){var a=this;this.dialogFormVisible=!this.dialogFormVisible,"111"===t?(this.ruleForm.applyNo=e,this.applyTableData=[],this.$store.dispatch("officeStock/officeStockModelList").then(function(t){a.applyTableData=t.data}),this.isAddOrMOdify=!0):"112"===t&&(this.applyTableData=e,this.isAddOrMOdify=!1)},del:function(t){var e=this;this.applyTableData.forEach(function(a,i){if(a.newId===t.newId)return e.applyTableData.splice(i,1),e.$message.success("已删除")})},add:function(){var t=this,e={};e.applyNo=this.ruleForm.applyNo,e.purchaseDTOS=this.seletedItem,this.$store.dispatch("officeStock/officeStockAdd",e).then(function(e){"0"===e.status&&(t.$message.success("入库成功!"),t.dialogFormVisible=!t.dialogFormVisible,t.$emit("getTableList"))})},handleSelectionChange:function(t){this.seletedItem=t},setStatus:function(t){return"single"==t?1!=this.seletedItem.length:"multi"==t?!(this.seletedItem.length>=1):"normal"!=t}}}),o=s,n=(a("8ffc"),a("2877")),r=Object(n["a"])(o,i,l,!1,null,null,null);e["default"]=r.exports},"8ffc":function(t,e,a){"use strict";var i=a("c182"),l=a.n(i);l.a},c182:function(t,e,a){}}]);