import { configureStore } from "@reduxjs/toolkit";
import registerModalReducer from "@/redux/slices/registerModalSlice";

export const store = configureStore({
  reducer: {
    registerModal: registerModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
