import { useState } from "react";

function Control() {
  return (
    <div className="control">
      <button id="start_stop" className="control_btn control_play-pause">
        {/* {isPlaying ? (
          <i className="control_play-pause-icon fa fa-play"></i>
        ) : (
          <i className="control_play-pause-icon fa fa-pause"></i>
        )} */}
      </button>
      <button id="reset" className="control_btn control_reset">
        <i className="fa fa-repeat"></i>
      </button>
    </div>
  );
}

export default Control;
