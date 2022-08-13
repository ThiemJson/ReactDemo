import React from "react";
import { useHandleChange } from "../../hooks/useHandleChange";

const Form = () => {
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
  });

  return (
    <div className="p-5">
      <div className="flex flex-col gap-y-3">
        <input
          type="text"
          name="fullname"
          placeholder="Enter your name"
          className=" w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email address"
          className=" w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Form;
