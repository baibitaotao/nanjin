(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2911961a","chunk-f3e0deaa"],{2079:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"addOrModify"},[i("el-dialog",{attrs:{title:"分类管理新增",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"类别名称",prop:"itemName"}},[i("el-input",{model:{value:e.ruleForm.itemName,callback:function(t){e.$set(e.ruleForm,"itemName",t)},expression:"ruleForm.itemName"}})],1)],1)]),e._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"排序",prop:"sort"}},[i("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.sort,callback:function(t){e.$set(e.ruleForm,"sort",t)},expression:"ruleForm.sort"}})],1)],1)])],1),e._v(" "),i("div",{staticClass:"submit"},[i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)],1)},r=[],a=(i("55dd"),{data:function(){return{fileToken:"",dialogFormVisible:!1,formLabelWidth:"120",vacationType:[],ruleForm:{patentId:"",itemName:"",sort:""},fixedData:{},rules:{itemName:[{required:"true",message:"类别名称必填",trigger:"blur"}],sort:[{required:"true",message:"排序必填",trigger:"blur"}]}}},methods:{showDialog:function(e){var t=this;console.log(e),this.dialogFormVisible=!this.dialogFormVisible,this.ruleForm.patentId=e.itemId,this.ruleForm.classify=e.classify,this.ruleForm.itemName="",this.ruleForm.sort="",this.$nextTick(function(){t.$refs.ruleForm.clearValidate()})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var i={};i.itemName=t.ruleForm.itemName,i.sort=t.ruleForm.sort,i.patentId=t.ruleForm.patentId||"0",i.classify=t.ruleForm.classify,t.$store.dispatch("officeItem/officeItemAdd",i).then(function(e){"0"==e.status&&(t.$message.success("新增成功"),t.$emit("getTreeList"),t.dialogFormVisible=!t.dialogFormVisible)})})}}}),o=a,l=(i("4495"),i("2877")),n=Object(l["a"])(o,s,r,!1,null,null,null);t["default"]=n.exports},"3fa3":function(e,t,i){"use strict";var s=i("705f"),r=i.n(s);r.a},4495:function(e,t,i){"use strict";var s=i("5861"),r=i.n(s);r.a},"48d5":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ItemController"},[i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-around"}},[i("div",{staticClass:"notice"},[i("el-tree",{attrs:{data:e.data,"node-key":"id","default-expand-all":"","expand-on-click-node":!1,props:e.defaultProps},on:{"node-click":e.getCheckedNodes},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.node,r=t.data;return i("span",{staticClass:"custom-tree-node"},[i("span",[e._v(e._s(s.label))]),e._v(" "),i("span",[i("b",{staticClass:"el-icon-plus",on:{click:function(){return e.append(r)}}}),e._v(" "),i("u",{staticClass:"el-icon-minus",on:{click:function(){return e.deleteData(r)}}})])])}}])})],1),e._v(" "),i("div",{staticClass:"biaodan notice"},[i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[e._v("上级类别")])]),e._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple-light"},[i("el-input",{attrs:{disabled:!0},model:{value:e.ruleForm.parentName,callback:function(t){e.$set(e.ruleForm,"parentName",t)},expression:"ruleForm.parentName"}})],1)])],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[e._v("类别名称")])]),e._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple-light"},[i("el-input",{attrs:{disabled:e.isclickbangon},model:{value:e.ruleForm.itemName,callback:function(t){e.$set(e.ruleForm,"itemName",t)},expression:"ruleForm.itemName"}})],1)])],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[e._v("排序")])]),e._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple-light"},[i("el-input",{attrs:{disabled:e.isclickbangon,type:"number"},model:{value:e.ruleForm.sort,callback:function(t){e.$set(e.ruleForm,"sort",t)},expression:"ruleForm.sort"}})],1)])],1),e._v(" "),i("div",{staticStyle:{textAlign:"center",marginTop:"10px"}},[i("el-button",{attrs:{size:"mini",type:"danger",disabled:e.isclickbangon},on:{click:e.update}},[e._v("保存")])],1)],1)]),e._v(" "),i("add-or-modify",{ref:"addOrModify",on:{getTreeList:e.getTreeList}})],1)},r=[],a=(i("55dd"),i("ac6a"),i("2079")),o={components:{addOrModify:a["default"]},mounted:function(){this.getTreeList()},data:function(){return{isclickbangon:!1,defaultProps:{children:"itemList",label:"itemName"},ruleForm:{sort:"",itemName:"",parentName:"",itemId:""},data:[{itemId:"0",itemName:"办公用品",itemList:[],classify:"0"},{itemId:"0",itemName:"固定资产",itemList:[],classify:"1"}]}},methods:{getTreeList:function(){var e=this;this.$store.dispatch("officeItem/officeItemTree").then(function(t){"0"!==t.status&&e.$message.error("接口状态出错"),e.data[0].itemList=[],e.data[1].itemList=[],t.data.officeList.forEach(function(t){e.data[0].itemList.push(t)}),t.data.assestList.forEach(function(t){e.data[1].itemList.push(t)})})},append:function(e){this.$refs.addOrModify.showDialog(e)},deleteData:function(e){var t=this;this.$store.dispatch("officeItem/officeItemDelete",e.itemId).then(function(e){"0"==e.status?(t.$message.success("删除成功"),t.getTreeList()):t.$message.success(msg)})},update:function(){var e=this;if(""!==this.ruleForm.sort&&""!==this.ruleForm.itemName){var t={};t.itemId=this.ruleForm.itemId,t.itemName=this.ruleForm.itemName,t.sort=this.ruleForm.sort,this.$store.dispatch("officeItem/officeItemUpdate",t).then(function(t){"0"==t.status&&(e.ruleForm.itemName="",e.ruleForm.parentName="",e.ruleForm.sort="",e.$message.success("更新成功"),e.getTreeList())})}else""==this.ruleForm.sort&&""==this.ruleForm.itemName&&this.$message.warning("名称排序必填")},getCheckedNodes:function(e,t,i){"0"!==t.data.ItemId?(this.isclickbangon=!1,this.ruleForm.itemName=t.data.itemName,this.ruleForm.itemId=t.data.itemId,this.ruleForm.parentName=t.parent.data.itemName,this.ruleForm.sort=t.data.sort):(this.isclickbangon=!0,this.ruleForm.itemName="",this.ruleForm.parentName="",this.ruleForm.sort="")}}},l=o,n=(i("3fa3"),i("2877")),m=Object(n["a"])(l,s,r,!1,null,null,null);t["default"]=m.exports},5861:function(e,t,i){},"705f":function(e,t,i){}}]);