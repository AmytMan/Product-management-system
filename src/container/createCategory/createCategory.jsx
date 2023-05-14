import React from "react";
import { useCreateCategoryMutation } from "../../features/fetchCategory/CategoryApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function createCategory() {
  
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [createCategory, { isLoading, isSuccess }] =
    useCreateCategoryMutation();

  const onSubmit = async (data) => {
    await createCategory(data);
    console.log(data);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isSuccess) {
    alert("Category Created Sucessfully");
    navigate("/dashboard");
  }

  return (
    <div className="d-flex justify-content-center align-items-center  vh-100 ">
      <form onSubmit={handleSubmit(onSubmit)} className="border w-50 p-5">
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

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default createCategory;
