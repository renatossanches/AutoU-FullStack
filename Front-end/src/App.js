import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="dark:bg-gray-800">
      <div className="app flex h-screen">
        <Sidebar />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
