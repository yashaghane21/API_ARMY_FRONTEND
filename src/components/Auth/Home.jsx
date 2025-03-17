import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLogin")) {
      navigate("/");
    }
  });
  const handlelogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className=" font-bold flex flex-col justify-center items-center h-screen">
      {localStorage.getItem("useremail")}
      <h1>Welcome to API-ARMY </h1>
      <p>we are currently in building state</p>
      <button
        className="bg-blue-500 text-white px-2 p-1 rounded-sm"
        onClick={handlelogout}
      >
        logout
      </button>
    </div>
  );
};

export default Home;
