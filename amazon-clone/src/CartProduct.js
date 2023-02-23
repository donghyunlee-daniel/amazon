import React from "react";
import "./CartProduct.css";
import { useStateValue } from "./StateProvider";

function CartProduct({ id, image, title, price, rating }) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket =() =>{
        dispatch({
            type:'DELETE_FROM_CART',
            id:id,


        })
    }

  return (
    <div className="cartProduct">
      <img className="cartProduct_image" src={image} alt="" />

      <div className="cartProduct_info">
        <p className="cartProduct_title">{title}</p>
        <p className="cartProduct_price">
          <small>$</small>
          <strong>{price}</strong>
          <small>CAD</small>
        </p>
        <div className="cartProduct_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>★</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Delete</button>
      </div>
    </div>
  );
}

export default CartProduct;
