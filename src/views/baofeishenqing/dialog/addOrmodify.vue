<template>
  <div class="addOrModify">
    <el-dialog title="库存管理新增" :visible.sync="dialogFormVisible">
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
        <el-row class="vacationTime">
          <el-col :span="24" style="height:50px;">
            <div class="grid-content bg-purple">
              <el-form-item label="请假时间" prop="vacationTime">
                <el-date-picker
                  style="marginTop:10px;marginLeft:8px;"
                  v-model="ruleForm.vacationTime"
                  type="datetimerange"
                   size="small"
                  range-separator="至"
                  format="yyyy-MM-dd HH:mm"
                  value-format="timestamp"
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
                <el-select v-model="ruleForm.vacationType" placeholder="请选择">
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
              <el-form-item label="请假时长(天)">
                <el-input v-model="vacationLength" :disabled="true" size="small"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="请假事由" prop="reason">
                <el-input v-model="ruleForm.reason" type="textarea" rows="3" cols="110"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple fujian">
              <el-form-item label="附件">
                <upload
                  v-if="dialogFormVisible"
                  :contextPath="'/oa-web/'"
                  uploadTitle="点击上传附件"
                  v-model="ruleForm.attachment"
                ></upload>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <div class="submit">
          <el-button type="danger" @click="submitForm('ruleForm')" size="mini">提交</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>


<script>
import upLoad from "../../coomComponents/upload/src/upload";
export default {
  components: { upLoad },
  computed: {
    vacationLength() {
      if (this.ruleForm.vacationTime) {
        if (this.ruleForm.vacationTime.length == 0) {
          return 0;
        } else {
          return (
            (this.ruleForm.vacationTime[1] - this.ruleForm.vacationTime[0]) /
            1000 /
            60 /
            60
          ).toFixed(1);
        }
      } else {
        return 0;
      }
    }
  },
  data() {
    return {
      fileToken: "",
      isAddOrMOdify: "",
      dialogFormVisible: false,
      formLabelWidth: "120",
      vacationType: [],
      ruleForm: {
        applyName: "",
        attachment: "",
        vacationTime: [],
        reason: "",
        vacationType: ""
      },
      fixedData: {},
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

      if (val == "111") {
        this.isAddOrMOdify = true;
      } else if (val == "112") {
        this.isAddOrMOdify = false;
      }

      if (val == "111") {
        // this.ruleForm.applyName = "";
        this.ruleForm.vacationType = "";
        this.ruleForm.vacationLength = "";
        this.ruleForm.vacationTime = [];
        this.ruleForm.attachment = "";
        this.ruleForm.reason = "";
        this.fixedData = item;
      } else if (val == "112") {
        this.ruleForm.vacationTime = [];
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;

        this.ruleForm.attachment = item[0].attachment || "";
        // this.ruleForm.applyName = item[0].applyName;
        this.ruleForm.vacationTime.push(item[0].vacationStartTimeLong + "");
        this.ruleForm.vacationTime.push(item[0].vacationEndTimeLong + "");
        this.ruleForm.reason = item[0].reason;
        this.ruleForm.vacationType = Number(item[0].vacationType);
        this.ruleForm.applyNo = item[0].applyNo;
      }

      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {};

          if (this.isAddOrMOdify) {
            params.applyNo = this.fixedData.applyNo;
            params.attachment = this.ruleForm.attachment;
            params.reason = this.ruleForm.reason;
            params.vacationType = this.ruleForm.vacationType;
            params.vacationLength = this.vacationLength;
            params.vacationEndTime = this.ruleForm.vacationTime[1];
            params.vacationStartTime = this.ruleForm.vacationTime[0];
          } else if (!this.isAddOrMOdify) {
            params.applyNo = this.ruleForm.applyNo;
            params.attachment = this.ruleForm.attachment;
            params.vacationLength = this.vacationLength;
            params.reason = this.ruleForm.reason;
            params.outEndTime = this.ruleForm.vacationTime[1];
            params.outStartTime = this.ruleForm.vacationTime[0];
          }
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