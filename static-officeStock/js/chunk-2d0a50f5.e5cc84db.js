(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a50f5"],{"08a8":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"detail"},[e("el-dialog",{attrs:{title:"详情页",visible:a.dialogFormVisible},on:{"update:visible":function(t){a.dialogFormVisible=t}}},[e("el-row",a._l(a.data,function(t,i,l){return e("el-col",{key:l,attrs:{span:12}},[e("div",{staticClass:"left"},[a._v(a._s(a._f("getTitle")(i)))]),a._v(" "),e("div",{staticClass:"right"},[a._v(a._s(t))])])}),1),a._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"left"},[a._v("采购要求说明")]),a._v(" "),e("div",{staticClass:"right"},[a._v(a._s(a.remark))])])],1)],1)],1)},l=[],s={filters:{getTitle:function(a){return"applicantDepartment"==a?"所在的部门":"applicantName"==a?"姓名":"applyName"==a?"会议名称":"applyNo"==a?"表单号":"applyStatusName"==a?"状态":"applyTime"==a?"申请日期":"remark"==a?"备注":"patentName"==a?"固定资产分类":"itemName"==a?"采购种类":"applyAmount"==a?"采购数量":void 0}},data:function(){return{dialogFormVisible:!1,data:{},fileToken:"",officePurchaseVOS:[],remark:"",totalMoney:""}},methods:{showDialog:function(a){this.dialogFormVisible=!this.dialogFormVisible,this.data.applicantDepartment=a[0].applicantDepartment,this.data.applicantName=a[0].applicantName,this.data.applyStatusName=a[0].applyStatusName,this.data.applyNo=a[0].applyNo,this.data.applyTime=a[0].applyTime,this.data.patentName=a[0].patentName,this.data.itemName=a[0].itemName,this.data.applyAmount=a[0].applyAmount,this.remark=a[0].remark}}},p=s,n=e("2877"),o=Object(n["a"])(p,i,l,!1,null,null,null);t["default"]=o.exports}}]);