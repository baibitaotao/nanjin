(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59db42b4","chunk-2364b51c","chunk-010c209e","chunk-32ec804c"],{"093d":function(module,__webpack_exports__,__webpack_require__){"use strict";(function($){var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("c5f6"),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__),axios__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__["a"]={name:"process",props:{allcommshow:{type:Number,default:1},validateFun:Function,contentPath:{type:String,default:"/ei-web/"},exValue:{type:Object,default:function(){return{result:!0,extendParam:{depAudit:"1057",docType:"1"}}}}},watch:{taskId:function(e){var t=this;axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.contentPath+"workflowProcess/getProcessCommandJSON?taskId="+this.taskId,{taskId:this.taskId}).then(function(e){t.commandes=e.data}).catch(function(e){}),this.showAndHidForm(this.pshow,this.phid)}},data:function(){return{isShowBtn:!1,btnId:"",btnName:"",btnJson:"",taskProcessDescValue:"",submitCount:0,commandes:null,instId:"",taskId:"",formUri:"",formUriView:"",pshow:"",phid:"",theRequest:{},extendParam:"",abc:""}},mounted:function(){window.location;var e=this.$route.query;this.theRequest=e,this.instId=this.theRequest.instId,this.taskId=this.theRequest.taskId,this.formUri=this.theRequest.formUri,this.formUriView=this.theRequest.formUriView},methods:{showAndHidForm:function(e,t){if(null!=e&&""!==e)for(var a=e.split(","),i=0;i<a.length;i++)$("#"+a[i]).show();if(null!=t&&""!==t)for(var s=t.split(","),n=0;n<s.length;n++)$("#"+s[n]).attr("style","display:none").hide()},beforeCommandShow:function(){return!0},btnHandel:function(e){var t=e.fixParam_BeforeHandleJS,a=(e.type,"");"undefined"!=typeof t&&null!=t&&""!=t?(this.$emit("update"),a="",this.extendParam=""):"fixParam_BeforeHandleJS"===e.id?(this.$emit("update"),a="",this.extendParam=""):"fixParam_BeforeHandleJS2"===e.id&&(this.$emit("updateDetail"),a="",this.extendParam=""),"undefined"!=typeof a&&null!=a&&""!=a||(a=""),this.doProcessTask("",e.name,e.id,e.type,e,this.extendParam)},doProcessTask:function(e,t,a,i,s,n){document.documentElement.scrollTop=0,this.processTask(t,a,i,s,n)},processTask:function(e,t,a,i,s){var n=this;this.confirmMessage("确认进行"+e+"操作？",function(e){if(e){document.documentElement.scrollTop=0;var o=n.taskProcessDescValue;if(""===o)return void n.alertMessage("请填写处理意见，最大长度为2000字符！");if(o.length>2e3)return void n.alertMessage("处理意见超长，最大长度为2000字符！");var r={instId:n.instId,taskId:n.taskId,commandId:t,commandType:a,processDesc:encodeURIComponent(n.taskProcessDescValue),formParam:s},l=!!i.fixParam_taskProcessDescFlag&&i.fixParam_taskProcessDescFlag,c=i.fixParam_taskProcessDescMessage?i.fixParam_taskProcessDescMessage:"";if("true"===l&&""===r.processDesc)return""===c&&(c="请填写处理意见！"),void n.alertMessage(c);if("rollBackTaskByExpression"===a){if(""===r.processDesc)return void n.alertMessage("请填写意见！")}else try{var d=saveDataMy();if(!d)return}catch(_){}if("modifyForm"===a){var u=i.fixParam_title;u&&""!==u||(u="修改");var p={toobarTitle:u},m=i.fixParam_url;return m&&""!==m||(m=n.formUri),m=appendParams(m,{submitBtnShow:"false"}),void n.getPageWin("layout",window).openWindow(800,600,p.toobarTitle,m,p,function(){parent.refreshCenterRegion()})}if("pending"===a){p={toobarTitle:"请选择转办人"},m=i.fixParam_url;if(m){var f=i.fixParam_width,h=i.fixParam_height;f||(f=800),h||(h=600),n.getPageWin("layout",window).openWindow(f,h,p.toobarTitle,m,p,function(){var e=n.getPageWin("layout",window).invokeResult;e&&e.result&&(e.selectUserId&&(r["pendingUserId"]=e.selectUserId),n.execProcessTask(r))})}else n.execProcessTask(r);return}if("rollBackTaskByTaskId"===a){p={toobarTitle:"请选择任务"},m="../jsps/process/listRollBackTaskList.jsp?taskId="+n.taskId+"&instId="+n.instId+"&commandId="+t+"&commandType="+a+"&processDesc="+encodeURIComponent(encodeURIComponent($("#taskProcessDesc").val()))+"&bizKey="+$("#keyValues").val();return openWindow(800,600,p.toobarTitle,m,p,function(){}),!1}if("rollBack"==a){p={toobarTitle:"请选择节点"},m="../jsps/process/listRollBackNodeList.jsp?taskId="+taskId+"&instId="+instId+"&commandId="+t+"&commandType="+a+"&processDesc="+encodeURIComponent(encodeURIComponent($("#taskProcessDesc").val()))+"&bizKey="+$("#keyValues").val();return openWindow(480,320,p.toobarTitle,m,p,function(){}),!1}if("submit"!=a){u=i.fixParam_title;u&&""!=u||(u="修改");p={toobarTitle:u},m=i.fixParam_url;if(m){f=i.fixParam_width,h=i.fixParam_height;f||(f=800),h||(h=600),n.getPageWin("layout",window).openWindow(f,h,p.toobarTitle,m,p,function(){var e=getPageWin("layout",window).invokeResult;if(e&&e.result){if(e.taskProcessDesc){var t=$("#taskProcessDesc").val();t=""==t?e.taskProcessDesc:t+","+e.taskProcessDesc,$("#taskProcessDesc").val(t)}n.execProcessTask(r)}})}else n.execProcessTask(r);return}if(!n.validate())return void alertMessage("表单验证不通过,请重新填写");n.execProcessTask(r)}})},confirmMessage:function(e,t){$.messager.confirm("提示",e,t)},alertMessage:function(e,t){$.messager.alert("提示",e,"info",t)},getPageWin:function(e,t){var a=this.getParentPageWin(e,t);return a},getParentPageWin:function(e,t){var a=t;return("undefined"===typeof a.pageId||a.pageId!=e)&&null!=a.parent?a.location.href!=a.parent.location.href?this.getPageWin(e,a.parent):null:a},execProcessTask:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.submitCount;a++,1===a&&("general"==e.commandType&&(console.log("执行同意接口"),this.$emit("action")),axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.contentPath+"workflowProcess/processTask?"+"instId=".concat(e.instId,"&taskId=").concat(e.taskId,"&commandId=").concat(e.commandId,"&commandType=").concat(e.commandType,"&processDesc=").concat(e.processDesc,"&formParam=").concat(JSON.stringify(e.formParam)),e).then(function(e){var a=e.data;a.result?t.alertMessage(a.successMessage,function(){var e=t.getListviewWin(window);null==e?t.getPageWin("fpPortal",window).closeWindow():t.getListviewWin(window).closeWindow()}):(t.submitCount=0,t.alertMessage(a.errorMessage,function(){var e=t.getListviewWin(window);null==e?t.getPageWin("fpPortal",window).closeWindow():t.getListviewWin(window).closeWindow()}))}))},getListviewWin:function(e){var t=e;return"undefined"===typeof t.listviewId&&null!=t.parent?t.location.href!=t.parent.location.href?this.getListviewWin(t.parent):null:t},taskProcessDescCheck:function(){var e="",t=0,a=$("#taskProcessDesc").val();return e=""==a?'{"result":false,"errorMsg":"请填写退回理由！"}':'{"result":true,"extendParam":'+t+"}",e},saveData2:function saveData2(fn,data2){try{var mark=this.saveDataBefore();if(!mark)return}catch(e){}var result=this.validate(),editWin=getEditWin(window),inJCEdit=null!=editWin;"false"==parameterJsonObj.inJCEdit&&(inJCEdit=!1),result&&($.messager.progress({title:"正在处理,请稍等..."}),$("#dataForm").form("submit",{url:"../action/bizObjectBase!save.action",async:!1,onSubmit:function(){return!0},success:function success(data){$.messager.progress("close"),execProcessTask(data2);var dataObj=eval("("+data+")");if(dataObj.result){"new"==dealMark&&(keyValues=dataObj.attribute.keyValues,dealMark="update",document.getElementsByName("keyValues")[0].value=keyValues,document.getElementsByName("dealMark")[0].value=dealMark);try{saveDataAfter()}catch(e){}}if(inJCEdit){if(getEditWin(window).assetExist=!0,getEditWin(window).keyValues=dataObj.attribute.keyValues,null!=fn)return fn(dataObj)}else if($.messager.progress("close"),dataObj.result){var listviewWin=getListviewWin(window);null!=listviewWin&&listviewWin.refresh(),$.messager.alert("提示",dataObj.successMessage,"info",function(){if(null!=fn)return fn(dataObj)})}else $.messager.alert("提示",dataObj.errorMessage,"info",function(){if(null!=fn)return fn(dataObj)})}}))},getEditWin:function(e){var t=e;return"undefined"===typeof t.integrationEditorId&&null!=t.parent?t.location.href!=t.parent.location.href?this.getEditWin(t.parent):null:t},validate:function(){return!0},saveDataBefore:function(){return!0}}}}).call(this,__webpack_require__("1157"))},1980:function(e,t,a){},"1d5d":function(e,t,a){},"1e82":function(e,t,a){"use strict";var i=a("1d5d"),s=a.n(i);s.a},"3a21":function(e,t,a){"use strict";var i=a("1980"),s=a.n(i);s.a},"4bdb":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.instId,expression:"instId"}],attrs:{id:"instId",type:"hidden"},domProps:{value:e.instId},on:{input:function(t){t.target.composing||(e.instId=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.taskId,expression:"taskId"}],attrs:{id:"taskId",type:"hidden"},domProps:{value:e.taskId},on:{input:function(t){t.target.composing||(e.taskId=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formUri,expression:"formUri"}],attrs:{id:"formUri",type:"hidden"},domProps:{value:e.formUri},on:{input:function(t){t.target.composing||(e.formUri=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formUriView,expression:"formUriView"}],attrs:{id:"formUriView",type:"hidden"},domProps:{value:e.formUriView},on:{input:function(t){t.target.composing||(e.formUriView=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pshow,expression:"pshow"}],attrs:{id:"pshow",type:"hidden"},domProps:{value:e.pshow},on:{input:function(t){t.target.composing||(e.pshow=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phid,expression:"phid"}],attrs:{id:"phid",type:"hidden"},domProps:{value:e.phid},on:{input:function(t){t.target.composing||(e.phid=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.contentPath,expression:"contentPath"}],attrs:{id:"contentPath",type:"hidden"},domProps:{value:e.contentPath},on:{input:function(t){t.target.composing||(e.contentPath=t.target.value)}}}),e._v(" "),a("table",{staticClass:"addtable",staticStyle:{"margin-top":"0px","margin-bottom":"10px"},attrs:{id:"formToolBarTable",width:"100%",border:"0",cellspacing:"0",cellpadding:"0"}},[e._m(0),e._v(" "),a("tr",{staticStyle:{borderTop:"1px solid #eee"}},[a("td",{staticClass:"td_name",staticStyle:{width:"20%"}},[e._v("处理意见")]),e._v(" "),a("td",{staticClass:"td_value",staticStyle:{width:"82%"},attrs:{colspan:"3"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.taskProcessDescValue,expression:"taskProcessDescValue"}],staticStyle:{width:"100%",height:"60px"},attrs:{name:"taskProcessDesc",id:"taskProcessDesc"},domProps:{value:e.taskProcessDescValue},on:{input:function(t){t.target.composing||(e.taskProcessDescValue=t.target.value)}}})])]),e._v(" "),a("tr",[a("td",{staticClass:"td_name",staticStyle:{width:"18%"}}),e._v(" "),a("td",{staticClass:"td_value drawablel",staticStyle:{width:"82%"},attrs:{colspan:"3",id:"processToolBar"}},[1===e.allcommshow?e._l(e.commandes,function(t,i){return a("button",{key:i,staticClass:"el-button el-button--primary el-button--small",attrs:{id:t.id,type:"primary"},on:{click:function(a){return e.btnHandel(t)}}},[e._v(e._s(t.name))])}):e._e(),e._v(" "),0===!e.allcommshow?e._l(e.commandes,function(t,i){return t.fixParam_BeforeShowJS?a("button",{key:i,staticClass:"el-button el-button--primary el-button--small",attrs:{id:t.id,type:"primary"},on:{click:function(a){return e.btnHandel(t)}}},[e._v(e._s(t.name))]):e._e()}):e._e()],2)])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",{attrs:{colspan:"4"}},[a("div",{staticClass:"panel-header panel-title",staticStyle:{"border-left":"0px","border-right":"0px","border-top":"0px","margin-top":"1px","margin-bottom":"1px"}},[e._v("流程审批")])])])}],n=a("093d"),o=n["a"],r=(a("1e82"),a("2877")),l=Object(r["a"])(o,i,s,!1,null,"6a664fdc",null);t["default"]=l.exports},"93e8":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addOrModifyLC"},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("el-row",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请单号"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyNo,callback:function(t){e.$set(e.fixedData,"applyNo",t)},expression:"fixedData.applyNo"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请部门"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantDepartment,callback:function(t){e.$set(e.fixedData,"applicantDepartment",t)},expression:"fixedData.applicantDepartment"}})],1)],1)])],1),e._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantName,callback:function(t){e.$set(e.fixedData,"applicantName",t)},expression:"fixedData.applicantName"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请日期"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyTime,callback:function(t){e.$set(e.fixedData,"applyTime",t)},expression:"fixedData.applyTime"}})],1)],1)])],1),e._v(" "),a("el-row",{staticClass:"vacationTime"},[a("el-col",{staticStyle:{height:"50px"},attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"请假时间",prop:"vacationTime"}},[a("el-date-picker",{staticStyle:{marginTop:"10px",marginLeft:"8px"},attrs:{type:"datetimerange","range-separator":"至",format:"yyyy-MM-dd HH:mm","value-format":"timestamp","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.ruleForm.vacationTime,callback:function(t){e.$set(e.ruleForm,"vacationTime",t)},expression:"ruleForm.vacationTime"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"请假类型",prop:"vacationType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.vacationType,callback:function(t){e.$set(e.ruleForm,"vacationType",t)},expression:"ruleForm.vacationType"}},e._l(e.vacationType,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"请假时长(小时)"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.vacationLength,callback:function(t){e.vacationLength=t},expression:"vacationLength"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple waichureason"},[a("el-form-item",{attrs:{label:"请假事由",prop:"reason"}},[a("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},model:{value:e.ruleForm.reason,callback:function(t){e.$set(e.ruleForm,"reason",t)},expression:"ruleForm.reason"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple fujian"},[a("el-form-item",{attrs:{label:"附件"}},[e.dialogFormVisible?a("up-load",{attrs:{contextPath:"/oa-web/",uploadTitle:"点击上传附件"},model:{value:e.ruleForm.attachment,callback:function(t){e.$set(e.ruleForm,"attachment",t)},expression:"ruleForm.attachment"}}):e._e()],1)],1)])],1)],1)],1)},s=[],n=(a("c5f6"),a("ac6a"),a("f8f6")),o={components:{upLoad:n["default"]},computed:{vacationLength:function(){return this.ruleForm.vacationTime?0==this.ruleForm.vacationTime.length?0:((this.ruleForm.vacationTime[1]-this.ruleForm.vacationTime[0])/1e3/60/60).toFixed(1):0}},data:function(){return{fileToken:"",isAddOrMOdify:"",dialogFormVisible:!1,formLabelWidth:"120",vacationType:[],ruleForm:{applyName:"",attachment:"",vacationTime:[],reason:"",vacationType:""},fixedData:{},rules:{vacationTime:[{required:"true",message:"请假时间必填",trigger:"change"}],applyName:[{required:"true",message:"请假标题",trigger:"change"}],reason:[{required:"true",message:"请假事由必填",trigger:"blur"}],vacationType:[{required:"true",message:"请假类型必填",trigger:"change"}]}}},methods:{showDialog:function(e,t){var a=this;this.dialogFormVisible=!this.dialogFormVisible,this.$store.dispatch("applyVacation/commonTCodeGetCodeByParentId").then(function(e){if("0"!==e.status)return a.$message.error("请假类型接口请求出错");var t=[];e.data.options.forEach(function(e){var a={};a.value=Number(e.value),a.label=e.label,t.push(a)}),a.vacationType=t}),"111"==e?this.isAddOrMOdify=!0:"112"==e&&(this.isAddOrMOdify=!1),"111"==e?(this.ruleForm.vacationType="",this.ruleForm.vacationLength="",this.ruleForm.vacationTime=[],this.ruleForm.attachment="",this.ruleForm.reason="",this.fixedData=t):"112"==e&&(this.ruleForm.vacationTime=[],this.fixedData.applyNo=t[0].applyNo,this.fixedData.applicantDepartment=t[0].applicantDepartment,this.fixedData.applyTime=t[0].applyTime,this.fixedData.applicantName=t[0].applicantName,this.ruleForm.attachment=t[0].attachment||"",this.ruleForm.vacationTime.push(t[0].vacationStartTimeLong+""),this.ruleForm.vacationTime.push(t[0].vacationEndTimeLong+""),this.ruleForm.reason=t[0].reason,this.ruleForm.vacationType=Number(t[0].vacationType),this.ruleForm.applyNo=t[0].applyNo),this.$nextTick(function(){a.$refs.ruleForm.clearValidate()})},submitForm:function(e,t){var a={};a.applyNo=this.fixedData.applyNo,a.attachment=this.ruleForm.attachment,a.reason=this.ruleForm.reason,a.vacationType=this.ruleForm.vacationType,a.vacationLength=this.vacationLength,a.vacationEndTime=this.ruleForm.vacationTime[1],a.vacationStartTime=this.ruleForm.vacationTime[0],"update"===t&&this.$store.dispatch("applyVacation/applyVacationUpdate",a).then(function(e){})}}},r=o,l=a("2877"),c=Object(l["a"])(r,i,s,!1,null,null,null);t["default"]=c.exports},e36d:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"LCdetail"},[a("span",{staticClass:"title"},[e._v("申请信息")]),e._v(" "),"view"===e.isShowDetail||"apply"===e.isShowDetail?a("div",[a("el-row",e._l(e.data,function(t,i,s){return a("el-col",{key:s,attrs:{span:12}},[a("div",{staticClass:"left"},[e._v(e._s(e._f("getTitle")(i))+" ：")]),e._v(" "),a("div",{staticClass:"right"},[e._v(e._s(t))])])}),1),e._v(" "),a("el-row",{staticStyle:{borderTop:"0"}},[a("el-col",{staticStyle:{height:"auto"},attrs:{span:24}},[a("div",{staticClass:"left"},[e._v("附件 ：")]),e._v(" "),a("div",{staticClass:"right"},[a("up-load",{attrs:{hiddenUpload:!0},model:{value:e.fileToken,callback:function(t){e.fileToken=t},expression:"fileToken"}})],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"left"},[e._v("备注 ：")]),e._v(" "),a("div",{staticClass:"right"},[e._v(e._s(e.remark))])])],1)],1):e._e(),e._v(" "),"edit"===e.isShowDetail?a("div",[a("modify",{ref:"modify"})],1):e._e(),e._v(" "),"apply"===e.isShowDetail||"edit"===e.isShowDetail?a("div",[a("span",{staticClass:"title"},[e._v("审批信息")]),e._v(" "),a("iframe",{staticClass:"shenhexinxi",attrs:{src:e.url}}),e._v(" "),a("process",{attrs:{contentPath:"/oa-web/",exValue:e.exValue},on:{action:e.action,update:e.update}})],1):e._e()])},s=[],n=a("4bdb"),o=a("93e8"),r=a("f8f6"),l={components:{process:n["default"],modify:o["default"],upLoad:r["default"]},filters:{getTitle:function(e){return"applicantDepartment"==e?"所在部门":"applicantName"==e?"姓名":"applyName"==e?"会议名称":"applyNo"==e?"表单号":"applyStatus"==e?"状态":"applyTime"==e?"申请日期":"createBy"==e?"创建者":"createDt"==e?"创建时间":"vacationStartTime"==e?"请假开始时间":"vacationEndTime"==e?"请假结束时间":"remark"==e?"请假事由":"vacationTypeName"==e?"请假类型":"vacationLength"==e?"请假时长":"useTypeName"==e?"类型":void 0}},data:function(){return{dialogFormVisible:!1,data:{},url:"",remark:"",exValue:{},isShowDetail:"",officePurchaseVOS:[],fileToken:""}},created:function(){this.isShowDetail=this.$route.query.steps},mounted:function(){var e=this;this.$store.dispatch("LC/applyVacationDetail",this.$route.query.projectId).then(function(t){if("edit"===e.isShowDetail){var a=[];a.push(t.data),e.$refs.modify.showDialog("112",a)}e.data.applyNo=t.data.applyNo,e.data.applicantDepartment=t.data.applicantDepartment,e.data.applicantName=t.data.applicantName,e.data.applyTime=t.data.applyTime,e.data.vacationStartTime=t.data.vacationStartTime,e.data.vacationEndTime=t.data.vacationEndTime,e.data.vacationTypeName=t.data.vacationTypeName,e.data.vacationLength=t.data.vacationLength,e.remark=t.data.reason,e.fileToken=null==t.data.attachment?"":t.data.attachment,e.officePurchaseVOS=t.data.officePurchaseVOS,e.url="/sysweb/action/showListview.action?listViewId=fixflowProcessInfosListView&instId="+e.$route.query.instId+"&listViewFileName=fixflowProcessInfosListViewFirst&frameInd="+e.$route.query.frameInd})},methods:{showDialog:function(e){this.dialogFormVisible=!this.dialogFormVisible},action:function(e){this.exValue={result:!0,extendParam:{depAudit:"1057",docType:"1"}}},update:function(){this.$refs.modify.submitForm("","update")}}},c=l,d=a("2877"),u=Object(d["a"])(c,i,s,!1,null,null,null);t["default"]=u.exports},f8f6:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"upload-box"},[e.hiddenUpload?a("div",{staticClass:"fileView"},e._l(e.fileList,function(t){return a("h3",{key:t.uid},[a("a",{attrs:{href:e.contextPath+"attachController/download?fileId="+t.uid,target:"_blank"}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.hiddenUpload?e._e():a("div",{staticClass:"el-upload-box"},[a("el-upload",{ref:"upload",attrs:{action:e.updatePath,"auto-upload":!0,name:e.upLoadName,data:e.extraData,"file-list":e.fileList,accept:e.acceptFormat,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-error":e.handleError,"on-change":e.handleChange,"before-remove":e.beforeRemove,"before-upload":e.beforeUpload}},[a("el-button",{class:{active:e.hiddenUpload},attrs:{size:e.size,type:"primary"}},[e._v(e._s(e.uploadTitle))]),e._v(" "),e.isShowTip?a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.TipTitle))]):e._e()],1)],1)])},s=[],n=(a("28a5"),a("7f7f"),a("c5f6"),a("bc3a")),o=a.n(n),r={name:"GuluUpload",model:{prop:"value",event:"update-value"},props:{value:[String],isShowTip:{type:Boolean,default:!1},hiddenUpload:{type:Boolean,default:!1},tipTitle:{type:String,default:"只能上传jpg / png文件， 且不超过500kb"},uploadTitle:{type:String,default:"点击上传"},limit:{type:Number,default:1},extraData:{type:Object,default:function(){return{bizTableName:"",bizTablePk:"",fieldName:""}}},size:{type:String,default:"small"},upLoadName:{type:String,default:"file"},contextPath:{type:String,default:"/oa-web/"},acceptFormat:{type:String,default:".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.rp,.vsd"}},data:function(){return{updatePath:this.contextPath+"attachController/upload?fieldToken="+this.value,fileList:[]}},created:function(){var e=this;setTimeout(function(){e.$nextTick(function(){e.updatePath=e.contextPath+"attachController/upload?fieldToken="+e.value,e.getFileData()})},500)},methods:{getFileData:function(){var e=this,t=this.value;""!=t&&null!=t||(t="-1"),o()({url:this.contextPath+"attachController/getFileList?fieldToken="+t,method:"get"}).then(function(t){"0"===t.data.status?t.data.data.fileList&&e.$nextTick(function(){e.fileList=t.data.data.fileList,0==e.fileList.length&&e.$emit("update-value","")}):e.$message({type:"info",duration:1e3,message:t.data.msg})})},beforeUpload:function(e){},handleChange:function(e,t){var a=e.name.substring(e.name.lastIndexOf(".")+1),i="rp"===a,s="vsd"===a;(i||s)&&(this.$message({message:"上传文件不能是 rp 、vsd 格式!",type:"warning"}),this.$refs.upload.clearFiles())},handleExceed:function(e,t){this.$message.warning("当前限制选择 ".concat(e.length," 个文件，本次选择了 ").concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},handleRemove:function(e,t){var a=this;o()({url:this.contextPath+"attachController/delete?fileId="+e.uid,method:"get"}).then(function(e){"0"===e.data.status&&0==t.length&&a.$emit("update-value","")})},handleError:function(e,t,a){},handleSuccess:function(e,t,a){var i=e.data.fieldToken;void 0==i&&(i=this.value);var s=this.updatePath.split("=");""!=s[1]&&""==i&&(i=s[1]),this.updatePath=this.contextPath+"attachController/upload?fieldToken="+i,this.$emit("update-value",i)},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},handlePreview:function(e){window.open(this.contextPath+"attachController/download?fileId="+e.uid)}}},l=r,c=(a("3a21"),a("2877")),d=Object(c["a"])(l,i,s,!1,null,"087933ee",null);t["default"]=d.exports}}]);