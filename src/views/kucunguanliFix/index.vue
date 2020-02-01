<template>
  <div class="page">
    <div>
      <div>
         <span class="tagText">关键字</span>
        <el-input v-model="queryParams.keyWord" placeholder="请输入物品种类搜索" class="input-with-select" size="small"></el-input>
        <el-button slot="append" icon="el-icon-search" size="mini" @click="search">查询</el-button>
        <el-button slot="append" icon="el-icon-delete" size="mini" @click="clear">清空</el-button>
      </div>

      <a @click="conditionsOn">{{showCondition}}</a>

      <transition name="el-zoom-in-top">
        <div class="conditions" v-show="isShowCondition">
          <div>
            <span class="tagText">入库时间</span>
            <el-date-picker
              v-model="queryParams.startTime"
              type="date"
              size="small"
              value-format="yyyy-MM-dd"
              placeholder="选择开始日期"
            ></el-date-picker>
            <span>至</span>
            <el-date-picker
              v-model="queryParams.endTime"
              type="date"
              size="small"
              value-format="yyyy-MM-dd"
              placeholder="选择结束日期"
            ></el-date-picker>
          </div>
        </div>
      </transition>
     
    </div>

    <div class="bottom">
      <div class="optionButtons">
        <el-button
          :disabled="setStatus(item.btnScope)"
          @click="option(item.code)"
          type="danger"
          plain
          size="mini"
          :icon="iconFlter(item.code)"
          v-for="(item,index) in buttons"
          :key="index"
        >{{item.name}}</el-button>
      </div>
      <my-table :queryParams="queryParams" ref="myTable" @transferSelectItem="transferSelectItem"></my-table>
    </div>
    <add-or-modify ref="addOrModify" @getTableList="getTableList"></add-or-modify>
    <baofei ref="baofei" @getTableList="getTableList"></baofei>
    <detail ref="detail"></detail>
  </div>
</template>

<script>
import myTable from "./table";
import addOrModify from "./dialog/addOrmodify";
import detail from "./dialog/detail";
import baofei from "./dialog/baofei";

export default {
  name: "",
  watch: {
    queryParams: {
      handler(val, oldVal) {
        if (
          val.endTime !== "" &&
          val.startTime !== "" &&
          val.endTime < val.startTime
        ) {
          this.$message.warning("结束时间不能小于开始时间");
          this.queryParams.endTime = "";
        }
      },
      deep: true
    }
  },
  components: { myTable, addOrModify, detail, baofei },
  data() {
    return {
      seletedItem: [],
      queryParams: {
        keyWord: "",
        currPage: 1,
        pageSize: 10,
        startTime: "",
        endTime: ""
      },
      fixedData: {
        applyNo: "",
        applicantDepartment: "",
        applyTime: "",
        applicantName: ""
      },
      showConditionIcon: "el-icon-arrow-up",
      showCondition: "收起全部筛选项",
      isShowCondition: true,
      allItem: 0,
      buttons: [
        { code: "111", name: "新增", btnScope: "normal" },
        { code: "112", name: "编辑", btnScope: "single" },
        { code: "115", name: "详情", btnScope: "single" },
        { code: "113", name: "删除", btnScope: "multi" },
        { code: "117", name: "报废", btnScope: "normal" }
      ]
    };
  },
  methods: {
       iconFlter(val){
      if(val === '111') return 'el-icon-circle-plus-outline'
      if(val === '113') return 'el-icon-delete'
      if(val === '112') return 'el-icon-edit-outline'
      if(val === '115') return 'el-icon-zoom-in'
    },
    clear() {
      this.queryParams.keyWord = "";
      this.queryParams.startTime = "";
      this.queryParams.endTime = "";
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
        let params = { dealMark: "add" };
        this.$store
          .dispatch("kucunguanliFix/assetsStockToEdit", params)
          .then(res => {
            this.fixedData.applyNo = res.data.applyNo;
            this.fixedData.applicantDepartment = res.data.applicantDepartment;
            this.fixedData.applyTime = res.data.applyTime;
            this.fixedData.applicantName = res.data.applicantName;
            this.$refs.addOrModify.showDialog(val, this.fixedData);
          });
      } else if (val == "112") {
        if (this.seletedItem[0].applyStatus !== "0") {
          return this.$message.warning("此条数据非草稿状态!");
        }
        if (this.seletedItem[0].stockType == "2") {
          this.$refs.baofei.showDialog(val, this.seletedItem);
        } else if (this.seletedItem[0].stockType == "1") {
          this.$refs.addOrModify.showDialog(val, this.seletedItem);
        }
      } else if (val == "113") {
        let swatch = true;
        this.seletedItem.forEach(el => {
          if (el.applyStatus !== "0") {
            return (swatch = false);
          }
        });
        if (swatch === false)
          return this.$message.warning("所选数据存在非草稿状态!");
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
              .dispatch("kucunguanliFix/assetsStockDelete", params.join(","))
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
      } else if (val == "115") {
        if (this.seletedItem[0].stockType == "2") {
          this.$refs.detail.showDialog(
            this.seletedItem[0].stockType,
            this.seletedItem
          );
        } else if (this.seletedItem[0].stockType == "1") {
          this.$refs.detail.showDialog(
            this.seletedItem[0].stockType,
            this.seletedItem
          );
        }
      } else if (val == "117") {
        this.$store
          .dispatch("kucunguanliFix/assetsStockToEditScrap", {
            dealMark: "add"
          })
          .then(res => {
            this.$refs.baofei.showDialog(val, res.data);
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