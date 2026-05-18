import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import authApi from "./features/auth/authApi";

import authreducer from "./features/auth/authSlice"
import productsApi from "./features/products/productsApi";
import reviewApi from "./features/reviews/reviewsApi";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    auth:authreducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewApi.reducerPath]:reviewApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,productsApi.middleware,reviewApi.middleware),
});
