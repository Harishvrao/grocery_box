import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products"],
  endpoints: build => ({
    // getUser: build.query({
    //   query: id => `general/user/${id}`,
    //   providesTags: ["User"],
    // }),
    getProducts: build.query({
      query: () => ({
        url: "/products/?limit=20&page=4",
        method: "POST",
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = api;
