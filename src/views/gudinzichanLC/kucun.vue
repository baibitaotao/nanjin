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
          <div class="left">编号&nbsp;：</div>
          <div class="right">{{goodsnumber}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="left">备注&nbsp;：</div>
          <div class="right">{{remark}}</div>
        </el-col>
      </el-row>
    </div>

    <div v-show="isShowDetail === 'edit'">
      <modify ref="modify"></modify>
    </div>

    <div v-show="isShowDetail === 'apply' || isShowDetail === 'edit'">
      <span class="title">审批信息</span>
      <iframe :src="url" class="shenhexinxi"></iframe>
      <process
        contentPath="/oa-web/"
        @action="action"
        :exValue="exValue"
        @update="update"
        @updateDetail="updateDetail"
      ></process>
    </div>
  </div>
</template>

<script>
import process from "../coomComponents/processCom/process.vue";
import modify from "./kucunModify/modify";

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
      else if (val == "scrapDt") return "入库时间";
      else if (val == "createDt") return "创建时间";
      else if (val == "itemName") return "领用种类";
      else if (val == "patentName") return "固定资产分类";
      else if (val == "remark") return "备注";
      else if (val == "unitPrice") return "单价";
      else if (val == "amount") return "数量";
      else if (val == "goodsnumber") return "编号";
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      data: {},
      url: "",
      remark: "",
      modelOption: [],
      exValue: {},
      isShowDetail: "",
      modifyData: {},
      goodsnumber: ""
    };
  },
  created() {
    this.isShowDetail = this.$route.query.steps;
  },
  mounted() {
    let  params = {applyNo:this.$route.query.projectId}
    this.$store
      .dispatch("LC/assetsStockDetail", params)
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

        this.data.patentName = res.data.patentName;
        this.data.itemName = res.data.itemName;
        this.data.amount = res.data.amount;
        this.data.unitPrice = res.data.unitPrice;

        this.data.scrapDt = res.data.scrapDt;
        this.goodsnumber = res.data.goodsnumber;

        this.modifyData.stockId = res.data.stockId;
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
    action(val) {},
    update() {
      this.$refs.modify.submitForm("", "update");
    },
    updateDetail() {
      let data = {};
      data.applyNo = this.data.applyNo;
      data.useId = this.modifyData.useId;
      this.$refs.detail.submitForm(data, "update");
    }
  }
};
</script>
