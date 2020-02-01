<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="70"></el-table-column>
      <el-table-column prop="applyNo" label="请借款编号" width="200"></el-table-column>
      <el-table-column prop="applyTime" label="申请日期"></el-table-column>
      <el-table-column prop="paymentTypeName" label="付款方式"></el-table-column>
      <el-table-column prop="useTypeName" label="用途">
      <template slot-scope="scope">
        <span>{{scope.row.useTypeName + '-' + scope.row.useTypeName2}}</span>
      </template>
      </el-table-column>
      <el-table-column prop="borrowAmount" label="金额(元)" align='right'></el-table-column>
      <el-table-column prop="accountName" label="收款单位"></el-table-column>
      <el-table-column prop="backDt" label="计划还款时间"></el-table-column>

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
        .dispatch("applyBorrow/applyBorrowList", this.queryParams)
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