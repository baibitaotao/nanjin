(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31bc2278","chunk-32ec804c"],{1980:function(t,e,a){},"3a21":function(t,e,a){"use strict";var i=a("1980"),n=a.n(i);n.a},"63a7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("el-dialog",{attrs:{title:"详情页",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-row",t._l(t.data,function(e,i,n){return a("el-col",{key:n,attrs:{span:12}},[a("div",{staticClass:"left"},[t._v("\n            "+t._s(t._f("getTitle")(i))+"\n        ")]),t._v(" "),a("div",{staticClass:"right"},[t._v("\n            "+t._s(e)+"\n        ")])])}),1),t._v(" "),a("el-row",{staticStyle:{borderTop:"0"}},[a("el-col",{staticStyle:{height:"auto"},attrs:{span:12}},[a("div",{staticClass:"left"},[t._v("\n            附件\n        ")]),t._v(" "),a("div",{staticClass:"right"},[t.dialogFormVisible?a("up-load",{attrs:{hiddenUpload:!0},model:{value:t.fileToken,callback:function(e){t.fileToken=e},expression:"fileToken"}}):t._e()],1)])],1)],1)],1)},n=[],l=a("f8f6"),o={components:{upLoad:l["default"]},filters:{getTitle:function(t){return"applicantDepartment"==t?"所在的部门":"applicantName"==t?"姓名":"applyName"==t?"会议名称":"applyNo"==t?"表单号":"applyStatusName"==t?"状态":"applyTime"==t?"申请日期":"createDt"==t?"创建时间":"meetingAmount"==t?"会议人数":"meetingStartTime"==t?"会议开始时间":"meetingEndTime"==t?"会议结束时间":"meetingName"==t?"会议名称":"meetingPlace"==t?"会议地点":"meetingPerson"==t?"参会人员":"meetingPlace"==t?"会议地点":"personCount"==t?"会议人数":"remark"==t?"备注":void 0}},data:function(){return{dialogFormVisible:!1,data:{},fileToken:""}},methods:{showDialog:function(t){this.dialogFormVisible=!this.dialogFormVisible,this.data.applicantDepartment=t[0].applicantDepartment,this.data.applicantName=t[0].applicantName,this.data.applyNo=t[0].applyNo,this.data.applyStatusName=t[0].applyStatusName,this.data.applyTime=t[0].applyTime,this.data.createDt=t[0].createDt,this.data.meetingAmount=t[0].meetingAmount,this.data.meetingName=t[0].meetingName,this.data.meetingPlace=t[0].meetingPlace,this.data.meetingStartTime=t[0].meetingStartTime,this.data.meetingEndTime=t[0].meetingEndTime,this.data.personCount=t[0].personCount,this.data.remark=t[0].remark,this.fileToken=null==t[0].attachment?"":t[0].attachment}}},s=o,d=a("2877"),r=Object(d["a"])(s,i,n,!1,null,null,null);e["default"]=r.exports},f8f6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-box"},[t.hiddenUpload?a("div",{staticClass:"fileView"},t._l(t.fileList,function(e){return a("h3",{key:e.uid},[a("a",{attrs:{href:t.contextPath+"attachController/download?fileId="+e.uid,target:"_blank"}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.hiddenUpload?t._e():a("div",{staticClass:"el-upload-box"},[a("el-upload",{ref:"upload",attrs:{action:t.updatePath,"auto-upload":!0,name:t.upLoadName,data:t.extraData,"file-list":t.fileList,accept:t.acceptFormat,"on-success":t.handleSuccess,"on-exceed":t.handleExceed,"on-preview":t.handlePreview,"on-remove":t.handleRemove,"on-error":t.handleError,"on-change":t.handleChange,"before-remove":t.beforeRemove,"before-upload":t.beforeUpload}},[a("el-button",{class:{active:t.hiddenUpload},attrs:{size:t.size,type:"primary"}},[t._v(t._s(t.uploadTitle))]),t._v(" "),t.isShowTip?a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(t._s(t.TipTitle))]):t._e()],1)],1)])},n=[],l=(a("28a5"),a("7f7f"),a("c5f6"),a("bc3a")),o=a.n(l),s={name:"GuluUpload",model:{prop:"value",event:"update-value"},props:{value:[String],isShowTip:{type:Boolean,default:!1},hiddenUpload:{type:Boolean,default:!1},tipTitle:{type:String,default:"只能上传jpg / png文件， 且不超过500kb"},uploadTitle:{type:String,default:"点击上传"},limit:{type:Number,default:1},extraData:{type:Object,default:function(){return{bizTableName:"",bizTablePk:"",fieldName:""}}},size:{type:String,default:"small"},upLoadName:{type:String,default:"file"},contextPath:{type:String,default:"/oa-web/"},acceptFormat:{type:String,default:".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.rp,.vsd"}},data:function(){return{updatePath:this.contextPath+"attachController/upload?fieldToken="+this.value,fileList:[]}},created:function(){var t=this;setTimeout(function(){t.$nextTick(function(){t.updatePath=t.contextPath+"attachController/upload?fieldToken="+t.value,t.getFileData()})},500)},methods:{getFileData:function(){var t=this,e=this.value;""!=e&&null!=e||(e="-1"),o()({url:this.contextPath+"attachController/getFileList?fieldToken="+e,method:"get"}).then(function(e){"0"===e.data.status?e.data.data.fileList&&t.$nextTick(function(){t.fileList=e.data.data.fileList,0==t.fileList.length&&t.$emit("update-value","")}):t.$message({type:"info",duration:1e3,message:e.data.msg})})},beforeUpload:function(t){},handleChange:function(t,e){var a=t.name.substring(t.name.lastIndexOf(".")+1),i="rp"===a,n="vsd"===a;(i||n)&&(this.$message({message:"上传文件不能是 rp 、vsd 格式!",type:"warning"}),this.$refs.upload.clearFiles())},handleExceed:function(t,e){this.$message.warning("当前限制选择 ".concat(t.length," 个文件，本次选择了 ").concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},handleRemove:function(t,e){var a=this;o()({url:this.contextPath+"attachController/delete?fileId="+t.uid,method:"get"}).then(function(t){"0"===t.data.status&&0==e.length&&a.$emit("update-value","")})},handleError:function(t,e,a){},handleSuccess:function(t,e,a){var i=t.data.fieldToken;void 0==i&&(i=this.value);var n=this.updatePath.split("=");""!=n[1]&&""==i&&(i=n[1]),this.updatePath=this.contextPath+"attachController/upload?fieldToken="+i,this.$emit("update-value",i)},beforeRemove:function(t,e){return this.$confirm("确定移除 ".concat(t.name,"？"))},handlePreview:function(t){window.open(this.contextPath+"attachController/download?fileId="+t.uid)}}},d=s,r=(a("3a21"),a("2877")),u=Object(r["a"])(d,i,n,!1,null,"087933ee",null);e["default"]=u.exports}}]);