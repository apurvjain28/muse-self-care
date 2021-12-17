// the data will be fetched using shopify product-api
// render all the products and give option to show only recommended products by the owner
// give option to all the product in cart
import React, { useState, useContext, useCallback, useEffect } from "react";
import useHttp from "../hooks/use-http";
import ProductList from "../components/products/ProductList";
import AuthContext from "../store/auth-context";

async function getProducts() {
  // Using heroku server for now to bypass CORS error.
  // Shopify doesn't allow for local host to access data through API.
  // Before Deployment on production server, remove the heroku url
  let url =
    "https://tranquil-mountain-75901.herokuapp.com/https://muse-self-care.myshopify.com/admin/api/2021-10/products.json";
  let headers = {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": process.env.REACT_APP_API_KEY,
  };
  const response = await fetch(url, {
    headers: headers,
  });
  const data = await response.json();
  addData(data);
}

function addData(object) {
  let productArr = object.products;
  for (var p in productArr) {
    let prod = productArr[p];

    var product = {
      key: prod.id,
      id: prod.id,
      name: prod.title,
      price: +prod.variants[0].price,
      description: prod.body_html,
    };
    if (prod.image) {
      product.image = prod.image.src;
    }
    product_data.push(product);
    //console.log(product_data);
  }
}

let product_data = [];
getProducts();

const ProductPage = () => {
  const authCtx = useContext(AuthContext);
  let recommendedProducts;

  if (authCtx.data?.recommendedProducts) {
    recommendedProducts = Object.values(authCtx.data.recommendedProducts);
  }

  let filteredProducts = product_data.filter((product) =>
    recommendedProducts.includes(String(product.id))
  );

  return (
    <div>
      <h1>Recommended Products</h1>
      <ProductList dummyData={filteredProducts} />
    </div>
  );
};

export default ProductPage;
