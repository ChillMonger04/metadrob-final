import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailContainerRef = useRef(null);
  const trailElements = useRef([]);
  const isMouseMoving = useRef(false);
  const hideCursorTimeoutRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trailContainer = trailContainerRef.current;

    const createTrail = (x, y) => {
      const trail = document.createElement("div");
      trail.classList.add("trail");
      trail.style.left = `${x - 75}px`;
      trail.style.top = `${y - 75}px`;
      trail.style.opacity = 1;
      trailContainer.appendChild(trail);

      setTimeout(() => {
        trail.style.opacity = 0;
        setTimeout(() => trail.remove(), 1000);
      }, 1000);

      trailElements.current.push(trail);
      if (trailElements.current.length > 20) {
        let oldTrail = trailElements.current.shift();
        oldTrail.remove();
      }
    };

    const handleMouseMove = (e) => {
      clearTimeout(hideCursorTimeoutRef.current);
      isMouseMoving.current = true;

      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.opacity = 1;

      createTrail(e.clientX, e.clientY);

      hideCursorTimeoutRef.current = setTimeout(() => {
        cursor.style.opacity = 0;
        isMouseMoving.current = false;
      }, 500);
    };

    const handleMouseOut = () => {
      cursor.style.opacity = 0;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="cursor-container">
      <div id="cursor" className="cursor" ref={cursorRef}></div>
      <div className="trail-container" ref={trailContainerRef}></div>
    </div>
  );
};

export default CustomCursor;
