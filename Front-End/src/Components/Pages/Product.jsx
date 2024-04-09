import OneItems from "./OneItems";
import { Grid, Box } from "@mui/material";
import styles from "../Css/products.module.css";

export default function Product() {
  return (
    <Box className={styles.main}>
      <Box></Box>
      <Grid
        className={styles.container}
        container
        spacing={{ xs: 5, md: 5 }}
        columns={{ xs: 2, sm: 3, md: 4 }}
        //   rowGap={10}
      >
        <OneItems />
        <OneItems />
        <OneItems />
        <OneItems />
        <OneItems />
        <OneItems />
        <OneItems />
        <OneItems />
        <OneItems />
        <OneItems />
        <OneItems />
        <OneItems />
      </Grid>
    </Box>
  );
}
