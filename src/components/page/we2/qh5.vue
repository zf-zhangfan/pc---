<template>
    <div>
         <!-- 表格 -->
      <div class="div5">
           <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="姓名"
      width="211">
    </el-table-column>
    <el-table-column
      prop="name"
      label="性别"
      width="142">
    </el-table-column>
    <el-table-column
      prop="province"
      label="工号"
      width="142">
    </el-table-column>
    <el-table-column
      prop="city"
      label="从属于"
      width="142">
    </el-table-column>
    <el-table-column
      prop="address"
      label="服务"
      width="220">
    </el-table-column>
  </el-table>
      </div>
     <!-- 分页 -->
      <div class="div6">
         <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '按工号'
        }, {
          value: '选项2',
          label: '按职务'
        }, {
          value: '选项3',
          label: '按入职日期'
        }, {
          value: '选项4',
          label: '按出生日期'
        }, {
          value: '选项5',
          label: '按最高学历'
        }],
        value: '',
          input: '',
           tableData: [{
         date: '出差申请-李浩-10098',
          name: '李浩',
          province: '技术部',
          city: '苏州',
          address: '2016-09-09~2016-11-09',
          zip: 20090
        }, {
          date: '出差申请-李浩-10098',
          name: '李浩',
          province: '技术部',
          city: '苏州',
          address: '2016-09-09~2016-11-09',
          zip: 20090
        }, {
         date: '出差申请-李浩-10098',
          name: '李浩',
          province: '技术部',
          city: '苏州',
          address: '2016-09-09~2016-11-09',
          zip: 20090
        }, {
          date: '出差申请-李浩-10098',
          name: '李浩',
          province: '技术部',
          city: '苏州',
          address: '2016-09-09~2016-11-09',
          zip: 20090
        }, {
          date: '出差申请-李浩-10098',
          name: '李浩',
          province: '技术部',
          city: '苏州',
          address: '2016-09-09~2016-11-09',
          zip: 20090
        }, {
         date: '出差申请-李浩-10098',
          name: '李浩',
          province: '技术部',
          city: '苏州',
          address: '2016-09-09~2016-11-09',
          zip: 20090
        }, {
          date: '出差申请-李浩-10098',
          name: '李浩',
          province: '技术部',
          city: '苏州',
          address: '2016-09-09~2016-11-09',
          zip: 20090
        }, {
          date: '出差申请-李浩-10098',
          name: '李浩',
          province: '技术部',
          city: '苏州',
          address: '2016-09-09~2016-11-09',
          zip: 20090
        }, {
          date: '出差申请-李浩-10098',
          name: '李浩',
          province: '技术部',
          city: '苏州',
          address: '2016-09-09~2016-11-09',
          zip: 20090
        }, {
         date: '出差申请-李浩-10098',
          name: '李浩',
          province: '技术部',
          city: '苏州',
          address: '2016-09-09~2016-11-09',
          zip: 20090
        }, {
         date: '出差申请-李浩-10098',
          name: '李浩',
          province: '技术部',
          city: '苏州',
          address: '2016-09-09~2016-11-09',
          zip: 20090
        }, {
          date: '出差申请-李浩-10098',
          name: '李浩',
          province: '技术部',
          city: '苏州',
          address: '2016-09-09~2016-11-09',
          zip: 20090
        }
        ]
      }
    }
}
</script>

<style scoped>
.div5{
    width: 860px;
    margin-left: 260px;
    margin-top: -665px;
}
.div6{
    margin-left: 252px;
    margin-top: 6px;
}
</style>