import React, { useRef, useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import {
  CardActions,
  CardContent,
  Card,
  Box,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Grid,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalState } from '../../index';
import { AdminState } from "../../Admin";

const Add = () => {
  const axios = useContext(AdminState).axiosJWT;
  const url = useContext(GlobalState).url;
  const hiddenFile = useRef(null);
  const [fileImage, setFileImage] = useState(
    require("../../assets/upload.png")
  );
  const [value, setValue] = useState({});
  const [input, setInput] = useState([]);
  const form = useRef();
  const { type, table, id } = useParams();
  const redirect = useNavigate();
  const cancelRow = (e) => {
    e.preventDefault();
    redirect("/admin");
  };

  const getField = async (table) => {
    try {
      await axios
        .get(`${table}/column`)
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
    if (id && type === "edit") {
      const getId = async () => {
        try {
          await axios
            .get(`${table}/${id}`)
            .then((response) => {
              const data = response.data[0];
              const displayImg = Object.keys(data);
              displayImg.find((val) => {
                if (val.includes("img"))
                  setFileImage(`${url}images/${data[val]}`);
              });
              setValue(data);
            });
        } catch (error) {
          Swal.fire("Error", error.message, "error");
        }
      };
      getId();
    }
  }, []);

  const handleClick = (e) => {
    hiddenFile.current.click();
  };

  const handleChange = (e) => {
    const image = e.target.files[0];
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
      if (id && type === "edit") {
        await axios
          .patch(`${table}/${id}`, formData, config)
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
      } else if (type === "add") {
        await axios
          .post(`${table}`, formData, config)
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
      }
      redirect("/admin");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
      return false;
    }
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
              <Grid
                item
                xs={12}
                md={el.field.includes("img") ? 12 : 4}
                key={(index + 1).toString()}
              >
                {!el.type.value && !el.field.includes("img") ? (
                  <TextField
                    id="outlined-basic"
                    style={{ minWidth: "100%" }}
                    label={el.headerName}
                    name={el.field}
                    onChange={(e) =>
                      setValue({ ...value, [el.field]: e.target.value })
                    }
                    value={value[el.field] ? value[el.field] : ""}
                    variant="outlined"
                    type={el.type.name.includes("INT") ? "number" : "text"}
                  />
                ) : el.type.value ? (
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      {el.headerName}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={
                        value[el.field] ? value[el.field] : el.type.value[0]
                      }
                      label={el.headerName}
                      onChange={(e) => {
                        setValue({ ...value, [el.field]: e.target.value });
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
                ) : el.field.includes("img") ? (
                  <>
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
                  </>
                ) : (
                  ""
                )}
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
