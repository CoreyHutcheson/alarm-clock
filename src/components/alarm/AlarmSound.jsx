import React from "react";
import Sound from "react-sound";

import audio from "assets/alarm-clock-sound.mp3";

export const AlarmSound = () => (
  <Sound url={audio} playStatus={Sound.status.PLAYING} loop={true} />
);
