<template>
  <div>
    <input id="instId" type="hidden" v-model="instId" />
    <input id="taskId" type="hidden" v-model="taskId" />
    <input id="formUri" type="hidden" v-model="formUri" />
    <input id="formUriView" type="hidden" v-model="formUriView" />
    <input id="pshow" type="hidden" v-model="pshow" />
    <input id="phid" type="hidden" v-model="phid" />
    <input id="contentPath" type="hidden" v-model="contentPath" />
    <table
      id="formToolBarTable"
      class="addtable"
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="margin-top: 0px; margin-bottom: 10px;"
    >
      <tr>
        <td colspan="4" class>
          <div
            class="panel-header panel-title"
            style="border-left: 0px; border-right: 0px; border-top: 0px; margin-top: 1px; margin-bottom: 1px;"
          >流程审批</div>
        </td>
      </tr>
      <tr style="borderTop:1px solid #eee">
        <td class="td_name" style="width: 20%">处理意见</td>
        <td colspan="3" class="td_value" style="width: 82%">
          <textarea
            name="taskProcessDesc"
            id="taskProcessDesc"
            style="width: 100%; height: 60px"
            v-model="taskProcessDescValue"
          ></textarea>
        </td>
      </tr>
      <!--流程操作按钮-->
      <tr>
        <td class="td_name" style="width: 18%"></td>
        <td colspan="3" class="td_value drawablel" style="width: 82%" id="processToolBar">
          <template v-if="allcommshow===1">
            <button
              v-for="(item,index) of commandes"
              :key="index"
              class="el-button el-button--primary el-button--small"
              :id="item.id"
              type="primary"
              @click="btnHandel(item)"
            >{{item.name}}</button>
          </template>
          <template v-if="!allcommshow===0">
            <button
              v-for="(item,index) of commandes"
              :key="index"
              v-if="item.fixParam_BeforeShowJS"
              class="el-button el-button--primary el-button--small"
              :id="item.id"
              type="primary"
              @click="btnHandel(item)"
            >{{item.name}}</button>
          </template>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "process",
  props: {
    allcommshow: {
      type: Number,
      default: 1
    },
    validateFun: Function,
    contentPath: {
      type: String,
      default: "/ei-web/"
    },
    exValue: {
      type: Object,
      default() {
        return {
          result: true,
          extendParam: { depAudit: "1057", docType: "1" }
        };
      }
    }
  },
  watch: {
    taskId(newValue) {
      axios
        .get(
          this.contentPath +
            "workflowProcess/getProcessCommandJSON?taskId=" +
            this.taskId,
          {
            taskId: this.taskId
          }
        )
        .then(data => {
          // /*所有按钮显示前的条件*/
          this.commandes = data.data;
        })
        .catch(error => {});
      this.showAndHidForm(this.pshow, this.phid);
    }
  },
  data: () => {
    return {
      isShowBtn: false,
      btnId: "",
      btnName: "",
      btnJson: "",
      taskProcessDescValue: "",
      submitCount: 0,
      commandes: null,
      instId: "",
      taskId: "",
      formUri: "",
      formUriView: "",
      pshow: "",
      phid: "",
      theRequest: {},
      extendParam: "",
      abc: ""
    };
  },
  mounted() {
    // /*  表单元素显示与隐藏*/
    // 获取操作流程操作按钮   处理工具条
    var url = window.location; //获取url中"?"符后的字串
    var theRequest = this.$route.query;
    this.theRequest = theRequest;
    this.instId = this.theRequest.instId;
    this.taskId = this.theRequest.taskId;
    this.formUri = this.theRequest.formUri;
    this.formUriView = this.theRequest.formUriView;
  },
  methods: {
    showAndHidForm(pshow, phid) {
      if (pshow != null && pshow !== "") {
        // /*获取需要显示的表单数据ID*/
        var pshowArr = pshow.split(",");
        for (let i = 0; i < pshowArr.length; i++) {
          $("#" + pshowArr[i]).show();
        }
      }
      if (phid != null && phid !== "") {
        var phidArr = phid.split(",");
        for (let i = 0; i < phidArr.length; i++) {
          $("#" + phidArr[i])
            .attr("style", "display:none")
            .hide();
        }
      }
    },
    beforeCommandShow() {
      return true;
    },
    btnHandel(json) {
      var beforeHandleJS = json.fixParam_BeforeHandleJS;
      //  一个json格式，必有的参数：result,errorMsg,extendParam
      var isHandle = "";
      var type = json.type;
      var extendParam = "";
      if (
        typeof beforeHandleJS != "undefined" &&
        beforeHandleJS != null &&
        beforeHandleJS != ""
      ) {
        // this.$emit("update");
        extendParam = "";
        this.extendParam = "";
      } else if (json.id === "fixParam_BeforeHandleJS") {
        // this.$emit("update");
        extendParam = "";
        this.extendParam = "";
      } else if (json.id === "fixParam_BeforeHandleJS2") {
        this.$emit("updateDetail");
        extendParam = "";
        this.extendParam = "";
      }

      /*  获取流程中需要的表单参数*/
      if (
        typeof extendParam == "undefined" ||
        extendParam == null ||
        extendParam == ""
      ) {
        extendParam = "";
      }
      this.doProcessTask(
        "",
        json.name,
        json.id,
        json.type,
        json,
        this.extendParam
      );
    },

    doProcessTask(
      obj,
      name,
      commandId,
      commandType,
      commandJsonObj,
      extendParam
    ) {
      // body 移动到顶部
      document.documentElement.scrollTop = 0;

      this.processTask(
        name,
        commandId,
        commandType,
        commandJsonObj,
        extendParam
      );
    },

    processTask(name, commandId, commandType, commandJsonObj, extendParam) {
      this.confirmMessage("确认进行" + name + "操作？", b => {
        if (b) {
          document.documentElement.scrollTop = 0; // 移动到顶部
          var remarkString = this.taskProcessDescValue;
          if (commandType !== "general") {
            if (remarkString === "") {
              this.alertMessage("请填写处理意见，最大长度为2000字符！");
              return;
            }
            if (remarkString.length > 2000) {
              this.alertMessage("处理意见超长，最大长度为2000字符！");
              return;
            }
          }
          var data = {
            instId: this.instId,
            taskId: this.taskId,
            commandId: commandId,
            commandType: commandType,
            processDesc: encodeURIComponent(this.taskProcessDescValue),
            formParam: extendParam
          };
          var taskProcessDescFlag = commandJsonObj.fixParam_taskProcessDescFlag
            ? commandJsonObj.fixParam_taskProcessDescFlag
            : false; //处理意见是否必须输入的标记
          var taskProcessDescMessage = commandJsonObj.fixParam_taskProcessDescMessage
            ? commandJsonObj.fixParam_taskProcessDescMessage
            : ""; //处理意见是否必须输入的提示信息
          if (taskProcessDescFlag === "true") {
            if (data.processDesc === "") {
              if (taskProcessDescMessage === "") {
                taskProcessDescMessage = "请填写处理意见！";
              }
              this.alertMessage(taskProcessDescMessage);
              return;
            }
          }

          // 校验 退回-指定步骤和 终止都必须输入意见
          if (commandType === "rollBackTaskByExpression") {
            if (data.processDesc === "") {
              this.alertMessage("请填写意见！");
              return;
            }
          } else {
            try {
              var resultMy = saveDataMy();
              if (!resultMy) {
                return;
              }
            } catch (err) {
              // 此处是负责例外处理的语句
            }
          }

          if (commandType === "modifyForm") {
            var title = commandJsonObj.fixParam_title;
            if (!title || title === "") {
              title = "修改";
            }
            var toolObj = {
              toobarTitle: title
            };
            var url = commandJsonObj.fixParam_url;
            if (!url || url === "") {
              url = this.formUri;
            }
            url = appendParams(url, {
              submitBtnShow: "false"
            });
            this.getPageWin("layout", window).openWindow(
              800,
              600,
              toolObj.toobarTitle,
              url,
              toolObj,
              () => {
                parent.refreshCenterRegion();
              }
            );
            return;
          } else if (commandType === "pending") {
            // getPageWin('layout', window).invokeResult = null;//初始化为NULL
            var toolObj = {
              toobarTitle: "请选择转办人"
            };
            var url = commandJsonObj.fixParam_url;
            if (url) {
              var width = commandJsonObj.fixParam_width;
              var height = commandJsonObj.fixParam_height;
              if (!width) {
                width = 800;
              }
              if (!height) {
                height = 600;
              }
              this.getPageWin("layout", window).openWindow(
                width,
                height,
                toolObj.toobarTitle,
                url,
                toolObj,
                () => {
                  var invokeResult = this.getPageWin("layout", window)
                    .invokeResult;
                  if (invokeResult && invokeResult.result) {
                    if (invokeResult.selectUserId) {
                      data["pendingUserId"] = invokeResult.selectUserId;
                    }
                    this.execProcessTask(data);
                  }
                }
              );
            } else {
              this.execProcessTask(data);
            }
            return;
          } else if (commandType === "rollBackTaskByTaskId") {
            var toolObj = {
              toobarTitle: "请选择任务"
            };

            // var url = "../jsps/process/listRollBackTaskList.jsp?taskId=" + taskId
            var url =
              "../jsps/process/listRollBackTaskList.jsp?taskId=" +
              this.taskId +
              "&instId=" +
              this.instId +
              "&commandId=" +
              commandId +
              "&commandType=" +
              commandType +
              "&processDesc=" +
              encodeURIComponent(
                encodeURIComponent($("#taskProcessDesc").val())
              ) +
              "&bizKey=" +
              $("#keyValues").val();
            openWindow(800, 600, toolObj.toobarTitle, url, toolObj, () => {});
            return false;
          } else if (commandType == "rollBack") {
            var toolObj = {
              toobarTitle: "请选择节点"
            };

            //var url = "../jsps/process/listRollBackTaskList.jsp?taskId=" + taskId
            var url =
              "../jsps/process/listRollBackNodeList.jsp?taskId=" +
              taskId +
              "&instId=" +
              instId +
              "&commandId=" +
              commandId +
              "&commandType=" +
              commandType +
              "&processDesc=" +
              encodeURIComponent(
                encodeURIComponent($("#taskProcessDesc").val())
              ) +
              "&bizKey=" +
              $("#keyValues").val();
            openWindow(480, 320, toolObj.toobarTitle, url, toolObj, () => {});
            return false;
          } else if (commandType == "submit") {
            if (this.validate()) {
              this.execProcessTask(data);
            } else {
              alertMessage("表单验证不通过,请重新填写");
              return;
            }
          } else {
            //getPageWin('layout', window).invokeResult = null;//初始化为NULL
            var title = commandJsonObj.fixParam_title;
            if (!title || title == "") {
              title = "修改";
            }
            var toolObj = {
              toobarTitle: title
            };
            var url = commandJsonObj.fixParam_url;
            if (url) {
              var width = commandJsonObj.fixParam_width;
              var height = commandJsonObj.fixParam_height;
              if (!width) {
                width = 800;
              }
              if (!height) {
                height = 600;
              }
              this.getPageWin("layout", window).openWindow(
                width,
                height,
                toolObj.toobarTitle,
                url,
                toolObj,
                () => {
                  var invokeResult = getPageWin("layout", window).invokeResult;
                  if (invokeResult && invokeResult.result) {
                    if (invokeResult.taskProcessDesc) {
                      var value = $("#taskProcessDesc").val();
                      if (value == "") {
                        value = invokeResult.taskProcessDesc;
                      } else {
                        value = value + "," + invokeResult.taskProcessDesc;
                      }
                      $("#taskProcessDesc").val(value);
                    }
                    this.execProcessTask(data);
                  }
                }
              );
            } else {
              this.execProcessTask(data);
            }
            return;
          }
        }
      });
    },
    confirmMessage(message, fn) {
      $.messager.confirm("\u63D0\u793A", message, fn);
    },
    alertMessage(message, fn) {
      $.messager.alert("\u63D0\u793A", message, "info", fn);
    },
    getPageWin(pageId, curWin) {
      var obj = this.getParentPageWin(pageId, curWin);
      return obj;
    },
    getParentPageWin(pageId, curWin) {
      var obj = curWin;
      if (typeof obj.pageId === "undefined" || obj.pageId != pageId) {
        if (obj.parent != null) {
          if (obj.location.href != obj.parent.location.href) {
            return this.getPageWin(pageId, obj.parent);
          } else {
            return obj;
          }
        }
        return obj;
      } else {
        return obj;
      }
    },

    closeLayUIOpen() {
      // 刷新我的代办接口
      localStorage.setItem("closeKey", 1);
      if (parent.layer != undefined) {
        parent.layer.close(parent.layer.getFrameIndex(window.name));
      } else {
        if (parent.parent.layer != undefined) {
          parent.parent.layer.close(
            parent.parent.layer.getFrameIndex(parent.name)
          );
        } else {
          if (parent.parent.parent.layer != undefined) {
            parent.parent.parent.layer.close(
              parent.parent.parent.layer.getFrameIndex(parent.parent.name)
            );
          } else {
            parent.parent.parent.parent.layer.close(
              parent.parent.parent.parent.layer.getFrameIndex(
                parent.parent.parent.name
              )
            );
          }
        }
      }
    },

    execProcessTask(data, submitCount = this.submitCount) {
      submitCount++;
      if (submitCount === 1) {
        if (this.$parent.isShowDetail === "edit" && this.$parent.isShowDetail) {
          if (this.$parent.$refs.modify.submitForm("ruleForm", "update")) {
            axios
              .get(
                this.contentPath +
                  "workflowProcess/processTask?" +
                  `instId=${data.instId}&taskId=${data.taskId}&commandId=${
                    data.commandId
                  }&commandType=${data.commandType}&processDesc=${
                    data.processDesc
                  }&formParam=${JSON.stringify(data.formParam)}`,
                data
              )
              .then(data => {
                var result = data.data;
                if (result.result) {
                  this.alertMessage(result.successMessage, () => {
                    var win = this.getListviewWin(window);
                    if (win == null) {
                      // this.getPageWin("fpPortal", window).closeWindow();
                      this.closeLayUIOpen();
                      localStorage.setItem("refreshPage", 1);
                    } else {
                      this.getListviewWin(window).closeWindow();
                    }
                  });
                } else {
                  this.submitCount = 0;
                  this.alertMessage(result.errorMessage, () => {
                    var win = this.getListviewWin(window);
                    if (win == null) {
                      // this.getPageWin("fpPortal", window).closeWindow();
                      this.closeLayUIOpen();
                      localStorage.setItem("refreshPage", 1);
                    } else {
                      this.getListviewWin(window).closeWindow();
                    }
                  });
                }
              });
          } else {
            this.$message.warning("校验出错!");
          }
        } else {
          axios
            .get(
              this.contentPath +
                "workflowProcess/processTask?" +
                `instId=${data.instId}&taskId=${data.taskId}&commandId=${
                  data.commandId
                }&commandType=${data.commandType}&processDesc=${
                  data.processDesc
                }&formParam=${JSON.stringify(data.formParam)}`,
              data
            )
            .then(data => {
              var result = data.data;
              if (result.result) {
                this.alertMessage(result.successMessage, () => {
                  var win = this.getListviewWin(window);
                  if (win == null) {
                    this.closeLayUIOpen();
                    // this.getPageWin("fpPortal", window).closeWindow();
                  } else {
                    this.getListviewWin(window).closeWindow();
                  }
                });
              } else {
                this.submitCount = 0;
                this.alertMessage(result.errorMessage, () => {
                  var win = this.getListviewWin(window);
                  if (win == null) {
                    this.closeLayUIOpen();
                    // this.getPageWin("fpPortal", window).closeWindow();
                  } else {
                    this.getListviewWin(window).closeWindow();
                  }
                });
              }
            });
        }
      }
    },
    getListviewWin(curWin) {
      var obj = curWin;
      if (typeof obj.listviewId === "undefined") {
        if (obj.parent != null) {
          if (obj.location.href != obj.parent.location.href) {
            return this.getListviewWin(obj.parent);
          } else {
            return null;
          }
        }
        return obj;
      } else {
        return obj;
      }
    },
    taskProcessDescCheck() {
      var result = "";
      var extendParam = 0;
      var val = $("#taskProcessDesc").val();
      if (val == "") {
        result = '{"result":false,"errorMsg":"请填写退回理由！"}';
      } else {
        result = '{"result":true,"extendParam":' + extendParam + "}";
      }
      return result;
    },
    saveData2(fn, data2) {
      try {
        var mark = this.saveDataBefore();
        if (!mark) {
          return;
        }
      } catch (e) {} //保存前处理
      var result = this.validate(); //在formVerify.js中
      var editWin = getEditWin(window);
      var inJCEdit = editWin != null ? true : false;
      if (parameterJsonObj.inJCEdit == "false") {
        //这个属性优先级高
        inJCEdit = false;
      }
      if (result) {
        $.messager.progress({
          title: "正在处理,请稍等..."
        });
        $("#dataForm").form("submit", {
          url: "../action/bizObjectBase!save.action",
          async: false,
          onSubmit: () => {
            return true;
          },
          success: data => {
            $.messager.progress("close");
            //保存主表信息后，流程再继续进行
            execProcessTask(data2);
            var dataObj = eval("(" + data + ")");
            if (dataObj.result) {
              if (dealMark == "new") {
                keyValues = dataObj.attribute.keyValues;
                dealMark = "update";
                document.getElementsByName("keyValues")[0].value = keyValues;
                document.getElementsByName("dealMark")[0].value = dealMark;
                //alert(keyValues+","+dealMark);
              }
              try {
                saveDataAfter();
              } catch (e) {} //保存后处理
            }
            if (!inJCEdit) {
              $.messager.progress("close");
              if (dataObj.result) {
                var listviewWin = getListviewWin(window);
                if (listviewWin != null) {
                  listviewWin.refresh();
                }
                // $.messager.defaults.ok = "确定";
                console.log("提示2");
                $.messager.alert("提示", dataObj.successMessage, "info", () => {
                  if (fn != null) {
                    return fn(dataObj);
                  }
                });
              } else {
                // $.messager.defaults.ok = "确定";
                console.log("提示2");
                $.messager.alert("提示", dataObj.errorMessage, "info", () => {
                  if (fn != null) {
                    return fn(dataObj);
                  }
                });
              }
            } else {
              getEditWin(window).assetExist = true;
              getEditWin(window).keyValues = dataObj.attribute.keyValues;
              if (fn != null) {
                return fn(dataObj);
              }
            }
          }
        });
      }
    },
    getEditWin(curWin) {
      var obj = curWin;
      if (typeof obj.integrationEditorId === "undefined") {
        if (obj.parent != null) {
          if (obj.location.href != obj.parent.location.href) {
            return this.getEditWin(obj.parent);
          } else {
            return null;
          }
        }
        return obj;
      } else {
        return obj;
      }
    },
    validate() {
      return true;
    },
    saveDataBefore() {
      return true;
    }
  }
};
</script>

<style scoped>
.panel-header {
  background: none;
  border: 0px;
  display: block;
  padding: 4px;
  border-left: 5px solid #b50005 !important;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  font-size: 13px;
  font-weight: bold;
  color: #000;
  line-height: 10px;
}
</style>
