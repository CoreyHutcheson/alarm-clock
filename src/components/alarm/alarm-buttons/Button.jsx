import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ icon, handleClick }) => (
  <div onClick={handleClick}>
    <FontAwesomeIcon icon={icon} />
  </div>
);

Button.propTypes = {
  icon: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};
