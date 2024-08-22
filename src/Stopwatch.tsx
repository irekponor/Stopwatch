

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

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0"); 
    milliseconds = String(milliseconds).padStart(2, "0");

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
