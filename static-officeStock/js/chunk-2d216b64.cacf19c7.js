(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216b64"],{c441:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applyNo",label:"申请单号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applicantDepartment",label:"申请部门"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applicantName",label:"申请人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applyTime",label:"申请日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"outStartTime",label:"开始时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"outEndTime",label:"结束时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"destination",label:"外出地点"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reason",label:"事由"}}),t._v(" "),a("el-table-column",{attrs:{prop:"returnTime",label:"归来时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applyStatusName",label:"状态"}})],1),t._v(" "),a("div",[a("el-pagination",{attrs:{"current-page":t.queryParams.currPage,background:"",small:"","page-sizes":[10,20,30,40],layout:" prev, pager, next,total ,sizes ,jumper",total:t.totalPage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},n=[],r={props:{queryParams:{type:Object,required:!0}},data:function(){return{tableData:[],totalPage:0}},mounted:function(){this.getTableList()},methods:{getTableList:function(){var t=this;this.$store.dispatch("applyOut/applyOutList",this.queryParams).then(function(e){t.tableData=e.data,t.totalPage=e.totalCount,t.$parent.allItem=t.totalPage})},handleSizeChange:function(t){this.queryParams.pageSize=t,this.getTableList()},handleCurrentChange:function(t){this.queryParams.currPage=t,this.getTableList()},handleSelectionChange:function(t){this.$emit("transferSelectItem",t)}}},o=r,s=a("2877"),i=Object(s["a"])(o,l,n,!1,null,null,null);e["default"]=i.exports}}]);