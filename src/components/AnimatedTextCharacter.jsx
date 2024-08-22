import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedTextCharacter = ({
  text,
  fontSize,
  textAlign = "left",
  stagger,
}) => {
  // Split text by line breaks (using \n as a delimiter)
  const lines = text.split("\n");

  // Create a reference to the component
  const ref = useRef(null);

  // Detect if the component is in view
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref} // Attach the reference to the container div
      style={{
        overflow: "hidden",
        display: "inline-block", // Allow wrapping
        fontSize: fontSize, // Apply font size
        textAlign: textAlign, // Apply text alignment from props
      }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger the animation based on isInView
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} style={{ display: "block" }}>
          {Array.from(line).map((letter, index) => (
            <motion.span
              key={index}
              variants={child}
              style={{
                display: "inline-block", // Ensure each letter is inline-block for animation
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
          {/* Add a line break after each line except the last one */}
          {lineIndex < lines.length - 1 && <br />}
        </div>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
