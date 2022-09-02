import React from "react";
import Link from "next/link";
import Userlogin from "../kamscomponents/userlogin";
import SearchBar from "../../pages/SearchBar";

const NavBar = () => {
  const { user } = Userlogin();

  return (
    <nav className="flex pt-4 py-4 px-6 border-b border-gray-200">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <SearchBar />
      <img
        className="h-5 mt-3 ml-6"
        src={
          "https://freepikpsd.com/file/2019/10/location-icon-png-green-1-Transparent-Images.png"
        }
      ></img>
      <a className="text-[#00a87e] pl-1 pt-2.5 text-lg font-semibold">
        {" "}
        Location
      </a>
      <div className="ml-[600px] flex flex-col rounded hover:bg-zinc-200 p-2">
        <i className="fa fa-heart-o text-black pl-3.5"></i>
        <Link href="/saved">
          <a>Saved</a>
        </Link>
      </div>
      <div className="flex flex-col rounded hover:bg-zinc-200 p-2">
        <i className="pl-7 fa fa-dollar text-black pl-3.5"></i>
        <Link href="/selling">
          <a className="ml-2">Selling</a>
        </Link>
      </div>
      <div className=" flex flex-col rounded hover:bg-zinc-200 p-2">
        <i className="fa fa-user-circle text-black pl-3.5"></i>
        <Link href="/profile">
          <a className="ml-2">Profile</a>
        </Link>
      </div>
      <div className=" flex flex-col rounded hover:bg-zinc-200 p-2">
        <i className="fa fa-user-o text-black pl-3.5"></i>
        <Link href={user ? "/signup" : "/login"}>
          <a className="ml-auto">{user ? "Logout" : "Login"}</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
