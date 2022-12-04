import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Container from 'react-bootstrap/Container';

import Home from "./components/Home";
import Signin from "./components/admin/signin/Signin";
import Topnav from "./components/Topnav";
import Dashboard from "./components/admin/Dashboard";
import Signout from "./components/admin/signin/Signout";

// import Dashboard from './components/admin/Dashboard'
import DoctorInfo from "./components/DoctorInfo";

function App() {
  return (
    <BrowserRouter>
      <Topnav />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/admin" element={ <Signin /> } />
        <Route exact path="/admin/signout" element={ <Signout /> } />
        <Route exact path="/admin/dashboard" element={ <Dashboard /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
