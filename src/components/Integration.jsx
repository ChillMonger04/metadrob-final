const SeamlessIntegration = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black mt-20">
      <div className="absolute inset-0 flex justify-around">
        <div className="relative w-[1.3px] h-[105vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"></div>
        </div>

        <div className="relative w-[1.3px] h-[105vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"></div>
        </div>

        <div className="relative w-[1.3px] h-[105vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"></div>
        </div>

        <div className="relative w-[1.3px] h-[105vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"></div>
        </div>

        <div className="relative w-[1.3px] h-[105vh] overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-gray-600/100 to-transparent"></div>
          <div className="w-[8px] h-[20%] rounded-full bg-white animate-scroll-full"></div>
        </div>
      </div>

      <div className="z-10 w-[80%] mt-16">
        <img
          src="integration.png"
          alt="Virtual Store Integration"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default SeamlessIntegration;
