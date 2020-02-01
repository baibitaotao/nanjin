<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="70"></el-table-column>
       <el-table-column prop="patentName" label="办公用品类别"></el-table-column>
      <el-table-column prop="itemName" label="产品名称"></el-table-column>
      <el-table-column prop="unitPrice" label="单价(元)">
        <template slot-scope="scope">
           {{scope.row.unitPrice}}
        </template>
      </el-table-column>
      <el-table-column prop="amount" label="数量">
          <template slot-scope="scope">
           {{scope.row.applyNumber}}
          ({{scope.row.unitName}})
        </template>
      </el-table-column>
       <el-table-column prop="putInTime" label="入库时间"></el-table-column>
    </el-table>
    <div>
      <el-pagination
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page="queryParams.currPage"
        small
        :page-sizes="[10, 20, 30, 40]"
        layout=" prev, pager, next,total,sizes ,jumper"
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
        .dispatch("officeStock/officeStockList", this.queryParams)
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