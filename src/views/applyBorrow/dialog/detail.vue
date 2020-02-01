<template>
  <div class="detail">
    <el-dialog title="详情页" :visible.sync="dialogFormVisible">
      <el-row>
        <el-col :span="12" v-for="(val,key,index) in data" :key="index">
          <div class="left">{{key|getTitle}}</div>
          <div class="right">{{val}}</div>
        </el-col>
      </el-row>
      <el-row v-if="isshowDesc">
        <el-col :span="24" style="height:auto;">
          <div class="left">借款事由&nbsp;</div>
          <div class="right" style="width:70%">
            <el-input
              size="small"
              v-model="borrowDesc"
              type="textarea"
              style="marginBottom:5px;"
              disabled="true"
            ></el-input>
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
    </el-dialog>
  </div>
</template>

<script>
import upLoad from "../../coomComponents/upload/src/upload";

export default {
  components: {
    upLoad
  },
  filters: {
    getTitle(val) {
      if (val == "applicantDepartment") return "申请部门";
      else if (val == "applicantName") return "申请人";
      else if (val == "applyName") return "会议名称";
      else if (val == "applyNo") return "表单号";
      else if (val == "applyStatusName") return "状态";
      else if (val == "applyTime") return "申请日期";
      else if (val == "backDt") return "还款计划";
      else if (val == "borrowAmount") return "金额(元)";
      else if (val == "borrowDesc") return "借款事由";
      else if (val == "isEntryName") return "款项已入账";
      else if (val == "openBank") return "开户行";
      else if (val == "paymentTypeName") return "付款方式";
      else if (val == "useTypeName") return "用途";
      else if (val == "accountNum") return "账号";
      else if (val == "accountName") return "收款单位";
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      data: {},
      fileToken: "",
      borrowDesc: "",
      isshowDesc: false
    };
  },
  methods: {
    showDialog(val) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.data = {};
      this.data.applyNo = val[0].applyNo;
      this.data.applicantDepartment = val[0].applicantDepartment;
      this.data.applicantName = val[0].applicantName;
      this.data.applyTime = val[0].applyTime;
      this.data.paymentTypeName = val[0].paymentTypeName;
      this.data.useTypeName = val[0].useTypeName + "—" + val[0].useTypeName2;
      this.data.accountNum = val[0].accountNum;
      this.data.borrowAmount = val[0].borrowAmount;
      this.data.accountName = val[0].accountName;
      this.data.openBank = val[0].openBank;
      this.isshowDesc = false;
      if (val[0].useType == 2 && val[0].useType2 == 3) {
        this.data.isEntryName = val[0].isEntryName;
      } else if (val[0].useType == 1 && val[0].useType2 == 1) {
        this.data.backDt = val[0].backDt;
        this.borrowDesc = val[0].borrowDesc;
        this.isshowDesc = true;
      }

      this.fileToken = val[0].attaFile == null ? "" : val[0].attaFile;
    }
  }
};
</script>


