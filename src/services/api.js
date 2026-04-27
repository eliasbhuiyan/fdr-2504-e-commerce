import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
    credentials: "include",
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ category, limit, skip }) =>
        `/products${category ? `/category/${category}` : ""}?limit=${limit}&skip=${skip}`,
    }),
    getCategoryList: build.query({
      query: () => "/products/category-list",
    }),
    getProductDetails: build.query({
      query: (id) => `/products/${id}`,
    }),
    searchProduct: build.query({
      query: (search) => `/products/search?q=${search}`,
    }),
    login: build.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
    getProfile: build.query({
      query: (id) => ({
        url: `/auth/me`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoryListQuery,
  useGetProductDetailsQuery,
  useLoginMutation,
  useGetProfileQuery,
  useLazySearchProductQuery
} = apiService;

// getProducts = https://dummyjson.com/products
