import React from "react";
import PropTypes from "prop-types";

import "./DragButton.css";

export const DragButton = ({ name, backgroundColor, handleDragStart, started }) => (
  <button
    className="drag__button"
    id={name}
    style={{ backgroundColor: backgroundColor }}
    onDragStart={handleDragStart}
    disabled={started}
    draggable="true"
  >
    {name}
  </button>
);

DragButton.propTypes = {
  name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleDragStart: PropTypes.func.isRequired,
  started: PropTypes.bool,
};
