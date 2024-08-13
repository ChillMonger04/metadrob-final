const SeamlessIntegration = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black mt-20">
      <div className="absolute inset-0 flex justify-around">
        <div className="relative w-[20px] h-SCREEN overflow-hidden">
          <div className="w-[10px] h-[20%] bg-white animate-scroll-full"></div>
        </div>
        <div className="relative w-[20px] h-full overflow-hidden">
          <div className="w-[10px] h-[20%] bg-white animate-scroll-full"></div>
        </div>
        <div className="relative w-[20px] h-full overflow-hidden">
          <div className="w-[10px] h-[20%] bg-white animate-scroll-full"></div>
        </div>
        <div className="relative w-[20px] h-full overflow-hidden">
          <div className="w-[10px] h-[20%] bg-white animate-scroll-full"></div>
        </div>
        <div className="relative w-[20px] h-full overflow-hidden">
          <div className="w-[10px] h-[20%] bg-white animate-scroll-full"></div>
        </div>
      </div>
      
      <div className="z-10 w-[70%]">
        <img
          src="https://your-image-url.com"
          alt="Virtual Store Integration"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default SeamlessIntegration;
