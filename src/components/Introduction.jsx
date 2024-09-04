const Introduction = () => {
  return (
    <div className="wrapper py-10 px-20" data-scroll-section>
      <div className="intro-top flex flex-col items-center">
        <h3 className="text-[1.21vw] text-[#939393]">
          The most innovative companies supported Metadrob
        </h3>
        <img
          src="/introBannerTransparent.png"
          alt="companies-banner"
          className="w-[70vw] leading-snug -mt-[10vw]"
        />
      </div>

      <div className="intro-center flex flex-col items-start text-white -mt-[2vw] w-[85%]">
        <h1 className="text-[83px] leading-[8vw]">
          GET READY TO LEVEL UP YOUR BUSINESS
        </h1>
        <p className="text-[#b3b2b2] w-[80%] text-[1.21vw] leading-tight mt-8 pl-4">
          Create your Virtual Showroom using just a few clicks and Level up the
          way your customers experience shopping! Be more interactive, realistic
          and exciting.
        </p>
      </div>

      <div className="intro-bottom flex items-center justify-center gap-8 mt-10">
        <div className="features flex items-center justify-start gap-10 w-[32.5%]">
          <h1 className="numText text-[55px] text-[#16F6FE] tracking-wider">
            2x
          </h1>
          <p className="text-white font-semibold text-[15px]">
            Automotive consumer kickstart their journey online
          </p>
        </div>

        <div className="features flex items-center justify-start gap-10 w-[40%]">
          <h1 className="numText text-[55px] text-[#16F6FE] tracking-wider">
            92%
          </h1>
          <p className="text-white font-semibold text-[15px]">
            Car enthusiasts turn to the web before making a purchase
          </p>
        </div>

        <div className="features flex items-center justify-start gap-10 w-[36.5%]">
          <h1 className="numText text-[55px] text-[#16F6FE] tracking-wider">
            14H
          </h1>
          <p className="text-white font-semibold text-[15px]">
            On average, car buyers invest hunting for that perfect ride
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
