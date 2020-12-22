<template>
    <div>
        <p class="p1"><i class="el-icon-basketball"></i>   招聘和配置</p>
  
         <div class="div2">
          <p>分类</p>
          <ul class="ul1">
          <!-- <li><i class="el-icon-s-custom">   在职的员工</i></li> -->
          <router-link  tag="li" to="/dashboard/icon/ce1"><i class="el-icon-s-custom">   在职的员工</i></router-link>
           <router-link tag="li"  to="/dashboard/icon/ce2"><i class="el-icon-s-custom">   试用期员工</i></router-link>
            <router-link tag="li"  to="/dashboard/icon/ce3"><i class="el-icon-s-custom">   临时的员工</i></router-link>
             <router-link tag="li"  to="/dashboard/icon/ce4"><i class="el-icon-s-custom">   退休的员工</i></router-link>
              <router-link tag="li"  to="/dashboard/icon/ce5"><i class="el-icon-s-custom">   离职的员工</i></router-link>
           <!-- <li><i class="el-icon-s-custom">  试用期员工</i></li>
           <li><i class="el-icon-s-custom">  临时的员工</i></li>
           <li><i class="el-icon-s-custom">  退休的员工</i></li>
           <li><i class="el-icon-s-custom">  离职的员工</i></li> -->
      </ul>
  </div>
          <el-button class="input2"><i class="el-icon-plus"></i>招聘申请</el-button>
                <!-- 表格 -->
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
margin-left:1010px;
position: relative;
top: -688px;
}

</style>