import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { AlarmOptions } from "components/alarm-options";
import { Clock } from "components/clock";
import { useCurrentTime } from "utils/useCurrentTime.js";
import { getNewAlarmTime } from "utils/getNewAlarmTime.js";
import { DeleteButton } from "./DeleteButton.jsx";
import styles from "./style.module.scss";

export const Alarm = props => {
  const { position, showDeleteButton, handleDeleteAlarmClick, grid } = props;

  const [alarmHours, setAlarmHours] = useState("OFF");
  const currentTime = useCurrentTime();
  const [alarmMinutes, setAlarmMinutes] = useState(0);
  const [alarmTime, setAlarmTime] = useState();
  const [alarmActive, setAlarmActive] = useState(false);

  const alarmOffContainerClassName = `${styles.alarmOffContainer} ${
    alarmActive ? styles["alarmOffContainer--active"] : ""
  }`;

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
    <div className={styles.alarm}>
      <Clock time={currentTime} grid={grid} />

      <AlarmOptions
        handleHourChange={e => setAlarmHours(e.target.value)}
        handleMinuteChange={e => setAlarmMinutes(e.target.value)}
      />

      <div className={alarmOffContainerClassName}>
        <div className={styles.alarmOffButton} onClick={handleAlarmOff}>
          ALARM OFF
        </div>
      </div>

      {showDeleteButton && <DeleteButton {...props} />}
    </div>
  );
};

Alarm.defaultProps = {
  grid: false
};

Alarm.propTypes = {
  position: PropTypes.string.isRequired,
  showDeleteButton: PropTypes.bool.isRequired,
  handleDeleteAlarmClick: PropTypes.func.isRequired
};
