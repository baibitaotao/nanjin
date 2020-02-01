<template>
  <div class="addOrModify">
    <el-dialog :title="isAddOrMOdify?'报废新增':'报废编辑'" :visible.sync="dialogFormVisible">
      <el-dialog width="80%" title="选择采购单" :visible.sync="innerVisible" append-to-body>
        <div class="table">
          <div style="marginBottom:10px">
            <el-button
              size="small"
              type="danger"
              :disabled="selectItem.length == 1?false:true"
              @click="determine"
            >确定</el-button>
          </div>
          <el-table
            border
            :data="innerTableData"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="70" />
            <el-table-column prop="patentName" label="固定资产分类" />
            <el-table-column prop="itemName" label="物品种类" />
            <el-table-column prop="unitPrice" label="单价(元)" />
            <el-table-column prop="applyAmount" label="数量" />
          </el-table>
          <div>
            <el-pagination
              :current-page="queryParams.currPage"
              small
              layout=" prev, next,total ,sizes ,jumper"
              :total="totalPage"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </el-dialog>

      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="固定资产分类" prop="patentId">
                <el-select v-model="ruleForm.patentId" placeholder="请选择" @change="clear" size="small">
                  <el-option
                    v-for="item in fixOptions"
                    :key="item.itemId"
                    :label="item.itemName"
                    :value="item.itemId"
                  />
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="物品种类" prop="itemId">
                <el-select v-model="ruleForm.itemId" placeholder="请选择" @change="clearItem" size="small">
                  <el-option
                    v-for="item in itemIdOptions"
                    :key="item.itemId"
                    :label="item.itemName"
                    :value="item.itemId"
                  />
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <div class="baofeiStyle">
          <el-col :span="24">
            <div class="grid-content bg-purple fujian">
              <el-form-item label="编号" prop="numberId">
                <el-select
                  v-model="ruleForm.numberId"
                  multiple
                  collapse-tags
                  size="small"
                  placeholder="请选择"
                  @change="changeFn"
                >
                  <el-option
                    v-for="item in modelsOptions"
                    :key="item.numberId"
                    :label="item.goodsnumber"
                    :value="item.numberId"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          </div>
  
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple fujian">
              <el-form-item label="备注">
                <div>
                  <el-input
                    v-model="ruleForm.remark"
                    type="textarea"
                    rows="3"
                    cols="110"
                    size="small"
                  />
                </div>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

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
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    itemIdOptions() {
      let arr = [];
      this.fixOptions.forEach(el => {
        if (el.itemId === this.ruleForm.patentId) {
          arr = el.itemList;
        }
      });
      return arr;
    },
    itemId() {
      return this.ruleForm.itemId;
    }
  },
  watch: {
    itemId(val, oldVal) {
      this.modelsOptions = []
      this.$store
        .dispatch("kucunguanliFix/assetsStocSelectScrapList", { itemId: val })
        .then(res => {
          this.modelsOptions = res.data;
        });
    }
  },
  data() {
    return {
      isForbiden: false,
      selectData: "",
      fixOptions: [],
      modelsOptions: [],
      totalPage: 0,
      isAddOrMOdify: "",
      dialogFormVisible: false,
      innerVisible: false,
      innerTableData: [],
      formLabelWidth: "120",
      bianhaoOptions: [],
      unitOptions: [],
      selectItem: [],
      queryParams: {
        currPage: 1,
        pageSize: 5,
        itemId: ""
      },
      fixedData: [],
      ruleForm: {
        patentId: "",
        itemId: "",
        unitPrice: "",
        scrapDt: "",
        numberId: [],
        purchaseId: "",
        remark: "",
        amount: ""
      },
      rules: {
        patentId: [
          {
            required: "true",
            message: "固定资产分类必填",
            trigger: "change"
          }
        ],
        itemId: [
          {
            required: "true",
            message: "物品种类必填",
            trigger: "change"
          }
        ],
        numberId: [
          {
            required: "true",
            message: "型号必填",
            trigger: "change"
          }
        ],
        label: [
          {
            required: "true",
            message: "编号必填",
            trigger: "change"
          }
        ],
        applyAmount: [
          {
            required: "true",
            message: "数量必填",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    clearItem() {
      this.ruleForm.numberId = [];
    },
    clear() {
      this.ruleForm.itemId = "";
      this.ruleForm.numberId = [];
    },
    changeFn(val) {
      this.ruleForm.unitPrice = "";
      this.ruleForm.amount = 0;
    },
    handleSelectionChange(val) {
      this.selectItem = val;
    },
    determine() {
      this.ruleForm.unitPrice = this.selectItem[0].unitPrice;
      this.ruleForm.amount = this.selectItem[0].applyAmount;
      this.ruleForm.purchaseId = this.selectItem[0].purchaseId;
      const arr = [];
      for (let i = 1; i <= Number(this.selectItem[0].applyAmount); i++) {
        const obj = {};
        obj.label = "";
        obj.val = i;
        arr.push(obj);
      }
      this.bianhaoOptions = arr;
      this.innerVisible = !this.innerVisible;
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    associated() {
      this.queryParams.itemId = this.ruleForm.itemId;
      this.$store
        .dispatch("kucunguanliFix/assetsStockPurchaselist", this.queryParams)
        .then(res => {
          this.totalPage = res.totalCount;
          this.innerTableData = res.data;
        });
      this.innerVisible = !this.innerVisible;
    },
    showDialog(val, item) {
      this.isForbiden = false;
      this.dialogFormVisible = !this.dialogFormVisible;
      this.modelsOptions = []
      this.$store
        .dispatch("officeStock/selectItemList", { classify: 1 })
        .then(res => {
          this.fixOptions = res.data;
        });
      if (val === "117") {
        this.fixedData.applyNo = item.applyNo;
        this.ruleForm.patentId = "";
        this.ruleForm.itemId = "";
        this.ruleForm.unitPrice = "";
        this.ruleForm.scrapDt = "";
        this.ruleForm.numberId = [];
        this.ruleForm.purchaseId = "";
        this.ruleForm.remark = "";
        this.ruleForm.amount = "";
        this.stockId = "";

        this.isAddOrMOdify = true;
      } else if (val === "112") {
        this.fixedData.applyNo = item[0].applyNo;
        this.ruleForm.patentId = item[0].patentId;
        this.ruleForm.itemId = item[0].itemId;
        this.ruleForm.remark = item[0].remark;
        this.ruleForm.numberId = item[0].numberId;
        this.stockId = item[0].stockId;

        this.isAddOrMOdify = false;
      }
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },
    submitForm(formName, val) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {};
          params = this.ruleForm;
          params.applyNo = this.fixedData.applyNo;
          params.stockId = this.stockId;
          params.amount = this.ruleForm.numberId.length;
          if (val === "submit") {
            this.isForbiden = true;
            this.$store
              .dispatch("kucunguanliFix/submitScrap", params)
              .then(res => {
                if (res.status === "0") {
                  this.dialogFormVisible = !this.dialogFormVisible;
                }
              })
              .finally(res => {
                this.$message.success("提交成功");
                this.$emit("getTableList");
                this.isForbiden = false;
              });
          } else {
            this.$store
              .dispatch(
                this.isAddOrMOdify
                  ? "kucunguanliFix/addScrap"
                  : "kucunguanliFix/updateScrap",
                params
              )
              .then(res => {
                if (res.status === "0") {
                  this.$message.success(
                    this.isAddOrMOdify ? "新增成功" : "更新成功"
                  );
                  this.$emit("getTableList");
                  this.dialogFormVisible = !this.dialogFormVisible;
                }
              });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
  .baofeiStyle{
    .el-select__tags {
      transform: translate(14px,-8px)
    }

  }

.banhaoNumber {
  margin-left: -9px;
  width: 195px;
  .el-input {
    margin-bottom: 5px;
  }
}
.meetingTime {
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
