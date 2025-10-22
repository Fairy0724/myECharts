//柱状图模块1
(function () {
  //1.实例化对象
  const myChart = echarts.init(document.querySelector(".bar .chart"));
  //2.指定配置项和数据
  myChart.setOption({
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'
      }
    },
    grid: {
      left: '10px',
      bottom: '4%',
      right: '0px',
      // 包含刻度标签
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
        axisTick: {
          // true意思：图形和文字居中对齐
          alignWithLabel: true,
          // x轴线的不显示
          show: false
        },
        // x轴的文字颜色和大小
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: 10
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        // x轴的文字颜色和大小
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },

        // y轴线条样式
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 1,
            type: "solid"
          }
        },
        // y轴分割线的颜色
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 1,
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        // 柱子的宽度
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  });
  //3.让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
//柱状图模块2
(function () {
  //1.实例化对象
  const myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 定义颜色
  const myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", "#00F2F1"];
  //2.指定配置项和数据 
  myChart.setOption({
    //图标位置
    grid: {
      top: '10%',
      left: '10%',
      bottom: '5%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    //不显示x轴相关内容
    xAxis: {
      show: false
    },
    yAxis: [{
      type: 'category',
      data: ['NODE', 'VUE', 'Javascript', 'CSS3', 'HTML5'],
      // 翻转y轴
      inverse: true,
      // 不显示y轴线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
      // 刻度标签
      axisLabel: {
        color: "#fff"
      }
    },
    {
      type: 'category',
      data: [702, 350, 610, 793, 664],
      // 翻转y轴
      inverse: true,
      // 不显示y轴线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
      // 刻度标签
      axisLabel: {
        color: "#fff",
        textStyle: {
          fontSize: 12,
          color: "#fff"
        }
      }
    }
    ],
    // 数据
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        // y轴层叠为0
        yAxisIndex: 0,
        // 柱子间距
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,

        itemStyle: {
          // 修改第一组柱子的圆角
          barBorderRadius: 20,
          // 每个柱子颜色设置
          color: function (params) {
            // params 传进来的是柱子对象
            // params.dataIndex 是当前柱子的索引
            return myColor[params.dataIndex];
          }
        },
        // 显示柱子内的文字
        label: {
          show: true,
          // 图形内显示
          position: 'inside',
          //文字的显示格式
          formatter: '{c}%',
          color: '#fff'

        }
      },
      // 第二组柱子
      {
        name: '框',
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        // y轴层叠为1
        yAxisIndex: 1,
        // 柱子间距
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 15,
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  })
  //3.让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
//折线图模块1
(function () {
  //1.实例化对象
  const myChart = echarts.init(document.querySelector(".line .chart"));
  // 年份数据
  const yearData = [
    {
      year: '2020',  // 年份
      data: [  // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: '2021',  // 年份
      data: [  // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  //2.指定配置项和数据
  const option = ({
    // 定义两条线颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      right: '10%',
      top: '0%',
      data: ['新增粉丝', '新增游客'],
      textStyle: {
        // 图例文字颜色
        color: '#4c9bfd'
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      // 网格线是否显示
      show: true,
      borderColor: '#012f4a',
      //包含刻度标签
      containLabel: true
    },
    xAxis: {
      type: 'category',
      // 去除轴内间距
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 不显示刻度
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      // 去除轴线
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      data: [100, 200, 300, 400, 500, 600],
      // 不显示刻度
      axisTick: {
        show: false,
      },
      axisLine: {
        color: '#4c9bfd'
      },
      //分割线
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        stack: 'Total',
        data: yearData[0].data[0],
        // 平滑折线
        smooth: true
      },
      {
        name: '新增游客',
        type: 'line',
        stack: 'Total',
        data: yearData[0].data[1],
        // 平滑折线
        smooth: true
      }
    ]
  });
  myChart.setOption(option);
  //3.让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
  // 4.点击切换年份效果
  $('.line h2').on('click', 'a', function () {
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    const obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myChart.setOption(option);
  });
})();
//折线图模块2
(function () {
  //1.实例化对象
  const myChart = echarts.init(document.querySelector(".line2 .chart"));
  //2.指定配置项和数据
  myChart.setOption({
    grid: {
      left: '10',
      right: '10',
      bottom: '10',
      top: '30',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      top: '0%',
      data: ['播放量', '转发量'],
      textStyle: {
        // 图例文字颜色
        color: 'rgba(255, 255, 255, .5)',
        fontSize: 12
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
        //文本颜色
        axisLabel: {
          color: 'rgba(255, 255, 255, .6)',
          fontSize: 12
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, .6)'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(255, 255, 255, .6)',
            fontSize: 12
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '播放量',
        type: 'line',
        smooth: true,
        // 单独修改线的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域
        areaStyle: {// 渐变色，只需要复制即可
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 鼠标经过放大拐点
        emphasis: {
          focus: 'series'
        },
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
      },
      {
        name: '转发量',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: "#00d887",
          width: 2
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0, 216, 135, 0.4)"
              },
              {
                offset: 0.8,
                color: "rgba(0, 216, 135, 0.1)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        emphasis: {
          focus: 'series'
        },
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],

      }
    ]
  });
  //3.让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
//饼图模块1
(function () {
  //1.实例化对象
  const myChart = echarts.init(document.querySelector(".pie .chart"));
  //2.指定配置项和数据
  myChart.setOption({
    tooltip: {
      trigger: 'item'
    },
    legend: {
      // 距离底部为0%
      bottom: "5%",
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 文字颜色
      textStyle: {
        color: "rgba(255, 255, 255, .5)",
        fontSize: 12
      },
      // legend 中的data  可省略
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        // 设置饼形图在容器中的位置
        center: ["50%", "40%"],
        // 半径大小
        radius: ['40%', '60%'],
        // 避免标签重叠
        avoidLabelOverlap: false,
        // 不显示标签配置
        label: {
          show: false,
          position: 'center'
        },
        // 链接文字和图表的线
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
        ],
      }
    ]
  });
  //3.让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
//饼图模块2
(function () {
  //1.实例化对象
  const myChart = echarts.init(document.querySelector(".pie2 .chart"));
  //2.指定配置项和数据
  myChart.setOption({
    legend: {
      bottom: '0%',
      itemHeight: 10,
      itemWidth: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, .5)',
        fontSize: 12
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        // 显示模式，默认是半径模式
        roseType: 'radius',
        // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
        label: {
          fontSize: 10
        },
        labelLine: {
          // 连接扇形图线长
          length: 6,
          // 连接文字线长
          length2: 8
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  });
  //3.让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
// 中国地图模块
// (function () {
//   //1.实例化对象
//   const myChart = echarts.init(document.querySelector(".map .chart"));
//   //2.指定配置项和数据
//   myChart.setOption({

//   })

// })();