import React, { useEffect, useState } from "react";
import useInventoryItems from "../CUSTOM_HOOK/useInventoryItems";
import ProductCard from "../ProductCard/ProductCard";

const InventoryPart = () => {
  const [products, setProducts] = useInventoryItems();
  return (
    <div className="my-28">
      <div className="pb-10 text-[#9B5A43] font-semibold">
        <h1 className="text-5xl py-3 text-center">Our Perfume Product</h1>
        <h2 className="text-3xl text-center">Become More Confident & Show Your Better Self</h2>
      </div>

      <div className="grid grid-cols-2 place-items-center gap-10 px-20">
        {products.slice(0, 6).map((item) => (
          <ProductCard item={item} key={item._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default InventoryPart;
