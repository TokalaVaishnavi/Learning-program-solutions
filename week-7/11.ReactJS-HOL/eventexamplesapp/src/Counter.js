import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    console.log("Hello! Welcome to the counter example.");
  };

  const sayWelcome = (message) => {
    alert(`Message: ${message}`);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      &nbsp;
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("Welcome to React Events!")}>Say Welcome</button>
      <br /><br />
      <button onClick={handleClick}>OnPress (Synthetic Event)</button>
    </div>
  );
};

export default Counter;
