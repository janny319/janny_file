import Axios from 'axios';
import {
  getTokenFromLocalStorage,
  logoutFunction,
  setAuthTokenFromResponseHeader,
} from '@/utils/authUtil';
import { toast } from 'react-toastify';
import { TOAST_DEFAULT_OPTION } from '@/constants/common';

const APP_URL = import.meta.env.VITE_CHATTING_SERVER;

/**
 * 공통 Axios 응답 처리
 * @param toastOption 상품등록 파라미터
 * @param { boolean } toastOption.isToast 공통 토스트 사용여부
 * @param { string } toastOption.successMsg 성공 메세지
 * @param { string } toastOption.errorMsg 실패 메세지
 *
 * @returns {*}
 */

export const handleResponse = (response, toastOption = TOAST_DEFAULT_OPTION) => {
  if (toastOption.isToast)
    response?.status === 200
      ? successToast(response, toastOption.successMsg)
      : errorToast(response, toastOption.errorMsg);
  return { ...response.data, code: response.status, headers: response.headers };
};

export const axios = Axios.create({
  baseURL: APP_URL,
});
const errorToast = (error, message) => {
  if (error?.data?.errorCode === 0) {
    toast.error(Boolean(message) ? message : error?.data?.errorMessage, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      icon: false,
      limit: 1,
      closeOnClick: false,
      closeButton: false,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    });
  }

  return error;
};

const successToast = (response, message) => {
  if (response.status === 200 && response.config.method !== 'get') {
    toast.info(Boolean(message) ? message : `처리되었습니다.`, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      icon: false,
      limit: 1,
      closeOnClick: false,
      closeButton: false,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    });
  }

  return response;
};
axios.interceptors.response.use(
  (response) => {
    if (response && response.config && response.config.headers) {
      setAuthTokenFromResponseHeader(response);
    }

    return response;
  },
  (error) => {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 403:
          // TODO 토큰 문제인지 권한 문제인지 분리 필요
          axios.defaults.headers.common['Authorization'] = '';
          logoutFunction();
          // window.location.href = '/';
          return error.response;
        default:
          return error.response;
      }
    }

    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    const token = getTokenFromLocalStorage();
    if (config.headers && token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);
