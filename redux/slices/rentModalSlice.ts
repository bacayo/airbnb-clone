import { createSlice } from "@reduxjs/toolkit";

interface RentModalState {
  isOpen: boolean;
}

const initialState: RentModalState = {
  isOpen: false,
};

const rentModalSlice = createSlice({
  name: "rentModal",
  initialState,
  reducers: {
    rentModalOnOpen: (state) => {
      state.isOpen = true;
    },
    rentModalOnClose: (state) => {
      state.isOpen = false;
    },
  },
});

export default rentModalSlice.reducer;
export const { rentModalOnClose, rentModalOnOpen } = rentModalSlice.actions;
