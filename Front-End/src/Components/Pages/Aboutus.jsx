import { Box } from "@mui/material";
import { FaBuilding, FaDollarSign, FaUsers } from "react-icons/fa";
import styles from "../Css/about.module.css";
import { PiCertificateFill } from "react-icons/pi";
export default function AboutUs() {
  return (
    <>
      <Box id={styles.about}>
        <Box className={styles.aboutweb}>
          <h1>WELCOME TO OUR WEBSITE</h1>
          <p>
            Asian Agri Chemicals Pvt. Ltd. is a credible manufacturer and
            supplier of agriculture products since inception. The company
            engages in manufacturing of Organic Manure, Mineral Products,
            Sulphur Fertilizer, Water Soluble Fertilizer, Micronutrient Mixture
            Fertilizer, Micronutrient Fertilizer, Bio Products, Bio Herbal Pest
            Repellents, Wetting Agents etc. under the brand name "Jai Pradhan".
          </p>
          <p>
            Asian Agri Chemicals Pvt. Ltd. was founded in 2004 with the aim to
            deliver high quality of agricultural products at the most
            competitive prices to the Indian farmers. We ensure that only
            eco-friendly ingredients are used in formulation of all the products
            we offer. Moreover, we have expert quality controllers who keep an
            eye on the formation processes to the final products and ensure that
            the products are tested on various parameters.
          </p>
          <p>
            Our Research and Development (R&D) team engages in conducting
            various researches/experiments to discover better range of products
            for the Indian farmers. They also engages in various market research
            activities to track the farmer needs and market trends.
          </p>
        </Box>
      </Box>
      <Box id={styles.glimps}>
        <Box className={styles.glimps}>
          <h1>GLIMPSE OF OUR COMPANY</h1>
        </Box>
        <Box className={styles.container}>
          <Box>
            <FaUsers className={styles.icons} />
            <p>Number of Employees</p>
            <p>10-15</p>
          </Box>
          <Box>
            <FaDollarSign className={styles.icons} />
            <p>Annual Turnover</p>
            <p>Rs. 4 to 5 Cr.</p>
          </Box>
          <Box>
            <PiCertificateFill className={styles.icons} />
            <p>GST No.</p>
            <p>06AAXCA8387L1ZM</p>
          </Box>
          <Box>
            <FaBuilding className={styles.icons} />
            <p>Year of Establishment</p>
            <p>2022</p>
          </Box>
        </Box>
      </Box>
    </>
  );
}
