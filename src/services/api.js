import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const { useGetProductsQuery } = apiService;

// getProducts = https://dummyjson.com/products
