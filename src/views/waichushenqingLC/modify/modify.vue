<template>
  <div class="addOrModifyLC">
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
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="外出时长(天)" prop="MyoutLength">
              <el-input v-model="outLength" :disabled="isSure" size="small" v-show="false"></el-input>
              <el-input
                v-model="ruleForm.MyoutLength"
                size="small"
                type="number"
                :disabled="isSure"
              ></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-form-item label="外出地点" prop="destination">
              <el-input v-model="ruleForm.destination" size="small" :disabled="isSure"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row class="outTime">
        <el-col :span="24" style="height:50px;">
          <div class="grid-content bg-purple">
            <el-form-item label="外出时间" prop="outTime">
              <el-date-picker
                :disabled="isSure"
                style="marginTop:7px;marginLeft:8px;"
                v-model="ruleForm.outTime"
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
        <div class="isUserCar">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="是否用车" prop="isUserCar">
                <el-select
                  v-model="ruleForm.isUserCar"
                  placeholder="请选择"
                  :disabled="isSure"
                  size="small"
                >
                  <el-option
                    v-for="item in isUserCarOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </div>

        <el-col :span="12" v-if="isSure">
          <div class="grid-content bg-purple">
            <el-form-item label="归来时间" prop="comeTime">
              <el-date-picker
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
            <el-form-item label="外出事由" prop="reason">
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
    </el-form>
  </div>
</template>

<script>
import upLoad from "../../coomComponents/upload/src/upload";
import { getHoliday } from "../../../utils/auth";
export default {
  components: { upLoad },
  computed: {
    outLength() {
      if (this.ruleForm.outTime === null) return;
      if (this.ruleForm.outTime.length !== 0) {
        let beginDate = this.ruleForm.outTime[0].split(" ")[0];
        let endDate = this.ruleForm.outTime[1].split(" ")[0];
        let beginTime = this.ruleForm.outTime[0].split(" ")[1];
        let endTime = this.ruleForm.outTime[1].split(" ")[1];

        let shijianbeginNum = 0;
        let shijianendNum = 0;
        if (parseInt(beginTime) >= 8 && parseInt(beginTime) <= 13) {
          shijianbeginNum = 0;
        } else if (parseInt(beginTime) > 13 && parseInt(beginTime) <= 18) {
          shijianbeginNum = 0.5;
        } else {
          this.$message.warning("请选择工作时间");
        }
        if (parseInt(endTime) > 8 && parseInt(endTime) <= 13) {
          shijianendNum = 0.5;
        } else if (parseInt(endTime) > 13 && parseInt(endTime) <= 18) {
          shijianendNum = 1;
        }
        this.ruleForm.MyoutLength =
          getHoliday(beginDate, endDate) - shijianbeginNum + shijianendNum;
        return getHoliday(beginDate, endDate) - shijianbeginNum + shijianendNum;
      } else {
        this.ruleForm.MyoutLength = 0;
        return 0;
      }
    }
  },
  data() {
    var timeLengthVerify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入时长"));
      } else if (!/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(value)) {
        callback(new Error("外出时长不符合规则"));
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
      dialogFormVisible: false,
      formLabelWidth: "120",
      isUserCarOptions: [],
      isSure: false,
      keyApplyNo: "",
      ruleForm: {
        MyoutLength: "",
        isUserCar: "",
        applyName: "",
        attachment: "",
        destination: "",
        outTime: [],
        reason: "",
        comeTime: ""
      },
      fixedData: {},
      rules: {
        MyoutLength: [
          {
            required: "true",
            validator: timeLengthVerify,
            trigger: "change"
          }
        ],
        comeTime: [
          {
            required: true,
            message: "归来时间必填",
            trigger: "change"
          }
        ],

        outTime: [
          {
            required: "true",
            message: "外出时间必填",
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
        destination: [
          { required: "true", message: "外出地点必填", trigger: "blur" }
        ],

        applyName: [
          {
            required: "true",
            message: "申请标题必填",
            trigger: "blur"
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
        .dispatch("caigoushenqing/commonTCodeGetCodeByParentId", "102")
        .then(res => {
          let arr = [];
          res.data.options.forEach(element => {
            let obj = {};
            obj.label = element.label;
            obj.value = Number(element.value);
            arr.push(obj);
          });
          this.isUserCarOptions = arr;
        });
      this.isSure = false;
      if (val == "111") {
        this.ruleForm.attachment = "";
        this.ruleForm.destination = "";
        this.ruleForm.outLength = "";
        this.ruleForm.outTime = [];
        this.ruleForm.reason = "";
        this.ruleForm.isUserCar = "";
        this.fixedData = item;
        this.isAddOrMOdify = true;
      } else if (val == "112") {
        this.ruleForm.outTime = [];
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;
        this.ruleForm.destination = item[0].destination;
        this.ruleForm.outTime.push(item[0].outStartTime);
        this.ruleForm.outTime.push(item[0].outEndTime);
        this.ruleForm.reason = item[0].reason;
        this.ruleForm.isUserCar = item[0].isUserCar;
        this.ruleForm.attachment = item[0].attachment || "";
        this.ruleForm.applyNo = item[0].applyNo;
        this.isAddOrMOdify = false;
      } else if (val == "114") {
        this.ruleForm.outTime = [];
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;
        this.ruleForm.destination = item[0].destination;
        this.ruleForm.outTime.push(item[0].outStartTime);
        this.ruleForm.outTime.push(item[0].outEndTime);
        this.ruleForm.reason = item[0].reason;
        this.ruleForm.isUserCar = item[0].isUserCar;
        this.ruleForm.attachment = item[0].attachment || "";
        this.ruleForm.applyNo = item[0].applyNo;
        this.$store
          .dispatch("applyOut/reportBackToEdit", { dealMark: "add" })
          .then(res => {
            this.keyApplyNo = res.data.applyNo;
          });
        this.isSure = true;
      }
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },

    submitForm(formName, val) {
      let params = {};
      params.applyNo = this.fixedData.applyNo;
      params.attachment = this.ruleForm.attachment;
      params.destination = this.ruleForm.destination;
      params.outLength = this.ruleForm.MyoutLength;
      params.reason = this.ruleForm.reason;
      params.isUserCar = this.ruleForm.isUserCar;
      if (this.ruleForm.outTime) {
        params.outEndTime = this.ruleForm.outTime[1];
        params.outStartTime = this.ruleForm.outTime[0];
      }
      let swatch = false;
      this.$refs[formName].validate(valid => {
        if (valid) {
          swatch = true;
          if (val === "update") {
            this.$store.dispatch("applyOut/applyOutUpdate", params);
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
