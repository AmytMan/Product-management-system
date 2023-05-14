import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "ProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    createProduct: builder.mutation({
      query: ({ title, description, price, categoryId, images }) => ({
        url: "/products",
        method: "POST",
        body: { title, description, price, categoryId, images },
      }),
    }),
    updateProduct: builder.mutation({
      query: (data) => {
        const { id, ...rest } = data;
        return {
          url: `/products/${id}`,
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: rest,
        };
      },
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = ProductApi;
