import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import BarChartComponent from "./BarChart";
import LineChartComponent from "./LineChart";

export default function ChartComponent() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Server Traffic",
      },
    },
    scales: {
      xAxis: {
        offset: true,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Server 1",
        data: labels.map(() => Math.random()),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Server 2",
        data: labels.map(() => Math.random()),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };

  const height = 150;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Card className="App" sx={{ marginTop: 5 }}>
            <LineChartComponent
              options={options}
              data={data}
              height={height}
            ></LineChartComponent>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card className="App" sx={{ marginTop: 5 }}>
            <BarChartComponent
              options={options}
              data={data}
              height={height}
            ></BarChartComponent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
