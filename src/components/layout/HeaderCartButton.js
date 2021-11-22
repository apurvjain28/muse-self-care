import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.openCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        Your Cart
        <span className={classes.badge}>{numOfCartItems}</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
