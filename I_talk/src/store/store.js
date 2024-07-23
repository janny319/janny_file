import modalReducer from '@/store/modals';
import userReducer from '@/store/user';
import toastReducer from '@/store/toast';
import consultReducer from '@/store/consult';
import noticeReducer from '@/store/notice';
import managerReducer from '@/store/manager';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    modals: modalReducer,
    user: userReducer,
    toast: toastReducer,
    consult: consultReducer,
    notice: noticeReducer,
    manager: managerReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});
