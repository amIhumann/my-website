import React, { useState, useEffect } from "react";
import axios from "axios";
import Add from "./components/admin/add";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { getTableRowUtilityClass } from "@mui/material";
import Swal from "sweetalert2";

const Admin = () => {
  const [id, setId] = useState();
  const [table, setTable] = useState("experiences");
  const redirect = useNavigate();
  const tableSelect = (e) => {
    setTable(e.target.value);
  };
  const deleteRow = () => {
    console.log(id);
  };
  const addRow = (e) => {
    e.preventDefault();
    redirect(`/add/${table}`);
  };
  const [column, setColumn] = useState([]);
  const [row, setRow] = useState([]);
  const getColumn = async (table) => {
    try {
      const response = await axios.get(`http://localhost:5000/${table}/column`);
      const data = response.data;
      data.push({
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <Button
              variant="outlined"
              color="success"
              onClick={() => console.log(params.row.id)}
            >
              Edit
            </Button>
          );
        },
      });
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
            onClick={addRow}
            style={{ marginLeft: "auto", marginRight: "10px" }}
          >
            add
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
