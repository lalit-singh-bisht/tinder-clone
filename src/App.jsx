import "./App.css";
import Header from "./components/Header/Header";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import TinderCards from "./components/TinderCards/TinderCards";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Cards */}
      <TinderCards />
      {/* Navigation buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
