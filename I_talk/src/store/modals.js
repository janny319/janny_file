import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

export const modalSlice = createSlice({
  name: 'modals',
  initialState: { modals: initialState },
  reducers: {
    openModal: (state, action) => {
      state.modals.push(action.payload);
    },
    closeModal: (state, action) => {
      state.modals = state.modals.filter((modal) => modal.id !== action.payload) ?? [];
    },
    clearModal: (state) => {
      state.modals = [];
    },
  },
});

export const { openModal, closeModal, clearModal } = modalSlice.actions;
export const selectModal = (state) => state.modals;

export default modalSlice.reducer;
