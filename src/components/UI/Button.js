import classes from "./Button.module.css";

const Button = (props) => {
  const className = `${classes.button} ${props.className}`;

  return (
    <button
      className={className}
      type={props.type || "button"}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
