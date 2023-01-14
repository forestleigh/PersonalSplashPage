import React from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      // update state and normalize cursor postion based on window size
      setMousePosition({ x: (ev.clientX / window.innerWidth).toFixed(2), y: (ev.clientY/ window.innerWidth).toFixed(2) });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

