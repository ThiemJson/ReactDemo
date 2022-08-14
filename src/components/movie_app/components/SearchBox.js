import React from "react";

export const SearchBox = () => {
  return (
    <div>
      <input
        type="text"
        className=" font-normal text-base w-[40%] h-full min-w-[400px] max-h-[60px] p-3 rounded-lg border border-[#7D6AFF] focus:border-[#9384f6] "
        placeholder="Enter movie ..."
      />
    </div>
  );
};
