const SeamlessIntegration = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black mt-20">
      <div className="absolute inset-0 flex justify-around">
        <div className="relative w-[1.3px] h-[124vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"></div>
        </div>

        <div className="relative w-[1.3px] h-[124vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"></div>
        </div>

        <div className="relative w-[1.3px] h-[124vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"></div>
        </div>

        <div className="relative w-[1.3px] h-[124vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"></div>
        </div>

        <div className="relative w-[1.3px] h-[124vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"></div>
        </div>
      </div>

      <div className="z-10 w-[80%] mt-16 text-white">
        <div className="integrationContent flex flex-col items-center justify-center">
          <h1 className="text-[40px] font-semibold leading-none">Seamless Integration</h1>
          <p className="text-[#b3b2b2] w-[90%] text-[1.1vw] mt-[2vw] text-center">
            Our smooth integration streamlines your business, connecting your
            online store with powerful tools to boost efficiency and growth.
            Embrace the future of retail with seamless digital solutions and
            integration with third-party e-commerce platforms.
          </p>
        </div>

        <img
          src="/integration.png"
          alt="Virtual Store Integration"
          className="w-full h-auto rounded-lg mt-16"
        />
      </div>
    </div>
  );
};

export default SeamlessIntegration;
