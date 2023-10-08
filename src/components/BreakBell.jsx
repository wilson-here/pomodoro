function BreakBell({ audioRef }) {
  return (
    <audio
      id="beep"
      preload="auto"
      src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ref={audioRef}
    ></audio>
  );
}

export default BreakBell;
