import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      className=" w-10/12 mx-auto text-[#150A24]  border-b border-gray-900
     flex justify-between items-center px-4 py-3
     cursor-pointer"
    >
      <Link to="/">
        <h1 className="text-4xl font-bold">TodayTech</h1>
      </Link>

      <button
        onClick={() => navigate("/admin")}
        className="bg-[#150A24] px-5   cursor-pointer flex items-center gap-2 rounded-4xl py-3 text-white"
      >
        <span>Login</span>

        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Navbar;
