<template>
  <div class="addOrModifyLC">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-form-item label="分配物品编号" prop="model">
              <el-select v-model="ruleForm.model" multiple collapse-tags placeholder="请选择">
                <el-option
                  v-for="item in modelOption"
                  :key="item"
                  :label="item"
                  size="small"
                  :value="item"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <el-form-item label="备注">
              <el-input v-model="ruleForm.deparameter" type="textarea" rows="3" cols="110" />
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["modelOption", "data"],
  data() {
    // var CountVerify = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请输入领用数量"));
    //   } else if (!/^[1-9]+[0-9]*$/.test(value)) {
    //     callback(new Error("领用数量不符合规则"));
    //   } else {
    //     callback();
    //   }
    // };
    var CountVerify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入领用数量"));
      } else if (value) {
        if (value.length !== this.data.useAmount) {
          callback(new Error("数量不匹配"));
        }
      } else {
        callback();
      }
    };
    return {
      isAddOrMOdify: "",
      stockTypeOptions: [],
      patentIdOptions: [],
      unitOptions: [],
      allItem: [],
      formLabelWidth: "120",

      ruleForm: {
        model: "",
        unitPrice: "",
        deparameter: ""
      },
      fixedData: {},
      useId: "",
      rules: {
        model: [
          { required: "true", validator: CountVerify, trigger: "change" }
        ],
        itemId: [
          { required: "true", message: "用品类别必填", trigger: "change" }
        ],
        pItemId: [
          { required: "true", message: "库存类别必填", trigger: "change" }
        ],
        remark: [
          { required: "false", trigger: "blur" },
          { min: 0, max: 5, message: "长度在 0 到 5 个字符", trigger: "blur" }
        ],
        applyName: [
          {
            required: "true",
            message: "申请标题必填",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    totalPrice() {
      return Number(this.applyAmount) * Number(this.ruleForm.unitPrice);
    },
    pItemId() {
      return this.ruleForm.pItemId;
    },
    itemId() {
      return this.ruleForm.itemId;
    },
    itemIdOptions() {
      const arr = [];
      this.allItem.forEach(item => {
        if (item.length !== 0) {
          if (item[0].patentId === this.ruleForm.pItemId) {
            item.forEach(element => {
              const obj = {};
              obj.itemName = element.itemName;
              obj.itemId = Number(element.itemId);
              arr.push(obj);
            });
          }
        }
      });
      return arr;
    }
  },
  watch: {
    itemId(val, oldval) {
      this.allItem.forEach(item => {
        item.forEach(element => {
          if (element.itemId === val) {
            return (this.ruleForm.stockAmount = element.stockAmount);
          }
        });
      });
    },
    pItemId(val, oldval) {
      this.ruleForm.itemId = "";
    }
  },
  methods: {
    showDialog(val, item) {
      this.$store
        .dispatch("officeStock/selectItemList", { classify: 0 })
        .then(res => {
          const parent = [];
          this.allItem = [];
          res.data.forEach(element => {
            const obj = {};
            obj.pItemName = element.itemName;
            obj.pItemId = Number(element.itemId);
            parent.push(obj);
            this.allItem.push(element.itemList);
          });
          this.patentIdOptions = parent;
        });
      if (val === "111") {
        this.isAddOrMOdify = true;
        this.ruleForm.stockAmount = "";
        this.ruleForm.applyName = "";
        this.ruleForm.itemId = "";
        this.ruleForm.pItemId = "";
        this.ruleForm.remark = "";
        this.ruleForm.useAmount = "";
        this.fixedData = item;
      } else if (val === "112") {
        this.isAddOrMOdify = false;
        this.fixedData.applyNo = item.applyNo;
        this.fixedData.applicantDepartment = item.applicantDepartment;
        this.fixedData.applyTime = item.applyTime;
        this.fixedData.applicantName = item.applicantName;
        this.ruleForm.applyName = item.applyName;
        this.ruleForm.stockAmount = item.stockAmount;
        this.ruleForm.remark = item.remark;
        this.ruleForm.useAmount = item.useAmount;
        this.ruleForm.pItemId = Number(item.patentId);
        this.$nextTick(() => {
          this.ruleForm.itemId = Number(item.itemId);
        });
        this.useId = item.useId;
      }
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate();
      });
    },
    submitForm(data, val) {
      const params = {};
      if (this.ruleForm.useAmount > this.ruleForm.stockAmount) {
        this.ruleForm.useAmount = "";
        return this.$message.warning("领用数不能大于库存数");
      }
      if (this.isAddOrMOdify) {
        params.applyName = this.ruleForm.applyName;
        params.itemId = this.ruleForm.itemId;
        params.patentId = this.ruleForm.pItemId;
        params.remark = this.ruleForm.remark;
        params.useAmount = this.ruleForm.useAmount;
        params.applyNo = this.fixedData.applyNo;
      } else if (!this.isAddOrMOdify) {
        params.model = this.ruleForm.model.join(",");
        params.remark = this.ruleForm.remark;
        params.applyNo = data.applyNo;
        params.useId = data.useId;
      }
      if (val === "save") {
        this.$store
          .dispatch(
            this.isAddOrMOdify
              ? "useController/officeUseAdd"
              : "useController/officeUseUpdate",
            params
          )
          .then(res => {
            if (res.status === "0") {
              this.$message.success(
                this.isAddOrMOdify ? "新增成功" : "更新成功"
              );
              this.$emit("getTableList");
              this.dialogFormVisible = !this.dialogFormVisible;
            }
          });
      } else if (val === "update") {
        this.$store
          .dispatch("LC/assetsUseUpdateApproval", params)
          .then(res => {});
      }
    }
  }
};
</script>
