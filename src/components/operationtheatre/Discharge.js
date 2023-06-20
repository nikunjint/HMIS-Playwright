import { Col, Row } from "antd";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Common from "../common";

const Discharge = () => {
  Chart.register(...registerables);

  const data = {
    labels: ["Red", "Blue", "Yellow", "Purple", "Green", "Orange"],
    drawActiveElementsOnTop: false,
    datasets: [
      {
        label: "# of Vots",

        data: [40, 20, 12, 39, 10, 40],
        borderColor: "#939393",

        pointBackgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        order: 1,
        borderWidth: 1
      },
    ],
  };

  return (
    <Common.AntdCard title={"DISCHARGE"} subtitle={"4 % more in 2023"} bg={"#00000008"}>
      <Row>
        <Col span={24}>
          <Line data={data} />
        </Col>
      </Row>
    </Common.AntdCard>
  );
};
export default Discharge;

