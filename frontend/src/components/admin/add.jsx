import React, { useRef, useState, useEffect, Fragment, useMemo } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FilledInput from "@mui/material/FilledInput";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const Add = () => {
  const hiddenFile = useRef(null);
  const [fileImage, setFileImage] = useState(
    require("../../assets/upload.png")
  );
  const [select, setSelect] = useState({});
  const [file, setFile] = useState("");
  const [input, setInput] = useState([]);
  const form = useRef();
  const { table } = useParams();
  const [status, setStatus] = useState("");
  const [level, setLevel] = useState("intermediate");
  const redirect = useNavigate();
  const cancelRow = (e) => {
    e.preventDefault();
    redirect("/admin");
  };
  const getField = async (table) => {
    try {
      await axios
        .get(`http://localhost:5000/${table}/column`)
        .then((response) => {
          const filter = response.data;
          filter.shift();
          setInput(filter);
        });
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };
  useEffect(() => {
    getField(table);
  }, []);
  const elementForm = (field) => {
    return false;
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleClick = (e) => {
    hiddenFile.current.click();
  };
  const handleLevel = (e) => {
    setLevel(e.target.value);
  };
  const handleChange = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setFileImage(URL.createObjectURL(image));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let progressTimer, percent, response, timerInterval;
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: function (e) {
          percent = Math.round((e.loaded / e.total) * 100);
          progressTimer = e.timeStamp / 100;
        },
      };
      Swal.fire({
        title: "Loading...",
        html: "<b></b>",
        timer: progressTimer,
        didOpen: async () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = percent + "%";
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
      let formData = new FormData(form.current);
      await axios
        .post("http://localhost:5000/gallery", formData, config)
        .then((res) =>
          Swal.fire(
            res.statusText,
            res.data.message,
            res.status === 200 ? "success" : "warning"
          )
        )
        .catch((error) =>
          Swal.fire(
            error.response.statusText,
            error.response.data.message,
            "error"
          )
        );
    } catch (error) {
      Swal.fire("Error", error.message, "error");
      return false;
    }
  };
  var obj = useMemo({});
  useEffect(() => {
    console.log(select);
  }, [select]);
  const content = (el, index) => {
    let result;
    if (!el.type.value) {
      result = (
        <TextField
          id="outlined-basic"
          style={{ minWidth: "100%" }}
          label={el.headerName}
          name={el.field}
          variant="outlined"
        />
      );
    } else if (el.type.value) {
      result = (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{el.headerName}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select[el.field] ? select[el.field] : el.type.value[0]}
            label={el.headerName}
            onChange={(e) => {
              obj.current[el.field] = e.target.value;
              setSelect(obj);
            }}
            name={el.field}
          >
            {el.type.value.map((value, index) => (
              <MenuItem value={value} key={index}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    } else if (el.field.includes("img")) {
      result = (
        <Grid item xs={12} md={12}>
          <input
            id="file"
            name="file"
            ref={hiddenFile}
            type="file"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <Box
            textAlign="center"
            onClick={handleClick}
            sx={{ border: "1px dashed grey" }}
          >
            <img
              src={fileImage}
              style={{
                margin: "auto",
                maxWidth: "50%",
                maxHeight: "100%",
              }}
              alt="me"
            />
          </Box>
        </Grid>
      );
    }
    return result;
  };
  return (
    <Card sx={{ width: "80%" }} style={{ margin: "auto", marginTop: "7vh" }}>
      <CardContent>
        <Box
          component="form"
          ref={form}
          sx={{
            width: "100%",
          }}
          id="form"
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>
            {input.map((el, index) => (
              <Grid item xs={12} md={4} key={(index + 1).toString()}>
                {content(el, index)}
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
      <CardActions sx={{ height: 70 }}>
        <Button
          variant="contained"
          color="error"
          style={{ marginLeft: "auto", marginRight: "10px" }}
          onClick={cancelRow}
        >
          cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{ marginRight: "10px" }}
        >
          save
        </Button>
      </CardActions>
    </Card>
  );
};

export default Add;
