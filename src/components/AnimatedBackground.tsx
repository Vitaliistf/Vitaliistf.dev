"use client";

// import { useEffect } from "react";

const AnimatedBackground = () => {
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  // const handleMouseMove = (e: MouseEvent) => {
  // setMousePos({ x: e.clientX, y: e.clientY });
  // };

  // window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <div className="fixed inset-0 z-0">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[rgb(36,36,36)] via-[rgb(46,46,46)] to-[rgb(36,36,36)]"></div> */}
      {/* <div 
        className="absolute w-96 h-96 bg-[rgb(230,170,120)] rounded-full opacity-5 blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
      ></div> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(230,170,120)]/5 to-transparent animate-pulse"></div> */}
    </div>
  );
};

export default AnimatedBackground;
