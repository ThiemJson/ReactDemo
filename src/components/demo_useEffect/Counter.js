import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="m-[25px]">
      {count > 10 ? (
        <div></div>
      ) : (
        <CounterChild countValue={count}></CounterChild>
      )}
      <button
        className=" w-[200px] h-[50px] rounded-lg bg-blue-500 text-[20px] "
        onClick={() => {
          setCount((state) => state + 1);
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export const CounterChild = ({ countValue }) => {
  useEffect(() => {
    console.log("Did load");
    return () => {
      console.log("De init");
    };
  }, [countValue]);
  return <div>{countValue}</div>;
};
