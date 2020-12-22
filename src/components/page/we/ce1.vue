<template>
    <div>
              <div class="div5">
           <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="主题"
      width="174">
    </el-table-column>
    <el-table-column
      prop="name"
      label="申请人"
      width="123">
    </el-table-column>
    <el-table-column
      prop="province"
      label="所属部门"
      width="151">
    </el-table-column>
    <el-table-column
      prop="city"
      label="需求岗位"
      width="153">
    </el-table-column>
    <el-table-column
      prop="address"
      label="需求人数"
      width="123">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="希望到岗日期"
      width="174">
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
        tableData: [{
          date: '招聘申请-王斌2016-05-02',
          name: '王小虎',
          province: '生产部',
          city: '初级工程师',
          address: '5',
          zip: 200333
        }, {
         date: '招聘申请-王斌2016-05-02',
          name: '王小虎',
          province: '生产部',
          city: '初级工程师',
          address: '5',
          zip: 200333
        }, {
         date: '招聘申请-王斌2016-05-02',
          name: '王小虎',
          province: '生产部',
          city: '初级工程师',
          address: '5',
          zip: 200333
        }, {
          date: '招聘申请-王斌2016-05-02',
          name: '王小虎',
          province: '生产部',
          city: '初级工程师',
          address: '5',
          zip: 200333
        }]
      }
    }
}
</script>

<style scoped>
.div5{
    width: 900px;
    margin-left: 260px;
    margin-top: -675px;
}
.div6{
    margin-left: 252px;
    margin-top: 6px;
}
</style>