import { axios, handleResponse } from '@/api/axios';

export const getSysyemMenuItemApi = async (params) => {
  return await axios
    .get(`/api/v1/system/menus/items`, { params })
    .then((res) => handleResponse(res));
};
