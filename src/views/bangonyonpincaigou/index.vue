<template>
  <div class="page">
    <div>
      <div>
         <span class="tagText">关键字</span>
        <el-input v-model="queryParams.keyWord" placeholder="请输入产品名称搜索" class="input-with-select" size="small"></el-input>
        <el-button slot="append" icon="el-icon-search" size="mini" @click="search">查询</el-button>
        <el-button slot="append" icon="el-icon-delete" size="mini" @click="clear">清空</el-button>
      </div>

      <a @click="conditionsOn">{{ showCondition }}</a>

      <transition name="el-zoom-in-top">
        <div v-show="isShowCondition" class="conditions"></div>
      </transition>
      <el-divider />
    </div>

    <div class="bottom">
      <div class="optionButtons">
        <el-button
          v-for="(item,index) in buttons"
          :key="index"
          :disabled="setStatus(item.btnScope)"
          type="danger"
          plain
          size="mini"
           :icon="iconFlter(item.code)"
          @click="option(item.code)"
        >{{ item.name }}</el-button>
      </div>
      <my-table ref="myTable" :query-params="queryParams" @transferSelectItem="transferSelectItem" />
    </div>
    <add-or-modify ref="addOrModify" @getTableList="getTableList" />
    <detail ref="detail"></detail>
  </div>
</template>

<script>
import myTable from "./table";
import addOrModify from "./dialog/addOrmodify";
import detail from "./dialog/detail";

export default {
  name: "",
  components: { myTable, addOrModify, detail },
  data() {
    return {
      seletedItem: [],
      queryParams: {
        currPage: 1,
        pageSize: 10,
        keyWord: ""
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
        { code: "113", name: "删除", btnScope: "multi" }
      ]
    };
  },
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
    unique(arr) {
      var result = [],
        hash = {};
      for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
          result.push(elem);
          hash[elem] = true;
        }
      }
      return result;
    },
    option(val) {
      if (val == "111") {
        const params = { dealMark: "add" };
        this.$store.dispatch("assetsUse/assetsUseToEdit", params).then(res => {
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
        this.$refs.addOrModify.showDialog(val, this.seletedItem);
      } else if (val == "113") {
        let swatch = true;
        this.seletedItem.forEach(el => {
          if (el.applyStatus !== "0") {
            return (swatch = false);
          }
        });
        if (swatch === false)
          return this.$message.warning("所选数据存在非草稿状态!");
        this.$confirm(`是否确认删除选中数据?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            const params = [];
            this.seletedItem.forEach(item => {
              params.push(item.applyNo);
            });
            this.$store
              .dispatch("assetsUse/officePurchaseDelete", params.join(","))
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
      } else if (val == "114") {
        if (this.seletedItem[0].vacationStatus == "2") {
          return this.$message.warning("已销假");
        }
        this.$confirm("是否确定销假?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            const params = {
              type: "VACATION",
              applyNo: this.seletedItem[0].applyNo
            };
            this.$store
              .dispatch("applyVacation/reportBackReportBack", params)
              .then(res => {
                if (res.status == "0") {
                  this.$message.success("销假成功");
                  this.getTableList();
                }
              });
          })

          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消"
            });
          });
      } else if (val == "115") {
        this.$refs.detail.showDialog(this.seletedItem);
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
