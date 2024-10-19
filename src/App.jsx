import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";


const App = () => {
  return (
    <Router>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element = {<Home/>}/>
        </Routes>
      
    </Router>
  );
};

export default App;
