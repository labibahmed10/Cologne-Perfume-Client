import axios from "axios";
import React, { useEffect, useState } from "react";

const useBasicImage = () => {
   const [basicImage, setBasicImage] = useState([]);

   useEffect(() => {
      axios.get("https://worrisome-gray-fish.cyclic.app/basicImages").then((res) => {
         setBasicImage(res?.data);
      });
   }, []);
   return [basicImage];
};

export default useBasicImage;
