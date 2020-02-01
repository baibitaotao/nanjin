<template>
  <div class="addOrModify">
    <el-dialog title="分类管理新增" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="类别名称" prop="itemName">
                <el-input v-model="ruleForm.itemName" size="small"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="排序" prop="sort">
                <el-input v-model="ruleForm.sort" type="number" size="small"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row v-show="isChildrenOrpatent">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="单位" prop="unit">
                <el-select v-model="ruleForm.unit" placeholder="请选择" size="small">
                  <el-option
                    v-for="item in unitOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <div class="submit">
          <el-button type="danger" @click="submitForm('ruleForm')" size="mini">提交</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      fileToken: "",
      dialogFormVisible: false,
      formLabelWidth: "120",
      vacationType: [],
      unitOptions: [],
      isChildrenOrpatent: "",
      ruleForm: {
        patentId: "",
        itemName: "",
        sort: "",
        unit: ""
      },
      fixedData: {},
      rules: {
        unit:[  {
            required: "true",
            message: "单位必填",
            trigger: "change"
          }],
        itemName: [
          {
            required: "true",
            message: "类别名称必填",
            trigger: "blur"
          }
        ],
        sort: [
          {
            required: "true",
            message: "排序必填",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    showDialog(val) {
      if (val.patentId == undefined) {
        this.isChildrenOrpatent = false;
      } else {
        this.isChildrenOrpatent = true;
      }
      this.$store
        .dispatch("officeStock/commonTCodeGetCodeByParentIdVal", "11002")
        .then(res => {
          const arr = [];
          res.data.options.forEach(el => {
            const obj = {};
            obj.value = Number(el.value);
            obj.label = el.label;
            arr.push(obj);
          });
          this.unitOptions = arr;
        });

      this.dialogFormVisible = !this.dialogFormVisible;
      this.ruleForm.patentId = val.itemId;
      this.ruleForm.classify = val.classify;
      this.ruleForm.itemName = "";
      this.ruleForm.sort = "";
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {};
          if(this.isChildrenOrpatent){
            params.unit = this.ruleForm.unit;
          }else {
             params.unit = '';
          }
          params.itemName = this.ruleForm.itemName;
          params.sort = this.ruleForm.sort;
          params.patentId = this.ruleForm.patentId || "0";
          params.classify = this.ruleForm.classify;
          this.$store.dispatch("officeItem/officeItemAdd", params).then(res => {
            if (res.status == "0") {
              this.$message.success("新增成功");
              this.$emit("getTreeList");
              this.dialogFormVisible = !this.dialogFormVisible;
            }
          });
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
.vacationTime {
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