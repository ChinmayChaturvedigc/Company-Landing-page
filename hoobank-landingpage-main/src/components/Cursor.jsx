import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const customRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - customRef.current.clientWidth / 2;
      const mouseY = clientY - customRef.current.clientWidth / 2;
      customRef.current.style.transform = `translate3d(${mouseX}px , ${mouseY}px,0)`;
    });
  }, []);
  return (
    <div
      ref={customRef}
      className=" z-40 rounded-[50%] w-[50px] h-[50px] border-4 border-cyan-500/50 pointer-events-none overflow-hidden transform translate-x-0 translate-y-0 translate-z-0 fixed "></div>
  );
};

export default Cursor;
