import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.scss";

export const Clock = ({ time }) => {
  return (
    <div>
      <div className={styles.time}>
        {time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })}
      </div>
    </div>
  );
};

Clock.propTypes = {
  time: PropTypes.object.isRequired
};
