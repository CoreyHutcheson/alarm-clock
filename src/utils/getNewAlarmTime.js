/**
 * Compares user set alarm hours/minutes to current time and returns newly set alarm Date
 * @param {number} hours - Selected hours option
 * @param {number} minutes - Selected minutes option
 * @param {object} currentTime - Current date/time
 */
export const getNewAlarmTime = (hours, minutes, currentTime) => {
  const tempAlarmTime = new Date();
  // Set the alarmHours and alarmMinutes that have been selected
  tempAlarmTime.setHours(hours, minutes, 0);

  // Check if time has already passed for that day
  // If so, offset the day by 1, so the alarm is set for the next day.
  const dayOffset = tempAlarmTime - currentTime > 0 ? 0 : 1;
  tempAlarmTime.setTime(tempAlarmTime.getTime() + dayOffset * 86400000);

  return new Date(tempAlarmTime);
};
