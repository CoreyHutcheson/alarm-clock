import React, { useState, useEffect } from "react";

import { ButtonContainer } from "components/app-buttons";
import { Alarm } from "components/alarm";

const App = () => {
  const handleShowAllClick = () => {
    alert("show all");
  };

  const handleNewAlarmClick = () => {
    alert("new alarm");
  };
  return (
    <>
      <Alarm />
      <ButtonContainer
        handleShowAllClick={handleShowAllClick}
        handleNewAlarmClick={handleNewAlarmClick}
      />
    </>
  );
};

export default App;
