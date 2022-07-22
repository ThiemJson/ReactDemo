import React, { useState } from "react";
import "./Toggle.css";

export const Toggle = () => {
  const [ison, setIsOn] = useState(false);
  console.log(ison);

  //   const customeFunction = () => {
  //     const [active, isActive] = useState(false);
  //   };

  const inSideFunction = (param) => {
    console.log(`inSideFunction: ${param}`);
    return !param;
  };

  const handleToggle = () => setIsOn(inSideFunction);
  return (
    <div>
      <ToggleChild></ToggleChild>
      <div className={`toggle ${ison ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${ison ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

const ToggleChild = () => {
  console.log("toggleChild rebuild");
  return (
    <div>
      <ToggleGrandChild></ToggleGrandChild>
    </div>
  );
};

export const ToggleGrandChild = () => {
  console.log("ToggleGrandChild rebuild");
  return <div></div>;
};
