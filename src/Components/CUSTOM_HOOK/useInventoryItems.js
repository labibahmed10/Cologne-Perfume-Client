import axios from "axios";
import { useEffect, useState } from "react";

const useInventoryItems = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {

      async function fetchData() {
         const { data } = await axios.get("https://cologne-perfume-server-production.up.railway.app/inventory");
         setProducts(data?.result);
      }
      fetchData();

   }, []);

   return [products, setProducts];
};

export default useInventoryItems;
