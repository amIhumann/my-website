import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import {
  CardActions,
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";

const Admin = () => {
  const [id, setId] = useState();
  const [table, setTable] = useState("experiences");
  const [column, setColumn] = useState([]);
  const [row, setRow] = useState([]);
  const redirect = useNavigate();
  const tableSelect = (e) => {
    setTable(e.target.value);
  };
  const deleteRow = async () => {
    try {
      await axios
        .delete(
          `http://localhost:5000/${table}/${Buffer.from(`${id}`)
            .toString("base64")
            .replace(/=/g, "")}`
        )
        .then((response) =>
          Swal.fire(
            response.status === 200 ? "Success" : "Alert",
            response.data.message,
            response.status === 200 ? "success" : "warning"
          )
        )
        .catch((error) =>
          Swal.fire(
            error.response.statusText,
            error.response.data.message,
            "error"
          )
        );
      getRow(table);
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };
  const getColumn = async (table) => {
    try {
      const response = await axios.get(`http://localhost:5000/${table}/column`);
      const data = response.data
        .filter((data) => !data.field.includes("img"))
        .map((val, i, arr) => {
          val.width = 800 / arr.length;
          delete val.type;
          return val;
        });
      data.push({
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <Button
              variant="outlined"
              color="success"
              onClick={() => redirect(`/edit/${table}/${params.row.id}`)}
            >
              Edit
            </Button>
          );
        },
      });
      data[0].renderCell = (params) =>
        params.api.getRowIndex(params.row.id) + 1;
      setColumn(data);
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };
  const getRow = async (table) => {
    try {
      const response = await axios.get(`http://localhost:5000/${table}`);
      setRow(response.data);
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };
  useEffect(() => {
    getColumn(table);
    getRow(table);
  }, [table]);
  return (
    <>
      <Card sx={{ width: "80%" }} style={{ margin: "auto", marginTop: "7vh" }}>
        <CardActions>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Table</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={table}
              label="Table"
              onChange={tableSelect}
            >
              <MenuItem value="experienced">Experienced</MenuItem>
              <MenuItem value="experiences">Experiences</MenuItem>
              <MenuItem value="gallery">Gallery</MenuItem>
              <MenuItem value="portfolio">Portfolio</MenuItem>
              <MenuItem value="cv">CV</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={deleteRow}
            color="error"
          >
            HAPUS
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => redirect(`/add/${table}`)}
            style={{ marginLeft: "auto", marginRight: "10px" }}
          >
            ADD
          </Button>
        </CardActions>
        <CardContent>
          <div style={{ height: 370, width: "100%" }}>
            <DataGrid
              rows={row}
              columns={column}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              onSelectionModelChange={(itm) => setId(itm)}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Admin;
