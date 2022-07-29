import React from "react";

export const Card = ({ data }) => {
  const { backgrounImage, avatar, name, reactCount, title, amount } = data;
  return (
    <div className="card relative w-[400px]">
      <div className="card-image rounded-lg w-full h-[400px]">
        <img
          src={backgrounImage}
          alt=""
          className="card-img rounded-lg block object-cover w-full h-full flex-shrink-0"
        />
      </div>
      <div className="card-content absolute bottom-0 bg-white rounded-[20px] w-[calc(100%-36px)] p-5 translate-x-2/4 translate-y-2/4 right-[50%]">
        <div className="card-top flex justify-between items-center mb-[30px]">
          <div className="user-info flex justify-between items-center gap-3">
            <img
              src={avatar}
              alt=""
              className="user-avatar rounded-full w-[30px] h-[30px] object-cover shrink-0"
            />
            <span className="user-name text-[#333] font-light text-base">
              {name}
            </span>
          </div>
          <div className="user-react flex justify-between items-center gap-3">
            <img src="/icon_heart.svg" alt="heart-icon" />
            <span className="react-count text-lg text-[#333]">
              {reactCount}
            </span>
          </div>
        </div>
        <div className="card-bottom flex justify-between items-center">
          <h3 className="title text-lg font-bold">{title}</h3>
          <span className="amount font-bold text-lg bg-clip-text text-transparent bg-primary-gradient">{`${amount} PSL`}</span>
        </div>
      </div>
    </div>
  );
};
