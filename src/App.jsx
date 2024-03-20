import React,{useState} from "react";
import Topbar from "./componets/navbar";
import Sidebar from "./componets/sidebar";
import AboutUs from "./componets/About";
import { BrowserRouter,Routes,Route,Outlet } from "react-router-dom";


const App = ()=>{
  const data = {
    monthylEarning :"40,000",
    annualEarning :"2,15000",
    task:"50",
    pendingRequest:"18"
  }
  const[value,setValue]=useState('hai');
  return<>
  <div id="wrapper">
  <Sidebar/>
  <h1>{value}</h1>
  <BrowserRouter>
  <Routes>
    <Route path='/topbar' element={ <Topbar data={{data,setValue}}/>}/>
    <Route path='/aboutus' element={ <AboutUs/>}/>
  </Routes>
  </BrowserRouter>

  </div>
  </>
}

export default App;