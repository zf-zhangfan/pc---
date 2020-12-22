<template>

    <div>
         <p class="p1"><i class="el-icon-basketball"></i>   员工管理</p>
         <div  class="div1">
         <el-select v-model="value" placeholder="按姓名">
        <el-option
         v-for="item in options"
       :key="item.value"
         :label="item.label"
         :value="item.value">
    </el-option>
  </el-select>

  <el-input v-model="input" placeholder="请输入关键词" class="input"></el-input>
 <el-button class="input1"><i class="el-icon-search"></i>查找</el-button>
  <el-button class="input2"><i class="el-icon-plus"></i>新增员工</el-button>
  </div>

  <div class="div2">
      <p>分类</p>
      <ul class="ul1">
          <li><i class="el-icon-sugar"> 显示所有</i></li>
          <li><i class="el-icon-sugar"> 集团</i></li>
          <li>&nbsp;&nbsp;&nbsp;总经办</li>
          <li>&nbsp;&nbsp;&nbsp;人事部</li>
          <li>&nbsp;&nbsp;&nbsp;财务部</li>
          <li><i class="el-icon-watermelon"> 科技公司</i></li>
          <li><i class="el-icon-watermelon"> 工程公司</i></li>
          <li><i class="el-icon-watermelon"> 现代事务所</i></li>
          <li>&nbsp;&nbsp;&nbsp;北京机构</li>
          <li>&nbsp;&nbsp;&nbsp;杭州机构</li>
          <li>&nbsp;&nbsp;&nbsp;上海机构</li>
      </ul>
  </div>
   <div class="div3">
          <p>（以上分类中包含了在职的、试用期和临时的员工</p>
      </div>
      <div class="div4">
       <ul class="ul2">
           <li><i class="el-icon-s-custom"> 在职的员工</i></li>
           <li><i class="el-icon-s-custom"> 试用期员工</i></li>
           <li><i class="el-icon-s-custom"> 临时的员工</i></li>
           <li><i class="el-icon-s-custom"> 退休的员工</i></li>
           <li><i class="el-icon-s-custom"> 离职的员工</i></li>
       </ul>
      </div>
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
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="性别"
      width="110">
    </el-table-column>
    <el-table-column
      prop="province"
      label="工号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="从属于"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="服务"
      width="100">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="入职日期"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="140">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
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
        methods: {
      handleClick(row) {
        console.log(row);
      }
    },
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
          date: '李娜',
          name: '男',
          province: 'Ahf222',
          city: '杭州机构',
          address: '分公司经理',
          zip: 20090
        }, {
          date: '李娜',
          name: '男',
          province: 'Ahf222',
          city: '杭州机构',
          address: '分公司经理',
          zip: 20090
        }, {
          date: '李娜',
          name: '男',
          province: 'Ahf222',
          city: '杭州机构',
          address: '分公司经理',
          zip: 20090
        }, {
          date: '李娜',
          name: '男',
          province: 'Ahf222',
          city: '杭州机构',
          address: '分公司经理',
          zip: 20090
        }, {
          date: '李娜',
          name: '男',
          province: 'Ahf222',
          city: '杭州机构',
          address: '分公司经理',
          zip: 20090
        }, {
          date: '李娜',
          name: '男',
          province: 'Ahf222',
          city: '杭州机构',
          address: '分公司经理',
          zip: 20090
        }, {
          date: '李娜',
          name: '男',
          province: 'Ahf222',
          city: '杭州机构',
          address: '分公司经理',
          zip: 20090
        }, {
          date: '李娜',
          name: '男',
          province: 'Ahf222',
          city: '杭州机构',
          address: '分公司经理',
          zip: 20090
        }, {
          date: '李娜',
          name: '男',
          province: 'Ahf222',
          city: '杭州机构',
          address: '分公司经理',
          zip: 20090
        }, {
          date: '李娜',
          name: '男',
          province: 'Ahf222',
          city: '杭州机构',
          address: '分公司经理',
          zip: 20090
        }, {
          date: '李娜',
          name: '男',
          province: 'Ahf222',
          city: '杭州机构',
          address: '分公司经理',
          zip: 20090
        }, {
          date: '李娜',
          name: '男',
          province: 'Ahf222',
          city: '杭州机构',
          address: '分公司经理',
          zip: 20090
        }
        ]
      }
    }
      }

</script>

<style scoped>
.p1{
    font-size: 26px;
    margin-left: 10px;
    margin-top: 20px;
}
.div1{
    margin-left: 260px;
    margin-top: -30px;
}
.input{
    width: 350px;
    margin-left: 10px;
}
.input1{
    margin-left: 10px;
}
.input2{
    margin-left: 100px;
}
.div2{
    background: white;
    border: solid 1px rgb(194, 189, 184);
    height: 400px;
    width: 245px;
    margin-top: 15px;
    border-radius: 10px;

}
.div2 p{
    background: rgb(230, 227, 227);
    padding: 10px 15px;  
    font-weight: 600;
      border-radius: 10px;
}
.ul1 li{
    font-size: 14px;
    margin-top: 13px;
margin-left: 5px;
list-style: none;
}
.ul1 li:hover{
  cursor: pointer;
  color: rgb(0, 174, 255);
}
.ul2 li:hover{
  cursor: pointer;
  color: rgb(0, 174, 255);
}
.div3{
    background: white;
    padding-top: 20px;
    border: solid 1px  rgb(194, 189, 184);
    border-radius: 10px;
    font-size: 13px;
    height: 60px;
    width: 245px;
    text-align: center;
}
.div4{
    background: white;
    border: solid 1px rgb(194, 189, 184);
    height: 180px;
    width: 245px;
    border-radius: 10px;
}
.ul2 li{
    list-style: none;
    margin-left: 10px;
    font-size: 14px;
    margin-top: 15px;
}
.div5{
    width: 900px;
    margin-left: 260px;
    margin-top: -665px;
}
.div6{
    margin-left: 252px;
    margin-top: 6px;
}
</style>

