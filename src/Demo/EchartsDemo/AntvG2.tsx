import {IChartProps} from "bizcharts/lib/interface";
import React from "react";
import {Chart} from "bizcharts";

interface Props extends IChartProps {
}

const AntvG2: React.FC<Props> = (props) => {
  return (
    <Chart {...props}/>
  )
}
export default AntvG2;
