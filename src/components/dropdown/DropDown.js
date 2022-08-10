import React, { useEffect, useRef, useState } from "react";

export const ListItem = [
  "Javascript",
  "iOS",
  "Android",
  "Flutter",
  "Xamarin",
  "React Native",
];

export const DropDown = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isShowDropdown, setIsShowDropdown] = useState(true);
  const selectedRef = useRef(null);
  const itemListRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handlerClickOutside);
  }, []);

  const handlerClickItem = (index) => {
    setSelectedIndex(index);
    setIsShowDropdown(false);
  };

  const handlerClickSelected = () => {
    setIsShowDropdown((state) => !state);
  };

  const handlerClickOutside = (event) => {
    const isOutsideOfSelected = !selectedRef.current?.contains(event.target);
    const isInsideOfItemList = itemListRef.current?.contains(event.target);
    if (isOutsideOfSelected && !isInsideOfItemList && isShowDropdown) {
      setIsShowDropdown(false);
    }
  };

  console.log("Render");

  return (
    <div className=" relative mx-5 my-5 w-full max-w-[400px] rounded-lg">
      <div
        ref={selectedRef}
        className=" p-3 w-full h-full border border-gray-300 rounded-lg bg-white cursor-pointer font-semibold "
        onClick={handlerClickSelected}
      >
        {ListItem[selectedIndex]}
      </div>
      {isShowDropdown && (
        <div
          ref={itemListRef}
          className="absolute left-0 top-full w-full border border-gray-300 rounded-lg bg-white font-semibold "
          style={{
            position: "relative",
          }}
        >
          {ListItem.map((item, index) => {
            return (
              <div
                className=" p-3 cursor-pointer "
                key={index}
                onClick={() => {
                  handlerClickItem(index);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
