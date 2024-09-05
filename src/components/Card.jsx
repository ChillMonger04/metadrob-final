const Card = ({ index, imgSrc, title }) => {
  return (
    <div className="relative max-w-[20.5vw]">
      {/* Wrapper div with hover effect */}
      <div className="group relative cursor-pointer">
        <div className="relative z-10 bg-[#18191D] text-white p-4 pb-10 rounded-lg shadow-lg transition-transform duration-500 transform group-hover:-translate-y-12">
          {/* Number on the top-left with added left padding */}
          <div className="absolute top-2 left-2 pl-2">
            <h5 className="font-bold text-[#dadada] opacity-70">{index}</h5>
          </div>

          {/* Image in the center */}
          <div className="flex justify-center mt-4">
            <div className="cardImgContainer rounded-lg w-56 h-44 overflow-hidden">
              <img
                src={imgSrc}
                alt="cardImg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text below the image, left-aligned */}
          <div className="mt-4">
            <h2 className="text-[1.78vw] font-bold leading-none">{title}</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* "Explore More" button */}
        <div className="absolute inset-x-0 bottom-0 z-0 h-12 flex items-center justify-center bg-[#16F6F6] rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <button className="text-black opacity-85 font-semibold">
            EXPLORE MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
