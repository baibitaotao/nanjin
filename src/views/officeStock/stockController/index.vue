<template>
  <div class="page">
    <div>
      <div>
         <span class="tagText">关键字</span>
        <el-input v-model="queryParams.keyWord" placeholder="请输入产品名称搜索" class="input-with-select" size="small"></el-input>
        <el-button slot="append" icon="el-icon-search" size="mini" @click="search">查询</el-button>
        <el-button slot="append" icon="el-icon-delete" size="mini" @click="clear">清空</el-button>
      </div>
    </div>

    <div class="bottom">
      <div class="optionButtons">
        <el-button
          :disabled="setStatus(item.btnScope)"
          @click="option(item.code)"
          type="danger"
          plain
          :icon="iconFlter(item.code)"
          size="mini"
          v-for="(item,index) in buttons"
          :key="index"
        >{{item.name}}</el-button>
      </div>
      <my-table :queryParams="queryParams" ref="myTable" @transferSelectItem="transferSelectItem"></my-table>
    </div>
    <add-or-modify ref="addOrModify" @getTableList="getTableList"></add-or-modify>
  </div>
</template>

<script>
import myTable from "./table";
import addOrModify from "./dialog/addOrmodify";

export default {
  name: "ExpensePaidDetail",
  components: { myTable, addOrModify },
  data() {
    return {
      seletedItem: [],
      queryParams: {
        keyWord: "",
        currPage: 1,
        pageSize: 10
      },
      showConditionIcon: "el-icon-arrow-up",
      showCondition: "收起全部筛选项",
      isShowCondition: true,
      allItem: 0,
      buttons: [{ code: "111", name: "新增", btnScope: "normal" }]
    };
  },
  methods: {
    iconFlter(val) {
      if (val === "111") return "el-icon-circle-plus-outline";
      if (val === "113") return "el-icon-delete";
      if (val === "112") return "el-icon-edit-outline";
      if (val === "115") return "el-icon-zoom-in";
    },
    clear() {
      this.queryParams.keyWord = "";
    },
    search() {
      this.getTableList();
    },
    conditionsOn() {
      if (this.showConditionIcon === "el-icon-arrow-up") {
        this.showConditionIcon = "el-icon-arrow-down";
        this.showCondition = "展开全部筛选项";
        this.isShowCondition = false;
      } else if (this.showConditionIcon === "el-icon-arrow-down") {
        this.showConditionIcon = "el-icon-arrow-up";
        this.showCondition = "收起全部筛选项";
        this.isShowCondition = true;
      }
    },
    option(val) {
      if (val == "111") {
        const params = { dealMark: "add" };
        this.$store
          .dispatch("officeStock/officeStockToEdit", params)
          .then(res => {
            this.$refs.addOrModify.showDialog(val, res.data.applyNo);
          });
      } else if (val == "112") {
        this.$store
          .dispatch(
            "officeStock/officeStockDetail",
            this.seletedItem[0].applyNo
          )
          .then(res => {
            this.$refs.addOrModify.showDialog(val, res.data);
          });
      } else if (val == "113") {
        this.$confirm("是否确认删除?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            let params = [];
            this.seletedItem.forEach(item => {
              params.push(item.stockId);
            });
            this.$store
              .dispatch("officeStock/officeStockDelete", params.join(","))
              .then(res => {
                if (res.status == "0") {
                  this.$message.success("删除成功");
                  this.getTableList();
                }
              });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    getTableList() {
      this.$refs.myTable.getTableList();
    },
    transferSelectItem(val) {
      this.seletedItem = val;
    },
    setStatus(val) {
      if (val == "single" || "") {
        if (this.seletedItem.length == 1) {
          return false;
        } else {
          return true;
        }
        return;
      } else if (val == "multi") {
        if (this.seletedItem.length >= 1) {
          return false;
        } else {
          return true;
        }
        return;
      } else if (val == "normal") {
        return false;
      }
      return true;
    }
  }
};
</script>