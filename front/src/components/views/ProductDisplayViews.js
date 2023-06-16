import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StarsDisplay } from "../Stars";
import { useCart } from "../../hooks/useGetProducts";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByID } from "../../redux/productsSlice";
import { LoadingScreen } from "../Loading";

export const ProductDisplayViews = () => {
  const { productID } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading } = useSelector(
    (state) => state.productsSlice
  );
  const { add } = useCart();

  useEffect(() => {
    dispatch(fetchProductByID(productID));
    return () => {};
  }, [dispatch, productID]);

  const handleAddItemToCart = () => {
    add(selectedProduct);
  };
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div className="full-wrapper product-display-page__wrapper">
      <strong className="product-display-page__card card">
        <img
          className="product-display-page__card__image"
          src={"http://localhost:5000" + selectedProduct.image}
          alt={selectedProduct.name}
        />
        <div>
          <h1 className="product-display-page__card__title">
            {selectedProduct.name}
          </h1>
          <h2 className="product-display-page__card__subtitle">
            Category: <span>{selectedProduct.category}</span>
          </h2>
          <h2 className="product-display-page__card__subtitle">
            Brand: <span>{selectedProduct.brand}</span>
          </h2>
          <span>
            <h2 className="product-display-page__card__subtitle">
              Description:
              <span> {selectedProduct.description}</span>
            </h2>
          </span>
          <h2 className="product-display-page__card__subtitle">
            Price: <span>${selectedProduct.price}</span>
          </h2>
          <h2 className="product-display-page__card__subtitle">
            Stock: <span>{selectedProduct.countInStock}</span>
          </h2>
          <span>
            <h4>
              Rating:
              <StarsDisplay rating={selectedProduct.rating} />
            </h4>
          </span>
          <h4 className="product-display-page__card__subtitle">
            Number of Reviews: <span>{selectedProduct.numReviews}</span>
          </h4>
        </div>
        {selectedProduct.countInStock === 0 ? (
          <button
            className="product-display-page__card__button btn-add-to-cart"
            disabled
          >
            OUT OF STOCK!
          </button>
        ) : (
          <button className="btn-add-to-cart" onClick={handleAddItemToCart}>
            ADD TO CART
          </button>
        )}
      </strong>
    </div>
  );
};
