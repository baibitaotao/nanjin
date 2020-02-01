<template>
  <div class="LCdetail">
    <span class="title">申请信息</span>
    <div v-if="isShowDetail === 'view' || isShowDetail === 'apply'">
      <el-row>
        <el-col :span="12" v-for="(val,key,index) in data" :key="index">
          <div class="left">{{key|getTitle}}&nbsp;：</div>
          <div class="right">{{val}}</div>
        </el-col>
      </el-row>
      <el-row style="borderTop:0">
        <el-col :span="24" style="height:auto;">
          <div class="left">会议地点&nbsp;：</div>
          <div class="right">{{meetingPlace}}</div>
        </el-col>
      </el-row>
      <el-row style="borderTop:0">
        <el-col :span="24" style="height:auto;">
          <div class="left">会议议题&nbsp;：</div>
          <div class="right">{{meetingContent}}</div>
        </el-col>
      </el-row>
      <el-row style="borderTop:0">
        <el-col :span="24" style="height:auto;">
          <div class="left">附件&nbsp;：</div>
          <div class="right">
            <up-load v-model="fileToken" :hiddenUpload="true"></up-load>
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-if="isShowDetail === 'edit'">
      <modify ref="modify"></modify>
    </div>

    <div v-if="isShowDetail === 'apply' || isShowDetail === 'edit'">
      <span class="title">审批信息</span>
      <iframe :src="url" class="shenhexinxi"></iframe>
      <process contentPath="/oa-web/" @action="action" :exValue="exValue" @update="update"></process>
    </div>
  </div>
</template>

<script>
import process from "../coomComponents/processCom/process.vue";
import modify from "./modify/modify";
import upLoad from "../coomComponents/upload/src/upload";

export default {
  components: {
    process,
    modify,
    upLoad
  },
  filters: {
    getTitle(val) {
      if (val == "applicantDepartment") return "所在部门";
      else if (val == "applicantName") return "姓名";
      else if (val == "applyNo") return "表单号";
      else if (val == "applyStatus") return "状态";
      else if (val == "applyTime") return "申请日期";
      else if (val == "createBy") return "创建者";
      else if (val == "createDt") return "创建时间";
      else if (val == "applyName") return "纪要编号";
      else if (val == "meetingSummaryTypeName") return "会议类型";
      else if (val == "issuingDate") return "签发日期";
      else if (val == "meetingTime") return "会议时间";
      else if (val == "observerPersonName") return "列席人员";
      else if (val == "meetingPersonName") return "参会人员";
      else if (val == "recordPersonName") return "记录人员";
      else if (val == "meetingHostName") return "主持人";
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      data: {},
      url: "",
      remark: "",
      exValue: {},
      isShowDetail: "",
      fileToken: "",
      meetingContent: "",
      meetingPlace: ""
    };
  },
  created() {
    this.isShowDetail = this.$route.query.steps;
  },
  mounted() {
    let params = { applyNo: this.$route.query.projectId };
    this.$store.dispatch("LC/meetingSummaryDetail", params).then(res => {
      if (this.isShowDetail === "edit") {
        let arr = [];
        arr.push(res.data);
        this.$refs.modify.showDialog("112", arr);
      }
      this.data.applyNo = res.data.applyNo;
      this.data.applicantDepartment = res.data.applicantDepartment;
      this.data.applicantName = res.data.applicantName;
      this.data.applyTime = res.data.applyTime;

      this.meetingContent = res.data.meetingContent;
      this.meetingPlace = res.data.meetingPlace;
      this.data.applyName = res.data.applyName;
      this.data.meetingSummaryTypeName = res.data.meetingSummaryTypeName;
      this.data.issuingDate = res.data.issuingDate;
      this.data.meetingTime = res.data.meetingTime;
      this.data.meetingPersonName = res.data.meetingPersonName;
      this.data.observerPersonName = res.data.observerPersonName;
      this.data.recordPersonName = res.data.recordPersonName;
      this.data.meetingHostName = res.data.meetingHostName;
      this.fileToken = res.data.attachment == null ? "" : res.data.attachment;

      this.url =
        "/sysweb/action/showListview.action?listViewId=fixflowProcessInfosListView&instId=" +
        this.$route.query.instId +
        "&listViewFileName=fixflowProcessInfosListViewFirst&frameInd=" +
        this.$route.query.frameInd;
    });
  },
  methods: {
    showDialog(val) {
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    action(val) {
      this.exValue = {
        result: true,
        extendParam: { depAudit: "1057", docType: "1" }
      };
    },
    update() {
      this.$refs.modify.submitForm("", "update");
    }
  }
};
</script>
