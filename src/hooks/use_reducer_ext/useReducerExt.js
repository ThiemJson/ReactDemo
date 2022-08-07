/**
 * useReducer là 1 hook có nhận vào 1 initializedData và 1 hàm reducer trả về state
 * @returns
 */

import { useState } from "react";

export const fetchReducer = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "FETCH":
      return { ...newState, isLoading: state.isLoading };
    default:
      return newState;
  }
};

export const useReducerExt = (reducer, initialValue) => {
  const [state, setState] = useState(initialValue);
  const dispatch = (action) => {
    const newState = reducer(state, action);
    setState(newState);
  };
  return [state, dispatch];
};
