import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  console.log(item);
  const { _id, name, image, description, price, quantity, supplier } = item;

  const navigate = useNavigate();

  return (
    <div className="bg-[#EEEEF0] flex items-center px-8 py-5 gap-10 rounded-lg ">
      <div>
        <img className="w-96 h-80" src={image} alt="" />
        <h1 className="text-3xl font-semibold py-3 text-[#c76f4f] text-center">{name}</h1>
      </div>
      <div className="text-[#c76f4f] font-semibold">
        <h2 className="text-xl pb-2">{description}</h2>
        <h2 className="text-2xl">Price: ${price}</h2>
        <p className="text-xl py-1">Quantity : {quantity}</p>
        <p className="text-xl">Supplier: {supplier}</p>

        <div className="flex justify-end items-center mt-8">
          <button
            onClick={() => navigate(`/inventory/${_id}`)}
            className="px-4 py-2 border-2 border-[#c76f4f] hover:bg-[#c76f4f] hover:text-[aliceblue] duration-300"
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
