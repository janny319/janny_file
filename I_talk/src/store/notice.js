import { createSlice, nanoid } from '@reduxjs/toolkit';

const initListState = {
  noticeMainInfoList: [],
  page: 0,
  size: 0,
  totalCount: 0,
};
const initSearchParamState = {
  isCenter: 'N',
  page: 0,
  size: 10,
  type: '',
  value: '',
};

export const noticeSlice = createSlice({
  name: 'notice',
  initialState: { noticeList: initListState, searchNoticeParam: initSearchParamState },
  reducers: {
    setNoticeList: (state, action) => {
      state.noticeList = { ...state.noticeList, ...action.payload };
    },
    setSearchNoticeParam: (state, action) => {
      state.searchNoticeParam = { ...state.searchNoticeParam, ...action.payload };
    },
  },
});

export const { setNoticeList, setSearchNoticeParam } = noticeSlice.actions;
export const selectNotice = (state) => state.notice;

export default noticeSlice.reducer;
