import React from "react";
import useBasicImage from "../../CUSTOM_HOOK/useBasicImage";
import LocationMap from "./LocationMap";

const LocationPart = () => {
  //getting brand logo
  const [basicImage] = useBasicImage();
  const warehouse = basicImage.find((item) => item.name === "warehouse");

  return (
    <div className="md:py-20 py-10 bg-[#F3F3F3] md:px-28 px-4">
      <h1 className="md:text-4xl text-3xl text-center mb-3 font-semibold text-[#9B5A43] ">
        Find Our Warehouse Locaion From Anywhere
      </h1>

      <p className="md:text-2xl text-lg text-center mb-10 font-semibold text-[#9B5A43]">
        We Are Open To Share Our Business
      </p>
      <div className="flex md:flex-row flex-col justify-between gap-5 items-center border border-[#9B5A43] p-2">
        <LocationMap></LocationMap>

        <div>
          <img className="md:w-full md:h-[30rem] " src={warehouse?.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LocationPart;
