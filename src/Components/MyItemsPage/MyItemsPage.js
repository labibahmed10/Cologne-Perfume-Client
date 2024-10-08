import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import MyItemCard from "../MyItemCard/MyItemCard";

const MyItemsPage = () => {
  //refresh and get top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [user] = useAuthState(auth);
  const [myItems, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get(`https://cologne-perfume-server.vercel.app/myItems?email=${user?.email}`, {
          headers: {
            authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          if (!res?.data?.success) {
            toast.error(`${res?.data?.message}`, { autoClose: 2000 });
          } else {
            setItems(res?.data?.result);
          }
        });
    })();
  }, [user]);

  const handleDeleteMyItem = async (id) => {
    const confirm = window.confirm("Are you sure wants to delete?");
    if (!confirm) {
      toast("Invalid Operation", {
        autoClose: 2000,
      });
    } else {
      //using axios to delete items
      await axios.delete(`https://cologne-perfume-server.vercel.app/myItems/${id}`).then((res) => {
        if (res?.data?.acknowledged) {
          toast("The Item you wants to delete was deleted", {
            autoClose: 2000,
          });
          const remaining = myItems.filter((item) => item._id !== id);
          setItems(remaining);
        }
      });
    }
  };

  return (
    <div className="grid md:grid-cols-2 md:px-20 px-4 gap-10 md:mt-28 mt-16">
      {myItems.map((item) => (
        <MyItemCard key={item._id} item={item} handleDeleteMyItem={handleDeleteMyItem}></MyItemCard>
      ))}
    </div>
  );
};

export default MyItemsPage;
