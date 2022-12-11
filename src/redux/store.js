import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import searchReducer from "./features/searchSlice";
import topRatedReducer from "./features/topRatedSlice";
import { moviesApi } from "./services/apiEndpoints";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    topRated: topRatedReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
