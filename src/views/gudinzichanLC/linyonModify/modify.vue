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
            <el-form-item label="领用种类" prop="itemId">
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
            <el-form-item label="领用数量" prop="useAmount">
              <el-input v-model="ruleForm.useAmount" type="number" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple waichureason">
            <el-form-item label="备注">
              <el-input v-model="ruleForm.remark" type="textarea" rows="3" cols="110" />
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
      fileToken: "",
      isAddOrMOdify: "",
      dialogFormVisible: false,
      formLabelWidth: "120",
      ruleForm: {
        patentId: "",
        itemId: "",
        useAmount: "",
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
        useAmount: [
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

        this.ruleForm.useAmount = item[0].useAmount;
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
      const params = {};
      params.applyNo = this.fixedData.applyNo;
      params.useAmount = this.ruleForm.useAmount;
      params.itemId = this.ruleForm.itemId;
      params.patentId = this.ruleForm.patentId;
      params.remark = this.ruleForm.remark;
      params.unitPrice = this.ruleForm.unitPrice;

      let swatch = false;
      this.$refs[formName].validate(valid => {
        if (valid) {
           swatch = true;
          if (val === "update") {
            this.$store.dispatch("LC/assetsUseUpdateProcess", params);
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
