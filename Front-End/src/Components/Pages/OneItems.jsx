import { Box, Grid } from "@mui/material";
import styles from "../Css/oneitems.module.css";
import rajaji from "../Pics/rajaji.jpeg";
export default function OneItems() {
  return (
    <Grid item xs={1}>
      <Box className={styles.product}>
        <img src={rajaji} alt="RajaJi" />
        <p> Rajaji</p>
        <p>Mycorrhizal Bio-Fertilzier</p>
      </Box>
    </Grid>
  );
}
