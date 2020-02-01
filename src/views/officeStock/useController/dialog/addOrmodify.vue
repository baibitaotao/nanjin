<template>
  <div class="addOrModify">
    <el-dialog title="领用登记新增" :visible.sync="dialogFormVisible">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="申请单号">
                <el-input v-model="fixedData.applyNo" :disabled="true" size="small" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="申请部门">
                <el-input v-model="fixedData.applicantDepartment" :disabled="true" size="small" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="申请人">
                <el-input v-model="fixedData.applicantName" :disabled="true" size="small" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="申请日期">
                <el-input v-model="fixedData.applyTime" :disabled="true" size="small" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="办公用品类别" prop="pItemId">
                <el-select v-model="ruleForm.pItemId" placeholder="请选择">
                  <el-option
                    v-for="item in patentIdOptions"
                    :key="item.pItemId"
                    :label="item.pItemName"
                    :value="item.pItemId"
                  />
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="产品名称" prop="itemId">
                <el-select v-model="ruleForm.itemId" placeholder="请选择">
                  <el-option
                    v-for="item in itemIdOptions"
                    :key="item.itemId"
                    :label="item.itemName"
                    :value="item.itemId"
                  />
                </el-select>
              </el-form-item>
            </div>
          </el-col>

        </el-row>
        <el-row>

          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="库存数量">
                <el-input v-model="ruleForm.stockAmount" :disabled="true" size="small" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="领用数量" prop="useAmount">
                <el-input v-model="ruleForm.useAmount" type="number" size="small" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <el-form-item label="备注">
                <el-input v-model="ruleForm.remark" type="textarea" rows="3" cols="110" />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <div class="submit">
          <el-button type="danger" size="mini" @click="submitForm('ruleForm','save')">{{isAddOrMOdify?'保存':'更新'}}</el-button>
          <el-button type="danger" size="mini" @click="submitForm('ruleForm','submit')" :disabled="isForbiden">提交</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var CountVerify = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入领用数量'))
      } else if (!/^[1-9]+[0-9]*$/.test(value)) {
        callback(new Error('领用数量不符合规则'))
      } else {
        callback()
      }
    }
    return {
      isForbiden:false,
      isAddOrMOdify: '',
      stockTypeOptions: [],
      patentIdOptions: [],
      unitOptions: [],
      allItem: [],
      dialogFormVisible: false,
      formLabelWidth: '120',
      ruleForm: {
        stockAmount: '',
        applyName: '',
        itemId: '',
        pItemId: '',
        remark: '',
        useAmount: ''
      },
      fixedData: {},
      useId: '',
      rules: {
        useAmount: [
          { required: 'true', validator: CountVerify, trigger: 'blur' }
        ],
        itemId: [
          { required: 'true', message: '用品类别必填', trigger: 'change' }
        ],
        pItemId: [
          { required: 'true', message: '库存类别必填', trigger: 'change' }
        ],
        remark: [{ required: 'false', trigger: 'blur' }, { min: 0, max: 5, message: '长度在 0 到 5 个字符', trigger: 'blur' }],
        applyName: [
          {
            required: 'true',
            message: '申请标题必填',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    pItemId() {
      return this.ruleForm.pItemId
    },
    itemId() {
      return this.ruleForm.itemId
    },
    itemIdOptions() {
      const arr = []
      this.allItem.forEach(item => {
        if (item.length !== 0) {
          if (item[0].patentId === this.ruleForm.pItemId) {
            item.forEach(element => {
              const obj = {}
              obj.itemName = element.itemName
              obj.itemId = Number(element.itemId)
              arr.push(obj)
            })
          }
        }
      })
      return arr
    }
  },
  watch: {
    itemId(val, oldval) {
      this.allItem.forEach(item => {
        item.forEach(element => {
          if (element.itemId === val) {
            return (this.ruleForm.stockAmount = element.stockAmount)
          }
        })
      })
    },
    pItemId(val, oldval) {
      this.ruleForm.itemId = ''
    }
  },
  methods: {
    showDialog(val, item) {
      this.dialogFormVisible = !this.dialogFormVisible
      this.isForbiden = false
      this.$store.dispatch('officeStock/selectItemList', {classify:0}).then(res => {
        const parent = []
        this.allItem = []
        
        res.data.forEach(element => {
          const obj = {}
          obj.pItemName = element.itemName
          obj.pItemId = Number(element.itemId)
          parent.push(obj)
          this.allItem.push(element.itemList)
        })
        this.patentIdOptions = parent
      })
      if (val === '111') {
        this.isAddOrMOdify = true
        this.ruleForm.stockAmount = ''
        this.ruleForm.applyName = ''
        this.ruleForm.itemId = ''
        this.ruleForm.pItemId = ''
        this.ruleForm.remark = ''
        this.ruleForm.useAmount = ''
        this.fixedData = item
      } else if (val === '112') {
        this.isAddOrMOdify = false

        this.fixedData.applyNo = item[0].applyNo
        this.fixedData.applicantDepartment = item[0].applicantDepartment
        this.fixedData.applyTime = item[0].applyTime
        this.fixedData.applicantName = item[0].applicantName

        this.ruleForm.applyName = item[0].applyName
        this.ruleForm.stockAmount = item[0].stockAmount
        this.ruleForm.remark = item[0].remark
        this.ruleForm.useAmount = item[0].useAmount
        this.ruleForm.pItemId = Number(item[0].patentId)
        this.$nextTick(() => {
          this.ruleForm.itemId = Number(item[0].itemId)
        })
        this.useId = item[0].useId
      }

      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate()
      })
    },
    submitForm(formName, val) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const params = {}
          if (this.ruleForm.useAmount > this.ruleForm.stockAmount) {
            this.ruleForm.useAmount = ''
            return this.$message.warning('领用数不能大于库存数')
          }

          if (this.isAddOrMOdify) {
            params.applyName = this.ruleForm.applyName
            params.itemId = this.ruleForm.itemId
            params.patentId = this.ruleForm.pItemId
            params.remark = this.ruleForm.remark
            params.useAmount = this.ruleForm.useAmount
            params.applyNo = this.fixedData.applyNo
          } else if (!this.isAddOrMOdify) {
            params.useId = this.useId
            params.applyName = this.ruleForm.applyName
            params.itemId = this.ruleForm.itemId
            params.patentId = this.ruleForm.pItemId
            params.remark = this.ruleForm.remark
            params.useAmount = this.ruleForm.useAmount
            params.applyNo = this.fixedData.applyNo
          }
          if (val === 'save') {
            this.$store
              .dispatch(
                this.isAddOrMOdify
                  ? 'useController/officeUseAdd'
                  : 'useController/officeUseUpdate',
                params
              )
              .then(res => {
                if (res.status === '0') {
                  this.$message.success(
                    this.isAddOrMOdify ? '新增成功' : '更新成功'
                  )
                  this.$emit('getTableList')
                  this.dialogFormVisible = !this.dialogFormVisible
                }
              })
          } else if (val === 'submit') {
            this.isForbiden = true
            this.$store.dispatch('useController/officeUseConditionProcessSubmit', params).then(res => {
              if (res.status === '0') {
                this.$message.success('提交成功')
              }
            }).finally(res => {
              this.$emit('getTableList')
              this.dialogFormVisible = !this.dialogFormVisible
              this.isForbiden = false
          });
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
