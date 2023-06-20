import { Col, Row } from "antd";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Common from "../../../common";

const MedicalHistory = () => {
  Chart.register(...registerables);

  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
    drawActiveElementsOnTop: false,
    datasets: [
        {
            label: 'OPD',
            data: [50, 19, 40, 5, 2, 50, 70],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Pharmacy',
            data: [7, 11, 5, 8, 3, 9, 50],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Pathology',
            data: [7, 30, 5, 12, 3, 11, 40],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Radiology',
            data: [71, 11, 5, 8, 3, 19, 30],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Blood Bank',
            data: [17, 20, 5, 8, 3, 9, 20],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Ambulance',
            data: [20, 18, 5, 8, 3, 9,50],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
    ],
  };

  return (
    <Common.AntdCard title={"Mediacl History"} subtitle={"4 % more in 2023"}>
      <Row>
        <Col span={24}>
          <Line data={data} />
        </Col>
      </Row>
    </Common.AntdCard>
  );
};
export default MedicalHistory;

