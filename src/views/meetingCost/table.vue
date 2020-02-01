<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="70"></el-table-column>
      <el-table-column prop="applyNo" label="申请单号"></el-table-column>
      <el-table-column prop="meetingName" label="会议名称"></el-table-column>
      <el-table-column prop="personCount" label="会议人数"></el-table-column>
      <el-table-column prop="meetingStartTime" label="会议开始时间"></el-table-column>
      <el-table-column prop="meetingEndTime" label="会议结束时间"></el-table-column>
      <el-table-column prop="meetingPlace" label="会议地点"></el-table-column>
      <el-table-column prop="meetingAmount" label="会议费用(元)"></el-table-column>
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
        .dispatch("meetingCost/meetingCostList", this.queryParams)
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