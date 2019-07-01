import React from "react";
import PropTypes from "prop-types";
import { faThLarge, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Button } from "./Button.jsx";
import styles from "./style.module.scss";

export const ButtonContainer = ({ handleShowAll, handleNewAlarm }) => (
  <div className={styles.buttonContainer}>
    <Button icon={faThLarge} handleClick={handleShowAll} />
    <Button icon={faPlus} handleClick={handleNewAlarm} />
  </div>
);

ButtonContainer.propTypes = {
  handleShowAll: PropTypes.func.isRequired,
  handleNewAlarm: PropTypes.func.isRequired
};
