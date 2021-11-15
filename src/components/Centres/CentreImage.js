import classes from "./CentreImage.module.css";
import humanChart from "../../images/humanChart.jpeg";

const CentreImage = () => {
  return (
    <div className={classes.img__container}>
      <img
        className={classes.img__image}
        src={humanChart}
        alt="Human Chart"
      ></img>
    </div>
  );
};

export default CentreImage;
