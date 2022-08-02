import axios from "axios";
import React, { useEffect, useReducer } from "react";

export const fetchHackerNews = async (url) => {
  return axios.get(url);
};

export const HackerNewsAction = {
  CHANGE_QUERY: "CHANGE_QUERY",
  FETCH_DATA: "FETCH_DATA",
  RES_DATA: "RES_DATA",
  ERROR: "ERROR",
};

export const HackerNewsReducer = () => {
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

  const [state, reducerDispatch] = useReducer(hackerNewsReducer, {
    loading: true,
    hits: [],
    query: "",
    errorMsg: null,
  });

  const handleFetchNews = async (url) => {
    try {
      const { data } = await fetchHackerNews(url);
      reducerDispatch({ type: HackerNewsAction.RES_DATA, value: data.hits });
    } catch (error) {
      reducerDispatch({ type: HackerNewsAction.ERROR, value: error.message });
    }
  };

  useEffect(() => {
    if (state.loading) {
      handleFetchNews(
        `https://hn.algolia.com/api/v1/search?query=${state.query}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loading]);

  return (
    <div className=" w-[50%] rounded-lg shadow-md p-5 bg-white mx-auto mt-5">
      {/* Search section */}
      <div className="flex mb-5 gap-3">
        <input
          type="text"
          placeholder="Typing your keyword ..."
          className=" border border-gray-300 rounded-lg h-5 block px-5 py-8 w-full caret-gray-300 text-gray-600 focus:border-blue-200 focus:caret-blue-200 transition-all"
          onChange={(e) => {
            reducerDispatch({
              type: HackerNewsAction.CHANGE_QUERY,
              value: `${e.target.value}`,
            });
          }}
        />
        <button
          className=" bg-blue-500 rounded-lg block font-semibold shrink-0 text-white px-5 hover:bg-blue-600 transition-all"
          onClick={() => {
            reducerDispatch({ type: HackerNewsAction.FETCH_DATA });
          }}
        >
          Fetching
        </button>
      </div>

      {/* Loading indicator */}
      {state.loading && (
        <div className=" rounded-full w-9 h-9 border-8 border-blue-600 border-r-transparent animate-spin mx-auto my-8 "></div>
      )}

      {/* Error */}
      {state.errorMsg && (
        <div className="text-red-600 font-bold mx-auto my-8 text-center">
          {state.errorMsg}
        </div>
      )}

      {/* Content */}
      {!state.loading && !state.errorMsg && (
        <div className="flex flex-wrap gap-5">
          {state.hits.length > 0 &&
            state.hits.map((item, index) => {
              return item.title && item.title.length > 0 ? (
                <p
                  key={index}
                  className=" px-3 py-3 bg-gray-100 rounded-md text-gray-700 shadow-md"
                >
                  {item.title}
                </p>
              ) : null;
            })}
        </div>
      )}
    </div>
  );
};
