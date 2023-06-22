import { Col, Row } from "antd";
import { Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Common from "../../../common";

const DepartmentWiseChart = () => {
  Chart.register(...registerables);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            '#2121EA',
            '#d3d3d3',
            '#6969FF',
            '#2121EA',
            '#4949B7',
            '#6969FF',
        ],
        borderColor: [
            '#2121EA',
            '#d3d3d3',
            '#6969FF',
            '#2121EA',
            '#4949B7',
            '#6969FF',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Common.AntdCard title={"Department wise"} subtitle={"Count of collected sample in comparison with dispatched / completed sample"} bg={"#fff"}>
      <Row>
        <Col span={24}>
        <div style={{ width: '300px', height: '300px', margin: "auto" }}>
          <Pie data={data} options={{ legend: false }} />
        </div>
        </Col>
      </Row>
    </Common.AntdCard>
  );
};
export default DepartmentWiseChart;

