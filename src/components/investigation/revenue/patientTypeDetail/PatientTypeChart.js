import { Col, Row } from "antd";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Common from "../../../common";

const PatientTypeChart = () => {
  Chart.register(...registerables);

  const data = {
    labels: ["Red", "Blue", "Yellow", "Purple", "Green", "Orange"],
    drawActiveElementsOnTop: false,
    datasets: [
      {
        label: "# of Vots",

        data: [40, 20, 12, 39, 10, 40],
        pointBackgroundColor: "#F05A28",
        backgroundColor: [
          '#2121EA',
          '#4949B7',
          '#6969FF',
          '#2121EA',
          '#4949B7',
          '#6969FF',
        ],
        order: 1,
        borderWidth: 1
      },
    ],
  };

  return (
    <Common.AntdCard title={"Patient Type"} subtitle={"Count of collected sample in comparison with dispatched / completed sample"} bg={"#fff"} style={{borderRadius:"20px"}}>
      <Row>
        <Col span={24}>
        <div style={{ width: '100%', height: '300px', margin: "auto" }} className="bars">
          <Bar data={data} />
          </div>
        </Col>
      </Row>
    </Common.AntdCard>
  );
};
export default PatientTypeChart;
