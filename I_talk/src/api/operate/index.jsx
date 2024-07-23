import { axios, handleResponse } from '@/api/axios';
import { TOAST_DEFAULT_OPTION } from '@/constants/common';

// 카테고리 트리 목록 조회
export const getCenterCategoryTreeApi = async (params) => {
  return await axios
    .get(`/api/operate/category/getCenterCategoryTree`, { params })
    .then((res) => handleResponse(res));
};

// 카테고리 트리 상세조회
export const getCenterCategoryMainInfoApi = async (params) => {
  return await axios
    .get(`/api/operate/category/getCenterCategoryMainInfo`, { params })
    .then((res) => handleResponse(res));
};

// 센터 리스트 조회
export const getCenterListApi = async (params) => {
  return await axios
    .get(`/api/operate/center/getCenterList`, { params })
    .then((res) => handleResponse(res));
};

// 카테고리 상세 저장
export const saveCenterCategoryApi = async (
  params,
  toastOption = TOAST_DEFAULT_OPTION
) => {
  return await axios
    .post(`/api/operate/category/saveCenterCategory`, params)
    .then((res) => handleResponse(res, toastOption));
};

// 카테고리 상세 수정 / 삭제 여부 변경
export const modifyCenterCategoryApi = async (
  params,
  toastOption = TOAST_DEFAULT_OPTION
) => {
  return await axios
    .post(`/api/operate/category/modifyCenterCategory`, params)
    .then((res) => handleResponse(res, toastOption));
};

// 카테고리 순서 변경 수정
export const modifyCenterCategoryTreeOrderApi = async (
  params,
  toastOption = TOAST_DEFAULT_OPTION
) => {
  return await axios
    .post(`/api/operate/category/modifyCenterCategoryTreeOrder`, params)
    .then((res) => handleResponse(res, toastOption));
};
