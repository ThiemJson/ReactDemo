import React, { useState, useRef, useEffect } from "react";
// Làm một cái đồng hồ bấm giờ đơn giản, có startstop, đếm từng giây một
export const RefTimeStop = () => {
  const refInput = useRef();
  const refTimer = useRef(null);
  const [counter, setCounter] = useState(12);

  const handlerStart = () => {
    if (refTimer.current !== null) {
      return;
    }

    refTimer.current = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);
  };

  const handlerStop = () => {
    if (refTimer.current !== null) {
      clearInterval(refTimer.current);
      refTimer.current = null;
    }
  };

  useEffect(() => {
    if (refInput.current) {
      refInput.current.focus();
    }
    return () => {
      if (refTimer.current !== null) {
        clearInterval(refTimer.current);
      }
    };
  }, []);

  return (
    <div className=" flex flex-col mt-5 p-2 mx-auto border rounded-lg shadow-md bg-white w-[20%] h-[200px] gap-2">
      {/* Time */}
      <div className=" bg-blue-600 rounded-[inherit] w-full h-full flex items-center justify-center">
        <span className=" font-bold text-white w-full text-center">
          {counter}
        </span>
      </div>
      {/* Button container */}
      <div className=" flex justify-between items-center gap-3 w-full h-full">
        <button
          className=" rounded-lg bg-green-600 text-white w-full h-full"
          onClick={handlerStart}
        >
          Start
        </button>
        <button
          className=" rounded-lg bg-red-500 text-white w-full h-full"
          onClick={handlerStop}
        >
          Stop
        </button>
      </div>
      <input
        ref={refInput}
        type="text"
        className=" p-2 m-1 border text-gray-400 rounded-[inherit]"
        placeholder="Typesomething"
      />
    </div>
  );
};
