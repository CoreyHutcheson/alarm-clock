import React from "react";
import PropTypes from "prop-types";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

export const DeleteButton = ({ position, handleDeleteAlarmClick, grid }) => {
  return (
    <div
      className={`delete-button ${grid ? "delete-button__grid" : ""}`}
      onClick={() => handleDeleteAlarmClick(position)}
    >
      <FontAwesomeIcon icon={faTimesCircle} />
    </div>
  );
};

DeleteButton.propTypes = {
  position: PropTypes.string.isRequired,
  handleDeleteAlarmClick: PropTypes.func.isRequired
};
