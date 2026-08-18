import React from "react";

import baseVideo from "./videos/base.mp4";
import claudyVideo from "./videos/claudy.mp4";
import dayVideo from "./videos/day.mp4";
import nightVideo from "./videos/night.mp4";
import rainyVideo from "./videos/rainy.mp4";
import snowingVideo from "./videos/snowing.mp4";

export default function Background(props) {
  const backgrounds = {
    "clear-sky-day": dayVideo,
    "clear-sky-night": nightVideo,

    "few-clouds-day": claudyVideo,
    "few-clouds-night": claudyVideo,

    "scattered-clouds-day": claudyVideo,
    "scattered-clouds-night": claudyVideo,

    "shower-rain-day": rainyVideo,
    "shower-rain-night": rainyVideo,

    "rain-day": rainyVideo,
    "rain-night": rainyVideo,

    "thunderstorm-day": rainyVideo,
    "thunderstorm-night": rainyVideo,

    "snow-day": snowingVideo,
    "snow-night": snowingVideo,

    "mist-day": claudyVideo,
    "mist-night": claudyVideo,

    "broken-clouds-day": claudyVideo,
    "broken-clouds-night": claudyVideo,
  };

  const video = backgrounds[props.code] || baseVideo;

  return (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="weather-background"
    />
  );
}
