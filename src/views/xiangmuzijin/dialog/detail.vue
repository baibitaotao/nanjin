<template>
  <div class="detail">
    <el-dialog title="详情页" :visible.sync="dialogFormVisible">
      <el-row>
        <el-col :span="12" v-for="(val,key,index) in data" :key="index">
          <div class="left">{{key|getTitle}}</div>
          <div class="right">{{val}}</div>
        </el-col>
      </el-row>
        <el-row style="borderTop:0">
        <el-col :span="12">
          <div class="left">{{assigneeTypeName}}</div>
          <div class="right">{{assigneeName}}</div>
        </el-col>
         <el-col :span="12">
          <div class="left">{{transferNameName}}</div>
          <div class="right">{{transferType}}</div>
        </el-col>
      </el-row>
      <el-row style="borderTop:0">
        <el-col :span="12" style="height:auto;">
          <div class="left">附件</div>
          <div class="right">
            <up-load v-if="dialogFormVisible" v-model="fileToken" :hiddenUpload="true"></up-load>
          </div>
        </el-col>
      </el-row>
      <el-table :data="tableData" border style="margin:5px 0;">
        <el-table-column type="index" label="序号" />
        <el-table-column prop="unitName" label="会员单位"></el-table-column>
        <el-table-column prop="serviceFee" label="交易服务费(不含税)(元）" />
        <el-table-column prop="percentage" label="分成比例%"></el-table-column>
        <el-table-column prop="awardAmount" label="分成金额(不含税)(元)" />
        <el-table-column prop="taxRateName" label="税率%"></el-table-column>
        <el-table-column prop="taxation" label="税费（元）" />
        <el-table-column prop="awardAmountTax" label="分成金额(含税)(元)" />
      </el-table>

    </el-dialog>
  </div>
</template>

<script>
import upLoad from "../../coomComponents/upload/src/upload";

export default {
  components: { upLoad },
  filters: {
    getTitle(val) {
      if (val == "applicantDepartment") return "所在的部门";
      else if (val == "applicantName") return "姓名";
      else if (val == "applyName") return "会议名称";
      else if (val == "applyNo") return "表单号";
      else if (val == "applyStatusName") return "状态";
      else if (val == "applyTime") return "申请日期";
      else if (val == "projName") return "项目名称";
      else if (val == "recommenderName") return "推荐人";
      else if (val == "remark") return "备注";
      else if (val == "dealNo") return "成交确认文号";
      else if (val == "organizDeptName") return "承办部门";
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
      fileToken: "",
      transferNameName:'',
      transferType:"",
      assigneeName:"",
      assigneeTypeName:"",
      tableData:[],
    };
  },
  methods: {
    showDialog(val) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.data.applicantDepartment = val[0].applicantDepartment;
      this.data.applicantName = val[0].applicantName;
      this.data.applyNo = val[0].applyNo;
      this.data.applyStatusName = val[0].applyStatusName;
      this.data.applyTime = val[0].applyTime;

      this.data.projName = val[0].projName;
      this.data.recommenderName = val[0].recommenderName;
      this.data.dealNo = val[0].dealNo;
      this.data.organizDeptName = val[0].organizDeptName;
      this.data.projManagerName = val[0].projManagerName;
      this.data.receiveDealAmt = val[0].receiveDealAmt;
      this.data.arriveDealAmt = val[0].arriveDealAmt;
      this.data.receiveServiceFee = val[0].receiveServiceFee;
      this.data.serviceFee = val[0].serviceFee;
      this.data.payMemberMoney = val[0].payMemberMoney;
      this.data.memberMoney = val[0].memberMoney;

      this.data.projIncome = val[0].projIncome;
      this.data.percentage = val[0].percentage;
      this.data.awardAmount = val[0].awardAmount;
      this.data.recommendDt = val[0].recommendDt;



      this.transferNameName = val[0].transferNameName;
      this.assigneeTypeName = val[0].assigneeTypeName;

      this.transferType = val[0].transferType;
      this.assigneeName = val[0].assigneeName;

      this.tableData = val[0].itemVOS;


      this.fileToken = val[0].attaFile == null ? "" : val[0].attaFile;
    }
  }
};
</script>


