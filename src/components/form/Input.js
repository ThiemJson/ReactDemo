import React, { useState } from "react";
import { useHandleChange } from "../../hooks/useHandleChange";

const Form = () => {
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
  });

  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <form className="p-5" autoComplete="off">
      <div className="flex flex-col gap-y-3 max-w-[300px] w-full">
        <input
          type="text"
          name="fullname"
          placeholder="Enter your name"
          className=" w-full p-5 border border-gray-200 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email address"
          className=" w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="p-3 text-white rounded-lg bg-blue-500"
          onClick={handleSubmitForm}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
