import React, { useReducer } from "react";

export const DemoReducer = () => {
  const counterReducer = (state, { type }) => {
    const { value } = state;
    switch (type) {
      case `INCRESE`:
        return { ...state, value: value + 1 };
      case `DECRESE`:
        return { ...state, value: value - 1 };
      default:
        return { state };
    }
  };

  const [{ value }, dispatch] = useReducer(counterReducer, { value: 0 });
  return (
    <div className="DemoReducer">
      <p>{value}</p>
      <button
        onClick={() => {
          dispatch({ type: `INCRESE` });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: `DECRESE` });
        }}
      >
        -
      </button>
    </div>
  );
};
