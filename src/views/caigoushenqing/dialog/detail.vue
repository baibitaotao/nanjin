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
          <div class="left">采购要求说明&nbsp;</div>
          <div class="right" style="width:70%">
            <el-input v-model="remark" type="textarea" style="marginBottom:5px;" disabled="true"></el-input>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  filters: {
    getTitle(val) {
      if (val == "applicantDepartment") return "所在的部门";
      else if (val == "applicantName") return "姓名";
      else if (val == "applyName") return "会议名称";
      else if (val == "applyNo") return "表单号";
      else if (val == "applyStatusName") return "状态";
      else if (val == "applyTime") return "申请日期";
      else if (val == "remark") return "备注";
      else if (val == "patentName") return "固定资产分类";
      else if (val == "itemName") return "采购种类";
      else if (val == "applyAmount") return "采购数量";
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      data: {},
      fileToken: "",
      officePurchaseVOS: [],
      remark: "",
      totalMoney: ""
    };
  },
  methods: {
    showDialog(val) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.data.applicantDepartment = val[0].applicantDepartment;
      this.data.applicantName = val[0].applicantName;
      this.data.applyStatusName = val[0].applyStatusName;
      this.data.applyNo = val[0].applyNo;
      this.data.applyTime = val[0].applyTime;
      this.data.patentName = val[0].patentName;
      this.data.itemName = val[0].itemName;
      this.data.applyAmount = val[0].applyAmount;
      this.remark = val[0].remark;
    }
  }
};
</script>


