import axios from "axios";
import { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";

const Userlogout = () => {
  useEffect(() => {
    localStorage.removeItem("data");
  }, []);
  return (
    <div className="p-8 justify-center items-center h-screen flex">
      <Link href="/">
        <p className="flex flex-col rounded border p-2 relative hover:bg-gray-200 cursor-pointer">
          Return to Homepage
        </p>
      </Link>
    </div>
  );
};

export default Userlogout;
