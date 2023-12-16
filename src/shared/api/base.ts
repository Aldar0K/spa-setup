import { FetchArgs, FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: __API_URL__,
  // credentials: 'include',
  prepareHeaders: (headers, { getState }) => headers,
});

const baseQueryWithReauth = async (args: FetchArgs, api: BaseQueryApi, extraOptions: FetchBaseQueryMeta) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({}),
});
