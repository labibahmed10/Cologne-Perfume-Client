import React from "react";
import { toast } from "react-toastify";
import useBasicImage from "../CUSTOM_HOOK/useBasicImage";

const AddNewInventory = () => {
  const [basicImage] = useBasicImage();
  const logo = basicImage.find((item) => item.name === "brand-logo");

  const handleAddNewProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    if (!name || !description || !image || !price || !quantity) {
      toast("Please fill up every detail", {
        autoClose: 2000,
      });
    }

    if (price <= 0 || quantity <= 0) {
      toast("Please Input valid number or greater than 0", {
        autoClose: 2000,
      });
    }

    const newProduct = {
      name,
      description,
      image,
      price: parseInt(price),
      quantity: parseInt(quantity),
    };

    fetch("http://localhost:5000/inventory", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast("The Product was added😃", {
            autoClose: 2000,
          });
        }
        console.log(data);
      });

    e.target.reset();
  };

  return (
    <div className="mt-20 mx-auto w-[30rem] px-8 border rounded-lg border-[#9B5A43] py-5">
      <div>
        <img className="h-16 mx-auto" src={logo?.image} alt="" />
        <p className="text-center text-2xl pt-5">Add Product in collection</p>
      </div>

      <div className="mt-12">
        <form onSubmit={handleAddNewProduct}>
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
