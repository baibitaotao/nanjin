<template>
  <div class="addOrModify">
    <el-dialog title="采购申请新增" :visible.sync="dialogFormVisible">
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
        <el-row class="vacationTime">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="固定资产分类" prop="patentId">
                <el-select
                  v-model="ruleForm.patentId"
                  placeholder="请选择"
                  @change="ruleForm.itemId = ''"
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
              <el-form-item label="采购种类" prop="itemId">
                <el-select v-model="ruleForm.itemId" placeholder="请选择">
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
        <el-row class="vacationTime">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="数量" prop="applyAmount">
                <el-input v-model="ruleForm.applyAmount" type="number" size="small" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="单价(元)" prop="unitPrice">
                <el-input v-model="ruleForm.unitPrice" type="number" size="small" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="采购要求说明">
                <el-input v-model="ruleForm.remark" type="textarea" rows="3" cols="110" />
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
    }
  },
  data() {
    return {
      isForbiden: false,
      fixOptions: [],
      fileToken: "",
      isAddOrMOdify: "",
      dialogFormVisible: false,
      formLabelWidth: "120",
      ruleForm: {
        patentId: "",
        itemId: "",
        applyAmount: "",
        remark: "",
        unitPrice: ""
      },
      fixedData: {},
      rules: {
        patentId: [
          {
            required: "true",
            message: "分类必填",
            trigger: "change"
          }
        ],
        unitPrice: [
          {
            required: "true",
            message: "单价必填",
            trigger: "blur"
          }
        ],
        applyAmount: [
          {
            required: "true",
            message: "数量必填",
            trigger: "blur"
          }
        ],
        itemId: [
          {
            required: "true",
            message: "种类必填",
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
        ],

        vacationType: [
          {
            required: "true",
            message: "请假类型必填",
            trigger: "change"
          }
        ]
      }
    };
  },

  methods: {
    showDialog(val, item) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.isForbiden = false;
      this.$store
        .dispatch("officeStock/selectItemList", { classify: 1 })
        .then(res => {
          this.fixOptions = res.data;
        });

      if (val === "111") {
        for (var i in this.ruleForm) {
          this.$set(this.ruleForm, i, "");
        }
        this.fixedData = item;
        this.isAddOrMOdify = true;
      } else if (val === "112") {
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;
        this.fixedData.unitPrice = item[0].unitPrice;

        this.ruleForm.applyAmount = item[0].applyAmount;
        this.ruleForm.patentId = item[0].patentId;
        this.ruleForm.itemId = item[0].itemId;
        this.ruleForm.remark = item[0].remark;
        this.isAddOrMOdify = false;
      }
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },
    submitForm(formName, val) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = {};
          params.applyNo = this.fixedData.applyNo;
          params.applyAmount = this.ruleForm.applyAmount;
          params.itemId = this.ruleForm.itemId;
          params.patentId = this.ruleForm.patentId;
          params.remark = this.ruleForm.remark;
          params.unitPrice = this.ruleForm.unitPrice;
          if (val === "save" || val === "update") {
            this.$store
              .dispatch(
                this.isAddOrMOdify
                  ? "caigoushenqing/purchaseAdd"
                  : "caigoushenqing/purchaseUpdate",
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
          } else if (val === "submit") {
            this.isForbiden = true;
            this.$store
              .dispatch("caigoushenqing/purchaseConditionProcessSubmit", params)
              .then(res => {
                this.$message.success("提交成功!");
              })
              .finally(res => {
                this.$emit("getTableList");
                this.dialogFormVisible = !this.dialogFormVisible;
                this.isForbiden = false;
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
