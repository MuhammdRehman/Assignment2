import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/signin";
import Profile from "./components/profile";
import Dashboard from "./components/Dashboard";
import Signup from "./components/signup";

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/sign-up" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/blank" element={<h1>Blank Page</h1>} />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
