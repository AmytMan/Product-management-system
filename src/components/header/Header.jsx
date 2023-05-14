import React from "react";
import { useGetUserProfileQuery } from "../../features/authSlice/AuthApi";
import { useNavigate } from "react-router-dom";
function Header() {
  const { data, isLoading } = useGetUserProfileQuery();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/");
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center  px-5 py-1 ">
        <div>
          <img
            className="mx-2 "
            src={data.avatar}
            alt=""
            style={{ width: "80px", height: "80px", borderRadius: "100%" }}
          />
          {`Welcome ${data.name} !!!`}
        </div>
        <button className="btn btn-secondary " onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Header;
