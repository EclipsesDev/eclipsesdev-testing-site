import { useEffect } from "react";
import { Link } from "react-router-dom";
import Calculator from "../calculator/calculator.jsx";

export default function CalculatorPage() {
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = `${import.meta.env.BASE_URL}calculator.png`;
    document.title = "EclipsesDev - Calculator";
  }, []);

  return (
    <main className="simple-page">
      <div className="simple-card">
        <p className="simple-eyebrow">Calculator</p>
        <h1>Basic Calculator</h1>
        <p>Simple calculator for basic arithmetic operations.</p>
        <div className="simple-stack">
          <Calculator />
          <Link className="simple-button" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}