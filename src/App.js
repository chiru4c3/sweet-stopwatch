import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const XStopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  // Update the time every second
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // Handle start and stop functionality
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  // Handle reset functionality
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  // Format time as minutes:seconds (0:00)
  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime()}</p>
      <div className="buttons">
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default XStopwatch;
