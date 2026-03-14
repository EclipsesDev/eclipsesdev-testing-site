import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CalculatorPage from "./pages/Calculator.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
    </Routes>
  );
}