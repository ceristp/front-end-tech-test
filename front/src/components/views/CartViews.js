import React from "react";
import { CartProductList } from "../layout/CartProductList";

export const CartViews = () => {
  return (
    <div className="full-wrapper cart-page__wrapper">
        <h1>CART</h1>
        <CartProductList />
    </div>
  );
};
