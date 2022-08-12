import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const handlerMousever = (e) => {
      setHovered(true);
    };
    const handleMouseut = (e) => {
      setHovered(false);
    };

    const currentNodeRef = nodeRef.current;
    if (currentNodeRef) {
      currentNodeRef.addEventListener("mouseover", handlerMousever);
      currentNodeRef.addEventListener("mouseout", handleMouseut);
    }

    return () => {
      if (currentNodeRef) {
        currentNodeRef.removeEventListener("mouseover", handlerMousever);
        currentNodeRef.removeEventListener("mouseout", handleMouseut);
      }
    };
  }, []);

  return { hovered, nodeRef };
};
