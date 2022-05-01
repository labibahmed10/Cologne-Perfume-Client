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

  const [myItems, setItems] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/myItems?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  const handleDeleteMyItem = (id) => {
    const confirm = window.confirm("Are you sure wants to delete?");

    if (!confirm) {
      toast("Invalid Operation", {
        autoClose: 2000,
      });
    } else {
      fetch(`http://localhost:5000/myItems/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.acknowledged) {
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
    <div className="grid grid-cols-2 px-20 gap-10 mt-28">
      {myItems.map((item) => (
        <MyItemCard key={item._id} item={item} handleDeleteMyItem={handleDeleteMyItem}></MyItemCard>
      ))}
    </div>
  );
};

export default MyItemsPage;
