import React from "react";
import {Chart, Line, Point, Tooltip, Legend} from 'bizcharts';

const EchartsLineDemo: React.FC = () => {

  const data = [
    {
      month: "Jan",
      city: "Tokyo",
      temperature: 7
    },
    {
      month: "Jan",
      city: "London",
      temperature: 3.9
    },
    {
      month: "Feb",
      city: "Tokyo",
      temperature: 6.9
    },
    {
      month: "Feb",
      city: "London",
      temperature: 4.2
    },
    {
      month: "Mar",
      city: "Tokyo",
      temperature: 9.5
    },
    {
      month: "Mar",
      city: "London",
      temperature: 5.7
    },
    {
      month: "Apr",
      city: "Tokyo",
      temperature: 14.5
    },
    {
      month: "Apr",
      city: "London",
      temperature: 8.5
    },
    {
      month: "May",
      city: "Tokyo",
      temperature: 18.4
    },
    {
      month: "May",
      city: "London",
      temperature: 11.9
    },
    {
      month: "Jun",
      city: "Tokyo",
      temperature: 21.5
    },
    {
      month: "Jun",
      city: "London",
      temperature: 15.2
    },
    {
      month: "Jul",
      city: "Tokyo",
      temperature: 25.2
    },
    {
      month: "Jul",
      city: "London",
      temperature: 17
    },
    {
      month: "Aug",
      city: "Tokyo",
      temperature: 26.5
    },
    {
      month: "Aug",
      city: "London",
      temperature: 16.6
    },
    {
      month: "Sep",
      city: "Tokyo",
      temperature: 23.3
    },
    {
      month: "Sep",
      city: "London",
      temperature: 14.2
    },
    {
      month: "Oct",
      city: "Tokyo",
      temperature: 18.3
    },
    {
      month: "Oct",
      city: "London",
      temperature: 10.3
    },
    {
      month: "Nov",
      city: "Tokyo",
      temperature: 13.9
    },
    {
      month: "Nov",
      city: "London",
      temperature: 6.6
    },
    {
      month: "Dec",
      city: "Tokyo",
      temperature: 9.6
    },
    {
      month: "Dec",
      city: "London",
      temperature: 4.8
    }
  ];


  const weekData = [
    {week: 'Mon', type: 'month', sales: 1000},
    {week: 'Mon', type: 'yesterday', sales: 800},
    {week: 'Mon', type: 'lastMonthToday', sales: 1000},

    {week: 'Tue', type: 'month', sales: 1500},
    {week: 'Tue', type: 'yesterday', sales: 1200},
    {week: 'Tue', type: 'lastMonthToday', sales: 1000},

    {week: 'Wed', type: 'month', sales: 1200},
    {week: 'Wed', type: 'yesterday', sales: 900},
    {week: 'Wed', type: 'lastMonthToday', sales: 500},

    {week: 'Thu', type: 'month', sales: 5000},
    {week: 'Thu', type: 'yesterday', sales: 3000},
    {week: 'Thu', type: 'lastMonthToday', sales: 2000},

    {week: 'Fri', type: 'month', sales: 5000},
    {week: 'Fri', type: 'yesterday', sales: 3000},
    {week: 'Fri', type: 'lastMonthToday', sales: 2000},

    {week: 'Sat', type: 'month', sales: 10000},
    {week: 'Sat', type: 'yesterday', sales: 2000},
    {week: 'Sat', type: 'lastMonthToday', sales: 8000},

    {week: 'Sun', type: 'month', sales: 10000},
    {week: 'Sun', type: 'yesterday', sales: 2000},
    {week: 'Sun', type: 'lastMonthToday', sales: 8000},
  ]

  const scale = {
    sales: {min: 0, max: 20000},
    // city: {
    //   formatter: (v: any) => {
    //     // @ts-ignore
    //     return {
    //       London: '伦敦',
    //       Tokyo: '东京'
    //     }[v]
    //   }
    // }
  }

  return (
    <Chart scale={scale} padding={[30, 20, 60, 40]} autoFit height={320} data={weekData}
           interactions={['element-active']}>
      <Point position="week*sales" color="type" shape='circle'/>
      <Line shape="smooth" position="week*sales" color="type" label="sales"/>
      <Tooltip shared showCrosshairs/>
      <Legend background={{
        padding: [5, 100, 5, 36],
        style: {
          fill: '#eaeaea',
          stroke: '#fff'
        }
      }}/>
    </Chart>
  )
}

export default EchartsLineDemo;
