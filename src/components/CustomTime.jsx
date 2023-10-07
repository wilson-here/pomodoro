function CustomTime({ type, duration }) {
  return (
    <div className="custom">
      <h2 id={`${type}-label`} className="custom_txt">
        {type} Length
      </h2>
      <button id={`${type}-decrement`} className="custom_btn">
        <i className="fa fa-arrow-down"></i>
      </button>
      <span id={`${type}-length`} className="custom_length">
        {" "}
        {duration}{" "}
      </span>
      <button id={`${type}-increment`} className="custom_btn">
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default CustomTime;
