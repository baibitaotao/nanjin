<template>
  <div class="addOrModifyLC">
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
              <el-select
                v-model="ruleForm.patentId"
                placeholder="请选择"
                @change="ruleForm.itemId = ''"
                size="small"
              >
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
              <el-select
                v-model="ruleForm.itemId"
                placeholder="请选择"
                @change="changeFn"
                size="small"
              >
                <el-option
                  v-for="item in itemIdOptions"
                  :key="item.itemId"
                  :label="item.itemName"
                  :value="item.itemId"
                />
              </el-select>
              <el-button
                size="mini"
                type="danger"
                :disabled="ruleForm.itemId === ''?true:false"
                @click="associated"
              >关联采购单</el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-form-item label="数量">
              <el-input v-model="ruleForm.amount" :disabled="true" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="单价(元)">
              <el-input v-model="ruleForm.unitPrice" :disabled="true" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="入库时间">
              <el-date-picker
                v-model="ruleForm.scrapDt"
                type="date"
                size="small"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
              />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple fujian" style="width:100%">
            <el-form-item label="编号">
              <div class="banhaoNumber">
                <el-input
                  v-for="(item,index) in bianhaoOptions"
                  :key="index"
                  v-model="item.label"
                  size="small"
                />
              </div>
            </el-form-item>
          </div>
        </el-col>
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
    </el-form>
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
    }
  },
  data() {
    return {
      fixOptions: [],
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
        goodsnumber: "",
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
        model: [
          {
            required: "true",
            message: "型号必填",
            trigger: "change"
          }
        ],
        unitPrice: [
          {
            required: "true",
            message: "单价必填",
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
    changeFn(val) {
      this.ruleForm.unitPrice = "";
      this.ruleForm.model = "";
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
      this.dialogFormVisible = !this.dialogFormVisible;
      this.$store
        .dispatch("officeStock/selectItemList", { classify: 1 })
        .then(res => {
          this.fixOptions = res.data;
        });
      if (val === "111") {
        this.ruleForm.patentId = "";
        this.ruleForm.itemId = "";
        this.ruleForm.unitPrice = "";
        this.ruleForm.scrapDt = "";
        this.ruleForm.goodsnumber = "";
        this.ruleForm.purchaseId = "";
        this.ruleForm.remark = "";
        this.ruleForm.amount = "";
        this.fixedData = item;
        this.bianhaoOptions = [];
        this.isAddOrMOdify = true;
      } else if (val === "112") {
        this.ruleForm = item[0];
        this.ruleForm.itemId = Number(item[0].itemId);
        this.fixedData.applyNo = item[0].applyNo;
        let arr = [];
        if (item[0].goodsnumber == "" || item[0].goodsnumber == null) return;
        item[0].goodsnumber.split(",").forEach((element, index) => {
          const obj = {};
          obj.label = element;
          obj.value = index;
          arr.push(obj);
        });
        this.bianhaoOptions = arr;
        this.isAddOrMOdify = false;
      }
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },
    submitForm(formName, val) {
      let params = {};
      const arr = [];
      this.bianhaoOptions.forEach(element => {
        arr.push(element.label);
      });
      this.ruleForm.goodsnumber = arr.join(",");
      params = this.ruleForm;
      params.applyNo = this.fixedData.applyNo;

      let swatch = false;
      this.$refs[formName].validate(valid => {
        if (valid) {
          swatch = true;
          if (val === "update") {
            this.$store.dispatch("LC/assetsStockUpdateProcess", params);
          }
        } else {
          swatch = false;
        }
      });
      return swatch;
    }
  }
};
</script>

<style lang="scss">
.addOrModifyLC {
  .fujian {
    .el-form-item__content {
      width: 90%;
      overflow: auto;
    }
  }
}
</style>
