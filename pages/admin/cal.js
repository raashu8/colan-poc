import { useState } from "react";

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState("0");
  const [previousInput, setPreviousInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [shouldReset, setShouldReset] = useState(false);

  const reset = () => {
    setCurrentInput("0");
    setPreviousInput("");
    setOperator(null);
    setShouldReset(false);
  };

  const handleNumber = (number) => {
    if (currentInput === "0" || shouldReset) {
      setCurrentInput(number);
      setShouldReset(false);
    } else {   
      setCurrentInput(currentInput + number);
    }
  };

  const handleOperator = (operatorValue) => {
    if (operator === null) {
      setOperator(operatorValue);
      setPreviousInput(currentInput);
      setCurrentInput("0");
      setShouldReset(false);
    } else {
      handleEquals();
      setOperator(operatorValue);
    }
  };

  const handleEquals = () => {
    if (operator === "+") {
      setCurrentInput(Number(previousInput) + Number(currentInput));
    } else if (operator === "-") {
      setCurrentInput(Number(previousInput) - Number(currentInput));
    } else if (operator === "*") {
      setCurrentInput(Number(previousInput) * Number(currentInput));
    } else if (operator === "/") {
      setCurrentInput(Number(previousInput) / Number(currentInput));
    } else if (operator === "%") {
      setCurrentInput(Number(previousInput) % Number(currentInput));
    }
    setOperator(null);
    setShouldReset(true);
  };

  const handlePlusMinus = () => {
    setCurrentInput(-currentInput);
  };

  const handlePercent = () => {
    setCurrentInput(currentInput / 100);
  };

  const updateInput = () => {
    setCurrentInput(currentInput.toString().substring(0, 12));
  };

  return (
    <div className="calculator">
      <input type="text" className="input" value={currentInput} readOnly />
      <div className="keys">
        <button className="key key-ac" onClick={reset}>
          AC
        </button>
        <button className="key" onClick={() => handlePlusMinus()}>
          +/-
        </button>
        <button className="key" onClick={() => handlePercent()}>
          %
        </button>
        <button className="key key-orange" onClick={() => handleOperator("/")}>
          /
        </button>
        <button className="key" onClick={() => handleNumber("7")}>
          7
        </button>
        <button className="key" onClick={() => handleNumber("8")}>
          8
        </button>
        <button className="key" onClick={() => handleNumber("9")}>
          9
        </button>
        <button className="key key-orange" onClick={() => handleOperator("*")}>
          x
        </button>
        <button className="key" onClick={() => handleNumber("4")}>
          4
        </button>
        <button className="key" onClick={() => handleNumber("5")}>
          5
        </button>
        <button className="key" onClick={() => handleNumber("6")}>
          6
        </button>
        <button className="key key-orange" onClick={() => handleOperator("-")}>
          -
        </button>
        <button className="key" onClick={() => handleNumber("1")}>
          1
        </button>
        <button className="key" onClick={() => handleNumber("2")}>
          2
        </button>
        <button className="key" onClick={() => handleNumber("3")}>
          3
        </button>
        <button className="key key-orange" onClick={() => handleOperator("+")}>
          +
        </button>
        <button className="key key-zero" onClick={() => handleNumber("0")}>
          0
        </button>
        <button className="key" onClick={() => handleNumber(".")}>
          .
        </button>
        <button className="key key-orange" onClick={() => handleEquals()}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;


// @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }

// body {
//   background-color: #272727 !important;
//   font-family: "Roboto", sans-serif;
// }

// .container {
//   display: flex !important;
//   justify-content: center !important;
//   align-items: center !important;
//   min-height: 100vh !important;
// }

// .calculator {
//   width: 320px;
//   background-color: #444;
//   border-radius: 8px;
//   overflow: hidden;
// }

// .input {
//   width: 100%;
//   font-size: 36px;
//   padding: 16px;
//   border: none;
//   background-color: #111;
//   color: #fff;
//   text-align: right;
// }

// .keys {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 8px;
//   padding: 16px;
// }

// .key {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 24px;
//   height: 64px;
//   background-color: #eee;
//   color: #333;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: all 0.2s;
// }

// .key:hover {
//   background-color: #ddd;
// }

// .key-ac {
//   background-color: #f44336;
//   color: #fff;
// }

// .key-ac:hover {
//   background-color: #d32f2f;
// }

// .key-orange {
//   background-color: #ff9800;
//   color: #fff;
// }

// .key-orange:hover {
//   background-color: #f57c00;
// }

// .key-zero {
//   grid-column: 1 / 3;
// }

// @media (max-width: 480px) {
//   .calculator {
//     width: 100%;
//     border-radius: 0;
//   }
// }
