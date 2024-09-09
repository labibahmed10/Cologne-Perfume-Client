import axios from "axios";
import { useEffect, useState } from "react";

const useBasicImage = () => {
  const [basicImage, setBasicImage] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://cologne-perfume-server.vercel.app/basicImages");
      await setBasicImage(data);
    }
    fetchData();
  }, []);

  return [basicImage];
};

export default useBasicImage;
