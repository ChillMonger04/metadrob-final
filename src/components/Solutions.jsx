import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const cardData = [
  {
    title: "Virtual Showroom",
    description: "Our smooth integration streamlines your business, connecting",
    image: "store.png",
  },
  {
    title: "Pop Up Store",
    description: "Our smooth integration streamlines your business, connecting",
    image: "house.png",
  },
  {
    title: "Digital Twin",
    description: "Our smooth integration streamlines your business, connecting",
    image: "computer.png",
  },
  {
    title: "Shop with friends",
    description: "Our smooth integration streamlines your business, connecting",
    image: "friends.png",
  },
  {
    title: "Shop with friends",
    description: "Our smooth integration streamlines your business, connecting",
    image: "friends.png",
  },
  {
    title: "Shop with friends",
    description: "Our smooth integration streamlines your business, connecting",
    image: "friends.png",
  },
  {
    title: "Shop with friends",
    description: "Our smooth integration streamlines your business, connecting",
    image: "friends.png",
  },
  {
    title: "Shop with friends",
    description: "Our smooth integration streamlines your business, connecting",
    image: "friends.png",
  },
];

const Solutions = () => {
  const [width, setWidth] = useState(0);

  // To grab the width of the parent carousel
  const carouselWidth = useRef();

  // To set the width of carousel on mount of component
  useEffect(() => {
    console.log(
      "Carousel Width: " + carouselWidth.current.scrollWidth,
      carouselWidth.current.offsetWidth
    );
    setWidth(
      carouselWidth.current.scrollWidth - carouselWidth.current.offsetWidth
    );
  }, []);

  return (
    <div className="w-full min-h-screen px-16 mt-36 mb-24 text-white">
      <div className="sol-top flex items-start justify-between mb-20">
        <h2 className="text-[43px] w-[40%] font-semibold leading-[4vw]">
          Unlock Next-Level Shopping: Innovative Virtual Retail Solutions for
          Your Business
        </h2>
        <p className="text-[#b3b2b2] w-[42%] text-[1.21vw]">
          Virtual Retail Solutions redefine shopping convenience, bringing the
          store to your fingertips. Experience seamless online shopping like
          never before. Get a tailor-made solution for your retail business
          needs.
        </p>
      </div>

      <motion.div
        ref={carouselWidth}
        className="carousel cursor-grab text-white overflow-x-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex gap-5"
        >
          {cardData.map((card, index) => {
            return (
              <motion.div
                key={index}
                className="card bg-gray-600 w-[20vw] h-[30vw] flex-shrink-0 overflow-x-auto rounded-[2vw] p-5 flex flex-col items-center justify-center"
              >
                <img className="w-52" src={card.image} alt={card.title} />
                <h3 className="mt-6 font-semibold uppercase text-[1.5vw]">
                  {card.title}
                </h3>
                <p className="text-center mt-2 text-[#b3b2b2] text-[1.21vw]">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Solutions;
