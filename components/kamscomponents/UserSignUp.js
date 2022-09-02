import axios from "axios";
import React, { useState } from "react";

function UserSignUp() {
  const [newUsername, setNewUsername] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')

    const createNewUser = (event) => {
      event.preventDefault()
      axios.post('http://localhost:8000/api/newUser', {
        newUsername: newUsername, 
        newPassword: newPassword
      })
      .then((response) => {
        console.log(response)
      })
      
    }
  return (
    <div className="p-8  justify-center items-center  h-screen flex  ">
        <div className="flex border-2 rounded-3xl p-7 shadow-xl  h-[90%] w-[40%] mt-9">
      <form >
        <div className="divide-y-4 divide-white  h-6 w-full text-center font-extrabold space-y-2 grid justify-items-stretch">
          <a href="/login"className="justify-self-end text-slate-400 -mt-6">cancel</a> Sign Up
          <br></br> <br></br>
          <span className="text-emerald-600 text-3xl font-extrabold">
            OfferDown
          </span>
          <div>
            <label
              className="block text-left text-gray-700 text-sm font-bold mb-2"
              
            >
              Name
            </label>
            <input // Username
              className="bg-white border-emerald-500 border-2 shadow-inner rounded  p-2 flex-1 w-full "
              id="username"
              type="text"
              value={newUsername}
              onChange={(event) => setNewUsername(event.target.value)} // username is set to value of input
              aria-label="username"
            />
          </div>
          <div>
            <label
              className="block text-left text-gray-700 text-sm font-bold mb-2"
              
            >
              Email address
            </label>
            <input // UserEmail address
              className="bg-white border-emerald-500 border-2 shadow-inner rounded font-thin p-2 flex-1 w-full "
              id="username"
              type="text"
              value={newEmail}
              onChange={(event) => setNewEmail(event.target.value)} // username is set to value of input
              aria-label="username"
              placeholder="Ex: johndoe@offerdown.com"
            />
          </div>
          <div className="pb-3">
            <label
              className="block text-left text-gray-700 text-sm font-bold mb-2"
             
            >
              Password
            </label>
            <input // Password
              className="bg-white border-emerald-500 border-2 shadow-inner rounded  p-2 flex-1 w-full "
              id="password"
              type="text"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)} // username is set to value of input
              aria-label="password"
            />
          </div>
          <div className="space-y-5">
            <a href="login" className="text-emerald-600">
              {" "}
              Already have an account? Log in
            </a>
            <button
              type="submit"
              //   onClick={}
              className="bg-slate-100 text-slate-400 hover:bg-emerald-600 hover:text-white duration-300  shadow p-2 mt-2 mr-6 rounded-full  ml-2 w-[95%]"
            >
              Sign up
            </button>
          </div>
          <div className="text-xs ">
        By tapping any of the buttons above, you agree to nothing and acknowledge nothing <br></br><br></br>
This site is protected by e-ducks and the  e-ducks Privacy Policy and the e-ducks Terms of Service apply
</div>
        </div>
      </form>
    </div>
    
</div>
  );
}

export default UserSignUp;
