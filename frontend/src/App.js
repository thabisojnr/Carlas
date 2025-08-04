import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProgramDetail from "./components/ProgramDetail";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/program/:region/:location" element={<ProgramDetail />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;