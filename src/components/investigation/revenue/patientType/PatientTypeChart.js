
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Common from '../../../common';

const PatientTypeChart = () => {
  const series = [
    {
      name: 'IPD',
      data: [44, 55, 57, 56, 61, 58, 63],
      fill: '#2121EA' // Fill color for IPD

    },
    {
      name: 'OPD',
      data: [76, 85, 101, 98, 87, 105, 91],
      fill: '#2121EA' // Fill color for IPD

    },
    {
      name: 'ER',
      data: [35, 41, 36, 26, 45, 48, 52],
      fill: '#2121EA' // Fill color for IPD
    }
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 300
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
        endingShape: 'rounded',
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 4,
      colors: ['#2121EA', '#4949B7', '#6969FF']
    },
    xaxis: {
      categories: ['00:00 - 03:25', '00:00 - 03:25', '00:00 - 03:25', '00:00 - 03:25', '00:00 - 03:25', '00:00 - 03:25', '00:00 - 03:25']
    },
    fill: {
      opacity: 1,
      colors: ['#2121EA', '#4949B7', '#6969FF']
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        }
      }
    },
    legend: {
      // labels: {
        colors: series.map(item => item.fill) // Set legend label colors dynamically based on fill colors
      // }
    }
  };

  return (
    <Common.AntdCard title="Patient Type" subtitle="Count of collected sample in comparison with dispatched / completed sample" bg="#fff" style={{ borderRadius: "20px" }}>
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={300} />
    </div>
    </Common.AntdCard>
  );
};

export default PatientTypeChart;

