import { configureStore } from "@reduxjs/toolkit";
import registerModalReducer from "@/redux/slices/registerModalSlice";
import loginModalReducer from "@/redux/slices/loginModalSlice";

export const store = configureStore({
  reducer: {
    registerModal: registerModalReducer,
    loginModal: loginModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
