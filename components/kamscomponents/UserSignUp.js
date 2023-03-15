/* eslint-disable @next/next/no-html-link-for-pages */
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Router from "next/router";
import { useEffect } from "react";

function UserSignUp() {
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [currentState, setCurrentState] = useState("");
  //get requests for current location, used to have a place holder
  //****NEED API KEY FOR THIS TO WORK, TOO MANY GET REQUESTS****/
  useEffect(() => {
    axios({
      method: "get",
      url: "https://ipinfo.io/json?token=8dbf06d25041a7",
    }).then((response) => {
      console.log(response.data.city, response.data.region);
      setCurrentState(response.data.region);
      setCurrentCity(response.data.city);
    });
  }, []);

  var today = new Date();
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm;

  const createNewUser = (event) => {
    event.preventDefault();
    axios
      .post("/api/newUser", {
        newUsername: newUsername,
        newEmail: newEmail,
        newPassword: newPassword,
        newCity: newCity,
        newState: newState,
        newPicture: "defaultuserpic.png",
        newAge: today,
      })
      .then((response) => {
        if (response.status === 200) {
          setCurrentUser(newUsername);
          Router.push({
            pathname: "/",
          });
        }
      });
  };
  return (
    <div className="p-8  justify-center items-center  h-screen flex  ">
      <div className="flex border-2 rounded-3xl p-7 shadow-xl  h-[90%] w-[40%] mt-9">
        <form>
          <div className="divide-y-4 divide-white  h-6 w-full text-center font-extrabold space-y-2 grid justify-items-stretch">
            <div className=" w-full flex justify-end text text-[#00a87e] ">
              <Link
                href="/login"
                className="justify-self-end text-slate-400 -mt-6"
              >
                cancel
              </Link>{" "}
            </div>
            Sign Up
            <br></br> <br></br>
            <span className="text-[#00a87e] text-3xl font-extrabold">
              OfferUp
            </span>
            <div>
              <label className="block text-left text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input // Username
                className="bg-white border-[#00a87e] border-2 shadow-inner rounded  p-2 flex-1 w-full "
                id="username"
                type="text"
                value={newUsername}
                onChange={(event) => setNewUsername(event.target.value)} // username is set to value of input
                aria-label="username"
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 text-sm font-bold mb-2">
                Email address
              </label>
              <input // UserEmail address
                className="bg-white border-[#00a87e] border-2 shadow-inner rounded font-thin p-2 flex-1 w-full "
                id="username"
                type="text"
                value={newEmail}
                onChange={(event) => setNewEmail(event.target.value)} // username is set to value of input
                aria-label="username"
                placeholder="Ex: johndoe@offerdown.com"
              />
            </div>
            <div className="pb-3">
              <label className="block text-left text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input // Password
                className="bg-white border-[#00a87e] border-2 shadow-inner rounded  p-2 flex-1 w-full mb-3 "
                id="password"
                type="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)} // username is set to value of input
                aria-label="password"
              />
              <div className=" grid  grid-cols-2 ">
                <div className=" col-span-1 w- justify-self-start">
                  <label className="block text-left text-gray-700 text-sm font-bold mb-2 ">
                    City
                  </label>
                  <input // City
                    className="bg-white border-[#00a87e] border-2 shadow-inner rounded  p-2 flex-1  mr-4 w-[90%] "
                    id="city"
                    type="text"
                    placeholder={currentCity}
                    value={newCity}
                    onChange={(event) => setNewCity(event.target.value)}
                    aria-label="city"
                  />
                </div>
                <div>
                  <label className="block text-left text-gray-700 text-sm font-bold mb-2 ml-5">
                    State
                  </label>
                  <input // state
                    className="bg-white border-[#00a87e] border-2 shadow-inner rounded  p-2 flex-1 w-[90%] ml-5 "
                    id="state"
                    type="text"
                    placeholder={currentState}
                    value={newState}
                    onChange={(event) => setNewState(event.target.value)}
                    aria-label="state"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <a href="login" className="text-[#00a87e]">
                {" "}
                Already have an account? Log in
              </a>
              <button
                type="submit"
                onClick={createNewUser}
                className="bg-slate-100 text-slate-400 hover:bg-[#00a87e] hover:text-white duration-300  shadow p-2 mt-2 mr-6 rounded-full  ml-2 w-[95%]"
              >
                Sign up
              </button>
            </div>
            <div className="text-xs ">
              By tapping any of the buttons above, you agree to nothing and
              acknowledge nothing <br></br>
              <br></br>
              This site is protected by e-ducks and the e-ducks Privacy Policy
              and the e-ducks Terms of Service apply
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserSignUp;
