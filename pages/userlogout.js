import axios from "axios";
import { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import validateForm from "../components/kamscomponents/formValidation";

const Userlogout = () => {
  useEffect(() => {
    localStorage.removeItem("data");
  }, []);
  return (
    <div className="p-8  justify-center items-center h-screen flex">
      Successfully Logged Out
      <Link href="/">
        <p className="flex flex-col rounded hover:bg-zinc-200 p-2">
          Return to Homepage
        </p>
      </Link>
    </div>
  );
};

export default Userlogout;
