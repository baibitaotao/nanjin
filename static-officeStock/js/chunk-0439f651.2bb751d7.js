(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0439f651","chunk-278324e8","chunk-32ec804c"],{"033f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"multiple-selection-component"},[i("div",{staticClass:"transfer-contanier clearfix"},[i("div",{staticClass:"inner clearfix"},[i("div",{staticClass:"tree-left"},[i("div",{staticClass:"button-box"},[i("el-input",{attrs:{size:"mini",clearable:"",placeholder:"输入姓名进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText="string"===typeof t?t.trim():t},expression:"filterText"}}),e._v(" "),i("el-button",{staticStyle:{"margin-left":"5px"},attrs:{icon:"el-icon-search",size:"mini"}},[e._v("查询")])],1),e._v(" "),i("div",{staticClass:"tree-box"},[i("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{"empty-text":"暂无数据","show-checkbox":"","check-on-click-node":!0,"default-expand-all":!0,"expand-on-click-node":!1,props:e.defaultProps,data:e.treeData,"filter-node-method":e.filterNode,"node-key":"userId"},on:{"check-change":e.checkChange}})],1)]),e._v(" "),i("div",{staticClass:"box-center"},[i("div",{staticClass:"list-member"},[e._m(0),e._v(" "),i("ul",e._l(e.defaultMember,function(t,a){return i("li",{key:t.userId,ref:"memberLi",refInFor:!0,class:{"li-focus":e.chooseNum==a},on:{click:function(i){return e.memberSelect(a,t.userId,t.userName)}}},[i("i",{staticClass:"select el-icon-check"}),e._v(" "),i("span",{staticStyle:{"padding-left":"17px"}},[e._v(e._s(t.userName))])])}),0)])]),e._v(" "),i("div",{staticClass:"list-right"},[i("div",{staticClass:"select"},[i("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",clearable:"",size:"mini",placeholder:"请选择"},on:{change:e.handleChange},model:{value:e.valueSelect,callback:function(t){e.valueSelect=t},expression:"valueSelect"}},e._l(e.options,function(t){return i("el-option",{key:t.groupId,attrs:{label:t.groupName,value:t.groupId}},[i("span",{staticStyle:{float:"left"}},[e._v(e._s(t.groupName))]),e._v(" "),i("span",{staticClass:"icon-nav",staticStyle:{float:"right",color:"#8492a6","font-size":"12px",display:"none"}},[i("i",{on:{click:function(a){return a.stopPropagation(),e.defaultSetting(t.groupId)}}},[e._v("默认")]),e._v(" "),i("i",{staticStyle:{"margin-left":"10px"},on:{click:function(a){return a.stopPropagation(),e.deleteGroupMember(t.groupId)}}},[e._v("删除")])])])}),1)],1),e._v(" "),i("div",{staticClass:"choose-member-content"},[i("div",{staticClass:"tag-box"},e._l(e.chooseMember,function(t){return i("el-tag",{key:t.userId,staticStyle:{"margin-right":"10px"},attrs:{closable:"",size:"mini",type:"success"},on:{close:function(a){return e.tagClose(t.userId)}}},[e._v(e._s(t.name))])}),1)]),e._v(" "),i("div",{staticClass:"button-nav"},[i("el-button",{staticStyle:{"background-color":"#b50005"},attrs:{type:"primary",size:"mini",icon:"el-icon-delete"},on:{click:e.all_delete}},[e._v("全部删除")]),e._v(" "),i("el-button",{staticStyle:{"background-color":"#b50005"},attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(t){e.innerVisible=!0}}},[e._v("保存分组")])],1)])]),e._v(" "),i("el-dialog",{attrs:{title:"自定义分组","append-to-body":"",visible:e.innerVisible},on:{"update:visible":function(t){e.innerVisible=t}}},[i("div",{staticClass:"edit-box"},[i("el-input",{attrs:{placeholder:"请输入关键字搜索",clearable:""},model:{value:e.editInput,callback:function(t){e.editInput="string"===typeof t?t.trim():t},expression:"editInput"}}),e._v(" "),i("div",{staticClass:"setting"},[i("p",[e._v("\n            保存为默认分组\n            "),i("el-switch",{attrs:{"active-color":"#b50005","inactive-color":"#ccc"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}})],1),e._v(" "),i("el-button",{staticStyle:{"margin-left":"10px","background-color":"#b50005"},attrs:{type:"primary",size:"mini",icon:"el-icon-success"},on:{click:e.save_group_name}},[e._v("确认")])],1)],1)]),e._v(" "),i("div",{staticClass:"button-bottom"},[i("div",{staticClass:"button",on:{click:e.handleSave}},[i("img",{attrs:{src:a("fbe1"),alt:""}}),e._v("保存\n      ")])])],1)])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h2",[i("img",{attrs:{src:a("c4f4"),alt:""}}),e._v("常选人员\n          ")])}],r=(a("ac6a"),a("7f7f"),a("28a5"),a("c5f6"),a("bc3a")),o=a.n(r),l={name:"MultipleSelection",model:{prop:"value",event:"update-value"},props:{value:{type:String,default:""},contextPath:{type:String,default:"/oa-web/"},userId:[String,Number],selectType:{type:String,default:"role"},bid:{type:String,default:"75"}},data:function(){return{switchValue:!1,editInput:"",innerVisible:!1,dialogTableVisible:!1,chooseNum:null,filterText:"",treeData:[],defaultProps:{children:"children",label:"name"},defaultMember:[],chooseMember:[],options:[],valueSelect:"",groupsList:[],sChooseMemberArr:[],valueDefault:[],url_project_id:"",loading:!1}},computed:{myValue:function(){return""!==this.value?this.value.split(","):[]}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},created:function(){this.url_project_id=this.bid,this.initDefaultData(),this.getTreeList()},mounted:function(){this.$nextTick(function(){var e=[];if(""!==this.value){e=this.value.split(","),this.$refs.tree.setCheckedKeys(e);for(var t=0;t<this.defaultMember.length;t++)for(var a=0;a<e.length;a++)this.defaultMember[t].id==e[a]&&(this.$refs.memberLi[t].className="li-focus");this.chooseMember=this.$refs.tree.getCheckedNodes();for(var i=0;i<this.chooseMember.length;i++)void 0!==this.chooseMember[i].children&&this.chooseMember.splice(i,1)}})},methods:{getTreeList:function(){var e=this;o()({url:this.contextPath+"/tree/getTreeList",method:"get"}).then(function(t){var a=t.data.data.model;e.treeData.push(a),e.$nextTick(function(){e.valueDefault=this.value.split(","),e.$refs.tree.setCheckedKeys(this.valueDefault)})})},initDefaultData:function(){var e=this;o()({url:this.contextPath+"/selectUser/init",method:"get"}).then(function(t){var a=t.data.data.groups;if(e.groupsList=t.data.data.groups,e.defaultMember=t.data.data.users,a.length>0){e.options=[];for(var i=0;i<a.length;i++){var s={groupName:"",groupId:""};s.groupName=a[i].groupName,s.groupId=a[i].groupId,e.options.push(s)}}})},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},memberSelect:function(e,t,a){if(this.$refs.memberLi[e].className.length<=0){this.$refs.memberLi[e].className="li-focus";var i={userId:"",name:""};i.userId=t,i.name=a,this.sChooseMemberArr.push(i),this.$refs.tree.setCheckedNodes(this.sChooseMemberArr)}else{this.$refs.memberLi[e].className="";for(var s=0;s<this.chooseMember.length;s++)this.chooseMember[s].userId==t&&this.chooseMember.splice(s,1);this.$refs.tree.setCheckedNodes(this.chooseMember)}},checkChange:function(e,t){this.chooseMember.length;if(t){if("PERSON"===e.type){for(var a=0;a<this.defaultMember.length;a++)this.defaultMember[a].userId==e.userId&&(this.$refs.memberLi[a].className="li-focus");var i={userId:"",name:""};i.userId=e.userId,i.name=e.name,this.sChooseMemberArr.push(i);var s={};this.chooseMember=this.sChooseMemberArr.reduce(function(e,t){return!s[t.userId]&&(s[t.userId]=e.push(t)),e},[])}}else{for(var r=0;r<this.defaultMember.length;r++)this.defaultMember[r].userId==e.userId&&(this.$refs.memberLi[r].className="");for(var o=0;o<this.chooseMember.length;o++)this.chooseMember[o].userId==e.userId&&this.chooseMember.splice(o,1)}this.sChooseMemberArr=this.chooseMember},defaultHandleArr:function(e){this.$refs.tree.setCheckedNodes(e)},handleChange:function(){for(var e=this.groupsList.length,t=[],a=0;a<e;a++)this.groupsList[a].groupId===this.valueSelect&&(t=this.groupsList[a].groupMembers);var i=t.length;if(i>0)for(var s=0;s<i;s++){var r={userId:"",name:""};r.userId=t[s].memberId,r.name=t[s].memberName,this.sChooseMemberArr.push(r)}var o={};this.chooseMember=this.sChooseMemberArr.reduce(function(e,t){return!o[t.userId]&&(o[t.userId]=e.push(t)),e},[]),this.$refs.tree.setCheckedNodes(this.chooseMember)},defaultSetting:function(e){var t=this;o()({url:this.contextPath+"/selectUser/setDefaultGroup?groupId=".concat(e),method:"get"}).then(function(e){t.$message({message:e.data.msg,type:"success"}),t.initDefaultData()})},deleteGroupMember:function(e){var t=this;o()({url:this.contextPath+"/selectUser/deleteGroup?groupId=".concat(e),method:"get"}).then(function(e){t.$message({message:e.data.msg,type:"success"}),t.initDefaultData();var a=t.options.length;1==a&&(t.options=[])})},tagClose:function(e){for(var t=0;t<this.chooseMember.length;t++)this.chooseMember[t].userId==e&&this.chooseMember.splice(t,1);this.$refs.tree.setCheckedNodes(this.chooseMember)},defaultDelete:function(e){for(var t=0;t<this.chooseMember.length;t++)this.chooseMember[t].userId==e&&this.chooseMember.splice(t,1);this.$refs.tree.setCheckedNodes(this.chooseMember)},all_delete:function(){this.$refs.tree.setCheckedKeys([])},save_group_name:function(){var e=this.editInput,t=this;if(""===e)this.$message({message:"请输入关键字搜索"});else if(e.length>=20)this.$message({message:"请输入小于20字符"});else{var a=[];this.defaultChoose(a,this.chooseMember,"edit-save");var i=JSON.stringify(a),s=new URLSearchParams;s.append("groupName",e),s.append("groupMembers",i),s.append("isDefault",this.switchValue);var r=this.contextPath+"/selectUser/saveGroup";o.a.post(r,s).then(function(e){t.innerVisible=!1,t.$message({message:e.data.msg,type:"success"}),t.initDefaultData()}).catch(function(e){console.log(e)})}},handleSave:function(){var e=[],t=[],a=[];this.all_delete();for(var i=0;i<this.chooseMember.length;i++)e.push(this.chooseMember[i].userId),a.push(this.chooseMember[i].name);var s=e.join(",");this.$emit("update-value",s,a),this.defaultChoose(t,this.chooseMember,"save");var r=JSON.stringify(t),l=new URLSearchParams;l.append("selectUsers",r);var n=this.contextPath+"/selectUser/saveSelectUser";o.a.post(n,l).then(function(e){});var c=new URLSearchParams;c.append("roleId",s),c.append("userIds",this.userId)},defaultChoose:function(e,t,a){return"edit-save"==a?(t.forEach(function(t,a,i){var s={memberId:"",memberName:""};s.memberId=t.userId,s.memberName=t.name,e.push(s)}),e):(t.forEach(function(t,a,i){var s={userId:"",userName:""};s.userId=t.userId,s.userName=t.name,e.push(s)}),e)}}},n=l,c=(a("a1d0"),a("2877")),u=Object(c["a"])(n,i,s,!1,null,"7613b2ec",null);t["default"]=u.exports},1980:function(e,t,a){},"2c4a":function(e,t,a){},"36c9":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addOrModify"},[a("el-dialog",{attrs:{title:"项目资金结算新增",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-dialog",{attrs:{width:"80%",title:"选择人员",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[e.innerVisible?a("select-person",{on:{"update-value":e.getselectItemMP},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}):e._e()],1),e._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请单号"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyNo,callback:function(t){e.$set(e.fixedData,"applyNo",t)},expression:"fixedData.applyNo"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请部门"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantDepartment,callback:function(t){e.$set(e.fixedData,"applicantDepartment",t)},expression:"fixedData.applicantDepartment"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantName,callback:function(t){e.$set(e.fixedData,"applicantName",t)},expression:"fixedData.applicantName"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请日期"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyTime,callback:function(t){e.$set(e.fixedData,"applyTime",t)},expression:"fixedData.applyTime"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"项目名称",prop:"projName"}},[a("el-input",{model:{value:e.ruleForm.projName,callback:function(t){e.$set(e.ruleForm,"projName",t)},expression:"ruleForm.projName"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"金额(元)",prop:"awardAmount"}},[a("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.awardAmount,callback:function(t){e.$set(e.ruleForm,"awardAmount",t)},expression:"ruleForm.awardAmount"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"项目净收入(元)",prop:"projIncome"}},[a("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.projIncome,callback:function(t){e.$set(e.ruleForm,"projIncome",t)},expression:"ruleForm.projIncome"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"提成比例(%)",prop:"percentage"}},[a("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.percentage,callback:function(t){e.$set(e.ruleForm,"percentage",t)},expression:"ruleForm.percentage"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"推荐日期",prop:"recommendDt"}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.ruleForm.recommendDt,callback:function(t){e.$set(e.ruleForm,"recommendDt",t)},expression:"ruleForm.recommendDt"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple waichureason"},[a("el-form-item",{attrs:{label:"市场信息推荐人",prop:"recommender"}},[a("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},on:{focus:function(t){return e.selectPerson("recordPerson")}},model:{value:e.ruleForm.recommender,callback:function(t){e.$set(e.ruleForm,"recommender",t)},expression:"ruleForm.recommender"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple fujian"},[a("el-form-item",{attrs:{label:"附件",prop:"attaFile"}},[a("span",{staticStyle:{color:"#FF0000"}},[e._v("说明:请将项目资金结算审批的线下审批文件作为附件上传")]),e._v(" "),e.dialogFormVisible?a("up-load",{attrs:{"upload-title":"点击上传附件"},model:{value:e.ruleForm.attaFile,callback:function(t){e.$set(e.ruleForm,"attaFile",t)},expression:"ruleForm.attaFile"}}):e._e()],1)],1)])],1),e._v(" "),a("div",{staticClass:"submit"},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.submitForm("ruleForm","save")}}},[e._v(e._s(e.isAddOrMOdify?"保存":"更新"))]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.submitForm("ruleForm","submit")}}},[e._v("提交")])],1)],1)],1)],1)},s=[],r=(a("c5f6"),a("ac6a"),a("f8f6")),o=a("033f"),l={components:{upLoad:r["default"],selectPerson:o["default"]},data:function(){var e=function(e,t,a){""===t?a(new Error("请再次输入金额")):/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(t)?a():a(new Error("金额不符合规则"))};return{userId:"",meetingOptions:[],fileToken:"",isAddOrMOdify:"",dialogFormVisible:!1,innerVisible:!1,formLabelWidth:"120",unitOptions:[],vacationType:[],WhichClick:"",ruleForm:{projName:"",recommendDt:"",projIncome:"",percentage:"",awardAmount:"",recommender:"",attaFile:""},fixedData:{},rules:{projName:[{required:"true",message:"项目名称必填",trigger:"blur"}],awardAmount:[{required:"true",validator:e,trigger:"blur"}],recommendDt:[{required:"true",message:"推荐日期必填",trigger:"change"}],projIncome:[{required:"true",message:"净收入必填",trigger:"blur"}],percentage:[{required:"true",message:"提成比例必填",trigger:"blur"}],recommender:[{required:"true",message:"推荐人必填",trigger:"change"}],attaFile:[{required:"true",message:"附件必填",trigger:"change"}]}}},methods:{getselectItemMP:function(e,t){this.userId=e,this.ruleForm.recommender=t.join(","),this.innerVisible=!this.innerVisible},selectPerson:function(e){this.innerVisible=!this.innerVisible,this.WhichClick=e,this.isAddOrMOdify&&(this.userId="")},showDialog:function(e,t){var a=this;if(this.dialogFormVisible=!this.dialogFormVisible,this.$store.dispatch("officeStock/commonTCodeGetCodeByParentIdVal","103").then(function(e){"0"!==e.status&&a.$message.error(e.msg);var t=[];e.data.options.forEach(function(e){var a={};a.value=Number(e.value),a.label=e.label,t.push(a)}),a.unitOptions=t}),"111"===e){for(var i in this.ruleForm)this.$set(this.ruleForm,i,"");this.isAddOrMOdify=!0,this.fixedData=t}else"112"===e&&(this.fixedData.applyNo=t[0].applyNo,this.fixedData.applicantDepartment=t[0].applicantDepartment,this.fixedData.applicantName=t[0].applicantName,this.fixedData.applyTime=t[0].applyTime,this.ruleForm.projName=t[0].projName,this.ruleForm.recommendDt=t[0].recommendDt,this.ruleForm.projIncome=t[0].projIncome,this.ruleForm.percentage=t[0].percentage,this.ruleForm.awardAmount=t[0].awardAmount,this.ruleForm.recommender=t[0].recommenderName,this.ruleForm.attaFile=t[0].attaFile,this.ruleForm.purchaseId=t[0].purchaseId,this.userId=t[0].recommender,this.isAddOrMOdify=!1);this.$nextTick(function(){a.$refs.ruleForm.clearValidate()})},submitForm:function(e,t){var a=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;a.dialogFormVisible=!a.dialogFormVisible;var i={};a.ruleForm.applyNo=a.fixedData.applyNo,a.ruleForm.recommender=a.userId,i=a.ruleForm,"save"===t?a.$store.dispatch(a.isAddOrMOdify?"xiangmuzijin/capitalSettleAdd":"xiangmuzijin/capitalSettleUpdate",i).then(function(e){"0"===e.status&&(a.$message.success(a.isAddOrMOdify?"新增成功":"更新成功"),a.$emit("getTableList"))}):"submit"===t&&a.$store.dispatch("xiangmuzijin/capitalSettleSubmit",i).then(function(e){"0"===e.status&&(a.$message.success("提交成功"),a.$emit("getTableList"))})})}}},n=l,c=(a("afa9"),a("2877")),u=Object(c["a"])(n,i,s,!1,null,null,null);t["default"]=u.exports},"3a21":function(e,t,a){"use strict";var i=a("1980"),s=a.n(i);s.a},6140:function(e,t,a){},a1d0:function(e,t,a){"use strict";var i=a("6140"),s=a.n(i);s.a},afa9:function(e,t,a){"use strict";var i=a("2c4a"),s=a.n(i);s.a},c4f4:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAOCAYAAAAMn20lAAAAF0lEQVQYlWNscGD4z4AFMGETHJUgTQIAcsYB2/7VbKAAAAAASUVORK5CYII="},f8f6:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"upload-box"},[e.hiddenUpload?a("div",{staticClass:"fileView"},e._l(e.fileList,function(t){return a("h3",{key:t.uid},[a("a",{attrs:{href:e.contextPath+"attachController/download?fileId="+t.uid,target:"_blank"}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.hiddenUpload?e._e():a("div",{staticClass:"el-upload-box"},[a("el-upload",{ref:"upload",attrs:{action:e.updatePath,"auto-upload":!0,name:e.upLoadName,data:e.extraData,"file-list":e.fileList,accept:e.acceptFormat,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-error":e.handleError,"on-change":e.handleChange,"before-remove":e.beforeRemove,"before-upload":e.beforeUpload}},[a("el-button",{class:{active:e.hiddenUpload},attrs:{size:e.size,type:"primary"}},[e._v(e._s(e.uploadTitle))]),e._v(" "),e.isShowTip?a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.TipTitle))]):e._e()],1)],1)])},s=[],r=(a("28a5"),a("7f7f"),a("c5f6"),a("bc3a")),o=a.n(r),l={name:"GuluUpload",model:{prop:"value",event:"update-value"},props:{value:[String],isShowTip:{type:Boolean,default:!1},hiddenUpload:{type:Boolean,default:!1},tipTitle:{type:String,default:"只能上传jpg / png文件， 且不超过500kb"},uploadTitle:{type:String,default:"点击上传"},limit:{type:Number,default:1},extraData:{type:Object,default:function(){return{bizTableName:"",bizTablePk:"",fieldName:""}}},size:{type:String,default:"small"},upLoadName:{type:String,default:"file"},contextPath:{type:String,default:"/oa-web/"},acceptFormat:{type:String,default:".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.rp,.vsd"}},data:function(){return{updatePath:this.contextPath+"attachController/upload?fieldToken="+this.value,fileList:[]}},created:function(){var e=this;setTimeout(function(){e.$nextTick(function(){e.updatePath=e.contextPath+"attachController/upload?fieldToken="+e.value,e.getFileData()})},500)},methods:{getFileData:function(){var e=this,t=this.value;""!=t&&null!=t||(t="-1"),o()({url:this.contextPath+"attachController/getFileList?fieldToken="+t,method:"get"}).then(function(t){"0"===t.data.status?t.data.data.fileList&&e.$nextTick(function(){e.fileList=t.data.data.fileList,0==e.fileList.length&&e.$emit("update-value","")}):e.$message({type:"info",duration:1e3,message:t.data.msg})})},beforeUpload:function(e){},handleChange:function(e,t){var a=e.name.substring(e.name.lastIndexOf(".")+1),i="rp"===a,s="vsd"===a;(i||s)&&(this.$message({message:"上传文件不能是 rp 、vsd 格式!",type:"warning"}),this.$refs.upload.clearFiles())},handleExceed:function(e,t){this.$message.warning("当前限制选择 ".concat(e.length," 个文件，本次选择了 ").concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},handleRemove:function(e,t){var a=this;o()({url:this.contextPath+"attachController/delete?fileId="+e.uid,method:"get"}).then(function(e){"0"===e.data.status&&0==t.length&&a.$emit("update-value","")})},handleError:function(e,t,a){},handleSuccess:function(e,t,a){var i=e.data.fieldToken;void 0==i&&(i=this.value);var s=this.updatePath.split("=");""!=s[1]&&""==i&&(i=s[1]),this.updatePath=this.contextPath+"attachController/upload?fieldToken="+i,this.$emit("update-value",i)},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},handlePreview:function(e){window.open(this.contextPath+"attachController/download?fileId="+e.uid)}}},n=l,c=(a("3a21"),a("2877")),u=Object(c["a"])(n,i,s,!1,null,"087933ee",null);t["default"]=u.exports},fbe1:function(e,t){e.exports="data:image/png;base64,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"}}]);