import React from "react";

const StoryList = ({ children }) => {
  return (
    <div className="bg-[#18191A] p-6 grid grid-flow-col gap-[10px]">
      {children}
    </div>
  );
};

export default StoryList;
