import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import { LoadingScreen } from "../Loading";
import { ProductList } from "../layout/ProductList";

export const ProductListViews = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productsSlice);
  useEffect(() => {
    dispatch(fetchProducts());
    return () => {};
  }, [dispatch]);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div className="full-wrapper catalog-screen__wrapper">
      <h1>PRODUCTS</h1>
      <ProductList productList={products} />
    </div>
  );
};
