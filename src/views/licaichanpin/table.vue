<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="70"></el-table-column>
      <el-table-column prop="buyNo" label="购买编号"></el-table-column>
      <el-table-column prop="financialNo" label="理财产品编号(银行)"></el-table-column>
      <el-table-column prop="productName" label="理财产品名称"></el-table-column>
      <el-table-column prop="daysNum" label="期限（天）"></el-table-column>
      <el-table-column prop="expectEarn" label="预计收益率%"></el-table-column>
      <el-table-column prop="startDt" label="起息日"></el-table-column>
      <el-table-column prop="applyStatusName" label="状态"></el-table-column>
      <el-table-column label="操作" width='80'>
         <template slot-scope="scope">
           <div v-if="scope.row.applyStatus === '4'"> 
            <el-button @click="shuhu(scope.row)" type="text" size="small" :disabled="scope.row.isBack === 2">赎回</el-button>
            <!-- <el-button type="text" size="small" @click="xiangqing(scope.row)">详情</el-button> -->
            </div>
         </template>
      </el-table-column>
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
        .dispatch("licaichanpin/applyFinancialList", this.queryParams)
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
    },
    shuhu(value){
        this.$emit('shuhu',value)
    },
    xiangqing(value){
      this.$emit('xiangqing',value)
    }
  }
};
</script>