import React from "react";

export const Card = ({ data }) => {
  const { backgrounImage, avatar, name, reactCount, title, amount } = data;
  return (
    <div className=" relative ">
      {/* Card Div Image */}
      <div className=" w-full rounded-lg h-[400px]">
        {/* Card Img */}
        <img
          className=" block w-full h-full object-cover rounded-lg "
          src={
            backgrounImage ||
            "https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
          }
          alt="Something photos"
        />
      </div>
      {/* Card content */}
      <div className=" absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
        {/* Top */}
        <div className=" flex justify-between items-center mb-[30px]">
          {/* User info */}
          <div className=" flex justify-between items-center gap-[12px]">
            {/* Avatar + Name */}
            <img
              className=" w-[30px] h-[30px] object-cover flex-shrink-0 rounded-full "
              src={
                avatar ||
                "https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
              }
              alt="Man"
            />
            <span className="user-name font-light text-base text-[#333]">
              {" "}
              {name || "@zndrson"}
            </span>
          </div>
          {/* USer react */}
          <div className=" justify-between items-center flex gap-x-[12px] ">
            {/* Hearticon + react count */}
            <img src="/icon_heart.svg" alt="heart-icon" />
            <span className="react-count"> {reactCount || "256"}</span>
          </div>
        </div>
        {/* Bottom */}
        <div className="card-bottom justify-between items-center flex">
          {/* Title */}
          <h3 className="text-lg font-medium">
            {title || "Cosmic Perspective"}
          </h3>
          {/* Amount */}
          <span className="card-amount text-lg font-bold text-transparent  bg-clip-text bg-primary-gradient">
            {`${amount} PSL` || "12,000 PSL"}
          </span>
        </div>
      </div>
    </div>
  );
};
