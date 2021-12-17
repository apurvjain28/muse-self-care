import CentreDisplay from "./CentreDisplay";
import CentreControls from "./CentreControls";
import CentreImage from "./CentreImage";
import ConnectionChannels from "./ConnectionChannels";
import UpperPanel from "./UpperPanel";
import classes from "./Centre.module.css"
import React, { useState } from "react";

const Centre = (props) => {
  const [displayCentre, setDisplayCentre] = useState("");

  const clickHandler = (display) => {
    setDisplayCentre(display);
  };

  return (
    <React.Fragment>
      <UpperPanel data={props.db} />
      <CentreDisplay data={displayCentre} />
      <CentreControls data={props.data} onClickHandler={clickHandler} />
      <CentreImage />
      {/* <ConnectionChannels /> */}
    </React.Fragment>
  );
};

export default Centre;
