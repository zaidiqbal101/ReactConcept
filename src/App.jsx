import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Props from "./pages/Props";
import Topics1 from "./pages/Topics1";
import Topics2 from "./pages/Topics2";
import Form3 from "./pages/Form3";
import ConditionalRendering4 from "./pages/conditionalRendering4";
import UseEffect4 from "./pages/useEffect4"; 
import Tailwind from "./pages/tailwind5";

function App() {
  return (
    <Router>
      <div className="p-4">
        <div className="flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/Props">Props</Link>
          <Link to="/Condition4">Conditional</Link>
          <Link to="/useEffect">UseEffect</Link>
          <Link to="/tailwind">Tailwind</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Props" element={<Props />} />
          <Route path="/Topics1" element={<Topics1 />} />
          <Route path="/Topics2" element={<Topics2 />} />
          <Route path="/Form3" element={<Form3 />} />
          <Route path="/Condition4" element={<ConditionalRendering4 />} />
          <Route path="/useEffect" element={<UseEffect4 />} />
          <Route path="/tailwind" element={<Tailwind/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
