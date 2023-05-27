import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env["ENVIRONMENT"] === "PROD"
        ? process.env["PROD_URL"]
        : "http://localhost:5000/admin",
    // : process.env["DEV_URL"],
  }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "ProductById"],
  endpoints: build => ({
    // getUser: build.query({
    //   query: id => `general/user/${id}`,
    //   providesTags: ["User"],
    // }),
    getProducts: build.query({
      query: ({ page, limit }) => ({
        url: `/products/?limit=${limit}&page=${page}`,
        method: "POST",
      }),
      providesTags: ["Products"],
    }),
    getProductById: build.query({
      query: id => `/products/${id}`,
      providesTags: ["ProductById"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = api;
