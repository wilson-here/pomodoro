function Control({ isPlaying, toggleIsPlaying, reset }) {
  return (
    <div className="control">
      <button
        id="start_stop"
        className="control_btn control_play-pause"
        onClick={toggleIsPlaying}
      >
        {isPlaying ? (
          <i className="control_play-pause-icon fa fa-pause"></i>
        ) : (
          <i className="control_play-pause-icon fa fa-play"></i>
        )}
      </button>
      <button id="reset" className="control_btn control_reset" onClick={reset}>
        <i className="fa fa-repeat"></i>
      </button>
    </div>
  );
}

export default Control;
