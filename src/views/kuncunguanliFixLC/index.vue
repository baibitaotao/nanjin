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
          <div class="left">备注&nbsp;：</div>
          <div class="right">{{remark}}</div>
        </el-col>
      </el-row>
      <!-- <el-row style="borderTop:0">
        <el-col :span="24" style="height:auto;">
          <div class="left">附件&nbsp;：</div>
          <div class="right">
            <up-load v-model="fileToken" :hiddenUpload="true"></up-load>
          </div>
        </el-col>
      </el-row>-->
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
      else if (val == "financialNo") return "理财产品编号(银行)";
      else if (val == "patentName") return "固定资产分类";
      else if (val == "itemName") return "物品种类";
      else if (val == "goodsnumber") return "编号";
      else if (val == "daysNum") return "期限(天)";
      else if (val == "expectEarn") return "预计收益率(%)";
      else if (val == "startDt") return "起息日";
      else if (val == "buyLimit") return "购买金额(元)";
      else if (val == "buyDt") return "购买日期";
      else if (val == "buyNo") return "购买编号";
      else if (val == "riskLevelOneName") return "一级风险等级";
      else if (val == "riskLevelTwoName") return "二级风险等级";
      else if (val == "riskLevelThreeName") return "三级风险等级";
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
      fileToken: ""
    };
  },
  created() {
    this.isShowDetail = this.$route.query.steps;
  },
  mounted() {
    let params = { applyNo: this.$route.query.projectId };
    this.$store.dispatch("LC/assetsStockDetail", params).then(res => {
      if (this.isShowDetail === "edit") {
        let arr = [];
        arr.push(res.data);
        this.$refs.modify.showDialog("112", arr);
      }
      this.data.applyNo = res.data.applyNo;
      this.data.applicantDepartment = res.data.applicantDepartment;
      this.data.applicantName = res.data.applicantName;
      this.data.applyTime = res.data.applyTime;

      this.data.patentName = res.data.patentName;
      this.data.itemName = res.data.itemName;
      this.data.goodsnumber = res.data.goodsnumber;
      this.remark = res.data.remark;
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
