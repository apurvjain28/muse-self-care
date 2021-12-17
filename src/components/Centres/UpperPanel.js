import React, { useContext } from "react";
import classes from "./UpperPanel.module.css";
import AuthContext from "../../store/auth-context";

const UpperPanel = (props) => {
  const authCtx = useContext(AuthContext);

  const name = (
    <p>
      {authCtx.data?.user.firstname +
        " " +
        authCtx.data?.user.lastname +
        " - " +
        authCtx.data?.energyType.Name}
    </p>
  );
  const energyType = authCtx.data?.energyType.Name ? (
    <p>{authCtx.data?.energyType.Name}</p>
  ) : (
    ""
  );
  const auraType = authCtx.data?.energyType.Aura ? (
    <p>
      <b>
        <u>Your Aura: </u>
      </b>
      {authCtx.data?.energyType.Aura}
    </p>
  ) : (
    ""
  );
  const role = authCtx.data?.energyType.Role ? (
    <p>
      <b>
        <u>Role: </u>
      </b>
      {authCtx.data?.energyType.Role}
    </p>
  ) : (
    ""
  );
  const occurrence = authCtx.data?.energyType.Occurrence ? (
    <p>
      <b>
        <u>Occurance: </u>
      </b>
      {authCtx.data?.energyType.Occurrence}
    </p>
  ) : (
    ""
  );

  return (
    <div>
      <div className={classes.upper_head}>
        {name}
        {/* {energyType} */}
        {auraType}
        {role}
        {occurrence}
      </div>
    </div>
  );
};

export default UpperPanel;
