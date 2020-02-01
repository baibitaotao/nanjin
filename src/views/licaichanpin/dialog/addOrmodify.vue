<template>
  <div class="addOrModify">
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <span class="title">购买基本信息</span>
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="申请单号">
                <el-input v-model="fixedData.applyNo" :disabled="true" size="small"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="申请部门">
                <el-input v-model="fixedData.applicantDepartment" :disabled="true" size="small"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="申请人">
                <el-input v-model="fixedData.applicantName" :disabled="true" size="small"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="申请日期">
                <el-input v-model="fixedData.applyTime" :disabled="true" size="small"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple" prop="financialNo">
              <el-form-item label="理财产品编号(银行)">
                <el-input v-model="ruleForm.financialNo" :disabled="shuhuiSwatch"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="理财产品名称" prop="productName">
                <el-input v-model="ruleForm.productName" :disabled="shuhuiSwatch"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="开户银行" prop="bankName">
                <el-input v-model="ruleForm.bankName" :disabled="shuhuiSwatch"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="结算方式" prop="paymentType">
                <el-select
                  v-model="ruleForm.paymentType"
                  placeholder="请选择结算方式"
                  style="marginRight:5px"
                  :disabled="shuhuiSwatch"
                >
                  <el-option
                    v-for="item in paymentTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="期限(天)" prop="daysNum">
                <el-input v-model="ruleForm.daysNum" :disabled="shuhuiSwatch"></el-input>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="预计收益率(%)" prop="expectEarn">
                <el-input v-model="ruleForm.expectEarn" :disabled="shuhuiSwatch"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="起息日" prop="startDt">
                <el-date-picker
                  :disabled="shuhuiSwatch"
                  v-model="ruleForm.startDt"
                  align="right"
                  size="small"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="购买金额(元)">
                <el-input v-model="ruleForm.buyLimit" :disabled="shuhuiSwatch"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="购买日期">
                <el-date-picker
                  :disabled="shuhuiSwatch"
                  v-model="ruleForm.buyDt"
                  align="right"
                  size="small"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="购买编号" prop="buyNo">
                <el-input v-model="ruleForm.buyNo" :disabled="true"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-form-item label="风险等级" prop="riskLevelOne">
                <div style="display:flex;marginTop:5px;marginLeft:5px">
                  <el-select
                    v-model="ruleForm.riskLevelOne"
                    placeholder="请选择一级类别"
                    style="marginRight:5px"
                    @change="delChange"
                    :disabled="shuhuiSwatch"
                  >
                    <el-option
                      v-for="item in oneOptions"
                      :key="item.codeValue"
                      :label="item.codeName"
                      :value="item.codeValue"
                    ></el-option>
                  </el-select>

                  <el-select
                    v-model="ruleForm.riskLevelTwo"
                    placeholder="请选择二级类别"
                    style="marginRight:5px"
                    :disabled="shuhuiSwatch"
                  >
                    <el-option
                      v-for="item in twoOptions"
                      :key="item.codeValue"
                      :label="item.codeName"
                      :value="item.codeValue"
                    ></el-option>
                  </el-select>

                  <el-select
                    v-model="ruleForm.riskLevelThree"
                    placeholder="请选择三级类别"
                    :disabled="shuhuiSwatch"
                  >
                    <el-option
                      v-for="item in threeOptions"
                      :key="item.codeValue"
                      :label="item.codeName"
                      :value="item.codeValue"
                    ></el-option>
                  </el-select>
                </div>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="备注" prop="remark">
                <el-input
                  v-model="ruleForm.remark"
                  type="textarea"
                  rows="3"
                  cols="110"
                  :disabled="shuhuiSwatch"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple fujian">
              <el-form-item label="附件">
                <up-load
                  v-if="dialogFormVisible"
                  uploadTitle="点击上传附件"
                  v-model="ruleForm.attachment"
                  :hiddenUpload="shuhuiSwatch"
                ></up-load>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div v-if="shuhuiSwatch" class="shuhui">
        <span class="title">赎回基本信息</span>
        <el-form>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item label="拟赎回金额(元)">
                  <span>{{redemSum}}</span>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <el-form-item label="未赎回本金(元)">
                  <span>{{basicIfo.noRedemSum}}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item label="累计赎回金额(元)">
                  <span>{{basicIfo.redemSumToatl}}</span>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <el-form-item label="累计利息(元)">
                  <span>{{basicIfo.interestToatl}}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-form>
        <span class="title">赎回明细信息</span>
        <div style="marginBottom:5px">
          <el-button type="danger" size="mini" @click="add">新增</el-button>
          <el-button
            type="danger"
            size="mini"
            @click="detel"
            :disabled="selectedItem.length  !== 1"
          >删除</el-button>
        </div>

        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="70"></el-table-column>

          <el-table-column label="期限(天)">
            <template slot-scope="scope">
              <el-input type="number" v-model="scope.row.daysNum" />
            </template>
          </el-table-column>

          <el-table-column label="收益率(%)">
            <template slot-scope="scope">
              <el-input v-model="scope.row.expectEarn" />
            </template>
          </el-table-column>

          <el-table-column label="赎回本金(元)">
            <template slot-scope="scope">
              <el-input v-model="scope.row.redemSum" />
            </template>
          </el-table-column>

          <el-table-column label="利息(元)">
            <template
              slot-scope="scope"
            >{{scope.row.redemSum * (scope.row.expectEarn/365) * scope.row.daysNum}}</template>
          </el-table-column>

          <el-table-column label="赎回日期">
            <template slot-scope="scope">
              <el-date-picker
                v-model="scope.row.backDt"
                type="date"
                size="small"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="submit" v-show="!shuhuiSwatch">
        <el-button
          type="danger"
          @click="submitForm('ruleForm','save')"
          size="mini"
        >{{isAddOrMOdify?'保存':'更新'}}</el-button>
        <el-button type="danger" @click="submitForm('ruleForm','submit')" size="mini">提交</el-button>
      </div>

      <div class="submit" v-show="shuhuiSwatch">
        <el-button type="danger" @click="addshuhui" size="mini">{{addOrUpdate?'新增赎回':'更新赎回'}}</el-button>
        <el-button type="danger" size="mini" @click="shuhuiSubmit" :disabled="isForbiden">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import upLoad from "../../coomComponents/upload/src/upload";
export default {
  components: { upLoad },
  computed: {
    redemSum() {
      let sum = 0;
      this.tableData.forEach(el => {
        sum = sum + Number(el.redemSum);
      });
      return sum;
    },
    title() {
      if (this.watchVal === "111") return "理财购买新增";
      else if (this.watchVal === "112") return "理财赎回更新";
      else if (this.watchVal === "200") return "赎回";
    },
    twoOptions() {
      let arr = [];
      this.oneOptions.forEach(el => {
        if (this.ruleForm.riskLevelOne === el.codeValue) {
          arr = el.twoList;
        }
      });
      return arr;
    },
    threeOptions() {
      let arr = [];
      this.oneOptions.forEach(el => {
        if (this.ruleForm.riskLevelOne === el.codeValue) {
          arr = el.threeList;
        }
      });
      return arr;
    }
  },
  data() {
    return {
      isForbiden: false,
      newId: 0,
      oneOptions: [],
      paymentTypeOptions: [],
      isAddOrMOdify: "",
      shuhuiSwatch: false,
      dialogFormVisible: false,
      formLabelWidth: "120",
      watchVal: "",
      tableData: [],
      selectedItem: [],
      addOrUpdate: "",
      basicIfo: {
        applyNo: "",
        noRedemSum: "",
        redemSumToatl: "",
        interestToatl: ""
      },
      ruleForm: {
        financialNo: "",
        productName: "",
        bankName: "",
        paymentType: "",
        daysNum: "",
        expectEarn: "",
        startDt: "",
        buyLimit: "",
        buyDt: "",
        buyNo: "",
        riskLevelOne: "",
        riskLevelTwo: "",
        riskLevelThree: "",
        remark: "",
        attachment: ""
      },
      fixedData: {},
      rules: {
        financialNo: [
          {
            required: "true",
            message: "银行理财产品编号必填",
            trigger: "blur"
          }
        ],
        productName: [
          {
            required: "true",
            message: "产品名称必填",
            trigger: "blur"
          }
        ],
        bankName: [
          {
            required: "true",
            message: "开户行必填",
            trigger: "change"
          }
        ],
        paymentType: [
          {
            required: "true",
            message: "结算方式必填",
            trigger: "change"
          }
        ],
        daysNum: [
          {
            required: "true",
            message: "期限必填",
            trigger: "change"
          }
        ],
        expectEarn: [
          {
            required: "true",
            message: "预计收益率必填",
            trigger: "change"
          }
        ],
        startDt: [
          {
            required: "true",
            message: "起息日必填",
            trigger: "change"
          }
        ],
        riskLevelOne: [
          {
            required: "true",
            message: "风险等级必填",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    add() {
      let obj = {};
      obj.daysNum = "";
      obj.expectEarn = "";
      obj.redemSum = "";
      obj.backDt = "";
      obj.newId = ++this.newId;
      this.tableData.push(obj);
    },
    detel() {},
    delChange() {
      this.ruleForm.riskLevelTwo = "";
      this.ruleForm.riskLevelThree = "";
    },
    showDialog(val, item) {
      this.isForbiden = false;
      this.dialogFormVisible = !this.dialogFormVisible;
      this.watchVal = val;

      this.ruleForm.buyNo = item.buyNo;
      this.$store
        .dispatch("licaichanpin/applyFinancialGetComTomList")
        .then(res => {
          if (res.status !== "0") return this.$message.error("接口出错");
          this.oneOptions = res.data;
        });
      this.$store
        .dispatch("caigoushenqing/commonTCodeGetCodeByParentId", "11018")
        .then(res => {
          let arr = [];
          res.data.options.forEach(el => {
            let obj = {};
            obj.value = el.value;
            obj.label = el.label;
            arr.push(obj);
          });
          this.paymentTypeOptions = arr;
        });
      this.shuhuiSwatch = false;
      if (val == "111") {
        for (var i in this.ruleForm) {
          this.$set(this.ruleForm, i, "");
        }
        this.fixedData = item;
        this.ruleForm.buyNo = item.buyNo;
        this.isAddOrMOdify = true;
      } else if (val == "112" || val == "200") {
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;
        this.ruleForm.financialNo = item[0].financialNo;
        this.ruleForm.productName = item[0].productName;
        this.ruleForm.bankName = item[0].bankName;
        this.ruleForm.paymentType = item[0].paymentType;
        this.ruleForm.daysNum = item[0].daysNum;
        this.ruleForm.expectEarn = item[0].expectEarn;
        this.ruleForm.startDt = item[0].startDt;
        this.ruleForm.buyLimit = item[0].buyLimit;
        this.ruleForm.buyDt = item[0].buyDt;
        this.ruleForm.buyNo = item[0].buyNo;
        this.ruleForm.riskLevelOne = Number(item[0].riskLevelOne);
        this.ruleForm.riskLevelTwo = Number(item[0].riskLevelTwo);
        this.ruleForm.riskLevelThree = Number(item[0].riskLevelThree);

        this.ruleForm.remark = item[0].remark;
        this.ruleForm.attachment = item[0].attachment = null
          ? ""
          : item[0].attachment;
        this.isAddOrMOdify = false;

        if (val === "200") {
          this.shuhuiSwatch = true;
          this.tableData = [];
          if (item[0].isBack === 0) {
            this.addOrUpdate = true;
            let params = { dealMark: "add", applyNo: item[0].applyNo };
            this.$store
              .dispatch("licaichanpin/applyFinanBToToEdit", params)
              .then(res => {
                this.basicIfo.interestToatl = res.data.interestToatl;
                this.basicIfo.noRedemSum = res.data.noRedemSum;
                this.basicIfo.redemSumToatl = res.data.redemSumToatl;
                this.basicIfo.applyNo = res.data.applyNo;
              });
          } else if (item[0].isBack === 1) {
            this.addOrUpdate = false;
            let params = { applyNo: item[0].applyNo };
            this.$store.dispatch("licaichanpin/toUpdate", params).then(res => {
              this.basicIfo.interestToatl = res.data.interestToatl;
              this.basicIfo.noRedemSum = res.data.noRedemSum;
              this.basicIfo.redemSumToatl = res.data.redemSumToatl;
              this.basicIfo.applyNo = res.data.applyNo;
              res.data.finanBackVOs.forEach(el => {
                let obj = {};
                obj.newId = ++this.newId;
                obj.daysNum = Number(el.daysNum);
                obj.expectEarn = el.expectEarn;
                obj.redemSum = el.redemSum;
                obj.backDt = el.backDt;
                this.tableData.push(obj);
              });
            });
          }
        }
      }
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },
    shuhuiSubmit() {
      this.isForbiden = true;
      let params = {};
      params = this.basicIfo;
      params.fApplyNo = this.fixedData.applyNo;
      params.redemSum = this.redemSum;
      params.finanBackDTOS = this.tableData;
      this.$store
        .dispatch("licaichanpin/applyFinanBToSubmit", params)
        .then(res => {
          this.$message.success("提交成功!");
        })
        .finally(res => {
          this.$emit("getTableList");
          this.dialogFormVisible = !this.dialogFormVisible;
          this.isForbiden = false;
        });
    },
    addshuhui() {
      let params = {};
      params = this.basicIfo;
      params.fApplyNo = this.fixedData.applyNo;
      params.redemSum = this.redemSum;
      params.finanBackDTOS = this.tableData;
      this.$store
        .dispatch(
          this.addOrUpdate
            ? "licaichanpin/applyFinanBToAdd"
            : "licaichanpin/applyFinanBToUpdate",
          params
        )
        .then(res => {
          this.$message.success(
            this.addOrUpdate ? "赎回新增成功!" : "赎回更新成功!"
          );
          this.$emit("getTableList");
          this.dialogFormVisible = !this.dialogFormVisible;
        });
    },
    submitForm(formName, val) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = this.ruleForm;
          params.applyNo = this.fixedData.applyNo;
          if (this.shuhuiSwatch === true) {
            if (this.tableData.length === 0)
              return this.$message.warning("明细不能为空");
            let a = false;
            this.tableData.forEach(el => {
              for (const k in el) {
                if (el[k] == "") {
                  a = true;
                  return this.$message.warning("明细存在空值");
                }
              }
            });

            if (a) return;
            params.noRedemSum = this.basicIfo.noRedemSum;
            params.redemSumToatl = this.basicIfo.redemSumToatl;
            params.interestToatl = this.basicIfo.interestToatl;
            params.redemSum = this.redemSum;
            params.finanBackDTOS = this.tableData;
          }
          if (val === "submit") {
            this.isForbiden = true;
            this.$store
              .dispatch("licaichanpin/applyFinancialSubmit", params)
              .then(res => {
                if (res.status == "0") {
                  this.$message.success("提交成功!");
                }
              })
              .finally(res => {
                this.$emit("getTableList");
                this.dialogFormVisible = !this.dialogFormVisible;
                this.isForbiden = false;
              });
          } else {
            this.$store
              .dispatch(
                this.isAddOrMOdify
                  ? "licaichanpin/applyFinancialAdd"
                  : "licaichanpin/applyFinancialUpdate",
                params
              )
              .then(res => {
                if (res.status == "0") {
                  this.$message.success(
                    this.isAddOrMOdify ? "新增成功" : "更新成功"
                  );
                  this.$emit("getTableList");
                  this.dialogFormVisible = !this.dialogFormVisible;
                }
              });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>


<style lang="scss">
.meetingTime {
  .el-form-item__label {
    height: 49px !important;
  }
  .el-form-item__error {
    position: absolute;
    left: 322px;
    top: 0px;
    background-color: #fff;
  }
  .addOrModify .el-col-24 {
    border-bottom: 0px !important;
  }
}

.waichureason {
  .el-form-item__error {
    position: absolute;
    left: 628px;
    top: 0;
    background-color: #fff;
  }
}

.shuhui {
  .el-icon-date {
    transform: translate(-1px, 1px) !important;
  }
}
</style>