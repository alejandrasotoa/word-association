import React from "react";

import "./DragButton.css";

export const DragButton = ({ name, color, handleDragStart }) => (
  <button
    className="drag__button"
    id={name}
    style={{ backgroundColor: color }}
    onDragStart={(e) => handleDragStart(e, name)}
    draggable="true"
  >
    {name}
  </button>
);
