import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div class="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/onsite/Apr18/PeX_1500x200._CB1198675309_.jpg"
          alt="Image not loaded"
        />
        <div>
          <h3>Hello,{user.email}</h3>
          <h2 className="checkout_title">Your Shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div class="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
