(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1d5a"],{2215:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addOrModifyLC"},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请单号"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyNo,callback:function(t){e.$set(e.fixedData,"applyNo",t)},expression:"fixedData.applyNo"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请部门"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantDepartment,callback:function(t){e.$set(e.fixedData,"applicantDepartment",t)},expression:"fixedData.applicantDepartment"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantName,callback:function(t){e.$set(e.fixedData,"applicantName",t)},expression:"fixedData.applicantName"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请日期"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyTime,callback:function(t){e.$set(e.fixedData,"applyTime",t)},expression:"fixedData.applyTime"}})],1)],1)])],1),e._v(" "),a("el-row",{staticClass:"vacationTime"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"总金额"}},[a("el-input",{attrs:{value:e.totalMoney,disabled:!0}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple waichureason"},[a("el-form-item",{attrs:{label:"备注",prop:"reason"}},[a("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},model:{value:e.fixedData.remark,callback:function(t){e.$set(e.fixedData,"remark",t)},expression:"fixedData.remark"}})],1)],1)])],1)],1),e._v(" "),a("div",{staticStyle:{marginTop:"10px"}},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.add}},[e._v("新增")])],1),e._v(" "),a("el-form",{ref:"applyRule",staticStyle:{marginTop:"10px"},attrs:{model:e.ruleForm,rules:e.rules}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.applyTableData,border:""}},[a("el-table-column",{attrs:{label:"二级分类"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(a){return e.secondChange(t.row)}},model:{value:t.row.patentId,callback:function(a){e.$set(t.row,"patentId",a)},expression:"scope.row.patentId"}},e._l(e.secondOptions,function(e){return a("el-option",{key:e.itemId,attrs:{label:e.itemName,value:e.itemId}})}),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"产品名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.itemId,callback:function(a){e.$set(t.row,"itemId",a)},expression:"scope.row.itemId"}},e._l(e.productName(t.row.patentId,t.row),function(e){return a("el-option",{key:e.itemId,attrs:{label:e.itemName,value:e.itemId}})}),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"单位"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.unit,callback:function(a){e.$set(t.row,"unit",a)},expression:"scope.row.unit"}},e._l(e.unitOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"库存数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:!0,value:e.kucunAmount(t.row)}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"申请数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.applyNumber,callback:function(a){e.$set(t.row,"applyNumber",a)},expression:"scope.row.applyNumber"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"单价"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.unitPrice,callback:function(a){e.$set(t.row,"unitPrice",a)},expression:"scope.row.unitPrice"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:!0,value:e.calculateMoney(t.row)}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{color:"#fff",width:"50px"},attrs:{type:"text"},on:{click:function(a){return e.del(t.row)}}},[e._v("删除")])]}}])})],1)],1)],1)},l=[],n=(a("c5f6"),a("ac6a"),{data:function(){return{totalMoney:0,applyTableData:[],dialogFormVisible:!1,formLabelWidth:"120",secondOptions:[],unitOptions:[],ruleForm:{applyName:"",attachment:"",vacationTime:[],reason:""},fixedData:{remark:""},rules:{vacationTime:[{required:"true",message:"请假时间必填",trigger:"change"}],applyName:[{required:"true",message:"请假标题",trigger:"change"}],reason:[{required:"true",message:"请假事由必填",trigger:"blur"}]},newId:0}},watch:{applyTableData:{handler:function(e,t){var a=[],i=0;e.forEach(function(e){""!==e.applyNumber&&""!==e.unitPrice&&a.push(e)}),a.forEach(function(e){i+=e.applyNumber*e.unitPrice}),this.totalMoney=i},deep:!0}},methods:{showDialog:function(e,t){var a=this;if(this.$store.dispatch("officeStock/selectItemList",{classify:0}).then(function(e){a.secondOptions=e.data}),this.$store.dispatch("officeStock/commonTCodeGetCodeByParentIdVal","11002").then(function(e){var t=[];e.data.options.forEach(function(e){var a={};a.value=Number(e.value),a.label=e.label,t.push(a)}),a.unitOptions=t}),"111"===e)this.fixedData.applyNo=t.applyNo,this.fixedData.applicantDepartment=t.applicantDepartment,this.fixedData.applyTime=t.applyTime,this.fixedData.applicantName=t.applicantName,this.fixedData.remark="",this.applyTableData=[],this.isAddOrMOdify=!0;else if("112"===e){this.fixedData.applyNo=t.applyNo,this.fixedData.applicantDepartment=t.applicantDepartment,this.fixedData.applyTime=t.applyTime,this.fixedData.applicantName=t.applicantName,this.fixedData.remark=t.remark;var i=[];t.officePurchaseVOS.forEach(function(e){e.newId=++a.newId,i.push(e)}),this.applyTableData=i,this.isAddOrMOdify=!1}},submitForm:function(e,t){var a=this,i=!0;if(0===this.applyTableData.length)return this.$message.warning("申请产品不能为空!");if(this.applyTableData.forEach(function(e){for(var t in e)if(""===e[t])return i=!1,a.$message.warning("申请产品参数存在空值!")}),i){var l={};l.applyNo=this.fixedData.applyNo,l.remark=this.fixedData.remark,l.officePurchaseDTOS=this.applyTableData,"save"===t?this.$store.dispatch("assetsUse/officePurchaseAdd",l).then(function(e){"0"===e.status&&(a.$message.success("新增成功!"),a.dialogFormVisible=!a.dialogFormVisible,a.$emit("getTableList"))}):"update"===t?this.$store.dispatch("assetsUse/officePurchaseUpdate",l).then(function(e){}):"submit"===t&&this.$store.dispatch("assetsUse/officePurchaseConditionProcessSubmit",l).then(function(e){"0"===e.status&&(a.$message.success("提交成功!"),a.dialogFormVisible=!a.dialogFormVisible,a.$emit("getTableList"))})}},del:function(e){var t=this;this.applyTableData.forEach(function(a,i){if(a.newId===e.newId)return t.applyTableData.splice(i,1),t.$message.success("已删除")})},add:function(){var e={};e.newId=++this.newId,e.patentId="",e.itemId="",e.unit="",e.applyNumber="",e.unitPrice="",this.applyTableData.push(e)},productName:function(e,t){var a=[];return this.secondOptions.forEach(function(t){e===t.itemId&&(a=t.itemList)}),a},getVal:function(e,t){Number(e)>this.kucunAmount(t)&&(this.$message.error("申请数量不能大于库存数量!"),t.applyNumber="")},calculateMoney:function(e){var t="";return""!==e.unit&&""!==e.unitPrice&&(t=e.applyNumber*Number(e.unitPrice)),t},kucunAmount:function(e){var t="";return""!==e.itemId&&""!==e.patentId?this.secondOptions.forEach(function(a){a.itemId===e.patentId&&a.itemList.forEach(function(a){a.itemId===e.itemId&&(t=a.stockAmount)})}):t="",t},secondChange:function(e){e.itemId="",e.unit=""}}}),s=n,r=a("2877"),o=Object(r["a"])(s,i,l,!1,null,null,null);t["default"]=o.exports}}]);