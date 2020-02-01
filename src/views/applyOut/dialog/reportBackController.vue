<template>
  <div class="addOrModify">
    <el-dialog title="外出归来" :visible.sync="dialogFormVisible">
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
        <el-row class="outTime">
          <el-col :span="12" style="height:50px;">
            <div class="grid-content bg-purple">
              <el-form-item label="实际归来时间" prop="outTime">
                <el-date-picker
                  
                  v-model="ruleForm.outTime"
                  type="date"
                   size="small"
                  value-format="timestamp"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12" style="height:50px;">
            <div class="grid-content bg-purple">
              <el-form-item label="计划归来时间" prop="outTime">
                <el-date-picker
                  v-model="ruleForm.outTime"
                  type="date"
                   size="small"
                   value-format="yyyy-MM-dd HH"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="实际请假时长(天)">
                <el-input v-model="outLength" :disabled="true" size="small"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="归来时间变动原因">
                <el-input v-model="ruleForm.reason" type="textarea" rows="3" cols="110"></el-input>
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
                  :contextPath="'/oa-web/'"
                  uploadTitle="点击上传附件"
                  v-model="ruleForm.attachment"
                ></up-load>
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
    outLength() {
      if (this.ruleForm.outTime) {
        if (this.ruleForm.outTime.length == 0) {
          return 0;
        } else {
          return (
            (this.ruleForm.outTime[1] - this.ruleForm.outTime[0]) /
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
      ruleForm: {
        applyName: "",
        attachment: "",
        destination: "",
        outTime: [],
        reason: ""
      },
      fixedData: {},
      rules: {
        outTime: [
          {
            required: "true",
            message: "外出时间必填",
            trigger: "change"
          }
        ],
        reason: [
          {
            required: "true",
            message: "外出事由必填",
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
    showDialog(val,item) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.fixedData.applyNo = item[0].applyNo;
      this.fixedData.applicantDepartment = item[0].applicantDepartment;
      this.fixedData.applyTime = item[0].applyTime;
      this.fixedData.applicantName = item[0].applicantName;

      if (val == "111") {
        this.ruleForm.attachment = "";
        this.ruleForm.destination = "";
        this.ruleForm.outLength = "";
        this.ruleForm.outTime = [];
        this.ruleForm.reason = "";

        this.isAddOrMOdify = true;
      } else if (val == "112" || val == "114") {
        this.ruleForm.outTime = item[0].outEndTime;
        this.ruleForm.destination = item[0].destination;
        this.ruleForm.reason = item[0].reason;
        this.ruleForm.attachment = item[0].attachment || "";
        this.ruleForm.applyNo = item[0].applyNo;

        this.isAddOrMOdify = false;
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
            params.destination = this.ruleForm.destination;
            params.outLength = this.outLength;
            params.reason = this.ruleForm.reason;
            params.outEndTime = this.ruleForm.outTime[1];
            params.outStartTime = this.ruleForm.outTime[0];
          } else if (!this.isAddOrMOdify) {
            params.applyNo = this.ruleForm.applyNo;
            params.attachment = this.ruleForm.attachment;
            params.destination = this.ruleForm.destination;
            params.outLength = this.outLength;
            params.reason = this.ruleForm.reason;
            params.outEndTime = this.ruleForm.outTime[1];
            params.outStartTime = this.ruleForm.outTime[0];
          }
          this.$store
            .dispatch(
              this.isAddOrMOdify
                ? "applyOut/applyOutAdd"
                : "applyOut/applyOutUpdate",
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
.outTime {
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