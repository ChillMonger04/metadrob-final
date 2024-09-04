import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const cardData = [
  {
    title: "Virtual Showroom",
    description: "Our smooth integration streamlines your business, connecting",
    image: "/store.png",
  },
  {
    title: "Pop Up Store",
    description: "Our smooth integration streamlines your business, connecting",
    image: "/house.png",
  },
  {
    title: "Digital Twin",
    description: "Our smooth integration streamlines your business, connecting",
    image: "/computer.png",
  },
  {
    title: "Shop with friends",
    description: "Our smooth integration streamlines your business, connecting",
    image: "/friends.png",
  },
  {
    title: "Virtual Showroom",
    description: "Our smooth integration streamlines your business, connecting",
    image: "/store.png",
  },
  {
    title: "Pop Up Store",
    description: "Our smooth integration streamlines your business, connecting",
    image: "/house.png",
  },
  {
    title: "Digital Twin",
    description: "Our smooth integration streamlines your business, connecting",
    image: "/computer.png",
  },
  {
    title: "Shop with friends",
    description: "Our smooth integration streamlines your business, connecting",
    image: "/friends.png",
  },
];

const Solutions = () => {
  const [width, setWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);
  const scrollbarRef = useRef(null);
  const isDraggingScrollbar = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const scrollWidth =
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
      setWidth(scrollWidth);
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleCarouselScroll = () => {
      if (carouselRef.current && scrollbarRef.current) {
        const scrollPercentage = carouselRef.current.scrollLeft / width;
        const scrollbarWidth =
          scrollbarRef.current.parentNode.offsetWidth -
          scrollbarRef.current.offsetWidth;
        scrollbarRef.current.style.left = `${
          scrollPercentage * scrollbarWidth
        }px`;
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("scroll", handleCarouselScroll);
      return () => {
        carouselElement.removeEventListener("scroll", handleCarouselScroll);
      };
    }
  }, [width]);

  const handleScrollbarDrag = (e, info) => {
    if (carouselRef.current && scrollbarRef.current) {
      const scrollbarContainer = scrollbarRef.current.parentNode;
      const scrollbarWidth =
        scrollbarContainer.offsetWidth - scrollbarRef.current.offsetWidth;
      const maxScroll =
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;

      let newScrollPosition =
        info.point.x - scrollbarContainer.getBoundingClientRect().left;
      newScrollPosition = Math.max(
        0,
        Math.min(newScrollPosition, scrollbarWidth)
      );

      const scrollPercentage = newScrollPosition / scrollbarWidth;
      const newCarouselPosition = scrollPercentage * maxScroll;

      setScrollPosition(newCarouselPosition);
      carouselRef.current.scrollLeft = newCarouselPosition;
    }
  };

  const handleCarouselDrag = (e, info) => {
    if (carouselRef.current && scrollbarRef.current) {
      const maxScroll =
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
      const scrollPercentage = carouselRef.current.scrollLeft / maxScroll;

      const scrollbarWidth =
        scrollbarRef.current.parentNode.offsetWidth -
        scrollbarRef.current.offsetWidth;

      scrollbarRef.current.style.left = `${
        scrollPercentage * scrollbarWidth
      }px`;
    }
  };

  const handleMouseDownScrollbar = (e) => {
    isDraggingScrollbar.current = true;

    const handleMouseMove = (event) => {
      if (isDraggingScrollbar.current) {
        handleScrollbarDrag(event, { point: { x: event.clientX } });
      }
    };

    const handleMouseUp = () => {
      isDraggingScrollbar.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="parent w-full min-h-screen px-16 mt-36 mb-24 text-white"
      data-scroll-section
    >
      <div className="sol-top child flex items-start justify-between mb-20">
        <TextReveal
          text="Unlock Next-Level Shopping: Innovative Virtual Retail Solutions for Your Business"
          className="text-[40px] w-[40%] font-semibold leading-[4vw]"
        />

        <TextReveal
          text="Virtual Retail Solutions redefine shopping convenience, bringing the store to your fingertips. Experience seamless online shopping like never before. Get a tailor-made solution for your retail business needs."
          className="text-[#b3b2b2] w-[42%] text-[1.21vw]"
        />
      </div>

      <motion.div
        ref={carouselRef}
        className="carousel overflow-x-hidden cursor-grab"
        onScroll={handleCarouselDrag}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex gap-5"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="group card bg-black/40 backdrop-blur-lg border border-transparent transition-all duration-300 ease-in-out w-[20vw] h-[30vw] flex-shrink-0 rounded-[2vw] p-5 flex flex-col items-center justify-center hover:border-gray-500 hover:scale-105"
            >
              <img className="w-52" src={card.image} alt={card.title} />
              <h3 className="mt-6 font-semibold uppercase text-[1.5vw]">
                {card.title}
              </h3>
              <p className="text-center mt-2 text-[#b3b2b2] text-[1.21vw]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="scrollbar-container mt-4 w-full h-4 bg-gray-700 rounded-full relative">
        <motion.div
          ref={scrollbarRef}
          className="scrollbar h-full bg-gray-500 rounded-full absolute"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={handleScrollbarDrag}
          onMouseDown={handleMouseDownScrollbar}
          style={{
            left: `${(scrollPosition / width) * 100}%`,
            width: `calc(100% / ${cardData.length})`, // Adjust width based on number of cards
          }}
        />
      </div>
    </div>
  );
};

export default Solutions;
