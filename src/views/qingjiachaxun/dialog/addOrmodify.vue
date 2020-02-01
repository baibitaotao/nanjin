<template>
  <div class="addOrModify">
    <el-dialog title="库存管理新增" :visible.sync="dialogFormVisible">
      <el-dialog width="80%" title="选择人员" :visible.sync="innerVisible" append-to-body>
        <select-person
          v-if="innerVisible"
          v-model="userId"
          :contextPath="'/oa-web'"
          @update-value="getselectItemMP"
        ></select-person>
      </el-dialog>

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
              <el-form-item label="会议名称" prop="applyName">
                <el-input v-model="ruleForm.applyName" size="small"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="会议类型">
                <!-- <el-input v-model="ruleForm.personCount" type="number"></el-input> -->
                <el-select v-model="ruleForm.meetingSummaryType" placeholder="请选择">
                  <el-option
                    v-for="item in meetingOptions"
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
              <el-form-item label="签发日期">
                <!-- <el-input v-model="ruleForm.meetingPlace"></el-input> -->
                <el-date-picker
                  v-model="ruleForm.issuingDate"
                  type="date"
                   size="small"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="会议时间">
                <!-- <el-input v-model="ruleForm.meetingPlace"></el-input> -->
                <el-date-picker
                  v-model="ruleForm.meetingTime"
                  type="date"
                   size="small"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="会议地点">
                <el-input v-model="ruleForm.meetingPlace" size="small"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="参会人员" prop="meetingPerson">
                <el-input
                  v-model="ruleForm.meetingPerson"
                  type="textarea"
                  rows="3"
                  cols="110"
                  @focus="selectPerson('meetingPerson')"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="列席人员">
                <el-input
                  v-model="ruleForm.observerPerson"
                  type="textarea"
                  rows="3"
                  cols="110"
                  @focus="selectPerson('observerPerson')"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="记录人员" prop="recordPerson">
                <el-input
                  v-model="ruleForm.recordPerson"
                  type="textarea"
                  rows="3"
                  cols="110"
                  @focus="selectPerson('recordPerson')"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="主持人">
                <el-input
                  v-model="ruleForm.meetingHost"
                  type="textarea"
                  rows="3"
                  cols="110"
                  @focus="selectPerson('meetingHost')"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="会议议题" prop="remark">
                <el-input v-model="ruleForm.meetingContent" type="textarea" rows="3" cols="110"></el-input>
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
          <el-button type="danger" @click="submitForm('ruleForm')" size="mini" :disabled="isForbiden">提交</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>


<script>
import upLoad from "../../coomComponents/upload/src/upload";
import selectPerson from "../../coomComponents/TransferTreeSelect/index";

export default {
  components: { upLoad, selectPerson },
  watch: {
    userId(val, oldval) {
      if (this.WhichClick == "observerPerson") {
        this.formId.observerPerson = val;
      } else if (this.WhichClick == "recordPerson") {
        this.formId.recordPerson = val;
      } else if (this.WhichClick == "meetingHost") {
        this.formId.meetingHost = val;
      } else if (this.WhichClick == "meetingPerson") {
        this.formId.meetingPerson = val;
      }
    }
  },
  data() {
    return {
      isForbiden:false,
      userId: "",
      meetingOptions: [],
      fileToken: "",
      isAddOrMOdify: "",
      dialogFormVisible: false,
      innerVisible: false,
      formLabelWidth: "120",
      vacationType: [],
      WhichClick: "",
      formId: {
        observerPerson: "",
        recordPerson: "",
        meetingHost: "",
        meetingPerson: ""
      },
      ruleForm: {
        applyName: "",
        meetingContent: "",
        meetingPlace: "",
        meetingSummaryType: "",
        meetingTime: "",
        issuingDate: "",
        meetingPerson: "",
        meetingHost: "",
        observerPerson: "",
        recordPerson: "",
        attachment: ""
      },
      fixedData: {},
      rules: {
        recordPerson: [
          {
            required: "true",
            message: "记录人员必填",
            trigger: "change"
          }
        ],
        applyName: [
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
        ],
        meetingContent: [
          {
            required: "true",
            message: "会议议题必填",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    getselectItemMP(v1, v2) {
      if (this.WhichClick == "observerPerson") {
        this.ruleForm.observerPerson = v2.join(",");
      } else if (this.WhichClick == "recordPerson") {
        this.ruleForm.recordPerson = v2.join(",");
      } else if (this.WhichClick == "meetingHost") {
        this.ruleForm.meetingHost = v2.join(",");
      } else if (this.WhichClick == "meetingPerson") {
        this.ruleForm.meetingPerson = v2.join(",");
      }
      this.innerVisible = !this.innerVisible;
    },

    selectPerson(val) {
      this.innerVisible = !this.innerVisible;
      this.WhichClick = val;
      if (this.isAddOrMOdify) {
        this.userId = "";
      }
      if (!this.isAddOrMOdify) {
        if (this.WhichClick == "observerPerson") {
          this.userId = this.formId.observerPerson || "";
        } else if (this.WhichClick == "recordPerson") {
          this.userId = this.formId.recordPerson || "";
        } else if (this.WhichClick == "meetingHost") {
          this.userId = this.formId.meetingHost || "";
        } else if (this.WhichClick == "meetingPerson") {
          this.userId = this.formId.meetingPerson || "";
        }
      }
    },
    showDialog(val, item) {
        this.isForbiden = false
      this.dialogFormVisible = !this.dialogFormVisible;
      this.$store
        .dispatch("meetingSummary/commonTCodeGetCodeByParentId")
        .then(res => {
          if (res.status !== "0") {
            this.$message.error("接口请求出错");
          }
          this.meetingOptions = [];
          res.data.options.forEach(element => {
            let obj = {};
            obj.label = element.label;
            obj.value = Number(element.value);
            this.meetingOptions.push(obj);
          });
        });

      if (val == "111") {
        this.isAddOrMOdify = true;
      } else if (val == "112") {
        this.isAddOrMOdify = false;
      }

      if (val == "111") {
        this.ruleForm.applyName = "";
        this.userId = "";
        this.ruleForm.meetingContent = "";
        this.ruleForm.meetingPlace = "";
        this.ruleForm.meetingSummaryType = "";
        this.ruleForm.meetingTime = "";
        this.ruleForm.issuingDate = "";
        this.ruleForm.observerPerson = "";
        this.ruleForm.recordPerson = "";
        this.ruleForm.meetingHost = "";
        this.ruleForm.meetingPerson = "";
        this.ruleForm.attachment = "";
        this.formId.observerPerson = "";
        this.formId.recordPerson = "";
        this.formId.meetingHost = "";
        this.formId.meetingPerson = "";

        this.fixedData = item;
      } else if (val == "112") {
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;

        this.ruleForm.applyName = item[0].applyName;
        this.ruleForm.id = item[0].id;
        this.ruleForm.meetingSummaryType = item[0].meetingSummaryType;
        this.ruleForm.meetingPlace = item[0].meetingPlace;
        this.ruleForm.meetingTime = item[0].meetingTime;
        this.ruleForm.issuingDate = item[0].issuingDate;
        this.ruleForm.meetingContent = item[0].meetingContent;

        this.ruleForm.meetingPerson = item[0].meetingPersonName;
        this.ruleForm.meetingHost = item[0].meetingHostName;
        this.ruleForm.observerPerson = item[0].observerPersonName;
        this.ruleForm.recordPerson = item[0].recordPersonName;
        this.ruleForm.attachment = item[0].attachment || "";

        this.formId.meetingPerson = item[0].meetingPerson;
        this.formId.meetingHost = item[0].meetingHost;
        this.formId.observerPerson = item[0].observerPerson;
        this.formId.recordPerson = item[0].recordPerson;
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
            params.applyName = this.ruleForm.applyName;
            params.applyNo = this.fixedData.applyNo;
            params.meetingContent = this.ruleForm.meetingContent;
            params.meetingPlace = this.ruleForm.meetingPlace;
            params.meetingSummaryType = this.ruleForm.meetingSummaryType;
            params.meetingTime = this.ruleForm.meetingTime;
            params.issuingDate = this.ruleForm.issuingDate;
            params.observerPerson = this.formId.observerPerson;
            params.recordPerson = this.formId.recordPerson;
            params.meetingHost = this.formId.meetingHost;
            params.meetingPerson = this.formId.meetingPerson;

            params.attachment = this.ruleForm.attachment;
          } else if (!this.isAddOrMOdify) {
            params.applyName = this.ruleForm.applyName;
            params.applyNo = this.fixedData.applyNo;
            params.id = this.ruleForm.id;
            params.meetingContent = this.ruleForm.meetingContent;
            params.meetingPlace = this.ruleForm.meetingPlace;
            params.meetingSummaryType = this.ruleForm.meetingSummaryType;
            params.meetingTime = this.ruleForm.meetingTime;
            params.issuingDate = this.ruleForm.issuingDate;
            params.observerPerson = this.formId.observerPerson;
            params.recordPerson = this.formId.recordPerson;
            params.meetingHost = this.formId.meetingHost;
            params.meetingPerson = this.formId.meetingPerson;

            params.attachment = this.ruleForm.attachment;
          }
          this.$store
            .dispatch(
              this.isAddOrMOdify
                ? "meetingSummary/meetingSummaryAdd"
                : "meetingSummary/meetingSummaryUpdate",
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
.meetingTime {
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