import React, { useContext } from "react";
import classes from "./CentreImage.module.css";
//import humanChart from "../../images/donald.jpg";
import AuthContext from "../../store/auth-context";

const CentreImage = () => {
  const authCtx = useContext(AuthContext);
  const imageName = authCtx.data?.image;
  let imageUrl;

  if (!imageName) {
    imageUrl = <p>...Loading</p>;
  } else {
    imageUrl = require(`../../images/${imageName}`);
  }
  //console.log(imageUrl);

  return (
    <div className={classes.img__container}>
      <img
        className={classes.img__image}
        src={imageUrl.default}
        alt="Human Chart"
      ></img>
    </div>
  );
};

export default CentreImage;
