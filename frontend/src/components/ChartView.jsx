import { Chart } from "react-google-charts";
import { Loader } from "./Loader";
import { formateData } from "../authentication/sleepStates";

const options = {
  title: "Slept Record",
  curveType: "function",
  legend: { position: "bottom" },
  width: 550,
  height: 450,
  colors: ["#c20d55", "#455ff7"],
  hAxis: { title: "Time Bar" },
  vAxis: { title: "Date Bar" },
  animation: {
    startup: true,
    duration: 1000,
    easing: "out",
  },
};
const ChartView = ({ sleepState }) => {
  const data = formateData(sleepState);
  return (
    <>
      <Chart
        chartType="Bar"
        data={data}
        options={options}
        loader={<Loader />}
      />
    </>
  );
};

export { ChartView };
