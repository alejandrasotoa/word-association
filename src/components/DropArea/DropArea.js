import React from "react";

import check from "../../assets/check.png";

import "./DropArea.css";

export const DropArea = ({
  name,
  image,
  handleDrop,
  handleDragOver,
  succeed,
}) => (
  <div className={`drop__element drop__element${succeed ? "--succeed" : ""}`}>
    <img
      id="drop-area"
      className="drop__image"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, name)}
      src={image}
      alt="Display the word match."
    />
    {succeed && (
      <img className="drop__feedback" src={check} alt="Word found!" />
    )}
  </div>
);
