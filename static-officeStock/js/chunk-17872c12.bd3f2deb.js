(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17872c12","chunk-16e952e1","chunk-5ed14524","chunk-836c2724","chunk-32ec804c","chunk-2d0af4e8"],{"0e85":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"70"}}),e._v(" "),a("el-table-column",{attrs:{prop:"applyNo",label:"请借款编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"applyTime",label:"申请日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"paymentTypeName",label:"付款方式"}}),e._v(" "),a("el-table-column",{attrs:{prop:"useTypeName",label:"用途"}}),e._v(" "),a("el-table-column",{attrs:{prop:"borrowAmount",label:"金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"accountName",label:"收款单位"}}),e._v(" "),a("el-table-column",{attrs:{prop:"backDt",label:"计划还款时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"applyStatusName",label:"状态"}})],1),e._v(" "),a("div",[a("el-pagination",{attrs:{"current-page":e.queryParams.currPage,background:"",small:"","page-sizes":[10,20,30,40],layout:" prev, pager, next,total ,sizes ,jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},n=[],l={props:{queryParams:{type:Object,required:!0}},data:function(){return{tableData:[],totalPage:0}},mounted:function(){this.getTableList()},methods:{getTableList:function(){var e=this;this.$store.dispatch("applyBorrow/applyBorrowList",this.queryParams).then(function(t){e.tableData=t.data,e.totalPage=t.totalCount,e.$parent.allItem=e.totalPage})},handleSizeChange:function(e){this.queryParams.pageSize=e,this.getTableList()},handleCurrentChange:function(e){this.queryParams.currPage=e,this.getTableList()},handleSelectionChange:function(e){this.$emit("transferSelectItem",e)}}},r=l,o=a("2877"),s=Object(o["a"])(r,i,n,!1,null,null,null);t["default"]=s.exports},1980:function(e,t,a){},"268d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"tag",staticClass:"link-tag-box",style:{marginTop:e.cmarginTop+"px"}},[a("div",{staticClass:"all"},[a("span",{staticClass:"spa",class:{allActiveClass:e.isActive},on:{click:e.allTags}},[e._v("不限")])]),e._v(" "),a("el-row",{staticClass:"menu-content"},[a("el-col",{ref:"menu",style:{maxWidth:e.cmaxWidth+"px"},attrs:{span:24}},[a("div",{staticClass:"ul-contaier"},[a("ul",{staticClass:"tag-nav",class:{activeHeight:e.isActiveH}},e._l(e.options,function(t,i){return a("li",{key:t.value,staticClass:"navItem",class:!0===t.checked?"activeClass":"",on:{click:function(t){return e.changeTags(i)}}},[a("span",[e._v(e._s(t.label))])])}),0),e._v(" "),e.isMoreShow?a("div",{staticClass:"col-handle"},[a("a",{staticClass:"open-btn icon-open-select",class:{open:e.isActiveH},attrs:{href:"javascript:void(0)"},on:{click:e.moreShow}})]):e._e()])])],1)],1)},n=[],l=(a("ac6a"),a("6762"),a("2fdb"),a("28a5"),a("c5f6"),a("bc3a")),r=a.n(l),o={name:"LinkTag",model:{prop:"value",event:"update-value"},props:{value:{type:String,default:""},contextPath:{type:String,default:"/oa-web"},parentId:{type:String,default:""},include:{type:String,default:null},cmaxWidth:{type:[String,Number],default:"inherit"},cmarginTop:{type:Number,default:10},dataArr:{type:Array,default:function(){return[]}},selectType:{type:Number,default:1}},data:function(){return{isActive:!0,isActiveH:!1,isMoreShow:!1,filterMore:!0,multipleData:[],options:[]}},computed:{myValue:function(){return""!==this.value?this.value.split(","):[]},randomNum:function(){return this.dataArr.length+Math.ceil(10*Math.random())}},watch:{randomNum:function(e){this.updateParentCreateData(this.dataArr),this.updateParentData(this.dataArr)}},created:function(){},mounted:function(){var e=this;this.$nextTick(function(){if(e.dataArr.length>0)return e.updateParentCreateData(e.dataArr),void e.updateParentData(e.dataArr);var t=e.parentId;e.getCodeByParentId(t)})},methods:{getCodeByParentId:function(e){var t=this,a="".concat(this.contextPath,"/commonTCode/getCodeByParentId?parentId=").concat(e);r()({url:a,method:"get"}).then(function(e){var a=e.data;if("0"===a.status&&a.data.options){var i=a.data.options;t.updateParentCreateData(i),t.updateParentData(i)}})},updateParentData:function(e){var t=this;this.$nextTick(function(){var a=t.cmaxWidth,i=e.length,n=70*i;"inherit"===a&&(a=t.$refs.tag.offsetWidth),a=parseInt(a),t.isMoreShow=n>a})},updateParentCreateData:function(e){var t=this;this.$nextTick(function(){var a=[],i=e;if(t.include)for(var n=t.include.split(","),l=0;l<i.length;l++)n.includes(i[l].value)&&a.push(i[l]);else a=i;t.options=a,t.myValue.forEach(function(e,a){for(var i=0;i<t.options.length;i++)if(t.options[i].value===e){var n=t.options[i];n.checked=!0,t.$set(t.options,i,n),t.isActive=!1}})})},allTags:function(){for(var e in this.isActive=!0,this.options){var t=this.options[e];t.checked=!1,this.$set(this.options,e,t)}this.$emit("update-value","")},changeTags:function(e){this.isActive=!1;var t=this.selectType;if(1===t){var a=this.options[e];if(a.checked=!a.checked,this.$set(this.options,e,a),!0===this.options[e].checked){this.myValue.push(this.options[e].value);var i=this.myValue.join(",");this.$emit("update-value",i)}else{var n=this.options[e].value,l=this.myValue.indexOf(n);this.myValue.splice(l,1);var r=this.myValue.join(",");0===this.myValue.length&&(r="",this.isActive=!0),this.$emit("update-value",r)}}if(2===t){for(var o=0;o<this.options.length;o++){var s=this.options[o];s.checked=!1,this.$set(this.options,o,s)}var u=this.options[e];u.checked=!0,this.$set(this.options,e,u);var c=this.options[e].value;this.$emit("update-value",c)}},moreShow:function(){this.isActiveH=!this.isActiveH},clear:function(){this.allTags()}}},s=o,u=(a("616e"),a("2877")),c=Object(u["a"])(s,i,n,!1,null,"71c44ed0",null);t["default"]=c.exports},"2e90":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",[a("div",[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入收款单位搜索"},model:{value:e.queryParams.keyWord,callback:function(t){e.$set(e.queryParams,"keyWord",t)},expression:"queryParams.keyWord"}}),e._v(" "),a("el-button",{attrs:{slot:"append",icon:"el-icon-search",size:"mini"},on:{click:e.search},slot:"append"},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{slot:"append",icon:"el-icon-delete",size:"mini"},on:{click:e.clear},slot:"append"},[e._v("清空")])],1),e._v(" "),a("a",{on:{click:e.conditionsOn}},[e._v(e._s(e.showCondition))]),e._v(" "),a("el-divider"),e._v(" "),a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowCondition,expression:"isShowCondition"}],staticClass:"conditions"},[a("div",{staticStyle:{display:"flex"}},[a("span",{staticStyle:{width:"70px",fontSize:"14px",lineHeight:"42px"}},[e._v("付款方式:")]),e._v(" "),a("link-tag",{attrs:{parentId:"11012",selectType:1},model:{value:e.queryParams.paymentType,callback:function(t){e.$set(e.queryParams,"paymentType",t)},expression:"queryParams.paymentType"}})],1),e._v(" "),a("div",{staticStyle:{display:"flex"}},[a("span",{staticStyle:{width:"70px",fontSize:"14px",lineHeight:"42px"}},[e._v("用途:")]),e._v(" "),a("link-tag",{attrs:{parentId:"11013",selectType:1},model:{value:e.queryParams.useType,callback:function(t){e.$set(e.queryParams,"useType",t)},expression:"queryParams.useType"}})],1),e._v(" "),a("div",[a("span",[e._v("申请日期")]),e._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择开始日期"},model:{value:e.queryParams.startTime,callback:function(t){e.$set(e.queryParams,"startTime",t)},expression:"queryParams.startTime"}}),e._v(" "),a("span",[e._v("至")]),e._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择结束日期"},model:{value:e.queryParams.endTime,callback:function(t){e.$set(e.queryParams,"endTime",t)},expression:"queryParams.endTime"}})],1),e._v(" "),a("el-divider")],1)]),e._v(" "),a("div",{staticClass:"optionButtons"},e._l(e.buttons,function(t,i){return a("el-button",{key:i,attrs:{disabled:e.setStatus(t.btnScope),type:"danger",plain:"",size:"mini"},on:{click:function(a){return e.option(t.code)}}},[e._v(e._s(t.name))])}),1)],1),e._v(" "),a("div",{staticClass:"bottom"},[a("span",[e._v("全部结果")]),e._v("  \n    "),a("span",[e._v("共"+e._s(e.allItem)+"个结果")]),e._v(" "),a("my-table",{ref:"myTable",attrs:{queryParams:e.queryParams},on:{transferSelectItem:e.transferSelectItem}})],1),e._v(" "),a("add-or-modify",{ref:"addOrModify",on:{getTableList:e.getTableList}}),e._v(" "),a("detail",{ref:"detail"})],1)},n=[],l=(a("ac6a"),a("0e85")),r=a("bd7c"),o=a("268d"),s=a("c40f"),u={name:"",watch:{queryParams:{handler:function(e,t){""!==e.endTime&&""!==e.startTime&&e.endTime<e.startTime&&(this.$message.warning("结束时间不能小于开始时间"),this.queryParams.endTime="")},deep:!0}},components:{myTable:l["default"],addOrModify:r["default"],linkTag:o["default"],detail:s["default"]},data:function(){return{seletedItem:[],queryParams:{keyWord:"",currPage:1,pageSize:10,startTime:"",endTime:"",paymentType:"",useType:""},fixedData:{applyNo:"",applicantDepartment:"",applyTime:"",applicantName:""},showConditionIcon:"el-icon-arrow-up",showCondition:"收起全部筛选项",isShowCondition:!0,allItem:0,buttons:[{code:"111",name:"新增",btnScope:"normal"},{code:"112",name:"编辑",btnScope:"single"},{code:"115",name:"查看",btnScope:"single"},{code:"113",name:"删除",btnScope:"multi"}]}},methods:{clear:function(){this.queryParams.keyWord="",this.queryParams.startTime="",this.queryParams.endTime="",this.queryParams.paymentType="",this.queryParams.useType=""},search:function(){this.getTableList()},conditionsOn:function(){"el-icon-arrow-up"===this.showConditionIcon?(this.showConditionIcon="el-icon-arrow-down",this.showCondition="展开全部筛选项",this.isShowCondition=!1):"el-icon-arrow-down"===this.showConditionIcon&&(this.showConditionIcon="el-icon-arrow-up",this.showCondition="收起全部筛选项",this.isShowCondition=!0)},option:function(e){var t=this;if("111"==e){var a={dealMark:"add"};this.$store.dispatch("applyBorrow/applyBorrowToEdit",a).then(function(a){t.fixedData.applyNo=a.data.applyNo,t.fixedData.applicantDepartment=a.data.applicantDepartment,t.fixedData.applyTime=a.data.applyTime,t.fixedData.applicantName=a.data.applicantName,t.fixedData.applyTimeLong=a.data.applyTimeLong,t.$refs.addOrModify.showDialog(e,t.fixedData)})}else if("112"==e){if("0"!==this.seletedItem[0].applyStatus)return this.$message.warning("此条数据非草稿状态!");this.$refs.addOrModify.showDialog(e,this.seletedItem)}else if("113"==e){var i=!0;if(this.seletedItem.forEach(function(e){if("0"!==e.applyStatus)return i=!1}),!1===i)return this.$message.warning("所选数据存在非草稿状态!");this.$confirm("是否确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=[];t.seletedItem.forEach(function(t){e.push(t.applyNo)}),t.$store.dispatch("applyBorrow/applyBorrowDelete",e.join(",")).then(function(e){"0"==e.status&&(t.$message.success("删除成功"),t.getTableList())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}else"115"==e&&this.$refs.detail.showDialog(this.seletedItem)},getTableList:function(){this.$refs.myTable.getTableList()},transferSelectItem:function(e){this.seletedItem=e},setStatus:function(e){return"single"==e?1!=this.seletedItem.length:"multi"==e?!(this.seletedItem.length>=1):"normal"!=e}}},c=u,p=a("2877"),d=Object(p["a"])(c,i,n,!1,null,null,null);t["default"]=d.exports},"3a21":function(e,t,a){"use strict";var i=a("1980"),n=a.n(i);n.a},5576:function(e,t,a){},"616e":function(e,t,a){"use strict";var i=a("5576"),n=a.n(i);n.a},7377:function(e,t,a){"use strict";var i=a("7b46"),n=a.n(i);n.a},"7b46":function(e,t,a){},bd7c:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addOrModify"},[a("el-dialog",{attrs:{title:"付款申请新增",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请单号"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyNo,callback:function(t){e.$set(e.fixedData,"applyNo",t)},expression:"fixedData.applyNo"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请部门"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantDepartment,callback:function(t){e.$set(e.fixedData,"applicantDepartment",t)},expression:"fixedData.applicantDepartment"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"申请人"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applicantName,callback:function(t){e.$set(e.fixedData,"applicantName",t)},expression:"fixedData.applicantName"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"申请日期"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.fixedData.applyTime,callback:function(t){e.$set(e.fixedData,"applyTime",t)},expression:"fixedData.applyTime"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"付款方式",prop:"paymentType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.paymentType,callback:function(t){e.$set(e.ruleForm,"paymentType",t)},expression:"ruleForm.paymentType"}},e._l(e.paymentTypeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"用途",prop:"useType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.useType,callback:function(t){e.$set(e.ruleForm,"useType",t)},expression:"ruleForm.useType"}},e._l(e.useTypeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)])],1),e._v(" "),a("el-row",{staticClass:"vacationTime"},[a("el-col",{staticStyle:{height:"50px"},attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"金额(元)",prop:"borrowAmount"}},[a("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.borrowAmount,callback:function(t){e.$set(e.ruleForm,"borrowAmount",t)},expression:"ruleForm.borrowAmount"}})],1)],1)]),e._v(" "),a("el-col",{staticStyle:{height:"50px"},attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"收款单位",prop:e.isShowHuankuanjihua?"":"accountName"}},[a("el-input",{model:{value:e.ruleForm.accountName,callback:function(t){e.$set(e.ruleForm,"accountName",t)},expression:"ruleForm.accountName"}})],1)],1)])],1),e._v(" "),a("el-row",{staticClass:"vacationTime"},[a("el-col",{staticStyle:{height:"50px"},attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"账号",prop:e.isShowHuankuanjihua?"":"accountNum"}},[a("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.accountNum,callback:function(t){e.$set(e.ruleForm,"accountNum",t)},expression:"ruleForm.accountNum"}})],1)],1)]),e._v(" "),a("el-col",{staticStyle:{height:"50px"},attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"开户行",prop:e.isShowHuankuanjihua?"":"openBank"}},[a("el-input",{model:{value:e.ruleForm.openBank,callback:function(t){e.$set(e.ruleForm,"openBank",t)},expression:"ruleForm.openBank"}})],1)],1)])],1),e._v(" "),a("el-row",{staticClass:"vacationTime"},[e.isShowHuankuanjihua?a("el-col",{staticStyle:{height:"50px"},attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"还款计划",prop:"backDt"}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd","picker-options":e.pickerOptions,placeholder:"选择日期"},on:{blur:e.chufaTime},model:{value:e.ruleForm.backDt,callback:function(t){e.$set(e.ruleForm,"backDt",t)},expression:"ruleForm.backDt"}})],1)],1)]):e._e(),e._v(" "),e.isShowHuankuan?a("el-col",{staticStyle:{height:"50px"},attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"款项是否入账",prop:"isEntry"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.isEntry,callback:function(t){e.$set(e.ruleForm,"isEntry",t)},expression:"ruleForm.isEntry"}},e._l(e.isEntryOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)]):e._e()],1),e._v(" "),e.isShowHuankuanjihua?a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple waichureason"},[a("el-form-item",{attrs:{label:"借款事由",prop:"borrowDesc"}},[a("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},model:{value:e.ruleForm.borrowDesc,callback:function(t){e.$set(e.ruleForm,"borrowDesc",t)},expression:"ruleForm.borrowDesc"}})],1)],1)])],1):e._e(),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple fujian"},[a("el-form-item",{attrs:{label:"附件"}},[e.dialogFormVisible?a("up-load",{attrs:{uploadTitle:"点击上传附件"},model:{value:e.ruleForm.attaFile,callback:function(t){e.$set(e.ruleForm,"attaFile",t)},expression:"ruleForm.attaFile"}}):e._e()],1)],1)])],1),e._v(" "),a("div",{staticClass:"submit"},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.submitForm("ruleForm","save")}}},[e._v(e._s(e.isAddOrMOdify?"保存":"更新"))]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.submitForm("ruleForm","submit")}}},[e._v("提交")])],1)],1)],1)],1)},n=[],l=(a("c5f6"),a("ac6a"),a("f8f6")),r={components:{upLoad:l["default"]},computed:{isShowHuankuan:function(){return 1==this.ruleForm.useType},isShowHuankuanjihua:function(){return 2==this.ruleForm.useType}},data:function(){var e=this,t=function(e,t,a){""===t?a(new Error("请再次输入金额")):/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(t)?a():a(new Error("金额不符合规则"))};return{isAddOrMOdify:"",dialogFormVisible:!1,formLabelWidth:"120",vacationType:[],paymentTypeOptions:[],useTypeOptions:[],isEntryOptions:[],pickerOptions:{disabledDate:function(t){return e.dealDisabledDate(t)}},ruleForm:{paymentType:"",useType:"",borrowAmount:"",accountName:"",accountNum:"",openBank:"",attaFile:"",isEntry:"",backDt:"",borrowDesc:""},fixedData:{},rules:{paymentType:[{required:"true",message:"付款方式必填",trigger:"change"}],useType:[{required:"true",message:"用途必填",trigger:"change"}],borrowAmount:[{required:"true",validator:t,trigger:"blur"}],accountName:[{required:"true",message:"收款单位必填",trigger:"blur"}],accountNum:[{required:"true",message:"账号必填",trigger:"blur"}],openBank:[{required:"true",message:"开户行必填",trigger:"blur"}],borrowDesc:[{required:"true",message:"借款事由必填",trigger:"blur"}],backDt:[{required:"true",message:"还款计划必填",trigger:"blur"}],isEntry:[{required:"true",message:"是否入账必填",trigger:"change"}]}}},methods:{chufaTime:function(e){},dealDisabledDate:function(e){return this.fixedData.applyTimeLong>e},showDialog:function(e,t){var a=this;if(this.dialogFormVisible=!this.dialogFormVisible,this.$store.dispatch("caigoushenqing/commonTCodeGetCodeByParentId","11012").then(function(e){var t=[];e.data.options.forEach(function(e){var a={};a.label=e.label,a.value=Number(e.value),t.push(a)}),a.paymentTypeOptions=t}),this.$store.dispatch("caigoushenqing/commonTCodeGetCodeByParentId","11013").then(function(e){var t=[];e.data.options.forEach(function(e){var a={};a.label=e.label,a.value=Number(e.value),t.push(a)}),a.useTypeOptions=t}),this.$store.dispatch("caigoushenqing/commonTCodeGetCodeByParentId","102").then(function(e){var t=[];e.data.options.forEach(function(e){var a={};a.label=e.label,a.value=Number(e.value),t.push(a)}),a.isEntryOptions=t}),"111"==e){for(var i in this.ruleForm)this.$set(this.ruleForm,i,"");this.fixedData=t,this.isAddOrMOdify=!0}else"112"==e&&(null!==t[0].isEntry&&(this.ruleForm.isEntry=Number(t[0].isEntry),this.ruleForm.backDt=null,this.ruleForm.borrowDesc=null),null!==t[0].backDt&&(this.ruleForm.backDt=t[0].backDt,this.ruleForm.borrowDesc=t[0].borrowDesc,this.ruleForm.isEntry=null),this.fixedData.applyNo=t[0].applyNo,this.fixedData.applicantDepartment=t[0].applicantDepartment,this.fixedData.applyTime=t[0].applyTime,this.fixedData.applyTimeLong=t[0].applyTimeLong,this.fixedData.applicantName=t[0].applicantName,this.ruleForm.paymentType=Number(t[0].paymentType),this.ruleForm.useType=Number(t[0].useType),this.ruleForm.borrowAmount=t[0].borrowAmount,this.ruleForm.accountName=t[0].accountName,this.ruleForm.accountNum=t[0].accountNum,this.ruleForm.openBank=t[0].openBank,this.ruleForm.attaFile=null==t[0].attaFile?"":t[0].attaFile,this.isAddOrMOdify=!1);this.$nextTick(function(){a.$refs.ruleForm.clearValidate()})},submitForm:function(e,t){var a=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var i={};i.paymentType=a.ruleForm.paymentType,i.useType=a.ruleForm.useType,i.borrowAmount=a.ruleForm.borrowAmount,i.accountName=a.ruleForm.accountName,i.accountNum=a.ruleForm.accountNum,i.openBank=a.ruleForm.openBank,i.attaFile=a.ruleForm.attaFile,i.applyNo=a.fixedData.applyNo,1===a.ruleForm.useType?(i.isEntry=a.ruleForm.isEntry,i.borrowDesc="",i.backDt=""):2===a.ruleForm.useType?(i.isEntry="",i.borrowDesc=a.ruleForm.borrowDesc,i.backDt=a.ruleForm.backDt):3===a.ruleForm.useType&&(i.isEntry="",i.borrowDesc="",i.backDt=""),"submit"===t?a.$store.dispatch("applyBorrow/applyBorrowSubmit",i).then(function(e){"0"==e.status&&(a.$message.success("提交成功"),a.$emit("getTableList"),a.dialogFormVisible=!a.dialogFormVisible)}):a.$store.dispatch(a.isAddOrMOdify?"applyBorrow/applyBorrowAdd":"applyBorrow/applyBorrowUpdate",i).then(function(e){"0"==e.status&&(a.$message.success(a.isAddOrMOdify?"新增成功":"更新成功"),a.$emit("getTableList"),a.dialogFormVisible=!a.dialogFormVisible)})})}}},o=r,s=(a("7377"),a("2877")),u=Object(s["a"])(o,i,n,!1,null,null,null);t["default"]=u.exports},c40f:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detail"},[a("el-dialog",{attrs:{title:"详情页",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",e._l(e.data,function(t,i,n){return a("el-col",{key:n,attrs:{span:12}},[a("div",{staticClass:"left"},[e._v("\n            "+e._s(e._f("getTitle")(i))+"\n        ")]),e._v(" "),a("div",{staticClass:"right"},[e._v("\n            "+e._s(t)+"\n        ")])])}),1),e._v(" "),a("el-row",{staticStyle:{borderTop:"0"}},[a("el-col",{staticStyle:{height:"auto"},attrs:{span:12}},[a("div",{staticClass:"left"},[e._v("\n            附件\n        ")]),e._v(" "),a("div",{staticClass:"right"},[e.dialogFormVisible?a("up-load",{attrs:{hiddenUpload:!0},model:{value:e.fileToken,callback:function(t){e.fileToken=t},expression:"fileToken"}}):e._e()],1)])],1)],1)],1)},n=[],l=a("f8f6"),r={components:{upLoad:l["default"]},filters:{getTitle:function(e){return"applicantDepartment"==e?"所在的部门":"applicantName"==e?"姓名":"applyName"==e?"会议名称":"applyNo"==e?"表单号":"applyStatus"==e?"状态":"applyTime"==e?"申请日期":"applyTime"==e?"申请日期":"backDt"==e?"还款计划":"borrowAmount"==e?"金额":"borrowDesc"==e?"借款事由":"isEntry"==e?"款项已入账":"openBank"==e?"开户行":"paymentTypeName"==e?"付款方式":"useTypeName"==e?"用途":void 0}},data:function(){return{dialogFormVisible:!1,data:{},fileToken:""}},methods:{showDialog:function(e){this.dialogFormVisible=!this.dialogFormVisible,this.data={},this.data.applicantDepartment=e[0].applicantDepartment,this.data.applicantName=e[0].applicantName,this.data.applyNo=e[0].applyNo,this.data.applyStatus=e[0].applyStatus,this.data.applyTime=e[0].applyTime,this.data.borrowAmount=e[0].borrowAmount,this.data.openBank=e[0].openBank,this.data.paymentTypeName=e[0].paymentTypeName,this.data.useTypeName=e[0].useTypeName,null!==e[0].isEntry&&(this.data.isEntry=e[0].isEntry),null!==e[0].backDt&&(this.data.backDt=e[0].backDt,this.data.borrowDesc=e[0].borrowDesc),this.fileToken=null==e[0].attaFile?"":e[0].attaFile}}},o=r,s=a("2877"),u=Object(s["a"])(o,i,n,!1,null,null,null);t["default"]=u.exports},f8f6:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"upload-box"},[e.hiddenUpload?a("div",{staticClass:"fileView"},e._l(e.fileList,function(t){return a("h3",{key:t.uid},[a("a",{attrs:{href:e.contextPath+"attachController/download?fileId="+t.uid,target:"_blank"}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.hiddenUpload?e._e():a("div",{staticClass:"el-upload-box"},[a("el-upload",{ref:"upload",attrs:{action:e.updatePath,"auto-upload":!0,name:e.upLoadName,data:e.extraData,"file-list":e.fileList,accept:e.acceptFormat,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-error":e.handleError,"on-change":e.handleChange,"before-remove":e.beforeRemove,"before-upload":e.beforeUpload}},[a("el-button",{class:{active:e.hiddenUpload},attrs:{size:e.size,type:"primary"}},[e._v(e._s(e.uploadTitle))]),e._v(" "),e.isShowTip?a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.TipTitle))]):e._e()],1)],1)])},n=[],l=(a("28a5"),a("7f7f"),a("c5f6"),a("bc3a")),r=a.n(l),o={name:"GuluUpload",model:{prop:"value",event:"update-value"},props:{value:[String],isShowTip:{type:Boolean,default:!1},hiddenUpload:{type:Boolean,default:!1},tipTitle:{type:String,default:"只能上传jpg / png文件， 且不超过500kb"},uploadTitle:{type:String,default:"点击上传"},limit:{type:Number,default:1},extraData:{type:Object,default:function(){return{bizTableName:"",bizTablePk:"",fieldName:""}}},size:{type:String,default:"small"},upLoadName:{type:String,default:"file"},contextPath:{type:String,default:"/oa-web/"},acceptFormat:{type:String,default:".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.rp,.vsd"}},data:function(){return{updatePath:this.contextPath+"attachController/upload?fieldToken="+this.value,fileList:[]}},created:function(){var e=this;setTimeout(function(){e.$nextTick(function(){e.updatePath=e.contextPath+"attachController/upload?fieldToken="+e.value,e.getFileData()})},500)},methods:{getFileData:function(){var e=this,t=this.value;""!=t&&null!=t||(t="-1"),r()({url:this.contextPath+"attachController/getFileList?fieldToken="+t,method:"get"}).then(function(t){"0"===t.data.status?t.data.data.fileList&&e.$nextTick(function(){e.fileList=t.data.data.fileList,0==e.fileList.length&&e.$emit("update-value","")}):e.$message({type:"info",duration:1e3,message:t.data.msg})})},beforeUpload:function(e){},handleChange:function(e,t){var a=e.name.substring(e.name.lastIndexOf(".")+1),i="rp"===a,n="vsd"===a;(i||n)&&(this.$message({message:"上传文件不能是 rp 、vsd 格式!",type:"warning"}),this.$refs.upload.clearFiles())},handleExceed:function(e,t){this.$message.warning("当前限制选择 ".concat(e.length," 个文件，本次选择了 ").concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},handleRemove:function(e,t){var a=this;r()({url:this.contextPath+"attachController/delete?fileId="+e.uid,method:"get"}).then(function(e){"0"===e.data.status&&0==t.length&&a.$emit("update-value","")})},handleError:function(e,t,a){},handleSuccess:function(e,t,a){var i=e.data.fieldToken;void 0==i&&(i=this.value);var n=this.updatePath.split("=");""!=n[1]&&""==i&&(i=n[1]),this.updatePath=this.contextPath+"attachController/upload?fieldToken="+i,this.$emit("update-value",i)},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},handlePreview:function(e){window.open(this.contextPath+"attachController/download?fileId="+e.uid)}}},s=o,u=(a("3a21"),a("2877")),c=Object(u["a"])(s,i,n,!1,null,"087933ee",null);t["default"]=c.exports}}]);