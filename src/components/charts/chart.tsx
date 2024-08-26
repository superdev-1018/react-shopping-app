import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

// Example dataset with month names
const dataset = [
  { month: 'Jan', london: 1034, paris: 1200, newYork: 1225, seoul: 1332 },
  { month: 'Feb', london: 1358, paris: 1135, newYork: 1690, seoul: 1440 },
  { month: 'Mar', london: 1320, paris: 1542, newYork: 1240, seoul: 1745 },
  { month: 'Apr', london: 1432, paris: 1920, newYork: 1248, seoul: 1155 },
  { month: 'May', london: 965, paris: 458, newYork: 1215, seoul: 1265 },
  { month: 'Jun', london: 1170, paris: 1862, newYork: 1660, seoul: 1070 },
];

const valueFormatter = (value: number | null) => `${value}mm`;

export function Chart() {
  const [chartWidth, setChartWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const chartSetting = {
    yAxis: [
      {
        ticks: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000],
        min: 0,
        max: 2000,
      },
    ],
    height: 400,
    sx: {
      background: 'none', // No background for the chart area itself
      '& .MuiBarChart-plotArea': { // Target the plot area specifically
        background: `linear-gradient(0deg, transparent 24%, #ddd 30%, #ddd 26%, transparent 10%, transparent),
                     linear-gradient(90deg, transparent 24%, #ddd 30%, #ddd 26%, transparent 27%, transparent)`,
        backgroundSize: '20px 20px',
      },
      '& .MuiBars': {
        borderRadius: '15px',
      },
      [`.${axisClasses.bottom} .${axisClasses.label}`]: {
        transform: 'rotate(45deg)', 
        transformOrigin: 'left',
        whiteSpace: 'nowrap',
      },
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
      
    },
  };

  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        {
          dataKey: 'london',
          color: '#4CAF50',
        },
        {
          dataKey: 'paris',
          color: '#FF9800',
        },
        {
          dataKey: 'newYork',
          color: '#2196F3',
        },
        {
          dataKey: 'seoul',
          color: '#F44336',
        },
      ]}
      {...chartSetting}
    />
  );
}
