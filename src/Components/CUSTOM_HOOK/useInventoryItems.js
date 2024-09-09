import axios from "axios";
import { useEffect, useState } from "react";

const useInventoryItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://cologne-perfume-server.vercel.app/inventory");
      setProducts(data?.result);
    }
    fetchData();
  }, []);

  return [products, setProducts];
};

export default useInventoryItems;
