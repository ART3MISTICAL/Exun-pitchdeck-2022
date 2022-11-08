//import logo from './logo.svg';
import "./App.css";
import Navbar from "./ components/Navbar";
import OurGame from "./ components/ourGame";
// import Marketplace from "./ components/Marketplace";
import Games from "./ components/Games";
import Contact from "./ components/Contact";
import { Route, Routes } from "react-router-dom";
import Main from "./ components/Main";
import Pitchdeck from "./ components/Pitchdeck";
import React from "react";
// import bgImg from "./ components/images/bg_img.png";

function App() {
  return (
    <>
      <div className="allButFooter">
        <Navbar />
        {/* <Games /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ourGame" element={<OurGame />} />
          <Route path="/Discover_games" element={<Games />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/About" element={<Main />} /> */}
          <Route path="/Pitchdeck" element={<Pitchdeck />} />
        </Routes>
      </div>
      <footer>
        <p>Copyright &copy; 2022 All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
