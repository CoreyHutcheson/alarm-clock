import React, { useState, useEffect } from "react";

import { ButtonContainer } from "components/app-buttons";
import { Alarm } from "components/alarm";

const App = () => {
  const [alarms, setAlarms] = useState([
    {
      alarmKey: "0",
      position: "main"
    }
  ]);

  const handleShowAllClick = () => {
    alert("show all");
  };

  const handleNewAlarmClick = () => {
    const position = alarms.length.toString();

    if (alarms.length >= 5) return;

    setAlarms([...alarms, { alarmKey: position, position }]);
  };

  const handleDeleteAlarmClick = alarmKey => {
    setAlarms(alarms.filter(el => el.alarmKey !== alarmKey));
  };

  return (
    <>
      {alarms.map(alarm => (
        <Alarm
          key={alarm.alarmKey}
          alarmKey={alarm.alarmKey}
          position={alarm.position}
          handleDeleteAlarmClick={handleDeleteAlarmClick}
        />
      ))}

      <ButtonContainer
        handleShowAllClick={handleShowAllClick}
        handleNewAlarmClick={handleNewAlarmClick}
      />
    </>
  );
};

export default App;
