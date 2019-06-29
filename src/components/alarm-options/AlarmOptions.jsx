import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.scss";

const Option = ({ val, text }) => (
  <option
    value={val}
    className={styles.option}
    dangerouslySetInnerHTML={{ __html: `${text}` }}
  />
);

const formatHours = num => {
  if (num === 12) return "12 PM";
  if (num === 24) return "12 AM";

  const str = num < 12 ? `${num} AM` : `${num % 12} PM`;
  return num < 10 || (num > 12 && num < 22) ? `&nbsp;&nbsp;${str}` : str;
};

export const AlarmOptions = ({ handleHourChange, handleMinuteChange }) => {
  const hourOptions = [];
  const minuteOptions = [];

  for (let i = 1; i <= 24; i++) {
    hourOptions.push(i);
  }

  for (let i = 0; i < 60; i++) {
    minuteOptions.push(i);
  }

  return (
    <>
      <select name="hour" onChange={handleHourChange}>
        <option value="OFF">&nbsp;&nbsp;OFF</option>
        {hourOptions.map(val => (
          <Option key={val} val={val} text={formatHours(val)} />
        ))}
      </select>

      <span className={styles.spacer}>:</span>

      <select name="minutes" onChange={handleMinuteChange}>
        {minuteOptions.map(val => (
          <Option key={val} val={val} text={val < 10 ? "0" + val : val} />
        ))}
      </select>
    </>
  );
};

AlarmOptions.propTypes = {
  handleHourChange: PropTypes.func.isRequired,
  handleMinuteChange: PropTypes.func.isRequired
};
