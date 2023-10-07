import { useEffect, useState } from "react";

function Display() {
  const [timeLeft, setTimeLeft] = useState(2);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="display">
      <h2 id="timer-label" className="display_txt">
        Session
      </h2>
      <span id="time-left" className="display_timer">
        {timeLeft}
      </span>
    </div>
  );
}

export default Display;
