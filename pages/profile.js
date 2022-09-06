import UserProfile from "../components/drakescomponents/UserProfile";
import React, { useEffect, useState } from "react";
import axios from "axios";


const Profile = () => {
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  //pulls random user
  useEffect(() => {
    axios({
      method: "get",
      url: "https://randomuser.me/api",
    }).then((json) => {
      setUser(json.data.results);
    });
  }, []);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    }).then((json) => setProducts(json.data));
  }, []);
  return (
    <>
      <UserProfile user={user} products={products} />
    </>
  );
};

export default Profile;
