import React, { Fragment, useState } from "react";
import styles from "./index.module.css";
import mobil from "./car.js";
import {
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const CarsShowRoom = () => {
  const [data, setData] = useState(mobil);

  const handleChange = (e) => {
    const cari = e.target.value;

    let dataFilter = [...mobil];
    dataFilter = dataFilter.filter(
      (fill) => fill.nama.toLowerCase().indexOf(cari.toLowerCase()) !== -1
    );
    setData(dataFilter);
  };
  return (
    <Fragment>
      <CssBaseline />
      <div className={styles.header}>
        <div className={styles.searchCont}>
          <h2>Cari Mobil Impian Anda</h2>
          <input placeholder="Search" onChange={handleChange} />
        </div>
        <div className={styles.nama}>
          <h2>Wal Husna Faizul</h2>
        </div>
      </div>
      <Grid container spacing={1}>
        <Grid xs={4}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Merk</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={4}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Type</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={4}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Warna</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div className={styles.cont}>
        <Grid container spacing={1}>
          {data.length < 1 ? (
            <div className={styles.alert}>
              <p>Data tidak ditemukan</p>
            </div>
          ) : (
            data.map((d) => (
              <Grid xs={4}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        mx: "2px",
                        transform: "scale(0.8)",
                      }}
                    >
                      <img src={`./images/${d.path}`} alt="images" />
                      <h3>{d.nama}</h3>
                      <hr />
                      <p>
                        <b>Merek : </b>
                        {d.merek}
                      </p>
                      <p>
                        <b>Warna : </b> {d.warna}
                      </p>
                      <p>
                        <b>Type : </b>
                        {d.tipe}
                      </p>
                      <Button
                        variant="contained"
                        color="info"
                        onClick={() => alert(`Anda mengklik mobil ${d.nama}`)}
                      >
                        LIHAT DETAIL
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </div>
    </Fragment>
  );
};

export default CarsShowRoom;
