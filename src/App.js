import { useState } from "react";
import "./App.css";

function App() {
  const tDate = new Date();
  const [step, SetStep] = useState(1);
  const [count, setCount] = useState(0);

  let res;

  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    res = result.toDateString();
    return result;
  }

  addDays(tDate, count);

  // function handleMinusStep() {
  //   SetStep((s) => s - 1);
  // }
  // function handlePlusStep() {
  //   SetStep((s) => s + 1);
  // }
  function handleMinusCount() {
    setCount((c) => c - step);
  }
  function handlePlusCount() {
    setCount((c) => c + step);
  }

  return (
    <>
      <div className="App">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="range"
            min="0"
            max="10"
            step={1}
            value={step}
            onChange={(e) => SetStep(Number(e.target.value))}
          />
          <p>{step}</p>
        </div>
        <div>
          {<button onClick={handleMinusCount}>-</button>}
          <input
            value={count}
            onChange={(e) => {
              setCount(Number(e.target.value));
            }}
          />
          {<button onClick={handlePlusCount}>+</button>}
        </div>
        <p className="ui">
          {count === 0 && ""} {count > 1 && count}
          {count < -1 && count.toString().slice(1)}
          {count === -1 && "Yesterday was"}
          {count === 1 && " Tomorrow is "}
          {count > 1 && " days from today is"}
          {count < -1 && " days ago was"}
          {count === 0 && " Today is"} {res}
        </p>

        <button
          style={
            count === 0 && step === 1
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          onClick={() => {
            setCount(0);
            SetStep(1);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
