(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-173a63a0","chunk-6c1a8d3b","chunk-32ec804c","chunk-2d0d76d4"],{1980:function(e,t,a){},"1be5":function(e,t,a){},"3a21":function(e,t,a){"use strict";var i=a("1980"),n=a.n(i);n.a},7786:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"70"}}),e._v(" "),a("el-table-column",{attrs:{prop:"applyTime",label:"申请日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"vacationTypeName",label:"请假类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"vacationStartTime",label:"开始时间",width:"130"}}),e._v(" "),a("el-table-column",{attrs:{prop:"vacationEndTime",label:"结束时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"applyStatus",label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"vacationEndTime",label:"归来时间"}})],1),e._v(" "),a("div",[a("el-pagination",{attrs:{"current-page":e.queryParams.currPage,background:"",small:"","page-sizes":[10,20,30,40],layout:" prev, pager, next,total ,sizes ,jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},n=[],o={props:{queryParams:{type:Object,required:!0}},data:function(){return{tableData:[],totalPage:0}},mounted:function(){this.getTableList()},methods:{getTableList:function(){var e=this;this.$store.dispatch("applyVacation/applyVacationList",this.queryParams).then(function(t){e.tableData=t.data,e.totalPage=t.totalCount,e.$parent.allItem=e.totalPage})},handleSizeChange:function(e){this.queryParams.pageSize=e,this.getTableList()},handleCurrentChange:function(e){this.queryParams.currPage=e,this.getTableList()},handleSelectionChange:function(e){this.$emit("transferSelectItem",e)}}},l=o,r=a("2877"),s=Object(r["a"])(l,i,n,!1,null,null,null);t["default"]=s.exports},"873c":function(e,t,a){"use strict";var i=a("1be5"),n=a.n(i);n.a},b11e:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",[a("div",[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入关键字搜索"},model:{value:e.queryParams.keyWord,callback:function(t){e.$set(e.queryParams,"keyWord",t)},expression:"queryParams.keyWord"}}),e._v(" "),a("el-button",{attrs:{slot:"append",icon:"el-icon-search",size:"mini"},on:{click:e.search},slot:"append"},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{slot:"append",icon:"el-icon-delete",size:"mini"},on:{click:e.clear},slot:"append"},[e._v("清空")])],1),e._v(" "),a("a",{on:{click:e.conditionsOn}},[e._v(e._s(e.showCondition))]),e._v(" "),a("el-divider"),e._v(" "),a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowCondition,expression:"isShowCondition"}],staticClass:"conditions"},[a("div",[a("span",[e._v("申请日期")]),e._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择开始日期"},model:{value:e.queryParams.startTime,callback:function(t){e.$set(e.queryParams,"startTime",t)},expression:"queryParams.startTime"}}),e._v(" "),a("span",[e._v("至")]),e._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择结束日期"},model:{value:e.queryParams.endTime,callback:function(t){e.$set(e.queryParams,"endTime",t)},expression:"queryParams.endTime"}})],1),e._v(" "),a("el-divider"),e._v(" "),a("div",e._l(e.buttons,function(t,i){return a("el-button",{key:i,attrs:{disabled:e.setStatus(t.btnScope),type:"danger",plain:"",size:"mini"},on:{click:function(a){return e.option(t.code)}}},[e._v(e._s(t.name))])}),1)],1)])],1),e._v(" "),a("div",{staticClass:"bottom"},[a("span",[e._v("全部结果")]),e._v("  \n    "),a("span",[e._v("共"+e._s(e.allItem)+"个结果")]),e._v(" "),a("my-table",{ref:"myTable",attrs:{queryParams:e.queryParams},on:{transferSelectItem:e.transferSelectItem}})],1),e._v(" "),a("add-or-modify",{ref:"addOrModify",on:{getTableList:e.getTableList}})],1)},n=[],o=(a("ac6a"),a("7786")),l=a("f3aa"),r={name:"",watch:{queryParams:{handler:function(e,t){""!==e.endTime&&""!==e.startTime&&e.endTime<e.startTime&&(this.$message.warning("结束时间不能小于开始时间"),this.queryParams.endTime="")},deep:!0}},components:{myTable:o["default"],addOrModify:l["default"]},data:function(){return{seletedItem:[],queryParams:{keyWord:"",currPage:1,pageSize:10,startTime:"",endTime:""},fixedData:{applyNo:"",applicantDepartment:"",applyTime:"",applicantName:""},showConditionIcon:"el-icon-arrow-up",showCondition:"收起全部筛选项",isShowCondition:!0,allItem:0,buttons:[{code:"111",name:"请假申请",btnScope:"normal"},{code:"112",name:"编辑",btnScope:"single"},{code:"113",name:"删除",btnScope:"multi"},{code:"114",name:"销假",btnScope:"single"}]}},methods:{clear:function(){this.queryParams.keyWord="",this.queryParams.startTime="",this.queryParams.endTime=""},search:function(){this.getTableList()},conditionsOn:function(){"el-icon-arrow-up"===this.showConditionIcon?(this.showConditionIcon="el-icon-arrow-down",this.showCondition="展开全部筛选项",this.isShowCondition=!1):"el-icon-arrow-down"===this.showConditionIcon&&(this.showConditionIcon="el-icon-arrow-up",this.showCondition="收起全部筛选项",this.isShowCondition=!0)},option:function(e){var t=this;if("111"==e){var a={dealMark:"add"};this.$store.dispatch("applyVacation/applyVacationToEdit",a).then(function(a){t.fixedData.applyNo=a.data.applyNo,t.fixedData.applicantDepartment=a.data.applicantDepartment,t.fixedData.applyTime=a.data.applyTime,t.fixedData.applicantName=a.data.applicantName,t.$refs.addOrModify.showDialog(e,t.fixedData)})}else if("112"==e)this.$refs.addOrModify.showDialog(e,this.seletedItem);else if("113"==e)this.$confirm("是否确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){console.log(t.seletedItem);var e=[];t.seletedItem.forEach(function(t){e.push(t.applyNo)}),t.$store.dispatch("applyVacation/applyVacationDelete",e.join(",")).then(function(e){"0"==e.status&&(t.$message.success("删除成功"),t.getTableList())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})});else if("114"==e){if("2"==this.seletedItem[0].vacationStatus)return this.$message.warning("已销假");this.$confirm("是否确定销假?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={type:"VACATION",applyNo:t.seletedItem[0].applyNo};t.$store.dispatch("applyVacation/reportBackReportBack",e).then(function(e){"0"==e.status&&(t.$message.success("销假成功"),t.getTableList())})}).catch(function(){t.$message({type:"info",message:"已取消"})})}},getTableList:function(){this.$refs.myTable.getTableList()},transferSelectItem:function(e){this.seletedItem=e},setStatus:function(e){return"single"==e?1!=this.seletedItem.length:"multi"==e?!(this.seletedItem.length>=1):"normal"!=e}}},s=r,c=a("2877"),d=Object(c["a"])(s,i,n,!1,null,null,null);t["default"]=d.exports},f3aa:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addOrModify"},[a("el-dialog",{attrs:{title:"库存管理新增",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请单号"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyNo,callback:function(t){e.$set(e.fixedData,"applyNo",t)},expression:"fixedData.applyNo"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请部门"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantDepartment,callback:function(t){e.$set(e.fixedData,"applicantDepartment",t)},expression:"fixedData.applicantDepartment"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantName,callback:function(t){e.$set(e.fixedData,"applicantName",t)},expression:"fixedData.applicantName"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请日期"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyTime,callback:function(t){e.$set(e.fixedData,"applyTime",t)},expression:"fixedData.applyTime"}})],1)],1)])],1),e._v(" "),a("el-row",{staticClass:"vacationTime"},[a("el-col",{staticStyle:{height:"50px"},attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"请假时间",prop:"vacationTime"}},[a("el-date-picker",{staticStyle:{marginTop:"10px",marginLeft:"8px"},attrs:{type:"datetimerange","range-separator":"至",format:"yyyy-MM-dd HH:mm","value-format":"timestamp","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.ruleForm.vacationTime,callback:function(t){e.$set(e.ruleForm,"vacationTime",t)},expression:"ruleForm.vacationTime"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"请假类型",prop:"vacationType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.vacationType,callback:function(t){e.$set(e.ruleForm,"vacationType",t)},expression:"ruleForm.vacationType"}},e._l(e.vacationType,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"请假时长(小时)"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.vacationLength,callback:function(t){e.vacationLength=t},expression:"vacationLength"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple waichureason"},[a("el-form-item",{attrs:{label:"请假事由",prop:"reason"}},[a("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},model:{value:e.ruleForm.reason,callback:function(t){e.$set(e.ruleForm,"reason",t)},expression:"ruleForm.reason"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple fujian"},[a("el-form-item",{attrs:{label:"附件"}},[e.dialogFormVisible?a("upload",{attrs:{contextPath:"/oa-web/",uploadTitle:"点击上传附件"},model:{value:e.ruleForm.attachment,callback:function(t){e.$set(e.ruleForm,"attachment",t)},expression:"ruleForm.attachment"}}):e._e()],1)],1)])],1),e._v(" "),a("div",{staticClass:"submit"},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)],1)},n=[],o=(a("c5f6"),a("ac6a"),a("f8f6")),l={components:{upLoad:o["default"]},computed:{vacationLength:function(){return this.ruleForm.vacationTime?0==this.ruleForm.vacationTime.length?0:((this.ruleForm.vacationTime[1]-this.ruleForm.vacationTime[0])/1e3/60/60).toFixed(1):0}},data:function(){return{fileToken:"",isAddOrMOdify:"",dialogFormVisible:!1,formLabelWidth:"120",vacationType:[],ruleForm:{applyName:"",attachment:"",vacationTime:[],reason:"",vacationType:""},fixedData:{},rules:{vacationTime:[{required:"true",message:"请假时间必填",trigger:"change"}],applyName:[{required:"true",message:"请假标题",trigger:"change"}],reason:[{required:"true",message:"请假事由必填",trigger:"blur"}],vacationType:[{required:"true",message:"请假类型必填",trigger:"change"}]}}},methods:{showDialog:function(e,t){var a=this;this.dialogFormVisible=!this.dialogFormVisible,this.$store.dispatch("applyVacation/commonTCodeGetCodeByParentId").then(function(e){if("0"!==e.status)return a.$message.error("请假类型接口请求出错");var t=[];e.data.options.forEach(function(e){var a={};a.value=Number(e.value),a.label=e.label,t.push(a)}),a.vacationType=t}),"111"==e?this.isAddOrMOdify=!0:"112"==e&&(this.isAddOrMOdify=!1),"111"==e?(this.ruleForm.vacationType="",this.ruleForm.vacationLength="",this.ruleForm.vacationTime=[],this.ruleForm.attachment="",this.ruleForm.reason="",this.fixedData=t):"112"==e&&(this.ruleForm.vacationTime=[],this.fixedData.applyNo=t[0].applyNo,this.fixedData.applicantDepartment=t[0].applicantDepartment,this.fixedData.applyTime=t[0].applyTime,this.fixedData.applicantName=t[0].applicantName,this.ruleForm.attachment=t[0].attachment||"",this.ruleForm.vacationTime.push(t[0].vacationStartTimeLong+""),this.ruleForm.vacationTime.push(t[0].vacationEndTimeLong+""),this.ruleForm.reason=t[0].reason,this.ruleForm.vacationType=Number(t[0].vacationType),this.ruleForm.applyNo=t[0].applyNo),this.$nextTick(function(){a.$refs.ruleForm.clearValidate()})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var a={};t.isAddOrMOdify?(a.applyNo=t.fixedData.applyNo,a.attachment=t.ruleForm.attachment,a.reason=t.ruleForm.reason,a.vacationType=t.ruleForm.vacationType,a.vacationLength=t.vacationLength,a.vacationEndTime=t.ruleForm.vacationTime[1],a.vacationStartTime=t.ruleForm.vacationTime[0]):t.isAddOrMOdify||(a.applyNo=t.ruleForm.applyNo,a.attachment=t.ruleForm.attachment,a.vacationLength=t.vacationLength,a.reason=t.ruleForm.reason,a.outEndTime=t.ruleForm.vacationTime[1],a.outStartTime=t.ruleForm.vacationTime[0]),t.$store.dispatch(t.isAddOrMOdify?"applyVacation/applyVacationAdd":"applyVacation/applyVacationUpdate",a).then(function(e){"0"==e.status&&(t.$message.success(t.isAddOrMOdify?"新增成功":"更新成功"),t.$emit("getTableList"),t.dialogFormVisible=!t.dialogFormVisible)})})}}},r=l,s=(a("873c"),a("2877")),c=Object(s["a"])(r,i,n,!1,null,null,null);t["default"]=c.exports},f8f6:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"upload-box"},[e.hiddenUpload?a("div",{staticClass:"fileView"},e._l(e.fileList,function(t){return a("h3",{key:t.uid},[a("a",{attrs:{href:e.contextPath+"attachController/download?fileId="+t.uid,target:"_blank"}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.hiddenUpload?e._e():a("div",{staticClass:"el-upload-box"},[a("el-upload",{ref:"upload",attrs:{action:e.updatePath,"auto-upload":!0,name:e.upLoadName,data:e.extraData,"file-list":e.fileList,accept:e.acceptFormat,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-error":e.handleError,"on-change":e.handleChange,"before-remove":e.beforeRemove,"before-upload":e.beforeUpload}},[a("el-button",{class:{active:e.hiddenUpload},attrs:{size:e.size,type:"primary"}},[e._v(e._s(e.uploadTitle))]),e._v(" "),e.isShowTip?a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.TipTitle))]):e._e()],1)],1)])},n=[],o=(a("28a5"),a("7f7f"),a("c5f6"),a("bc3a")),l=a.n(o),r={name:"GuluUpload",model:{prop:"value",event:"update-value"},props:{value:[String],isShowTip:{type:Boolean,default:!1},hiddenUpload:{type:Boolean,default:!1},tipTitle:{type:String,default:"只能上传jpg / png文件， 且不超过500kb"},uploadTitle:{type:String,default:"点击上传"},limit:{type:Number,default:1},extraData:{type:Object,default:function(){return{bizTableName:"",bizTablePk:"",fieldName:""}}},size:{type:String,default:"small"},upLoadName:{type:String,default:"file"},contextPath:{type:String,default:"/oa-web/"},acceptFormat:{type:String,default:".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.rp,.vsd"}},data:function(){return{updatePath:this.contextPath+"attachController/upload?fieldToken="+this.value,fileList:[]}},created:function(){var e=this;setTimeout(function(){e.$nextTick(function(){e.updatePath=e.contextPath+"attachController/upload?fieldToken="+e.value,e.getFileData()})},500)},methods:{getFileData:function(){var e=this,t=this.value;""!=t&&null!=t||(t="-1"),l()({url:this.contextPath+"attachController/getFileList?fieldToken="+t,method:"get"}).then(function(t){"0"===t.data.status?t.data.data.fileList&&e.$nextTick(function(){e.fileList=t.data.data.fileList,0==e.fileList.length&&e.$emit("update-value","")}):e.$message({type:"info",duration:1e3,message:t.data.msg})})},beforeUpload:function(e){},handleChange:function(e,t){var a=e.name.substring(e.name.lastIndexOf(".")+1),i="rp"===a,n="vsd"===a;(i||n)&&(this.$message({message:"上传文件不能是 rp 、vsd 格式!",type:"warning"}),this.$refs.upload.clearFiles())},handleExceed:function(e,t){this.$message.warning("当前限制选择 ".concat(e.length," 个文件，本次选择了 ").concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},handleRemove:function(e,t){var a=this;l()({url:this.contextPath+"attachController/delete?fileId="+e.uid,method:"get"}).then(function(e){"0"===e.data.status&&0==t.length&&a.$emit("update-value","")})},handleError:function(e,t,a){},handleSuccess:function(e,t,a){var i=e.data.fieldToken;void 0==i&&(i=this.value);var n=this.updatePath.split("=");""!=n[1]&&""==i&&(i=n[1]),this.updatePath=this.contextPath+"attachController/upload?fieldToken="+i,this.$emit("update-value",i)},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},handlePreview:function(e){window.open(this.contextPath+"attachController/download?fileId="+e.uid)}}},s=r,c=(a("3a21"),a("2877")),d=Object(c["a"])(s,i,n,!1,null,"087933ee",null);t["default"]=d.exports}}]);