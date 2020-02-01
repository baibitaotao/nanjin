<template>
  <div class="addOrModify">
    <el-dialog :title="computedTitle" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
        <el-row v-show="false">
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
        <el-row v-show="false">
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
        <el-row class="vacationTime">
          <el-col :span="24" style="height:50px;">
            <div class="grid-content bg-purple">
              <el-form-item label="请假时间" prop="vacationTime">
                <el-date-picker
                  :disabled="isSure"
                  style="marginTop:10px;marginLeft:8px;"
                  v-model="ruleForm.vacationTime"
                  type="datetimerange"
                  size="small"
                  :default-time="['08:00:00', '08:00:00']"
                  :picker-options="pickerOptions"
                  range-separator="至"
                  format="yyyy-MM-dd HH"
                  value-format="yyyy-MM-dd HH"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="请假类型" prop="vacationType">
                <el-select v-model="ruleForm.vacationType" placeholder="请选择" :disabled="isSure">
                  <el-option
                    v-for="item in vacationType"
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
              <el-form-item label="请假时长(天)" prop="MyvacationLength">
                <el-input v-model="vacationLength" :disabled="true" v-show="false"></el-input>
                <el-input v-model="ruleForm.MyvacationLength" type="number" :disabled="isSure"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row v-if="isSure">
          <el-col :span="12">
            <div class="grid-content bg-purple" prop="comeTime">
              <el-form-item label="请假归来时间">
                <el-date-picker
                  :default-time="'08:00:00'"
                  v-model="ruleForm.comeTime"
                  type="datetime"
                  size="small"
                  format="yyyy-MM-dd HH:mm"
                  value-format="yyyy-MM-dd HH:mm"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="请假事由" prop="reason">
                <el-input
                  v-model="ruleForm.reason"
                  type="textarea"
                  rows="3"
                  cols="110"
                  :disabled="isSure"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple fujian">
              <el-form-item label="附件">
                <up-load
                  :hiddenUpload="isSure"
                  v-if="dialogFormVisible"
                  :contextPath="'/oa-web/'"
                  uploadTitle="点击上传附件"
                  v-model="ruleForm.attachment"
                ></up-load>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <div class="submit" v-if="!isSure">
          <el-button
            type="danger"
            @click="submitForm('ruleForm','save')"
            size="mini"
          >{{isAddOrMOdify?'保存':'更新'}}</el-button>
          <el-button
            type="danger"
            @click="submitForm('ruleForm','submit')"
            size="mini"
            :disabled="isForbiden"
          >提交</el-button>
        </div>
        <div class="submit" v-if="isSure">
          <el-button type="danger" @click="submitForm('ruleForm','sure')" size="mini">确定</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>


<script>
import upLoad from "../../coomComponents/upload/src/upload";
import { getHoliday } from "../../../utils/auth";

export default {
  components: { upLoad },
  computed: {
    computedTitle() {
      if (this.isAddOrMOdify == true && this.showTitle == false)
        return "请假新增";
      if (this.isAddOrMOdify == false && this.showTitle == false)
        return "请假编辑";
      if (this.isAddOrMOdify || this.showTitle == true) return "请假归来";
    },
    vacationLength() {
      if (this.ruleForm.vacationTime === null) return;
      if (this.ruleForm.vacationTime.length !== 0) {
        let beginDate = this.ruleForm.vacationTime[0].split(" ")[0];
        let endDate = this.ruleForm.vacationTime[1].split(" ")[0];
        let beginTime = this.ruleForm.vacationTime[0].split(" ")[1];
        let endTime = this.ruleForm.vacationTime[1].split(" ")[1];

        let shijianbeginNum = 0;
        let shijianendNum = 0;
        if (parseInt(beginTime) >= 8 && parseInt(beginTime) <= 13) {
          shijianbeginNum = 0;
        } else if (parseInt(beginTime) > 13 && parseInt(beginTime) <= 18) {
          shijianbeginNum = 0.5;
        } else {
          // this.$message.warning("请选择工作时间");
        }

        if (parseInt(endTime) > 8 && parseInt(endTime) <= 13) {
          shijianendNum = 0.5;
        } else if (parseInt(endTime) > 13 && parseInt(endTime) <= 18) {
          shijianendNum = 1;
        }
        this.ruleForm.MyvacationLength =
          getHoliday(beginDate, endDate) - shijianbeginNum + shijianendNum;
        return getHoliday(beginDate, endDate) - shijianbeginNum + shijianendNum;
      } else {
        this.ruleForm.MyvacationLength = 0;
        return 0;
      }
    }
  },
  data() {
    var timeLengthVerify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入时长"));
      } else if (!/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(value)) {
        callback(new Error("请假时长不符合规则"));
      } else if (value == 0) {
        callback(new Error("请输入大于0的数"));
      } else {
        callback();
      }
    };
    return {
      pickerOptions: {
        firstDayOfWeek: 1,
        disabledDate(value) {
          var weekDay = ["0", "1", "2", "3", "4", "5", "6"];
          var myDate = new Date(value);
          if (
            weekDay[myDate.getDay()] === "6" ||
            weekDay[myDate.getDay()] === "0"
          ) {
            return true;
          } else {
            return false;
          }
        }
      },
      isForbiden: false,
      fileToken: "",
      isAddOrMOdify: "",
      showTitle: "",
      dialogFormVisible: false,
      formLabelWidth: "120",
      vacationType: [],
      isSure: false,
      keyApplyNo: "",
      ruleForm: {
        applyName: "",
        attachment: "",
        MyvacationLength: "",
        vacationTime: [],
        reason: "",
        vacationType: "",
        comeTime: ""
      },
      fixedData: {},
      rules: {
        MyvacationLength: [
          {
            required: "true",
            validator: timeLengthVerify,
            trigger: "change"
          }
        ],
        comeTime: [
          {
            required: true,
            message: "销假时间必填",
            trigger: "change"
          }
        ],
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
            min: 1,
            max: 2000,
            message: "长度在 1 到 2000 个字符",
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
        .dispatch("applyVacation/commonTCodeGetCodeByParentId")
        .then(res => {
          if (res.status !== "0") {
            return this.$message.error("请假类型接口请求出错");
          }
          let arr = [];
          res.data.options.forEach(item => {
            let obj = {};
            obj.value = Number(item.value);
            obj.label = item.label;
            arr.push(obj);
          });
          this.vacationType = arr;
        });
      this.isSure = false;
      this.showTitle = false;
      if (val == "111") {
        this.ruleForm.vacationType = "";
        this.ruleForm.vacationLength = "";
        this.ruleForm.vacationTime = [];
        this.ruleForm.attachment = "";
        this.ruleForm.reason = "";
        this.fixedData = item;

        this.isAddOrMOdify = true;
      } else if (val == "112") {
        this.ruleForm.vacationTime = [];
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;
        this.ruleForm.attachment = item[0].attachment || "";
        this.ruleForm.vacationTime.push(item[0].vacationStartTime);
        this.ruleForm.vacationTime.push(item[0].vacationEndTime);
        this.ruleForm.reason = item[0].reason;
        this.ruleForm.vacationType = Number(item[0].vacationType);
        this.ruleForm.applyNo = item[0].applyNo;

        this.isAddOrMOdify = false;
      } else if (val == "114") {
        this.ruleForm.vacationTime = [];
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;
        this.ruleForm.attachment = item[0].attachment || "";
        this.ruleForm.vacationTime.push(item[0].vacationStartTime);
        this.ruleForm.vacationTime.push(item[0].vacationEndTime);
        this.ruleForm.reason = item[0].reason;
        this.ruleForm.vacationType = Number(item[0].vacationType);
        this.ruleForm.applyNo = item[0].applyNo;
        this.$store
          .dispatch("applyOut/reportBackToEdit", { dealMark: "add" })
          .then(res => {
            this.keyApplyNo = res.data.applyNo;
          });
        this.showTitle = true;
        this.isSure = true;
      }

      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },
    submitForm(formName, val) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {};
          params.applyNo = this.fixedData.applyNo;
          params.attachment = this.ruleForm.attachment;
          params.reason = this.ruleForm.reason;
          params.vacationType = this.ruleForm.vacationType;
          params.vacationLength = this.ruleForm.MyvacationLength;
          params.vacationEndTime = this.ruleForm.vacationTime[1];
          params.vacationStartTime = this.ruleForm.vacationTime[0];

          if (val === "submit") {
            this.isForbiden = true;
            this.$store
              .dispatch("applyVacation/applyVacationSubmit", params)
              .then(res => {
                this.$message.success("提交成功");
              })
              .finally(res => {
                this.$emit("getTableList");
                this.dialogFormVisible = !this.dialogFormVisible;
                this.isForbiden = false;
              });
          } else if (val === "save") {
            this.$store
              .dispatch(
                this.isAddOrMOdify
                  ? "applyVacation/applyVacationAdd"
                  : "applyVacation/applyVacationUpdate",
                params
              )
              .then(res => {
                if (res.status == "0") {
                  this.$message.success(
                    this.isAddOrMOdify ? "新增成功" : "更新成功"
                  );
                  this.$emit("getTableList");
                  this.dialogFormVisible = !this.dialogFormVisible;
                }
              });
          } else if (val === "sure") {
            let data = {};
            data.keyApplyNo = this.fixedData.applyNo;
            data.applyNo = this.keyApplyNo;
            data.returnDt = this.ruleForm.comeTime;
            data.backType = 0;
            this.$store.dispatch("applyOut/reportBackAdd", data).then(res => {
              this.$message.success("操作成功!");
              this.$emit("getTableList");
              this.dialogFormVisible = !this.dialogFormVisible;
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