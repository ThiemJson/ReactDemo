import React, { useEffect, useRef, useState } from "react";

export const SideMenu = () => {
  const [isShowSideMenu, setIsShowSideMenu] = useState(false);
  const buttonMenuRef = useRef(null);
  const menuRef = useRef(null);

  const handleClickOpenSideMenu = () => {
    setIsShowSideMenu(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {};
    return () => {};
  }, []);

  return (
    <div>
      <button
        ref={buttonMenuRef}
        className=" ml-6 mt-4 w-32 h-8 rounded-lg bg-green-500 text-white font-semibold text-center "
        onClick={handleClickOpenSideMenu}
      >
        Select
      </button>
      {isShowSideMenu && (
        <div
          ref={menuRef}
          className=" fixed top-0 bottom-0 left-0 w-full max-w-[200px] h-full rounded-tr-2xl rounded-br-2xl bg-slate-300 transition-all "
        ></div>
      )}
    </div>
  );
};
