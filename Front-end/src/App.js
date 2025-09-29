import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import SenderEmail from "./components/senderEmail/SenderEmail";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import InputMail from "./components/inputBoxMail/InputMail";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="dark:bg-gray-800">
      <div className="app flex h-screen">
        <Sidebar />
        
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/enviar" element={<SenderEmail />} />
            <Route path="/entrada" element={<InputMail />} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
