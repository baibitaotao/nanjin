<template>
  <div class="addOrModify">
    <el-dialog :title="isAddOrMOdify?'库存新增':'详情页'" :visible.sync="dialogFormVisible">
      <div style="marginTop:10px">
        <el-button type="danger" size="mini" @click="add" 
         :disabled="setStatus('multi')"
        >入库</el-button>
      </div>
      <el-form ref="applyRule" :model="ruleForm" :rules="rules" style="marginTop:10px">
        <el-table :data="applyTableData" border style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="70" v-if="!isAddOrMOdify"></el-table-column>
          <el-table-column type="selection" width="70" v-if="isAddOrMOdify"></el-table-column>
          <el-table-column prop="patentName" label="办公用品类别"></el-table-column>
          <el-table-column prop="itemName" label="产品名称"></el-table-column>
          <el-table-column prop="unitName" label="单位"></el-table-column>
          <el-table-column prop="applyTime" label="申请日期" v-if="isAddOrMOdify"></el-table-column>
          <el-table-column prop="applyNumber" label="申请数量"></el-table-column>
        </el-table>
      </el-form>

      <div class="submit">
        <el-button
          type="danger"
          size="mini"
          @click="dialogFormVisible = !dialogFormVisible"
        >取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalMoney: 0,
      applyTableData: [],
      isAddOrMOdify: "",
      dialogFormVisible: false,
      formLabelWidth: "120",
      secondOptions: [],
      ruleForm: {
        applyNo: ""
      },
      fixedData: {
        remark: ""
      },
      rules: {},
      newId: 0,
      seletedItem: [],
    };
  },
  watch: {
    applyTableData: {
      handler(val, oldval) {
        const arr = [];
        let sum = 0;
        val.forEach(el => {
          if (el.applyNumber !== "" && el.unitPrice !== "") {
            arr.push(el);
          }
        });
        arr.forEach(el => {
          sum = sum + el.applyNumber * el.unitPrice;
        });
        this.totalMoney = sum;
      },
      deep: true
    }
  },
  methods: {
    showDialog(val, item) {
      this.dialogFormVisible = !this.dialogFormVisible;
   

      if (val === "111") {
        this.ruleForm.applyNo = item;
        this.applyTableData = [];

        this.$store.dispatch("officeStock/officeStockModelList").then(res => {
        this.applyTableData = res.data;
      });

        this.isAddOrMOdify = true;
      } else if (val === "112") {
        this.applyTableData = item 
        this.isAddOrMOdify = false;
      }
    },
    del(val) {
      this.applyTableData.forEach((el, index) => {
        if (el.newId === val.newId) {
          this.applyTableData.splice(index, 1);
          return this.$message.success("已删除");
        }
      });
    },
    add() {
      let params = {}
      params.applyNo = this.ruleForm.applyNo
      params.purchaseDTOS = this.seletedItem

      this.$store.dispatch('officeStock/officeStockAdd',params).then(res => {
        if(res.status === '0'){
            this.$message.success('入库成功!')
            this.dialogFormVisible = !this.dialogFormVisible
            this.$emit('getTableList')
        }
      })
    },
    handleSelectionChange(val){
      this.seletedItem = val
    },
    setStatus(val) {
      if (val == "single" || "") {
        if (this.seletedItem.length == 1) {
          return false;
        } else {
          return true;
        }
        return;
      } else if (val == "multi") {
        if (this.seletedItem.length >= 1) {
          return false;
        } else {
          return true;
        }
        return;
      } else if (val == "normal") {
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="scss">
.vacationTime {
  .el-form-item__label {
    height: 49px !important;
  }
  .el-form-item__error {
    position: absolute;
    left: 322px;
    top: 0px;
    background-color: #fff;
  }
  .addOrModify .el-col-24 {
    border-bottom: 0px !important;
  }
}

.waichureason {
  .el-form-item__error {
    position: absolute;
    left: 628px;
    top: 0;
    background-color: #fff;
  }
}
</style>
