(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-075309a5","chunk-2364b51c","chunk-2d0b1d5a"],{"093d":function(module,__webpack_exports__,__webpack_require__){"use strict";(function($){var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("c5f6"),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__),axios__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__["a"]={name:"process",props:{allcommshow:{type:Number,default:1},validateFun:Function,contentPath:{type:String,default:"/ei-web/"},exValue:{type:Object,default:function(){return{result:!0,extendParam:{depAudit:"1057",docType:"1"}}}}},watch:{taskId:function(e){var t=this;axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.contentPath+"workflowProcess/getProcessCommandJSON?taskId="+this.taskId,{taskId:this.taskId}).then(function(e){t.commandes=e.data}).catch(function(e){}),this.showAndHidForm(this.pshow,this.phid)}},data:function(){return{isShowBtn:!1,btnId:"",btnName:"",btnJson:"",taskProcessDescValue:"",submitCount:0,commandes:null,instId:"",taskId:"",formUri:"",formUriView:"",pshow:"",phid:"",theRequest:{},extendParam:"",abc:""}},mounted:function(){window.location;var e=this.$route.query;this.theRequest=e,this.instId=this.theRequest.instId,this.taskId=this.theRequest.taskId,this.formUri=this.theRequest.formUri,this.formUriView=this.theRequest.formUriView},methods:{showAndHidForm:function(e,t){if(null!=e&&""!==e)for(var a=e.split(","),s=0;s<a.length;s++)$("#"+a[s]).show();if(null!=t&&""!==t)for(var i=t.split(","),n=0;n<i.length;n++)$("#"+i[n]).attr("style","display:none").hide()},beforeCommandShow:function(){return!0},btnHandel:function(e){var t=e.fixParam_BeforeHandleJS,a=(e.type,"");"undefined"!=typeof t&&null!=t&&""!=t?(this.$emit("update"),a="",this.extendParam=""):"fixParam_BeforeHandleJS"===e.id?(this.$emit("update"),a="",this.extendParam=""):"fixParam_BeforeHandleJS2"===e.id&&(this.$emit("updateDetail"),a="",this.extendParam=""),"undefined"!=typeof a&&null!=a&&""!=a||(a=""),this.doProcessTask("",e.name,e.id,e.type,e,this.extendParam)},doProcessTask:function(e,t,a,s,i,n){document.documentElement.scrollTop=0,this.processTask(t,a,s,i,n)},processTask:function(e,t,a,s,i){var n=this;this.confirmMessage("确认进行"+e+"操作？",function(e){if(e){document.documentElement.scrollTop=0;var r=n.taskProcessDescValue;if(""===r)return void n.alertMessage("请填写处理意见，最大长度为2000字符！");if(r.length>2e3)return void n.alertMessage("处理意见超长，最大长度为2000字符！");var o={instId:n.instId,taskId:n.taskId,commandId:t,commandType:a,processDesc:encodeURIComponent(n.taskProcessDescValue),formParam:i},l=!!s.fixParam_taskProcessDescFlag&&s.fixParam_taskProcessDescFlag,c=s.fixParam_taskProcessDescMessage?s.fixParam_taskProcessDescMessage:"";if("true"===l&&""===o.processDesc)return""===c&&(c="请填写处理意见！"),void n.alertMessage(c);if("rollBackTaskByExpression"===a){if(""===o.processDesc)return void n.alertMessage("请填写意见！")}else try{var u=saveDataMy();if(!u)return}catch(h){}if("modifyForm"===a){var d=s.fixParam_title;d&&""!==d||(d="修改");var p={toobarTitle:d},m=s.fixParam_url;return m&&""!==m||(m=n.formUri),m=appendParams(m,{submitBtnShow:"false"}),void n.getPageWin("layout",window).openWindow(800,600,p.toobarTitle,m,p,function(){parent.refreshCenterRegion()})}if("pending"===a){p={toobarTitle:"请选择转办人"},m=s.fixParam_url;if(m){var f=s.fixParam_width,_=s.fixParam_height;f||(f=800),_||(_=600),n.getPageWin("layout",window).openWindow(f,_,p.toobarTitle,m,p,function(){var e=n.getPageWin("layout",window).invokeResult;e&&e.result&&(e.selectUserId&&(o["pendingUserId"]=e.selectUserId),n.execProcessTask(o))})}else n.execProcessTask(o);return}if("rollBackTaskByTaskId"===a){p={toobarTitle:"请选择任务"},m="../jsps/process/listRollBackTaskList.jsp?taskId="+n.taskId+"&instId="+n.instId+"&commandId="+t+"&commandType="+a+"&processDesc="+encodeURIComponent(encodeURIComponent($("#taskProcessDesc").val()))+"&bizKey="+$("#keyValues").val();return openWindow(800,600,p.toobarTitle,m,p,function(){}),!1}if("rollBack"==a){p={toobarTitle:"请选择节点"},m="../jsps/process/listRollBackNodeList.jsp?taskId="+taskId+"&instId="+instId+"&commandId="+t+"&commandType="+a+"&processDesc="+encodeURIComponent(encodeURIComponent($("#taskProcessDesc").val()))+"&bizKey="+$("#keyValues").val();return openWindow(480,320,p.toobarTitle,m,p,function(){}),!1}if("submit"!=a){d=s.fixParam_title;d&&""!=d||(d="修改");p={toobarTitle:d},m=s.fixParam_url;if(m){f=s.fixParam_width,_=s.fixParam_height;f||(f=800),_||(_=600),n.getPageWin("layout",window).openWindow(f,_,p.toobarTitle,m,p,function(){var e=getPageWin("layout",window).invokeResult;if(e&&e.result){if(e.taskProcessDesc){var t=$("#taskProcessDesc").val();t=""==t?e.taskProcessDesc:t+","+e.taskProcessDesc,$("#taskProcessDesc").val(t)}n.execProcessTask(o)}})}else n.execProcessTask(o);return}if(!n.validate())return void alertMessage("表单验证不通过,请重新填写");n.execProcessTask(o)}})},confirmMessage:function(e,t){$.messager.confirm("提示",e,t)},alertMessage:function(e,t){$.messager.alert("提示",e,"info",t)},getPageWin:function(e,t){var a=this.getParentPageWin(e,t);return a},getParentPageWin:function(e,t){var a=t;return("undefined"===typeof a.pageId||a.pageId!=e)&&null!=a.parent?a.location.href!=a.parent.location.href?this.getPageWin(e,a.parent):null:a},execProcessTask:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.submitCount;a++,1===a&&("general"==e.commandType&&(console.log("执行同意接口"),this.$emit("action")),axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.contentPath+"workflowProcess/processTask?"+"instId=".concat(e.instId,"&taskId=").concat(e.taskId,"&commandId=").concat(e.commandId,"&commandType=").concat(e.commandType,"&processDesc=").concat(e.processDesc,"&formParam=").concat(JSON.stringify(e.formParam)),e).then(function(e){var a=e.data;a.result?t.alertMessage(a.successMessage,function(){var e=t.getListviewWin(window);null==e?t.getPageWin("fpPortal",window).closeWindow():t.getListviewWin(window).closeWindow()}):(t.submitCount=0,t.alertMessage(a.errorMessage,function(){var e=t.getListviewWin(window);null==e?t.getPageWin("fpPortal",window).closeWindow():t.getListviewWin(window).closeWindow()}))}))},getListviewWin:function(e){var t=e;return"undefined"===typeof t.listviewId&&null!=t.parent?t.location.href!=t.parent.location.href?this.getListviewWin(t.parent):null:t},taskProcessDescCheck:function(){var e="",t=0,a=$("#taskProcessDesc").val();return e=""==a?'{"result":false,"errorMsg":"请填写退回理由！"}':'{"result":true,"extendParam":'+t+"}",e},saveData2:function saveData2(fn,data2){try{var mark=this.saveDataBefore();if(!mark)return}catch(e){}var result=this.validate(),editWin=getEditWin(window),inJCEdit=null!=editWin;"false"==parameterJsonObj.inJCEdit&&(inJCEdit=!1),result&&($.messager.progress({title:"正在处理,请稍等..."}),$("#dataForm").form("submit",{url:"../action/bizObjectBase!save.action",async:!1,onSubmit:function(){return!0},success:function success(data){$.messager.progress("close"),execProcessTask(data2);var dataObj=eval("("+data+")");if(dataObj.result){"new"==dealMark&&(keyValues=dataObj.attribute.keyValues,dealMark="update",document.getElementsByName("keyValues")[0].value=keyValues,document.getElementsByName("dealMark")[0].value=dealMark);try{saveDataAfter()}catch(e){}}if(inJCEdit){if(getEditWin(window).assetExist=!0,getEditWin(window).keyValues=dataObj.attribute.keyValues,null!=fn)return fn(dataObj)}else if($.messager.progress("close"),dataObj.result){var listviewWin=getListviewWin(window);null!=listviewWin&&listviewWin.refresh(),$.messager.alert("提示",dataObj.successMessage,"info",function(){if(null!=fn)return fn(dataObj)})}else $.messager.alert("提示",dataObj.errorMessage,"info",function(){if(null!=fn)return fn(dataObj)})}}))},getEditWin:function(e){var t=e;return"undefined"===typeof t.integrationEditorId&&null!=t.parent?t.location.href!=t.parent.location.href?this.getEditWin(t.parent):null:t},validate:function(){return!0},saveDataBefore:function(){return!0}}}}).call(this,__webpack_require__("1157"))},"0b94":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"LCdetail"},[a("span",{staticClass:"title"},[e._v("申请信息")]),e._v(" "),"view"===e.isShowDetail||"apply"===e.isShowDetail?a("div",[a("el-row",e._l(e.data,function(t,s,i){return a("el-col",{key:i,attrs:{span:12}},[a("div",{staticClass:"left"},[e._v(e._s(e._f("getTitle")(s))+" ：")]),e._v(" "),a("div",{staticClass:"right"},[e._v(e._s(t))])])}),1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"left"},[e._v("备注 ：")]),e._v(" "),a("div",{staticClass:"right"},[e._v(e._s(e.remark))])])],1),e._v(" "),a("span",{staticClass:"title"},[e._v("采购详情")]),e._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.officePurchaseVOS,border:""}},[a("el-table-column",{attrs:{prop:"patentName",label:"二级分类"}}),e._v(" "),a("el-table-column",{attrs:{prop:"itemName",label:"产品名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"unitName",label:"单位"}}),e._v(" "),a("el-table-column",{attrs:{prop:"applyNumber",label:"申请数量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"unitPrice",label:"单价(元)"}}),e._v(" "),a("el-table-column",{attrs:{prop:"money",label:"金额(元)"}})],1)],1)],1):e._e(),e._v(" "),"edit"===e.isShowDetail?a("div",[a("modify",{ref:"modify"})],1):e._e(),e._v(" "),"apply"===e.isShowDetail||"edit"===e.isShowDetail?a("div",[a("span",{staticClass:"title"},[e._v("审批信息")]),e._v(" "),a("iframe",{staticClass:"shenhexinxi",attrs:{src:e.url}}),e._v(" "),a("process",{attrs:{contentPath:"/oa-web/",exValue:e.exValue},on:{action:e.action,update:e.update}})],1):e._e()])},i=[],n=a("4bdb"),r=a("2215"),o={components:{process:n["default"],modify:r["default"]},filters:{getTitle:function(e){return"applicantDepartment"==e?"所在部门":"applicantName"==e?"姓名":"applyName"==e?"会议名称":"applyNo"==e?"表单号":"applyStatus"==e?"状态":"applyTime"==e?"申请日期":"createBy"==e?"创建者":"createDt"==e?"创建时间":"itemName"==e?"二级类别名称":"totalMoney"==e?"总金额":"remark"==e?"备注":"stockAmount"==e?"库存数量":"useAmount"==e?"领用数量":"useTypeName"==e?"类型":void 0}},data:function(){return{dialogFormVisible:!1,data:{},url:"",remark:"",exValue:{},isShowDetail:"",officePurchaseVOS:[]}},created:function(){this.isShowDetail=this.$route.query.steps},mounted:function(){var e=this;this.$store.dispatch("LC/officePurchaseDetail",this.$route.query.projectId).then(function(t){"edit"===e.isShowDetail&&e.$refs.modify.showDialog("112",t.data),e.data.applyNo=t.data.applyNo,e.data.applicantDepartment=t.data.applicantDepartment,e.data.applicantName=t.data.applicantName,e.data.applyTime=t.data.applyTime,e.data.totalMoney=t.data.totalMoney,e.remark=t.data.remark,e.officePurchaseVOS=t.data.officePurchaseVOS,e.url="/sysweb/action/showListview.action?listViewId=fixflowProcessInfosListView&instId="+e.$route.query.instId+"&listViewFileName=fixflowProcessInfosListViewFirst&frameInd="+e.$route.query.frameInd})},methods:{showDialog:function(e){this.dialogFormVisible=!this.dialogFormVisible},action:function(e){this.exValue={result:!0,extendParam:{depAudit:"1057",docType:"1"}}},update:function(){this.$refs.modify.submitForm("","update")}}},l=o,c=a("2877"),u=Object(c["a"])(l,s,i,!1,null,null,null);t["default"]=u.exports},"1d5d":function(e,t,a){},"1e82":function(e,t,a){"use strict";var s=a("1d5d"),i=a.n(s);i.a},2215:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addOrModifyLC"},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请单号"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyNo,callback:function(t){e.$set(e.fixedData,"applyNo",t)},expression:"fixedData.applyNo"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请部门"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantDepartment,callback:function(t){e.$set(e.fixedData,"applicantDepartment",t)},expression:"fixedData.applicantDepartment"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantName,callback:function(t){e.$set(e.fixedData,"applicantName",t)},expression:"fixedData.applicantName"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请日期"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyTime,callback:function(t){e.$set(e.fixedData,"applyTime",t)},expression:"fixedData.applyTime"}})],1)],1)])],1),e._v(" "),a("el-row",{staticClass:"vacationTime"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"总金额"}},[a("el-input",{attrs:{value:e.totalMoney,disabled:!0}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple waichureason"},[a("el-form-item",{attrs:{label:"备注",prop:"reason"}},[a("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},model:{value:e.fixedData.remark,callback:function(t){e.$set(e.fixedData,"remark",t)},expression:"fixedData.remark"}})],1)],1)])],1)],1),e._v(" "),a("div",{staticStyle:{marginTop:"10px"}},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.add}},[e._v("新增")])],1),e._v(" "),a("el-form",{ref:"applyRule",staticStyle:{marginTop:"10px"},attrs:{model:e.ruleForm,rules:e.rules}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.applyTableData,border:""}},[a("el-table-column",{attrs:{label:"二级分类"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(a){return e.secondChange(t.row)}},model:{value:t.row.patentId,callback:function(a){e.$set(t.row,"patentId",a)},expression:"scope.row.patentId"}},e._l(e.secondOptions,function(e){return a("el-option",{key:e.itemId,attrs:{label:e.itemName,value:e.itemId}})}),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"产品名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.itemId,callback:function(a){e.$set(t.row,"itemId",a)},expression:"scope.row.itemId"}},e._l(e.productName(t.row.patentId,t.row),function(e){return a("el-option",{key:e.itemId,attrs:{label:e.itemName,value:e.itemId}})}),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"单位"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.unit,callback:function(a){e.$set(t.row,"unit",a)},expression:"scope.row.unit"}},e._l(e.unitOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"库存数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:!0,value:e.kucunAmount(t.row)}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"申请数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.applyNumber,callback:function(a){e.$set(t.row,"applyNumber",a)},expression:"scope.row.applyNumber"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"单价"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.unitPrice,callback:function(a){e.$set(t.row,"unitPrice",a)},expression:"scope.row.unitPrice"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:!0,value:e.calculateMoney(t.row)}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{color:"#fff",width:"50px"},attrs:{type:"text"},on:{click:function(a){return e.del(t.row)}}},[e._v("删除")])]}}])})],1)],1)],1)},i=[],n=(a("c5f6"),a("ac6a"),{data:function(){return{totalMoney:0,applyTableData:[],dialogFormVisible:!1,formLabelWidth:"120",secondOptions:[],unitOptions:[],ruleForm:{applyName:"",attachment:"",vacationTime:[],reason:""},fixedData:{remark:""},rules:{vacationTime:[{required:"true",message:"请假时间必填",trigger:"change"}],applyName:[{required:"true",message:"请假标题",trigger:"change"}],reason:[{required:"true",message:"请假事由必填",trigger:"blur"}]},newId:0}},watch:{applyTableData:{handler:function(e,t){var a=[],s=0;e.forEach(function(e){""!==e.applyNumber&&""!==e.unitPrice&&a.push(e)}),a.forEach(function(e){s+=e.applyNumber*e.unitPrice}),this.totalMoney=s},deep:!0}},methods:{showDialog:function(e,t){var a=this;if(this.$store.dispatch("officeStock/selectItemList",{classify:0}).then(function(e){a.secondOptions=e.data}),this.$store.dispatch("officeStock/commonTCodeGetCodeByParentIdVal","11002").then(function(e){var t=[];e.data.options.forEach(function(e){var a={};a.value=Number(e.value),a.label=e.label,t.push(a)}),a.unitOptions=t}),"111"===e)this.fixedData.applyNo=t.applyNo,this.fixedData.applicantDepartment=t.applicantDepartment,this.fixedData.applyTime=t.applyTime,this.fixedData.applicantName=t.applicantName,this.fixedData.remark="",this.applyTableData=[],this.isAddOrMOdify=!0;else if("112"===e){this.fixedData.applyNo=t.applyNo,this.fixedData.applicantDepartment=t.applicantDepartment,this.fixedData.applyTime=t.applyTime,this.fixedData.applicantName=t.applicantName,this.fixedData.remark=t.remark;var s=[];t.officePurchaseVOS.forEach(function(e){e.newId=++a.newId,s.push(e)}),this.applyTableData=s,this.isAddOrMOdify=!1}},submitForm:function(e,t){var a=this,s=!0;if(0===this.applyTableData.length)return this.$message.warning("申请产品不能为空!");if(this.applyTableData.forEach(function(e){for(var t in e)if(""===e[t])return s=!1,a.$message.warning("申请产品参数存在空值!")}),s){var i={};i.applyNo=this.fixedData.applyNo,i.remark=this.fixedData.remark,i.officePurchaseDTOS=this.applyTableData,"save"===t?this.$store.dispatch("assetsUse/officePurchaseAdd",i).then(function(e){"0"===e.status&&(a.$message.success("新增成功!"),a.dialogFormVisible=!a.dialogFormVisible,a.$emit("getTableList"))}):"update"===t?this.$store.dispatch("assetsUse/officePurchaseUpdate",i).then(function(e){}):"submit"===t&&this.$store.dispatch("assetsUse/officePurchaseConditionProcessSubmit",i).then(function(e){"0"===e.status&&(a.$message.success("提交成功!"),a.dialogFormVisible=!a.dialogFormVisible,a.$emit("getTableList"))})}},del:function(e){var t=this;this.applyTableData.forEach(function(a,s){if(a.newId===e.newId)return t.applyTableData.splice(s,1),t.$message.success("已删除")})},add:function(){var e={};e.newId=++this.newId,e.patentId="",e.itemId="",e.unit="",e.applyNumber="",e.unitPrice="",this.applyTableData.push(e)},productName:function(e,t){var a=[];return this.secondOptions.forEach(function(t){e===t.itemId&&(a=t.itemList)}),a},getVal:function(e,t){Number(e)>this.kucunAmount(t)&&(this.$message.error("申请数量不能大于库存数量!"),t.applyNumber="")},calculateMoney:function(e){var t="";return""!==e.unit&&""!==e.unitPrice&&(t=e.applyNumber*Number(e.unitPrice)),t},kucunAmount:function(e){var t="";return""!==e.itemId&&""!==e.patentId?this.secondOptions.forEach(function(a){a.itemId===e.patentId&&a.itemList.forEach(function(a){a.itemId===e.itemId&&(t=a.stockAmount)})}):t="",t},secondChange:function(e){e.itemId="",e.unit=""}}}),r=n,o=a("2877"),l=Object(o["a"])(r,s,i,!1,null,null,null);t["default"]=l.exports},"4bdb":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.instId,expression:"instId"}],attrs:{id:"instId",type:"hidden"},domProps:{value:e.instId},on:{input:function(t){t.target.composing||(e.instId=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.taskId,expression:"taskId"}],attrs:{id:"taskId",type:"hidden"},domProps:{value:e.taskId},on:{input:function(t){t.target.composing||(e.taskId=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formUri,expression:"formUri"}],attrs:{id:"formUri",type:"hidden"},domProps:{value:e.formUri},on:{input:function(t){t.target.composing||(e.formUri=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formUriView,expression:"formUriView"}],attrs:{id:"formUriView",type:"hidden"},domProps:{value:e.formUriView},on:{input:function(t){t.target.composing||(e.formUriView=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pshow,expression:"pshow"}],attrs:{id:"pshow",type:"hidden"},domProps:{value:e.pshow},on:{input:function(t){t.target.composing||(e.pshow=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phid,expression:"phid"}],attrs:{id:"phid",type:"hidden"},domProps:{value:e.phid},on:{input:function(t){t.target.composing||(e.phid=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.contentPath,expression:"contentPath"}],attrs:{id:"contentPath",type:"hidden"},domProps:{value:e.contentPath},on:{input:function(t){t.target.composing||(e.contentPath=t.target.value)}}}),e._v(" "),a("table",{staticClass:"addtable",staticStyle:{"margin-top":"0px","margin-bottom":"10px"},attrs:{id:"formToolBarTable",width:"100%",border:"0",cellspacing:"0",cellpadding:"0"}},[e._m(0),e._v(" "),a("tr",{staticStyle:{borderTop:"1px solid #eee"}},[a("td",{staticClass:"td_name",staticStyle:{width:"20%"}},[e._v("处理意见")]),e._v(" "),a("td",{staticClass:"td_value",staticStyle:{width:"82%"},attrs:{colspan:"3"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.taskProcessDescValue,expression:"taskProcessDescValue"}],staticStyle:{width:"100%",height:"60px"},attrs:{name:"taskProcessDesc",id:"taskProcessDesc"},domProps:{value:e.taskProcessDescValue},on:{input:function(t){t.target.composing||(e.taskProcessDescValue=t.target.value)}}})])]),e._v(" "),a("tr",[a("td",{staticClass:"td_name",staticStyle:{width:"18%"}}),e._v(" "),a("td",{staticClass:"td_value drawablel",staticStyle:{width:"82%"},attrs:{colspan:"3",id:"processToolBar"}},[1===e.allcommshow?e._l(e.commandes,function(t,s){return a("button",{key:s,staticClass:"el-button el-button--primary el-button--small",attrs:{id:t.id,type:"primary"},on:{click:function(a){return e.btnHandel(t)}}},[e._v(e._s(t.name))])}):e._e(),e._v(" "),0===!e.allcommshow?e._l(e.commandes,function(t,s){return t.fixParam_BeforeShowJS?a("button",{key:s,staticClass:"el-button el-button--primary el-button--small",attrs:{id:t.id,type:"primary"},on:{click:function(a){return e.btnHandel(t)}}},[e._v(e._s(t.name))]):e._e()}):e._e()],2)])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",{attrs:{colspan:"4"}},[a("div",{staticClass:"panel-header panel-title",staticStyle:{"border-left":"0px","border-right":"0px","border-top":"0px","margin-top":"1px","margin-bottom":"1px"}},[e._v("流程审批")])])])}],n=a("093d"),r=n["a"],o=(a("1e82"),a("2877")),l=Object(o["a"])(r,s,i,!1,null,"6a664fdc",null);t["default"]=l.exports}}]);