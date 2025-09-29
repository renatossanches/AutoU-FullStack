import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
    <div>
      <div className="app flex h-screen">
        <Sidebar />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
