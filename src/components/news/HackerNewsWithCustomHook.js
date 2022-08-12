import React, { useEffect } from "react";
import { useHackerNews } from "../../hooks/useHackerNews";
import { useHover } from "../../hooks/useHover";
import { fetchHackerNews, HackerNewsAction } from "./HackerNewsReducer";

export const HackerNewsWithCustomHook = () => {
  const { state: hackerNewsState, reducerDispatch: hackerNewDispatch } =
    useHackerNews();
  const { hovered, nodeRef } = useHover();

  const handleFetchNews = async (url) => {
    try {
      const { data } = await fetchHackerNews(url);
      hackerNewDispatch({ type: HackerNewsAction.RES_DATA, value: data.hits });
    } catch (error) {
      hackerNewDispatch({ type: HackerNewsAction.ERROR, value: error.message });
    }
  };

  useEffect(() => {
    if (hackerNewsState.loading) {
      handleFetchNews(
        `https://hn.algolia.com/api/v1/search?query=${hackerNewsState.query}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hackerNewsState.loading]);

  return (
    <div className=" w-[50%] rounded-lg shadow-md p-5 bg-white mx-auto mt-5">
      {/* Search section */}
      <div className="flex mb-5 gap-3">
        <input
          type="text"
          placeholder="Typing your keyword ..."
          className=" border border-gray-300 rounded-lg h-5 block px-5 py-8 w-full caret-gray-300 text-gray-600 focus:border-blue-200 focus:caret-blue-200 transition-all"
          onChange={(e) => {
            hackerNewDispatch({
              type: HackerNewsAction.CHANGE_QUERY,
              value: `${e.target.value}`,
            });
          }}
        />
        <button
          ref={nodeRef}
          className={`rounded-lg block font-semibold shrink-0 text-white px-5 ${
            hovered ? `bg-blue-600` : `bg-blue-500`
          } transition-all`}
          onClick={() => {
            hackerNewDispatch({ type: HackerNewsAction.FETCH_DATA });
          }}
        >
          Fetching
        </button>
      </div>

      {/* Loading indicator */}
      {hackerNewsState.loading && (
        <div className=" rounded-full w-9 h-9 border-8 border-blue-600 border-r-transparent animate-spin mx-auto my-8 "></div>
      )}

      {/* Error */}
      {hackerNewsState.errorMsg && (
        <div className="text-red-600 font-bold mx-auto my-8 text-center">
          {hackerNewsState.errorMsg}
        </div>
      )}

      {/* Content */}
      {!hackerNewsState.loading && !hackerNewsState.errorMsg && (
        <div className="flex flex-wrap gap-5">
          {hackerNewsState.hits.length > 0 &&
            hackerNewsState.hits.map((item, index) => {
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
