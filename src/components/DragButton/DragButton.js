import React from "react";

import "./DragButton.css";

export const DragButton = ({ name, color, handleDragStart, started }) => (
  <button
    className="drag__button"
    id={name}
    style={{ backgroundColor: color }}
    onDragStart={(e) => handleDragStart(e, name)}
    disabled={started}
    draggable="true"
  >
    {name}
  </button>
);
