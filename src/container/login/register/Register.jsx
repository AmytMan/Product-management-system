import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateUserMutation } from "../../../features/authSlice/AuthApi";
function Register() {
  const [createUser] = useCreateUserMutation();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const { name, email, password, avatar } = formData;

    try {
      await createUser({ name, email, password, avatar });
      navigate("/login");
    } catch (error) {
      alert("Error creating user: " + error.message);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg-dark p-5 border rounded-3">
          <h1 className="text-center">CREATE ACCOUNT</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">username</label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter username"
              id="username"
              type="text"
            />
            {errors.username && <span>This field is Required</span>}

            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: true })}
              placeholder="password"
              id="password"
              type="password"
            />
            {errors.password && <span>This field is Required</span>}

            <label htmlFor="email">Email</label>
            <input
              {...register("email", { required: true })}
              id="email"
              type="email"
              placeholder="email......"
            />
            {errors.email && <span>This field is Required</span>}

            <label htmlFor="profile">Profile image</label>
            <input
              {...register("avatar", { required: true })}
              placeholder="url of profile pic"
              id="profile"
              type="text"
            />
            {errors.avatar && <span>This field is Required</span>}

            <input type="submit" value="Sign In" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
