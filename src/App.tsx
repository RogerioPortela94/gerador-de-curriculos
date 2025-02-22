//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelecaoModelo from "./pages/SelecaoModelo";
import GeradorCurriculo from "./pages/GeradorCurriculo";



function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<SelecaoModelo />} />
            <Route path="/form" element={<GeradorCurriculo />} />
        </Routes>
      </Router>
  )
}

export default App
