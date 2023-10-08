import { useEffect, useState } from "react";
import { formatTime } from "../utils/helper";
function Display({
  isPlaying,
  isReset,
  setIsReset,
  isSessionTime,
  setIsSessionTime,
  duration,
  audioRef,
}) {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  useEffect(() => {
    setTimeLeft(duration * 60);
  }, [duration]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft > 0 && isPlaying === true) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else if (timeLeft <= 0 && isPlaying === true) {
        audioRef.current.play();
        setIsSessionTime((prevIsSessionTime) => !prevIsSessionTime);
        setTimeLeft(duration * 60);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [timeLeft, isPlaying]);
  useEffect(() => {
    if (isReset === true) {
      setTimeLeft(duration * 60);
      setIsReset(false);
    }
  }, [isReset]);

  return (
    <div className="display">
      <h2 id="timer-label" className="display_txt">
        {isSessionTime ? "Session time" : "Đi 🍽️ đi Lu 🐷🐷🐷"}
      </h2>
      <span id="time-left" className="display_timer">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}

export default Display;
