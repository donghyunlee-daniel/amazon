import React from "react";
import Subtotal from "./Subtotal";
import CartProduct from "./CartProduct";
import "./Cart.css";
import { useStateValue } from "./StateProvider";
function Cart() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="cart">
      <div className="cart_left">
        <img
          className="cart_ad"
          src="https://www.yellowhead.com/wp-content/uploads/nintendo-switch-display-ad.jpg"
        />

        <div>
          <h2 className="cart_title">Cart</h2>

            {basket.map(item=>(
                <CartProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}

        </div>
      </div>
      <div className="cart_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
