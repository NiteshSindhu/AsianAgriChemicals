import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import AboutUs from "../Pages/Aboutus";
import Product from "../Pages/Product";
import ContactUs from "../Pages/ContactUs";
// import Profile from "../Pages/Profile";

export default function AllRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
}
