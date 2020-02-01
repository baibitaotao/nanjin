<template>
  <div class="addOrModifyLC">
    <el-dialog width="80%" title="选择人员" :visible.sync="innerVisible" append-to-body>
      <select-person v-model="ruleForm.meetingPersonUserId" @update-value="getselectItem" />
    </el-dialog>

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
            <el-form-item label="会议名称" prop="meetingName">
              <el-input v-model="ruleForm.meetingName" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="会议费用" prop="meetingAmount">
              <el-input v-model="ruleForm.meetingAmount" type="number" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row class="meetingTime">
        <el-col :span="24" style="height:50px;">
          <div class="grid-content bg-purple">
            <el-form-item label="会议时间" prop="meetingTime">
              <el-date-picker
                v-model="ruleForm.meetingTime"
                style="marginTop:10px;marginLeft:8px;"
                type="datetimerange"
                size="small"
                range-separator="至"
                format="yyyy-MM-dd HH:mm"
                value-format="timestamp"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
              />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="会议人数" prop="personCount">
              <el-input v-model="ruleForm.personCount" type="number" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="会议地点">
              <el-input v-model="ruleForm.meetingPlace" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple waichureason">
            <el-form-item label="备注" prop="remark">
              <el-input v-model="ruleForm.remark" type="textarea" rows="3" cols="110" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple fujian">
            <el-form-item label="附件">
              <up-load
                v-if="dialogFormVisible"
                v-model="ruleForm.attachment"
                upload-title="点击上传附件"
              />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import upLoad from "../../coomComponents/upload/src/upload";
import selectPerson from "../../coomComponents/TransferTreeSelect/index";

export default {
  components: { upLoad, selectPerson },

  data() {
    var peopleCountVerify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入人数"));
      } else if (!/^[1-9]+[0-9]*$/.test(value)) {
        callback(new Error("人数不符合规则"));
      } else {
        callback();
      }
    };
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
      innerVisible: false,
      formLabelWidth: "120",
      vacationType: [],
      ruleForm: {
        meetingName: "",
        meetingAmount: "",
        meetingTime: [],
        personCount: "",
        meetingPlace: "",
        remark: "",
        attachment: ""
      },
      fixedData: {},
      rules: {
        meetingTime: [
          {
            required: "true",
            message: "会议时间必填",
            trigger: "change"
          }
        ],
        personCount: [
          {
            required: "true",
            validator: peopleCountVerify,
            trigger: "blur"
          }
        ],
        meetingAmount: [
          {
            required: "true",
            validator: meetingAmountVerify,
            trigger: "blur"
          }
        ],
        meetingName: [
          {
            required: "true",
            message: "会议名称必填",
            trigger: "blur"
          }
        ],
        meetingPerson: [
          {
            required: "true",
            message: "参会人员必填",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    getselectItem(val, v2) {
      this.selectPerson();
      this.ruleForm.meetingPerson = v2.join(",");
    },
    selectPerson() {
      this.innerVisible = !this.innerVisible;
    },
    showDialog(val, item) {
      this.dialogFormVisible = !this.dialogFormVisible;

      if (val === "111") {
        this.ruleForm.meetingName = "";
        this.ruleForm.meetingAmount = "";
        this.ruleForm.meetingTime = [];
        this.ruleForm.personCount = "";
        this.ruleForm.meetingPlace = "";
        this.ruleForm.remark = "";
        this.ruleForm.attachment = "";

        this.fixedData = item;
        this.isAddOrMOdify = true;
      } else if (val === "112") {
        this.ruleForm.meetingTime = [];
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;

        this.ruleForm.meetingName = item[0].meetingName;
        this.ruleForm.meetingTime.push(item[0].meetingStartTimeLong);
        this.ruleForm.meetingTime.push(item[0].meetingEndTimeLong);
        this.ruleForm.remark = item[0].remark;
        this.ruleForm.meetingAmount = item[0].meetingAmount;
        this.ruleForm.attachment = item[0].attachment || "";

        this.ruleForm.personCount = item[0].personCount;
        this.ruleForm.meetingPlace = item[0].meetingPlace;

        this.ruleForm.applyNo = item[0].applyNo;
        this.isAddOrMOdify = false;
      }

      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },

    submitForm(formName, val) {
      const params = {};
      if (this.isAddOrMOdify) {
        params.meetingName = this.ruleForm.meetingName;
        params.meetingAmount = this.ruleForm.meetingAmount;
        params.meetingEndTime = this.ruleForm.meetingTime[1];
        params.meetingStartTime = this.ruleForm.meetingTime[0];
        params.personCount = this.ruleForm.personCount;
        params.meetingPlace = this.ruleForm.meetingPlace;
        params.remark = this.ruleForm.remark;
        params.applyNo = this.fixedData.applyNo;
        params.attachment = this.ruleForm.attachment;
      } else if (!this.isAddOrMOdify) {
        params.meetingName = this.ruleForm.meetingName;
        params.meetingAmount = this.ruleForm.meetingAmount;
        params.meetingEndTime = this.ruleForm.meetingTime[1];
        params.meetingStartTime = this.ruleForm.meetingTime[0];
        params.personCount = this.ruleForm.personCount;
        params.meetingPlace = this.ruleForm.meetingPlace;
        params.remark = this.ruleForm.remark;
        params.applyNo = this.fixedData.applyNo;
        params.attachment = this.ruleForm.attachment;
      }

      let swatch = false;
      this.$refs[formName].validate(valid => {
        if (valid) {
          swatch = true;
          if (val === "update") {
            this.$store.dispatch("meetingCost/meetingCostUpdate", params);
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
