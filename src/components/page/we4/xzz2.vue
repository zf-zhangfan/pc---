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
      label="主题"
      width="204">
    </el-table-column>
    <el-table-column
      prop="name"
      label="申请人"
      width="140">
    </el-table-column>
    <el-table-column
      prop="province"
      label="所属部门"
      width="123">
    </el-table-column>
    <el-table-column
      prop="city"
      label="需求岗位"
      width="123">
    </el-table-column>
    <el-table-column
      prop="address"
      label="需求人数"
      width="133">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="希望到岗日期"
      width="134">
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

<style scoped>
.div5{
    width: 860px;
    margin-left: 260px;
    margin-top: -675px;
}
.div6{
    margin-left: 252px;
    margin-top: 6px;
}
</style>

<script>
export default {
    data() {
      return {
        tableData: [{
          date: '2016年4月绩效考核单-张旭',
          name: '销售部',
          province: '张旭',
          city: '92',
          address: '0',
          zip: 0
        }, {
           date: '2016年4月绩效考核单-张旭',
          name: '销售部',
          province: '张旭',
          city: '92',
          address: '0',
          zip: 0
        }, {
           date: '2016年4月绩效考核单-张旭',
          name: '销售部',
          province: '张旭',
          city: '92',
          address: '0',
          zip: 0
        }, {
           date: '2016年4月绩效考核单-张旭',
          name: '销售部',
          province: '张旭',
          city: '92',
          address: '0',
          zip: 0
        }, {
           date: '2016年4月绩效考核单-张旭',
          name: '销售部',
          province: '张旭',
          city: '92',
          address: '0',
          zip: 0
        }, {
           date: '2016年4月绩效考核单-张旭',
          name: '销售部',
          province: '张旭',
          city: '92',
          address: '0',
          zip: 0
        }, {
           date: '2016年4月绩效考核单-张旭',
          name: '销售部',
          province: '张旭',
          city: '92',
          address: '0',
          zip: 0
        }]
      }
    }
}
</script>