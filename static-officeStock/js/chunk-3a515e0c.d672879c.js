(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a515e0c","chunk-278324e8","chunk-32ec804c"],{"033f":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"multiple-selection-component"},[a("div",{staticClass:"transfer-contanier clearfix"},[a("div",{staticClass:"inner clearfix"},[a("div",{staticClass:"tree-left"},[a("div",{staticClass:"button-box"},[a("el-input",{attrs:{size:"mini",clearable:"",placeholder:"输入姓名进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText="string"===typeof t?t.trim():t},expression:"filterText"}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"5px"},attrs:{icon:"el-icon-search",size:"mini"}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"tree-box"},[a("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{"empty-text":"暂无数据","show-checkbox":"","check-on-click-node":!0,"default-expand-all":!0,"expand-on-click-node":!1,props:e.defaultProps,data:e.treeData,"filter-node-method":e.filterNode,"node-key":"userId"},on:{"check-change":e.checkChange}})],1)]),e._v(" "),a("div",{staticClass:"box-center"},[a("div",{staticClass:"list-member"},[e._m(0),e._v(" "),a("ul",e._l(e.defaultMember,function(t,i){return a("li",{key:t.userId,ref:"memberLi",refInFor:!0,class:{"li-focus":e.chooseNum==i},on:{click:function(a){return e.memberSelect(i,t.userId,t.userName)}}},[a("i",{staticClass:"select el-icon-check"}),e._v(" "),a("span",{staticStyle:{"padding-left":"17px"}},[e._v(e._s(t.userName))])])}),0)])]),e._v(" "),a("div",{staticClass:"list-right"},[a("div",{staticClass:"select"},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",clearable:"",size:"mini",placeholder:"请选择"},on:{change:e.handleChange},model:{value:e.valueSelect,callback:function(t){e.valueSelect=t},expression:"valueSelect"}},e._l(e.options,function(t){return a("el-option",{key:t.groupId,attrs:{label:t.groupName,value:t.groupId}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.groupName))]),e._v(" "),a("span",{staticClass:"icon-nav",staticStyle:{float:"right",color:"#8492a6","font-size":"12px",display:"none"}},[a("i",{on:{click:function(i){return i.stopPropagation(),e.defaultSetting(t.groupId)}}},[e._v("默认")]),e._v(" "),a("i",{staticStyle:{"margin-left":"10px"},on:{click:function(i){return i.stopPropagation(),e.deleteGroupMember(t.groupId)}}},[e._v("删除")])])])}),1)],1),e._v(" "),a("div",{staticClass:"choose-member-content"},[a("div",{staticClass:"tag-box"},e._l(e.chooseMember,function(t){return a("el-tag",{key:t.userId,staticStyle:{"margin-right":"10px"},attrs:{closable:"",size:"mini",type:"success"},on:{close:function(i){return e.tagClose(t.userId)}}},[e._v(e._s(t.name))])}),1)]),e._v(" "),a("div",{staticClass:"button-nav"},[a("el-button",{staticStyle:{"background-color":"#b50005"},attrs:{type:"primary",size:"mini",icon:"el-icon-delete"},on:{click:e.all_delete}},[e._v("全部删除")]),e._v(" "),a("el-button",{staticStyle:{"background-color":"#b50005"},attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(t){e.innerVisible=!0}}},[e._v("保存分组")])],1)])]),e._v(" "),a("el-dialog",{attrs:{title:"自定义分组","append-to-body":"",visible:e.innerVisible},on:{"update:visible":function(t){e.innerVisible=t}}},[a("div",{staticClass:"edit-box"},[a("el-input",{attrs:{placeholder:"请输入关键字搜索",clearable:""},model:{value:e.editInput,callback:function(t){e.editInput="string"===typeof t?t.trim():t},expression:"editInput"}}),e._v(" "),a("div",{staticClass:"setting"},[a("p",[e._v("\n            保存为默认分组\n            "),a("el-switch",{attrs:{"active-color":"#b50005","inactive-color":"#ccc"},model:{value:e.switchValue,callback:function(t){e.switchValue=t},expression:"switchValue"}})],1),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px","background-color":"#b50005"},attrs:{type:"primary",size:"mini",icon:"el-icon-success"},on:{click:e.save_group_name}},[e._v("确认")])],1)],1)]),e._v(" "),a("div",{staticClass:"button-bottom"},[a("div",{staticClass:"button",on:{click:e.handleSave}},[a("img",{attrs:{src:i("fbe1"),alt:""}}),e._v("保存\n      ")])])],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[a("img",{attrs:{src:i("c4f4"),alt:""}}),e._v("常选人员\n          ")])}],s=(i("ac6a"),i("7f7f"),i("28a5"),i("c5f6"),i("bc3a")),n=i.n(s),o={name:"MultipleSelection",model:{prop:"value",event:"update-value"},props:{value:{type:String,default:""},contextPath:{type:String,default:"/oa-web/"},userId:[String,Number],selectType:{type:String,default:"role"},bid:{type:String,default:"75"}},data:function(){return{switchValue:!1,editInput:"",innerVisible:!1,dialogTableVisible:!1,chooseNum:null,filterText:"",treeData:[],defaultProps:{children:"children",label:"name"},defaultMember:[],chooseMember:[],options:[],valueSelect:"",groupsList:[],sChooseMemberArr:[],valueDefault:[],url_project_id:"",loading:!1}},computed:{myValue:function(){return""!==this.value?this.value.split(","):[]}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},created:function(){this.url_project_id=this.bid,this.initDefaultData(),this.getTreeList()},mounted:function(){this.$nextTick(function(){var e=[];if(""!==this.value){e=this.value.split(","),this.$refs.tree.setCheckedKeys(e);for(var t=0;t<this.defaultMember.length;t++)for(var i=0;i<e.length;i++)this.defaultMember[t].id==e[i]&&(this.$refs.memberLi[t].className="li-focus");this.chooseMember=this.$refs.tree.getCheckedNodes();for(var a=0;a<this.chooseMember.length;a++)void 0!==this.chooseMember[a].children&&this.chooseMember.splice(a,1)}})},methods:{getTreeList:function(){var e=this;n()({url:this.contextPath+"/tree/getTreeList",method:"get"}).then(function(t){var i=t.data.data.model;e.treeData.push(i),e.$nextTick(function(){e.valueDefault=this.value.split(","),e.$refs.tree.setCheckedKeys(this.valueDefault)})})},initDefaultData:function(){var e=this;n()({url:this.contextPath+"/selectUser/init",method:"get"}).then(function(t){var i=t.data.data.groups;if(e.groupsList=t.data.data.groups,e.defaultMember=t.data.data.users,i.length>0){e.options=[];for(var a=0;a<i.length;a++){var r={groupName:"",groupId:""};r.groupName=i[a].groupName,r.groupId=i[a].groupId,e.options.push(r)}}})},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},memberSelect:function(e,t,i){if(this.$refs.memberLi[e].className.length<=0){this.$refs.memberLi[e].className="li-focus";var a={userId:"",name:""};a.userId=t,a.name=i,this.sChooseMemberArr.push(a),this.$refs.tree.setCheckedNodes(this.sChooseMemberArr)}else{this.$refs.memberLi[e].className="";for(var r=0;r<this.chooseMember.length;r++)this.chooseMember[r].userId==t&&this.chooseMember.splice(r,1);this.$refs.tree.setCheckedNodes(this.chooseMember)}},checkChange:function(e,t){this.chooseMember.length;if(t){if("PERSON"===e.type){for(var i=0;i<this.defaultMember.length;i++)this.defaultMember[i].userId==e.userId&&(this.$refs.memberLi[i].className="li-focus");var a={userId:"",name:""};a.userId=e.userId,a.name=e.name,this.sChooseMemberArr.push(a);var r={};this.chooseMember=this.sChooseMemberArr.reduce(function(e,t){return!r[t.userId]&&(r[t.userId]=e.push(t)),e},[])}}else{for(var s=0;s<this.defaultMember.length;s++)this.defaultMember[s].userId==e.userId&&(this.$refs.memberLi[s].className="");for(var n=0;n<this.chooseMember.length;n++)this.chooseMember[n].userId==e.userId&&this.chooseMember.splice(n,1)}this.sChooseMemberArr=this.chooseMember},defaultHandleArr:function(e){this.$refs.tree.setCheckedNodes(e)},handleChange:function(){for(var e=this.groupsList.length,t=[],i=0;i<e;i++)this.groupsList[i].groupId===this.valueSelect&&(t=this.groupsList[i].groupMembers);var a=t.length;if(a>0)for(var r=0;r<a;r++){var s={userId:"",name:""};s.userId=t[r].memberId,s.name=t[r].memberName,this.sChooseMemberArr.push(s)}var n={};this.chooseMember=this.sChooseMemberArr.reduce(function(e,t){return!n[t.userId]&&(n[t.userId]=e.push(t)),e},[]),this.$refs.tree.setCheckedNodes(this.chooseMember)},defaultSetting:function(e){var t=this;n()({url:this.contextPath+"/selectUser/setDefaultGroup?groupId=".concat(e),method:"get"}).then(function(e){t.$message({message:e.data.msg,type:"success"}),t.initDefaultData()})},deleteGroupMember:function(e){var t=this;n()({url:this.contextPath+"/selectUser/deleteGroup?groupId=".concat(e),method:"get"}).then(function(e){t.$message({message:e.data.msg,type:"success"}),t.initDefaultData();var i=t.options.length;1==i&&(t.options=[])})},tagClose:function(e){for(var t=0;t<this.chooseMember.length;t++)this.chooseMember[t].userId==e&&this.chooseMember.splice(t,1);this.$refs.tree.setCheckedNodes(this.chooseMember)},defaultDelete:function(e){for(var t=0;t<this.chooseMember.length;t++)this.chooseMember[t].userId==e&&this.chooseMember.splice(t,1);this.$refs.tree.setCheckedNodes(this.chooseMember)},all_delete:function(){this.$refs.tree.setCheckedKeys([])},save_group_name:function(){var e=this.editInput,t=this;if(""===e)this.$message({message:"请输入关键字搜索"});else if(e.length>=20)this.$message({message:"请输入小于20字符"});else{var i=[];this.defaultChoose(i,this.chooseMember,"edit-save");var a=JSON.stringify(i),r=new URLSearchParams;r.append("groupName",e),r.append("groupMembers",a),r.append("isDefault",this.switchValue);var s=this.contextPath+"/selectUser/saveGroup";n.a.post(s,r).then(function(e){t.innerVisible=!1,t.$message({message:e.data.msg,type:"success"}),t.initDefaultData()}).catch(function(e){console.log(e)})}},handleSave:function(){var e=[],t=[],i=[];this.all_delete();for(var a=0;a<this.chooseMember.length;a++)e.push(this.chooseMember[a].userId),i.push(this.chooseMember[a].name);var r=e.join(",");this.$emit("update-value",r,i),this.defaultChoose(t,this.chooseMember,"save");var s=JSON.stringify(t),o=new URLSearchParams;o.append("selectUsers",s);var l=this.contextPath+"/selectUser/saveSelectUser";n.a.post(l,o).then(function(e){});var u=new URLSearchParams;u.append("roleId",r),u.append("userIds",this.userId)},defaultChoose:function(e,t,i){return"edit-save"==i?(t.forEach(function(t,i,a){var r={memberId:"",memberName:""};r.memberId=t.userId,r.memberName=t.name,e.push(r)}),e):(t.forEach(function(t,i,a){var r={userId:"",userName:""};r.userId=t.userId,r.userName=t.name,e.push(r)}),e)}}},l=o,u=(i("a1d0"),i("2877")),c=Object(u["a"])(l,a,r,!1,null,"7613b2ec",null);t["default"]=c.exports},1980:function(e,t,i){},"3a21":function(e,t,i){"use strict";var a=i("1980"),r=i.n(a);r.a},"42f2":function(e,t,i){},6140:function(e,t,i){},a1d0:function(e,t,i){"use strict";var a=i("6140"),r=i.n(a);r.a},a9ef:function(e,t,i){"use strict";var a=i("42f2"),r=i.n(a);r.a},c4f4:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAOCAYAAAAMn20lAAAAF0lEQVQYlWNscGD4z4AFMGETHJUgTQIAcsYB2/7VbKAAAAAASUVORK5CYII="},e348:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"addOrModify"},[i("el-dialog",{attrs:{title:"会议申请新增",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-dialog",{attrs:{width:"80%",title:"选择人员",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[i("select-person",{on:{"update-value":e.getselectItem},model:{value:e.ruleForm.meetingPersonUserId,callback:function(t){e.$set(e.ruleForm,"meetingPersonUserId",t)},expression:"ruleForm.meetingPersonUserId"}})],1),e._v(" "),i("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"申请单号"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyNo,callback:function(t){e.$set(e.fixedData,"applyNo",t)},expression:"fixedData.applyNo"}})],1)],1)]),e._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple-light"},[i("el-form-item",{attrs:{label:"申请部门"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantDepartment,callback:function(t){e.$set(e.fixedData,"applicantDepartment",t)},expression:"fixedData.applicantDepartment"}})],1)],1)])],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"申请人"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantName,callback:function(t){e.$set(e.fixedData,"applicantName",t)},expression:"fixedData.applicantName"}})],1)],1)]),e._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple-light"},[i("el-form-item",{attrs:{label:"申请日期"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyTime,callback:function(t){e.$set(e.fixedData,"applyTime",t)},expression:"fixedData.applyTime"}})],1)],1)])],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"会议名称",prop:"meetingName"}},[i("el-input",{model:{value:e.ruleForm.meetingName,callback:function(t){e.$set(e.ruleForm,"meetingName",t)},expression:"ruleForm.meetingName"}})],1)],1)]),e._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"会议费用(元)",prop:"meetingAmount"}},[i("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.meetingAmount,callback:function(t){e.$set(e.ruleForm,"meetingAmount",t)},expression:"ruleForm.meetingAmount"}})],1)],1)])],1),e._v(" "),i("el-row",{staticClass:"meetingTime"},[i("el-col",{staticStyle:{height:"50px"},attrs:{span:24}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"会议时间",prop:"meetingTime"}},[i("el-date-picker",{staticStyle:{marginTop:"10px",marginLeft:"8px"},attrs:{type:"datetimerange","range-separator":"至",format:"yyyy-MM-dd HH:mm","value-format":"timestamp","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.ruleForm.meetingTime,callback:function(t){e.$set(e.ruleForm,"meetingTime",t)},expression:"ruleForm.meetingTime"}})],1)],1)])],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"会议人数",prop:"personCount"}},[i("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.personCount,callback:function(t){e.$set(e.ruleForm,"personCount",t)},expression:"ruleForm.personCount"}})],1)],1)]),e._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"会议地点"}},[i("el-input",{model:{value:e.ruleForm.meetingPlace,callback:function(t){e.$set(e.ruleForm,"meetingPlace",t)},expression:"ruleForm.meetingPlace"}})],1)],1)])],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"grid-content bg-purple waichureason"},[i("el-form-item",{attrs:{label:"备注",prop:"remark"}},[i("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1)],1)])],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"grid-content bg-purple fujian"},[i("el-form-item",{attrs:{label:"附件"}},[e.dialogFormVisible?i("up-load",{attrs:{"upload-title":"点击上传附件"},model:{value:e.ruleForm.attachment,callback:function(t){e.$set(e.ruleForm,"attachment",t)},expression:"ruleForm.attachment"}}):e._e()],1)],1)])],1),e._v(" "),i("div",{staticClass:"submit"},[i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.submitForm("ruleForm","save")}}},[e._v(e._s(e.isAddOrMOdify?"保存":"更新"))]),e._v(" "),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.submitForm("ruleForm","submit")}}},[e._v("提交")])],1)],1)],1)],1)},r=[],s=i("f8f6"),n=i("033f"),o={components:{upLoad:s["default"],selectPerson:n["default"]},data:function(){var e=function(e,t,i){""===t?i(new Error("请再次输入人数")):/^[1-9]+[0-9]*$/.test(t)?i():i(new Error("人数不符合规则"))},t=function(e,t,i){""===t?i(new Error("请再次输入金额")):/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(t)?i():i(new Error("金额不符合规则"))};return{isAddOrMOdify:"",dialogFormVisible:!1,innerVisible:!1,formLabelWidth:"120",vacationType:[],ruleForm:{meetingName:"",meetingAmount:"",meetingTime:[],personCount:"",meetingPlace:"",remark:"",attachment:""},fixedData:{},rules:{meetingTime:[{required:"true",message:"会议时间必填",trigger:"change"}],personCount:[{required:"true",validator:e,trigger:"blur"}],meetingAmount:[{required:"true",validator:t,trigger:"blur"}],meetingName:[{required:"true",message:"会议名称必填",trigger:"blur"}],meetingPerson:[{required:"true",message:"参会人员必填",trigger:"change"}]}}},methods:{getselectItem:function(e,t){this.selectPerson(),this.ruleForm.meetingPerson=t.join(",")},selectPerson:function(){this.innerVisible=!this.innerVisible},showDialog:function(e,t){var i=this;this.dialogFormVisible=!this.dialogFormVisible,"111"===e?(this.ruleForm.meetingName="",this.ruleForm.meetingAmount="",this.ruleForm.meetingTime=[],this.ruleForm.personCount="",this.ruleForm.meetingPlace="",this.ruleForm.remark="",this.ruleForm.attachment="",this.fixedData=t,this.isAddOrMOdify=!0):"112"===e&&(this.ruleForm.meetingTime=[],this.fixedData.applyNo=t[0].applyNo,this.fixedData.applicantDepartment=t[0].applicantDepartment,this.fixedData.applyTime=t[0].applyTime,this.fixedData.applicantName=t[0].applicantName,this.ruleForm.meetingName=t[0].meetingName,this.ruleForm.meetingTime.push(t[0].meetingStartTimeLong),this.ruleForm.meetingTime.push(t[0].meetingEndTimeLong),this.ruleForm.remark=t[0].remark,this.ruleForm.meetingAmount=t[0].meetingAmount,this.ruleForm.attachment=t[0].attachment||"",this.ruleForm.personCount=t[0].personCount,this.ruleForm.meetingPlace=t[0].meetingPlace,this.ruleForm.applyNo=t[0].applyNo,this.isAddOrMOdify=!1),this.$nextTick(function(){i.$refs.ruleForm.clearValidate()})},submitForm:function(e,t){var i=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var a={};i.isAddOrMOdify?(a.meetingName=i.ruleForm.meetingName,a.meetingAmount=i.ruleForm.meetingAmount,a.meetingEndTime=i.ruleForm.meetingTime[1],a.meetingStartTime=i.ruleForm.meetingTime[0],a.personCount=i.ruleForm.personCount,a.meetingPlace=i.ruleForm.meetingPlace,a.remark=i.ruleForm.remark,a.applyNo=i.fixedData.applyNo,a.attachment=i.ruleForm.attachment):i.isAddOrMOdify||(a.meetingName=i.ruleForm.meetingName,a.meetingAmount=i.ruleForm.meetingAmount,a.meetingEndTime=i.ruleForm.meetingTime[1],a.meetingStartTime=i.ruleForm.meetingTime[0],a.personCount=i.ruleForm.personCount,a.meetingPlace=i.ruleForm.meetingPlace,a.remark=i.ruleForm.remark,a.applyNo=i.fixedData.applyNo,a.attachment=i.ruleForm.attachment),"save"===t?i.$store.dispatch(i.isAddOrMOdify?"meetingCost/meetingCostAdd":"meetingCost/meetingCostUpdate",a).then(function(e){"0"===e.status&&(i.$message.success(i.isAddOrMOdify?"新增成功":"更新成功"),i.$emit("getTableList"),i.dialogFormVisible=!i.dialogFormVisible)}):"submit"===t&&i.$store.dispatch("meetingCost/meetingCostSubmit",a).then(function(e){i.$message.success("提交成功!"),i.$emit("getTableList"),i.dialogFormVisible=!i.dialogFormVisible})})}}},l=o,u=(i("a9ef"),i("2877")),c=Object(u["a"])(l,a,r,!1,null,null,null);t["default"]=c.exports},f8f6:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-box"},[e.hiddenUpload?i("div",{staticClass:"fileView"},e._l(e.fileList,function(t){return i("h3",{key:t.uid},[i("a",{attrs:{href:e.contextPath+"attachController/download?fileId="+t.uid,target:"_blank"}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.hiddenUpload?e._e():i("div",{staticClass:"el-upload-box"},[i("el-upload",{ref:"upload",attrs:{action:e.updatePath,"auto-upload":!0,name:e.upLoadName,data:e.extraData,"file-list":e.fileList,accept:e.acceptFormat,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-error":e.handleError,"on-change":e.handleChange,"before-remove":e.beforeRemove,"before-upload":e.beforeUpload}},[i("el-button",{class:{active:e.hiddenUpload},attrs:{size:e.size,type:"primary"}},[e._v(e._s(e.uploadTitle))]),e._v(" "),e.isShowTip?i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.TipTitle))]):e._e()],1)],1)])},r=[],s=(i("28a5"),i("7f7f"),i("c5f6"),i("bc3a")),n=i.n(s),o={name:"GuluUpload",model:{prop:"value",event:"update-value"},props:{value:[String],isShowTip:{type:Boolean,default:!1},hiddenUpload:{type:Boolean,default:!1},tipTitle:{type:String,default:"只能上传jpg / png文件， 且不超过500kb"},uploadTitle:{type:String,default:"点击上传"},limit:{type:Number,default:1},extraData:{type:Object,default:function(){return{bizTableName:"",bizTablePk:"",fieldName:""}}},size:{type:String,default:"small"},upLoadName:{type:String,default:"file"},contextPath:{type:String,default:"/oa-web/"},acceptFormat:{type:String,default:".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.rp,.vsd"}},data:function(){return{updatePath:this.contextPath+"attachController/upload?fieldToken="+this.value,fileList:[]}},created:function(){var e=this;setTimeout(function(){e.$nextTick(function(){e.updatePath=e.contextPath+"attachController/upload?fieldToken="+e.value,e.getFileData()})},500)},methods:{getFileData:function(){var e=this,t=this.value;""!=t&&null!=t||(t="-1"),n()({url:this.contextPath+"attachController/getFileList?fieldToken="+t,method:"get"}).then(function(t){"0"===t.data.status?t.data.data.fileList&&e.$nextTick(function(){e.fileList=t.data.data.fileList,0==e.fileList.length&&e.$emit("update-value","")}):e.$message({type:"info",duration:1e3,message:t.data.msg})})},beforeUpload:function(e){},handleChange:function(e,t){var i=e.name.substring(e.name.lastIndexOf(".")+1),a="rp"===i,r="vsd"===i;(a||r)&&(this.$message({message:"上传文件不能是 rp 、vsd 格式!",type:"warning"}),this.$refs.upload.clearFiles())},handleExceed:function(e,t){this.$message.warning("当前限制选择 ".concat(e.length," 个文件，本次选择了 ").concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},handleRemove:function(e,t){var i=this;n()({url:this.contextPath+"attachController/delete?fileId="+e.uid,method:"get"}).then(function(e){"0"===e.data.status&&0==t.length&&i.$emit("update-value","")})},handleError:function(e,t,i){},handleSuccess:function(e,t,i){var a=e.data.fieldToken;void 0==a&&(a=this.value);var r=this.updatePath.split("=");""!=r[1]&&""==a&&(a=r[1]),this.updatePath=this.contextPath+"attachController/upload?fieldToken="+a,this.$emit("update-value",a)},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},handlePreview:function(e){window.open(this.contextPath+"attachController/download?fileId="+e.uid)}}},l=o,u=(i("3a21"),i("2877")),c=Object(u["a"])(l,a,r,!1,null,"087933ee",null);t["default"]=c.exports},fbe1:function(e,t){e.exports="data:image/png;base64,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"}}]);