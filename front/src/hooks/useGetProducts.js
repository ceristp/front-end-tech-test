import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../redux/cartSlice";

export const useCart = () => {
  const dispatch = useDispatch();
  const cartSlice = useSelector((state) => state.cartSlice);
  const add = (product) => {
    dispatch(addProduct(product));
  };
  const remove = (_id) => {
    dispatch(removeProduct(_id));
  };
  return {
    add,
    remove,
    itemCount: cartSlice.itemCount,
    cart: cartSlice.cart,
    cartPrice: Math.abs(cartSlice.cartPrice.toFixed(2)),
  };
};
