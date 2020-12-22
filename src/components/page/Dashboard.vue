<template>
    <div>
        <p class="p1"><i class="el-icon-basketball"></i>  我的桌面</p>
        <div class="pie">
               <p>员工在职状态分布</p>
        <div id="pie1">
            <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
            <div id="main1" style="float:left;width:100%;height: 300px"></div>
        </div>
        <div id="pie2">
            <div id="main2" style="float:left;width:100%"></div>
        </div>
    </div>
    <div>
        <bingzhaung1></bingzhaung1>
    </div>
     <div>
        <bingzhaung2></bingzhaung2>
    </div>

    <!-- 规章制度 -->
    <div class="div">
    <div class="div1">
        <p class="p2">规章制度<a>17</a></p>
        <ul class="ul1">
            <li>资产管理制度<span>5/7</span></li>
            <li>公司公务用车管理办法<span>5/7</span></li>
            <li>公司财务管理制度<span>5/7</span></li>
            <li>2016年公司最新管理制度<span>5/7</span></li>
            <li>办公室行政管理制度<span>5/7</span></li>
            <li>公司人才招聘制度<span>5/7</span></li>
            <li>公司绩效考核制度<span>5/7</span></li>
            <li>公司福利与关怀制度<span>5/7</span></li>
            <li>员工考勤管理制度<span>5/7</span></li>
        </ul>
    </div>

     <div class="div1">
        <p class="p2">规章制度<a>20</a></p>
        <ul class="ul1">
            <li>资产管理制度<span>5/7</span></li>
            <li>公司公务用车管理办法<span>5/7</span></li>
            <li>公司财务管理制度<span>5/7</span></li>
            <li>2016年公司最新管理制度<span>5/7</span></li>
            <li>办公室行政管理制度<span>5/7</span></li>
            <li>公司人才招聘制度<span>5/7</span></li>
            <li>公司绩效考核制度<span>5/7</span></li>
            <li>公司福利与关怀制度<span>5/7</span></li>
            <li>员工考勤管理制度<span>5/7</span></li>
        </ul>
    </div>

     <div class="div1">
        <p class="p2">规章制度<a>16</a></p>
        <ul class="ul1">
            <li>资产管理制度<span>5/7</span></li>
            <li>公司公务用车管理办法<span>5/7</span></li>
            <li>公司财务管理制度<span>5/7</span></li>
            <li>2016年公司最新管理制度<span>5/7</span></li>
            <li>办公室行政管理制度<span>5/7</span></li>
            <li>公司人才招聘制度<span>5/7</span></li>
            <li>公司绩效考核制度<span>5/7</span></li>
            <li>公司福利与关怀制度<span>5/7</span></li>
            <li>员工考勤管理制度<span>5/7</span></li>
        </ul>
    </div>

    <div id="div1">
        <p class="p2">规章制度<a>17</a></p>
        <ul class="ul1">
            <li>资产管理制度<span>5/7</span></li>
            <li>公司公务用车管理办法<span>5/7</span></li>
            <li>公司财务管理制度<span>5/7</span></li>
            <li>2016年公司最新管理制度<span>5/7</span></li>
            <li>办公室行政管理制度<span>5/7</span></li>
        </ul>
    </div>
    </div>
    </div>
</template>

 <script>// 引入基本模板
 import bingzhaung1 from '../page/bingzhaung1';
  import bingzhaung2 from '../page/bingzhaung2'
let echarts = require('echarts/lib/echarts')
//引入饼状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')


export default {
     components:{
        bingzhaung1,
        bingzhaung2
    },
  created(){
  },
  mounted(){
    this.initData();
  },
  methods:{
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main1'));
      // 绘制图表
      myChart.setOption({
          title : {
              text: '不同在职状态人工人数',//主标题
              subtext: '纯属虚构',//副标题
              x:'center',//x轴方向对齐方式
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              bottom: 'bottom',
              data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                      {value:335, name:'试用期员工'},
                      {value:310, name:'退休员工'},
                      {value:234, name:'临时员工'},
                      {value:135, name:'在职员工'},
                      {value:1548, name:'待休员工'}
                  ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      });
    },
  }
}
</script>



<style scoped>
.p1{
    font-size: 26px;
    margin-left: 10px;
}
.pie{
    border: solid 1px rgb(196, 189, 189);
    height: 350px;
    width: 400px;
      border-radius: 10px;
      margin-top: 20px;
}
.pie p{
    background: rgb(226, 223, 223);
    border-radius:8px;
    padding: 10px 10px;
    font-weight: 600;
}
#main1{
    margin-top: 10px;
}
.div1{
     border: solid 1px rgb(196, 189, 189);
    height: 350px;
    width: 400px;
     border-radius: 10px;
         margin-top: 20px;
}
.div1 p{
    background: rgb(226, 223, 223);
    border-radius:8px;
    padding: 10px 10px;
    font-weight: 600;
}
.p2 a{
   float:right;
   border: solid 1px rgb(0, 174, 255);
   background: rgb(0, 174, 255);
   color: white;
   border-radius: 10px;
   padding: 1px 10px;
}
.ul1 li{
    color: rgb(74, 112, 238);
    margin-top: 12px;
    margin-left: 10px;
    list-style: none;
}
.ul1 li:hover{
    cursor: pointer;
    color: black;
}
.ul1 span{
    float: right;
}
.div div{
    float: left;
    margin-left: 10px;
}
#div1{
     border: solid 1px rgb(196, 189, 189);
    height: 220px;
    width: 400px;
     border-radius: 10px;
         margin-top: 20px;
}
#div1 p{
    background: rgb(226, 223, 223);
    border-radius:8px;
    padding: 10px 10px;
    font-weight: 600;
}
</style>
