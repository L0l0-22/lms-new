import React, { useState, useEffect } from 'react';
import '/webapps/lms_react/src/styles/HomeStyle/Timer.css';

const Timer = () => {
  const initialDuration = 300; // 5 minutes in seconds
  const [remainingTime, setRemainingTime] = useState(initialDuration);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const calculateProgress = () => {
    return ((initialDuration - remainingTime) / initialDuration) * 100;
  };

  const formatTime = (time) => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${days} ${hours}: ${minutes}: ${seconds}`;
  };

  return (
    <div className="timer-container">
    <div className="timer-text" >{formatTime(remainingTime)}</div>
    <div id="labels">
    <span id="hours-label">Hr</span>
    <span id="minutes-label">Min</span>
    <span id="seconds-label">Sec</span>
  </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${calculateProgress()}%` }}></div>
      </div>
    </div>
  );
};

export default Timer;