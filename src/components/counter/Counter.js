import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    firstName: "Cao",
    lastName: "Thiem",
  });

  useEffect(() => {
    console.log("From input");
  }, [info]);

  return (
    <div className=" p-5 flex gap-x-4 items-center bg-slate-400 ">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) => {
          setInfo({
            ...info,
            firstName: e.target.value,
          });
        }}
      />
      <span className=" text-2xl font-bold bg-teal-200 ">{count}</span>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
        className=" inline-block bg-green-400 text-white rounded-lg w-[200px] h-[50px] "
      >
        Increment
      </button>
    </div>
  );
};
