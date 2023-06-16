import { createSlice } from "@reduxjs/toolkit";

const storedData = JSON.parse(localStorage.getItem("cartSlice"));
const initialState = storedData
  ? storedData
  : {
      cart: [],
      itemCount: 0,
      cartPrice: 0,
    };

const updateCartPriceAndItemCount = (state, priceChange, countChange) => {
  state.cartPrice += priceChange;
  state.itemCount += countChange;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let product = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (product) {
        if (product.amount + 1 > product.countInStock) {
          alert("Maximo stock permitido");
        } else {
          product.amount += 1;
          updateCartPriceAndItemCount(state, action.payload.price, 1);
        }
      } else {
        state.cart.push({
          _id: action.payload._id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          countInStock: action.payload.countInStock,
          amount: 1,
        });
        updateCartPriceAndItemCount(state, action.payload.price, 1);
      }
      localStorage.setItem("cartSlice", JSON.stringify(state));
    },
    removeProduct: (state, action) => {
      const product = state.cart.find(
        (product) => product._id === action.payload
      );
      if (product.amount - 1 < 1) {
        state.cart = state.cart.filter((prod) => prod._id !== product._id);
        updateCartPriceAndItemCount(state, -product.price, -1);
      } else {
        product.amount--;
        updateCartPriceAndItemCount(state, -product.price, -1);
      }
      localStorage.setItem("cartSlice", JSON.stringify(state));
    },
  },
});


// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;






















/* import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

// Load saved cart data from local storage
const storedData = JSON.parse(localStorage.getItem("cartSlice"));

// Set initial state of the cart slice
const initialState = storedData
  ? storedData
  : {
      cart: [],
      itemCount: 0,
      cartPrice: 0,
    };

// Define a reducer function to handle addProduct action
const handleAddProduct = (state, action) => {
  const { _id, name, image, price, countInStock } = action.payload;

  // Check if the product already exists in the cart
  const existingProduct = state.cart.find((product) => product._id === _id);

  if (existingProduct) {
    // Increment the amount of the existing product
    if (existingProduct.amount + 1 > existingProduct.countInStock) {
      // Show a message to the user if the product is out of stock
      alert("Maximo stock permitido");
    } else {
      state.cart = produce(state.cart, (draftCart) => {
        const productIndex = draftCart.findIndex((p) => p._id === _id);
        draftCart[productIndex].amount += 1;
      });

      // Increment cart price and item count
      state.cartPrice += price;
      state.itemCount += 1;
    }
  } else {
    // Add the new product to the cart
    state.cart = produce(state.cart, (draftCart) => {
      draftCart.push({
        _id,
        name,
        image,
        price,
        countInStock,
        amount: 1,
      });
    });

    // Increment cart price and item count
    state.cartPrice += price;
    state.itemCount += 1;
  }

  // Save cart data to local storage
  localStorage.setItem("cartSlice", JSON.stringify(state));
};

// Define a reducer function to handle removeProduct action
const handleRemoveProduct = (state, action) => {
  const productId = action.payload;

  // Find the product to remove from the cart
  const productToRemove = state.cart.find((product) => product._id === productId);

  if (productToRemove.amount - 1 < 1) {
    // Remove the product from the cart if its amount would become 0
    state.cart = state.cart.filter((prod) => prod._id !== productId);

    // Decrement cart price
    state.cartPrice -= productToRemove.price;
  } else {
    // Decrement the amount of the product in the cart
    state.cart = produce(state.cart, (draftCart) => {
      const productIndex = draftCart.findIndex((p) => p._id === productId);
      draftCart[productIndex].amount -= 1;
    });

    // Decrement cart price
    state.cartPrice -= productToRemove.price;
  }

  // Decrement item count
  state.itemCount -= 1;

  // Save cart data to local storage
  localStorage.setItem("cartSlice", JSON.stringify(state));
};

// Define the cart slice


// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer; */

























/* import { createSlice } from "@reduxjs/toolkit";

const storedData = JSON.parse(localStorage.getItem("cartSlice"));

const initialState = storedData
  ? storedData
  : {
      cart: [],
      itemCount: 0,
      cartPrice: 0,
    };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (product) {
        if (product.amount + 1 > product.countInStock) {
          alert("Maximo stock permitido");
        } else {
          product.amount += 1;

          state.cartPrice += action.payload.price;
          state.itemCount++;
        }
      } else {
        state.cart.push({
          _id: action.payload._id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          countInStock: action.payload.countInStock,
          amount: 1,
        });

        state.cartPrice += action.payload.price;
        state.itemCount++;
      }
      localStorage.setItem("cartSlice", JSON.stringify(state));
    },
    removeProduct: (state, action) => {
      const product = state.cart.find(
        (product) => product._id === action.payload
      );

      if (product.amount - 1 < 1) {
        state.cart = state.cart.filter((prod) => prod._id !== product._id);
        state.cartPrice -= product.price;
      } else {
        product.amount--;
        state.cartPrice -= product.price;
      }
      state.itemCount--;
      localStorage.setItem("cartSlice", JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer; */
