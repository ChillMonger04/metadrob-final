import React, { useState } from "react";
import TextReveal from "./TextReveal";

const SeamlessIntegration = () => {
  // State to track if the video should be displayed
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="parentIntegration relative flex items-center justify-center min-h-screen mt-20">
      <div className="absolute inset-0 flex justify-around">
        {/* Your scrolling lines */}
        <div className="relative w-[1.3px] h-[124vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div
            className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"
            style={{ animationDelay: "0s" }}
          ></div>
        </div>

        <div className="relative w-[1.3px] h-[124vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div
            className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative w-[1.3px] h-[124vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div
            className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="relative w-[1.3px] h-[124vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div
            className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative w-[1.3px] h-[124vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div
            className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"
            style={{ animationDelay: "2.5s" }}
          ></div>
        </div>
      </div>

      <div className="integrationContent z-10 w-[80%] mt-16 text-white">
        <div className="integrationContent flex flex-col items-center justify-center">
          <TextReveal
            text="Seamless Integration"
            className="text-[40px] font-semibold"
          />

          <TextReveal
            text="Our smooth integration streamlines your business, connecting your online store with powerful tools to boost efficiency and growth. Embrace the future of retail with seamless digital solutions and integration with third-party e-commerce platforms."
            className="text-[#b3b2b2] w-[90%] text-[1.1vw] mt-[2vw] text-center"
          />
        </div>

        {/* Hover image or video section */}
        <div
          className="relative w-full max-w-4xl mx-auto rounded-lg mt-16 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image and Video Container */}
          <div className="relative w-full h-[500px]">
            <img
              src="/integration.png"
              alt="Virtual Store Integration"
              className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"}`}
            />
            <video
              src="/integrationVideo.mp4"
              autoPlay
              muted
              loop
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}
            ></video>
          </div>
        </div>

        <img
          src="/integrationBottom.png"
          alt="Integrate with sites"
          className="w-full -mt-40"
        />
      </div>
    </div>
  );
};

export default SeamlessIntegration;
