(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d36c3"],{"5d64":function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"70"}}),t._v(" "),e("el-table-column",{attrs:{prop:"applyNo",label:"申请单号"}}),t._v(" "),e("el-table-column",{attrs:{prop:"applyTime",label:"申请日期"}}),t._v(" "),e("el-table-column",{attrs:{prop:"vacationTypeName",label:"请假类型"}}),t._v(" "),e("el-table-column",{attrs:{prop:"vacationStartTime",label:"开始时间"}}),t._v(" "),e("el-table-column",{attrs:{prop:"vacationEndTime",label:"结束时间"}}),t._v(" "),e("el-table-column",{attrs:{prop:"vacationLength",label:"请假时长"}}),t._v(" "),e("el-table-column",{attrs:{prop:"reason",label:"事由"}}),t._v(" "),e("el-table-column",{attrs:{prop:"returnTime",label:"归来时间"}}),t._v(" "),e("el-table-column",{attrs:{prop:"applyStatusName",label:"状态"}})],1),t._v(" "),e("div",[e("el-pagination",{attrs:{"current-page":t.queryParams.currPage,background:"",small:"","page-sizes":[10,20,30,40],layout:" prev, pager, next,total ,sizes ,jumper",total:t.totalPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},n=[],r={props:{queryParams:{type:Object,required:!0}},data:function(){return{tableData:[],totalPage:0}},mounted:function(){this.getTableList()},methods:{getTableList:function(){var t=this;this.$store.dispatch("applyVacation/applyVacationList",this.queryParams).then(function(a){t.tableData=a.data,t.totalPage=a.totalCount,t.$parent.allItem=t.totalPage})},handleSizeChange:function(t){this.queryParams.pageSize=t,this.getTableList()},handleCurrentChange:function(t){this.queryParams.currPage=t,this.getTableList()},handleSelectionChange:function(t){this.$emit("transferSelectItem",t)}}},o=r,i=e("2877"),s=Object(i["a"])(o,l,n,!1,null,null,null);a["default"]=s.exports}}]);