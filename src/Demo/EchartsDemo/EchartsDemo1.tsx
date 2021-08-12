import React, {useState} from "react";
import ReactECharts from 'echarts-for-react';
import IconLin from './svg/Icon-bar.svg';

const EchartsDemo1: React.FC = () => {

  const [type, setType] = useState('bar');

  const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const data1 = [];
  const data2 = [];
  const data3 = [];

  for (let i = 0; i < 7; i++) {
    data1.push((Math.random() * 18000).toFixed(2));
    data2.push((Math.random() * 40000).toFixed(2));
    data3.push((Math.random() + 8000).toFixed(2));
  }

  const emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)',
    }
  };

  const option = {
    title: {
      text: 'Promotion Transaction',
      subtext: 'By Week ｜ Order',
      // left: "center",
      // top: "center",
      textStyle: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Nunito Sans',
        color: '#1B1B1B',
      },
      subtextStyle: {
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Nunito Sans',
        color: '#757575',
      }
    },
    grid: {
      left: 20,
      top: 100,
      right: 0,
      bottom: 100,
      containLabel: true
    },
    legend: {
      show: true,
      data: ['Net value of this month', 'Net value of yesterday', 'Net value of last month today'],
      left: 0,
      bottom: 0,
      orient: 'vertical',
      itemGap: 12,
      itemWidth: 10,
      itemHeight: 10,
      icon: 'circle'
    },
    toolbox: {
      show: true,
      showTitle: false,
      feature: {
        magicType: {
          show: true,
          type: ["line", "bar"]
        },
      },
      orient: "horizontal",
    },
    tooltip: {
      trigger: 'axis',
      triggerOn: 'click',
    },
    xAxis: {
      data: xAxisData,
      name: '',
      axisLine: {
        lineStyle: {
          width: 2,
          color: "rgba(219, 219, 219, 1)",
          type: "solid"
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        color: '#1B1B1B',
        fontSize: 12,
        fontWeight: 400,
        fontFamily: 'Nunito Sans',
        margin: 18,
      },
      splitLine: {show: false},
      splitArea: {show: false}
    },
    yAxis: {
      position: 'right',
      axisLabel: {
        show: true,
        color: '#1B1B1B',
        fontSize: 12,
        fontWeight: 400,
        fontFamily: 'Nunito Sans',
        margin: 18,
      },
    },
    series: [
      {
        name: 'Net value of last month today',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: data1,
        barWidth: 20,
        itemStyle: {
          color: '#DBDBDB'
        }
      },
      {
        name: 'Net value of yesterday',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: data2,
        itemStyle: {
          color: '#4C9DCF'
        },
      },
      {
        name: 'Net value of this month',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: data3,
        itemStyle: {
          color: '#044E7D'
        }
      },
    ]
  };

  return (
    <div style={{marginTop: 24}}>

      <ReactECharts
        option={option}
        style={{height: 600, width: 400, margin: '0 auto', border: '1px solid #CDCDCD', borderRadius: 8, padding: 24,}}
        opts={{renderer: 'svg'}}
      />
    </div>
  )
}

export default EchartsDemo1;
