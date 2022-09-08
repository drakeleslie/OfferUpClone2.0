import Container from "../components/paulscomponents/Container";
import React from 'react'
import Profile from "./profile";
import NavBar from "../components/johnscomponents/NavBar";
import Header from "../components/johnscomponents/Header";
import Footer from "../components/mattscomponents/Footer";
import Link from "next/link";

export default function selling ()  {
  return (
    
    <div className="flex flex-col w-full min-h-screen text-black">
        <Header /> 
        <Link href ={"postitem"}>
            <button className="">Post new item</button>
        </Link>
        <div className="flex grow flex-col">
            <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
            </main>
        </div>
        <Footer/>
    </div>
  )
}
