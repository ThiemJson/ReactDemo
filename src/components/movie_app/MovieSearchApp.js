import axios from "axios";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { MovieList } from "./components/MovieList";
import { MOVIE_SEARCH_WITH_QUERY } from "./MovieSeachAppConst";

export const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("Predator");
  const [isLoading, setIsLoading] = useState(false);
  const fetchRef = useRef({});

  useEffect(() => {
    fetchRef.current();
  }, []);

  fetchRef.current = async () => {
    setIsLoading(true);
    const res = await axios.get(`${MOVIE_SEARCH_WITH_QUERY}${movieName}`);
    setMovies(res.data.results);
    setIsLoading(false);
  };

  const handleSubmit = () => {
    fetchRef.current();
  };

  const handleInputChange = (event) => {
    setMovieName(event.target.value);
  };

  return (
    <div className="w-full h-full">
      <div className=" w-full h-[60px] mx-auto my-5 flex items-center justify-center gap-6 ">
        <input
          defaultValue={movieName}
          onChange={handleInputChange}
          type="text"
          className=" font-normal text-base w-[40%] h-full min-w-[400px] max-h-[60px] p-3 rounded-lg border border-[#7D6AFF] focus:border-[#9384f6] "
          placeholder="Enter movie ..."
        />
        <button
          className=" rounded-lg h-full px-6 py-3 text-white bg-blue-500 font-semibold "
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className=" mx-auto my-10 loading w-8 h-8 rounded-full border-4 border-blue-500 border-r-4 border-r-transparent animate-spin"></div>
      )}

      {!isLoading && (
        <div className="p-6">
          <MovieList movies={movies}></MovieList>
        </div>
      )}
    </div>
  );
};
