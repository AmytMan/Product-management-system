import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "../features/productSlice/ProductApi";
import { CategoryApi } from "../features/fetchCategory/CategoryApi";
import { AuthApi } from "../features/authSlice/AuthApi";
const store = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ProductApi.middleware,
      CategoryApi.middleware,
      AuthApi.middleware
    ),
});
export default store;
