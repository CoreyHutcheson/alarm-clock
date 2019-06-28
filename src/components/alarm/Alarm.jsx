import React, { useState, useEffect } from "react";

import { AlarmOptions } from "components/alarm-options";
import { Clock } from "components/clock";
import styles from "./style.module.scss";

export const Alarm = () => {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();

  const handleHourChange = e => {};

  const handleMinuteChange = e => {};

  return (
    <div>
      <Clock />
      <AlarmOptions />
    </div>
  );
};
