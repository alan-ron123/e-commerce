import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./WiseWebtek/About";
import { Routes, Route } from "react-router-dom";
import Routing from "./WiseWebtek/Routing";
function App() {
  return (
    <div className="m-0">
      <Routes>
        <Route path="/" element={<Routing />} />

        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
