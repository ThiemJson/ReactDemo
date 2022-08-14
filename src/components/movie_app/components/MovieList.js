import React from "react";
import { MovieCell } from "./MovieCell";

export const MovieList = ({ movies }) => {
  return (
    <div className=" grid grid-cols-3 gap-x-10 gap-y-6">
      {movies.map((item, index) => (
        <MovieCell key={index} movie={item}></MovieCell>
      ))}
    </div>
  );
};
