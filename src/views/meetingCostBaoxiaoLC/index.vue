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
          <div class="left">备注&nbsp;：</div>
          <div class="right">{{remark}}</div>
        </el-col>
      </el-row>
      <el-row style="borderTop:0">
        <el-col :span="24" style="height:auto;">
          <div class="left">附件&nbsp;：</div>
          <div class="right">
            <up-load v-model="fileToken" :hiddenUpload="true"></up-load>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- <div v-if="isShowDetail === 'edit'">
      <modify ref="modify"></modify>
    </div> -->

    <span class="title">报销信息</span>

    <div class="addOrModifyLC" style="marginBottom:5px;">
      
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="费用报销标题" prop="expenreim">
                <el-input v-model="ruleForm.expenreim" size="small" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="总金额(元)">
                <el-input v-model="expenseAmount" :disabled="true" size="small" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="收款账号" prop="shrnum">
                <el-input v-model="ruleForm.shrnum" size="small" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="开户行" prop="openbank">
                <el-input v-model="ruleForm.openbank" size="small" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="收款单位" prop="payee">
                <el-input v-model="ruleForm.payee" size="small" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="支付方式" prop="payme">
                <el-select v-model="ruleForm.payme" placeholder="请选择支付类型" style="marginRight:5px" size="small">
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
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="支付类别" prop="stairid">
                <template>
                  <div style="display:flex;marginTop:5px;marginLeft:5px">
                    <el-select
                    size="small"
                      v-model="ruleForm.stairid"
                      placeholder="请选择一级类别"
                      style="marginRight:5px"
                      @change="ruleForm.secondid = ''"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.codeValue"
                        :label="item.codeName"
                        :value="item.codeValue"
                      ></el-option>
                    </el-select>

                    <el-select
                    size="small"
                      v-model="ruleForm.secondid"
                      placeholder="请选择二级类别"
                      style="marginRight:5px"
                      @change="ruleForm.thirdid = ''"
                    >
                      <el-option
                        v-for="item in secondOptions"
                        :key="item.codeValue"
                        :label="item.codeName"
                        :value="item.codeValue"
                      ></el-option>
                    </el-select>

                    <el-select v-model="ruleForm.thirdid" placeholder="请选择三级类别" size="small">
                      <el-option
                        v-for="item in thirdOptions"
                        :key="item.codeValue"
                        :label="item.codeName"
                        :value="item.codeValue"
                      ></el-option>
                    </el-select>
                  </div>
                </template>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="费用说明">
                <el-input v-model="ruleForm.expenseDesc" type="textarea" rows="3" cols="110" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <div class="expenseTable" style="marginTop:10px">
        <el-button type="danger" size="mini" @click="add">新增</el-button>
        <el-button
          type="danger"
          size="mini"
          @click="detel"
          :disabled="selectedItem.length  !== 1"
        >删除</el-button>
        <el-table
          border
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;marginTop:10px"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="70" />
          <el-table-column label="摘要">
            <template slot-scope="scope">
              <el-input v-model="scope.row.abstracts" size="small" />
            </template>
          </el-table-column>

          <el-table-column label="报销金额(元)">
            <template slot-scope="scope">
              <el-input v-model="scope.row.expenseAmount" type="number" size="small" />
            </template>
          </el-table-column>
        </el-table>
      </div>

    </div>

    <div v-if="isShowDetail === 'apply' || isShowDetail === 'edit'">
      <span class="title">审批信息</span>
      <iframe :src="url" class="shenhexinxi"></iframe>
      <process contentPath="/oa-web/" @action="action" :exValue="exValue" @update="update"></process>
    </div>
  </div>
</template>

<script>
import process from "../coomComponents/processCom/process.vue";
import modify from "./modify/modify";
import upLoad from "../coomComponents/upload/src/upload";

export default {
  components: {
    process,
    modify,
    upLoad,
  },
   computed: {
    expenseAmount() {
      let amount = 0;
      this.tableData.forEach(item => {
        amount = amount + Number(item.expenseAmount);
      });
      return amount.toFixed(4);
    },
    secondOptions() {
      let arr = [];
      this.options.forEach(el => {
        if (this.ruleForm.stairid === el.codeValue) {
          arr = el.twoList;
        }
      });
      return arr;
    },
    thirdOptions() {
      let arr = [];
      this.secondOptions.forEach(el => {
        if (el.codeValue === this.ruleForm.secondid) {
          arr = el.threeList;
        }
      });
      return arr;
    }
  },
  filters: {
    getTitle(val) {
      if (val == "applicantDepartment") return "申请部门";
      else if (val == "applicantName") return "申请人";
      else if (val == "applyName") return "会议名称";
      else if (val == "applyNo") return "表单号";
      else if (val == "applyStatus") return "状态";
      else if (val == "applyTime") return "申请日期";
      else if (val == "createBy") return "创建者";
      else if (val == "createDt") return "创建时间";
      else if (val == "meetingName") return "会议名称";
      else if (val == "meetingAmount") return "会议费用(元)";
      else if (val == "meetingStartTime") return "会议开始时间";
      else if (val == "meetingEndTime") return "会议结束时间";
      else if (val == "personCount") return "会议人数";
      else if (val == "meetingPlace") return "会议地点";
      else if (val == "observerPersonName") return "外出地点";
      else if (val == "recordPersonName") return "记录人员";
      else if (val == "meetingHostName") return "主持人";
      else if (val == "meetingContent") return "会议议题";
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      fixedData:{},
      data: {},
      url: "",
      remark: "",
      exValue: {},
      isShowDetail: "",
      fileToken: "",
      
      options: [],
      tableData: [],
      isAddOrMOdify: "",
      dialogFormVisible: false,
      formLabelWidth: "120",
      selectedItem: [],
      paymentTypeOptions: [],
      typeOptions: [],
      ruleForm: {
        expenreim: "",
        expenseAmount: "",
        expenseDesc: "",
        payme: "",
        shrnum: "",
        stairid: "",
        secondid: "",
        thirdid: "",
        openbank: "",
        payee: ""
      },
      newId: 0,
      fixedData: {},
      rules: {
        expenreim: [
          {
            required: "true",
            message: "费用报销标题",
            trigger: "blur"
          }
        ],
        shrnum: [
          {
            required: "true",
            message: "收款账号必填",
            trigger: "blur"
          }
        ],
        openbank: [
          {
            required: "true",
            message: "开户行必填",
            trigger: "blur"
          }
        ],
        payee: [
          {
            required: "true",
            message: "收款单位必填",
            trigger: "blur"
          }
        ],
        payme: [
          {
            required: "true",
            message: "支付方式必填",
            trigger: "change"
          }
        ],
        stairid: [
          {
            required: "true",
            message: "一级支付类别必填",
            trigger: "change"
          }
        ]
      }
    };
  },
  created() {
    this.isShowDetail = this.$route.query.steps;

    this.$store.dispatch('LC/expensePaidToEdit',{dealMark:'add'}).then(res => {
            this.fixedData.applyNo = res.data.applyNo;
            this.fixedData.applicantDepartment = res.data.applicantDepartment;
            this.fixedData.applyTime = res.data.applyTime;
            this.fixedData.applicantName = res.data.applicantName;
            this.showDialog('111',this.fixedData)
    })
    
  },
  mounted() {
    let params = { applyNo: this.$route.query.projectId };
    this.$store.dispatch("LC/meetingCostDetail", params).then(res => {
      if (this.isShowDetail === "edit") {
        let arr = [];
        arr.push(res.data);
        this.$refs.modify.showDialog("112", arr);
      }
      this.data.applyNo = res.data.applyNo;
      this.data.applicantDepartment = res.data.applicantDepartment;
      this.data.applicantName = res.data.applicantName;
      this.data.applyTime = res.data.applyTime;
      this.data.meetingName = res.data.meetingName;
      this.data.meetingAmount = res.data.meetingAmount;
      this.data.meetingStartTime = res.data.meetingStartTime;
      this.data.meetingEndTime = res.data.meetingEndTime;
      this.data.personCount = res.data.personCount;
      this.data.meetingPlace = res.data.meetingPlace;
      this.remark = res.data.remark;

      this.fileToken = res.data.attachment == null ? "" : res.data.attachment;
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
    action(val) {
      this.exValue = {
        result: true,
        extendParam: { depAudit: "1057", docType: "1" }
      };
    },
    update() {
        this.submitForm('ruleForm','baoxiao')
      // this.$refs.modify.submitForm("", "update");
    },
        add() {
      this.tableData.push({
        newId: ++this.newId,
        abstracts: "",
        expenseAmount: ""
      });
    },
    detel() {
      let arr = [];
      this.tableData.forEach(el => {
        if (this.selectedItem[0].newId !== el.newId) {
          arr.push(el);
        }
      });
      this.tableData = arr;
    },
    handleSelectionChange(val) {
      this.selectedItem = val;
    },
    showDialog(val, item) {
      // this.dialogFormVisible = !this.dialogFormVisible;
      this.$store
        .dispatch("expensePaidDetail/expensePaidDetailGetComTomList")
        .then(res => {
          this.options = res.data;
        });
      this.$store
        .dispatch("caigoushenqing/commonTCodeGetCodeByParentId", "11018")
        .then(res => {
          let arr = [];
          res.data.options.forEach(el => {
            let obj = {};
            obj.value = Number(el.value);
            obj.label = el.label;
            arr.push(obj);
          });
          this.paymentTypeOptions = arr;
        });
      this.tableData = [];
      this.newId = 0;
      if (val === "111") {
        for (var i in this.ruleForm) {
          this.$set(this.ruleForm, i, "");
        }
        this.fixedData = item;

        this.isAddOrMOdify = true;
      } else if (val === "112") {
        this.ruleForm.outTime = [];
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;
        this.ruleForm.expenreim = item[0].expenreim;
        this.ruleForm.expenseDesc = item[0].expenseDesc;
        this.ruleForm.applyNo = item[0].applyNo;
        this.ruleForm.openbank = item[0].openbank;
        this.ruleForm.payee = item[0].payee;
        this.ruleForm.payme = item[0].payme;
        this.ruleForm.shrnum = item[0].shrnum;
        this.ruleForm.stairid = item[0].stairid;
        this.ruleForm.secondid = item[0].secondid;
        this.ruleForm.thirdid = item[0].thirdid;
        item[0].paidItemModels.forEach(el => {
          let obj = {};
          obj.newId = ++this.newId;
          obj.abstracts = el.abstracts;
          obj.applyNo = el.applyNo;
          obj.createBy = el.createBy;
          obj.createDt = el.createDt;
          obj.expenseAmount = el.expenseAmount;
          obj.id = el.id;
          obj.isDelete = el.isDelete;
          obj.newId = el.newId;
          obj.updateBy = el.updateBy;
          obj.updateDt = el.updateDt;
          this.tableData.push(obj);
        });
        this.isAddOrMOdify = false;
      }
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },
    submitForm(formName, val) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = {};
          params.expenreim = this.ruleForm.expenreim;
          params.applyNo = this.fixedData.applyNo;
          params.totalAmount = this.expenseAmount;
          params.expenseDesc = this.ruleForm.expenseDesc;
          params.shrnum = this.ruleForm.shrnum;
          params.openbank = this.ruleForm.openbank;
          params.payee = this.ruleForm.payee;
          params.payme = this.ruleForm.payme;
          params.stairid = this.ruleForm.stairid;
          params.secondid = this.ruleForm.secondid;
          params.thirdid = this.ruleForm.thirdid;
          params.paidItemDTOs = this.tableData;

          this.$store.dispatch('LC/expensePaidConditionProcessSubmit',params).then(res => {})
          // if (val === "submit") {
          //   this.$store
          //     .dispatch(
          //       "expensePaidDetail/expensePaidConditionProcessSubmit",
          //       params
          //     )
          //     .then(res => {
          //       if (res.status === "0") {
          //         this.$message.success("提交成功");
          //         this.$emit("getTableList");
          //         this.dialogFormVisible = !this.dialogFormVisible;
          //       }
          //     });
          // } else {
          //   this.$store
          //     .dispatch(
          //       this.isAddOrMOdify
          //         ? "expensePaidDetail/expensePaidAdd"
          //         : "expensePaidDetail/expensePaidUpdate",
          //       params
          //     )
          //     .then(res => {
          //       if (res.status === "0") {
          //         this.$message.success(
          //           this.isAddOrMOdify ? "新增成功" : "更新成功"
          //         );
          //         this.$emit("getTableList");
          //         this.dialogFormVisible = !this.dialogFormVisible;
          //       }
          //     });
          // }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
