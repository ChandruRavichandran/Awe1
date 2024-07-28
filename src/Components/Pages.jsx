import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Capability from "./Capability";
import Statergy from "./Statergy";
import Navbar from "./Navbar";
import Contactus from "./Contactus";
import Industries from "./Industries";
import Footer from "../Components/Footer/Footer"
import Fo2 from "./Footer/Fo2";
import Fo3 from "./Footer/Fo3";
import Fo4 from "./Footer/Fo4";
import Fo5 from "./Footer/Fo5";
import Fo6 from "./Footer/Fo6";

function Pages() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
          <Route path="/capabilities" element={<Capability />}></Route>
          <Route path="/strategy" element={<Statergy />}></Route>
          <Route path="/contact" element={<Contactus/>}></Route>
          <Route path="/indust" element={<Industries/>}></Route>
          <Route path="/footer1" element={<Footer/>}></Route>
          <Route path="/f2" element={<Fo2/>}></Route>
          <Route path="/f3" element={<Fo3/>}></Route>
          <Route path="/f5" element={<Fo5/>}></Route>
          <Route path="/f4" element={<Fo4/>}></Route>
          <Route path="/f6" element={<Fo6/>}></Route>


        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default Pages;
