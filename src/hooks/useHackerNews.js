import { HackerNewsAction } from "../components/news/HackerNewsReducer";
import { useReducerExt } from "./use_reducer_ext/useReducerExt";

export const useHackerNews = () => {
  const hackerNewsReducer = (state, { type, value }) => {
    const newState = { ...state, errorMsg: null };

    switch (type) {
      case HackerNewsAction.CHANGE_QUERY:
        return {
          ...newState,
          query: value,
        };

      case HackerNewsAction.FETCH_DATA:
        return {
          ...newState,
          loading: true,
          query: state.query,
        };

      case HackerNewsAction.RES_DATA:
        return {
          ...newState,
          loading: false,
          hits: value,
        };

      case HackerNewsAction.ERROR:
        return {
          ...newState,
          loading: false,
          errorMsg: value,
        };
      default:
        return newState;
    }
  };

  const [state, reducerDispatch] = useReducerExt(hackerNewsReducer, {
    loading: true,
    hits: [],
    query: "",
    errorMsg: null,
  });

  return {
    state,
    reducerDispatch,
  };
};
