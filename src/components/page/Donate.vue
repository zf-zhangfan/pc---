<template>
    <div>
        <p class="p1"><i class="el-icon-basketball"></i>   绩效管理</p>
  
         <div class="div2">
          <p>分类</p>
          <ul class="ul1">
          <!-- <li><i class="el-icon-s-custom">   在职的员工</i></li> -->
          <router-link  tag="li" to="/dashboard/donate/xzz1"><i class="el-icon-s-custom">   月度绩效考核</i></router-link>
           <router-link tag="li"  to="/dashboard/donate/xzz2"><i class="el-icon-s-custom">   季度绩效考核</i></router-link>
            <router-link tag="li"  to="/dashboard/donate/xzz3"><i class="el-icon-s-custom">   年度绩效考核</i></router-link>
             <router-link tag="li"  to="/dashboard/donate/xzz4"><i class="el-icon-s-custom">   奖励和处罚</i></router-link>
           <!-- <li><i class="el-icon-s-custom">  试用期员工</i></li>
           <li><i class="el-icon-s-custom">  临时的员工</i></li>
           <li><i class="el-icon-s-custom">  退休的员工</i></li>
           <li><i class="el-icon-s-custom">  离职的员工</i></li> -->
      </ul>
  </div>
          <el-button class="input2"><i class="el-icon-plus"></i>招聘申请</el-button>
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
.div2{
    background: white;
    border: solid 1px rgb(194, 189, 184);
    height: 640px;
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
    color: rgb(83, 77, 77);
    margin-top: 13px;
margin-left: 10px;
list-style: none;
}
.ul1 li:hover{
  cursor: pointer;
  color: rgb(0, 174, 255);
}
.input2{
margin-left: 1030px;
position: relative;
top: -688px;
}

</style>