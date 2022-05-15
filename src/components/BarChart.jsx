import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function BarChartComponent({ options, data, height }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {}, [data]);

  return <Bar options={options} data={data} height={height} />;
}
