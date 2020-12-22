<template>

    <div>
         <p class="p1"><i class="el-icon-basketball"></i>   考勤管理</p>
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
  <el-button class="input2"><i class="el-icon-plus"></i>出差申请</el-button>
  </div>

<div class="div2">
          <p>分类</p>
          <ul class="ul1">
          <!-- <li><i class="el-icon-s-custom">   在职的员工</i></li> -->
          <router-link  tag="li" to="/dashboard/BaseCharts/qh1"><i class="el-icon-s-custom">   出差申请</i></router-link>
           <router-link tag="li"  to="/dashboard/BaseCharts/qh2"><i class="el-icon-s-custom">   外出申请</i></router-link>
            <router-link tag="li"  to="/dashboard/BaseCharts/qh3"><i class="el-icon-s-custom">   加班申请</i></router-link>
             <router-link tag="li"  to="/dashboard/BaseCharts/qh4"><i class="el-icon-s-custom">   请休假申请</i></router-link>
              <router-link tag="li"  to="/dashboard/BaseCharts/qh5"><i class="el-icon-s-custom">   调休申请</i></router-link>
              <router-link tag="li"  to="/dashboard/BaseCharts/qh6"><i class="el-icon-s-custom">   外勤定位</i></router-link>
           <!-- <li><i class="el-icon-s-custom">  试用期员工</i></li>
           <li><i class="el-icon-s-custom">  临时的员工</i></li>
           <li><i class="el-icon-s-custom">  退休的员工</i></li>
           <li><i class="el-icon-s-custom">  离职的员工</i></li> -->
      </ul>
  </div>
  <keep-alive>
  <router-view></router-view>
</keep-alive>
    </div>
</template>

<script>
    export default {
      
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
    width: 360px;
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
    height:665px;
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
.ul2 li{
    list-style: none;
    margin-left: 10px;
    font-size: 15px;
    margin-top: 15px;
}

</style>

