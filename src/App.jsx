import React, { useState, useEffect } from "react";

import { ButtonContainer } from "components/app-buttons";
import { Alarm } from "components/alarm";

import styles from "./App.module.scss";

const App = () => {
  const [alarms, setAlarms] = useState([
    {
      position: "0"
    }
  ]);
  const [cardIsFlipped, setCardIsFlipped] = useState(false);

  const handleShowAllClick = () => {
    setCardIsFlipped(!cardIsFlipped);
  };

  const handleNewAlarmClick = () => {
    if (alarms.length >= 5) return;

    const getFirstOpenPosition = () => {
      const possiblePositions = ["0", "1", "2", "3", "4"];

      return possiblePositions.filter(pos => {
        return !alarms.map(alarm => alarm.position).includes(pos);
      })[0];
    };

    setAlarms([...alarms, { position: getFirstOpenPosition() }]);
    setCardIsFlipped(true);
  };

  const handleDeleteAlarmClick = position => {
    setAlarms(alarms.filter(el => el.position !== position));
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
                  key={alarm.position}
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
