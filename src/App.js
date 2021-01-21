import React, { useState } from "react";
import "tachyons";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [Result, setResult] = useState("Result");

  const addition = () => {
    setResult(num1 + num2);
  };

  const substraction = () => {
    setResult(num1 - num2);
  };

  const multiply = () => {
    setResult(num1 * num2);
  };

  const divide = () => {
    setResult(num1 / num2);
  };

  return (
    <>
      <h1 class="f2 lh-title tc">CALCULATOR</h1>
      <div className="br2 ba b--mid-gray bg-gray mv4 w-100 w-50-m w-25-l mw6 center shadow-5 ba bw2 bg-animate hover-bg-lightest-blue grow">
        <center>
          <input
            className="ma2"
            type="number"
            value={num1}
            name="num1"
            onChange={(e) => setNum1(Number(e.target.value))}
          />
          <input
            className="ma2"
            type="number"
            value={num2}
            name="num2"
            onChange={(e) => setNum2(Number(e.target.value))}
          />
          <div>
            <button
              className="f6  ba bw1 mb2 mr1 dib mid-gray"
              value="+"
              onClick={addition}
            >
              +
            </button>
            <button
              className="f6  ba bw1 mb2 mr1 dib mid-gray"
              value="-"
              onClick={substraction}
            >
              -
            </button>
            <button
              className="f6  ba bw1 mb2 mr1 dib mid-gray"
              value="*"
              onClick={multiply}
            >
              *
            </button>
            <button
              className="f6  ba bw1 mb2 mr1 dib mid-gray"
              value="/"
              onClick={divide}
            >
              /
            </button>
          </div>
          <div>
            <h2 className="dib">{Result}</h2>
          </div>
        </center>
      </div>
    </>
  );
};

export default App;
