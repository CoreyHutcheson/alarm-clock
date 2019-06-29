import React, { useState, useEffect } from "react";

import { AlarmOptions } from "components/alarm-options";
import { Clock } from "components/clock";
import { getTime } from "utils/getTime";
import styles from "./style.module.scss";

export const Alarm = () => {
  const [alarmHours, setAlarmHours] = useState("off");
  const [alarmMinutes, setAlarmMinutes] = useState(0);
  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    // If time hasn't passed yet days = 0
    // If time has already passed, days = 1;
    // date.setTime(date.getTime() + 1 * 86400000);
  }, [alarmHours, alarmMinutes]);

  const handleHourChange = e => {
    setAlarmHours(e.target.value);
  };

  const handleMinuteChange = e => {
    setAlarmMinutes(e.target.value);
  };

  return (
    <div>
      <Clock time={currentTime} />
      <AlarmOptions
        handleHourChange={handleHourChange}
        handleMinuteChange={handleMinuteChange}
      />
    </div>
  );
};
