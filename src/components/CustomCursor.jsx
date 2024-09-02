import { useEffect, useRef, useState } from 'react';


const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailContainerRef = useRef(null);
  const [hideCursorTimeout, setHideCursorTimeout] = useState(null);

  const createTrail = (x, y) => {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = `${x - 75}px`;
    trail.style.top = `${y - 75}px`;
    trail.style.opacity = 1;
    trailContainerRef.current.appendChild(trail);

    setTimeout(() => {
      trail.style.opacity = 0;
      setTimeout(() => trail.remove(), 1000);
    }, 1000);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      clearTimeout(hideCursorTimeout);

      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
      cursorRef.current.style.opacity = 1;

      createTrail(e.clientX, e.clientY);

      setHideCursorTimeout(setTimeout(() => {
        cursorRef.current.style.opacity = 0;
      }, 500));
    };

    const handleMouseOut = () => {
      cursorRef.current.style.opacity = 0;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [hideCursorTimeout]);

  return (
    <>
      <div id="cursor" className="cursor" ref={cursorRef}></div>
      <div className="trail-container" ref={trailContainerRef}></div>
    </>
  );
};

export default CustomCursor;
