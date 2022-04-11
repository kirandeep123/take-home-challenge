import { useState, useEffect } from "react";
import "./App.css";
import Instructions from "./Instructions";
import SearchList from "./SearchList";
import Trigger from "./Trigger";
import SelectedOutput from "./SelectedOutput";

function App() {
  const [selected, setSelected] = useState("");
  const [isTriggered, setIsTriggered] = useState(false);
  const hotKeyPressed = (e) => {
    if (e.keyCode === 75 && (e.metaKey || e.ctrlKey)) {
      setIsTriggered(true);
    }
    if (e.keyCode === 27) {
      setIsTriggered(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", hotKeyPressed);
    return () => document.removeEventListener("keydown", hotKeyPressed);
  });
  const handleTrigger = (e) => {
    setIsTriggered(true);
  };

  const handleSelect = (data) => {
    setSelected(data);
  };

  return (
    <div className="App">
      <Instructions />
      <div className={!isTriggered ? "Implementation" : "triggered"}>
        <Trigger onTrigger={handleTrigger} />

        {/* Replace the Placeholder component below with your implementation */}
        {isTriggered ? <SearchList handleSelect={handleSelect} /> : ""}
        <SelectedOutput selected={selected} />
      </div>
    </div>
  );
}

export default App;
