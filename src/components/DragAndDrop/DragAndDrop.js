import { useMemo, useState } from "react";
import PropTypes from "prop-types";

import {
  STATUS_COMPLETED,
  STATUS_ENDED,
  STATUS_STARTED,
} from "../../constants";

import { DragButton } from "../DragButton/DragButton";
import { DropArea } from "../DropArea/DropArea";

const DragAndDrop = ({ playableItems }) => {
  const [results, setResults] = useState({});
  const msg = new SpeechSynthesisUtterance();

  // memoizing the elements to avoid unnecesary rerenders.
  const playableItemsShuffled = useMemo(
    () => [...playableItems].sort(() => Math.random() - 0.5),
    [playableItems]
  );

  const handleDragStart = (e, name) => {
    e.dataTransfer.setData("nameDrag", name);
    setResults((prevState) => ({ ...prevState, [name]: STATUS_STARTED }));
  };

  const handleDrop = (e, target) => {
    const nameDragged = e.dataTransfer.getData("nameDrag");
    msg.text = target;
    window.speechSynthesis.speak(msg);
    if (nameDragged === target) {
      setResults((prevState) => ({ ...prevState, [target]: STATUS_COMPLETED }));
    } else {
      setResults((prevState) => ({
        ...prevState,
        [nameDragged]: STATUS_ENDED,
      }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="drag__container">
        {playableItems.map(({ id, name, buttonBackgroundColor }) => {
          const isCompleted =
            results[name] && results[name] === STATUS_COMPLETED;

          if (isCompleted) return null;
          return (
            <DragButton
              key={id + ""}
              handleDragStart={(e) => handleDragStart(e, name)}
              name={name}
              backgroundColor={buttonBackgroundColor}
              started={results[name] && results[name] === STATUS_STARTED}
            />
          );
        })}
      </div>
      <div className="drop__container">
        {playableItemsShuffled.map(({ id, name, image }) => (
          <DropArea
            key={id + ""}
            name={name}
            image={image}
            completed={results[name] && results[name] === STATUS_COMPLETED}
            handleDrop={(e) => handleDrop(e, name)}
            handleDragOver={handleDragOver}
          />
        ))}
      </div>
    </div>
  );
};

DragAndDrop.propTypes = {
  playableItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      buttonBackgroundColor: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default DragAndDrop;
