<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="70"></el-table-column>
      <!-- <el-table-column prop="applyName" label="申请标题"></el-table-column> -->
      <el-table-column prop="applyNo" label="申请单号"></el-table-column>
      <el-table-column prop="applicantDepartment" label="申请部门"></el-table-column>
      <el-table-column prop="applicantName" label="申请人"></el-table-column>
      <el-table-column prop="applyTime" label="申请日期"></el-table-column>

      <el-table-column prop="patentName" label="办公用品类别" width="130"></el-table-column>
      <el-table-column prop="itemName" label="产品名称"></el-table-column>
      <el-table-column prop="useAmount" label="申请数量"></el-table-column>
      <el-table-column prop="applyStatusName" label="状态"></el-table-column>
    </el-table>
    <div>
      <el-pagination
       @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryParams.currPage"
        small
        :page-sizes="[10, 20, 30, 40]"
        layout=" prev, pager, next,total ,sizes ,jumper"
        :total="totalPage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    queryParams: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tableData: [],
      totalPage: 0,
    };
  },
  mounted() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      this.$store
        .dispatch("useController/officeUseList", this.queryParams)
        .then(res => {
          this.tableData = res.data;
          this.totalPage = res.totalCount;
          this.$parent.allItem = this.totalPage;
        });
    },
    handleSizeChange(value){
      this.queryParams.pageSize = value;
      this.getTableList();
    },
    handleCurrentChange(value) {
      this.queryParams.currPage = value;
      this.getTableList();
    },
    handleSelectionChange(value){
      this.$emit('transferSelectItem',value)
    }
  }
};
</script>