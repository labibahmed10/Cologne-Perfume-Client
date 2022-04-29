import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import InventoryPart from "../InventoryPart/InventoryPart";

const HomePage = () => {
  const onSubmita = (e) => {
    e.preventDefault();

    const user = {
      name: e.target.name.value,
      image: e.target.img.value,
      description: e.target.des.value,
      price: e.target.price.value,
      quantity: e.target.qua.value,
      supplier: e.target.supp.value,
    };

    console.log(JSON.stringify(user));
  };

  return (
    <div>
      <HomeBanner></HomeBanner>
      <InventoryPart></InventoryPart>
    </div>
  );
};

export default HomePage;
