<template>
  <div class="detail">
    <el-dialog title="详情页" :visible.sync="dialogFormVisible">
      <el-row>
        <el-col :span="12" v-for="(val,key,index) in data" :key="index">
          <div class="left">{{key|getTitle}}</div>
          <div class="right">{{val}}</div>
        </el-col>
        <el-col :span="12">
          <div class="left">总金额</div>
          <div class="right">{{totalMoney}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="height:auto;">
          <div class="left">备注&nbsp;</div>
          <div class="right" style="width:70%">
            <el-input v-model="remark" type="textarea" style="marginBottom:5px;" :disabled="true"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row style="borderTop:0px;marginTop:20px">
        <el-table :data="officePurchaseVOS" border style="width: 100%">
          <el-table-column prop="patentName" label="办公用品类别"></el-table-column>
          <el-table-column prop="itemName" label="产品名称"></el-table-column>
          <el-table-column prop="unitName" label="单位"></el-table-column>
          <el-table-column prop="applyNumber" label="申请数量"></el-table-column>
          <el-table-column prop="unitPrice" label="单价(元)"></el-table-column>
          <el-table-column prop="money" label="金额(元)"></el-table-column>
        </el-table>
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

      this.remark = val[0].remark;
      this.totalMoney = val[0].totalMoney;
      this.officePurchaseVOS = val[0].officePurchaseVOS;
    }
  }
};
</script>


