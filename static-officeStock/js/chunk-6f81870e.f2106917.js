(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f81870e","chunk-2364b51c","chunk-2d0f0d74","chunk-2d0c7f0f"],{"093d":function(module,__webpack_exports__,__webpack_require__){"use strict";(function($){var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("c5f6"),core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__),axios__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__["a"]={name:"process",props:{allcommshow:{type:Number,default:1},validateFun:Function,contentPath:{type:String,default:"/ei-web/"},exValue:{type:Object,default:function(){return{result:!0,extendParam:{depAudit:"1057",docType:"1"}}}}},watch:{taskId:function(e){var t=this;axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.contentPath+"workflowProcess/getProcessCommandJSON?taskId="+this.taskId,{taskId:this.taskId}).then(function(e){t.commandes=e.data}).catch(function(e){}),this.showAndHidForm(this.pshow,this.phid)}},data:function(){return{isShowBtn:!1,btnId:"",btnName:"",btnJson:"",taskProcessDescValue:"",submitCount:0,commandes:null,instId:"",taskId:"",formUri:"",formUriView:"",pshow:"",phid:"",theRequest:{},extendParam:"",abc:""}},mounted:function(){window.location;var e=this.$route.query;this.theRequest=e,this.instId=this.theRequest.instId,this.taskId=this.theRequest.taskId,this.formUri=this.theRequest.formUri,this.formUriView=this.theRequest.formUriView},methods:{showAndHidForm:function(e,t){if(null!=e&&""!==e)for(var a=e.split(","),i=0;i<a.length;i++)$("#"+a[i]).show();if(null!=t&&""!==t)for(var s=t.split(","),r=0;r<s.length;r++)$("#"+s[r]).attr("style","display:none").hide()},beforeCommandShow:function(){return!0},btnHandel:function(e){var t=e.fixParam_BeforeHandleJS,a=(e.type,"");"undefined"!=typeof t&&null!=t&&""!=t?(this.$emit("update"),a="",this.extendParam=""):"fixParam_BeforeHandleJS"===e.id?(this.$emit("update"),a="",this.extendParam=""):"fixParam_BeforeHandleJS2"===e.id&&(this.$emit("updateDetail"),a="",this.extendParam=""),"undefined"!=typeof a&&null!=a&&""!=a||(a=""),this.doProcessTask("",e.name,e.id,e.type,e,this.extendParam)},doProcessTask:function(e,t,a,i,s,r){document.documentElement.scrollTop=0,this.processTask(t,a,i,s,r)},processTask:function(e,t,a,i,s){var r=this;this.confirmMessage("确认进行"+e+"操作？",function(e){if(e){document.documentElement.scrollTop=0;var o=r.taskProcessDescValue;if(""===o)return void r.alertMessage("请填写处理意见，最大长度为2000字符！");if(o.length>2e3)return void r.alertMessage("处理意见超长，最大长度为2000字符！");var n={instId:r.instId,taskId:r.taskId,commandId:t,commandType:a,processDesc:encodeURIComponent(r.taskProcessDescValue),formParam:s},l=!!i.fixParam_taskProcessDescFlag&&i.fixParam_taskProcessDescFlag,u=i.fixParam_taskProcessDescMessage?i.fixParam_taskProcessDescMessage:"";if("true"===l&&""===n.processDesc)return""===u&&(u="请填写处理意见！"),void r.alertMessage(u);if("rollBackTaskByExpression"===a){if(""===n.processDesc)return void r.alertMessage("请填写意见！")}else try{var d=saveDataMy();if(!d)return}catch(_){}if("modifyForm"===a){var c=i.fixParam_title;c&&""!==c||(c="修改");var m={toobarTitle:c},p=i.fixParam_url;return p&&""!==p||(p=r.formUri),p=appendParams(p,{submitBtnShow:"false"}),void r.getPageWin("layout",window).openWindow(800,600,m.toobarTitle,p,m,function(){parent.refreshCenterRegion()})}if("pending"===a){m={toobarTitle:"请选择转办人"},p=i.fixParam_url;if(p){var f=i.fixParam_width,h=i.fixParam_height;f||(f=800),h||(h=600),r.getPageWin("layout",window).openWindow(f,h,m.toobarTitle,p,m,function(){var e=r.getPageWin("layout",window).invokeResult;e&&e.result&&(e.selectUserId&&(n["pendingUserId"]=e.selectUserId),r.execProcessTask(n))})}else r.execProcessTask(n);return}if("rollBackTaskByTaskId"===a){m={toobarTitle:"请选择任务"},p="../jsps/process/listRollBackTaskList.jsp?taskId="+r.taskId+"&instId="+r.instId+"&commandId="+t+"&commandType="+a+"&processDesc="+encodeURIComponent(encodeURIComponent($("#taskProcessDesc").val()))+"&bizKey="+$("#keyValues").val();return openWindow(800,600,m.toobarTitle,p,m,function(){}),!1}if("rollBack"==a){m={toobarTitle:"请选择节点"},p="../jsps/process/listRollBackNodeList.jsp?taskId="+taskId+"&instId="+instId+"&commandId="+t+"&commandType="+a+"&processDesc="+encodeURIComponent(encodeURIComponent($("#taskProcessDesc").val()))+"&bizKey="+$("#keyValues").val();return openWindow(480,320,m.toobarTitle,p,m,function(){}),!1}if("submit"!=a){c=i.fixParam_title;c&&""!=c||(c="修改");m={toobarTitle:c},p=i.fixParam_url;if(p){f=i.fixParam_width,h=i.fixParam_height;f||(f=800),h||(h=600),r.getPageWin("layout",window).openWindow(f,h,m.toobarTitle,p,m,function(){var e=getPageWin("layout",window).invokeResult;if(e&&e.result){if(e.taskProcessDesc){var t=$("#taskProcessDesc").val();t=""==t?e.taskProcessDesc:t+","+e.taskProcessDesc,$("#taskProcessDesc").val(t)}r.execProcessTask(n)}})}else r.execProcessTask(n);return}if(!r.validate())return void alertMessage("表单验证不通过,请重新填写");r.execProcessTask(n)}})},confirmMessage:function(e,t){$.messager.confirm("提示",e,t)},alertMessage:function(e,t){$.messager.alert("提示",e,"info",t)},getPageWin:function(e,t){var a=this.getParentPageWin(e,t);return a},getParentPageWin:function(e,t){var a=t;return("undefined"===typeof a.pageId||a.pageId!=e)&&null!=a.parent?a.location.href!=a.parent.location.href?this.getPageWin(e,a.parent):null:a},execProcessTask:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.submitCount;a++,1===a&&("general"==e.commandType&&(console.log("执行同意接口"),this.$emit("action")),axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.contentPath+"workflowProcess/processTask?"+"instId=".concat(e.instId,"&taskId=").concat(e.taskId,"&commandId=").concat(e.commandId,"&commandType=").concat(e.commandType,"&processDesc=").concat(e.processDesc,"&formParam=").concat(JSON.stringify(e.formParam)),e).then(function(e){var a=e.data;a.result?t.alertMessage(a.successMessage,function(){var e=t.getListviewWin(window);null==e?t.getPageWin("fpPortal",window).closeWindow():t.getListviewWin(window).closeWindow()}):(t.submitCount=0,t.alertMessage(a.errorMessage,function(){var e=t.getListviewWin(window);null==e?t.getPageWin("fpPortal",window).closeWindow():t.getListviewWin(window).closeWindow()}))}))},getListviewWin:function(e){var t=e;return"undefined"===typeof t.listviewId&&null!=t.parent?t.location.href!=t.parent.location.href?this.getListviewWin(t.parent):null:t},taskProcessDescCheck:function(){var e="",t=0,a=$("#taskProcessDesc").val();return e=""==a?'{"result":false,"errorMsg":"请填写退回理由！"}':'{"result":true,"extendParam":'+t+"}",e},saveData2:function saveData2(fn,data2){try{var mark=this.saveDataBefore();if(!mark)return}catch(e){}var result=this.validate(),editWin=getEditWin(window),inJCEdit=null!=editWin;"false"==parameterJsonObj.inJCEdit&&(inJCEdit=!1),result&&($.messager.progress({title:"正在处理,请稍等..."}),$("#dataForm").form("submit",{url:"../action/bizObjectBase!save.action",async:!1,onSubmit:function(){return!0},success:function success(data){$.messager.progress("close"),execProcessTask(data2);var dataObj=eval("("+data+")");if(dataObj.result){"new"==dealMark&&(keyValues=dataObj.attribute.keyValues,dealMark="update",document.getElementsByName("keyValues")[0].value=keyValues,document.getElementsByName("dealMark")[0].value=dealMark);try{saveDataAfter()}catch(e){}}if(inJCEdit){if(getEditWin(window).assetExist=!0,getEditWin(window).keyValues=dataObj.attribute.keyValues,null!=fn)return fn(dataObj)}else if($.messager.progress("close"),dataObj.result){var listviewWin=getListviewWin(window);null!=listviewWin&&listviewWin.refresh(),$.messager.alert("提示",dataObj.successMessage,"info",function(){if(null!=fn)return fn(dataObj)})}else $.messager.alert("提示",dataObj.errorMessage,"info",function(){if(null!=fn)return fn(dataObj)})}}))},getEditWin:function(e){var t=e;return"undefined"===typeof t.integrationEditorId&&null!=t.parent?t.location.href!=t.parent.location.href?this.getEditWin(t.parent):null:t},validate:function(){return!0},saveDataBefore:function(){return!0}}}}).call(this,__webpack_require__("1157"))},"1d5d":function(e,t,a){},"1e82":function(e,t,a){"use strict";var i=a("1d5d"),s=a.n(i);s.a},"4bdb":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.instId,expression:"instId"}],attrs:{id:"instId",type:"hidden"},domProps:{value:e.instId},on:{input:function(t){t.target.composing||(e.instId=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.taskId,expression:"taskId"}],attrs:{id:"taskId",type:"hidden"},domProps:{value:e.taskId},on:{input:function(t){t.target.composing||(e.taskId=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formUri,expression:"formUri"}],attrs:{id:"formUri",type:"hidden"},domProps:{value:e.formUri},on:{input:function(t){t.target.composing||(e.formUri=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formUriView,expression:"formUriView"}],attrs:{id:"formUriView",type:"hidden"},domProps:{value:e.formUriView},on:{input:function(t){t.target.composing||(e.formUriView=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.pshow,expression:"pshow"}],attrs:{id:"pshow",type:"hidden"},domProps:{value:e.pshow},on:{input:function(t){t.target.composing||(e.pshow=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phid,expression:"phid"}],attrs:{id:"phid",type:"hidden"},domProps:{value:e.phid},on:{input:function(t){t.target.composing||(e.phid=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.contentPath,expression:"contentPath"}],attrs:{id:"contentPath",type:"hidden"},domProps:{value:e.contentPath},on:{input:function(t){t.target.composing||(e.contentPath=t.target.value)}}}),e._v(" "),a("table",{staticClass:"addtable",staticStyle:{"margin-top":"0px","margin-bottom":"10px"},attrs:{id:"formToolBarTable",width:"100%",border:"0",cellspacing:"0",cellpadding:"0"}},[e._m(0),e._v(" "),a("tr",{staticStyle:{borderTop:"1px solid #eee"}},[a("td",{staticClass:"td_name",staticStyle:{width:"20%"}},[e._v("处理意见")]),e._v(" "),a("td",{staticClass:"td_value",staticStyle:{width:"82%"},attrs:{colspan:"3"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.taskProcessDescValue,expression:"taskProcessDescValue"}],staticStyle:{width:"100%",height:"60px"},attrs:{name:"taskProcessDesc",id:"taskProcessDesc"},domProps:{value:e.taskProcessDescValue},on:{input:function(t){t.target.composing||(e.taskProcessDescValue=t.target.value)}}})])]),e._v(" "),a("tr",[a("td",{staticClass:"td_name",staticStyle:{width:"18%"}}),e._v(" "),a("td",{staticClass:"td_value drawablel",staticStyle:{width:"82%"},attrs:{colspan:"3",id:"processToolBar"}},[1===e.allcommshow?e._l(e.commandes,function(t,i){return a("button",{key:i,staticClass:"el-button el-button--primary el-button--small",attrs:{id:t.id,type:"primary"},on:{click:function(a){return e.btnHandel(t)}}},[e._v(e._s(t.name))])}):e._e(),e._v(" "),0===!e.allcommshow?e._l(e.commandes,function(t,i){return t.fixParam_BeforeShowJS?a("button",{key:i,staticClass:"el-button el-button--primary el-button--small",attrs:{id:t.id,type:"primary"},on:{click:function(a){return e.btnHandel(t)}}},[e._v(e._s(t.name))]):e._e()}):e._e()],2)])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",{attrs:{colspan:"4"}},[a("div",{staticClass:"panel-header panel-title",staticStyle:{"border-left":"0px","border-right":"0px","border-top":"0px","margin-top":"1px","margin-bottom":"1px"}},[e._v("流程审批")])])])}],r=a("093d"),o=r["a"],n=(a("1e82"),a("2877")),l=Object(n["a"])(o,i,s,!1,null,"6a664fdc",null);t["default"]=l.exports},5383:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addOrModifyLC"},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请单号"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyNo,callback:function(t){e.$set(e.fixedData,"applyNo",t)},expression:"fixedData.applyNo"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请部门"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantDepartment,callback:function(t){e.$set(e.fixedData,"applicantDepartment",t)},expression:"fixedData.applicantDepartment"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantName,callback:function(t){e.$set(e.fixedData,"applicantName",t)},expression:"fixedData.applicantName"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请日期"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyTime,callback:function(t){e.$set(e.fixedData,"applyTime",t)},expression:"fixedData.applyTime"}})],1)],1)])],1),e._v(" "),a("el-row",{staticClass:"vacationTime"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"固定资产分类"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){e.ruleForm.itemId=""}},model:{value:e.ruleForm.patentId,callback:function(t){e.$set(e.ruleForm,"patentId",t)},expression:"ruleForm.patentId"}},e._l(e.fixOptions,function(e){return a("el-option",{key:e.itemId,attrs:{label:e.itemName,value:e.itemId}})}),1)],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"采购种类"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.itemId,callback:function(t){e.$set(e.ruleForm,"itemId",t)},expression:"ruleForm.itemId"}},e._l(e.itemIdOptions,function(e){return a("el-option",{key:e.itemId,attrs:{label:e.itemName,value:e.itemId}})}),1)],1)],1)])],1),e._v(" "),a("el-row",{staticClass:"vacationTime"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"数量"}},[a("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.applyAmount,callback:function(t){e.$set(e.ruleForm,"applyAmount",t)},expression:"ruleForm.applyAmount"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"单价(元)"}},[a("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.unitPrice,callback:function(t){e.$set(e.ruleForm,"unitPrice",t)},expression:"ruleForm.unitPrice"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple waichureason"},[a("el-form-item",{attrs:{label:"采购要求说明"}},[a("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1)],1)])],1)],1)],1)},s=[],r=(a("ac6a"),{computed:{itemIdOptions:function(){var e=this,t=[];return this.fixOptions.forEach(function(a){a.itemId===e.ruleForm.patentId&&(t=a.itemList)}),t}},data:function(){return{fixOptions:[],fileToken:"",isAddOrMOdify:"",dialogFormVisible:!1,formLabelWidth:"120",ruleForm:{patentId:"",itemId:"",applyAmount:"",remark:"",unitPrice:""},fixedData:{},rules:{patentId:[{required:"true",message:"分类必填",trigger:"change"}],applyAmount:[{required:"true",message:"数量必填",trigger:"blur"}],itemId:[{required:"true",message:"种类必填",trigger:"change"}],applyName:[{required:"true",message:"请假标题",trigger:"change"}],reason:[{required:"true",message:"请假事由必填",trigger:"blur"}],vacationType:[{required:"true",message:"请假类型必填",trigger:"change"}]}}},methods:{showDialog:function(e,t){var a=this;if(this.dialogFormVisible=!this.dialogFormVisible,this.$store.dispatch("officeStock/selectItemList",{classify:1}).then(function(e){a.fixOptions=e.data}),"111"===e){for(var i in this.ruleForm)this.$set(this.ruleForm,i,"");this.fixedData=t,this.isAddOrMOdify=!0}else"112"===e&&(this.fixedData.applyNo=t[0].applyNo,this.fixedData.applicantDepartment=t[0].applicantDepartment,this.fixedData.applyTime=t[0].applyTime,this.fixedData.applicantName=t[0].applicantName,this.ruleForm.unitPrice=t[0].unitPrice,this.ruleForm.applyAmount=t[0].applyAmount,this.ruleForm.patentId=t[0].patentId,this.ruleForm.itemId=t[0].itemId,this.ruleForm.remark=t[0].remark,this.isAddOrMOdify=!1);this.$nextTick(function(){a.$refs.ruleForm.clearValidate()})},submitForm:function(e,t){var a=this,i={};i.applyNo=this.fixedData.applyNo,i.applyAmount=this.ruleForm.applyAmount,i.itemId=this.ruleForm.itemId,i.patentId=this.ruleForm.patentId,i.remark=this.ruleForm.remark,i.unitPrice=this.ruleForm.unitPrice,"save"===t||"update"===t?this.$store.dispatch(this.isAddOrMOdify?"caigoushenqing/purchaseAdd":"caigoushenqing/purchaseUpdate",i).then(function(e){}):"submit"===t&&this.$store.dispatch("caigoushenqing/purchaseConditionProcessSubmit",i).then(function(e){a.$message.success("提交成功!"),a.$emit("getTableList"),a.dialogFormVisible=!a.dialogFormVisible})}}}),o=r,n=a("2877"),l=Object(n["a"])(o,i,s,!1,null,null,null);t["default"]=l.exports},"9da4":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addOrModifyLC"},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"采购型号"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.ruleForm.model,callback:function(t){e.$set(e.ruleForm,"model",t)},expression:"ruleForm.model"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"单价(元)"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.ruleForm.unitPrice,callback:function(t){e.$set(e.ruleForm,"unitPrice",t)},expression:"ruleForm.unitPrice"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"总价(元)"}},[a("el-input",{attrs:{value:e.totalPrice,disabled:!0,size:"mini"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"详细参数描述"}},[a("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},model:{value:e.ruleForm.deparameter,callback:function(t){e.$set(e.ruleForm,"deparameter",t)},expression:"ruleForm.deparameter"}})],1)],1)])],1)],1)],1)},s=[],r=(a("ac6a"),a("c5f6"),{props:["applyAmount"],data:function(){var e=function(e,t,a){""===t?a(new Error("请输入领用数量")):/^[1-9]+[0-9]*$/.test(t)?a():a(new Error("领用数量不符合规则"))};return{isAddOrMOdify:"",stockTypeOptions:[],patentIdOptions:[],unitOptions:[],allItem:[],formLabelWidth:"120",ruleForm:{model:"",unitPrice:"",deparameter:""},fixedData:{},useId:"",rules:{useAmount:[{required:"true",validator:e,trigger:"blur"}],itemId:[{required:"true",message:"用品类别必填",trigger:"change"}],pItemId:[{required:"true",message:"库存类别必填",trigger:"change"}],remark:[{required:"false",trigger:"blur"},{min:0,max:5,message:"长度在 0 到 5 个字符",trigger:"blur"}],applyName:[{required:"true",message:"申请标题必填",trigger:"blur"}]}}},computed:{totalPrice:function(){return Number(this.applyAmount)*Number(this.ruleForm.unitPrice)},pItemId:function(){return this.ruleForm.pItemId},itemId:function(){return this.ruleForm.itemId},itemIdOptions:function(){var e=this,t=[];return this.allItem.forEach(function(a){0!==a.length&&a[0].patentId===e.ruleForm.pItemId&&a.forEach(function(e){var a={};a.itemName=e.itemName,a.itemId=Number(e.itemId),t.push(a)})}),t}},watch:{itemId:function(e,t){var a=this;this.allItem.forEach(function(t){t.forEach(function(t){if(t.itemId===e)return a.ruleForm.stockAmount=t.stockAmount})})},pItemId:function(e,t){this.ruleForm.itemId=""}},methods:{showDialog:function(e,t){var a=this;this.$store.dispatch("officeStock/selectItemList",{classify:0}).then(function(e){var t=[];a.allItem=[],e.data.forEach(function(e){var i={};i.pItemName=e.itemName,i.pItemId=Number(e.itemId),t.push(i),a.allItem.push(e.itemList)}),a.patentIdOptions=t}),"111"===e?(this.isAddOrMOdify=!0,this.ruleForm.stockAmount="",this.ruleForm.applyName="",this.ruleForm.itemId="",this.ruleForm.pItemId="",this.ruleForm.remark="",this.ruleForm.useAmount="",this.fixedData=t):"112"===e&&(this.isAddOrMOdify=!1,this.fixedData.applyNo=t.applyNo,this.fixedData.applicantDepartment=t.applicantDepartment,this.fixedData.applyTime=t.applyTime,this.fixedData.applicantName=t.applicantName,this.ruleForm.applyName=t.applyName,this.ruleForm.stockAmount=t.stockAmount,this.ruleForm.remark=t.remark,this.ruleForm.useAmount=t.useAmount,this.ruleForm.pItemId=Number(t.patentId),this.$nextTick(function(){a.ruleForm.itemId=Number(t.itemId)}),this.useId=t.useId),this.$nextTick(function(){a.$refs.ruleForm.clearValidate()})},submitForm:function(e,t){var a=this,i={};if(this.ruleForm.useAmount>this.ruleForm.stockAmount)return this.ruleForm.useAmount="",this.$message.warning("领用数不能大于库存数");this.isAddOrMOdify?(i.applyName=this.ruleForm.applyName,i.itemId=this.ruleForm.itemId,i.patentId=this.ruleForm.pItemId,i.remark=this.ruleForm.remark,i.useAmount=this.ruleForm.useAmount,i.applyNo=this.fixedData.applyNo):this.isAddOrMOdify||(i.model=this.ruleForm.model,i.unitPrice=this.ruleForm.unitPrice,i.deparameter=this.ruleForm.deparameter,i.totalPrice=this.totalPrice,i.applyNo=e.applyNo,i.purchaseId=e.purchaseId),"save"===t?this.$store.dispatch(this.isAddOrMOdify?"useController/officeUseAdd":"useController/officeUseUpdate",i).then(function(e){"0"===e.status&&(a.$message.success(a.isAddOrMOdify?"新增成功":"更新成功"),a.$emit("getTableList"),a.dialogFormVisible=!a.dialogFormVisible)}):"update"===t&&(console.log(i),this.$store.dispatch("LC/purchaseUpdateApproval",i).then(function(e){}))}}}),o=r,n=a("2877"),l=Object(n["a"])(o,i,s,!1,null,null,null);t["default"]=l.exports},ad37:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"LCdetail"},[a("span",{staticClass:"title"},[e._v("申请信息")]),e._v(" "),"view"===e.isShowDetail||"apply"===e.isShowDetail?a("div",[a("el-row",e._l(e.data,function(t,i,s){return a("el-col",{key:s,attrs:{span:12}},[a("div",{staticClass:"left"},[e._v(e._s(e._f("getTitle")(i))+" ：")]),e._v(" "),a("div",{staticClass:"right"},[e._v(e._s(t))])])}),1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"left"},[e._v("备注 ：")]),e._v(" "),a("div",{staticClass:"right"},[e._v(e._s(e.remark))])])],1)],1):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"true"===e.isShow,expression:"isShow === 'true'"}]},[a("span",{staticClass:"title"},[e._v("采购信息")]),e._v(" "),a("detail",{ref:"detail",attrs:{applyAmount:e.data.applyAmount}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"edit"===e.isShowDetail,expression:"isShowDetail === 'edit'"}]},[a("modify",{ref:"modify"})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"apply"===e.isShowDetail||"edit"===e.isShowDetail,expression:"isShowDetail === 'apply' || isShowDetail === 'edit'"}]},[a("span",{staticClass:"title"},[e._v("审批信息")]),e._v(" "),a("iframe",{staticClass:"shenhexinxi",attrs:{src:e.url}}),e._v(" "),a("process",{attrs:{contentPath:"/oa-web/",exValue:e.exValue},on:{action:e.action,update:e.update,updateDetail:e.updateDetail}})],1)])},s=[],r=a("4bdb"),o=a("5383"),n=a("9da4"),l={components:{process:r["default"],modify:o["default"],detail:n["default"]},filters:{getTitle:function(e){return"applicantDepartment"==e?"所在部门":"applicantName"==e?"姓名":"applyName"==e?"会议名称":"applyNo"==e?"表单号":"applyStatus"==e?"状态":"applyTime"==e?"申请日期":"createBy"==e?"创建者":"createDt"==e?"创建时间":"itemName"==e?"采购种类":"patentName"==e?"固定资产分类":"remark"==e?"备注":"unitPrice"==e?"单价":"applyAmount"==e?"数量":"useTypeName"==e?"类型":void 0}},data:function(){return{dialogFormVisible:!1,data:{},url:"",remark:"",exValue:{},isShowDetail:"",isShow:"",modifyData:{}}},created:function(){this.isShowDetail=this.$route.query.steps,this.isShow=this.$route.query.isShow},mounted:function(){var e=this;this.$store.dispatch("LC/purchaseDetail",this.$route.query.projectId).then(function(t){if("edit"===e.isShowDetail||"apply"===e.isShowDetail){var a=[];a.push(t.data),e.$refs.modify.showDialog("112",a)}e.data.applyNo=t.data.applyNo,e.data.applicantDepartment=t.data.applicantDepartment,e.data.applicantName=t.data.applicantName,e.data.applyTime=t.data.applyTime,e.data.patentName=t.data.patentName,e.data.itemName=t.data.itemName,e.data.unitPrice=t.data.unitPrice,e.data.applyAmount=t.data.applyAmount,e.modifyData.purchaseId=t.data.purchaseId,e.remark=t.data.remark,e.url="/sysweb/action/showListview.action?listViewId=fixflowProcessInfosListView&instId="+e.$route.query.instId+"&listViewFileName=fixflowProcessInfosListViewFirst&frameInd="+e.$route.query.frameInd})},methods:{showDialog:function(e){this.dialogFormVisible=!this.dialogFormVisible},action:function(e){},update:function(){this.$refs.modify.submitForm("","update")},updateDetail:function(){var e={};e.applyNo=this.data.applyNo,e.purchaseId=this.modifyData.purchaseId,this.$refs.detail.submitForm(e,"update")}}},u=l,d=a("2877"),c=Object(d["a"])(u,i,s,!1,null,null,null);t["default"]=c.exports}}]);