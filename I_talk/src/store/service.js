import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {serviceId: '', serviceName: ''};

export const serviceSlice = createSlice({
  name: "service",
  initialState: { value: initialStateValue },
  reducers: {
    setService: (state, action) => {
      state.value = action.payload
    },
    clearService: (state) => {
      state.value = initialStateValue
    },
  },
});

export const { setService, clearService } = serviceSlice.actions;
export default serviceSlice.reducer;

