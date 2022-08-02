import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import lodash from "lodash";

// https://hn.algolia.com/api/v1/search?query=react

export const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFetchData = useRef({});

  //   Update query
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 1000);

  handleFetchData.current = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        url || `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(data?.hits || []);
    } catch (error) {
      console.log(error);
      setErrorMessage(`${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [query]);

  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4 mb-5">
      <input
        type="text"
        className="border border-gray-200 p-5 block w-full rounded-md mb-5 focus:border-blue-300 transition-all"
        placeholder="Typing your keyword ..."
        defaultValue={query}
        onChange={handleUpdateQuery}
      />

      {/* Loading */}
      {loading && (
        <div className=" mx-auto my-10 loading w-8 h-8 rounded-full border-4 border-blue-500 border-r-4 border-r-transparent animate-spin"></div>
      )}

      {/* Error */}
      {!loading && errorMessage && (
        <p className=" text-red-600 font-bold my-5 ">{errorMessage}</p>
      )}

      {/* Success */}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => (
            <h3 key={index} className=" p-3 bg-gray-100 rounded-lg ">
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};
