import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useGetProducts";
import { StarsDisplay } from "../Stars";

export const ProductListItem = ({
  _id,
  name,
  description,
  image,
  brand,
  category,
  price,
  countInStock,
  rating,
  numReviews,
}) => {
  const { add } = useCart();
  const handleAddItemToCart = () => {
    add({
      _id,
      name,
      description,
      image,
      brand,
      category,
      price,
      countInStock,
      rating,
      numReviews,
    });
  };
  return (
    <li className="product_list__item card">
      <img
        className="product_list__item__img"
        src={"http://localhost:5000" + image}
        alt={name}
      />
      <main>
        <h2 className="product_list__item__brand-category">{`${brand}-${category}`}</h2>
        <Link to={`/products/${_id}`}>
          <h1 className="product_list__item__title">{name}</h1>
        </Link>
        <h2 className="product_list__item__description">{description}</h2>
        <h2>${price}</h2>
        <span>
          <StarsDisplay rating={rating} />
          <h4>Stock: {countInStock}</h4>
        </span>
      </main>
      {countInStock === 0 ? (
        <button
          className="product_list__item__add-btn btn-add-to-cart"
          disabled
        >
          OUT OF STOCK!
        </button>
      ) : (
        <button
          className="product_list__item__add-btn btn-add-to-cart"
          onClick={handleAddItemToCart}
        >
          ADD TO CART
        </button>
      )}
    </li>
  );
};
