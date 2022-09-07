import UserProfileItems from "./UserProfileItems";
import UserProfileInfo from "./UserProfileInfo";
import "../../styles/Profile.module.css";
import Header from "../johnscomponents/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../mattscomponents/Footer";

const UserProfile = ({ user, products }) => {
  const [postedItems, setPostedItems] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    let dataObj = JSON.parse(localStorage.getItem("data"));
    setData(dataObj);
    axios
      .get(`/api/userPage`, {
        params: {
          user_id: dataObj.user_id,
        },
      })
      .then((res) => {
        setPostedItems(res.data);
      });
  }, []);

  return (
    <>
      {user.map((userData) => (
        <div
          key={userData.userId}
          className="flex flex-col w-full min-h-screen text-black"
        >
          <Header />
          <div className="flex grow flex-col">
            <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
              <UserProfileInfo user={userData} />
              <UserProfileItems user={userData} products={products} />
            </main>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};
export default UserProfile;
