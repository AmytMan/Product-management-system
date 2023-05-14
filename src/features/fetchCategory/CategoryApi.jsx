import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CategoryApi = createApi({
  reducerPath: "CategoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
    createCategory: builder.mutation({
      query: (data) => {
        return {
          url: "/categories",
          method: "POST",
          body: data,
        };
      },
    }),
    editCategory: builder.mutation({
      query: (data) => {
        const { id, ...rest } = data;
        return {
          url: `/categories/${id}`,
          method: "PUT",
          body: rest,
        };
      },
    }),
    getCategoryById: builder.query({
      query: (id) => `/categories/${id}`,
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useEditCategoryMutation,
  useGetCategoryByIdQuery,
  useDeleteCategoryMutation,
} = CategoryApi;
