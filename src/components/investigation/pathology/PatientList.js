import React from "react";
import Common from "../../common";
import SearchPatientList from "./SearchPatientList";
import PatientListTop from "./PatientListTop";

const PatientList = () => {
  const [filterData, setFilterData] = React.useState([]);

  const OnFilterData = React.useCallback((item) => {
    setFilterData(item);
  }, []);

  React.useEffect(() => {
    setFilterData(data);
    // eslint-disable-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      width: 50,
    },
    {
      title: "Patient Id",
      dataIndex: "PATIENTID",
      width: 100,
    },
    {
      title: "Patient Name",
      dataIndex: "PATIENTNAME",
      width: 170,
    },
    {
      title: "Age/Gender",
      dataIndex: "AGE",
      width: 120,
    },
    { title: "Testname", dataIndex: "TESTNAME", width: 150 },
    { title: "Bill No", dataIndex: "BILLNO", width: 200 },
    { title: "Sample No", dataIndex: "SAMPLENO", width: 150 },
    { title: "Lab No", dataIndex: "LABNO", width: 150 },
    { title: "Test Date", dataIndex: "TESTDATE", width: 150 },
    { title: "Type", dataIndex: "TYPE", width: 100 },
    {
      title: "Status",
      width: 150,
      render: (record) => <div>Sample Collected</div>,
    },

    {
      title: "Referred By",
      dataIndex: "REFERED",
    },
  ];

  return (
    <div className="mt-4 ">
      <div>
        <PatientListTop />
      </div>
      <div className="mt-5">
        <Common.Cards>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-6 ">
              <div>
                <SearchPatientList data={data} onFilterData={OnFilterData} />
              </div>
              <div>
                <Common.Selects
                  array={[{ id: 1, name: "Hematology" }]}
                  placeholder="Patient ID"
                  value={"id"}
                  description="name"
                  name="patientid"
                  className="custom-selectborder relative mb-0 w-[200px]"
                  hidelabel
                />
              </div>
            </div>
            <div className="item-center flex gap-4">
              <div className=" flex items-center font-Poppins text-sm font-medium text-[#4C4C4C]">
                Show
              </div>
              <div>
                <Common.Selects
                  className="mb-0"
                  array={[
                    { id: 1, name: "15" },
                    { id: 2, name: "30" },
                    { id: 3, name: "45" },
                    { id: 4, name: "60" },
                  ]}
                  placeholder="15"
                  value={"id"}
                  description="name"
                  name="patientid"
                  hidelabel
                />
              </div>
            </div>
          </div>
          <div className="mt-1 patient_list pathologypatientlist">
            <Common.Tables
              data={filterData}
              columns={columns}
              X={"1500px"}
              spinning={false}
            />
          </div>
        </Common.Cards>
      </div>
    </div>
  );
};

export default PatientList;

const data = [
  {
    sn: 1,
    PATIENTID: "80000032",
    PATIENTNAME: "Arpan Shrestha",
    AGE: "22",
    TESTNAME: "CBC + PBF",
    BILLNO: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    LABNO: "02140057",
    TESTDATE: "14 Jestha 2080",
    TYPE: "OPD",
    REFERED: "Doctor Sanjog",
  },
  {
    sn: 2,
    PATIENTID: "80000032",
    PATIENTNAME: "Arpan Shrestha",
    AGE: "22",
    TESTNAME: "CBC + PBF",
    BILLNO: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    LABNO: "02140057",
    TESTDATE: "14 Jestha 2080",
    TYPE: "OPD",
    REFERED: "Doctor Sanjog",
  },
  {
    sn: 3,
    PATIENTID: "80000032",
    PATIENTNAME: "Arpan Shrestha",
    AGE: "22",
    TESTNAME: "CBC + PBF",
    BILLNO: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    LABNO: "02140057",
    TESTDATE: "14 Jestha 2080",
    TYPE: "OPD",
    REFERED: "Doctor Sanjog",
  },
  {
    sn: 4,
    PATIENTID: "80000032",
    PATIENTNAME: "Arpan Shrestha",
    AGE: "22",
    TESTNAME: "CBC + PBF",
    BILLNO: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    LABNO: "02140057",
    TESTDATE: "14 Jestha 2080",
    TYPE: "OPD",
    REFERED: "Doctor Sanjog",
  },
  {
    sn: 5,
    PATIENTID: "80000032",
    PATIENTNAME: "Arpan Shrestha",
    AGE: "22",
    TESTNAME: "CBC + PBF",
    BILLNO: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    LABNO: "02140057",
    TESTDATE: "14 Jestha 2080",
    TYPE: "OPD",
    REFERED: "Doctor Sanjog",
  },
  {
    sn: 6,
    PATIENTID: "80000032",
    PATIENTNAME: "Arpan Shrestha",
    AGE: "22",
    TESTNAME: "CBC + PBF",
    BILLNO: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    LABNO: "02140057",
    TESTDATE: "14 Jestha 2080",
    TYPE: "OPD",
    REFERED: "Doctor Sanjog",
  },
  {
    sn: 7,
    PATIENTID: "80000032",
    PATIENTNAME: "Arpan Shrestha",
    AGE: "22",
    TESTNAME: "CBC + PBF",
    BILLNO: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    LABNO: "02140057",
    TESTDATE: "14 Jestha 2080",
    TYPE: "OPD",
    REFERED: "Doctor Sanjog",
  },
  {
    sn: 8,
    PATIENTID: "80000032",
    PATIENTNAME: "Arpan Shrestha",
    AGE: "22",
    TESTNAME: "CBC + PBF",
    BILLNO: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    LABNO: "02140057",
    TESTDATE: "14 Jestha 2080",
    TYPE: "OPD",
    REFERED: "Doctor Sanjog",
  },
  {
    sn: 9,
    PATIENTID: "80000032",
    PATIENTNAME: "Arpan Shrestha",
    AGE: "22",
    TESTNAME: "CBC + PBF",
    BILLNO: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    LABNO: "02140057",
    TESTDATE: "14 Jestha 2080",
    TYPE: "OPD",
    REFERED: "Doctor Sanjog",
  },
  {
    sn: 10,
    PATIENTID: "80000032",
    PATIENTNAME: "Arpan Shrestha",
    AGE: "22",
    TESTNAME: "CBC + PBF",
    BILLNO: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    LABNO: "02140057",
    TESTDATE: "14 Jestha 2080",
    TYPE: "OPD",
    REFERED: "Doctor Sanjog",
  },
  {
    sn: 11,
    PATIENTID: "80000032",
    PATIENTNAME: "Arpan Shrestha",
    AGE: "22",
    TESTNAME: "CBC + PBF",
    BILLNO: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    LABNO: "02140057",
    TESTDATE: "14 Jestha 2080",
    TYPE: "OPD",
    REFERED: "Doctor Sanjog",
  },
];
