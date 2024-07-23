import { axios, handleResponse } from '@/api/axios';
import { TOAST_DEFAULT_OPTION } from '@/constants/common';

// 로그인
export const postLoginApi = async (params) => {
  return await axios.post(`/api/portal/login`, params).then((res) => handleResponse(res));
};

// 로그아웃
export const postLogOutApi = async (param) => {
  return await axios.post(`/api/portal/removeSession`, param).then((res) => handleResponse(res));
};

// 설정 정보
export const getConfigInfoApi = async (params) => {
  return await axios.get(`/api/portal/configs`, { params }).then((res) => handleResponse(res));
};

// 사용자정보
export const getUserInfoApi = async (params) => {
  return await axios.get(`/api/v1/user-info`, { params }).then((res) => handleResponse(res));
};
