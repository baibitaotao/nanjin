<template>
  <div class="addOrModifyLC">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
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
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="费用报销标题" prop="expenreim">
              <el-input v-model="ruleForm.expenreim" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="总金额(元)">
              <el-input v-model="expenseAmount" :disabled="true" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple waichureason">
            <el-form-item label="收款账号" prop="shrnum">
              <el-input v-model="ruleForm.shrnum" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple waichureason">
            <el-form-item label="开户行" prop="openbank">
              <el-input v-model="ruleForm.openbank" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple waichureason">
            <el-form-item label="收款单位" prop="payee">
              <el-input v-model="ruleForm.payee" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple waichureason">
            <el-form-item label="支付方式" prop="payme">
              <el-select
                v-model="ruleForm.payme"
                placeholder="请选择支付类型"
                style="marginRight:5px"
                size="small"
              >
                <el-option
                  v-for="item in paymentTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple waichureason">
            <el-form-item label="支付类别" prop="stairid">
              <template>
                <div style="display:flex;marginTop:5px;marginLeft:5px">
                  <el-select
                    v-model="ruleForm.stairid"
                    placeholder="请选择一级类别"
                    style="marginRight:5px"
                    @change="ruleForm.secondid = ''"
                    size="small"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.codeValue"
                      :label="item.codeName"
                      :value="item.codeValue"
                    ></el-option>
                  </el-select>

                  <el-select
                    v-model="ruleForm.secondid"
                    placeholder="请选择二级类别"
                    style="marginRight:5px"
                    @change="ruleForm.thirdid = ''"
                    size="small"
                  >
                    <el-option
                      v-for="item in secondOptions"
                      :key="item.codeValue"
                      :label="item.codeName"
                      :value="item.codeValue"
                    ></el-option>
                  </el-select>

                  <el-select v-model="ruleForm.thirdid" placeholder="请选择三级类别">
                    <el-option
                      v-for="item in thirdOptions"
                      :key="item.codeValue"
                      :label="item.codeName"
                      :value="item.codeValue"
                      size="small"
                    ></el-option>
                  </el-select>
                </div>
              </template>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple waichureason">
            <el-form-item label="费用说明">
              <el-input v-model="ruleForm.expenseDesc" type="textarea" rows="3" cols="110" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <div class="expenseTable" style="marginTop:10px">
      <el-button type="danger" size="small" @click="add">新增</el-button>
      <el-button type="danger" size="small" @click="detel" :disabled="selectedItem.length  !== 1">删除</el-button>
      <el-table
        border
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%;marginTop:10px"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="70" />
        <el-table-column label="摘要">
          <template slot-scope="scope">
            <el-input v-model="scope.row.abstracts" size="small" />
          </template>
        </el-table-column>

        <el-table-column label="报销金额(元)">
          <template slot-scope="scope">
            <el-input v-model="scope.row.expenseAmount" type="number" size="small" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      tableData: [],
      isAddOrMOdify: "",
      dialogFormVisible: false,
      formLabelWidth: "120",
      selectedItem: [],
      paymentTypeOptions: [],
      typeOptions: [],
      ruleForm: {
        expenreim: "",
        expenseAmount: "",
        expenseDesc: "",
        payme: "",
        shrnum: "",
        stairid: "",
        secondid: "",
        thirdid: "",
        openbank: "",
        payee: ""
      },
      newId: 0,
      fixedData: {},
      rules: {
        expenreim: [
          {
            required: "true",
            message: "费用报销标题",
            trigger: "blur"
          }
        ],
        shrnum: [
          {
            required: "true",
            message: "收款账号必填",
            trigger: "blur"
          }
        ],
        openbank: [
          {
            required: "true",
            message: "开户行必填",
            trigger: "blur"
          }
        ],
        payee: [
          {
            required: "true",
            message: "收款单位必填",
            trigger: "blur"
          }
        ],
        payme: [
          {
            required: "true",
            message: "支付方式必填",
            trigger: "change"
          }
        ],
        stairid: [
          {
            required: "true",
            message: "一级支付类别必填",
            trigger: "change"
          }
        ]
      }
    };
  },
  computed: {
    expenseAmount() {
      let amount = 0;
      this.tableData.forEach(item => {
        amount = amount + Number(item.expenseAmount);
      });
      return amount;
    },
    secondOptions() {
      let arr = [];
      this.options.forEach(el => {
        if (this.ruleForm.stairid === el.codeValue) {
          arr = el.twoList;
        }
      });
      return arr;
    },
    thirdOptions() {
      let arr = [];
      this.secondOptions.forEach(el => {
        if (el.codeValue === this.ruleForm.secondid) {
          arr = el.threeList;
        }
      });
      return arr;
    }
  },
  methods: {
    add() {
      this.tableData.push({
        newId: ++this.newId,
        abstracts: "",
        expenseAmount: ""
      });
    },
    detel() {
      let arr = [];
      this.tableData.forEach(el => {
        if (this.selectedItem[0].newId !== el.newId) {
          arr.push(el);
        }
      });
      this.tableData = arr;
    },
    handleSelectionChange(val) {
      this.selectedItem = val;
    },
    showDialog(val, item) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.$store
        .dispatch("expensePaidDetail/expensePaidDetailGetComTomList")
        .then(res => {
          this.options = res.data;
        });
      this.$store
        .dispatch("caigoushenqing/commonTCodeGetCodeByParentId", "11018")
        .then(res => {
          let arr = [];
          res.data.options.forEach(el => {
            let obj = {};
            obj.value = Number(el.value);
            obj.label = el.label;
            arr.push(obj);
          });
          this.paymentTypeOptions = arr;
        });
      this.tableData = [];

      if (val === "111") {
        for (var i in this.ruleForm) {
          this.$set(this.ruleForm, i, "");
        }

        this.fixedData = item;
        this.isAddOrMOdify = true;
      } else if (val === "112") {
        this.newId = 0;
        this.ruleForm.outTime = [];
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;
        this.ruleForm.expenreim = item[0].expenreim;
        this.ruleForm.expenseDesc = item[0].expenseDesc;
        this.ruleForm.applyNo = item[0].applyNo;
        this.ruleForm.openbank = item[0].openbank;
        this.ruleForm.payee = item[0].payee;
        this.ruleForm.payme = item[0].payme;
        this.ruleForm.shrnum = item[0].shrnum;
        this.ruleForm.stairid = item[0].stairid;
        this.ruleForm.secondid = item[0].secondid;
        this.ruleForm.thirdid = item[0].thirdid;
        item[0].paidItemModels.forEach(el => {
          let obj = {};
          obj.newId = ++this.newId;
          obj.abstracts = el.abstracts;
          obj.applyNo = el.applyNo;
          obj.createBy = el.createBy;
          obj.createDt = el.createDt;
          obj.expenseAmount = el.expenseAmount;
          obj.id = el.id;
          obj.isDelete = el.isDelete;
          obj.updateBy = el.updateBy;
          obj.updateDt = el.updateDt;
          this.tableData.push(obj);
        });

        this.isAddOrMOdify = false;
      }
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },
    submitForm(formName, val) {
      const params = {};
      params.expenreim = this.ruleForm.expenreim;
      params.applyNo = this.fixedData.applyNo;
      params.totalAmount = this.expenseAmount;
      params.expenseDesc = this.ruleForm.expenseDesc;
      params.shrnum = this.ruleForm.shrnum;
      params.openbank = this.ruleForm.openbank;
      params.payee = this.ruleForm.payee;
      params.payme = this.ruleForm.payme;
      params.stairid = this.ruleForm.stairid;
      params.secondid = this.ruleForm.secondid;
      params.thirdid = this.ruleForm.thirdid;
      params.paidItemDTOs = this.tableData;
      let swatch = false;
      this.$refs[formName].validate(valid => {
        if (valid) {
          swatch = true;
          if (val === "update") {
            this.$store.dispatch("expensePaidDetail/expensePaidUpdate", params);
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
