<template>
  <div class="addOrModify">
    <el-dialog title="采购申请新增" :visible.sync="dialogFormVisible">
      <el-form>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="申请单号">
                <el-input v-model="fixedData.applyNo" :disabled="true" size="small" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="申请部门">
                <el-input v-model="fixedData.applicantDepartment" :disabled="true" size="small" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="申请人">
                <el-input v-model="fixedData.applicantName" :disabled="true" size="small" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="申请日期">
                <el-input v-model="fixedData.applyTime" :disabled="true" size="small" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row class="vacationTime">
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="总金额">
                <el-input :value="totalMoney" :disabled="true" size="small" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="备注" prop="reason">
                <el-input v-model="fixedData.remark" type="textarea" rows="3" cols="110" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <div style="marginTop:10px">
        <el-button type="danger" size="mini" @click="add">新增</el-button>
      </div>
      <el-form ref="applyRule" :model="ruleForm" :rules="rules" style="marginTop:10px">
        <el-table :data="applyTableData" border style="width: 100%">
          <el-table-column type="selection" width="70" />

          <el-table-column label="办公用品类别">
            <template slot-scope="scope">
              <el-select
                v-model="scope.row.patentId"
                placeholder="请选择"
                @change="secondChange(scope.row)"
              >
                <el-option
                  v-for="item in secondOptions"
                  :key="item.itemId"
                  :label="item.itemName"
                  :value="item.itemId"
                />
              </el-select>
            </template>
          </el-table-column>

          <el-table-column label="产品名称">
            <template slot-scope="scope">
              <el-select v-model="scope.row.itemId" placeholder="请选择">
                <el-option
                  v-for="item in productName(scope.row.patentId,scope.row)"
                  :key="item.itemId"
                  :label="item.itemName"
                  :value="item.itemId"
                />
              </el-select>
            </template>
          </el-table-column>

          <el-table-column label="单位">
            <template slot-scope="scope">
              <el-input :value="whichUnit(scope.row)" :disabled="true" />
            </template>
          </el-table-column>

          <el-table-column label="库存数量">
            <template slot-scope="scope">
              <el-input :disabled="true" :value="kucunAmount(scope.row)" />
            </template>
          </el-table-column>

          <el-table-column label="申请数量">
            <template slot-scope="scope">
              <el-input type="number" v-model="scope.row.applyNumber" />
            </template>
          </el-table-column>
          <el-table-column label="单价">
            <template slot-scope="scope">
              <el-input v-model="scope.row.unitPrice" type="number" />
            </template>
          </el-table-column>
          <el-table-column label="金额">
            <template slot-scope="scope">
              <el-input :disabled="true" :value="calculateMoney(scope.row)" />
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="mini" @click="del(scope.row)" style="color:#980004">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form>

      <div class="submit">
        <el-button
          type="danger"
          size="mini"
          @click="submitForm('ruleForm','save')"
          v-if="isAddOrMOdify"
        >保存</el-button>
        <el-button
          type="danger"
          size="mini"
          @click="submitForm('ruleForm','update')"
          v-if="!isAddOrMOdify"
        >更新</el-button>
        <el-button
          type="danger"
          size="mini"
          @click="submitForm('ruleForm','submit')"
          :disabled="isForbiden"
        >提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isForbiden: false,
      totalMoney: 0,
      applyTableData: [],
      isAddOrMOdify: "",
      dialogFormVisible: false,
      formLabelWidth: "120",
      secondOptions: [],
      unitOptions: [],
      ruleForm: {
        applyName: "",
        attachment: "",
        vacationTime: [],
        reason: ""
      },
      fixedData: {
        remark: ""
      },
      rules: {
        vacationTime: [
          {
            required: "true",
            message: "请假时间必填",
            trigger: "change"
          }
        ],
        applyName: [
          {
            required: "true",
            message: "请假标题",
            trigger: "change"
          }
        ],
        reason: [
          {
            required: "true",
            message: "请假事由必填",
            trigger: "blur"
          }
        ]
      },
      newId: 0
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
    whichUnit(val) {
      let unitName = "";
      let unit = ''
      if (val.itemId !== "" && val.patentId !== "") {
        this.secondOptions.forEach(el => {
          if (el.itemId === val.patentId) {
            el.itemList.forEach(item => {
              if (item.itemId === val.itemId) {
                unit = item.unit;
                unitName = item.unitName;
              }
            });
          }
        });
      } else {
        unit = ''
        unitName = "";
      }
      val.unit = unit
      return unitName;
    },
    showDialog(val, item) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.isForbiden = false;
      this.$store
        .dispatch("officeStock/selectItemList", { classify: 0 })
        .then(res => {
          this.secondOptions = res.data;
        });
      this.$store
        .dispatch("officeStock/commonTCodeGetCodeByParentIdVal", "11002")
        .then(res => {
          const arr = [];
          res.data.options.forEach(el => {
            const obj = {};
            obj.value = Number(el.value);
            obj.label = el.label;
            arr.push(obj);
          });
          this.unitOptions = arr;
        });

      if (val === "111") {
        this.fixedData.applyNo = item.applyNo;
        this.fixedData.applicantDepartment = item.applicantDepartment;
        this.fixedData.applyTime = item.applyTime;
        this.fixedData.applicantName = item.applicantName;
        this.fixedData.remark = "";
        this.applyTableData = [];

        this.isAddOrMOdify = true;
      } else if (val === "112") {
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;
        this.fixedData.remark = item[0].remark;
        let arr = [];
        item[0].officePurchaseVOS.forEach(el => {
          let obj = {};
          obj.newId = ++this.newId;
          obj.patentId = el.patentId;
          obj.itemId = el.itemId;
          obj.applyNumber = el.applyNumber;
          obj.unitPrice = el.unitPrice;
          arr.push(obj);
        });
        this.applyTableData = arr;
        this.isAddOrMOdify = false;
      }
    },

    submitForm(formName, val) {
      let swatch = true;
      if (this.applyTableData.length === 0)
        return this.$message.warning("申请产品不能为空!");
      this.applyTableData.forEach(el => {
        for (const key in el) {
          if (el[key] === "") {
            swatch = false;
            return this.$message.warning("申请产品参数存在空值!");
          }
        }
      });
      if (!swatch) return;

      const params = {};
      params.applyNo = this.fixedData.applyNo;
      params.remark = this.fixedData.remark;
      params.officePurchaseDTOS = this.applyTableData;
      if (val === "save") {
        this.$store
          .dispatch("assetsUse/officePurchaseAdd", params)
          .then(res => {
            if (res.status === "0") {
              this.$message.success("新增成功!");
              this.dialogFormVisible = !this.dialogFormVisible;
              this.$emit("getTableList");
            }
          });
      } else if (val === "update") {
        this.$store
          .dispatch("assetsUse/officePurchaseUpdate", params)
          .then(res => {
            if (res.status === "0") {
              this.$message.success("更新成功!");
              this.dialogFormVisible = !this.dialogFormVisible;
              this.$emit("getTableList");
            }
          });
      } else if (val === "submit") {
        this.isForbiden = true;
        this.$store
          .dispatch("assetsUse/officePurchaseConditionProcessSubmit", params)
          .then(res => {
            if (res.status === "0") {
              this.$message.success("提交成功!");
            }
          })
          .finally(res => {
            this.dialogFormVisible = !this.dialogFormVisible;
            this.$emit("getTableList");
            this.isForbiden = false;
          });
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
      const obj = {};
      obj.newId = ++this.newId;
      obj.patentId = "";
      obj.itemId = "";
      obj.applyNumber = "";
      obj.unitPrice = "";
      this.applyTableData.push(obj);
    },
    productName(val, row) {
      let arr = [];
      this.secondOptions.forEach(el => {
        if (val === el.itemId) {
          arr = el.itemList;
        }
      });
      return arr;
    },
    getVal(val, row) {
      if (Number(val) > this.kucunAmount(row)) {
        this.$message.error("申请数量不能大于库存数量!");
        row.applyNumber = "";
      }
    },
    calculateMoney(row) {
      let val = "";
      if (row.unitPrice !== "") {
        val = row.applyNumber * Number(row.unitPrice);
      }
      return val;
    },
    kucunAmount(val) {
      let amount = "";
      if (val.itemId !== "" && val.patentId !== "") {
        this.secondOptions.forEach(el => {
          if (el.itemId === val.patentId) {
            el.itemList.forEach(item => {
              if (item.itemId === val.itemId) {
                amount = item.stockAmount;
              }
            });
          }
        });
      } else {
        amount = "";
      }
      return amount;
    },
    secondChange(row) {
      row.itemId = "";
      row.applyNumber = "";
      row.unitPrice = "";
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
