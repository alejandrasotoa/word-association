import React from "react";
import PropTypes from "prop-types";

import "./DragButton.css";

export const DragButton = ({ name, color, handleDragStart, started }) => (
  <button
    className="drag__button"
    id={name}
    style={{ backgroundColor: color }}
    onDragStart={handleDragStart}
    disabled={started}
    draggable="true"
  >
    {name}
  </button>
);

DragButton.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleDragStart: PropTypes.func.isRequired,
  started: PropTypes.bool,
};
