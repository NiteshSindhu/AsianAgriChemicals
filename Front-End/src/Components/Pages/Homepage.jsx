import styles from "../Css/homepage.module.css";
import img1 from "../Pics/img1.jpg";
import img2 from "../Pics/img2.jpg";
import img3 from "../Pics/img3.jpg";
import img4 from "../Pics/img4.webp";
import {Box,Grid} from "@mui/material";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import OneItems from "./OneItems";
export default function Homepage() {
  const [value, setValue] = useState(0);
  const [direction, setDirection] = useState("next");
  const [userInteracted, setUserInteracted] = useState(false);
  const Image = [img1, img2, img3, img4];

  useEffect(() => {
    const timeoutId = setInterval(() => {
      if (!userInteracted) {
        changeImage(1);
      }
    }, 8000);

    return () => {
      clearInterval(timeoutId);
    };
  }, [value, userInteracted]);
  function handleUserInteraction() {
    setUserInteracted(true); 
    setTimeout(() => setUserInteracted(false), 3000); 
  }
  function changeImage(a) {
    if (a === -1) {
      setDirection("prev");
    } else {
      setDirection("next");
    }
    if (value + a > Image.length - 1) setValue(0);
    else if (value + a < 0) setValue(Image.length - 1);
    else setValue((prev) => prev + a);
  }
  return (
    <>
      <div id={styles.homepage}>
        <img
          src={Image[value]}
          alt={`slider-${value}`}
          className={
            direction === "next" ? styles.slideNext : styles.slidePrev
          }
        />
        <AiFillCaretLeft
          className={styles.icons1}
          onClick={() => {
            changeImage(-1);
            handleUserInteraction();
          }}
        />
        <AiFillCaretRight
          className={styles.icons2}
          onClick={() => {
            changeImage(1);
            handleUserInteraction();
          }}
        />
      </div>
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
      </Grid>
    </Box>
    </>
  );
}
