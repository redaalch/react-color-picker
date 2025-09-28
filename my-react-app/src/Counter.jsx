import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="count-display">{count}</h1>
      <button className="counter-button" onClick={increament}>
        increament
      </button>
      <button className="counter-button" onClick={reset}>
        reset
      </button>
      <button className="counter-button" onClick={decreament}>
        decreament
      </button>
    </div>
  );
}
export default Counter;
