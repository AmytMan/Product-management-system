import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useUpdateProductMutation,
  useGetProductByIdQuery,
} from "../../features/productSlice/ProductApi";
import { useGetCategoriesQuery } from "../../features/fetchCategory/CategoryApi";

export default function Update() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { data: categories } = useGetCategoriesQuery();

  const { data: product } = useGetProductByIdQuery(productId);

  const { register, handleSubmit, reset } = useForm();

  const [updateProduct, { isLoading, isSuccess }] = useUpdateProductMutation();

  const onSubmit = async (data) => {
    await updateProduct({ id: productId, ...data });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(`/products/${productId}`);
    }
  }, [isSuccess, navigate, productId]);

  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  return (
    <div className="container">
      {product ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Product Name</label>
            <input
              {...register("title")}
              type="text"
              id="title"
              placeholder="Enter the product name"
            />

            <label htmlFor="description">Description </label>
            <input
              {...register("description")}
              placeholder="Write short description"
              type="text"
              id="description"
            />

            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              {...register("price")}
              placeholder="$"
            />

            <label htmlFor="category">Category</label>
            <select {...register("categoryId")} id="category">
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>

            <label htmlFor="images">Images</label>
            <input
              {...register("images")}
              placeholder="Enter the valid url of image"
              id="images"
            />

            <button type="submit">Update</button>
          </form>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
