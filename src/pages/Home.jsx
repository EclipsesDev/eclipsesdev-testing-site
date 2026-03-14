import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = `${import.meta.env.BASE_URL}eclipsesdev.png`;
    document.title = "EclipsesDev - Home";
  }, []);

  return (
    <main className="simple-page">
      <div className="simple-card">
        <p className="simple-eyebrow">Home</p>
        <h1>EclipsesDev Testing Site</h1>
        <p>
          Welcome to the EclipsesDev testing site. This is a simple project to test out React and Vite. 
          Click the button below to see a simple calculator.
        </p>
        <Link className="simple-button" to="/calculator">
          Go to Calculator
        </Link>
      </div>
    </main>
  );
}