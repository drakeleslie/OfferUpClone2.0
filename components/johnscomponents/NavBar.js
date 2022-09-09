import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    let dataObj = JSON.parse(localStorage.getItem("data"));
    setData(dataObj);
    console.log(data);
  }, []);

  return (
    <nav className="flex pt-3 py-4 px-3 border-b border-gray-200">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <SearchBar />
      <img
        alt="somepicture"
        className="h-5 mt-3.5 ml-6"
        src={
          "https://freepikpsd.com/file/2019/10/location-icon-png-green-1-Transparent-Images.png"
        }
      ></img>
      <a className="text-[#00a87e] pl-1 pt-3 text-lg font-semibold">
        {data ? data.city : "Location"}
      </a>
      <div className="ml-[400px] flex flex-col rounded hover:bg-zinc-200 p-2">
        <i className="fa fa-heart-o text-black pl-3.5"></i>
        <Link href={data ? "/saved" : "/login"}>
          <a className="pr-3 ml-auto">{data ? "Saved" : "Saved"}</a>
        </Link>
      </div>
      <div className="flex flex-col rounded hover:bg-zinc-200 p-2">
        <i className="pl-5 fa fa-dollar text-black"></i>
        <Link href={data ? "/selling" : "/login"}>
          <a className="pr-3 ml-auto">{data ? "Selling" : "Selling"}</a>
        </Link>
      </div>
      <div className=" flex flex-col rounded hover:bg-zinc-200 p-2">
        <i className="fa fa-user-circle text-black pl-3.5"></i>
        <Link href={data ? "/profile" : "/signup"}>
          <a className="ml-2">{data ? "Profile" : "Signup"}</a>
        </Link>
      </div>
      <div className="rounded hover:bg-grey-100">
        <div className="flex flex-col h-14 w-15 rounded p-2 relative hover:bg-gray-200 light:bg-blue-600 ">
          <svg
            className="position-self-center w-13 h-16 hover:bg-blue-200 rounded-full"
            fill="currentColor"
            viewBox="7 3 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M13 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              // clipRule="evenodd"
            ></path>
          </svg>

          {/* <i className="fa fa-user-o text-black pl-3.5 "></i> */}
          <Link href={data ? "/userlogout" : "/login"}>
            <a className="pr-3 ml-auto">{data ? "Logout" : "Login"}</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
