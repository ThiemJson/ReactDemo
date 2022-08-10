import React, { useLayoutEffect, useRef, useState } from "react";

export const TextArea = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef();
  const [heightParent, setHeightParent] = useState(`auto`);

  useLayoutEffect(() => {
    setHeightParent(`${textareaRef.current.scrollHeight}px`);
  }, [text]);

  return (
    <div
      className="w-[40%] p-4 mx-auto mt-5 bg-white rounded-lg shadow-lg"
      style={{
        height: `auto`,
      }}
    >
      <textarea
        ref={textareaRef}
        className=" w-full p-3 border border-gray-400 rounded-[inherit] font-normal text-gray-600 overflow-hidden resize-none "
        style={{
          height: `${heightParent}`,
        }}
        onChange={(e) => {
          setText(e.target.value);
          setHeightParent(`auto`);
        }}
        value={text}
      ></textarea>
    </div>
  );
};
