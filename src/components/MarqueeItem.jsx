/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const TestimonialCard = ({ testimonial, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="w-96 h-[23vw] bg-[#131313] rounded-sm p-6 mr-2 flex flex-col justify-between"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden mr-3">
            <img
              src={testimonial.logo || "/api/placeholder/48/48"}
              alt={testimonial.company}
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className="text-white font-semibold">{testimonial.company}</span>
        </div>
        <div className="flex space-x-2">
          <a
            href={testimonial.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-500" />
          </a>
          <a
            href={testimonial.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-blue-500" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <img src="/quotes.png" className="w-14 -ml-4" alt="Quotes" />
        <div className="w-full h-0.5 bg-white ml-2"></div>
      </div>
      <p className="text-white text-base leading-tight">{testimonial.quote}</p>
    </div>
  );
};

const MarqueeItem = ({ testimonials, from, to }) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [currentPosition, setCurrentPosition] = useState(from);

  useEffect(() => {
    controls.start({
      x: to,
      transition: {
        duration: 55,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls, to]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
    setCurrentPosition(controls.get("x"));
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    controls.start({
      x: to,
      transition: {
        duration: 55,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  return (
    <div className="flex overflow-hidden" ref={containerRef}>
      <motion.div
        animate={controls}
        style={{ x: currentPosition }}
        className="flex flex-shrink-0"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </motion.div>
      <motion.div
        animate={controls}
        style={{ x: currentPosition }}
        className="flex flex-shrink-0"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;