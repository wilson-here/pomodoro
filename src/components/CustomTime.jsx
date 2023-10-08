function CustomTime({ type, duration, increment, decrement }) {
  return (
    <div className="custom">
      <h2 id={`${type}-label`} className="custom_txt">
        {type} {/* <br className="only-sm" /> */}
        Length
      </h2>
      <button
        onClick={decrement}
        id={`${type}-decrement`}
        className="custom_btn"
      >
        <i className="fa fa-arrow-down"></i>
      </button>
      <span id={`${type}-length`} className="custom_length">
        {duration}
      </span>
      <button
        onClick={increment}
        id={`${type}-increment`}
        className="custom_btn"
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default CustomTime;
