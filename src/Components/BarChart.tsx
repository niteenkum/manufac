import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import { wineData } from '../utils/data';
import { IAlcohol } from '../utils/type';

const BarChart = () => {
  const [data, setData] = useState<IAlcohol[]>([]);

  useEffect(() => {
   /* Extracting the unique values from the wineData array. */
    const alcoholCategories = Array.from(new Set(wineData.map(w => w.Alcohol)));
   /* Extracting and creating new array for rendering of bar chart on basis of malic acid average. */
    const extractedData = alcoholCategories.map(alcohol => {
      const wines = wineData.filter(w => w.Alcohol === alcohol);
      const averageMalicAcid = wines.reduce((acc, curr) => acc + curr["Malic Acid"], 0) / wines.length;
      return { alcohol, averageMalicAcid };
    });
    setData(extractedData);
  }, []);

/* Creating the option object for the echarts. */
  const option = {
    xAxis: {
      name: 'Alcohol',
      type: 'category',
      data: data.map((d: any) => d.alcohol),
    },
    yAxis: {
      name: 'Average Malic Acid',
      type: 'value',
    },
    series: [{
      type: 'bar',
      data: data.map((d: any) => d.averageMalicAcid),
    }],
  };

  return (
    <ReactEcharts option={option} />
  );
};

export default BarChart;
