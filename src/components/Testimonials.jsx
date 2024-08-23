import MarqueeItem from "./MarqueeItem"; // Import the MarqueeItem component

const testimonials = [
  {
    id: 1,
    company: "Hashi Jewellery",
    logo: "/path/to/hashi-logo.png",
    quote:
      "Let your customers explore your retail store like they are walking through it with real experience of the products and location.",
    linkedIn: "https://linkedin.com/company/hashi-jewellery",
    facebook: "https://facebook.com/hashijewellery",
  },
  {
    id: 2,
    company: "Philips Signify",
    logo: "/path/to/philips-logo.png",
    quote:
      "Let your customers explore your retail store like they are walking through it with real experience of the products and location.",
    linkedIn: "https://linkedin.com/company/philips-signify",
    facebook: "https://facebook.com/philipssignify",
  },
  {
    id: 3,
    company: "Arjiv",
    logo: "/path/to/arjiv-logo.png",
    quote:
      "Let your customers explore your retail store like they are walking through it with real experience of the products and location.",
    linkedIn: "https://linkedin.com/company/arjiv",
    facebook: "https://facebook.com/arjiv",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="w-full h-screen text-white mt-40" data-scroll-section>
      <h1 className="flex flex-col items-center justify-center text-[40px] font-semibold mb-16">
        What are Clients are saying
      </h1>
      <MarqueeItem testimonials={testimonials} from="0%" to="-100%" />
    </div>
  );
};

export default Testimonials;
