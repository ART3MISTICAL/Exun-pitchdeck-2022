//import logo from './logo.svg';
import "./App.css";
import Navbar from "./ components/Navbar";
import OurGame from "./ components/ourGame";
import Marketplace from "./ components/Marketplace";
import  Games from'./ components/Games'
import Contact from "./ components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
			<Navbar/>
      <Routes>
        {/*<Route path='/' element={<Navbar/>}/>*/}
        <Route path='/ourGame' element={<OurGame/>}/>
        <Route path='/Market' element={<Games/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
