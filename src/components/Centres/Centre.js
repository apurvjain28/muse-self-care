import CentreDisplay from "./CentreDisplay";
import CentreControls from "./CentreControls";
import CentreImage from "./CentreImage";
import ConnectionChannels from "./ConnectionChannels";
import React, { useState } from "react";

const Centre = (props) => {
  const [displayCentre, setDisplayCentre] = useState("");

  const clickHandler = (display) => {
    setDisplayCentre(display);
  };

  return (
    <React.Fragment>
      <CentreDisplay data={displayCentre} />
      <CentreControls data={props.data} onClickHandler={clickHandler} />
      <CentreImage />
      <ConnectionChannels />
    </React.Fragment>
  );
};

export default Centre;
