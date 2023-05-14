import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import {
  useEditCategoryMutation,
  useGetCategoryByIdQuery,
} from "../../features/fetchCategory/CategoryApi";

export default function UpdateCategory() {
  const { register, handleSubmit, reset } = useForm();
  const { categoryid } = useParams();
  const Navigate = useNavigate();
  const { data } = useGetCategoryByIdQuery(categoryid);
  const [updateCategory, { isSuccess }] = useEditCategoryMutation();

  const onSubmit = async (data) => {
    await updateCategory({ id: categoryid, ...data });
    console.log(data);
  };
  if (isSuccess) {
    alert("updated sucessfully");
    Navigate("/dashboard");
  }

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  return (
    <div className="d-flex justify-content-center align-items-center  vh-100 ">
      <form onSubmit={handleSubmit(onSubmit)} className="border w-50 p-5">
        <h1 className="text-center">Update Category</h1>
        <label htmlFor="name">Category Name</label>
        <input
          {...register("name")}
          type="text"
          id="name"
          placeholder="Enter the category name"
        />

        <label htmlFor="image">Image</label>
        <input
          {...register("image")}
          placeholder="Enter the valid url of image"
          id="image"
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
