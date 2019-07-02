import React from "react";
import PropTypes from "prop-types";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./style.module.scss";

export const DeleteButton = ({ alarmKey, handleDeleteAlarmClick, grid }) => {
  return (
    <div
      className={`${styles.deleteButton} ${
        grid ? styles.deleteButton__Grid : ""
      }`}
      onClick={() => handleDeleteAlarmClick(alarmKey)}
    >
      <FontAwesomeIcon icon={faTimesCircle} />
    </div>
  );
};

DeleteButton.propTypes = {
  alarmKey: PropTypes.string.isRequired,
  handleDeleteAlarmClick: PropTypes.func.isRequired
};
