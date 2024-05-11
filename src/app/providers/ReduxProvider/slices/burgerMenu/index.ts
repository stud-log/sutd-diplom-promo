import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const burgerMenu = createSlice({
  name: 'burgerMenu',
  initialState,
  reducers: {
    toggleModal: (state, { payload }) => {
      state.isOpen = payload;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { actions: burgerMenuActions } = burgerMenu;
export const { reducer: burgerMenuReducer } = burgerMenu;