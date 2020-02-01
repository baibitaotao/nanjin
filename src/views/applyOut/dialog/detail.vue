<template>
  <div class="detail">
    <el-dialog title="详情页" :visible.sync="dialogFormVisible">
      <el-row>
        <el-col :span="12" v-for="(val,key,index) in data" :key="index">
          <div class="left">
              {{key|getTitle}}
          </div>
         <div class="right">
              {{val}}
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="height:auto;">
          <div class="left">备注&nbsp;</div>
          <div class="right" style="width:70%">
            <el-input v-model="remark" type="textarea" style="marginBottom:5px;" :disabled="true"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row style="borderTop:0"> 
          <el-col :span="24" style="height:auto;">
          <div class="left">
              附件
          </div>
         <div class="right">
              <up-load v-if="dialogFormVisible" v-model="fileToken" :hiddenUpload='true'></up-load>
         </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import upLoad from '../../coomComponents/upload/src/upload'

export default {
  filters:{
      getTitle(val){
        if(val == 'applicantDepartment') return '所在的部门' 
        else if(val == 'applicantName') return '姓名'
        else if(val == 'applyName') return '会议名称'
        else if(val == 'applyNo') return '表单号'
        else if(val == 'applyStatusName') return '状态'
        else if(val == 'applyTime') return '申请日期'
        else if(val == 'isUserCarName') return '是否用车'
        else if(val == 'createBy') return '申请人'
        else if(val == 'reason') return '申请事由' 
        else if(val == 'outStartTime') return '外出开始时间' 
        else if(val == 'outEndTime') return '外出结束时间'
        else if(val == 'outLength') return '外出时长(天)'
        else if(val == 'returnTime') return '归来时间'
        else if(val == 'destination') return '外出地点'
        else if(val == 'vacationTypeName') return '请假类型'   
      }
  },
  data() {
    return {
      fileToken:'',
      dialogFormVisible: false,
      data:{},
      remark:''
    };
  },
  components:{upLoad},
  methods: {
    showDialog(val) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.data.applicantDepartment = val[0].applicantDepartment
      this.data.applicantName = val[0].applicantName
      this.data.applyNo = val[0].applyNo
      this.data.applyStatusName = val[0].applyStatusName
      this.data.applyTime = val[0].applyTime
      this.data.isUserCarName = val[0].isUserCarName
      this.remark = val[0].reason
      this.data.outStartTime = val[0].outStartTime
      this.data.outEndTime = val[0].outEndTime
      this.data.outLength = val[0].outLength
      this.data.destination = val[0].destination
      this.data.returnTime = val[0].returnTime

      this.fileToken  = val[0].attachment == null?'':val[0].attachment
    }
  }
};
</script>


