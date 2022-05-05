import axios from "axios";
import React, { useEffect, useState } from "react";

const useBasicImage = () => {
  const [basicImage, setBasicImage] = useState([]);

  useEffect(() => {
    axios.get("https://guarded-earth-03586.herokuapp.com/basicImages").then((res) => {
      setBasicImage(res?.data);
    });
  }, []);
  return [basicImage];
};

export default useBasicImage;
