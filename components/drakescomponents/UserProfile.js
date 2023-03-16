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

  function handleSubmitItem(e) {
    e.preventDefault();
    //items

    axios({
      method: "get",
      url: "https://fakestoreapi.com/products/",
    }).then((products) => {
      console.log(products);
      setProduct(products.data);
    });
    console.log("pressed");
    for (let i = 0; i < product.length; i++) {
      const productTitle = product[i].title;
      const productPrice = product[i].price;
      // const productCategory = product[i].category.name;
      let proCat = product[i].category;
      switch (proCat) {
        case "men's clothing":
        case "women's clothing":
        case "jewelery":
          proCat = "Clothes";
          break;
      }
      const productDescription = product[i].description;
      // const productImage = product[i].images[0];
      // const productImageTwo = product[i].images[1];
      // const productImageThree = product[i].images[2];
      const productImage = product[i].image;
      axios.post("/api/populatePostedItemsTB", {
        title: productTitle,
        price: productPrice,
        category: proCat,
        description: productDescription,
        image: productImage,
        // imageTwo: productImageTwo,
        // imageThree: productImageThree,
        userId: Math.floor(Math.random() * 25) + 1,
      });
    }
  }
  function handleSubmitUser(e) {
    e.preventDefault();
    //users

    axios({
      method: "get",
      url: "https://randomuser.me/api/?results=30",
    }).then((users) => {
      setPulledUser(users.data.results);
    });

    for (let i = 0; i < pulledUser.length; i++) {
      const userEmail = pulledUser[i].email;
      const userPassword = pulledUser[i].login.password;
      const userCity = pulledUser[i].location.city;
      const userState = pulledUser[i].location.state;
      const userUsername = pulledUser[i].login.username;
      const userPicture = pulledUser[i].picture.large;
      const userAccountAge = pulledUser[i].registered.date.substring(0, 7);

      axios.post("/api/populateUserTB", {
        newUsername: userUsername,
        newEmail: userEmail,
        newPassword: userPassword,
        newCity: userCity,
        newState: userState,
        newPicture: userPicture,
        newAccountAge: userAccountAge,
      });
    }
  }
  return (
    <>
      <div className="flex flex-col w-full min-h-screen text-black">
        <Header />
        <div className="flex grow flex-col">
          <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
            <UserProfileInfo user={user} />
            {/* <button onClick={handleSubmitItem}>press me 2nd</button>
            <button onClick={handleSubmitUser}>press me 1st</button> */}
            <UserProfileItems user={user} products={postedItems} />
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default UserProfile;
