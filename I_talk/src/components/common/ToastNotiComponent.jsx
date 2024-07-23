import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Slide, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { clearToastNotice } from '@/store/toast';
import { useDispatch } from 'react-redux';
import '@/style/toast.scss';

const ToastNotiComponent = () => {
  const {
    toastType,
    toastMsg,
    position = 'bottom-right',
  } = useSelector((state) => state.toast.notice);
  const dispatch = useDispatch();

  const showToast = () => {
    if (toastType === 'SUCCESS') {
      toast.success(toastMsg, {
        position: position,
        autoClose: 3000,
        hideProgressBar: true,
        icon: false,
        limit: 1,
        closeOnClick: false,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        onClose: () => dispatch(clearToastNotice()),
      });
    } else if (toastType === 'ERROR') {
      toast.error(toastMsg, {
        position: position,
        autoClose: 3000,
        hideProgressBar: true,
        icon: false,
        limit: 1,
        closeOnClick: false,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        onClose: () => dispatch(clearToastNotice()),
      });
    } else if (toastType === 'INFO') {
      toast.info(toastMsg, {
        position: position,
        autoClose: 3000,
        hideProgressBar: true,
        icon: false,
        limit: 1,
        closeOnClick: false,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        onClose: () => dispatch(clearToastNotice()),
      });
    }
  };

  useEffect(() => {
    if (!toastType || !toastMsg) {
      return;
    }
    showToast();
  }, [toastType, toastMsg]);

  return (
    <ToastContainer
      position={'bottom-right'}
      transition={Slide}
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{ whiteSpace: 'pre-wrap', width: '400px' }}
    />
  );
};

export default ToastNotiComponent;
