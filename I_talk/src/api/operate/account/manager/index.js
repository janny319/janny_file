import { axios, handleResponse } from '@/api/axios';
import { TOAST_DEFAULT_OPTION } from '@/constants/common';

// 사용자 정보 목록 조회
export const getManagersApi = async (params) => {
  return await axios
    .get(`/api/v1/system/managers`, { params })
    .then((res) => handleResponse(res));
};

// 사용자 정보 상세 조회
export const getManagerApi = async (params) => {
  return await axios
    .get(`/api/v1/system/managers/detail`, { params })
    .then((res) => handleResponse(res));
};

// 전체 권한 목록 조회
export const getGradesCountsApi = async () => {
  return await axios
    .get(`/api/v1/system/managers/grades/counts`)
    .then((res) => handleResponse(res));
};

// 전체 셀렉트 옵션 정보 조회
export const getSearchDummySelectOptionsApi = async () => {
  return await axios
    .get(`/api/v1/system/managers/selectOptions`)
    .then((res) => handleResponse(res));
};

// 센터 정보 조회
export const centerInfoApi = async () => {
  return await axios
    .get(`/api/v1/system/managers/centerInfo`)
    .then((res) => handleResponse(res));
};

// 사용자 정보 등록 (작업필요)
export const saveManagerApi = async (
  params,
  toastOption = TOAST_DEFAULT_OPTION
) => {
  return await axios
    .post(`/api`, params)
    .then((res) => handleResponse(res, toastOption));
};
