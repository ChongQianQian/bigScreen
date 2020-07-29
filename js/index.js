// 柱状图1模块
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    var option = {
      color: ["#2f89cf"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "2%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
            "旅游行业",
            "教育培训",
            "游戏行业",
            "医疗行业",
            "电商行业",
            "社交行业",
            "金融行业"
          ],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
              // width: 1,
              // type: "solid"
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
          name: "直接访问",
          type: "bar",
          barWidth: "35%",
          data: [200, 300, 300, 900, 1500, 1200, 600],
          itemStyle: {
            barBorderRadius: 5
          }
        }
      ]
    };
  
    // 把配置给实例对象
    myChart.setOption(option);
    // 当屏幕尺寸发生变化的时候，调整图表
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  
    // 数据变化
    var dataAll = [
      { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
      { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    ];
  
    //需求点击2020 2019切换数据
    $(".bar h2 ").on("click", "a", function() {
      option.series[0].data = dataAll[$(this).index()].data;
      myChart.setOption(option);
    });
})();
  
// 柱状图2模块
(function(){
    // 实例化对象
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        grid: {
          top: "10%",
          left: "22%",
          bottom: "10%"
          // containLabel: true
        },
        // 不显示x轴的相关信息
        xAxis: {
          show: false
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
            // 不显示y轴的线
            axisLine: {
              show: false
            },
            // 不显示刻度
            axisTick: {
              show: false
            },
            // 把刻度标签里面的文字颜色设置为白色
            axisLabel: {
              color: "#fff"
            }
          },
          {
            data: [702, 350, 610, 793, 664],
            inverse: true,
            // 不显示y轴的线
            axisLine: {
              show: false
            },
            // 不显示刻度
            axisTick: {
              show: false
            },
            // 把刻度标签里面的文字颜色设置为白色
            axisLabel: {
              color: "#fff"
            }
          }
        ],
        series: [
          {
            name: "条",
            type: "bar",
            data: [70, 34, 60, 78, 69],
            yAxisIndex: 0,
            // 修改第一组柱子的圆角
            itemStyle: {
              barBorderRadius: 20,
              // 此时的color 可以修改柱子的颜色
              color: function(params) {
                // params 传进来的是柱子对象
                console.log(params);
                // dataIndex 是当前柱子的索引号
                return myColor[params.dataIndex];
              }
            },
            // 柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 10,
            // 显示柱子内的文字
            label: {
              show: true,
              position: "inside",
              // {c} 会自动的解析为 数据  data里面的数据
              formatter: "{c}%"
            }
          },
          {
            name: "框",
            type: "bar",
            barCategoryGap: 50,
            barWidth: 15,
            yAxisIndex: 1,
            data: [100, 100, 100, 100, 100],
            itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              barBorderRadius: 15
            }
          }
        ]
    };
    
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//折线图1绘制
(function() {
    var yearData = [
      {
        year: "2020", // 年份
        data: [
          // 两个数组是因为有两条线
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
      },
      {
        year: "2021", // 年份
        data: [
          // 两个数组是因为有两条线
          [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
          [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
        ]
      }
    ];
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"));
    // 2.指定配置
    var option = {
      // 通过这个color修改两条线的颜色
      color: ["#00f2f1", "#ed3f35"],
      tooltip: {
        trigger: "axis"
      },
      legend: {
        // 如果series 对象有name 值，则 legend可以不用写data
        // 修改图例组件 文字颜色
        textStyle: {
          color: "#4c9bfd"
        },
        // 这个10% 必须加引号
        right: "10%"
      },
      grid: {
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        show: true, // 显示边框
        borderColor: "#012f4a", // 边框颜色
        containLabel: true // 包含刻度文字在内
      },
  
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "#4c9bfd" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        }
      },
      yAxis: {
        type: "value",
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "#4c9bfd" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a" // 分割线颜色
          }
        }
      },
      series: [
        {
          name: "新增粉丝",
          type: "line",
          // true 可以让我们的折线显示带有弧度
          smooth: true,
          data: yearData[0].data[0]
        },
        {
          name: "新增游客",
          type: "line",
          smooth: true,
          data: yearData[0].data[1]
        }
      ]
    };
  
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  
    // 5.点击切换效果
    $(".line h2").on("click", "a", function() {
      // alert(1);
      // console.log($(this).index());
      // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
      // console.log(yearData[$(this).index()]);
      var obj = yearData[$(this).index()];
      option.series[0].data = obj.data[0];
      option.series[1].data = obj.data[1];
      // 需要重新渲染
      myChart.setOption(option);
    });
})();

  // 折线图2 优秀作品
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
  
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          lineStyle: {
            color: "#dddc6b"
          }
        }
      },
      legend: {
        top: "0%",
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      grid: {
        left: "10",
        top: "30",
        right: "10",
        bottom: "10",
        containLabel: true
      },
  
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.2)"
            }
          },
  
          data: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30"
          ]
        },
        {
          axisPointer: { show: false },
          axisLine: { show: false },
          position: "bottom",
          offset: 20
        }
      ],
  
      yAxis: [
        {
          type: "value",
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
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
          name: "播放量",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: "#0184d5",
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          itemStyle: {
            normal: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12
            }
          },
          data: [
            30,
            40,
            30,
            40,
            30,
            40,
            30,
            60,
            20,
            40,
            20,
            40,
            30,
            40,
            30,
            40,
            30,
            40,
            30,
            60,
            20,
            40,
            20,
            40,
            30,
            60,
            20,
            40,
            20,
            40
          ]
        },
        {
          name: "转发量",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: "#00d887",
              width: 2
            }
          },
          areaStyle: {
            normal: {
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
            }
          },
          itemStyle: {
            normal: {
              color: "#00d887",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12
            }
          },
          data: [
            50,
            30,
            50,
            60,
            10,
            50,
            30,
            50,
            60,
            40,
            60,
            40,
            80,
            30,
            50,
            60,
            10,
            50,
            30,
            70,
            20,
            50,
            10,
            40,
            50,
            30,
            70,
            20,
            50,
            10,
            40
          ]
        }
      ]
    };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
})();

//饼图1
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".pie .chart"));
  
    option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function(p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        }
      },
      legend: {
        top: "90%",
        itemWidth: 10,
        itemHeight: 10,
        data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      series: [
        {
          name: "年龄分布",
          type: "pie",
          center: ["50%", "42%"],
          radius: ["40%", "60%"],
          color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
            "#06b4ab",
            "#06c8ab",
            "#06dcab",
            "#06f0ab"
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 1, name: "0岁以下" },
            { value: 4, name: "20-29岁" },
            { value: 2, name: "30-39岁" },
            { value: 2, name: "40-49岁" },
            { value: 1, name: "50岁以上" }
          ]
        }
      ]
    };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
})();

//饼图1
(function() {
// 1. 实例化对象
var myChart = echarts.init(document.querySelector(".pie2  .chart"));
// 2. 指定配置项和数据
var option = {
    legend: {
    top: "90%",
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
    }
    },
    tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
    "#006cff",
    "#60cda0",
    "#ed8884",
    "#ff9f7f",
    "#0096ff",
    "#9fe6b8",
    "#32c5e9",
    "#1d9dff"
    ],
    series: [
    {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: [
        { value: 20, name: "云南" },
        { value: 26, name: "北京" },
        { value: 24, name: "山东" },
        { value: 25, name: "河北" },
        { value: 20, name: "江苏" },
        { value: 25, name: "浙江" },
        { value: 30, name: "深圳" },
        { value: 42, name: "广东" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
        fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
        // 连接到图形的线长度
        length: 10,
        // 连接到文字的线长度
        length2: 10
        }
    }
    ]
};

// 3. 配置项和数据给我们的实例化对象
myChart.setOption(option);
// 4. 当我们浏览器缩放的时候，图表也等比例缩放
window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
});
})();

