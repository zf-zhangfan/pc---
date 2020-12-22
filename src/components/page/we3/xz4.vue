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
      width="224">
    </el-table-column>
    <el-table-column
      prop="name"
      label="申请人"
      width="143">
    </el-table-column>
    <el-table-column
      prop="province"
      label="所属部门"
      width="143">
    </el-table-column>
    <el-table-column
      prop="city"
      label="需求岗位"
      width="148">
    </el-table-column>
    <el-table-column
      prop="address"
      label="需求人数"
      width="200">
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
        <keep-alive>
  <router-view></router-view>
</keep-alive> 
    </div>
</template>

<script>
export default {
     data() {
      return {
        tableData: [{
          date: '劳动合同登记-王萍-100021',
          name: '范静22222',
          province: '无固定期合同',
          city: '2014-09-08',
          address: '2016-09-07~2020-11-09',
          zip: 200333
        }, {
         date: '劳动合同登记-王萍-100021',
          name: '范静222222',
          province: '无固定期合同',
          city: '2014-09-08',
          address: '2016-09-07~2020-11-09',
          zip: 200333
        }, {
         date: '劳动合同登记-王萍-100021',
          name: '范静222',
          province: '无固定期合同',
          city: '2014-09-08',
          address: '2016-09-07~2020-11-09',
          zip: 200333
        }]
      }
    }
}
</script>

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