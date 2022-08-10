import React from "react";

import "./DropArea.css";

export const DropArea = ({
  name,
  image,
  handleDrop,
  handleDragOver,
  succeed,
}) => (
  <div>
    <img
      id="drop-area"
      className="drop__image"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, name)}
      src={image}
      alt="Display the word match."
    />
    {succeed && <div>Great!</div>}
  </div>
);
