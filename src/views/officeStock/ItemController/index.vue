<template>
  <div class="ItemController">
    <div style="width:100%;display:flex;justify-content:space-around">
      <div class="notice">
        <el-tree
          :data="data"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :props="defaultProps"
          @node-click="getCheckedNodes">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label}}</span>
            <span>
              <b class="el-icon-plus" @click="() => append(data)"></b>
              <u class="el-icon-minus" @click="() => deleteData(data)"></u>
            </span>
          </span>
        </el-tree>
      </div>

      <div class="biaodan notice">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">上级类别</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-input :disabled="true" v-model="ruleForm.parentName" size="small"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">类别名称</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-input v-model="ruleForm.itemName" :disabled="isclickbangon" size="small"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">单位</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <!-- <el-input v-model="ruleForm.itemName" :disabled="isclickbangon" size="small"></el-input> -->
              <el-select v-model="ruleForm.unit" placeholder="请选择" size="small" style="width=350px">
                <el-option
                  v-for="item in unitOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">排序</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-input
                v-model="ruleForm.sort"
                :disabled="isclickbangon"
                type="number"
                size="small"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <div style="textAlign:center;marginTop:10px;">
          <el-button size="mini" type="danger" :disabled="isclickbangon" @click="update">保存</el-button>
        </div>
      </div>
    </div>
    <add-or-modify ref="addOrModify" @getTreeList="getTreeList"></add-or-modify>
  </div>
</template>

<script>
import addOrModify from "./dialog/addOrmodify";

export default {
  components: { addOrModify },
  mounted() {
    this.getTreeList();
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
  },
  data() {
    return {
      isclickbangon: false,
      unitOptions: [],
      defaultProps: {
        children: "itemList",
        label: "itemName"
      },
      ruleForm: {
        sort: "",
        itemName: "",
        unit: "",
        parentName: "",
        itemId: ""
      },
      data: [
        {
          itemId: "0",
          itemName: "办公用品",
          itemList: [],
          classify: "0"
        },
        {
          itemId: "0",
          itemName: "固定资产",
          itemList: [],
          classify: "1"
        }
      ]
    };
  },
  methods: {
    getTreeList() {
      this.$store.dispatch("officeItem/officeItemTree").then(res => {
        if (res.status !== "0") {
          this.$message.error("接口状态出错");
        }
        this.data[0].itemList = [];
        this.data[1].itemList = [];
        res.data.officeList.forEach(element => {
          element.itemList.forEach(el => {
            el.itemName = el.itemName + `(${el.stockAmount})${el.unitName}`;
          });
          this.data[0].itemList.push(element);
        });
        res.data.assestList.forEach(element => {
          element.itemList.forEach(el => {
            el.itemName = el.itemName + `(${el.stockAmount})${el.unitName}`;
          });
          this.data[1].itemList.push(element);
        });
      });
    },
    append(data) {
      this.$refs.addOrModify.showDialog(data);
    },
    deleteData(data) {
      this.$store
        .dispatch("officeItem/officeItemDelete", data.itemId)
        .then(res => {
          if (res.status == "0") {
            this.$message.success("删除成功");
            this.getTreeList();
          } else {
            this.$message.success(msg);
          }
        });
    },
    update() {
      if (this.ruleForm.sort !== "" && this.ruleForm.itemName !== "") {
        let params = {};
        params.itemId = this.ruleForm.itemId;
        params.itemName = this.ruleForm.itemName;
        params.unit = this.ruleForm.unit;
        params.sort = this.ruleForm.sort;
        this.$store
          .dispatch("officeItem/officeItemUpdate", params)
          .then(res => {
            if (res.status == "0") {
              this.ruleForm.itemName = "";
              this.ruleForm.parentName = "";
              this.ruleForm.sort = "";
              this.ruleForm.unit = "";
              this.$message.success("更新成功");
              this.getTreeList();
            }
          });
      } else if (this.ruleForm.sort == "" && this.ruleForm.itemName == "") {
        this.$message.warning("名称排序必填");
      }
    },
    getCheckedNodes(v1, v2, v3) {
      if (v2.data.ItemId !== "0") {
        this.isclickbangon = false;
        this.ruleForm.itemName = v2.data.itemName.substring(
          0,
          v2.data.itemName.indexOf("(")
        );
        this.ruleForm.itemId = v2.data.itemId;
        this.ruleForm.unit =
          v2.data.unit == "" || v2.data.unit == null
            ? ""
            : Number(v2.data.unit);
        this.ruleForm.parentName = v2.parent.data.itemName;
        this.ruleForm.sort = v2.data.sort;
      } else {
        this.isclickbangon = true;
        this.ruleForm.itemName = "";
        this.ruleForm.parentName = "";
        this.ruleForm.sort = "";
        this.ruleForm.unit = "";
      }
    }
  }
};
</script>

<style lang="scss">
$borderColor: #eee;
.ItemController {
  .el-input--small .el-input__inner {
    width:240px;
  }
  margin-top: 20px;
  .notice {
    width: 45%;
  }
  .biaodan {
    padding: 5px;
    background-color: #fff;
    height: 220px;
    border-left: 1px solid $borderColor;
    border-right: 1px solid $borderColor;
    .el-row {
      height: 52px;
      line-height: 50px;
      border-bottom: 1px solid $borderColor;
    }
    .el-row:nth-of-type(1) {
      border-top: 1px solid $borderColor;
    }
    .el-col-12 {
      .bg-purple-light {
        padding-left: 10px;
      }
      .bg-purple {
        padding-right: 10px;
        text-align: right;
        font-size: 14px;
        background-color: #f8f8f8;
      }
    }
  }

  .el-tree {
    b {
      width: 18px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      background-color: #b40005;
      color: #fff;
      border-radius: 50%;
    }
    u {
      margin-left: 10px;
      text-decoration: none;
      width: 18px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      background-color: #b40005;
      color: #fff;
      border-radius: 50%;
    }
    > div {
      > div:nth-of-type(1) {
        > span:nth-last-child(1) {
          > span:nth-of-type(2) {
            u {
              display: none;
            }
          }
        }
      }
      > div:nth-of-type(2) {
        > div {
          > div:nth-of-type(2) {
            b {
              display: none;
            }
          }
        }
      }
    }
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  > div:nth-of-type(1) {
    width: 300px;
  }
  > div:nth-of-type(2) {
    background-color: #fff;
    width: 700px;
  }
}
</style>