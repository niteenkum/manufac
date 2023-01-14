import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import { wineData } from '../utils/data';

const ScatterChart = () => {
    const [data, setData] = useState<number[][]>([]);
  
    useEffect(() => {
     /* Destructuring the object and then mapping it to an array of arrays to create and scatter chart. */
      const extractedData = wineData.map(({ "Color intensity": x, Hue: y }) => [x, y]);
      setData(extractedData);
    }, []);
  
    /* Creating the chart. */
    const option = {
      xAxis: {
        name: 'Color Intensity',
        type: 'value',
      },
      yAxis: {
        name: 'Hue',
        type: 'value',
      },
      series: [{
        type: 'scatter',
        data,
        symbolSize: 8,
      }],
    };
  
    return (
      <ReactEcharts option={option} />
    );
  };
  
  export default ScatterChart;