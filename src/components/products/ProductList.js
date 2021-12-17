import React from "react";
import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";
const ProductList = (props) => {
  const removeFromProductListHandler = (id) => {};

  return (
    <ul className={classes.list}>
      {props.dummyData.map((product) => (
        <ProductItem
          key={product.id}
          productId={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
          onRemoveFromProductList={removeFromProductListHandler}
        />
      ))}
    </ul>
  );
};

export default ProductList;
