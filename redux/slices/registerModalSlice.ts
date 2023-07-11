import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface RegisterModalInterface {
  isOpen: boolean;
}

const initialState: RegisterModalInterface = {
  isOpen: false,
};

const registerModalSlice = createSlice({
  name: "registerModal",
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

export default registerModalSlice.reducer;

export const { onClose, onOpen } = registerModalSlice.actions;
