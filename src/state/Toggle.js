import React, { useState } from "react";
import "./Toggle.css";

export const Toggle = () => {
  const [ison, setIsOn] = useState(false);
  console.log(ison);
  const handleToggle = (isOn) => setIsOn(!ison);
  return (
    <div>
      <ToggleChild></ToggleChild>
      <div className={`toggle ${ison ? "active" : ""}`}>
        <div className={`spinner ${ison ? "active" : ""}`}></div>
      </div>
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => handleToggle(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => handleToggle(false)}>
          Off
        </div>
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
