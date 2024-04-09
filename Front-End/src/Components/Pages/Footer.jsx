import React from "react";
import styles from "../Css/footer.module.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
import { FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="./LOGO.svg" alt="LOGO" />
          </Link>
        </div>
        <div className={styles.links}>
          {/* Footer links */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contactUs">Contact</Link>
        </div>
        <div className={styles.social}>
          <FaFacebookMessenger className={styles.icons} />
          <FaSquareXTwitter className={styles.icons} />
          <FaInstagram className={styles.icons} />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2024 Asian Agri Chemicals All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
