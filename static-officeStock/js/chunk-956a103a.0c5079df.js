(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-956a103a"],{"52d8":function(e,t,i){"use strict";var r=i("e781"),a=i.n(r);a.a},"5ba4":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"addOrModify"},[i("el-dialog",{attrs:{title:e.isAddOrMOdify?"库存管理新增":"库存管理编辑",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-dialog",{attrs:{width:"80%",title:"选择采购单",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[i("div",{staticClass:"table"},[i("div",{staticStyle:{marginBottom:"10px"}},[i("el-button",{attrs:{size:"small",type:"danger",disabled:1!=e.selectItem.length},on:{click:e.determine}},[e._v("确定")])],1),e._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.innerTableData},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"70"}}),e._v(" "),i("el-table-column",{attrs:{prop:"patentName",label:"固定资产分类"}}),e._v(" "),i("el-table-column",{attrs:{prop:"itemName",label:"物品种类"}}),e._v(" "),i("el-table-column",{attrs:{prop:"unitPrice",label:"单价(元)"}}),e._v(" "),i("el-table-column",{attrs:{prop:"applyAmount",label:"数量"}})],1),e._v(" "),i("div",[i("el-pagination",{attrs:{"current-page":e.queryParams.currPage,background:"",small:"",layout:" prev, next,total ,sizes ,jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),i("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"固定资产分类",prop:"patentId"}},[i("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){e.ruleForm.itemId=""}},model:{value:e.ruleForm.patentId,callback:function(t){e.$set(e.ruleForm,"patentId",t)},expression:"ruleForm.patentId"}},e._l(e.fixOptions,function(e){return i("el-option",{key:e.itemId,attrs:{label:e.itemName,value:e.itemId}})}),1)],1)],1)]),e._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"物品种类",prop:"itemId"}},[i("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeFn},model:{value:e.ruleForm.itemId,callback:function(t){e.$set(e.ruleForm,"itemId",t)},expression:"ruleForm.itemId"}},e._l(e.itemIdOptions,function(e){return i("el-option",{key:e.itemId,attrs:{label:e.itemName,value:e.itemId}})}),1),e._v(" "),i("el-button",{attrs:{size:"mini",type:"danger",disabled:""===e.ruleForm.itemId},on:{click:e.associated}},[e._v("关联采购单")])],1)],1)])],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple-light"},[i("el-form-item",{attrs:{label:"数量"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.ruleForm.amount,callback:function(t){e.$set(e.ruleForm,"amount",t)},expression:"ruleForm.amount"}})],1)],1)]),e._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"单价(元)"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.ruleForm.unitPrice,callback:function(t){e.$set(e.ruleForm,"unitPrice",t)},expression:"ruleForm.unitPrice"}})],1)],1)])],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content bg-purple"},[i("el-form-item",{attrs:{label:"入库时间"}},[i("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.ruleForm.scrapDt,callback:function(t){e.$set(e.ruleForm,"scrapDt",t)},expression:"ruleForm.scrapDt"}})],1)],1)])],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"grid-content bg-purple fujian"},[i("el-form-item",{attrs:{label:"编号"}},[i("div",{staticClass:"banhaoNumber"},e._l(e.bianhaoOptions,function(t,r){return i("el-input",{key:r,model:{value:t.label,callback:function(i){e.$set(t,"label",i)},expression:"item.label"}})}),1)])],1)])],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"grid-content bg-purple fujian"},[i("el-form-item",{attrs:{label:"备注"}},[i("div",[i("el-input",{attrs:{type:"textarea",rows:"3",cols:"110"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1)])],1)])],1),e._v(" "),i("div",{staticClass:"submit"},[e.isAddOrMOdify?i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.submitForm("ruleForm","save")}}},[e._v("保存")]):e._e(),e._v(" "),e.isAddOrMOdify?e._e():i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.submitForm("ruleForm","update")}}},[e._v("更新")]),e._v(" "),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.submitForm("ruleForm","submit")}}},[e._v("提交")])],1)],1)],1)],1)},a=[],l=(i("28a5"),i("c5f6"),i("ac6a"),{computed:{itemIdOptions:function(){var e=this,t=[];return this.fixOptions.forEach(function(i){i.itemId===e.ruleForm.patentId&&(t=i.itemList)}),t}},data:function(){return{fixOptions:[],totalPage:0,isAddOrMOdify:"",dialogFormVisible:!1,innerVisible:!1,innerTableData:[],formLabelWidth:"120",bianhaoOptions:[],unitOptions:[],selectItem:[],queryParams:{currPage:1,pageSize:5,itemId:""},fixedData:[],ruleForm:{patentId:"",itemId:"",unitPrice:"",scrapDt:"",goodsnumber:"",purchaseId:"",remark:"",amount:""},rules:{patentId:[{required:"true",message:"固定资产分类必填",trigger:"change"}],itemId:[{required:"true",message:"物品种类必填",trigger:"change"}],model:[{required:"true",message:"型号必填",trigger:"change"}],label:[{required:"true",message:"编号必填",trigger:"change"}],applyAmount:[{required:"true",message:"数量必填",trigger:"change"}]}}},methods:{changeFn:function(e){this.ruleForm.unitPrice="",this.ruleForm.model="",this.ruleForm.amount=0},handleSelectionChange:function(e){this.selectItem=e},determine:function(){this.ruleForm.unitPrice=this.selectItem[0].unitPrice,this.ruleForm.amount=this.selectItem[0].applyAmount,this.ruleForm.purchaseId=this.selectItem[0].purchaseId;for(var e=[],t=1;t<=Number(this.selectItem[0].applyAmount);t++){var i={label:""};i.val=t,e.push(i)}this.bianhaoOptions=e,this.innerVisible=!this.innerVisible},handleSizeChange:function(){},handleCurrentChange:function(){},associated:function(){var e=this;this.queryParams.itemId=this.ruleForm.itemId,this.$store.dispatch("kucunguanliFix/assetsStockPurchaselist",this.queryParams).then(function(t){e.totalPage=t.totalCount,e.innerTableData=t.data}),this.innerVisible=!this.innerVisible},showDialog:function(e,t){var i=this;if(this.dialogFormVisible=!this.dialogFormVisible,this.$store.dispatch("officeStock/selectItemList",{classify:1}).then(function(e){i.fixOptions=e.data}),"111"===e)this.ruleForm.patentId="",this.ruleForm.itemId="",this.ruleForm.unitPrice="",this.ruleForm.scrapDt="",this.ruleForm.goodsnumber="",this.ruleForm.purchaseId="",this.ruleForm.remark="",this.ruleForm.amount="",this.fixedData=t,this.bianhaoOptions=[],this.isAddOrMOdify=!0;else if("112"===e){this.ruleForm=t[0],this.ruleForm.itemId=Number(t[0].itemId),this.fixedData.applyNo=t[0].applyNo;var r=[];if(""==t[0].goodsnumber||null==t[0].goodsnumber)return;t[0].goodsnumber.split(",").forEach(function(e,t){var i={};i.label=e,i.value=t,r.push(i)}),this.bianhaoOptions=r,this.isAddOrMOdify=!1}this.$nextTick(function(){i.$refs.ruleForm.clearValidate()})},submitForm:function(e,t){var i=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var r={},a=[];i.bianhaoOptions.forEach(function(e){a.push(e.label)}),i.ruleForm.goodsnumber=a.join(","),r=i.ruleForm,r.applyNo=i.fixedData.applyNo,"submit"===t?i.$store.dispatch("kucunguanliFix/assetsStockConditionProcessSubmit",r).then(function(e){"0"===e.status&&(i.$message.success("提交成功"),i.$emit("getTableList"),i.dialogFormVisible=!i.dialogFormVisible)}):i.$store.dispatch(i.isAddOrMOdify?"kucunguanliFix/assetsStockAddStock":"kucunguanliFix/assetsStockUpdate",r).then(function(e){"0"===e.status&&(i.$message.success(i.isAddOrMOdify?"新增成功":"更新成功"),i.$emit("getTableList"),i.dialogFormVisible=!i.dialogFormVisible)})})}}}),s=l,n=(i("52d8"),i("2877")),o=Object(n["a"])(s,r,a,!1,null,null,null);t["default"]=o.exports},e781:function(e,t,i){}}]);