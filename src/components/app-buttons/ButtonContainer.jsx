import React from "react";
import PropTypes from "prop-types";
import { faThLarge, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Button } from "./Button.jsx";
import styles from "./style.module.scss";

export const ButtonContainer = props => {
  const {
    handleShowAllClick,
    handleNewAlarmClick,
    showNewAlarmButton,
    showShowAllButton
  } = props;

  return (
    <div className={styles.buttonContainer}>
      {showShowAllButton && (
        <Button icon={faThLarge} handleClick={handleShowAllClick} />
      )}

      {showNewAlarmButton && (
        <Button icon={faPlus} handleClick={handleNewAlarmClick} />
      )}
    </div>
  );
};

ButtonContainer.defaultProps = {
  showNewAlarmButton: true,
  showShowAllButton: true
};

ButtonContainer.propTypes = {
  handleShowAllClick: PropTypes.func.isRequired,
  handleNewAlarmClick: PropTypes.func.isRequired,
  showNewAlarmButton: PropTypes.bool,
  showShowAllButton: PropTypes.bool
};
