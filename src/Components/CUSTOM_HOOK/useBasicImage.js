import React, { useEffect, useState } from "react";

const useBasicImage = () => {
  const [basicImage, setBasicImage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/basicImages")
      .then((res) => res.json())
      .then((data) => setBasicImage(data));
  }, []);
  return [basicImage];
};

export default useBasicImage;
