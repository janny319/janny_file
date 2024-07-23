import { createSlice } from '@reduxjs/toolkit';

const initState = {
  toastType: '',
  toastMsg: '',
  position: '',
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState: { notice: initState },
  reducers: {
    showToastNotice: (state, action) => {
      state.notice = action.payload;
    },
    clearToastNotice: (state) => {
      state.notice = initState;
    },
  },
});

export const { showToastNotice, clearToastNotice } = toastSlice.actions;
export default toastSlice.reducer;
