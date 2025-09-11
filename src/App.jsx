import React from "react";
// import { Route,BrowseRouter, Router,Routers } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Props from "./pages/Props";
function App(){
  return (
    <Router>
    <div className="p-4">
      <div className="flex gap-8">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Props">Props</Link>
</div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Props" element={<Props/>}/>
      </Routes>
    </div>
    </Router>
  )
}
export default App;