import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );

  const handleFetchData = useRef({});

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
  }, [url]);

  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4 mb-5">
      <div className="flex gap-x-3 mb-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md focus:border-blue-300 transition-all"
          placeholder="Typing your keyword ..."
          defaultValue={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          className="text-white rounded-md font-semibold bg-blue-500 p-5 flex-shrink-0"
          onClick={() => {
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
          }}
        >
          Fetching
        </button>
      </div>

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
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={index} className=" p-3 bg-gray-100 rounded-lg ">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};
