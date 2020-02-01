<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="70"></el-table-column>
      <el-table-column prop="projName" label="项目名称"></el-table-column>
      <!-- <el-table-column prop="recommendDt" label="推荐日期"></el-table-column> -->
      <el-table-column prop="applyTime" label="申请日期"></el-table-column>
      <el-table-column prop="percentage" label="提成比例(%)"></el-table-column>
      <el-table-column prop="awardAmount" label="金额(元)"></el-table-column>
      <el-table-column prop="recommenderName" label="市场信息推荐人"></el-table-column>
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
      totalPage: 0
    };
  },
  mounted() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      this.$store
        .dispatch("xiangmuzijin/capitalSettleList", this.queryParams)
        .then(res => {
          this.tableData = res.data;
          this.totalPage = res.totalCount;
          this.$parent.allItem = this.totalPage;
        });
    },
    handleSizeChange(value) {
      this.queryParams.pageSize = value;
      this.getTableList();
    },
    handleCurrentChange(value) {
      this.queryParams.currPage = value;
      this.getTableList();
    },
    handleSelectionChange(value) {
      this.$emit("transferSelectItem", value);
    }
  }
};
</script>