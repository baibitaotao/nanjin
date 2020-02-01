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
          <div class="left">会议议题&nbsp;</div>
          <div class="right" style="width:70%">
            <el-input v-model="remark" type="textarea" style="marginBottom:5px;" disabled="true" size="small"></el-input>
          </div>
        </el-col>
      </el-row>
     <el-row style="borderTop:0"> 
          <el-col :span="12" style="height:auto;">
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
        else if(val == 'applyName') return '纪要编号'
        else if(val == 'applyNo') return '表单号'
        else if(val == 'applyStatusName') return '状态' 
        else if(val == 'applyTime') return '申请日期' 
        else if(val == 'issuingDate') return '签发日期' 
        else if(val == 'meetingContent') return '会议议题' 
        else if(val == 'meetingHostName') return '会议主持' 
        else if(val == 'meetingPersonName') return '参会人员'
        else if(val == 'meetingPlace') return '会议地点'
        else if(val == 'meetingSummaryTypeName') return '会议类型'
        else if(val == 'meetingTime') return '会议时间'  
        else if(val == 'observerPersonName') return '列席人员'
        else if(val == 'recordPersonName') return '记录人员'
      }
  },
  components:{upLoad},
  data() {
    return {
      dialogFormVisible: false,
      data:{},
      fileToken:"",
      remark:""
    };
  },
  methods: {
    showDialog(val) {
      this.dialogFormVisible = !this.dialogFormVisible;
      this.data.applicantDepartment = val[0].applicantDepartment
      this.data.applicantName = val[0].applicantName
      this.data.applyNo = val[0].applyNo
      this.data.applyStatusName = val[0].applyStatusName
      this.data.applyTime = val[0].applyTime
      this.data.applyName = val[0].applyName
      this.data.issuingDate = val[0].issuingDate
      this.remark = val[0].meetingContent
      this.data.meetingHostName = val[0].meetingHostName
      this.data.meetingPersonName = val[0].meetingPersonName
      this.data.meetingPlace = val[0].meetingPlace
      this.data.meetingSummaryTypeName = val[0].meetingSummaryTypeName
      this.data.meetingTime = val[0].meetingTime
      this.data.observerPersonName = val[0].observerPersonName
      this.data.recordPersonName = val[0].recordPersonName

      this.fileToken =  val[0].attachment == null?'':val[0].attachment
    }
  }
};
</script>


