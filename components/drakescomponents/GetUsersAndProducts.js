import axios from "axios";
import { useEffect, useState } from "react";

export default function storeProductsInDb() {
  const [product, setProduct] = useState([]);
  const [pulledUser, setPulledUser] = useState([]);

  //items
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.escuelajs.co/api/v1/products",
    }).then((products) => {
      setProduct(products.data);
    });
  }, []);

  for (let i = 0; i < product.length; i++) {
    const productTitle = product[i].title;
    const productPrice = product[i].price;
    const productCategory = product[i].category.name;
    const productDescription = product[i].description;
    const productImage = product[i].images[0];
    axios.post("/api/populatePostedItemsTB", {
      title: productTitle,
      price: productPrice,
      category: productCategory,
      description: productDescription,
      image: productImage,
      userId: Math.floor(Math.random() * 10) + 1,
    });
  }

  //users
  useEffect(() => {
    axios({
      method: "get",
      url: "https://randomuser.me/api/?results=30",
    }).then((users) => {
      setPulledUser(users.data.results);
    });
  });

  for (let i = 0; i < pulledUser.length; i++) {
    const userFullName =
      pulledUser[i].name.first + " " + pulledUser[i].name.last;
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
