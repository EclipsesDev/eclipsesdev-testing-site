import { useState } from "react";

export default function Calculator() {
  const [currentInput, setCurrentInput] = useState("0");

  const handleButtonClick = (value) => {
    switch (currentInput) {
      case "0":
        setCurrentInput(value);
        break;
      case "Error":
        setCurrentInput(value);
        break;  
      default:
        setCurrentInput(currentInput + value)
        break;
    }
  };

  const handleEvaluation = () => {
    try {
      const result = eval(currentInput);
      setCurrentInput(result.toString());
    } catch (error) {
      setCurrentInput("Error");
    }
  };

  const handleClear = () => {
    setCurrentInput("0");
  }

  return (
    <div className="calculator">
      <div className="calc-display" aria-live="polite">
        {currentInput}
      </div>
      <div className="calc-keys">
        <button className="calc-button calc-action" onClick={handleClear}>AC</button>
        <button className="calc-button" onClick={() => handleButtonClick("7")}>7</button>
        <button className="calc-button" onClick={() => handleButtonClick("8")}>8</button>
        <button className="calc-button" onClick={() => handleButtonClick("9")}>9</button>
        <button className="calc-button calc-operator" id="btn-divide" onClick={() => handleButtonClick("/")}>/</button>

        <button className="calc-button" onClick={() => handleButtonClick("4")}>4</button>
        <button className="calc-button" onClick={() => handleButtonClick("5")}>5</button>
        <button className="calc-button" onClick={() => handleButtonClick("6")}>6</button>
        <button className="calc-button calc-operator" id="btn-multiply" onClick={() => handleButtonClick("*")}>*</button>

        <button className="calc-button" onClick={() => handleButtonClick("1")}>1</button>
        <button className="calc-button" onClick={() => handleButtonClick("2")}>2</button>
        <button className="calc-button" onClick={() => handleButtonClick("3")}>3</button>
        <button className="calc-button calc-operator" onClick={() => handleButtonClick("-")}>-</button>

        <button className="calc-button calc-span" onClick={() => handleButtonClick("0")}>0</button>
        <button className="calc-button" onClick={() => handleButtonClick(".")}>.</button>
        <button className="calc-button calc-operator" onClick={() => handleButtonClick("+")}>+</button>
        <button className="calc-button calc-equals" onClick={handleEvaluation}>=</button>
      </div>
    </div>
  );
}