import TextReveal from "./TextReveal";

const Productivity = () => {
  return (
    <div className="w-full min-h-screen text-white px-40 mt-12">
      <div className="productivityTop flex flex-col items-center justify-center text-center">
        <TextReveal
          text="Increase productivity with advanced product management"
          className="text-[40px] w-[70%] font-semibold"
        />

        <TextReveal
          text="Our industry-specific solutions are tailor-made to address your unique challenges and opportunities, providing specialized support to fuel your success in your field. Unlock the full potential of your business with precision and expertise."
          className="text-[#b3b2b2] w-[90%] text-[1.1vw] mt-[2vw]"
        />
      </div>

      <div className="productivityWrapper mt-6 flex flex-col gap-4 text-black">
        {/* Top card */}
        <div className="productivityCardTop w-full h-[57vh] bg-gradient-to-r from-slate-300 via-pink-200 to-pink-300 relative">
          <div className="productivityCardTopText w-[22vw] h-[8vw] p-5">
            <h2 className="font-bold leading-tight text-[1.6vw]">
              Drag-n-drop Builder
            </h2>
            <p className="text-gray-900 text-[0.9vw] leading-[1vw] mt-3">
              Quickly rearrange your webinar’s sequence of actions and instantly
              generate an agenda that auto-updates as you move actions around.
            </p>
          </div>
          <img
            src="/productivity-top.png"
            className="absolute -bottom-[2.6%] -right-[5%] w-[46vw] h-[49.4vh] object-cover"
            alt="Productivity Top"
          />
        </div>

        {/* Bottom cards */}
        <div className="productivityCardBottomWrapper w-full h-[57vh] relative flex items-center justify-between">
          {/* Card 1 */}
          <div className="productivityCardBottom h-full w-[32.5%] bg-[#FFFFFF14] text-white relative overflow-hidden">
            <div className="w-[19vw] h-[8vw] p-5">
              <h2 className="font-bold leading-tight text-[1.6vw]">Scalable</h2>
              <p className="text-[#FFFFFFA6] text-[0.9vw] leading-[1vw] mt-1">
                Brand the entire experience including registration pages,
                emails, backdrops, logo placements, fonts, overlays, and photo
                booth templates.
              </p>
            </div>
            <img
              src="/bottom-1.png"
              className="absolute -bottom-[14%] -right-1 mt-1"
              alt="Scalable"
            />
          </div>

          {/* Card 2 */}
          <div className="productivityCardBottom h-full w-[32.5%] bg-[#FFFFFF14] text-white relative overflow-hidden">
            <div className="w-[19vw] h-[8vw] p-5">
              <h2 className="font-bold leading-tight text-[1.6vw]">
                Lightning Fast
              </h2>
              <p className="text-[#FFFFFFA6] text-[0.9vw] leading-[1vw] mt-1">
                Add & Manage your products lighting fast with metadrob’s import
                CSV feature or connect with existing e commerce to directly
                import fr
              </p>
            </div>
            <img
              src="/bottom-2.png"
              className="absolute -bottom-[14%] -right-1 mt-2"
              alt="Lightning Fast"
            />
          </div>

          {/* Card 3 */}
          <div className="productivityCardBottom h-full w-[32.5%] bg-[#FFFFFF14] text-white relative overflow-hidden">
            <div className="w-[19vw] h-[8vw] p-5">
              <h2 className="font-bold leading-tight text-[1.6vw]">
                Predictive analytics
              </h2>
              <p className="text-[#FFFFFFA6] text-[0.9vw] leading-[1vw] mt-1">
                Invite speakers to a private waiting room to meet and prep to go
                on stage.
              </p>
            </div>
            <img
              src="/bottom-3.png"
              className="absolute -bottom-[14%] -right-1 mt-1"
              alt="Predictive Analytics"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
