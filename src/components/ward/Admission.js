import { Col, Row } from "antd";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Common from "../common";

const Admissino = () => {
  Chart.register(...registerables);

  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
    drawActiveElementsOnTop: false,
    datasets: [
        {
            label: '# of Vots',
            data: [50, 19, 40, 5, 2, 50, 70],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
    ],
  };

  return (
    <Common.AntdCard title={"ADMISSION"} subtitle={"4 % more in 2023"} bg={"#00000008"}>
      <Row>
        <Col span={24}>
          <Line data={data} />
        </Col>
      </Row>
    </Common.AntdCard>
  );
};
export default Admissino;

