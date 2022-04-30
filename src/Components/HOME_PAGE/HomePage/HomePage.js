import React from "react";
import ExperienceSide from "../ExperienceSide/ExperienceSide";
import InventoryPart from "../InventoryPart/InventoryPart";
import OurService from "../OurService/OurService";
import HomeBanner from "./HomeBanner/HomeBanner";

const HomePage = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <InventoryPart></InventoryPart>
      <OurService></OurService>
      <ExperienceSide></ExperienceSide>
    </div>
  );
};

export default HomePage;
