<template>
  <div class="addOrModifyLC">
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="申请单号">
              <el-input v-model="fixedData.applyNo" :disabled="true" size="small"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-form-item label="申请部门">
              <el-input v-model="fixedData.applicantDepartment" :disabled="true" size="small"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="申请人">
              <el-input v-model="fixedData.applicantName" :disabled="true" size="small"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-form-item label="申请日期">
              <el-input v-model="fixedData.applyTime" :disabled="true" size="small"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="付款方式" prop="paymentType">
              <el-select v-model="ruleForm.paymentType" placeholder="请选择" size="small">
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
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="用途" prop="useType">
              <el-select v-model="ruleForm.useType" placeholder="请选择" size="small">
                <el-option
                  v-for="item in useTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row class="vacationTime">
        <el-col :span="12" style="height:50px;">
          <div class="grid-content bg-purple">
            <el-form-item label="金额(元)" prop="borrowAmount">
              <el-input v-model="ruleForm.borrowAmount" type="number" size="small"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" style="height:50px;">
          <div class="grid-content bg-purple">
            <el-form-item label="收款单位" :prop="isShowHuankuanjihua?'':'accountName'">
              <el-input v-model="ruleForm.accountName" size="small"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row class="vacationTime">
        <el-col :span="12" style="height:50px;">
          <div class="grid-content bg-purple">
            <el-form-item label="账号" :prop="isShowHuankuanjihua?'':'accountNum'">
              <el-input v-model="ruleForm.accountNum" type="number" size="small"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" style="height:50px;">
          <div class="grid-content bg-purple">
            <el-form-item label="开户行" :prop="isShowHuankuanjihua?'':'openBank'">
              <el-input v-model="ruleForm.openBank" size="small"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row class="vacationTime">
        <el-col :span="12" style="height:50px;" v-if="isShowHuankuanjihua">
          <div class="grid-content bg-purple">
            <el-form-item label="还款计划" prop="backDt">
              <el-date-picker
                v-model="ruleForm.backDt"
                type="date"
                size="small"
                value-format="yyyy-MM-dd"
                :picker-options="pickerOptions"
                placeholder="选择日期"
                @blur="chufaTime"
              ></el-date-picker>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12" style="height:50px;" v-if="isShowHuankuan">
          <div class="grid-content bg-purple">
            <el-form-item label="款项是否入账" prop="isEntry">
              <el-select v-model="ruleForm.isEntry" placeholder="请选择">
                <el-option
                  v-for="item in isEntryOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row v-if="isShowHuankuanjihua">
        <el-col :span="24">
          <div class="grid-content bg-purple waichureason">
            <el-form-item label="借款事由" prop="borrowDesc">
              <el-input v-model="ruleForm.borrowDesc" type="textarea" rows="3" cols="110"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple fujian">
            <el-form-item label="附件">
              <up-load v-if="dialogFormVisible" uploadTitle="点击上传附件" v-model="ruleForm.attaFile"></up-load>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import upLoad from "../../coomComponents/upload/src/upload";
export default {
  components: { upLoad },
  computed: {
    isShowHuankuan() {
      if (this.ruleForm.useType == 1) {
        return true;
      } else {
        return false;
      }
    },
    isShowHuankuanjihua() {
      if (this.ruleForm.useType == 2) {
        return true;
      } else {
        return false;
      }
    }
  },
  data() {
    var meetingAmountVerify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入金额"));
      } else if (
        !/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(
          value
        )
      ) {
        callback(new Error("金额不符合规则"));
      } else {
        callback();
      }
    };
    return {
      isAddOrMOdify: "",
      dialogFormVisible: false,
      formLabelWidth: "120",
      vacationType: [],
      paymentTypeOptions: [],
      useTypeOptions: [],
      isEntryOptions: [],
      pickerOptions: {
        disabledDate: time => {
          return this.dealDisabledDate(time);
        }
      },
      ruleForm: {
        paymentType: "",
        useType: "",
        borrowAmount: "",
        accountName: "",
        accountNum: "",
        openBank: "",
        attaFile: "",
        isEntry: "",
        backDt: "",
        borrowDesc: ""
      },
      fixedData: {},
      rules: {
        paymentType: [
          {
            required: "true",
            message: "付款方式必填",
            trigger: "change"
          }
        ],
        useType: [
          {
            required: "true",
            message: "用途必填",
            trigger: "change"
          }
        ],
        borrowAmount: [
          {
            required: "true",
            validator: meetingAmountVerify,
            trigger: "blur"
          }
        ],
        accountName: [
          {
            required: "true",
            message: "收款单位必填",
            trigger: "blur"
          }
        ],
        accountNum: [
          {
            required: "true",
            message: "账号必填",
            trigger: "blur"
          }
        ],
        openBank: [
          {
            required: "true",
            message: "开户行必填",
            trigger: "blur"
          }
        ],
        borrowDesc: [
          {
            required: "true",
            message: "借款事由必填",
            trigger: "blur"
          }
        ],
        backDt: [
          {
            required: "true",
            message: "还款计划必填",
            trigger: "blur"
          }
        ],
        isEntry: [
          {
            required: "true",
            message: "是否入账必填",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    chufaTime(val) {},
    dealDisabledDate(time) {
      return this.fixedData.applyTimeLong > time;
    },
    showDialog(val, item) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.$store
        .dispatch("caigoushenqing/commonTCodeGetCodeByParentId", "11012")
        .then(res => {
          let arr = [];
          res.data.options.forEach(element => {
            let obj = {};
            obj.label = element.label;
            obj.value = Number(element.value);
            arr.push(obj);
          });
          this.paymentTypeOptions = arr;
        });
      this.$store
        .dispatch("caigoushenqing/commonTCodeGetCodeByParentId", "11013")
        .then(res => {
          let arr = [];
          res.data.options.forEach(element => {
            let obj = {};
            obj.label = element.label;
            obj.value = Number(element.value);
            arr.push(obj);
          });
          this.useTypeOptions = arr;
        });
      this.$store
        .dispatch("caigoushenqing/commonTCodeGetCodeByParentId", "102")
        .then(res => {
          let arr = [];
          res.data.options.forEach(element => {
            let obj = {};
            obj.label = element.label;
            obj.value = Number(element.value);
            arr.push(obj);
          });
          this.isEntryOptions = arr;
        });
      if (val == "111") {
        for (var i in this.ruleForm) {
          this.$set(this.ruleForm, i, "");
        }
        this.fixedData = item;
        this.isAddOrMOdify = true;
      } else if (val == "112") {
        if (item[0].isEntry !== null) {
          this.ruleForm.isEntry = Number(item[0].isEntry);
          this.ruleForm.backDt = null;
          this.ruleForm.borrowDesc = null;
        }
        if (item[0].backDt !== null) {
          this.ruleForm.backDt = item[0].backDt;
          this.ruleForm.borrowDesc = item[0].borrowDesc;
          this.ruleForm.isEntry = null;
        }
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applyTimeLong = item[0].applyTimeLong;
        this.fixedData.applicantName = item[0].applicantName;
        this.ruleForm.paymentType = Number(item[0].paymentType);
        this.ruleForm.useType = Number(item[0].useType);
        this.ruleForm.borrowAmount = item[0].borrowAmount;
        this.ruleForm.accountName = item[0].accountName;
        this.ruleForm.accountNum = item[0].accountNum;
        this.ruleForm.openBank = item[0].openBank;
        this.ruleForm.attaFile =
          item[0].attaFile == null ? "" : item[0].attaFile;
        this.isAddOrMOdify = false;
      }
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },
    submitForm(formName, val) {
      let params = {};
      params.paymentType = this.ruleForm.paymentType;
      params.useType = this.ruleForm.useType;
      params.borrowAmount = this.ruleForm.borrowAmount;
      params.accountName = this.ruleForm.accountName;
      params.accountNum = this.ruleForm.accountNum;
      params.openBank = this.ruleForm.openBank;
      params.attaFile = this.ruleForm.attaFile;
      params.applyNo = this.fixedData.applyNo;
      if (this.ruleForm.useType === 1) {
        params.isEntry = this.ruleForm.isEntry;
        params.borrowDesc = "";
        params.backDt = "";
      } else if (this.ruleForm.useType === 2) {
        params.isEntry = "";
        params.borrowDesc = this.ruleForm.borrowDesc;
        params.backDt = this.ruleForm.backDt;
      } else if (this.ruleForm.useType === 3) {
        params.isEntry = "";
        params.borrowDesc = "";
        params.backDt = "";
      }
      let swatch = false;
      this.$refs[formName].validate(valid => {
        if (valid) {
          swatch = true;
          if (val === "update") {
            this.$store.dispatch("applyBorrow/applyBorrowUpdate", params);
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
