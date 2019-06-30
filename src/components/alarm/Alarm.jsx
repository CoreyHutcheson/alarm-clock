import React, { useState, useEffect } from "react";

import { AlarmOptions } from "components/alarm-options";
import { Clock } from "components/clock";
import { getNewAlarmTime } from "utils/getNewAlarmTime.js";
import styles from "./style.module.scss";

export const Alarm = () => {
  const [alarmHours, setAlarmHours] = useState("OFF");
  const [alarmMinutes, setAlarmMinutes] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState();
  const [alarmActive, setAlarmActive] = useState(false);

  const alarmOffContainerClassName = `${styles.alarmOffContainer} ${
    alarmActive ? styles["alarmOffContainer--active"] : ""
  }`;

  // Updates currentTime every second
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  });

  // Sets off alarm by comparing currentTime and alarmTime
  useEffect(() => {
    const diff = currentTime - alarmTime;

    // TODO: Remove debugging
    console.log(
      `Current: ${currentTime}
      Alarm: ${alarmTime}
      Diff: ${diff}
    `
    );

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
      <Clock time={currentTime} />
      <AlarmOptions
        handleHourChange={e => setAlarmHours(e.target.value)}
        handleMinuteChange={e => setAlarmMinutes(e.target.value)}
      />

      <div className={alarmOffContainerClassName}>
        <div className={styles.alarmOffButton} onClick={handleAlarmOff}>
          ALARM OFF
        </div>
      </div>

      <button onClick={() => setAlarmActive(true)}>TRUE</button>
    </div>
  );
};
