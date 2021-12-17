import React, { useContext } from "react";

import classes from "./ProductItem.module.css";
import Card from "../UI/Card";
import CartContext from "../../store/cart-context";

const ProductItem = (props) => {
  const price = `$${props.price}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.productId,
      name: props.name,
      amount: 1,
      price: props.price,
    });
  };

  return (
    <li>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.name}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>{price}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: props.description,
            }}
          ></p>
        </div>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
          {/* <button onClick={props.onRemoveFromProductList}>
            Remove from List
          </button> */}
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
