import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="d-flex flex-column ">
      <ul className="d-flex  justify-content-end list-unstyled ">
        <li className="m-4  ">
          <Link to="/login" className="text-decoration-none text-white">Log In</Link>
        </li>
        <li
          className="bg-white  my-4"
          style={{ width: "2px", height: "25px" }}
        ></li>
        <li className="m-4">
          <Link to="/register"className="text-decoration-none text-white">Register</Link>
        </li>
      </ul>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 p-5 ">
        <h1> Welcome to Product Management System !!</h1>
        <h4>Login To Discover Products and Perform CRUD Operations !!</h4>
        <h6 className="text-center"> <Link to='/documentation'>Click me</Link> to know How to run application Locally</h6>

      </div>
    </div>
  );
}

export default HomePage;
