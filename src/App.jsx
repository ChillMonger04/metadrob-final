import React from "react";
import Introduction from "./components/Introduction";
import Solutions from "./components/Solutions";
import Features from "./components/Features";
import Integration from "./components/Integration";
import Productivity from "./components/Productivity";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <CustomCursor />
      <div className="componentContainer">
        <Introduction />
        <Solutions />
        <Features />
        <Integration />
        <Productivity />
        <Industries />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default App;
