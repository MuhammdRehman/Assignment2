import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";


const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Header />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
