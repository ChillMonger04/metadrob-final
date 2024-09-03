import { MdOutlineFileDownload } from "react-icons/md";
import TextReveal from "./TextReveal";

const Features = () => {
  return (
    <div
      className="w-full min-h-screen text-white mt-[18vw] mb-12"
      data-scroll-section
    >
      <div className="features-top flex flex-col items-center justify-center text-center">
        <TextReveal
          text="Innovative features for modern store"
          className="text-[40px] font-semibold"
        />

        <TextReveal
          text="Our industry-specific solutions are tailor-made to address your unique challenges and opportunities, providing specialized support to fuel your success in your field. Unlock the full potential of your business with precision and expertise."
          className="text-[#b3b2b2] w-[70%] text-[1.21vw] mt-[2vw]"
        />
      </div>

      <div className="features-wrapper px-32 flex mt-[4vw] text-white gap-6">
        <div className="features-left flex flex-col items-center justify-center gap-6">
          <div className="feature-card w-[40vw] h-[14vw] rounded-[1.6vw] bg-black border border-gray-500 relative overflow-hidden cursor-pointer flex items-center justify-center">
            <div className="feature-content z-50  flex flex-col items-center justify-center gap-4">
              <h2 className="text-[2vw] leading-[2.7vw] font-bold w-[60%] text-center">
                Turn collaboration into innovation
              </h2>
              <h3 className="flex items-center justify-center gap-2">
                View Feature List <MdOutlineFileDownload />
              </h3>
            </div>

            <div className="circle-right absolute top-[4vw] left-[19vw] z-20 w-[40vw] h-[40vw] bg-black rounded-full shadow-[-9.35px_-12.35px_50px_rgba(128,_128,_128,_0.7)]"></div>
            <div className="circle-left absolute -top-[28vw] right-[24vw] z-20 w-[40vw] h-[40vw] bg-black rounded-full shadow-[0_15.35px_50px_rgba(128,_128,_128,_0.7)]"></div>
          </div>

          <div className="feature-card w-[40vw] h-[25vw] rounded-[1.6vw] bg-[#EAEEF2] flex items-end justify-start overflow-hidden">
            <div className="feature-content w-[20vw] h-[13vw] text-black px-5 pt-10">
              <h2 className="font-bold leading-tight text-[1.6vw]">
                Content Management System
              </h2>
              <p className="text-gray-900 text-[1vw] leading-[1vw] mt-3">
                Effortlessly manage and customize your content with Easy CMS.
                Take control of your digital presence and data with ease.
              </p>
            </div>
          </div>
        </div>

        <div className="feature-right flex flex-col items-center justify-start gap-6">
          <div className="feature-card bg-[#EAEEF2] w-[40vw] h-[19.3vw] rounded-[1.6vw] flex items-end justify-start overflow-hidden">
            <div className="feature-content w-[20vw] h-[13vw] text-black px-5 pt-10">
              <h2 className="font-bold leading-tight text-[1.6vw]">
                Cross Device Play
              </h2>
              <p className="text-gray-900 text-[1vw] leading-[1vw] mt-3">
                Manage your store effortlessly and let customers shop from any
                device with our flexible cross-device functionality. Seamlessly
                switch between devices and stay in control.
              </p>
            </div>
          </div>

          <div className="feature-card bg-[#EAEEF2] w-[40vw] h-[19.7vw] rounded-[1.6vw] flex items-start justify-end overflow-hidden">
            <div className="feature-content w-[20vw] h-[13vw] text-black px-5 pt-5">
              <h2 className="font-bold leading-tight text-[1.6vw]">
                Virtual Try On
              </h2>
              <p className="text-gray-900 text-[1vw] leading-[1vw] mt-3">
                Elevate your shopping experience with Virtual Try-on technology,
                allowing you to see how products look on you before you buy. Try
                before you buy, virtually!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
