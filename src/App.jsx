import React, { useState, useEffect } from "react";

import { ButtonContainer } from "components/app-buttons";
import { Alarm } from "components/alarm";

import styles from "./App.module.scss";

const App = () => {
  const [alarms, setAlarms] = useState([
    {
      alarmKey: "0",
      position: "main"
    }
  ]);
  const [cardIsFlipped, setCardIsFlipped] = useState(false);

  const handleShowAllClick = () => {
    setCardIsFlipped(!cardIsFlipped);
  };

  const handleNewAlarmClick = () => {
    const position = alarms.length.toString();

    if (alarms.length >= 5) return;

    setAlarms([...alarms, { alarmKey: position, position }]);
  };

  const handleDeleteAlarmClick = alarmKey => {
    setAlarms(alarms.filter(el => el.alarmKey !== alarmKey));
  };

  useEffect(() => {
    if (alarms.length === 1) {
      setCardIsFlipped(false);
    }
  }, [alarms]);

  return (
    <>
      <div className={styles.scene}>
        <div
          className={`${styles.card} ${cardIsFlipped ? styles.isFlipped : ""}`}
        >
          <div className={[styles.cardFace, styles.cardFace__Front].join(" ")}>
            {/* Render first alarm */}
            {
              <Alarm
                alarmKey={alarms[0].alarmKey}
                position={alarms[0].position}
                handleDeleteAlarmClick={handleDeleteAlarmClick}
                showDeleteButton={false}
              />
            }
          </div>

          <div className={[styles.cardFace, styles.cardFace__Back].join(" ")}>
            {/* Render remaining alarms */}
            {alarms.map((alarm, index) => {
              if (index === 0) return null;

              return (
                <Alarm
                  key={alarm.alarmKey}
                  alarmKey={alarm.alarmKey}
                  position={alarm.position}
                  handleDeleteAlarmClick={handleDeleteAlarmClick}
                  showDeleteButton={true}
                  grid={true}
                />
              );
            })}
          </div>
        </div>
      </div>

      <ButtonContainer
        handleShowAllClick={handleShowAllClick}
        handleNewAlarmClick={handleNewAlarmClick}
        showNewAlarmButton={alarms.length < 5}
        showShowAllButton={alarms.length > 1}
      />
    </>
  );
};

export default App;
