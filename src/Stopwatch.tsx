import { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elaspedTime, setElaspedTime] = useState(0);
  const intervalIdRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElaspedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elaspedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElaspedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elaspedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elaspedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elaspedTime / 1000) % 60);
    let milliseconds = Math.floor((elaspedTime % 1000) / 10);

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button onClick={start} type="button" className="btn btn-success">
          Start
        </button>
        <button onClick={stop} type="button" className="btn btn-danger">
          Stop
        </button>
        <button onClick={reset} type="button" className="btn btn-primary">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
