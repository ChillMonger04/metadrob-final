import Introduction from "./components/Introduction";
import Solutions from "./components/Solutions";
import Features from "./components/Features";
import Integration from "./components/Integration";
import Productivity from "./components/Productivity";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="bg-black">
      <Introduction />
      <Solutions />
      <Features />
      <Integration />
      <Productivity />
      <Industries />
      <Testimonials />
    </div>
  );
};

export default App;
