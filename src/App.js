import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Login} from "./Pages/Login";
import Registration from "./Pages/Registration";
import {Navbar} from './Pages/Navbar'
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration/>} />
        </Routes>
      </Router>
    </div>
  );
}