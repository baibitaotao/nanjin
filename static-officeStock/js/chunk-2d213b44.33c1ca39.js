(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213b44"],{ae8b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addOrModifyLC"},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请单号"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyNo,callback:function(t){e.$set(e.fixedData,"applyNo",t)},expression:"fixedData.applyNo"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请部门"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantDepartment,callback:function(t){e.$set(e.fixedData,"applicantDepartment",t)},expression:"fixedData.applicantDepartment"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantName,callback:function(t){e.$set(e.fixedData,"applicantName",t)},expression:"fixedData.applicantName"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请日期"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyTime,callback:function(t){e.$set(e.fixedData,"applyTime",t)},expression:"fixedData.applyTime"}})],1)],1)])],1),e._v(" "),a("el-row",{staticClass:"vacationTime"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"固定资产分类"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){e.ruleForm.itemId=""}},model:{value:e.ruleForm.patentId,callback:function(t){e.$set(e.ruleForm,"patentId",t)},expression:"ruleForm.patentId"}},e._l(e.fixOptions,function(e){return a("el-option",{key:e.itemId,attrs:{label:e.itemName,value:e.itemId}})}),1)],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"领用种类"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.itemId,callback:function(t){e.$set(e.ruleForm,"itemId",t)},expression:"ruleForm.itemId"}},e._l(e.itemIdOptions,function(e){return a("el-option",{key:e.itemId,attrs:{label:e.itemName,value:e.itemId}})}),1)],1)],1)])],1),e._v(" "),a("el-row",{staticClass:"vacationTime"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"领用数量"}},[a("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.useAmount,callback:function(t){e.$set(e.ruleForm,"useAmount",t)},expression:"ruleForm.useAmount"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple waichureason"},[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1)],1)])],1)],1)],1)},r=[],l=(a("ac6a"),{computed:{itemIdOptions:function(){var e=this,t=[];return this.fixOptions.forEach(function(a){a.itemId===e.ruleForm.patentId&&(t=a.itemList)}),t}},data:function(){return{fixOptions:[],fileToken:"",isAddOrMOdify:"",dialogFormVisible:!1,formLabelWidth:"120",ruleForm:{patentId:"",itemId:"",useAmount:"",remark:"",unitPrice:""},fixedData:{},rules:{patentId:[{required:"true",message:"分类必填",trigger:"change"}],userAmount:[{required:"true",message:"数量必填",trigger:"blur"}],itemId:[{required:"true",message:"种类必填",trigger:"change"}],applyName:[{required:"true",message:"请假标题",trigger:"change"}],reason:[{required:"true",message:"请假事由必填",trigger:"blur"}],vacationType:[{required:"true",message:"请假类型必填",trigger:"change"}]}}},methods:{showDialog:function(e,t){var a=this;if(this.$store.dispatch("officeStock/selectItemList",{classify:1}).then(function(e){a.fixOptions=e.data}),"111"===e){for(var i in this.ruleForm)this.$set(this.ruleForm,i,"");this.fixedData=t,this.isAddOrMOdify=!0}else"112"===e&&(console.log(t),this.fixedData.applyNo=t[0].applyNo,this.fixedData.applicantDepartment=t[0].applicantDepartment,this.fixedData.applyTime=t[0].applyTime,this.fixedData.applicantName=t[0].applicantName,this.ruleForm.useAmount=t[0].useAmount,this.ruleForm.patentId=t[0].patentId,this.ruleForm.itemId=t[0].itemId,this.ruleForm.remark=t[0].remark,this.isAddOrMOdify=!1);this.$nextTick(function(){a.$refs.ruleForm.clearValidate()})},submitForm:function(e,t){var a=this,i={};i.applyNo=this.fixedData.applyNo,i.useAmount=this.ruleForm.useAmount,i.itemId=this.ruleForm.itemId,i.patentId=this.ruleForm.patentId,i.remark=this.ruleForm.remark,i.unitPrice=this.ruleForm.unitPrice,"save"===t||"update"===t?this.$store.dispatch(this.isAddOrMOdify?"caigoushenqing/purchaseAdd":"linyondengji/assetsUseUpdate",i).then(function(e){}):"submit"===t&&this.$store.dispatch("caigoushenqing/purchaseConditionProcessSubmit",i).then(function(e){a.$message.success("提交成功!"),a.$emit("getTableList"),a.dialogFormVisible=!a.dialogFormVisible})}}}),s=l,n=a("2877"),o=Object(n["a"])(s,i,r,!1,null,null,null);t["default"]=o.exports}}]);