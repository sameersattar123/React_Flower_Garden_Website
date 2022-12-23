import react from "react";
import "./App.css"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/includes/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Footer from "./components/includes/Footer";
import Services from "./components/pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contactus" element={<Contact/>} />
      <Route path="/aboutus" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
