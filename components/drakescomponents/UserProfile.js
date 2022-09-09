import UserProfileItems from "./UserProfileItems";
import UserProfileInfo from "./UserProfileInfo";
import "../../styles/Profile.module.css";
import Header from "../johnscomponents/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../mattscomponents/Footer";

const UserProfile = () => {
  const [postedItems, setPostedItems] = useState([]);
  const [user, setUser] = useState({});
  const [pulledUser, setPulledUser] = useState([]);
  const [product, setProduct] = useState([]);
  //get user
  useEffect(() => {
    let dataObj = JSON.parse(localStorage.getItem("data"));
    console.log(dataObj);
    setUser(dataObj);
    axios.get(`/api/userPage`, {
      params: {
        user_id: dataObj.user_id,
      },
    });
  }, []);
  //get user items
  useEffect(() => {
    let dataObj = JSON.parse(localStorage.getItem("data"));
    console.log(dataObj);
    axios
      .get(`/api/userItems`, {
        params: {
          user_id: dataObj.user_id,
        },
      })
      .then((res) => {
        setPostedItems(res.data);
      });
  }, []);

  //items
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://api.escuelajs.co/api/v1/products",
  //   }).then((products) => {
  //     setProduct(products.data);
  //   });
  // }, []);
  // console.log(product);

  // for (let i = 0; i < product.length; i++) {
  //   const productTitle = product[i].title;
  //   const productPrice = product[i].price;
  //   const productCategory = product[i].category.name;
  //   const productDescription = product[i].description;
  //   const productImage = product[i].images[0];
  //   axios.post("/api/populatePostedItemsTB", {
  //     title: productTitle,
  //     price: productPrice,
  //     category: productCategory,
  //     description: productDescription,
  //     image: productImage,
  //     userId: Math.floor(Math.random() * 10) + 1,
  //   });
  // }

  //users
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://randomuser.me/api/?results=30",
  //   }).then((users) => {
  //     setPulledUser(users.data.results);
  //   });
  // });

  // console.log(pulledUser);
  // for (let i = 0; i < pulledUser.length; i++) {
  //   const userEmail = pulledUser[i].email;
  //   const userPassword = pulledUser[i].login.password;
  //   const userCity = pulledUser[i].location.city;
  //   const userState = pulledUser[i].location.state;
  //   const userUsername = pulledUser[i].login.username;
  //   const userPicture = pulledUser[i].picture.large;
  //   const userAccountAge = pulledUser[i].registered.date.substring(0, 7);

  // axios.post("/api/populateUserTB", {
  //   newUsername: userUsername,
  //   newEmail: userEmail,
  //   newPassword: userPassword,
  //   newCity: userCity,
  //   newState: userState,
  //   newPicture: userPicture,
  //   newAccountAge: userAccountAge,
  // });
  // }
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
export default UserProfile;
