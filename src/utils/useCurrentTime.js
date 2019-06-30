import { useState, useEffect } from "react";

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Updates currentTime every second
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  });

  return currentTime;
};
