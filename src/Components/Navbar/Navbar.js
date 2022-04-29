import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useBasicImage from "../CUSTOM_HOOK/useBasicImage";

const Navbar = () => {
  const [basicImage] = useBasicImage();
  const logo = basicImage.find((item) => item.name === "brand-logo");
  const navigate = useNavigate();

  return (
    <div className="bg-[#022438] flex items-center justify-between px-28 py-4">
      <div className="w-52 cursor-pointer">
        <img onClick={() => navigate("/home")} src={logo?.image} alt="" />
      </div>

      <div className="flex items-center space-x-8 text-xl font-semibold">
        <NavLink className={({ isActive }) => (isActive ? "text-[#be6e51]" : "text-[aliceblue]")} to="/home">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#be6e51] " : "text-[aliceblue]")}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#be6e51]" : "text-[aliceblue] ")}
          to="/inventory"
        >
          Manage Inventory
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#be6e51] border border-[#be6e51] px-3 py-1"
              : "text-[aliceblue] border px-3 py-1"
          }
          to="/login"
        >
          LogIn
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#be6e51] border border-[#be6e51] px-3 py-1"
              : "text-[aliceblue] border px-3 py-1"
          }
          to="/signup"
        >
          SignUp
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
