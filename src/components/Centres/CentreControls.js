import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import classes from "./CentreControls.module.css";
import AuthContext from "../../store/auth-context";

const CentreControls = (props) => {
  // const personCentre = props.data[0];
  const authCtx = useContext(AuthContext);
  const [displayCentre, setDisplayCentre] = useState("");
  let content = "";

  const displayAuthorityHandler = () => {
    content = (
      <p>
        <i>{authCtx.data.authority.Name}: </i>
        {authCtx.data.authority.Description}
      </p>
    );
    setDisplayCentre(content);
  };

  const displayStrategyHandler = () => {
    content = (
      <p>
        <i>{authCtx.data.energyType.Strategy}: </i>
        {authCtx.data.energyType.StrategyDescription}
      </p>
    );
    setDisplayCentre(content);
  };

  const displayMissionHandler = () => {
    content = (
      <p>
        <i>{authCtx.data.energyType.Mission}: </i>
        {authCtx.data.energyType.MissionDescription}
      </p>
    );
    setDisplayCentre(content);
  };

  const displaySelfThemeHandler = () => {
    content = (
      <p>
        <i>{authCtx.data.energyType.NotSelfTheme}: </i>
        {authCtx.data.energyType.NotSelfThemeDescription}
      </p>
    );
    setDisplayCentre(content);
  };

  const displayEnergyHandler = () => {
    content = (
      <p>
        <i>{authCtx.data.energyType.Energy}: </i>
        {authCtx.data.energyType.EnergyDescription}
      </p>
    );
    setDisplayCentre(content);
  };

  const displayProfileHandler = () => {
    content = (
      <p>
        <i>
          {authCtx.data.profile.Name} ({authCtx.data.profile.ProfileNumber}):{" "}
        </i>
        {authCtx.data.profile.Description}
      </p>
    );
    setDisplayCentre(content);
  };

  const displayDefinitionHandler = () => {
    content = (
      <p>
        <i>{authCtx.data.definition.Name}: </i>
        {authCtx.data.definition.Description}
      </p>
    );
    setDisplayCentre(content);
  };

  const displayChannelHandler = () => {
    content = (
      <p>
        <i>
          {authCtx.data.channel.Name} ({authCtx.data.channel.channelNo}):{" "}
        </i>
        {authCtx.data.channel.Description}
      </p>
    );
    setDisplayCentre(content);
  };

  const displayArrowHandler = () => {
    content = (
      <p>
        <i>
          {authCtx.data.variable.ArrowDirection} (
          {authCtx.data.variable.DescriptionName},{" "}
          {authCtx.data.variable.DescriptionType}):{" "}
        </i>
        {authCtx.data.variable.DescriptionTypeDescription}
      </p>
    );
    setDisplayCentre(content);
  };

  // const displayHeadHandler = () => {
  //   if (personCentre.isHeadDefined) {
  //     setDisplayCentre(personCentre.definedHead);
  //   } else {
  //     setDisplayCentre(personCentre.undefinedHead);
  //   }
  // };

  // const displayAjnaHandler = () => {
  //   if (personCentre.isAjnaDefined) {
  //     setDisplayCentre(personCentre.definedAjna);
  //   } else {
  //     setDisplayCentre(personCentre.undefinedAjna);
  //   }
  // };

  // const displayThroatHandler = () => {
  //   if (personCentre.isThroatDefined) {
  //     setDisplayCentre(personCentre.definedThroat);
  //   } else {
  //     setDisplayCentre(personCentre.undefinedThroat);
  //   }
  // };

  // const displayIdentityHandler = () => {
  //   if (personCentre.isIdentityDefined) {
  //     setDisplayCentre(personCentre.definedIdentity);
  //   } else {
  //     setDisplayCentre(personCentre.undefinedIdentity);
  //   }
  // };

  // const displayHeartHandler = () => {
  //   if (personCentre.isHeartDefined) {
  //     setDisplayCentre(personCentre.definedHeart);
  //   } else {
  //     setDisplayCentre(personCentre.undefinedHeart);
  //   }
  // };

  // const displaySacralHandler = () => {
  //   if (personCentre.isSacralDefined) {
  //     setDisplayCentre(personCentre.definedSacral);
  //   } else {
  //     setDisplayCentre(personCentre.undefinedSacral);
  //   }
  // };

  // const displayEmotionsHandler = () => {
  //   if (personCentre.isEmotionsDefined) {
  //     setDisplayCentre(personCentre.definedEmotions);
  //   } else {
  //     setDisplayCentre(personCentre.undefinedEmotions);
  //   }
  // };

  // const displaySpleenHandler = () => {
  //   if (personCentre.isSpleenDefined) {
  //     setDisplayCentre(personCentre.definedSpleen);
  //   } else {
  //     setDisplayCentre(personCentre.undefinedSpleen);
  //   }
  // };

  // const displayRootHandler = () => {
  //   if (personCentre.isRootDefined) {
  //     setDisplayCentre(personCentre.definedRoot);
  //   } else {
  //     setDisplayCentre(personCentre.undefinedRoot);
  //   }
  // };

  props.onClickHandler(displayCentre);

  return (
    <div className={classes.btn__container}>
      {/* <Button
        className={classes.btn__controls}
        id="Head"
        type="button"
        onClick={displayHeadHandler}
        style={{
          background: personCentre.isHeadDefined ? "#66BA3E" : "#D04040",
          border: personCentre.isHeadDefined
            ? "1px solid #66BA3E"
            : "1px solid #D04040",
        }}
      >
        Head
      </Button>
      <Button
        className={classes.btn__controls}
        id="Ajna"
        type="button"
        onClick={displayAjnaHandler}
        style={{
          background: personCentre.isAjnaDefined ? "#66BA3E" : "#D04040",
          border: personCentre.isAjnaDefined
            ? "1px solid #66BA3E"
            : "1px solid #D04040",
        }}
      >
        Ajna
      </Button>
      <Button
        className={classes.btn__controls}
        id="Throat"
        type="button"
        onClick={displayThroatHandler}
        style={{
          background: personCentre.isThroatDefined ? "#66BA3E" : "#D04040",
          border: personCentre.isThroatDefined
            ? "1px solid #66BA3E"
            : "1px solid #D04040",
        }}
      >
        Throat
      </Button>
      <Button
        className={classes.btn__controls}
        id="Identity"
        type="button"
        onClick={displayIdentityHandler}
        style={{
          background: personCentre.isIdentityDefined ? "#66BA3E" : "#D04040",
          border: personCentre.isIdentityDefined
            ? "1px solid #66BA3E"
            : "1px solid #D04040",
        }}
      >
        Identity
      </Button>
      <Button
        className={classes.btn__controls}
        id="Heart"
        type="button"
        onClick={displayHeartHandler}
        style={{
          background: personCentre.isHeartDefined ? "#66BA3E" : "#D04040",
          border: personCentre.isHeartDefined
            ? "1px solid #66BA3E"
            : "1px solid #D04040",
        }}
      >
        Heart
      </Button>
      <Button
        className={classes.btn__controls}
        id="Sacral"
        type="button"
        onClick={displaySacralHandler}
        style={{
          background: personCentre.isSacralDefined ? "#66BA3E" : "#D04040",
          border: personCentre.isSacralDefined
            ? "1px solid #66BA3E"
            : "1px solid #D04040",
        }}
      >
        Sacral
      </Button>
      <Button
        className={classes.btn__controls}
        id="Emotions"
        type="button"
        onClick={displayEmotionsHandler}
        style={{
          background: personCentre.isEmotionsDefined ? "#66BA3E" : "#D04040",
          border: personCentre.isEmotionsDefined
            ? "1px solid #66BA3E"
            : "1px solid #D04040",
        }}
      >
        Emotions
      </Button>
      <Button
        className={classes.btn__controls}
        id="Spleen"
        type="button"
        onClick={displaySpleenHandler}
        style={{
          background: personCentre.isSpleenDefined ? "#66BA3E" : "#D04040",
          border: personCentre.isSpleenDefined
            ? "1px solid #66BA3E"
            : "1px solid #D04040",
        }}
      >
        Spleen
      </Button>
      <Button
        className={classes.btn__controls}
        id="Root"
        type="button"
        onClick={displayRootHandler}
        style={{
          background: personCentre.isRootDefined ? "#66BA3E" : "#D04040",
          border: personCentre.isRootDefined
            ? "1px solid #66BA3E"
            : "1px solid #D04040",
        }}
      >
        Root
      </Button>*/}

      <Button
        className={classes.btn__controls}
        id="Strategy"
        type="button"
        onClick={displayStrategyHandler}
      >
        Strategy
      </Button>

      <Button
        className={classes.btn__controls}
        id="Mission"
        type="button"
        onClick={displayMissionHandler}
      >
        Mission
      </Button>

      <Button
        className={classes.btn__controls}
        id="SelfTheme"
        type="button"
        onClick={displaySelfThemeHandler}
      >
        Not Self Theme
      </Button>

      <Button
        className={classes.btn__controls}
        id="Energy"
        type="button"
        onClick={displayEnergyHandler}
      >
        Energy
      </Button>

      <Button
        className={classes.btn__controls}
        id="Authority"
        type="button"
        onClick={displayAuthorityHandler}
      >
        Authority
      </Button>

      <Button
        className={classes.btn__controls}
        id="Profile"
        type="button"
        onClick={displayProfileHandler}
      >
        Profile
      </Button>

      <Button
        className={classes.btn__controls}
        id="Definition"
        type="button"
        onClick={displayDefinitionHandler}
      >
        Definition
      </Button>

      <Button
        className={classes.btn__controls}
        id="Channel"
        type="button"
        onClick={displayChannelHandler}
      >
        Channel
      </Button>

      <Button
        className={classes.btn__controls}
        id="Arrow"
        type="button"
        onClick={displayArrowHandler}
      >
        Arrow
      </Button>
    </div>
  );
};

export default CentreControls;
