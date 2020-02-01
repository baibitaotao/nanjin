<template>
  <div class="addOrModifyLC">
    <el-dialog width="80%" title="选择人员" :visible.sync="innerVisible" append-to-body>
      <select-person v-if="innerVisible" v-model="userId" @update-value="getselectItemMP" />
    </el-dialog>
    <!-- 项目基本信息 -->
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="申请单号">
              <el-input v-model="fixedData.applyNo" :disabled="true" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-form-item label="申请部门">
              <el-input v-model="fixedData.applicantDepartment" :disabled="true" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="申请人">
              <el-input v-model="fixedData.applicantName" :disabled="true" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-form-item label="申请日期">
              <el-input v-model="fixedData.applyTime" :disabled="true" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="项目名称" prop="projName">
              <el-input v-model="ruleForm.projName" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="成交确认文号" prop="dealNo">
              <el-input v-model="ruleForm.dealNo" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="承办部门" prop="organizDept">
              <!-- <el-input v-model="ruleForm.organizDept" size="small" /> -->
              <el-cascader
                class="chenban"
                :options="options"
                :show-all-levels="false"
                size="small"
                v-model="ruleForm.organizDept"
                :props="defaultProps"
              ></el-cascader>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="项目负责人" prop="projManager">
              <el-input
                v-model="ruleForm.projManager"
                @focus="selectPerson('recordPerson1')"
                size="small"
              />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="市场信息推荐人" prop="recommender">
              <el-input
                v-model="ruleForm.recommender"
                @focus="selectPerson('recordPerson2')"
                size="small"
              />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item style="position: relative">
              <el-select
                slot="label"
                v-model="ruleForm.assigneeType"
                class="select-label"
                @change="ruleForm.transferName = ruleForm.assigneeType"
              >
                <el-option
                  v-for="(item,index) in selectLabelLeft"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-input v-model="ruleForm.assigneeName" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item :label="ruleForm.transferName === 1 ? '受让方' : '资金方'">
              <el-input v-model="ruleForm.transferType" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="应收成交金额(元)">
              <el-input v-model="ruleForm.receiveDealAmt" type="number" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="已到账成交金额(元)">
              <el-input v-model="ruleForm.arriveDealAmt" type="number" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="应收交易服务费(元)">
              <el-input v-model="ruleForm.receiveServiceFee" type="number" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="交易服务费(不含税)(元)">
              <el-input v-model="ruleForm.serviceFee" type="number" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="应支付会员分成(元)">
              <el-input v-model="payMemberMoney" type="number" :disabled="true" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="会员分成(不含税)(元)">
              <el-input v-model="memberMoney" type="number" :disabled="true" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- 会员分成明细 -->
    <el-button type="danger" size="mini" style="margin-top: 20px;" @click="addmemberMoney">新增</el-button>
    <el-table :data="tableData" border style="margin:5px 0;">
      <el-table-column type="index" label="序号" />
      <el-table-column prop="unitName" label="会员单位">
        <template slot-scope="scope">
          <el-input v-model="scope.row.unitName" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="serviceFee" label="交易服务费(不含税)(元）" :formatter="serviceFee" />
      <el-table-column prop="percentage" label="分成比例%">
        <template slot-scope="scope">
          <el-input v-model="scope.row.percentage" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="awardAmount" label="分成金额(不含税)(元)" :formatter="awardAmountTable" />
      <el-table-column prop="taxRate" label="税率%">
        <template slot-scope="scope">
          <el-select v-model="scope.row.taxRate">
            <el-option
              v-for="(item,index) in selectTable"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="taxation" label="税费（元）" :formatter="taxation" />
      <el-table-column prop="awardAmountTax" label="分成金额(含税)(元)" :formatter="awardAmountTax" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a @click.prevent="delmemberMoney(scope.$index)" style="color: #b40005">删除</a>
        </template>
      </el-table-column>
    </el-table>

    <!-- 市场信息奖励 -->
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="项目净收入(扣除会员分成)" prop="projIncome">
              <el-input v-model="projIncome" type="number" :disabled="true" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="提成比例(%)" prop="percentage">
              <el-input v-model="ruleForm.percentage" type="number" size="small" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="市场信息奖励金额(元)">
              <el-input v-model="awardAmount" type="number" :disabled="true" size="small" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form-item label="日期">
              <el-date-picker
                v-model="ruleForm.recommendDt"
                type="date"
                size="small"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
              />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple fujian">
            <el-form-item label="附件" prop="attaFile">
              <span style="color:#FF0000">说明:请将项目资金结算审批的线下审批文件作为附件上传</span>
              <up-load v-if="dialogFormVisible" v-model="ruleForm.attaFile" upload-title="点击上传附件" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import upLoad from "../../coomComponents/upload/src/upload";
import selectPerson from "../../coomComponents/TransferTreeSelect/index";

export default {
  components: { upLoad, selectPerson },
  data() {
    let meetingAmountVerify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入金额"));
      } else if (
        !/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(
          value
        )
      ) {
        callback(new Error("金额不符合规则"));
      } else {
        callback();
      }
    };
    return {
      defaultProps: {
        label: "name",
        value: "id"
      },
      options: [],
      selectLabelLeft: [],
      selectLabelRight: [],
      // 表格下拉框
      selectTable: [],
      // 表格数据
      tableData: [
        {
          itemId: 0,
          unitName: "",
          serviceFee: "",
          percentage: "",
          awardAmount: "",
          taxRate: 1,
          taxation: "",
          awardAmountTax: ""
        }
      ],
      addTableDataItem: {},
      userId: "",
      userIdProjManager: "",
      userIdRecommender: "",
      meetingOptions: [],
      fileToken: "",
      isAddOrMOdify: "",
      dialogFormVisible: false,
      innerVisible: false,
      formLabelWidth: "120",
      unitOptions: [],
      vacationType: [],
      WhichClick: "",
      newId: 0,
      ruleForm: {
        projName: "",
        dealNo: "",
        organizDept: [],
        projManager: "",
        recommender: "",
        assigneeType: 1,
        assigneeName: "",
        transferType: "",
        transferName: 1,
        receiveDealAmt: "",
        arriveDealAmt: "",
        receiveServiceFee: "",
        serviceFee: "",
        payMemberMoney: "",
        memberMoney: "",
        projIncome: "",
        percentage: "",
        awardAmount: "",
        recommendDt: "",
        attaFile: ""
      },
      fixedData: {},
      rules: {
        projName: [
          {
            required: "true",
            message: "项目名称必填",
            trigger: "blur"
          }
        ],
        dealNo: [
          {
            required: "true",
            message: "成交确认文号必填",
            trigger: "blur"
          }
        ],
        organizDept: [
          {
            required: "true",
            message: "承办部门必填",
            trigger: "blur"
          }
        ],
        projManager: [
          {
            required: "true",
            message: "项目负责人必填",
            trigger: "change"
          }
        ],
        recommender: [
          {
            required: "true",
            message: "市场信息推荐人必填",
            trigger: "change"
          }
        ],
        projIncome: [
          {
            required: "true",
            message: "净收入必填",
            trigger: "blur"
          }
        ],
        percentage: [
          {
            required: "true",
            message: "提成比例必填",
            trigger: "blur"
          }
        ],
        attaFile: [
          {
            required: "true",
            message: "附件必填",
            trigger: "change"
          }
        ]
      }
    };
  },
  computed: {
    // 应支付会员分成 = (明细列表中的“分成金额（含税）”累计值)
    payMemberMoney() {
      this.ruleForm.payMemberMoney = this.tableData.reduce((prev, cur) => {
        if (!cur.awardAmountTax) return;
        return prev + parseFloat(cur.awardAmountTax);
      }, 0);
      return this.ruleForm.payMemberMoney;
    },

    // 会员分成不含税 = (明细列表中的“分成金额（不含税）”累计值)
    memberMoney() {
      this.ruleForm.memberMoney = this.tableData.reduce((prev, cur) => {
        if (!cur.awardAmount) return;
        return prev + parseFloat(cur.awardAmount);
      }, 0);
      return this.ruleForm.payMemberMoney;
    },

    // 项目净收入（扣除会员分成）= 交易服务费（不含税）（元）- 会员分成（不含税）（元）
    projIncome() {
      if (!this.ruleForm.payMemberMoney || !this.ruleForm.memberMoney) return;
      this.ruleForm.projIncome =
        this.ruleForm.serviceFee - this.ruleForm.memberMoney;
      return this.ruleForm.projIncome;
    },

    // 市场信息奖励金额（元）= (项目净收入（元）*提成比例（%）) / 100
    awardAmount() {
      if (!this.ruleForm.projIncome || !this.ruleForm.percentage) return;
      this.ruleForm.awardAmount =
        (this.ruleForm.projIncome * this.ruleForm.percentage) / 100;
      return this.ruleForm.awardAmount;
    }
  },
  methods: {
    // 弹窗添加按钮
    addmemberMoney() {
      // 每次重置对象
      this.addTableDataItem = {
        itemId: "",
        unitName: "",
        serviceFee: "",
        percentage: "",
        awardAmount: "",
        taxRate: 1,
        taxation: "",
        awardAmountTax: ""
      };
      this.addTableDataItem.itemId =
        this.tableData[this.tableData.length - 1].itemId + 1;
      this.tableData.push(this.addTableDataItem);
    },
    // 弹窗删除按钮
    delmemberMoney(index) {
      if (this.tableData.length <= 1) {
        this.$message({
          message: "会员分成明细至少要有一条数据",
          type: "warning"
        });
        return;
      }
      this.tableData.splice(index, 1);
    },
    filterTableValue(itemId, cellValue, result) {
      this.tableData.forEach((item, index) => {
        if (item.itemId === itemId) {
          item[cellValue] = result;
        }
      });
    },
    // 交易服务费(不含税)(元）= 应收交易服务费（元）/(1+税率%)
    serviceFee(row) {
      if (!this.ruleForm.receiveServiceFee) return;
      const itemId = row.itemId;
      const result =
        this.ruleForm.receiveServiceFee / (1 + parseFloat(row.taxRate));
      this.filterTableValue(itemId, "serviceFee", result);
      return result;
    },
    // 分成金额(不含税)(元) = 交易服务费(不含税)+（1+分成比例）
    awardAmountTable(row) {
      if (!row.serviceFee || !row.percentage) return;
      const itemId = row.itemId;
      const result =
        parseFloat(row.serviceFee) + (1 + parseFloat(row.percentage));
      this.filterTableValue(itemId, "awardAmount", result);
      return result;
    },

    // 税费（元） = 分成金额(不含税)+（1+税率）
    taxation(row) {
      if (!row.awardAmount) return;
      const itemId = row.itemId;
      const result =
        parseFloat(row.awardAmount) + (1 + parseFloat(row.taxRate));
      this.filterTableValue(itemId, "taxation", result);
      return result;
    },

    // 分成金额(含税)(元) = 会员分成(不含税) + 税率
    awardAmountTax(row) {
      if (!this.ruleForm.memberMoney) return;
      const itemId = row.itemId;
      const result =
        parseFloat(this.ruleForm.memberMoney) + parseFloat(row.taxRate);
      this.filterTableValue(itemId, "awardAmountTax", result);
      return result;
    },

    getselectItemMP(v1, v2) {
      if (this.WhichClick === "recordPerson1") {
        this.userId = v1;
        this.userIdProjManager = v1;
        this.ruleForm.projManager = v2.join(",");
      }
      if (this.WhichClick === "recordPerson2") {
        this.userId = v1;
        this.userIdRecommender = v1;
        this.ruleForm.recommender = v2.join(",");
      }
      this.innerVisible = !this.innerVisible;
    },

    selectPerson(val) {
      this.innerVisible = !this.innerVisible;
      this.WhichClick = val;
      if (this.isAddOrMOdify) {
        this.userId = "";
      }
    },
    showDialog(val, item) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.$store
        .dispatch("officeStock/commonTCodeGetCodeByParentIdVal", "11020")
        .then(res => {
          if (res.status !== "0") {
            this.$message.error(res.msg);
          }
          const arr = [];
          res.data.options.forEach(item => {
            const obj = {};
            obj.value = Number(item.value);
            obj.label = item.label;
            arr.push(obj);
          });
          this.selectLabelLeft = arr;
        });
      this.$store.dispatch("xiangmuzijin/treeGetTreeList").then(res => {
        res.data.model.children.forEach(el => {
          el.children.forEach(item => {
            if (item.type == "PERSON") {
              delete el.children;
            }
            if (item.children.length !== 0) {
              item.children.forEach(e => {
                if (e.type == "PERSON") delete item.children;
              });
            }
          });
        });
        let arr = [];
        arr.push(res.data.model);
        this.options = arr;
      });
      this.$store
        .dispatch("officeStock/commonTCodeGetCodeByParentIdVal", "11021")
        .then(res => {
          if (res.status !== "0") {
            this.$message.error(res.msg);
          }
          const arr = [];
          res.data.options.forEach(item => {
            const obj = {};
            obj.value = Number(item.value);
            obj.label = item.label;
            arr.push(obj);
          });
          this.selectLabelRight = arr;
        });
      this.$store
        .dispatch("officeStock/commonTCodeGetCodeByParentIdVal", "11022")
        .then(res => {
          if (res.status !== "0") {
            this.$message.error(res.msg);
          }
          const arr = [];
          res.data.options.forEach(item => {
            const obj = {};
            obj.value = Number(item.value);
            obj.label = item.label;
            arr.push(obj);
          });
          this.selectTable = arr;
        });

      if (val === "111") {
        this.fixedData = item;
        this.isAddOrMOdify = true;
        this.tableData = [
          {
            itemId: 0,
            unitName: "",
            serviceFee: "",
            percentage: "",
            awardAmount: "",
            taxRate: 1,
            taxation: "",
            awardAmountTax: ""
          }
        ];
        for (var i in this.ruleForm) {
          this.$set(this.ruleForm, i, "");
        }
      } else if (val === "112") {
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applicantName = item[0].applicantName;
        this.fixedData.applyTime = item[0].applyTime;
        this.userIdProjManager = item[0].projManager;
        this.userIdRecommender = item[0].recommender;
        this.ruleForm.projManager = item[0].projManagerName;
        this.ruleForm.recommender = item[0].recommenderName;

        this.ruleForm.projName = item[0].projName;
        this.ruleForm.dealNo = item[0].dealNo;
        this.ruleForm.organizDept = item[0].organizDept.split(",");
        this.ruleForm.assigneeType = Number(item[0].assigneeType);
        this.ruleForm.assigneeName = item[0].assigneeName;
        this.ruleForm.transferType = item[0].transferType;
        this.ruleForm.transferName = Number(item[0].transferName);
        this.ruleForm.receiveDealAmt = item[0].receiveDealAmt;
        this.ruleForm.arriveDealAmt = item[0].arriveDealAmt;
        this.ruleForm.receiveServiceFee = item[0].receiveServiceFee;
        this.ruleForm.serviceFee = item[0].serviceFee;
        this.ruleForm.payMemberMoney = item[0].payMemberMoney;
        this.ruleForm.memberMoney = item[0].memberMoney;
        this.ruleForm.projIncome = item[0].projIncome;
        this.ruleForm.percentage = item[0].percentage;
        this.ruleForm.awardAmount = item[0].awardAmount;
        this.ruleForm.recommendDt = item[0].recommendDt;
        this.ruleForm.attaFile = item[0].attaFile == 'null'?'':item[0].attaFile
        this.ruleForm.purchaseId = item[0].purchaseId;
        this.tableData = [];
        item[0].itemVOS.forEach(el => {
          el.itemId = ++this.newId;
          this.tableData.push(el);
        });
        this.isAddOrMOdify = false;
      }

      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },
    submitForm(formName, val) {
      // this.dialogFormVisible = !this.dialogFormVisible;
      let swatch = false
            let params = {};
             params.applyNo = this.fixedData.applyNo;
             params.projManagerName = this.ruleForm.projManager;
             params.recommenderName = this.ruleForm.recommender;
             params.projManager = this.userIdProjManager;
             params.recommender = this.userIdRecommender;
             params.itemDTOS = this.tableData;
             params.projName = this.ruleForm.projName
             params.dealNo = this.ruleForm.dealNo
             params.projManager = this.ruleForm.projManager
             params.recommender= this.ruleForm.recommender
             params.assigneeType= this.ruleForm.assigneeType
             params.assigneeName= this.ruleForm.assigneeName
             params.transferType= this.ruleForm.transferType
             params.transferName= this.ruleForm.transferName
             params.receiveDealAmt= this.ruleForm.receiveDealAmt
             params.arriveDealAmt= this.ruleForm.arriveDealAmt
             params.receiveServiceFee= this.ruleForm.receiveServiceFee
             params.serviceFee= this.ruleForm.serviceFee
             params.payMemberMoney= this.ruleForm.payMemberMoney
             params.memberMoney= this.ruleForm.memberMoney
             params.projIncome= this.ruleForm.projIncome
             params.percentage= this.ruleForm.percentage
             params.awardAmount= this.ruleForm.awardAmount
             params.recommendDt= this.ruleForm.recommendDt
             params.attaFile= this.ruleForm.attaFile
              let arr = []
               for(let i = 0;i<this.ruleForm.organizDept.length;++i){
                   arr.push(this.ruleForm.organizDept[i])
               }
               let str = arr.join(",")
             params.organizDept = str;
      this.$refs[formName].validate(valid => {
        if (valid) {
          swatch = true
                if (val === "update") {
                    this.$store
                      .dispatch("xiangmuzijin/capitalSettleUpdate", params)
                      .then(res => {});
                  }
        } else {
          swatch = false
        }
      });
      return swatch
    }
  }
};
</script>