import classes from "./CentreDisplay.module.css";

const CentreDisplay = (props) => {
  return (
    <div className={classes.displayContainer}>
      <p className={classes.content}>{props.data}</p>
    </div>
  );
};

export default CentreDisplay;
