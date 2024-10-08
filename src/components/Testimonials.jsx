import MarqueeItem from "./MarqueeItem";
import TextReveal from "./TextReveal";

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
  {
    id: 4,
    company: "Mangal Electrical",
    logo: "/path/to/",
    quote:
      "Let your customers explore your retail store like they are walking through it with real experience of the products and location.",
    linkedIn: "https://linkedin.com/company/arjiv",
    facebook: "https://facebook.com/arjiv",
  },
  {
    id: 5,
    company: "Dynamic Cables",
    logo: "/path/to/",
    quote:
      "Let your customers explore your retail store like they are walking through it with real experience of the products and location.",
    linkedIn: "https://linkedin.com/company/arjiv",
    facebook: "https://facebook.com/arjiv",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full h-screen text-white mt-40">
      <div className="testimonial-top flex flex-col items-center justify-center mb-16">
        <TextReveal
          text="What are Clients are saying"
          className="text-[40px] font-semibold"
        />
      </div>
      <MarqueeItem testimonials={testimonials} from="0%" to="-100%" />
    </div>
  );
};

export default Testimonials;
