import React from "react";
import PropTypes from "prop-types";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./style.module.scss";

export const DeleteButton = ({ position, handleDeleteAlarmClick, grid }) => {
  return (
    <div
      className={`${styles.deleteButton} ${
        grid ? styles.deleteButton__Grid : ""
      }`}
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
