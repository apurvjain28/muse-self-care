import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
};

export default Modal;
