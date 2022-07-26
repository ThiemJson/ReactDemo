import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  const updateCount = () => {
    // setCount((count) => count + 1);
    // setInterval(() => {
    //   setIsTrue((isTrue) => !isTrue);
    // }, 2000);
  };

  console.log("Render");
  return (
    <div className="Counter">
      <p>
        {count} {isTrue}
      </p>
      <button onClick={updateCount}>Click</button>
    </div>
  );
};
