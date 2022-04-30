import React from "react";
import useBasicImage from "../CUSTOM_HOOK/useBasicImage";

const Footer = () => {
  const [basicImage] = useBasicImage();
  const logo = basicImage.find((item) => item?.name === "brand-logo");
  return (
    <div className="mt-28 md:p-20 px-5 py-10 bg-[#022438]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <img className="w-52" src={logo?.image} alt="" />
        <div className="md:w-1/3 w-full flex items-center space-x-5 mt-10">
          <input
            type="email"
            placeholder="Email"
            className="font-semibold bg-transparent border-b border-[#9B5A43] w-full pt-4 pb-1 mb-4 focus:outline-none"
            name="email"
          />
          <input className="px-5 py-2 text-xl text-[aliceblue] border border-[#9B5A43]" type="submit" />
        </div>
      </div>

      <div className="pt-16 text-[aliceblue] flex md:items-center gap-16 flex-col justify-between md:flex-row">
        <div className="md:w-2/4">
          <h1 className="border-l-4 border-l-[#9B5A43] pl-3 text-3xl font-semibold mb-6">About Us</h1>
          <p>
            Our Ware house is more than just another average perfume shop. We sell not only top quality
            perfumes, but give our customers positive shopping experience and with best price. We will be glad
            to become your No. 1 perfume retailer.
          </p>
        </div>

        <div>
          <div>
            <h1 className="border-l-4 border-l-[#9B5A43] pl-3 text-2xl font-semibold mb-10">Contacts</h1>

            <p className="text-sm text-[#C76F4F]">Phone</p>
            <p className="pb-3 text-xl">+880163*****</p>

            <p className="text-sm text-[#C76F4F]">Address</p>
            <p className="pb-3 text-xl">Khilgaon,Dhaka-1219</p>

            <p className="text-sm text-[#C76F4F]">E-mail</p>
            <p className="pb-3 text-xl">labib.ahmed.372@gmail.com</p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="border-l-4 border-l-[#9B5A43] pl-3 text-2xl font-semibold mb-10">Quick Links</h1>

            <p className="pb-3 text-xl">Privacy Policy</p>
            <p className="pb-3 text-xl">Terms of Service</p>
            <p className="pb-3 text-xl">Credit</p>
            <p className="pb-3 text-xl">FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
