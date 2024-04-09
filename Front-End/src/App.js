// import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Pages/Footer";
import Navbar from "./Components/Pages/Navbar";
import AllRoute from "./Components/Routers/AllRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
