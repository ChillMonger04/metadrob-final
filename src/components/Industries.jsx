import Card from "./Card";
import TextReveal from "./TextReveal";

const cardData = [
  {
    index: "01",
    imgSrc: "/hoodie.png",
    title: "Apparels",
  },
  {
    index: "02",
    imgSrc: "/shoe.png",
    title: "Shoes",
  },
  {
    index: "03",
    imgSrc: "/watch.png",
    title: "Accessories",
  },
  {
    index: "04",
    imgSrc: "/sofa.png",
    title: "Furniture",
  },
  {
    index: "05",
    imgSrc: "/light.png",
    title: "Home Decor",
  },
  {
    index: "06",
    imgSrc: "/cosmetics.png",
    title: "Cosmetics & Skincare",
  },
  {
    index: "07",
    imgSrc: "/car.png",
    title: "Automobile",
  },
  {
    index: "08",
    imgSrc: "/necklace.png",
    title: "Jewelry",
  },
];

const Industries = () => {
  return (
    <div
      className="w-full min-h-screen text-white px-16 mt-44"
      data-scroll-section
    >
      <div className="industriesTop flex flex-col items-center justify-center text-center mb-16">
        <TextReveal
          text="Industries We Serve"
          className="text-[40px] w-[70%] font-semibold leading-none"
        />

        <TextReveal
          text="Explore Metadrob's industry-specific solutions, crafted to meet your unique needs and drive your success. Unlock your full potential with our tailored support and expertise."
          className="text-[#b3b2b2] w-[73%] text-[1.1vw] mt-[2vw]"
        />
      </div>

      <div className="cardContainer flex items-center justify-center gap-x-6 gap-y-16 flex-wrap">
        {cardData.map((item) => (
          <Card
            key={item.index}
            index={item.index}
            imgSrc={item.imgSrc}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Industries;
