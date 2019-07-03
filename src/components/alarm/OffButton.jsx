import React from "react";
import PropTypes from "prop-types";

export const OffButton = ({ alarmActive, setAlarmActive }) => {
  const containerClasses = `alarm-off-container ${
    alarmActive ? "alarm-off-container--active" : ""
  }`;

  return (
    <div className={containerClasses}>
      <div className="alarm-off-button" onClick={() => setAlarmActive(false)}>
        ALARM OFF
      </div>
    </div>
  );
};

OffButton.propTypes = {
  alarmActive: PropTypes.bool.isRequired,
  setAlarmActive: PropTypes.func.isRequired
};
