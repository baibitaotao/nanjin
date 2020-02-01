<template>
  <div class="detail">
    <el-dialog title="详情页" :visible.sync="dialogFormVisible">
      <el-dialog width="30%" title="赎回明细" :visible.sync="innerVisible" append-to-body>
        <div class="detail">
          <el-row>
            <el-col
              :span="12"
              v-for="(val,key,index) in innerData"
              :key="index"
              style="backgroundColor:#fff"
            >
              <div class="left">{{key|getTitle}}</div>
              <div class="right">{{val}}</div>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-table :data="minxiData" border style="width: 100%;marginTop:10px;">
            <el-table-column prop="daysNum" label="期限"></el-table-column>
            <el-table-column prop="expectEarn" label="收益率(%)"></el-table-column>

            <el-table-column prop="redemSum" label="赎回本金(元)"></el-table-column>

            <el-table-column label="利息(元)">
              <template
                slot-scope="scope"
              >{{scope.row.redemSum * (scope.row.expectEarn/365) * scope.row.daysNum}}</template>
            </el-table-column>

            <el-table-column prop="backDt" label="赎回日期"></el-table-column>
          </el-table>
        </div>
      </el-dialog>
      <span class="title">购买基本信息</span>
      <el-row>
        <el-col :span="12" v-for="(val,key,index) in data" :key="index">
          <div class="left">{{key|getTitle}}</div>
          <div class="right">{{val}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="height:auto;borderTop:0">
          <div class="left">备注&nbsp;</div>
          <div class="right" style="width:70%">
            <el-input v-model="remark" type="textarea" style="marginBottom:5px;" disabled="true"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row style="borderTop:0">
        <el-col :span="24" style="height:auto;">
          <div class="left">附件</div>
          <div class="right">
            <up-load v-if="dialogFormVisible" v-model="fileToken" :hiddenUpload="true"></up-load>
          </div>
        </el-col>
      </el-row>
      <span class="title">赎回基本信息</span>
      <el-table :data="shuhuitableData" border style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="redemSum" label="本次拟赎回金额(元)"></el-table-column>
        <el-table-column prop="noRedemSum" label="未赎回本金(元)"></el-table-column>
        <el-table-column prop="redemSumToatl" label="累计赎回金额(元)"></el-table-column>
        <el-table-column prop="interestToatl" label="累计利息(元)"></el-table-column>
        <el-table-column prop="applyStatusName" label="状态"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="shuhuimingxi(scope.row)" type="text">赎回明细</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import upLoad from "../../coomComponents/upload/src/upload";

export default {
  filters: {
    getTitle(val) {
      if (val == "applicantDepartment") return "所在的部门";
      else if (val == "applicantName") return "姓名";
      else if (val == "applyName") return "会议名称";
      else if (val == "applyNo") return "表单号";
      else if (val == "applyStatusName") return "状态";
      else if (val == "applyTime") return "申请日期";
      else if (val == "bankName") return "开户行";
      else if (val == "buyDt") return "购买日期";
      else if (val == "buyLimit") return "购买金额(元)";
      else if (val == "buyNo") return "购买编号";
      else if (val == "daysNum") return "期限";
      else if (val == "expectEarn") return "预计收益率(%)";
      else if (val == "financialNo") return "理财产品编号";
      else if (val == "interestTotal") return "累计利息";
      else if (val == "noRedemSum") return "未赎回本金";
      else if (val == "paymentTypeName") return "支付方式";
      else if (val == "redemSumTotal") return "累计赎回";
      else if (val == "riskLevelOneName") return "一级风险";
      else if (val == "riskLevelTwoName") return "二级风险";
      else if (val == "riskLevelThreeName") return "三级风险";
      else if (val == "productName") return "理财产品名称";
      else if (val == "remark") return "备注";
      else if (val == "startDt") return "起息日";
      else if (val == "redemSum") return "赎回金额";
      else if (val == "redemSumToatl") return "累计赎回本金";
      else if (val == "noRedemSum") return "未赎回本金";
      else if (val == "interestToatl") return "累计利息";
    }
  },
  data() {
    return {
      fileToken: "",
      dialogFormVisible: false,
      innerVisible: false,
      data: {},
      detailOrshuhui: false,
      shuhuitableData: [],
      innerData: {},
      minxiData: [],
      remark: ""
    };
  },
  components: { upLoad },
  methods: {
    shuhuimingxi(val) {
      this.innerVisible = !this.innerVisible;
      this.innerData.redemSum = val.redemSum;
      this.innerData.redemSumToatl = val.redemSumToatl;
      // this.innerData.noRedemSum = val.noRedemSum;
      // this.innerData.interestToatl = val.interestToatl;
      this.minxiData = val.finanBackVOs;
    },
    showDialog(key, val) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.data.applicantDepartment = val.applicantDepartment;
      this.data.applicantName = val.applicantName;
      this.data.applyNo = val.applyNo;
      this.data.applyStatusName = val.applyStatusName;
      this.data.applyTime = val.applyTime;
      this.data.bankName = val.bankName;
      this.data.buyLimit = val.buyLimit;
      this.data.buyNo = val.buyNo;
      this.data.daysNum = val.daysNum;
      this.data.expectEarn = val.expectEarn;
      this.data.financialNo = val.financialNo;
      this.data.noRedemSum = val.noRedemSum;
      // this.data.redemSumTotal = val.redemSumTotal;
      this.data.interestTotal = val.interestTotal;
      this.data.paymentTypeName = val.paymentTypeName;
      this.data.productName = val.productName;
      this.data.riskLevelOneName = val.riskLevelOneName;
      this.data.riskLevelTwoName = val.riskLevelTwoName;
      this.data.riskLevelThreeName = val.riskLevelThreeName;
      this.data.startDt = val.startDt;
      this.remark = val.remark;
      this.fileToken = val.attachment == null ? "" : val.attachment;
      if (key === "200") {
        this.detailOrshuhui = true;
      }
      this.shuhuitableData = val.toListVOS;
    }
  }
};
</script>


