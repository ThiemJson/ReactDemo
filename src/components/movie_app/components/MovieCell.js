import React from "react";
import ranking from "../../../images/ranking.jpg";
import { MOVIE_POSTER_PATH_PREFIX } from "../MovieSeachAppConst";

export const MovieCell = ({ movie }) => {
  const { overview, title, poster_path, vote_average } = movie;
  return (
    <div className=" bg-white rounded-2xl p-3 w-full min-w-[400px] max-h-[528px]  ">
      <div className=" rounded-lg w-full h-[296px]">
        <img
          src={`${MOVIE_POSTER_PATH_PREFIX}${poster_path}`}
          alt={`${title}`}
          className=" w-full h-full block rounded-[inherit] shrink-0 object-cover"
        />
      </div>
      <div className=" px-4 pt-7 pb-4 flex flex-col gap-y-4">
        <h3 className=" font-semibold text-base text-left">
          {title || `Something`}
        </h3>
        <span className=" inline-block text-sm font-normal text-left text-[#999999] h-[60px] text-clip overflow-hidden ">
          {overview || `Lorem`}
        </span>
        <div className="w-full">
          <div className="flex flex-row gap-x-2 ">
            <img
              src={ranking}
              alt="ranking"
              className="shrink-0 object-cover"
            />
            <span className=" font-semibold text-[#333] ">
              {vote_average || 0.5}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
