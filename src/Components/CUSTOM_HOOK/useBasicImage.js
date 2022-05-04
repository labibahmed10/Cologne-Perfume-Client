import axios from "axios";
import React, { useEffect, useState } from "react";

const useBasicImage = () => {
  const [basicImage, setBasicImage] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/basicImages").then((res) => {
      setBasicImage(res?.data);
    });
  }, []);
  return [basicImage];
};

export default useBasicImage;
