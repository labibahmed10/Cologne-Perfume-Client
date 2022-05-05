import axios from "axios";
import React, { useEffect, useState } from "react";

const useInventoryItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://guarded-earth-03586.herokuapp.com/inventory").then((res) => {
      setProducts(res?.data?.result);
    });
  }, []);

  return [products, setProducts];
};

export default useInventoryItems;
