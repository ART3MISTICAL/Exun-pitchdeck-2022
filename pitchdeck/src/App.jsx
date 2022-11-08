//import logo from './logo.svg';
import "./App.css";
import Navbar from "./ components/Navbar";
import OurGame from "./ components/ourGame";
// import Marketplace from "./ components/Marketplace";
import Games from "./ components/Games";
import Contact from "./ components/Contact";
import { Route, Routes } from "react-router-dom";
import About from "./ components/About";
import Pitchdeck from "./ components/Pitchdeck";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/*<Route path='/' element={<Navbar/>}/>*/}
        <Route path="/ourGame" element={<OurGame />} />
        <Route path="/Discover_games" element={<Games />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Pitchdeck" element={<Pitchdeck />} />
      </Routes>
      <footer>
        <p>Copyright &copy; 2022 All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
