import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="count-display">{count}</h1>
      <button className="counter-button" onClick={increment}>
        increment
      </button>
      <button className="counter-button" onClick={reset}>
        reset
      </button>
      <button className="counter-button" onClick={decrement}>
        decrement
      </button>
    </div>
  );
}
export default Counter;
