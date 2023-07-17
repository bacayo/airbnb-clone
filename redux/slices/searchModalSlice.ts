import { createSlice } from "@reduxjs/toolkit";

interface SearchModalState {
  searchModalIsOpen: boolean;
}

const initialState: SearchModalState = {
  searchModalIsOpen: false,
};

const searchModalSlice = createSlice({
  name: "searchModal",
  initialState,
  reducers: {
    searchModalOnOpen: (state) => {
      state.searchModalIsOpen = true;
    },
    searchModalOnClose: (state) => {
      state.searchModalIsOpen = false;
    },
  },
});

export default searchModalSlice.reducer;

export const { searchModalOnOpen, searchModalOnClose } =
  searchModalSlice.actions;
