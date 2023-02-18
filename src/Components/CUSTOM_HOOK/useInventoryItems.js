import axios from "axios";
import { useEffect, useState } from "react";

const useInventoryItems = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const { data } = await axios.get(
            "https://worrisome-gray-fish.cyclic.app/inventory",
         );
         setProducts(data?.result);
      }
      fetchData();
   }, []);

   return [products, setProducts];
};

export default useInventoryItems;
