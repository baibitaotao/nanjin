<template>
  <div class="LCdetail">
    <span class="title">申请信息</span>
    <div v-if="!(isShowDetail === 'edit')" class="nini">
      <el-row>
        <el-col :span="12" v-for="(val,key,index) in data" :key="index">
          <div class="left">{{key|getTitle}}&nbsp;：</div>
          <div class="right">{{val}}</div>
        </el-col>
      </el-row>

      <el-row v-if="showRemark">
        <el-col :span="24">
          <div class="left">备注&nbsp;：</div>
          <div class="right">{{remark}}</div>
        </el-col>
      </el-row>

      <el-row style="borderTop:0" v-show="showUpload">
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
      else if (val == "applyName") return "会议名称";
      else if (val == "applyNo") return "表单号";
      else if (val == "applyStatus") return "状态";
      else if (val == "applyTime") return "申请日期";
      else if (val == "paymentTypeName") return "付款方式";
      else if (val == "useTypeName") return "用途";
      else if (val == "borrowAmount") return "金额(元)";
      else if (val == "accountName") return "收款单位";
      else if (val == "accountNum") return "账号";
      else if (val == "openBank") return "开户行";
      else if (val == "backDt") return "还款计划";
      else if (val == "isEntryName") return "款项是否入账";
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
      showRemark: false,
      showUpload: false
    };
  },
  created() {},
  mounted() {
    this.isShowDetail = this.$route.query.steps;
    let params = { applyNo: this.$route.query.projectId };
    this.$store.dispatch("LC/applyBorrowDetail", params).then(res => {
      if (this.isShowDetail === "edit") {
        let arr = [];
        arr.push(res.data);
        this.$refs.modify.showDialog("112", arr);
      }
      if (res.data.useType == 1 && res.data.useType2 == 1) {
        this.data.backDt = res.data.backDt;
        this.remark = res.data.borrowDesc;
        this.showRemark = true;
      } else if (res.data.useType == 2 && res.data.useType2 == 3) {
        this.data.isEntryName = res.data.isEntryName;
      }
      this.data.applyNo = res.data.applyNo;
      this.data.applicantDepartment = res.data.applicantDepartment;
      this.data.applicantName = res.data.applicantName;
      this.data.applyTime = res.data.applyTime;
      this.fileToken = res.data.attaFile == null ? "" : res.data.attaFile;
      this.data.paymentTypeName = res.data.paymentTypeName;
      this.data.useTypeName =
        res.data.useTypeName + "—" + res.data.useTypeName2;
      this.data.borrowAmount = res.data.borrowAmount;
      this.data.accountName = res.data.accountName;
      this.data.accountNum = res.data.accountNum;
      this.data.openBank = res.data.openBank;
      this.hiddenUpload = true;
      this.$forceUpdate();
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
