import React from "react";
import NavBar from "./components/Header/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage"
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ShopPage" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
