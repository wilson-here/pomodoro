import { useState } from "react";
import "./styles/App.scss";
import Title from "./components/Title";
import CustomTime from "./components/CustomTime";
import Display from "./components/Display";
import Control from "./components/Control";
import CopyRight from "./components/CopyRight";
import { INITIAL_TIME } from "./constant/constant";
function App() {
  return (
    <div className="bg">
      <div className="content">
        <Title />
        <div className="custom_wrap">
          <CustomTime type="break" duration="5" />
          <CustomTime type="session" duration={INITIAL_TIME} />
        </div>
        <Display />
        <Control />
        <CopyRight color={"#a36f5c"} size="1.5rem" />
      </div>
    </div>
  );
}

export default App;
