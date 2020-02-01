<template>
  <div class="addOrModify">
    <el-dialog :title="titleComputed" :visible.sync="dialogFormVisible">
      <el-dialog width="30%" title="编号选择" :visible.sync="innerVisible" append-to-body>
        <template>
          <el-table
            :data="innerTableData"
            border
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="70"></el-table-column>
            <el-table-column prop="goodsnumber" label="编号"></el-table-column>
          </el-table>
          <div style="textAlign:center;marginTop:5px;">
            <el-button size="small" type="danger" @click="confirm">确定</el-button>
          </div>
        </template>
      </el-dialog>
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="申请单号">
                <el-input v-model="fixedData.applyNo" :disabled="true"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="申请部门">
                <el-input v-model="fixedData.applicantDepartment" :disabled="true"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="申请人">
                <el-input v-model="fixedData.applicantName" :disabled="true"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="申请日期">
                <el-input v-model="fixedData.applyTime" :disabled="true"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="固定资产分类" prop="patentId">
                <el-select
                  v-model="ruleForm.patentId"
                  placeholder="请选择"
                  @change="ruleForm.itemId = ''"
                  :disabled="guihuan"
                >
                  <el-option
                    v-for="item in fixOptions"
                    :key="item.itemId"
                    :label="item.itemName"
                    :value="item.itemId"
                  />
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="领用种类" prop="itemId">
                <el-select v-model="ruleForm.itemId" placeholder="请选择" :disabled="guihuan">
                  <el-option
                    v-for="item in itemIdOptions"
                    :key="item.itemId"
                    :label="item.itemName"
                    :value="item.itemId"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12" v-if="false">
            <div class="grid-content bg-purple">
              <el-form-item label="库存数量" prop="useAmount">
                <el-input v-model="guihuanNumber" type="number" :disabled="true"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="领用数量" prop="useAmount">
                <el-input v-model="ruleForm.useAmount" type="number" :disabled="guihuan"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row v-if="guihuan">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="归还数量" prop="useAmount">
                <el-input v-model="guihuanNumber" type="number" :disabled="guihuan"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row v-if="!guihuan">
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="备注">
                <el-input v-model="ruleForm.remark" type="textarea" rows="3" cols="110"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row v-if="guihuan">
          <el-col :span="24">
            <div class="grid-content bg-purple waichureason">
              <el-form-item label="编号选择" prop="model">
                <el-input
                  v-model="ruleForm.model"
                  type="textarea"
                  rows="3"
                  cols="110"
                  @focus="selectModel"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <div class="submit" v-if="!guihuan">
          <el-button
            type="danger"
            @click="submitForm('ruleForm','save')"
            size="mini"
            v-show="isAddOrMOdify"
          >保存</el-button>
          <el-button
            type="danger"
            @click="submitForm('ruleForm','update')"
            size="mini"
            v-show="!isAddOrMOdify"
          >更新</el-button>
          <el-button
            type="danger"
            @click="submitForm('ruleForm','submit')"
            size="mini"
            :disabled="isForbiden"
          >提交</el-button>
        </div>
        <div class="submit" v-if="guihuan">
          <el-button type="danger" @click="submitForm('ruleForm','sure')" size="mini">归还</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>


<script>
export default {
  computed: {
    itemIdOptions() {
      let arr = [];
      this.fixOptions.forEach(el => {
        if (el.itemId === this.ruleForm.patentId) {
          arr = el.itemList;
        }
      });
      return arr;
    },
    titleComputed() {
      if (this.isAddOrMOdify && !this.guihuan) {
        return "领用登记新增";
      } else if (!this.isAddOrMOdify && !this.guihuan) {
        return "领用登记更新";
      } else {
        return "归还";
      }
    },
    guihuanNumber() {
      if (this.ruleForm.model == "") {
        return 0;
      } else {
        return this.ruleForm.model.split(",").length;
      }
    }
  },
  data() {
    return {
      isForbiden: false,
      innerVisible: false,
      fixOptions: [],
      innerTableData: [],
      isAddOrMOdify: "",
      dialogFormVisible: false,
      formLabelWidth: "120",
      guihuan: false,
      selectedItem: [],
      ruleForm: {
        patentId: "",
        useAmount: "",
        itemId: "",
        remark: "",
        useId: "",
        model: ""
      },
      fixedData: {},
      rules: {
        model: [
          {
            required: true,
            message: "编号必填",
            trigger: "change"
          }
        ],
        patentId: [
          {
            required: true,
            message: "固定资产分类必填",
            trigger: "change"
          }
        ],
        itemId: [
          {
            required: true,
            message: "类型必填",
            trigger: "change"
          }
        ],
        useAmount: [
          {
            required: true,
            message: "数量必填",
            trigger: "blur"
          }
        ],
        meetingPerson: [
          {
            required: true,
            message: "参会人员必填",
            trigger: "change"
          }
        ],
        meetingContent: [
          {
            required: true,
            message: "会议议题必填",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    confirm() {
      let arr = [];
      this.selectedItem.forEach(el => {
        arr.push(el.goodsnumber);
      });

      this.ruleForm.model = arr.join(",");
      this.innerVisible = !this.innerVisible;
    },
    handleSelectionChange(val) {
      this.selectedItem = val;
    },
    selectModel() {
      this.$store
        .dispatch("linyondengji/assetsUseSelectGoods", {
          applyNo: this.fixedData.applyNo
        })
        .then(res => {
          this.innerTableData = res.data.vos;
          this.innerVisible = !this.innerVisible;
        });
    },
    showDialog(val, item) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.isForbiden = false;
      this.$store
        .dispatch("officeStock/selectItemList", { classify: 1 })
        .then(res => {
          this.fixOptions = res.data;
        });
      this.guihuan = false;
      if (val == "111") {
        for (var i in this.ruleForm) {
          this.$set(this.ruleForm, i, "");
        }
        this.fixedData = item;
        this.isAddOrMOdify = true;
      } else if (val == "112") {
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;
        this.ruleForm.itemId = item[0].itemId;
        this.ruleForm.patentId = item[0].patentId;
        this.ruleForm.useAmount = item[0].useAmount;
        this.ruleForm.remark = item[0].remark;
        this.ruleForm.useId = item[0].useId;

        this.isAddOrMOdify = false;
      } else if (val == "116") {
        this.fixedData.applyNo = item[0].applyNo;
        this.fixedData.applicantDepartment = item[0].applicantDepartment;
        this.fixedData.applyTime = item[0].applyTime;
        this.fixedData.applicantName = item[0].applicantName;
        this.ruleForm.itemId = item[0].itemId;
        this.ruleForm.patentId = item[0].patentId;
        this.ruleForm.useAmount = item[0].useAmount;
        this.ruleForm.remark = item[0].remark;
        this.ruleForm.useId = item[0].useId;
        this.ruleForm.model = "";

        this.guihuan = true;
      }
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },

    submitForm(formName, val) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {};
          params.applyNo = this.fixedData.applyNo;
          params.useAmount = Number(this.ruleForm.useAmount);
          params.itemId = this.ruleForm.itemId;
          params.patentId = this.ruleForm.patentId;
          params.useId = this.ruleForm.useId;
          params.remark = this.ruleForm.remark;
          if (val === "submit") {
            this.isForbiden = true;
            this.$store
              .dispatch("linyondengji/assetsUseConditionProcessSubmit", params)
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
          } else if (val === "save") {
            this.$store
              .dispatch(
                this.isAddOrMOdify
                  ? "linyondengji/assetsUseAdd"
                  : "linyondengji/assetsUseUpdate",
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
          } else if (val === "sure") {
            this.$store
              .dispatch("linyondengji/assetsUseGiveBack", {
                itemId: this.ruleForm.itemId,
                applyNo: this.fixedData.applyNo,
                goodsnumbers: this.ruleForm.model
              })
              .then(res => {
                this.$message.success("归还成功!");
                this.$emit("getTableList");
                this.dialogFormVisible = !this.dialogFormVisible;
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
</style>