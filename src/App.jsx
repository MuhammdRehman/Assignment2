import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Signin from "./components/signin";
import Profile from "./components/profile";
const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/" element={<Sidebar />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/sign-up" element={<h1>Sign Up Page</h1>} />
          <Route path="/blank" element={<h1>Blank Page</h1>} />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
