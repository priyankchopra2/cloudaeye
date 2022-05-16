import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function DataTable() {
  const [columns, setColumns] = useState();

  const [rows, setRows] = useState();

  useEffect(() => {
    fetch("data/mock.json")
      .then((res) => res.json())
      .then((data) => {
        setColumns(
          Object.keys(data[0]).map((colName) => {
            return {
              field: colName,
              headerName: colName.toUpperCase(),
              width: 150,
            };
          })
        );
        setRows(JSON.parse(JSON.stringify(data)));
      });
  }, []);

  console.log(rows);

  useEffect(() => {}, [rows, columns]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      {columns ? <DataGrid rows={rows} columns={columns} /> : "Data Not found."}
    </div>
  );
}
