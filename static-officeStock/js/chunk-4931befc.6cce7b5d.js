(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4931befc","chunk-38290766","chunk-2d0a50f5","chunk-2d0e8e69"],{"08a8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("el-dialog",{attrs:{title:"详情页",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-row",t._l(t.data,function(e,i,s){return a("el-col",{key:s,attrs:{span:12}},[a("div",{staticClass:"left"},[t._v(t._s(t._f("getTitle")(i)))]),t._v(" "),a("div",{staticClass:"right"},[t._v(t._s(e))])])}),1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"left"},[t._v("采购要求说明")]),t._v(" "),a("div",{staticClass:"right"},[t._v(t._s(t.remark))])])],1)],1)],1)},s=[],n={filters:{getTitle:function(t){return"applicantDepartment"==t?"所在的部门":"applicantName"==t?"姓名":"applyName"==t?"会议名称":"applyNo"==t?"表单号":"applyStatusName"==t?"状态":"applyTime"==t?"申请日期":"remark"==t?"备注":"patentName"==t?"固定资产分类":"itemName"==t?"采购种类":"applyAmount"==t?"采购数量":void 0}},data:function(){return{dialogFormVisible:!1,data:{},fileToken:"",officePurchaseVOS:[],remark:"",totalMoney:""}},methods:{showDialog:function(t){this.dialogFormVisible=!this.dialogFormVisible,this.data.applicantDepartment=t[0].applicantDepartment,this.data.applicantName=t[0].applicantName,this.data.applyStatusName=t[0].applyStatusName,this.data.applyNo=t[0].applyNo,this.data.applyTime=t[0].applyTime,this.data.patentName=t[0].patentName,this.data.itemName=t[0].itemName,this.data.applyAmount=t[0].applyAmount,this.remark=t[0].remark}}},l=n,r=a("2877"),o=Object(r["a"])(l,i,s,!1,null,null,null);e["default"]=o.exports},"1f99":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addOrModify"},[a("el-dialog",{attrs:{title:"采购申请新增",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请单号"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.fixedData.applyNo,callback:function(e){t.$set(t.fixedData,"applyNo",e)},expression:"fixedData.applyNo"}})],1)],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请部门"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.fixedData.applicantDepartment,callback:function(e){t.$set(t.fixedData,"applicantDepartment",e)},expression:"fixedData.applicantDepartment"}})],1)],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请人"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.fixedData.applicantName,callback:function(e){t.$set(t.fixedData,"applicantName",e)},expression:"fixedData.applicantName"}})],1)],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请日期"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.fixedData.applyTime,callback:function(e){t.$set(t.fixedData,"applyTime",e)},expression:"fixedData.applyTime"}})],1)],1)])],1),t._v(" "),a("el-row",{staticClass:"vacationTime"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"固定资产分类",prop:"patentId"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(e){t.ruleForm.itemId=""}},model:{value:t.ruleForm.patentId,callback:function(e){t.$set(t.ruleForm,"patentId",e)},expression:"ruleForm.patentId"}},t._l(t.fixOptions,function(t){return a("el-option",{key:t.itemId,attrs:{label:t.itemName,value:t.itemId}})}),1)],1)],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"采购种类",prop:"itemId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.ruleForm.itemId,callback:function(e){t.$set(t.ruleForm,"itemId",e)},expression:"ruleForm.itemId"}},t._l(t.itemIdOptions,function(t){return a("el-option",{key:t.itemId,attrs:{label:t.itemName,value:t.itemId}})}),1)],1)],1)])],1),t._v(" "),a("el-row",{staticClass:"vacationTime"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"数量",prop:"applyAmount"}},[a("el-input",{attrs:{type:"number"},model:{value:t.ruleForm.applyAmount,callback:function(e){t.$set(t.ruleForm,"applyAmount",e)},expression:"ruleForm.applyAmount"}})],1)],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"单价(元)",prop:"applyAmount"}},[a("el-input",{attrs:{type:"number"},model:{value:t.ruleForm.unitPrice,callback:function(e){t.$set(t.ruleForm,"unitPrice",e)},expression:"ruleForm.unitPrice"}})],1)],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple waichureason"},[a("el-form-item",{attrs:{label:"采购要求说明"}},[a("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},model:{value:t.ruleForm.remark,callback:function(e){t.$set(t.ruleForm,"remark",e)},expression:"ruleForm.remark"}})],1)],1)])],1),t._v(" "),a("div",{staticClass:"submit"},[t.isAddOrMOdify?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.submitForm("ruleForm","save")}}},[t._v("保存")]):t._e(),t._v(" "),t.isAddOrMOdify?t._e():a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.submitForm("ruleForm","update")}}},[t._v("更新")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.submitForm("ruleForm","submit")}}},[t._v("提交")])],1)],1)],1)],1)},s=[],n=(a("ac6a"),{computed:{itemIdOptions:function(){var t=this,e=[];return this.fixOptions.forEach(function(a){a.itemId===t.ruleForm.patentId&&(e=a.itemList)}),e}},data:function(){return{fixOptions:[],fileToken:"",isAddOrMOdify:"",dialogFormVisible:!1,formLabelWidth:"120",ruleForm:{patentId:"",itemId:"",applyAmount:"",remark:"",unitPrice:""},fixedData:{},rules:{patentId:[{required:"true",message:"分类必填",trigger:"change"}],applyAmount:[{required:"true",message:"数量必填",trigger:"blur"}],itemId:[{required:"true",message:"种类必填",trigger:"change"}],applyName:[{required:"true",message:"请假标题",trigger:"change"}],reason:[{required:"true",message:"请假事由必填",trigger:"blur"}],vacationType:[{required:"true",message:"请假类型必填",trigger:"change"}]}}},methods:{showDialog:function(t,e){var a=this;if(this.dialogFormVisible=!this.dialogFormVisible,this.$store.dispatch("officeStock/selectItemList",{classify:1}).then(function(t){a.fixOptions=t.data}),"111"===t){for(var i in this.ruleForm)this.$set(this.ruleForm,i,"");this.fixedData=e,this.isAddOrMOdify=!0}else"112"===t&&(this.fixedData.applyNo=e[0].applyNo,this.fixedData.applicantDepartment=e[0].applicantDepartment,this.fixedData.applyTime=e[0].applyTime,this.fixedData.applicantName=e[0].applicantName,this.fixedData.unitPrice=e[0].unitPrice,this.ruleForm.applyAmount=e[0].applyAmount,this.ruleForm.patentId=e[0].patentId,this.ruleForm.itemId=e[0].itemId,this.ruleForm.remark=e[0].remark,this.isAddOrMOdify=!1);this.$nextTick(function(){a.$refs.ruleForm.clearValidate()})},submitForm:function(t,e){var a=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;var i={};i.applyNo=a.fixedData.applyNo,i.applyAmount=a.ruleForm.applyAmount,i.itemId=a.ruleForm.itemId,i.patentId=a.ruleForm.patentId,i.remark=a.ruleForm.remark,i.unitPrice=a.ruleForm.unitPrice,"save"===e||"update"===e?a.$store.dispatch(a.isAddOrMOdify?"caigoushenqing/purchaseAdd":"caigoushenqing/purchaseUpdate",i).then(function(t){"0"===t.status&&(a.$message.success(a.isAddOrMOdify?"新增成功":"更新成功"),a.$emit("getTableList"),a.dialogFormVisible=!a.dialogFormVisible)}):"submit"===e&&a.$store.dispatch("caigoushenqing/purchaseConditionProcessSubmit",i).then(function(t){a.$message.success("提交成功!"),a.$emit("getTableList"),a.dialogFormVisible=!a.dialogFormVisible})})}}}),l=n,r=(a("5c72"),a("2877")),o=Object(r["a"])(l,i,s,!1,null,null,null);e["default"]=o.exports},"5c72":function(t,e,a){"use strict";var i=a("7893"),s=a.n(i);s.a},"6bf1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",[a("div",[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入采购种类/采购单号搜索"},model:{value:t.queryParams.keyWord,callback:function(e){t.$set(t.queryParams,"keyWord",e)},expression:"queryParams.keyWord"}}),t._v(" "),a("el-button",{attrs:{slot:"append",icon:"el-icon-search",size:"mini"},on:{click:t.search},slot:"append"},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{slot:"append",icon:"el-icon-delete",size:"mini"},on:{click:t.clear},slot:"append"},[t._v("清空")])],1),t._v(" "),a("a",{on:{click:t.conditionsOn}},[t._v(t._s(t.showCondition))]),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowCondition,expression:"isShowCondition"}],staticClass:"conditions"})]),t._v(" "),a("el-divider"),t._v(" "),a("div",{staticClass:"optionButtons"},t._l(t.buttons,function(e,i){return a("el-button",{key:i,attrs:{disabled:t.setStatus(e.btnScope),type:"danger",plain:"",size:"mini"},on:{click:function(a){return t.option(e.code)}}},[t._v(t._s(e.name))])}),1)],1),t._v(" "),a("div",{staticClass:"bottom"},[a("span",[t._v("全部结果")]),t._v("  \n    "),a("span",[t._v("共"+t._s(t.allItem)+"个结果")]),t._v(" "),a("my-table",{ref:"myTable",attrs:{queryParams:t.queryParams},on:{transferSelectItem:t.transferSelectItem}})],1),t._v(" "),a("add-or-modify",{ref:"addOrModify",on:{getTableList:t.getTableList}}),t._v(" "),a("detail",{ref:"detail"})],1)},s=[],n=(a("ac6a"),a("8af0")),l=a("1f99"),r=a("08a8"),o={name:"",watch:{queryParams:{handler:function(t,e){""!==t.endTime&&""!==t.startTime&&t.endTime<t.startTime&&(this.$message.warning("结束时间不能小于开始时间"),this.queryParams.endTime="")},deep:!0}},components:{myTable:n["default"],addOrModify:l["default"],detail:r["default"]},data:function(){return{seletedItem:[],queryParams:{keyWord:"",currPage:1,pageSize:10},fixedData:{applyNo:"",applicantDepartment:"",applyTime:"",applicantName:""},showConditionIcon:"el-icon-arrow-up",showCondition:"收起全部筛选项",isShowCondition:!0,allItem:0,buttons:[{code:"111",name:"采购申请",btnScope:"normal"},{code:"112",name:"编辑",btnScope:"single"},{code:"115",name:"查看",btnScope:"single"},{code:"113",name:"删除",btnScope:"multi"}]}},methods:{clear:function(){this.queryParams.keyWord="",this.queryParams.startTime="",this.queryParams.endTime=""},search:function(){this.getTableList()},conditionsOn:function(){"el-icon-arrow-up"===this.showConditionIcon?(this.showConditionIcon="el-icon-arrow-down",this.showCondition="展开全部筛选项",this.isShowCondition=!1):"el-icon-arrow-down"===this.showConditionIcon&&(this.showConditionIcon="el-icon-arrow-up",this.showCondition="收起全部筛选项",this.isShowCondition=!0)},option:function(t){var e=this;if("111"==t){var a={dealMark:"add"};this.$store.dispatch("caigoushenqing/purchaseToEdit",a).then(function(a){e.fixedData.applyNo=a.data.applyNo,e.fixedData.applicantDepartment=a.data.applicantDepartment,e.fixedData.applyTime=a.data.applyTime,e.fixedData.applicantName=a.data.applicantName,e.$refs.addOrModify.showDialog(t,e.fixedData)})}else if("112"==t){if("0"!==this.seletedItem[0].applyStatus)return this.$message.warning("此条数据非草稿状态!");this.$refs.addOrModify.showDialog(t,this.seletedItem)}else if("113"==t){var i=!0;if(this.seletedItem.forEach(function(t){if("0"!==t.applyStatus)return i=!1}),!1===i)return this.$message.warning("所选数据存在非草稿状态!");this.$confirm("是否确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=[];e.seletedItem.forEach(function(e){t.push(e.applyNo)}),e.$store.dispatch("caigoushenqing/purchaseDelete",t.join(",")).then(function(t){"0"==t.status&&(e.$message.success("删除成功"),e.getTableList())})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}else if("114"==t){if("2"==this.seletedItem[0].vacationStatus)return this.$message.warning("已销假");this.$confirm("是否确定销假?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={type:"VACATION",applyNo:e.seletedItem[0].applyNo};e.$store.dispatch("applyVacation/reportBackReportBack",t).then(function(t){"0"==t.status&&(e.$message.success("销假成功"),e.getTableList())})}).catch(function(){e.$message({type:"info",message:"已取消"})})}else"115"==t&&this.$refs.detail.showDialog(this.seletedItem)},getTableList:function(){this.$refs.myTable.getTableList()},transferSelectItem:function(t){this.seletedItem=t},setStatus:function(t){return"single"==t?1!=this.seletedItem.length:"multi"==t?!(this.seletedItem.length>=1):"normal"!=t}}},c=o,p=a("2877"),u=Object(p["a"])(c,i,s,!1,null,null,null);e["default"]=u.exports},7893:function(t,e,a){},"8af0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applyNo",label:"采购单号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"patentName",label:"固定资产分类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"itemName",label:"采购种类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"采购要求说明"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applyStatusName",label:"申请状态"}})],1),t._v(" "),a("div",[a("el-pagination",{attrs:{"current-page":t.queryParams.currPage,background:"",small:"","page-sizes":[10,20,30,40],layout:" prev, pager, next,total ,sizes ,jumper",total:t.totalPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},s=[],n={props:{queryParams:{type:Object,required:!0}},data:function(){return{tableData:[],totalPage:0}},mounted:function(){this.getTableList()},methods:{getTableList:function(){var t=this;this.$store.dispatch("caigoushenqing/purchaseList",this.queryParams).then(function(e){t.tableData=e.data,t.totalPage=e.totalCount,t.$parent.allItem=t.totalPage})},handleSizeChange:function(t){this.queryParams.pageSize=t,this.getTableList()},handleCurrentChange:function(t){this.queryParams.currPage=t,this.getTableList()},handleSelectionChange:function(t){this.$emit("transferSelectItem",t)}}},l=n,r=a("2877"),o=Object(r["a"])(l,i,s,!1,null,null,null);e["default"]=o.exports}}]);