import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../../../features/authSlice/AuthApi";

function Login() {
  const [LoginUser, { inSuccess }] = useLoginUserMutation();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState(null); // Add state variable for error message

  const onSubmit = async (formData) => {
    const { email, password } = formData;
    try {
      const result = await LoginUser({ email, password });
      const { access_token, refresh_token } = result.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.message);
      setErrorMessage(`email address or password you entered didn't matched .`);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-dark rounded-3 border p-5">
        <h1 className="text-center fw-bolder">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            placeholder="email..."
          />
          {errors.email && <span>This field is Required</span>}
          {errorMessage && <div>{errorMessage}</div>}

          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            id="password"
            placeholder="password"
          />
          {errors.password && <span>This field is Required</span>}
          <input type="submit" value="Sign In" />
        </form>
        <div className="mb-3">
          Don't have an account?{" "}
          <Link to="/register" className="text-white">
            {" "}
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
