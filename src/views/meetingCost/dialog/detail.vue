<template>
  <div class="detail">
    <el-dialog title="详情页" :visible.sync="dialogFormVisible">
      <el-row>
        <el-col :span="12" v-for="(val,key,index) in data" :key="index">
          <div class="left">{{key|getTitle}}</div>
          <div class="right">{{val}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="height:auto;">
          <div class="left">备注&nbsp;</div>
          <div class="right" style="width:70%">
            <el-input v-model="remark" type="textarea" style="marginBottom:5px;" disabled="true"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row style="borderTop:0">
        <el-col :span="12" style="height:auto;">
          <div class="left">附件</div>
          <div class="right">
            <up-load v-if="dialogFormVisible" v-model="fileToken" :hiddenUpload="true"></up-load>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import upLoad from "../../coomComponents/upload/src/upload";

export default {
  components: {
    upLoad
  },
  filters: {
    getTitle(val) {
    if (val == "applicantDepartment") return "所在部门";
      else if (val == "applicantName") return "姓名";
      else if (val == "applyName") return "会议名称";
      else if (val == "applyNo") return "表单号";
      else if (val == "applyStatus") return "状态";
      else if (val == "applyTime") return "申请日期";
      else if (val == "createBy") return "创建者";
      else if (val == "createDt") return "创建时间";
      else if (val == "meetingName") return "会议名称";
      else if (val == "meetingAmount") return "会议费用(元)";
      else if (val == "meetingStartTime") return "会议开始时间";
      else if (val == "meetingEndTime") return "会议结束时间";
      else if (val == "personCount") return "会议人数";
      else if (val == "meetingPlace") return "会议地点";
      else if (val == "observerPersonName") return "外出地点";
      else if (val == "recordPersonName") return "记录人员";
      else if (val == "meetingHostName") return "主持人";
      else if (val == "meetingContent") return "会议议题";
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      data: {},
      fileToken: "",
      remark: ""
    };
  },
  methods: {
    showDialog(val) {
      this.dialogFormVisible = !this.dialogFormVisible;

      // this.data.applicantDepartment = val[0].applicantDepartment;
      // this.data.applicantName = val[0].applicantName;
      // this.data.applyNo = val[0].applyNo;
      // this.data.applyStatusName = val[0].applyStatusName;
      // this.data.applyTime = val[0].applyTime;

      // // this.data.createDt = val[0].createDt
      // this.data.meetingAmount = val[0].meetingAmount;
      // this.data.meetingName = val[0].meetingName;
      // // this.data.meetingPerson = val[0].meetingPerson
      // this.data.meetingPlace = val[0].meetingPlace;
      // this.data.meetingStartTime = val[0].meetingStartTime;
      // this.data.meetingEndTime = val[0].meetingEndTime;
      // this.data.personCount = val[0].personCount;
        this.data.applyNo = val[0].applyNo;
        this.data.applicantDepartment = val[0].applicantDepartment;
        this.data.applicantName = val[0].applicantName;
        this.data.applyTime = val[0].applyTime;
        this.data.meetingName = val[0].meetingName;
        this.data.meetingAmount = val[0].meetingAmount;
        this.data.meetingStartTime = val[0].meetingStartTime;
        this.data.meetingEndTime = val[0].meetingEndTime;
        this.data.personCount = val[0].personCount;
        this.data.meetingPlace = val[0].meetingPlace;
        this.remark = val[0].remark;
      this.remark = val[0].remark;
      this.fileToken = val[0].attachment == null ? "" : val[0].attachment;
    }
  }
};
</script>


