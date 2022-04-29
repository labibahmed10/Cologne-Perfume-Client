import React from "react";
import useBasicImage from "../CUSTOM_HOOK/useBasicImage";

const AddNewInventory = () => {
  const [basicImage] = useBasicImage();
  const logo = basicImage.find((item) => item.name === "brand-logo");
  return (
    <div className="mt-20 mx-auto w-[30rem] px-8 border rounded-lg border-[#9B5A43] py-5">
      <div>
        <img className="h-16 mx-auto" src={logo?.image} alt="" />
        <p className="text-center text-2xl pt-5">Add Product in collection</p>
      </div>

      <div className="mt-12">
        <form>
          <input
            className="w-full py-3 mb-3 px-5 focus:outline-none bg-slate-50 rounded-lg"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="w-full py-3 mb-3 px-5 focus:outline-none bg-slate-50 rounded-lg"
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            className="w-full py-3 mb-3 px-5 focus:outline-none bg-slate-50 rounded-lg"
            type="text"
            name="image"
            placeholder="Image"
          />
          <input
            className="w-full py-3 mb-3 px-5 focus:outline-none bg-slate-50 rounded-lg"
            type="number"
            name="price"
            placeholder="Price"
          />
          <input
            className="w-full py-3 mb-3 px-5 focus:outline-none bg-slate-50 rounded-lg"
            type="quantity"
            name="quantity"
            placeholder="Quantity"
          />
          <input
            className="w-full py-3 mb-3 text-[#9B5A43] bg-slate-50 rounded-lg cursor-pointer font-semibold text-xl"
            type="submit"
            value="Insert"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNewInventory;
