import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import ScrollContainer from "react-scroll-horizontal";

function PreviewCard({ imageUrl }) {
  const containerRef = useRef(null);
  let scrollInterval;

  const [springProps, setSpringProps] = useSpring(() => ({
    transform: "translateX(0%)",
    transition: "transform 10s linear",
  }));

  const startScroll = () => {
    scrollInterval = setInterval(() => {
      const container = containerRef.current;
      if (container) {
        container.scrollLeft += 1;
      }
    }, 100);
  };

  const stopScroll = () => {
    clearInterval(scrollInterval);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("mouseenter", startScroll);
    container.addEventListener("mouseleave", stopScroll);

    return () => {
      container.removeEventListener("mouseenter", startScroll);
      container.removeEventListener("mouseleave", stopScroll);
    };
  }, []);

  return (
    <div className="group w-80 h-80 m-4 overflow-hidden shadow-lg rounded-lg relative transform transition-all duration-200 hover:scale-105">
      <ScrollContainer ref={containerRef} className="h-full">
        <animated.img
          src={imageUrl}
          alt="website"
          className="w-full h-full object-cover"
          style={springProps}
        />
      </ScrollContainer>
      <div className="absolute inset-0 bg-white opacity-30 group-hover:opacity-0 transition-opacity duration-200"></div>
    </div>
  );
}

export default PreviewCard;
