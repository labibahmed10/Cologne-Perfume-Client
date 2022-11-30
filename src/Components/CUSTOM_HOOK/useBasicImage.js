import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

const useBasicImage = () => {
   const [basicImage, setBasicImage] = useState([]);
   const [isLoading, setLoading] = useState(false);

   useEffect(() => {
      async function fetchData() {
         const { data } = await axios.get("https://cologne-perfume-server-production.up.railway.app/basicImages");
         await setBasicImage(data);
      }
      fetchData();
   }, []);

   return [basicImage];
};

export default useBasicImage;
