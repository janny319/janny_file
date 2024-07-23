import { createSlice, nanoid } from '@reduxjs/toolkit';

const initListState = {
  managerList: [],
  page: 0,
  size: 0,
  totalCount: 0,
};
const initSearchParamState = {
  page: 0,
  size: 10,
  option: '',
  value: '',
  center: '',
  grade: '',
  state: '',
};

export const managerSlice = createSlice({
  name: 'manager',
  initialState: { managerList: initListState, searchParam: initSearchParamState },
  reducers: {
    setManagerList: (state, action) => {
      state.managerList = { ...state.managerList, ...action.payload };
    },
    setSearchParam: (state, action) => {
      state.searchParam = { ...state.searchParam, ...action.payload };
    },
  },
});

export const { setManagerList, setSearchParam } = managerSlice.actions;
export const selectManager = (state) => state.manager;

export default managerSlice.reducer;
