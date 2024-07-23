import axiosBaseQuery from '@/api/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    fetchJokes: builder.query({
      menuItem: () => ({
        url: '/api/v1/system/menus/items',
        method: 'get',
      }),
    }),
  }),
});

export const { useMenuItemQuery } = jokesApiService;
