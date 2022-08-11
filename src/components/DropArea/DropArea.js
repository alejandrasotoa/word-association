import React from "react";
import PropTypes from "prop-types";

import check from "../../assets/check.png";

import "./DropArea.css";

export const DropArea = ({
  image,
  handleDrop,
  handleDragOver,
  completed,
}) => (
  <div
    className={`drop__element drop__element${completed ? "--completed" : ""}`}
  >
    <img
      id="drop-area"
      className="drop__image"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      src={image}
      alt="Display the word match."
    />
    {completed && (
      <img className="drop__feedback" src={check} alt="Word found!" />
    )}
  </div>
);

DropArea.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleDrop: PropTypes.func.isRequired,
  handleDragOver: PropTypes.func.isRequired,
  completed: PropTypes.bool,
};
