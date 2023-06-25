import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Common from '../../../common';

const DepartmentWiseChart = () => {
  const series = [185, 15, 40, 80];
  
  const options = {
    chart: {
      width: 380,
      type: 'polarArea'
    },
    labels: [],
    fill: {
      opacity: 1,
      colors: [ "#F2F2F2",'#2121EA', '#4949B7','#6969FF']
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#F2F2F2",'#2121EA', '#4949B7', '#6969FF']
    },
    yaxis: {
      show: false
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        },
      }
    },
    theme: {
      monochrome: {
        enabled: true
      }
    }
  };

  return (
    <Common.AntdCard title="Patient Type" subtitle="Count of collected sample in comparison with dispatched / completed sample" bg="#fff" style={{ borderRadius: "20px" }}>
    <div id="chart">
      <ReactApexChart options={options} series={series} type="pie" height={310} />
      
    </div>
    </Common.AntdCard>
  );
};

export default DepartmentWiseChart;
// export default DepartmentWiseChart;


