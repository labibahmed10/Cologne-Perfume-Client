import React from "react";
import { BsTrash } from "react-icons/bs";
const TableRow = ({ item, i }) => {
  const { name, quantity, price } = item;

  return (
    <tr className="bg-white border-b">
      <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-600">{i + 1}</td>
      <td className="text-xl text-gray-600 font-light px-6 py-4 whitespace-nowrap">{name}</td>
      <td className="text-xl text-gray-600 font-light px-6 py-4 whitespace-nowrap">{quantity}</td>
      <td className="text-xl text-gray-600 font-light px-6 py-4 whitespace-nowrap">${price}</td>
      <td className="text-3xl text-gray-600 font-light px-6 py-4 whitespace-nowrap">
        <BsTrash className="cursor-pointer hover:text-[#9B5A43]"></BsTrash>
      </td>
    </tr>
  );
};

export default TableRow;
