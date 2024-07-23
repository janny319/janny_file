import { axios, handleResponse } from "@/api/axios";

// 로그인
export const postLoginApi = async (params) => {
  return await axios
    .post(`/api/portal/login`, params)
    .then((res) => handleResponse(res));
};

// 로그아웃
export const postLogOutApi = async (param) => {
  return { code: 200 };
};

// 설정 정보
export const getConfigInfoApi = async (params) => {
  return await axios
    .get(`/api/portal/configs`, { params })
    .then((res) => handleResponse(res));
};

// 사용자정보
export const getUserInfoApi = async (params) => {
  return {
    data: {
      userId: "test",
      name: "어드민",
      tel: "010-2213-5825",
      role: null,
      grade: "ROLE_ADMIN",
      gradeName: "관리자",
      centerName: "테스트센터1",
      stateId: "T",
      menuRoleId: "관리자",
      fileDownloadYn: null,
    },
    header: {
      resultCode: 0,
      errorCode: null,
      resultMessage: "success",
      isSuccessful: true,
    },
  };
};
