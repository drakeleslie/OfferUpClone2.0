import UserProfile from "../components/drakescomponents/userProfile";
import React, { useEffect, useState } from "react";
import axios from "axios";

const profile = () => {
  const [user, setUser] = useState([]);
  //pulls random user
  useEffect(() => {
    axios({
      method: "get",
      url: "https://randomuser.me/api",
    }).then((json) => {
      setUser(json.data.results);
    });
  }, []);

  if (!user) return <h1></h1>;
  return (
    <>
      <UserProfile user={user} />
    </>
  );
};

export default profile;
