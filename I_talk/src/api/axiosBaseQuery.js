import { axios } from '@/api/axios';

const APP_URL = import.meta.env.VITE_CHATTING_SERVER;

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: APP_URL }) =>
  async ({ url, method, data, params, headers, body }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
        body,
      });
      return Promise.resolve(result);
    } catch (axiosError) {
      return Promise.reject(axiosError?.response?.data); // Should return in this format only, becasuse in order to populate error from axios interceptor "return response.data"
    }
  };

export default axiosBaseQuery;
