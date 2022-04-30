import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { BsFlower1 } from "react-icons/bs";
const ExperienceSide = () => {
  return (
    <div className="flex items-center justify-evenly my-20 py-20 bg-[#EEEEF0]">
      <div className="text-[#C76F4F]">
        <h1 className="text-6xl text-center mx-auto font-semibold  border-b border-[#C76F4F] w-1/2">
          <BiBadgeCheck className="mx-auto"></BiBadgeCheck> 12
        </h1>
        <p className="text-xl font-semibold py-2">Years Of Experience</p>
      </div>
      <div className="text-[#C76F4F]">
        <h1 className="text-6xl text-center mx-auto font-semibold w-1/2 border-b border-[#C76F4F]">
          <FaRegHandshake className="mx-auto"></FaRegHandshake> 21
        </h1>
        <p className="text-xl font-semibold py-2">Partners Worldwide</p>
      </div>
      <div className="text-[#C76F4F]">
        <h1 className="text-6xl text-center mx-auto font-semibold w-1/2 border-b border-[#C76F4F]">
          <ImLab className="mx-auto w-1/2"></ImLab> 6
        </h1>
        <p className="text-xl font-semibold py-2">Qualified Speciaists</p>
      </div>
      <div className="text-[#C76F4F]">
        <h1 className="text-6xl text-center mx-auto font-semibold w-1/2 border-b border-[#C76F4F]">
          <BsFlower1 className="mx-auto w-1/2"></BsFlower1> 45+
        </h1>
        <p className="text-xl font-semibold py-2">Exclusive Fragnances</p>
      </div>
    </div>
  );
};

export default ExperienceSide;
