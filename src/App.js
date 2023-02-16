import React from 'react';
import {Navbar, Footer, Contact} from "./components/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Portfolio from "./components/pages/Portfolio";
import Resource from "./components/pages/Resource";
import Community from "./components/pages/Community";
import './App.css';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Contact/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
