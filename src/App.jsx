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

  // useEffect(() => {
  //   // Create and style the blob cursor
  //   const blob = document.createElement("div");
  //   blob.id = "blob";
  //   document.body.appendChild(blob);

  //   const numDots = 21;
  //   const dots = [];
  //   const mouse = { x: 0, y: 0 };

  //   for (let i = 0; i < numDots; i++) {
  //     const dot = document.createElement("div");
  //     dot.className = "trail";
  //     document.body.appendChild(dot);
  //     dots.push(dot);
  //   }

  //   // Update mouse position
  //   window.addEventListener(
  //     "mousemove",
  //     (event) => {
  //       mouse.x = event.pageX;
  //       mouse.y = event.pageY;
  //     },
  //     { passive: true }
  //   ); // Use passive listener

  //   function updateTrail() {
  //     let x = mouse.x;
  //     let y = mouse.y;

  //     dots.forEach((dot, index) => {
  //       const nextDot = dots[index + 1] || dots[0];
  //       dot.style.left = `${x}px`;
  //       dot.style.top = `${y}px`;
  //       x += (nextDot.style.left.replace("px", "") - x) * 0.6;
  //       y += (nextDot.style.top.replace("px", "") - y) * 0.6;
  //     });
  //   }

  //   function animate() {
  //     updateTrail();
  //     requestAnimationFrame(animate);
  //   }

  //   animate();

  //   // Center blob cursor on mouse
  //   window.addEventListener(
  //     "mousemove",
  //     (event) => {
  //       const blobWidth = blob.offsetWidth;
  //       const blobHeight = blob.offsetHeight;
  //       blob.style.left = `${event.pageX - blobWidth / 2}px`;
  //       blob.style.top = `${event.pageY - blobHeight / 2}px`;
  //     },
  //     { passive: true }
  //   ); // Use passive listener

  //   return () => {
  //     document.body.removeChild(blob);
  //     dots.forEach((dot) => document.body.removeChild(dot));
  //   };
  // }, []);

  return (
    <div
      className="projectWrapper scroll-container"
      // data-scroll-container
      // ref={scrollRef}
    >
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
