import Introduction from "./components/Introduction";
import Solutions from "./components/Solutions";
import Features from "./components/Features";
import Integration from "./components/Integration";
import Productivity from "./components/Productivity";

const App = () => {
  return (
    <div className="bg-black">
      <Introduction />
      <Solutions />
      <Features />
      <Integration />
      <Productivity />
    </div>
  );
};

export default App;
