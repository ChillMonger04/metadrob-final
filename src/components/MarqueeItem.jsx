/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const TestimonialCard = ({ testimonial, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="w-96 h-[23vw] bg-[#131313] rounded-sm p-6 mr-2 flex flex-col justify-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center justify-between mb-6">
        <img
          src={testimonial.logo}
          alt={testimonial.company}
          className="h-8 w-auto"
        />
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
      <div className="flex items-center justify-between">
        <img src="/quotes.png" className="w-14 -ml-4" />
        <div className="w-full h-1 bg-white"></div>
      </div>
      <p className="text-white text-base leading-tight mt-4">
        {testimonial.quote}
      </p>
    </div>
  );
};

const MarqueeItem = ({ testimonials, from, to }) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="flex overflow-hidden">
      <motion.div
        initial={{ x: from }}
        animate={{ x: isPaused ? from : to }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
        initial={{ x: from }}
        animate={{ x: isPaused ? from : to }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
