import { Chart } from "react-google-charts";
import { Loader } from "./Loader";

const data = [
  ["Date", "Sleeping Time", "Wake Up Time"],
  ["01-03-2024", "11:00", "6:00"],
  ["02-03-2024", "11:00", "6:30"],
  ["03-03-2024", "11:00", "7:00"],
  ["04-03-2024", "11:00", "7:30"],
  ["05-03-2024", "11:00", "7:30"],
  ["05-03-2024", "11:00", "7:30"],
  ["05-03-2024", "11:00", "7:30"],
];

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
const ChartView = () => {
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
