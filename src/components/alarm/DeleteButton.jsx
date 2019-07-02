import React from "react";
import PropTypes from "prop-types";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./style.module.scss";

export const DeleteButton = ({ alarmKey, handleDeleteAlarmClick }) => {
  return (
    <div
      className={styles.deleteButton}
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
