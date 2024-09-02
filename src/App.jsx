import Introduction from "./components/Introduction";
import Solutions from "./components/Solutions";
import Features from "./components/Features";
import Integration from "./components/Integration";
import Productivity from "./components/Productivity";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <>
      <CustomCursor />
      <div className="componentContainer bg-black">
        <Introduction />
        <Solutions />
        <Features />
        <Integration />
        <Productivity />
        <Industries />
        <Testimonials />
        <ContactForm />
      </div>
    </>
  );
};

export default App;