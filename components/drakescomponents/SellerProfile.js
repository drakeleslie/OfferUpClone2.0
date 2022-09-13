import UserProfileItems from "./UserProfileItems";
import UserProfileInfo from "./UserProfileInfo";
import "../../styles/Profile.module.css";
import Header from "../johnscomponents/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../mattscomponents/Footer";
import { json } from "express";

const SellerProfile = () => {
  const [postedItems, setPostedItems] = useState([]);
  const [user, setUser] = useState([]);

  //get seller
  useEffect(() => {
    const data = router.query;
    console.log(data);
    const json = JSON.parse(data.seller);
    setUser(json);
    axios.get(`/api/userPage`, {
      params: {
        user_id: json.user_id,
      },
    });
  }, []);
  //get user items
  useEffect(() => {
    const data = router.query;
    const json = JSON.parse(data.seller);
    console.log(data);
    axios
      .get(`/api/userItems`, {
        params: {
          user_id: json.user_id,
        },
      })
      .then((res) => {
        setPostedItems(res.data);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col w-full min-h-screen text-black">
        <Header />
        <div className="flex grow flex-col">
          <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
            <UserProfileInfo user={user} />
            <UserProfileItems user={user} products={postedItems} />
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default SellerProfile;
