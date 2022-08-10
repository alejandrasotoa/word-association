import { useState } from "react";
import "./App.css";

import potato from "./assets/potato.png";

function App() {
  const msg = new SpeechSynthesisUtterance();
  msg.text = "Potato";

  const [items, setItems] = useState([]);
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const handleDrop = (e, target) => {
    const { id } = e.target;
    window.speechSynthesis.speak(msg);
    if (target === "potato") {
      setItems((prevState) => [...prevState, target]);
    }
  };

  const handleDragOver = (e, target) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="drag__container">
        <div
          className="drag__text"
          onDragStart={handleDragStart}
          id="potato"
          draggable="true"
        >
          Potato
        </div>
      </div>
      <div className="drop__container">
        <img
          id="drop-potato"
          className="drop__image"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "potato")}
          src={potato}
        />
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
