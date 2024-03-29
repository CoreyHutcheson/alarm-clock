import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Clock } from "components/clock";
import { AlarmOptions } from "components/alarm-options";
import { OffButton } from "./OffButton.jsx";
import { DeleteButton } from "./DeleteButton.jsx";
import { AlarmSound } from "./AlarmSound.jsx";

import { useCurrentTime } from "utils/useCurrentTime.js";
import { getNewAlarmTime } from "utils/getNewAlarmTime.js";

import "./style.scss";

export const Alarm = props => {
  const { position, showDeleteButton, grid } = props;

  const currentTime = useCurrentTime();
  const [alarmHours, setAlarmHours] = useState("OFF");
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

  return (
    <div className={`alarm alarm__position--${position}`}>
      <Clock className="alarm__clock" time={currentTime} grid={grid} />

      <AlarmOptions
        className="alarm__options"
        handleHourChange={e => setAlarmHours(e.target.value)}
        handleMinuteChange={e => setAlarmMinutes(e.target.value)}
      />

      <OffButton alarmActive={alarmActive} setAlarmActive={setAlarmActive} />

      {alarmActive && <AlarmSound />}

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
