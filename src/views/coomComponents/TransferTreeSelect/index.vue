<template>
  <div class="multiple-selection-component">
    <div class="transfer-contanier clearfix">
      <div class="inner clearfix">
        <div class="tree-left">
          <div class="button-box">
            <el-input v-model.trim="filterText" size="mini" clearable placeholder="输入姓名进行过滤" />
            <el-button icon="el-icon-search" size="mini" style="margin-left:5px;">查询</el-button>
          </div>
          <div class="tree-box">
            <el-tree
              ref="tree"
              class="filter-tree"
              empty-text="暂无数据"
              show-checkbox
              :check-on-click-node="true"
              :default-expand-all="true"
              :expand-on-click-node="false"
              :props="defaultProps"
              :data="treeData"
              :filter-node-method="filterNode"
              node-key="userId"
              @check-change="checkChange"
            />
          </div>
        </div>
        <div class="box-center">
          <div class="list-member">
            <h2>
              <img src="./images/diandian.png" alt>常选人员
            </h2>
            <ul>
              <li
                v-for="(item,index) in defaultMember"
                :key="item.userId"
                ref="memberLi"
                :class="{'li-focus' : chooseNum==index}"
                @click="memberSelect(index,item.userId,item.userName)"
              >
                <i class="select el-icon-check" />
                <span style="padding-left: 17px;">{{ item.userName }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="list-right">
          <div class="select">
            <el-select
              v-model="valueSelect"
              style="width:100%;"
              filterable
              clearable
              size="mini"
              placeholder="请选择"
              @change="handleChange"
            >
              <el-option
                v-for="item in options"
                :key="item.groupId"
                :label="item.groupName"
                :value="item.groupId"
              >
                <span style="float: left">{{ item.groupName }}</span>
                <span
                  style="float: right; color: #8492a6; font-size:12px;display: none;"
                  class="icon-nav"
                >
                  <i @click.stop="defaultSetting(item.groupId)">默认</i>
                  <i style="margin-left:10px;" @click.stop="deleteGroupMember(item.groupId)">删除</i>
                </span>
              </el-option>
            </el-select>
          </div>
          <div class="choose-member-content">
            <div class="tag-box">
              <el-tag
                v-for="tag in chooseMember"
                :key="tag.userId"
                style="margin-right:10px;"
                closable
                size="mini"
                type="success"
                @close="tagClose(tag.userId)"
              >{{ tag.name }}</el-tag>
            </div>
          </div>
          <div class="button-nav">
            <el-button
              style="background-color: #b50005;"
              type="primary"
              size="mini"
              icon="el-icon-delete"
              @click="all_delete"
            >全部删除</el-button>
            <el-button
              style="background-color: #b50005;"
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="innerVisible = true"
            >保存分组</el-button>
          </div>
        </div>
      </div>
      <el-dialog title="自定义分组" append-to-body :visible.sync="innerVisible">
        <div class="edit-box">
          <el-input v-model.trim="editInput" placeholder="请输入关键字搜索" clearable />
          <div class="setting">
            <p>
              保存为默认分组
              <el-switch v-model="switchValue" active-color="#b50005" inactive-color="#ccc" />
            </p>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-success"
              style="margin-left:10px;background-color: #b50005;"
              @click="save_group_name"
            >确认</el-button>
          </div>
        </div>
      </el-dialog>

      <div class="button-bottom">
        <div class="button" @click="handleSave">
          <img src="./images/save.png" alt>保存
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MultipleSelection',
  model: {
    prop: 'value',
    event: 'update-value'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    contextPath: {
      // 请求地址
      type: String,
      default: '/oa-web/'
    },
    userId: [String, Number],
    selectType: {
      type: String,
      default: 'role'
    },
    bid: {
      type: String,
      default: '75'
    }
  },
  data() {
    return {
      switchValue: false,
      editInput: '',
      innerVisible: false,
      dialogTableVisible: false,
      chooseNum: null,
      filterText: '',
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      defaultMember: [], // 常选人员
      chooseMember: [],
      options: [], // select-options
      valueSelect: '',
      groupsList: [],
      sChooseMemberArr: [],
      valueDefault: [],
      url_project_id: '',
      loading: false
    }
  },
  computed: {
    myValue() {
      return this.value !== '' ? this.value.split(',') : []
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  created() {
    this.url_project_id = this.bid
    this.initDefaultData()
    this.getTreeList()
  },

  mounted() {
    this.$nextTick(function() {
      let arr = []
      if (this.value !== '') {
        arr = this.value.split(',')
        this.$refs.tree.setCheckedKeys(arr)
        for (let i = 0; i < this.defaultMember.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            if (this.defaultMember[i].id == arr[j]) {
              this.$refs.memberLi[i].className = 'li-focus' // 添加类
            }
          }
        }
        this.chooseMember = this.$refs.tree.getCheckedNodes()
        for (let k = 0; k < this.chooseMember.length; k++) {
          if (this.chooseMember[k].children !== undefined) {
            this.chooseMember.splice(k, 1)
          }
        }
      }
    })
  },
  methods: {
    getTreeList() {
      const _self = this
      axios({
        url: this.contextPath + 'tree/getTreeList',
        method: 'get'
      }).then(function(response) {
        const model = response.data.data.model
        _self.treeData.push(model)
        _self.$nextTick(function() {
          _self.valueDefault = this.value.split(',')
          _self.$refs.tree.setCheckedKeys(this.valueDefault)
        })
      })
    },
    initDefaultData() {
      const _self = this
      axios({
        // 获取select-init初始化
        url: this.contextPath + '/selectUser/init',
        method: 'get'
      }).then(function(response) {
        const groups = response.data.data.groups
        _self.groupsList = response.data.data.groups
        _self.defaultMember = response.data.data.users
        if (groups.length > 0) {
          // 处理分组人员-select-options
          _self.options = []
          for (let i = 0; i < groups.length; i++) {
            const obj = {
              groupName: '',
              groupId: ''
            }
            obj.groupName = groups[i].groupName
            obj.groupId = groups[i].groupId
            _self.options.push(obj)
          }
        }
      })
    },
    filterNode(value, data) {
      // 通过关键字过滤树节点
      if (!value) return true
      return data.name.indexOf(value) !== -1
    },
    memberSelect(index, id, name) {
      // 常用人员点击
      if (this.$refs.memberLi[index].className.length <= 0) {
        // 首先先判断当前li有没有被选中，因为我这里li除了选中状态的有类名，其他没有类名，所以我就这么判断了。
        // 这么看有时候舍弃一小丢丢规范的东西反而省力。
        this.$refs.memberLi[index].className = 'li-focus' // 添加类
        // 处理选中值
        const obj = {
          userId: '',
          name: ''
        }
        obj.userId = id
        obj.name = name
        this.sChooseMemberArr.push(obj)
        // 选中tree
        this.$refs.tree.setCheckedNodes(this.sChooseMemberArr)
      } else {
        // 当前li已经被选中，那么在多选的逻辑里，是允许人们选中后再取消选中的，所以前端展示层面上把样式去掉。
        this.$refs.memberLi[index].className = '' // 选中再取消的情况
        for (let i = 0; i < this.chooseMember.length; i++) {
          if (this.chooseMember[i].userId == id) {
            this.chooseMember.splice(i, 1)
          }
        }
        // tree使用这个方法也是对chooseMember push 数据，
        // 所以数据push了两遍
        // 在checkChange添加一个处理函数，加个flag
        this.$refs.tree.setCheckedNodes(this.chooseMember)
      }
    },
    checkChange(data, check) {
      // 吴海滨-数据有问题-处理,怎么处理？
      // 节点选中状态发生变化时的回调
      // console.log(this.chooseMember)

      const len = this.chooseMember.length
      if (check) {
        // 节点被选中状态下，同时查询常用人员是匹配，也是需要被选中
        if (data.type === 'PERSON') {
          for (let i = 0; i < this.defaultMember.length; i++) {
            if (this.defaultMember[i].userId == data.userId) {
              this.$refs.memberLi[i].className = 'li-focus' // 添加类
            }
          }

          // 处理常选人员
          const dataObj = {
            userId: '',
            name: ''
          }
          dataObj.userId = data.userId
          dataObj.name = data.name

          this.sChooseMemberArr.push(dataObj)

          // 去重
          var hash = {}
          this.chooseMember = this.sChooseMemberArr.reduce(function(
            item,
            next
          ) {
            hash[next.userId]
              ? ''
              : (hash[next.userId] = true && item.push(next))
            return item
          },
          [])
        }
      } else {
        for (let l = 0; l < this.defaultMember.length; l++) {
          if (this.defaultMember[l].userId == data.userId) {
            this.$refs.memberLi[l].className = '' // 添加类
          }
        }

        for (let k = 0; k < this.chooseMember.length; k++) {
          // 处理选中被取消的
          if (this.chooseMember[k].userId == data.userId) {
            this.chooseMember.splice(k, 1)
          }
        }
      }
      this.sChooseMemberArr = this.chooseMember
    },
    defaultHandleArr(data) {
      this.$refs.tree.setCheckedNodes(data)
    },
    handleChange() {
      const len = this.groupsList.length
      let arr = []
      for (let i = 0; i < len; i++) {
        if (this.groupsList[i].groupId === this.valueSelect) {
          arr = this.groupsList[i].groupMembers
        }
      }
      const aLen = arr.length
      if (aLen > 0) {
        for (let j = 0; j < aLen; j++) {
          const obj_a = {
            userId: '',
            name: ''
          }
          obj_a.userId = arr[j].memberId
          obj_a.name = arr[j].memberName
          this.sChooseMemberArr.push(obj_a)
        }
      }

      // 去重
      const hash = {}
      this.chooseMember = this.sChooseMemberArr.reduce(function(item, next) {
        hash[next.userId] ? '' : (hash[next.userId] = true && item.push(next))
        return item
      }, [])
      this.$refs.tree.setCheckedNodes(this.chooseMember)
    },
    defaultSetting(id) {
      // 默认设置
      const _self = this
      axios({
        url: this.contextPath + `/selectUser/setDefaultGroup?groupId=${id}`,
        method: 'get'
      }).then(function(response) {
        _self.$message({
          message: response.data.msg,
          type: 'success'
        })
        _self.initDefaultData()
      })
    },
    deleteGroupMember(id) {
      // 删除分组成员
      const _self = this
      axios({
        url: this.contextPath + `/selectUser/deleteGroup?groupId=${id}`,
        method: 'get'
      }).then(function(response) {
        _self.$message({
          message: response.data.msg,
          type: 'success'
        })
        _self.initDefaultData()
        const len = _self.options.length
        if (len == 1) {
          _self.options = []
        }
      })
    },
    tagClose(id) {
      // close tag标签
      for (let i = 0; i < this.chooseMember.length; i++) {
        // 处理选中被取消的
        if (this.chooseMember[i].userId == id) {
          this.chooseMember.splice(i, 1)
        }
      }
      this.$refs.tree.setCheckedNodes(this.chooseMember)
    },
    defaultDelete(id) {
      // 删除常用close
      for (let i = 0; i < this.chooseMember.length; i++) {
        // 处理选中被取消的
        if (this.chooseMember[i].userId == id) {
          this.chooseMember.splice(i, 1)
        }
      }
      this.$refs.tree.setCheckedNodes(this.chooseMember)
    },
    all_delete() {
      // 全部删除
      this.$refs.tree.setCheckedKeys([])
    },
    save_group_name() {
      // 保存自定义分组名字
      const val = this.editInput
      const _self = this
      if (val === '') {
        this.$message({
          message: '请输入关键字搜索'
        })
      } else if (val.length >= 20) {
        this.$message({
          message: '请输入小于20字符'
        })
      } else {
        const chooseArr = []
        this.defaultChoose(chooseArr, this.chooseMember, 'edit-save')
        const memberObjString = JSON.stringify(chooseArr)

        var params = new URLSearchParams()
        params.append('groupName', val)
        params.append('groupMembers', memberObjString)
        params.append('isDefault', this.switchValue)
        const URL = this.contextPath + '/selectUser/saveGroup'

        axios
          .post(URL, params)
          .then(function(response) {
            _self.innerVisible = false
            _self.$message({
              message: response.data.msg,
              type: 'success'
            })
            _self.initDefaultData()
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    },
    handleSave() {
      // 保存
      const _self = this
      const idString = []
      const chooseArr = []
      const names = []

      // 清空选中状态
      this.all_delete()
      for (let k = 0; k < this.chooseMember.length; k++) {
        idString.push(this.chooseMember[k].userId)
        names.push(this.chooseMember[k].name)
      }
      const string_id = idString.join(',')
      // v-model
      this.$emit('update-value', string_id, names)

      // 功能-保存
      this.defaultChoose(chooseArr, this.chooseMember, 'save')
      const memberObjString = JSON.stringify(chooseArr)

      var params1 = new URLSearchParams()
      params1.append('selectUsers', memberObjString)

      const URL1 = this.contextPath + '/selectUser/saveSelectUser'

      axios.post(URL1, params1).then(function(response) {})

      // 业务功能
      const URL = '/oa-web/updateUserRole'

      var params = new URLSearchParams()
      params.append('roleId', string_id)
      params.append('userIds', this.userId)
    },
    defaultChoose(chooseArr, arr, type) {
      if (type == 'edit-save') {
        // 保存分组
        arr.forEach(function(element, index, array) {
          const obj = {
            memberId: '',
            memberName: ''
          }
          obj.memberId = element.userId
          obj.memberName = element.name
          chooseArr.push(obj)
        })
        return chooseArr
      } else {
        arr.forEach(function(element, index, array) {
          const obj = {
            userId: '',
            userName: ''
          }
          obj.userId = element.userId
          obj.userName = element.name
          chooseArr.push(obj)
        })
        return chooseArr
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url(./css/index.css);
</style>

