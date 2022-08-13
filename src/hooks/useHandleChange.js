import { useState } from "react";

export const useHandleChange = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const handleChange = (event) => {
    const type = event.target.type;
    switch (type) {
      case "text":
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
        break;
      case "checkbox":
        setValues({
          ...values,
          [event.target.name]: event.target.checked,
        });
        break;
      default:
        break;
    }
  };
  return { values, handleChange };
};
