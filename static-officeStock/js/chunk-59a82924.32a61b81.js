(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59a82924"],{"0e55":function(e,t,r){"use strict";var i=r("4b87"),s=r.n(i);s.a},"377f":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addOrModify"},[r("el-dialog",{attrs:{title:"外出申请新增",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-dialog",{attrs:{width:"80%",title:"选择人员",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[e.innerVisible?r("select-person",{attrs:{contextPath:"/oa-web"},on:{"update-value":e.getselectItemMP},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}):e._e()],1),e._v(" "),r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{label:"申请单号"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyNo,callback:function(t){e.$set(e.fixedData,"applyNo",t)},expression:"fixedData.applyNo"}})],1)],1)]),e._v(" "),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content bg-purple-light"},[r("el-form-item",{attrs:{label:"申请部门"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantDepartment,callback:function(t){e.$set(e.fixedData,"applicantDepartment",t)},expression:"fixedData.applicantDepartment"}})],1)],1)])],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{label:"申请人"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantName,callback:function(t){e.$set(e.fixedData,"applicantName",t)},expression:"fixedData.applicantName"}})],1)],1)]),e._v(" "),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content bg-purple-light"},[r("el-form-item",{attrs:{label:"申请日期"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyTime,callback:function(t){e.$set(e.fixedData,"applyTime",t)},expression:"fixedData.applyTime"}})],1)],1)])],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{label:"会议名称",prop:"applyName"}},[r("el-input",{model:{value:e.ruleForm.applyName,callback:function(t){e.$set(e.ruleForm,"applyName",t)},expression:"ruleForm.applyName"}})],1)],1)])],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{label:"会议类型"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.meetingSummaryType,callback:function(t){e.$set(e.ruleForm,"meetingSummaryType",t)},expression:"ruleForm.meetingSummaryType"}},e._l(e.meetingOptions,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)]),e._v(" "),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{label:"签发日期"}},[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.ruleForm.issuingDate,callback:function(t){e.$set(e.ruleForm,"issuingDate",t)},expression:"ruleForm.issuingDate"}})],1)],1)])],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{label:"会议时间"}},[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.ruleForm.meetingTime,callback:function(t){e.$set(e.ruleForm,"meetingTime",t)},expression:"ruleForm.meetingTime"}})],1)],1)]),e._v(" "),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content bg-purple"},[r("el-form-item",{attrs:{label:"会议地点"}},[r("el-input",{model:{value:e.ruleForm.meetingPlace,callback:function(t){e.$set(e.ruleForm,"meetingPlace",t)},expression:"ruleForm.meetingPlace"}})],1)],1)])],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"grid-content bg-purple waichureason"},[r("el-form-item",{attrs:{label:"参会人员",prop:"meetingPerson"}},[r("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},on:{focus:function(t){return e.selectPerson("meetingPerson")}},model:{value:e.ruleForm.meetingPerson,callback:function(t){e.$set(e.ruleForm,"meetingPerson",t)},expression:"ruleForm.meetingPerson"}})],1)],1)])],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"grid-content bg-purple waichureason"},[r("el-form-item",{attrs:{label:"列席人员"}},[r("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},on:{focus:function(t){return e.selectPerson("observerPerson")}},model:{value:e.ruleForm.observerPerson,callback:function(t){e.$set(e.ruleForm,"observerPerson",t)},expression:"ruleForm.observerPerson"}})],1)],1)])],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"grid-content bg-purple waichureason"},[r("el-form-item",{attrs:{label:"记录人员",prop:"recordPerson"}},[r("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},on:{focus:function(t){return e.selectPerson("recordPerson")}},model:{value:e.ruleForm.recordPerson,callback:function(t){e.$set(e.ruleForm,"recordPerson",t)},expression:"ruleForm.recordPerson"}})],1)],1)])],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"grid-content bg-purple waichureason"},[r("el-form-item",{attrs:{label:"主持人"}},[r("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},on:{focus:function(t){return e.selectPerson("meetingHost")}},model:{value:e.ruleForm.meetingHost,callback:function(t){e.$set(e.ruleForm,"meetingHost",t)},expression:"ruleForm.meetingHost"}})],1)],1)])],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"grid-content bg-purple waichureason"},[r("el-form-item",{attrs:{label:"会议议题",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},model:{value:e.ruleForm.meetingContent,callback:function(t){e.$set(e.ruleForm,"meetingContent",t)},expression:"ruleForm.meetingContent"}})],1)],1)])],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"grid-content bg-purple fujian"},[r("el-form-item",{attrs:{label:"附件"}},[e.dialogFormVisible?r("up-load",{attrs:{contextPath:"/oa-web/",uploadTitle:"点击上传附件"},model:{value:e.ruleForm.attachment,callback:function(t){e.$set(e.ruleForm,"attachment",t)},expression:"ruleForm.attachment"}}):e._e()],1)],1)])],1),e._v(" "),r("div",{staticClass:"submit"},[r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)],1)},s=[],o=(r("c5f6"),r("ac6a"),r("f8f6")),n=r("033f"),a=(r("1c46"),{components:{upLoad:o["default"],selectPerson:n["default"]},watch:{userId:function(e,t){"observerPerson"==this.WhichClick?this.formId.observerPerson=e:"recordPerson"==this.WhichClick?this.formId.recordPerson=e:"meetingHost"==this.WhichClick?this.formId.meetingHost=e:"meetingPerson"==this.WhichClick&&(this.formId.meetingPerson=e)}},data:function(){return{userId:"",meetingOptions:[],fileToken:"",isAddOrMOdify:"",dialogFormVisible:!1,innerVisible:!1,formLabelWidth:"120",vacationType:[],WhichClick:"",formId:{observerPerson:"",recordPerson:"",meetingHost:"",meetingPerson:""},ruleForm:{applyName:"",meetingContent:"",meetingPlace:"",meetingSummaryType:"",meetingTime:"",issuingDate:"",meetingPerson:"",meetingHost:"",observerPerson:"",recordPerson:"",attachment:""},fixedData:{},rules:{recordPerson:[{required:"true",message:"记录人员必填",trigger:"change"}],applyName:[{required:"true",message:"会议名称必填",trigger:"blur"}],meetingPerson:[{required:"true",message:"参会人员必填",trigger:"change"}],meetingContent:[{required:"true",message:"会议议题必填",trigger:"change"}]}}},methods:{getselectItemMP:function(e,t){"observerPerson"==this.WhichClick?this.ruleForm.observerPerson=t.join(","):"recordPerson"==this.WhichClick?this.ruleForm.recordPerson=t.join(","):"meetingHost"==this.WhichClick?this.ruleForm.meetingHost=t.join(","):"meetingPerson"==this.WhichClick&&(this.ruleForm.meetingPerson=t.join(",")),this.innerVisible=!this.innerVisible},selectPerson:function(e){this.innerVisible=!this.innerVisible,this.WhichClick=e,this.isAddOrMOdify&&(this.userId=""),this.isAddOrMOdify||("observerPerson"==this.WhichClick?this.userId=this.formId.observerPerson||"":"recordPerson"==this.WhichClick?this.userId=this.formId.recordPerson||"":"meetingHost"==this.WhichClick?this.userId=this.formId.meetingHost||"":"meetingPerson"==this.WhichClick&&(this.userId=this.formId.meetingPerson||""))},showDialog:function(e,t){var r=this;this.dialogFormVisible=!this.dialogFormVisible,this.$store.dispatch("meetingSummary/commonTCodeGetCodeByParentId").then(function(e){"0"!==e.status&&r.$message.error("接口请求出错"),r.meetingOptions=[],e.data.options.forEach(function(e){var t={};t.label=e.label,t.value=Number(e.value),r.meetingOptions.push(t)})}),"111"==e?this.isAddOrMOdify=!0:"112"==e&&(this.isAddOrMOdify=!1),"111"==e?(this.ruleForm.applyName="",this.userId="",this.ruleForm.meetingContent="",this.ruleForm.meetingPlace="",this.ruleForm.meetingSummaryType="",this.ruleForm.meetingTime="",this.ruleForm.issuingDate="",this.ruleForm.observerPerson="",this.ruleForm.recordPerson="",this.ruleForm.meetingHost="",this.ruleForm.meetingPerson="",this.ruleForm.attachment="",this.formId.observerPerson="",this.formId.recordPerson="",this.formId.meetingHost="",this.formId.meetingPerson="",this.fixedData=t):"112"==e&&(this.fixedData.applyNo=t[0].applyNo,this.fixedData.applicantDepartment=t[0].applicantDepartment,this.fixedData.applyTime=t[0].applyTime,this.fixedData.applicantName=t[0].applicantName,this.ruleForm.applyName=t[0].applyName,this.ruleForm.id=t[0].id,this.ruleForm.meetingSummaryType=t[0].meetingSummaryType,this.ruleForm.meetingPlace=t[0].meetingPlace,this.ruleForm.meetingTime=t[0].meetingTime,this.ruleForm.issuingDate=t[0].issuingDate,this.ruleForm.meetingContent=t[0].meetingContent,this.ruleForm.meetingPerson=t[0].meetingPersonName,this.ruleForm.meetingHost=t[0].meetingHostName,this.ruleForm.observerPerson=t[0].observerPersonName,this.ruleForm.recordPerson=t[0].recordPersonName,this.ruleForm.attachment=t[0].attachment||"",this.formId.meetingPerson=t[0].meetingPerson,this.formId.meetingHost=t[0].meetingHost,this.formId.observerPerson=t[0].observerPerson,this.formId.recordPerson=t[0].recordPerson),this.$nextTick(function(){r.$refs.ruleForm.clearValidate()})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var r={};t.isAddOrMOdify?(r.applyName=t.ruleForm.applyName,r.applyNo=t.fixedData.applyNo,r.meetingContent=t.ruleForm.meetingContent,r.meetingPlace=t.ruleForm.meetingPlace,r.meetingSummaryType=t.ruleForm.meetingSummaryType,r.meetingTime=t.ruleForm.meetingTime,r.issuingDate=t.ruleForm.issuingDate,r.observerPerson=t.formId.observerPerson,r.recordPerson=t.formId.recordPerson,r.meetingHost=t.formId.meetingHost,r.meetingPerson=t.formId.meetingPerson,r.attachment=t.ruleForm.attachment):t.isAddOrMOdify||(r.applyName=t.ruleForm.applyName,r.applyNo=t.fixedData.applyNo,r.id=t.ruleForm.id,r.meetingContent=t.ruleForm.meetingContent,r.meetingPlace=t.ruleForm.meetingPlace,r.meetingSummaryType=t.ruleForm.meetingSummaryType,r.meetingTime=t.ruleForm.meetingTime,r.issuingDate=t.ruleForm.issuingDate,r.observerPerson=t.formId.observerPerson,r.recordPerson=t.formId.recordPerson,r.meetingHost=t.formId.meetingHost,r.meetingPerson=t.formId.meetingPerson,r.attachment=t.ruleForm.attachment),t.$store.dispatch(t.isAddOrMOdify?"meetingSummary/meetingSummaryAdd":"meetingSummary/meetingSummaryUpdate",r).then(function(e){"0"==e.status&&(t.$message.success(t.isAddOrMOdify?"新增成功":"更新成功"),t.$emit("getTableList"),t.dialogFormVisible=!t.dialogFormVisible)})})}}}),l=a,m=(r("0e55"),r("2877")),u=Object(m["a"])(l,i,s,!1,null,null,null);t["default"]=u.exports},"4b87":function(e,t,r){}}]);