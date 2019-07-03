import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { AlarmOptions } from "components/alarm-options";
import { Clock } from "components/clock";
import { useCurrentTime } from "utils/useCurrentTime.js";
import { getNewAlarmTime } from "utils/getNewAlarmTime.js";
import { DeleteButton } from "./DeleteButton.jsx";
import "./style.scss";

export const Alarm = props => {
  const { position, showDeleteButton, grid } = props;

  const [alarmHours, setAlarmHours] = useState("OFF");
  const currentTime = useCurrentTime();
  const [alarmMinutes, setAlarmMinutes] = useState(0);
  const [alarmTime, setAlarmTime] = useState();
  const [alarmActive, setAlarmActive] = useState(false);

  // Sets off alarm by comparing currentTime and alarmTime
  useEffect(() => {
    const diff = currentTime - alarmTime;

    if (diff > 0 && diff < 1000) {
      setAlarmActive(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

  // Sets new alarm time whenever user changes alarm hours or minutes
  useEffect(() => {
    if (alarmHours.toUpperCase() === "OFF") {
      return;
    }

    setAlarmTime(getNewAlarmTime(alarmHours, alarmMinutes, currentTime));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alarmHours, alarmMinutes]);

  const handleAlarmOff = () => {
    setAlarmActive(false);
  };

  return (
    <div className={`alarm alarm__position--${position}`}>
      <Clock time={currentTime} grid={grid} />

      <AlarmOptions
        handleHourChange={e => setAlarmHours(e.target.value)}
        handleMinuteChange={e => setAlarmMinutes(e.target.value)}
      />

      <div
        className={`alarm-off-container ${
          alarmActive ? "alarm-off-container--active" : ""
        }`}
      >
        <div className="alarm-off-button" onClick={handleAlarmOff}>
          ALARM OFF
        </div>
      </div>

      {showDeleteButton && <DeleteButton {...props} />}
    </div>
  );
};

Alarm.defaultProps = {
  showDeleteButton: false,
  grid: false
};

Alarm.propTypes = {
  position: PropTypes.string.isRequired,
  showDeleteButton: PropTypes.bool.isRequired,
  handleDeleteAlarmClick: PropTypes.func.isRequired
};
