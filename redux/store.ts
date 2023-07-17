import { configureStore } from "@reduxjs/toolkit";
import registerModalReducer from "@/redux/slices/registerModalSlice";
import loginModalReducer from "@/redux/slices/loginModalSlice";
import rentModalReducer from "@/redux/slices/rentModalSlice";
import searchModalReducer from "@/redux/slices/searchModalSlice";

export const store = configureStore({
  reducer: {
    registerModal: registerModalReducer,
    loginModal: loginModalReducer,
    rentModal: rentModalReducer,
    searchModal: searchModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
