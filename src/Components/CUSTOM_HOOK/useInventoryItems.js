import axios from "axios";
import React, { useEffect, useState } from "react";

const useInventoryItems = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      axios.get("https://cologne-perfume-server-production.up.railway.app/inventory").then((res) => {
         setProducts(res?.data?.result);
      });
   }, []);

   return [products, setProducts];
};

export default useInventoryItems;
