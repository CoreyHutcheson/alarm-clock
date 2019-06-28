import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";

import { getTime } from "./getTime";

function App() {
  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);
  }, []);

  return (
    <div>
      <div className={styles.time}>{currentTime}</div>
    </div>
  );
}

export default App;
