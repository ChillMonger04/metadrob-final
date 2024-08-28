import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Define the TextReveal component
const TextReveal = ({ text, className = "" }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.25"],
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <React.Fragment key={i}>
            <Word
              progress={scrollYProgress}
              range={[start, end]}
              delay={i * 0.1} // Add a small delay for each word
            >
              {word}
            </Word>
            {i < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// Define the Word component for individual word animation
const Word = ({ children, progress, range, delay }) => {
  // Smooth opacity transformation with delay
  const opacity = useSpring(
    useTransform(progress, [range[0], range[1]], [0, 1]),
    {
      damping: 21,
      stiffness: 100,
      delay: delay, // Apply the delay here
    }
  );

  return (
    <span className="relative inline-block">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }} className="relative">
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
