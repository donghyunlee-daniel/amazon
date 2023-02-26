import React from "react";
import { Link, useHistory } from "react-router-dom";
import CartProduct from "./CartProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispath] = useStateValue();
  const history = useHistory();
  return (
    <div className="payment">
      <div className="payment_container">
        <Link to="/cart">
          <h1>Back to Cart</h1>
        </Link>
        <h1> ({basket?.length} items are in the cart)</h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
            <p>{user?.email} 's Address</p>
            <p>Ontario</p>
            <p>London</p>
          </div>
        </div>
      </div>

      <div className="payment_section">
        <div className="payment_title">
          <h3>Product List</h3>
          <div className="payment_items">

            {basket.map((item) => (
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
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment</h3>
          </div>
          <div className="payment_details">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
