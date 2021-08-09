import React from "react";
import {Interaction, Interval, registerInteraction, Tooltip, Axis} from "bizcharts";
import AntvG2 from "./AntvG2";

registerInteraction("element-link", {
  start: [
    {trigger: "interval:mouseenter", action: "element-link-by-color:link"},
  ],
  end: [
    {trigger: "interval:mouseleave", action: "element-link-by-color:unlink"},
  ],
});

// 数据源
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
  sales: {
    min: 0,
    max: 40000,
    tickInterval: 10000,
    nice: true,
    tickCount: 6,
    // formatter: (value: any, index: number) => {
    //   console.log(value, index)
    //   switch (index) {
    //     case 0:
    //       value = 0;
    //       break;
    //     case 1:
    //       value = 5000;
    //       break
    //     case 2:
    //       value = 10000;
    //       break;
    //     case 3:
    //       value = 20000;
    //       break
    //     case 4:
    //       value = 30000;
    //       break;
    //     case 5:
    //       value = 40000;
    //       break;
    //   }
    //   return value;
    // }
  },
};

const EchartsDemo2: React.FC = () => {
  return (
    <div style={{display: 'flex', justifyContent: "center", marginTop: 100}}>
      <AntvG2
        padding={[10, 20, 50, 40]}
        autoFit
        width={600}
        height={400}
        data={weekData}
        scale={scale}
      >
        <Tooltip showMarkers={false}/>
        <Interval position="week*sales" color="type" adjust="stack">
          {/*<Axis*/}
          {/*  name="sales"*/}
          {/*  position="right"*/}
          {/*  line={false}*/}
          {/*  tickLine={false}*/}
          {/*  label={{*/}
          {/*    formatter: (val) => {*/}
          {/*      if (val === '1200') {*/}
          {/*        return '';*/}
          {/*      }*/}
          {/*      return val;*/}
          {/*    },*/}
          {/*  }}*/}
          {/*/>*/}
        </Interval>
        <Interaction type="element-highlight"/>
        <Interaction type="element-link"/>
      </AntvG2>
    </div>
  )
}

export default EchartsDemo2
