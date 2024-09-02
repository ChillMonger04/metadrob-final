// import { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./locomotive-scroll.css"; // Ensure this path is correct

import Introduction from "./components/Introduction";
import Solutions from "./components/Solutions";
import Features from "./components/Features";
import Integration from "./components/Integration";
import Productivity from "./components/Productivity";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   // Initialize Locomotive Scroll
  //   gsap.registerPlugin(ScrollTrigger);
  //   if (scrollRef.current) {
  //     const scroll = new LocomotiveScroll({
  //       el: scrollRef.current,
  //       smooth: true,
  //       inertia: 0.8, // Adjust for performance
  //       multiplier: 0.8, // Adjust for performance
  //       smoothMobile: true, // Ensure smooth scrolling on mobile
  //     });

  //     return () => {
  //       scroll.destroy();
  //     };
  //   }
  // }, []);

  return (
    <div
      className="projectWrapper scroll-container"
      // data-scroll-container
      // ref={scrollRef}
    >
      <CustomCursor />
      <div className="bg-black z-20">
        <Introduction />
        <Solutions />
        <Features />
        <Integration />
        <Productivity />
        <Industries />
        <Testimonials />
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
