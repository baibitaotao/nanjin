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
          <div class="left">费用说明&nbsp;</div>
          <div class="right" style="width:70%">
            <el-input v-model="remark" type="textarea" style="marginBottom:5px;" disabled="true"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-table :data="tableData" border style="width: 100%;marginTop:10px;">
        <el-table-column prop="abstracts" label="摘要"></el-table-column>
        <el-table-column prop="expenseAmount" label="报销金额"></el-table-column>
      </el-table>
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
      else if (val == "expenreim") return "费用报销标题";
      else if (val == "expenseDesc") return "费用说明用途";
      else if (val == "openbank") return "开户行";
      else if (val == "payee") return "收款单位";
      else if (val == "paymeName") return "支付方式";
      else if (val == "shrnum") return "收款账号";
      else if (val == "stairName") return "支付类型一";
      else if (val == "secondName") return "支付类型二";
      else if (val == "thirdName") return "支付类型三";
      else if (val == "totalAmount") return "总金额";
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      data: {},
      tableData: [],
      remark: ""
    };
  },
  methods: {
    showDialog(val) {
      this.dialogFormVisible = !this.dialogFormVisible;

      this.data.applicantDepartment = val[0].applicantDepartment;
      this.data.applicantName = val[0].applicantName;
      this.data.applyNo = val[0].applyNo;
      this.data.applyStatusName = val[0].applyStatusName;
      this.data.expenreim = val[0].expenreim;
      this.remark = val[0].expenseDesc;
      this.data.openbank = val[0].openbank;
      this.data.payee = val[0].payee;
      this.data.paymeName = val[0].paymeName;
      this.data.shrnum = val[0].shrnum;
      this.data.stairName = val[0].stairName;
      this.data.secondName = val[0].secondName;
      this.data.thirdName = val[0].thirdName;
      this.data.totalAmount = val[0].totalAmount;

      this.tableData = val[0].paidItemModels;
    }
  }
};
</script>


