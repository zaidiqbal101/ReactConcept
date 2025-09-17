import React from "react";
// import { Route,BrowseRouter, Router,Routers } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";

import Props from "./pages/Props";

import Topics1 from "./pages/Topics1";
import Topics2 from "./pages/Topics2";
import Form3 from "./pages/Form3";
import ConditionalRendering4 from "./pages/conditionalRendering4";

function App(){
  return (
    <Router>
    <div className="p-4">
      <div className="flex gap-8">
      <Link to="/">Home</Link>

      <Link to="/Props">Props</Link>

      <Link to="/Condition4">Conditional</Link>


</div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Props" element={<Props/>}/>

        <Route path="/Topics1" element={<Topics1/>}/> 
        <Route path="/Topics2" element={<Topics2/>}/>
        <Route path="/Form3" element={<Form3/>}/>
        <Route path="/Condition4" element={<ConditionalRendering4/>}/>

      </Routes>
    </div>
    </Router>
  )
}
export default App;