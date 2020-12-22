<template>
    <div>
        <div class="pie">
               <p>员工年龄分布</p>
        <div id="pie1">
            <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
            <div id="main4" style="float:left;width:100%;height: 300px"></div>
        </div>
        <div id="pie2">
            <div id="main2" style="float:left;width:100%"></div>
        </div>
    </div>
    </div>
</template>

 <script>// 引入基本模板
let echarts = require('echarts/lib/echarts')
//引入饼状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')


export default {
  created(){
  },
  mounted(){
    this.initData();
  },
  methods:{
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main4'));
      // 绘制图表
      myChart.setOption({
          title : {
              text: '员工年龄分布',//主标题
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
                      {value:535, name:'31-35'},
                      {value:810, name:'36-40'},
                      {value:334, name:'26-30'},
                      {value:435, name:'20-25'},
                      {value:348, name:'41以上'}
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
    margin-left: 40px;
}
.pie{
    border: solid 1px rgb(196, 189, 189);
    height: 350px;
    width: 400px;
      border-radius: 10px;
      margin-top: -351px;
      margin-left: 840px;
}
.pie p{
    background: rgb(226, 223, 223);
    border-radius:8px;
    padding: 10px 10px;
    font-weight: 600;
}
#main4{
    margin-top: -300px;
}
</style>
