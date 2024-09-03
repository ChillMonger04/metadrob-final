import React from 'react';
import { motion } from 'framer-motion';
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
      <div className="flex items-center justify-between mb-2"> {/* Changed mb-6 to mb-2 */}
        <img src="/quotes.png" className="w-14 -ml-4" />
        <div className="w-full h-0.5 bg-white ml-2"></div> {/* Changed h-1 to h-0.5 for a thinner line */}
      </div>
      <p className="text-white text-base leading-tight">{testimonial.quote}</p>
    </div>
  );
};

const MarqueeItem = ({ testimonials, from, to }) => {
  const [isPaused, setIsPaused] = React.useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="flex overflow-hidden">
      <motion.div
        initial={{ x: from }}
        animate={{ x: isPaused ? from : to }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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