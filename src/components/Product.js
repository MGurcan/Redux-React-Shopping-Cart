import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

import "./Product.css";
import SingleProduct from "./SingleProduct";

const Product = ({ name, id, imgURL, price, features }) => {


  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }))
  }

  const [showFeatures, setShowFeatures] = useState(false);
  const handleShowFeatures = () => {
    setShowFeatures(!showFeatures);
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
      <button onClick={handleShowFeatures}>Show Features</button>

      <div className="show-features">
        {showFeatures && <SingleProduct 
        id={id}
        name={name}
        imgURL={imgURL}
        price={price}
        features={features} />}
      </div>

    </div>
  );
};

export default Product;
