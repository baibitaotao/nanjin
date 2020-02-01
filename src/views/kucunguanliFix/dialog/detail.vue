<template>
  <div class="detail">
    <el-dialog title="详情页" :visible.sync="dialogFormVisible">
      <el-row>
        <el-col :span="12" v-for="(val,key,index) in data" :key="index">
          <div class="left">{{key|getTitle}}</div>
          <div class="right">{{val}}</div>
        </el-col>
      </el-row>
      <el-row style="borderTop:0px">
        <el-col :span="24" style="height:80px">
          <div class="left">编号</div>
          <div class="right">
            <el-input
              :disabled="true"
              type="textarea"
              :rows="2"
              :cols="90"
              placeholder="请输入内容"
              v-model="goodsnumber"
            />
          </div>
        </el-col>
      </el-row>
      <el-row style="borderTop:0px">
        <el-col :span="24">
          <div class="left">备注</div>
          <div class="right">{{remark}}</div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  filters: {
    getTitle(val) {
      if (val == "unitPrice") return "单价(元)";
      else if (val == "applicantName") return "姓名";
      else if (val == "applyName") return "会议名称";
      else if (val == "applyNo") return "表单号";
      else if (val == "applyStatusName") return "状态";
      else if (val == "scrapDt") return "入库时间";
      else if (val == "remark") return "备注";
      else if (val == "patentName") return "固定资产分类";
      else if (val == "itemName") return "领用种类";
      else if (val == "amount") return "数量";
      else if (val == "goodsnumber") return "编号";
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      data: {},
      fileToken: "",
      remark: "",
      totalMoney: "",
      goodsnumber: ""
    };
  },
  methods: {
    showDialog(key, val) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.data = {};
      if (key === "2") {
        this.data.patentName = val[0].patentName;
        this.data.itemName = val[0].itemName;
        this.data.applyNo = val[0].applyNo;
        this.goodsnumber = val[0].goodsnumber;
        this.remark = val[0].remark;
      } else if (key === "1") {
        this.data.patentName = val[0].patentName;
        this.data.itemName = val[0].itemName;
        this.data.applyNo = val[0].applyNo;
        this.goodsnumber = val[0].goodsnumber;
        this.remark = val[0].remark;
        this.data.scrapDt = val[0].scrapDt;
        this.data.unitPrice = val[0].unitPrice;
        this.data.amount = val[0].amount;
      }
    }
  }
};
</script>


