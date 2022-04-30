import React from "react";

import InventoryPart from "../InventoryPart/InventoryPart";
import OurService from "../OurService/OurService";
import HomeBanner from "./HomeBanner/HomeBanner";

const HomePage = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <InventoryPart></InventoryPart>
      <OurService></OurService>
    </div>
  );
};

export default HomePage;
