import axios from "axios";
import React, { useEffect, useState } from "react";

const useInventoryItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/inventory").then((res) => {
      setProducts(res?.data?.result);
    });
  }, []);

  return [products, setProducts];
};

export default useInventoryItems;
