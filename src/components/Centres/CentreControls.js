import React from "react";
import Button from "../UI/Button";
import { useState } from "react";
import classes from "./CentreControls.module.css";

const CentreControls = (props) => {
  const personCentre = props.data[0];
  const [displayCentre, setDisplayCentre] = useState("");

  const displayHeadHandler = () => {
    if (personCentre.isHeadDefined) {
      setDisplayCentre(personCentre.definedHead);
    } else {
      setDisplayCentre(personCentre.undefinedHead);
    }
  };

  const displayAjnaHandler = () => {
    if (personCentre.isAjnaDefined) {
      setDisplayCentre(personCentre.definedAjna);
    } else {
      setDisplayCentre(personCentre.undefinedAjna);
    }
  };

  const displayThroatHandler = () => {
    if (personCentre.isThroatDefined) {
      setDisplayCentre(personCentre.definedThroat);
    } else {
      setDisplayCentre(personCentre.undefinedThroat);
    }
  };

  const displayIdentityHandler = () => {
    if (personCentre.isIdentityDefined) {
      setDisplayCentre(personCentre.definedIdentity);
    } else {
      setDisplayCentre(personCentre.undefinedIdentity);
    }
  };

  const displayHeartHandler = () => {
    if (personCentre.isHeartDefined) {
      setDisplayCentre(personCentre.definedHeart);
    } else {
      setDisplayCentre(personCentre.undefinedHeart);
    }
  };

  const displaySacralHandler = () => {
    if (personCentre.isSacralDefined) {
      setDisplayCentre(personCentre.definedSacral);
    } else {
      setDisplayCentre(personCentre.undefinedSacral);
    }
  };

  const displayEmotionsHandler = () => {
    if (personCentre.isEmotionsDefined) {
      setDisplayCentre(personCentre.definedEmotions);
    } else {
      setDisplayCentre(personCentre.undefinedEmotions);
    }
  };

  const displaySpleenHandler = () => {
    if (personCentre.isSpleenDefined) {
      setDisplayCentre(personCentre.definedSpleen);
    } else {
      setDisplayCentre(personCentre.undefinedSpleen);
    }
  };

  const displayRootHandler = () => {
    if (personCentre.isRootDefined) {
      setDisplayCentre(personCentre.definedRoot);
    } else {
      setDisplayCentre(personCentre.undefinedRoot);
    }
  };

  props.onClickHandler(displayCentre);

  return (
    <div className={classes.btn__container}>
      <Button
        className={classes.btn__controls}
        id="Head"
        type="button"
        onClick={displayHeadHandler}
      >
        Head
      </Button>
      <Button
        className={classes.btn__controls}
        id="Ajna"
        type="button"
        onClick={displayAjnaHandler}
      >
        Ajna
      </Button>
      <Button
        className={classes.btn__controls}
        id="Throat"
        type="button"
        onClick={displayThroatHandler}
      >
        Throat
      </Button>
      <Button
        className={classes.btn__controls}
        id="Identity"
        type="button"
        onClick={displayIdentityHandler}
      >
        Identity
      </Button>
      <Button
        className={classes.btn__controls}
        id="Heart"
        type="button"
        onClick={displayHeartHandler}
      >
        Heart
      </Button>
      <Button
        className={classes.btn__controls}
        id="Sacral"
        type="button"
        onClick={displaySacralHandler}
      >
        Sacral
      </Button>
      <Button
        className={classes.btn__controls}
        id="Emotions"
        type="button"
        onClick={displayEmotionsHandler}
      >
        Emotions
      </Button>
      <Button
        className={classes.btn__controls}
        id="Spleen"
        type="button"
        onClick={displaySpleenHandler}
      >
        Spleen
      </Button>
      <Button
        className={classes.btn__controls}
        id="Root"
        type="button"
        onClick={displayRootHandler}
      >
        Root
      </Button>
    </div>
  );
};

export default CentreControls;
