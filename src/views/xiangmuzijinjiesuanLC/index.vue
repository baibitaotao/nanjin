<template>
  <div class="LCdetail">
    <span class="title">申请信息</span>
    <div v-if="isShowDetail === 'view' || isShowDetail === 'apply'">
      <el-row>
        <el-col :span="12" v-for="(val,key,index) in data" :key="index">
          <div class="left">{{key|getTitle}}</div>
          <div class="right">{{val}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="left">{{transferNameName}}</div>
          <div class="right">{{transferType}}</div>
        </el-col>
        <el-col :span="12">
          <div class="left">{{assigneeTypeName}}</div>
          <div class="right">{{assigneeName}}</div>
        </el-col>
      </el-row>
      <el-row style="borderTop:0">
        <el-col :span="12" style="height:auto;">
          <div class="left">附件</div>
          <div class="right">
            <up-load v-model="fileToken" :hiddenUpload="true"></up-load>
          </div>
        </el-col>
      </el-row>
      <el-table :data="tableData" border style="margin:5px 0;">
        <el-table-column type="index" label="序号" />
        <el-table-column prop="unitName" label="会员单位"></el-table-column>
        <el-table-column prop="serviceFee" label="交易服务费(不含税)(元）" />
        <el-table-column prop="percentage" label="分成比例%"></el-table-column>
        <el-table-column prop="isShowDetail" label="分成金额(不含税)(元)" />
        <el-table-column prop="taxRateName" label="税率%"></el-table-column>
        <el-table-column prop="taxation" label="税费（元）" />
        <el-table-column prop="awardAmountTax" label="分成金额(含税)(元)" />
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
      if (val == "applicantDepartment") return "所在的部门";
      else if (val == "applicantName") return "姓名";
      else if (val == "applyName") return "会议名称";
      else if (val == "applyNo") return "表单号";
      else if (val == "applyStatusName") return "状态";
      else if (val == "applyTime") return "申请日期";
      else if (val == "awardAmount") return "金额(元)";
      else if (val == "percentage") return "提成比例";
      else if (val == "projIncome") return "项目净收入";
      else if (val == "projName") return "项目名称";
      else if (val == "recommendDt") return "推荐日期";
      else if (val == "recommenderName") return "推荐人";
      else if (val == "remark") return "备注";
      else if (val == "dealNo") return "成交确认文号";
      else if (val == "organizDept") return "承办部门";
      else if (val == "projManagerName") return "项目负责人";
      else if (val == "receiveDealAmt") return "应收成交金额(元)";
      else if (val == "arriveDealAmt") return "已到账成交金额(元)";
      else if (val == "receiveServiceFee") return "应收交易服务费(元)";
      else if (val == "serviceFee") return "交易服务费(不含税)(元)";
      else if (val == "payMemberMoney") return "应支付会员分成(元)";
      else if (val == "memberMoney") return "会员分成(不含税)(元)";
      else if (val == "projIncome") return "项目净收入(扣除会员分成)";
      else if (val == "percentage") return "提成比例(%)";
      else if (val == "awardAmount") return "市场信息奖励金额(元)";
      else if (val == "recommendDt") return "日期";
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
      transferNameName: "",
      transferType: "",
      assigneeName: "",
      assigneeTypeName: "",
      tableData: []
    };
  },
  created() {
    this.isShowDetail = this.$route.query.steps;
  },
  mounted() {
    let params = { applyNo: this.$route.query.projectId };
    this.$store.dispatch("LC/capitalSettleDetail", params).then(res => {
      if (this.isShowDetail === "edit") {
        let arr = [];
        arr.push(res.data);
        this.$refs.modify.showDialog("112", arr);
      }
      this.data.applyNo = res.data.applyNo;
      this.data.applicantDepartment = res.data.applicantDepartment;
      this.data.applicantName = res.data.applicantName;
      this.data.applyTime = res.data.applyTime;

      this.data.projName = res.data.projName;
      this.data.awardAmount = res.data.awardAmount;
      this.data.percentage = res.data.percentage;
      this.data.projIncome = res.data.projIncome;
      this.data.recommendDt = res.data.recommendDt;
      this.data.recommenderName = res.data.recommenderName;
      this.data.dealNo = res.data.dealNo;
      this.data.organizDept = res.data.organizDept;
      this.data.projManagerName = res.data.projManagerName;
      this.data.receiveDealAmt = res.data.receiveDealAmt;
      this.data.arriveDealAmt = res.data.arriveDealAmt;
      this.data.receiveServiceFee = res.data.receiveServiceFee;
      this.data.serviceFee = res.data.serviceFee;
      this.data.payMemberMoney = res.data.payMemberMoney;
      this.data.memberMoney = res.data.memberMoney;
      this.data.projIncome = res.data.projIncome;
      this.data.percentage = res.data.percentage;
      this.data.awardAmount = res.data.awardAmount;
      this.data.recommendDt = res.data.recommendDt;

      this.transferNameName = res.data.transferNameName;
      this.assigneeTypeName = res.data.assigneeTypeName;
      this.transferType = res.data.transferType;
      this.assigneeName = res.data.assigneeName;

      this.tableData = res.data.itemVOS;

      this.fileToken = res.data.attaFile == null ? "" : res.data.attaFile;
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
      // this.$refs.modify.submitForm("ruleForm", "update");
    }
  }
};
</script>
