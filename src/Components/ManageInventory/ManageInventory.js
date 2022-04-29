import React from "react";
import useInventoryItems from "../CUSTOM_HOOK/useInventoryItems";
import TableRow from "./TableRow";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const ManageInventory = () => {
  const [products, setProducts] = useInventoryItems();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="pb-10 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-[#9B5A43]">
                  <tr>
                    <th scope="col" className="text-xl font-medium text-white px-6 py-4">
                      Serial
                    </th>
                    <th scope="col" className="text-xl font-medium text-white px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="text-xl font-medium text-white px-6 py-4">
                      Quantity
                    </th>
                    <th scope="col" className="text-xl font-medium text-white px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="text-xl font-medium text-white px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, i) => (
                    <TableRow key={item._id} item={item} i={i}></TableRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* add items site */}
      <div className="flex justify-center mb-28">
        <button
          onClick={() => navigate("/addinventory")}
          className="flex items-center text-gray-600  py-3 px-6 text-2xl font-semibold border border-[#9B5A43] hover:bg-[#9B5A43] hover:text-[aliceblue] duration-300"
        >
          <AiOutlinePlus></AiOutlinePlus> Add Item
        </button>
      </div>
    </div>
  );
};

export default ManageInventory;
