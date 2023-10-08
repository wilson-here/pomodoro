import { useState, useRef } from "react";
import "./styles/App.scss";
import BackgroundVideo from "./components/BackgroundVideo";
// import Title from "./components/Title";
import CustomTime from "./components/CustomTime";
import Display from "./components/Display";
import BreakBell from "./components/BreakBell";
import Control from "./components/Control";
import MusicPlayer from "./components/MusicPlayer";
import CopyRight from "./components/CopyRight";
import { INITIAL_SESSIONTIME } from "./constant/constant";
import { INITIAL_BREAKTIME } from "./constant/constant";
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [sessionTime, setSessionTime] = useState(INITIAL_SESSIONTIME);
  const [breakTime, setBreakTime] = useState(INITIAL_BREAKTIME);
  const [isSessionTime, setIsSessionTime] = useState(true);
  const audioRef = useRef(null);

  const toggleIsPlaying = () => {
    setIsPlaying(!isPlaying);
  };

  const reset = () => {
    setIsPlaying(false);
    setSessionTime(INITIAL_SESSIONTIME);
    setBreakTime(INITIAL_BREAKTIME);
    setIsSessionTime(true);

    audioRef.current.load();
    setIsReset(true);
  };
  const increment = (stateSetter) => {
    stateSetter((prevState) => {
      if (prevState <= 59) {
        return prevState + 1;
      } else {
        return prevState;
      }
    });
  };
  const decrement = (stateSetter) => {
    stateSetter((prevState) => {
      if (prevState >= 2) {
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  };
  return (
    <div className="bg">
      <BackgroundVideo />
      <div className="content">
        {/* <Title /> */}
        <div className="custom_wrap">
          <CustomTime
            type="break"
            duration={breakTime}
            increment={() => increment(setBreakTime)}
            decrement={() => decrement(setBreakTime)}
          />
          <CustomTime
            type="session"
            duration={sessionTime}
            increment={() => increment(setSessionTime)}
            decrement={() => decrement(setSessionTime)}
          />
        </div>
        <Display
          isPlaying={isPlaying}
          isReset={isReset}
          setIsReset={setIsReset}
          isSessionTime={isSessionTime}
          setIsSessionTime={setIsSessionTime}
          duration={isSessionTime ? sessionTime : breakTime}
          audioRef={audioRef}
        />
        <BreakBell audioRef={audioRef} />
        <Control
          isPlaying={isPlaying}
          toggleIsPlaying={toggleIsPlaying}
          reset={reset}
        />
        <MusicPlayer />
        <CopyRight color={"#a36f5c"} size="1.5rem" />
      </div>
    </div>
  );
}

export default App;
