import React from "react";
import { useCart } from "../../hooks/useGetProducts";
import { CartProductListItem } from "./CartProductListItem";

export const CartProductList = () => {
  const { cart, cartPrice } = useCart();
  return (
    <div className="full-wrapper product-display-page__wrapper">
      <strong>
      {cart.length === 0 ? (
        <strong>No items in the cart</strong>
      ) : (
        <ul className="cart-product-list__list">
          {cart.map((product) => (
            <CartProductListItem key={product._id} {...product} />
          ))}

          <strong>Total price: ${cartPrice.toFixed(2)}</strong>
        </ul>
      )}
      </strong>
    </div>
  );
};
