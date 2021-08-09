import React from "react";
import ReactECharts from 'echarts-for-react';

const EchartsDemo1: React.FC = () => {

  const option = {
    title: {
      // text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [{
      // name: '销量',
      type: 'bar',
      data: [5102, 2050, 3000, 1015, 1990, 500, 2450]
    }]
  };

  return (
    <>
      <ReactECharts
        option={option}
        style={{height: 600, width: 400, margin: '0 auto'}}
        opts={{renderer: 'svg'}}
      />
    </>
  )
}

export default EchartsDemo1;
