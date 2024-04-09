import { Link, NavLink } from "react-router-dom";
import styles from "../Css/navbar.module.css";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setShowMenu(false);
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div id={styles.navbar}>
        <div id={styles.logo}>
          <Link to="/">
            <img src="./LOGO.svg" alt="LOGO" />
          </Link>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        {showMenu && (
          <div className={styles.hamactive}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.defaultStyle
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? styles.active : styles.defaultStyle
              }
              onClick={toggleMenu}
            >
              Products
            </NavLink>
            <NavLink
              to="contactUs"
              className={({ isActive }) =>
                isActive ? styles.active : styles.defaultStyle
              }
              onClick={toggleMenu}
            >
              contact us
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : styles.defaultStyle
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </div>
        )}
        {showNavbar && (
          <div className={styles.links}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.defaultStyle
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? styles.active : styles.defaultStyle
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                isActive ? styles.active : styles.defaultStyle
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : styles.defaultStyle
              }
            >
              About
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}
