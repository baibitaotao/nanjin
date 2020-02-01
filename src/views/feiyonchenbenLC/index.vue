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
      <el-row>
        <el-col :span="24">
          <div class="left">费用说明&nbsp;：</div>
          <div class="right">{{remark}}</div>
        </el-col>
      </el-row>
      <el-table :data="paidItemModels" stripe style="width: 100%" border>
        <el-table-column prop="abstracts" label="摘要"></el-table-column>
        <el-table-column prop="expenseAmount" label="报销金额"></el-table-column>
      </el-table>
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
      else if (val == "expenreim") return "费用报销标题";
      else if (val == "expenseDesc") return "费用说明";
      else if (val == "shrnum") return "收款账号";
      else if (val == "payee") return "收款单位";
      else if (val == "totalAmount") return "总金额(元)";
      else if (val == "openbank") return "开户行";
      else if (val == "paymeName") return "支付方式";
      else if (val == "stairName") return "支付类别一级";
      else if (val == "secondName") return "支付类别两级";
      else if (val == "thirdName") return "支付类别三级";
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
      showUpload: false,
      paidItemModels: []
    };
  },
  created() {
    this.isShowDetail = this.$route.query.steps;
  },
  mounted() {
     let params = {applyNo:this.$route.query.projectId}
    this.$store
      .dispatch("LC/expensePaidDetail", params)
      .then(res => {
        if (this.isShowDetail === "edit") {
          let arr = [];
          arr.push(res.data);
          this.$refs.modify.showDialog("112", arr);
        }
        this.data.applyNo = res.data.applyNo;
        this.data.applicantDepartment = res.data.applicantDepartment;
        this.data.applicantName = res.data.applicantName;
        this.data.applyTime = res.data.applyTime;
        // this.fileToken = res.data.attaFile == null ? "" : res.data.attaFile;
        this.data.expenreim = res.data.expenreim;
        this.data.totalAmount = res.data.totalAmount;
        this.remark = res.data.expenseDesc;
        this.data.shrnum = res.data.shrnum;
        this.data.paymeName = res.data.paymeName;
        this.data.openbank = res.data.openbank;
        this.data.payee = res.data.payee;

        this.data.stairName = res.data.stairName;
        this.data.secondName = res.data.secondName;
        this.data.thirdName = res.data.thirdName;
        this.paidItemModels = res.data.paidItemModels;

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
      console.log('kokokok')
      this.$refs.modify.submitForm("", "update");
    }
  }
};
</script>
