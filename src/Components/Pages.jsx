import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Capability from "./Capability";
import Statergy from "./Statergy";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contactus from "./Contactus";
import Industries from "./Industries";

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
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Pages;