import React from "react";
import { useParams } from "react-router-dom";
import useInventoryItems from "../CUSTOM_HOOK/useInventoryItems";
import { TiTick } from "react-icons/ti";

const SingleInventory = () => {
  const { pid } = useParams();
  const [products] = useInventoryItems();
  const matched = products.find((item) => item?._id === pid);

  return (
    <div className="px-20">
      <div className="flex justify-between my-20 gap-10">
        <div className="border-2 p-6 border-[#9B5A43] w-full flex items-center gap-10 bg-[#EEEEF0]">
          <div className="text-center">
            <img className="h-[30rem] w-[30rem]" src={matched?.image} alt="" />
            <h1 className="text-4xl font-semibold pt-5 text-gray-600">{matched?.name}</h1>
          </div>

          <div className="text-xl font-semibold">
            <div className="text-gray-600">
              <h1 className="text-2xl">Id : {matched?._id}</h1>
              <h2 className="text-2xl py-2">Price : ${matched?.price}</h2>
              <p>Description : {matched?.description}</p>
              <p className="py-2">Quantity left : {matched?.quantity} pieces</p>

              <p>Supplier : {matched?.supplier} Brand LTD.</p>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center px-4 py-2 mt-10 border-2 border-[#9B5A43] hover:text-green-400 duration-300 hover:bg-[#ad6348]">
                <TiTick className="text-2xl "></TiTick> Delivered
              </button>
            </div>
          </div>
        </div>

        <div className="border-2 w-1/2 border-[#9B5A43] px-5 h-96 text-gray-600">
          <h1 className="text-center pt-16 text-3xl font-semibold pb-8">Restock the Items</h1>
          <form action="">
            <input
              className="w-full py-2 px-3 focus:outline-none bg-slate-100"
              type="number"
              name="number"
              id=""
            />

            <input
              className="w-full mt-4 py-2 cursor-pointer bg-[#9B5A43] text-[aliceblue] font-semibold"
              type="submit"
              value="Restock"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleInventory;
