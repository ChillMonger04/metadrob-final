import Introduction from "./components/Introduction";
import Solutions from "./components/Solutions";
import Features from "./components/Features";
import Integration from "./components/Integration";

const App = () => {
  return (
    <div className="bg-black">
      <Introduction />
      <Solutions />
      <Features />
      <Integration />
    </div>
  );
};

export default App;
