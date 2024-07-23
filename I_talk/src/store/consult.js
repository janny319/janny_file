import { createSlice, nanoid } from '@reduxjs/toolkit';

const initListState = {
  blockCloseCnt: 0,
  counselorCloseCnt: 0,
  systemCloseCnt: 0,
  totalCnt: 0,
  transferCloseCnt: 0,
  userCloseCnt: 0,
  historyList: [],
};
const initSearchParamState = {
  start: '',
  count: 10,
  startDate: '',
  endDate: '',
  centerId: '',
  categoryId: '',
  channelId: '',
  searchType: '',
  searchText: '',
  orderTarget: '',
  orderType: '',
  chatStat: '',
};

export const consultSlice = createSlice({
  name: 'consult',
  initialState: { consultList: initListState, searchParam: initSearchParamState },
  reducers: {
    setConsultList: (state, action) => {
      state.consultList = { ...state.consultList, ...action.payload };
    },
    setSearchParam: (state, action) => {
      state.searchParam = { ...state.searchParam, ...action.payload };
    },
  },
});

export const { setConsultList, setSearchParam } = consultSlice.actions;
export const selectConsult = (state) => state.consult;

export default consultSlice.reducer;
