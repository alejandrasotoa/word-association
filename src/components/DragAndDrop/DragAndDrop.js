import { useCallback, useState } from "react";

import { DragButton } from "../DragButton/DragButton";
import { DropArea } from "../DropArea/DropArea";

const DragAndDrop = ({ playableItems }) => {
  const [results, setResults] = useState({});
  const msg = new SpeechSynthesisUtterance();

  // memoizing the elements to avoid unnecesary rerenders.
  const getPlayableItems = useCallback(
    () => playableItems.sort(() => Math.random() - 0.5),
    [playableItems]
  );

  const handleDragStart = (e, name) => {
    e.dataTransfer.setData("nameDrag", name);
  };

  const handleDrop = (e, target) => {
    const { id } = e.target;
    msg.text = target;
    window.speechSynthesis.speak(msg);
    console.log({id, target, e})
    if (id === target) {
      setResults((prevState) => ({ ...prevState, [target]: "success" }));
    }
  };

  const handleDragOver = (e, target) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="drag__container">
        {getPlayableItems().map(({ id, name, color }) => (
          <DragButton
            key={id + ""}
            handleDragStart={handleDragStart}
            name={name}
            color={color}
          />
        ))}
      </div>
      <div className="drop__container">
        {getPlayableItems().map(({ id, name, image }) => (
          <DropArea
            key={id + ""}
            name={name}
            image={image}
            succeed={!!results[id]}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
          />
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
