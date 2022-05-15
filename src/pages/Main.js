import { Card, Container, Paper } from "@mui/material";
import ChartComponent from "../components/Charts";
import ButtonAppBar from "../components/Nav";
import DataTable from "../components/Table";

function Main() {
  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <Container>
        <Paper elevation={0}>
          <h2> Lamda Dashboard</h2>
        </Paper>

        <ChartComponent></ChartComponent>

        <Card className="App" sx={{ marginTop: 5 }}>
          <DataTable></DataTable>
        </Card>
      </Container>
    </>
  );
}

export default Main;
