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
          <div class="left">备注&nbsp;：</div>
          <div class="right">{{remark}}</div>
        </el-col>
      </el-row>

      <span class="title">采购详情</span>
      <el-row style="margin:5px 0;">
        <el-table :data="officePurchaseVOS" border style="width: 100%">
          <el-table-column prop="patentName" label="办公用品类别"></el-table-column>
          <el-table-column prop="itemName" label="产品名称"></el-table-column>
          <el-table-column prop="unitName" label="单位"></el-table-column>
          <el-table-column prop="applyNumber" label="申请数量"></el-table-column>
          <el-table-column prop="unitPrice" label="单价(元)"></el-table-column>
          <el-table-column prop="money" label="金额(元)"></el-table-column>
        </el-table>
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

export default {
  components: {
    process,
    modify
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
      else if (val == "itemName") return "二级类别名称";
      else if (val == "totalMoney") return "总金额";
      else if (val == "remark") return "备注";
      else if (val == "stockAmount") return "库存数量";
      else if (val == "useAmount") return "领用数量";
      else if (val == "useTypeName") return "类型";
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
      officePurchaseVOS: []
    };
  },
  created() {
    this.isShowDetail = this.$route.query.steps;
  },
  mounted() {
    let params = { applyNo: this.$route.query.projectId};
    this.$store.dispatch("LC/officePurchaseDetail", params).then(res => {
      if (this.isShowDetail === "edit") {
        this.$refs.modify.showDialog("112", res.data);
      }
      this.data.applyNo = res.data.applyNo;
      this.data.applicantDepartment = res.data.applicantDepartment;
      this.data.applicantName = res.data.applicantName;
      this.data.applyTime = res.data.applyTime;

      this.data.totalMoney = res.data.totalMoney;
      this.remark = res.data.remark;
      this.officePurchaseVOS = res.data.officePurchaseVOS;

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
