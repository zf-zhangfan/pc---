<template>
    <div>
        <p class="p1"><i class="el-icon-basketball"></i>   福利与关怀</p>
  
         <div class="div2">
          <p>分类</p>
          <ul class="ul1">
          <!-- <li><i class="el-icon-s-custom">   在职的员工</i></li> -->
          <router-link  tag="li" to="/dashboard/l18n/xz1"><i class="el-icon-s-custom">   劳动合同</i></router-link>
           <router-link tag="li"  to="/dashboard/l18n/xz2"><i class="el-icon-s-custom">   员工培训</i></router-link>
            <router-link tag="li"  to="/dashboard/l18n/xz3"><i class="el-icon-s-custom">   生日关怀</i></router-link>
             <router-link tag="li"  to="/dashboard/l18n/xz4"><i class="el-icon-s-custom">   专享福利</i></router-link>
           <!-- <li><i class="el-icon-s-custom">  试用期员工</i></li>
           <li><i class="el-icon-s-custom">  临时的员工</i></li>
           <li><i class="el-icon-s-custom">  退休的员工</i></li>
           <li><i class="el-icon-s-custom">  离职的员工</i></li> -->
      </ul>
  </div>
          <el-button class="input2"><i class="el-icon-plus"></i>劳动合同登记</el-button>
<keep-alive>
  <router-view></router-view>
</keep-alive>
    </div>
</template>

<script>
    export default {
    //      methods: {
    //   handleClick(row) {
    //     console.log(row);
    //   }
    // },

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
margin-left: 990px;
position: relative;
top: -688px;
}

</style>
