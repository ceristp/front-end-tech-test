import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductByID } from "../helpers/products/getProductByID";
import { getProducts } from "../helpers/products/getProducts";

const initialState = {
  products: [],
  selectedProduct: {
    _id: "0",
    name: "",
    image: "",
    description: "",
    brand: "",
    category: "",
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  loading: true,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getProducts();
    return products;
  }
);

export const fetchProductByID = createAsyncThunk(
  "products/fetchProductByID",
  async (id) => {
    const product = await getProductByID(id);
    return product;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (extraReducers) => {
    extraReducers
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        alert("Un error ha ocurrido, intente mas tarde");
        state.products = [];
        state.loading = false;
      })
      .addCase(fetchProductByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductByID.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductByID.rejected, (state) => {
        alert("Un error ha ocurrido, intente mas tarde");
        state.selectedProduct = [];
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function

export default productsSlice.reducer;



























/* import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductByID } from "../../helpers/products/getProductByID";
import { getProducts } from "../../helpers/products/getProducts";

const initialState = {
  products: [],
  selectedProduct: {
    _id: "0",
    name: "",
    image: "",
    description: "",
    brand: "",
    category: "",
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  loading: true,
};
//ASYNC STUFF
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getProducts();
    return products;
  }
);
export const fetchProductByID = createAsyncThunk(
  "products/fetchProductByID",
  async (id) => {
    const product = await getProductByID(id);
    return product;
  }
);
//ASYNC STUFF

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        alert("Un error ha ocurrido, intente mas tarde");
        state.products = [];
        state.loading = false;
      })
      .addCase(fetchProductByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductByID.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductByID.rejected, (state) => {
        alert("Un error ha ocurrido, intente mas tarde");
        state.selectedProduct = [];
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function

export default productsSlice.reducer; */
