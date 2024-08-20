const Card = ({ index, imgSrc, title }) => {
  return (
    <div className="relative max-w-[20vw]">
      {/* This wrapper div will receive the hover effect */}
      <div className="group relative cursor-pointer">
        <div className="relative z-10 h-[27vw] transform transition-transform duration-500 group-hover:-translate-y-12 bg-[#18191D] text-white p-3 rounded-lg shadow-lg">
          <div className="relative flex flex-col justify-start text-white">
            <h5 className="font-bold text-[#dadada] opacity-70">{index}</h5>
            <div className="cardImgContainer rounded-lg w-56 h-44 overflow-hidden -mt-1">
              <img
                src={imgSrc}
                alt="cardImg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        {/* "Explore More" button with the same hover effect */}
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
