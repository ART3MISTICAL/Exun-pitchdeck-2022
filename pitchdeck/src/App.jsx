//import logo from './logo.svg';
import "./App.css";
import Navbar from "./ components/Navbar";
import OurGame from "./ components/ourGame";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
			<Navbar/>
      <Routes>
        {/*<Route path='/' element={<Navbar/>}/>*/}
        <Route path='/ourGame' element={<OurGame/>}/>
      </Routes>
    </div>
  );
}

export default App;
