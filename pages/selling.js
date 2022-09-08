import React from 'react'
import Header from "../components/johnscomponents/Header";
import Footer from "../components/mattscomponents/Footer";
import Link from "next/link";
import PostedItems from "../components/mattscomponents/PostedItems";

export default function selling ()  {
  return (
    
    <div className="flex flex-col w-full min-h-screen text-black">
        <Header /> 
        <PostedItems/>
        <Link href ={"postitem"}>
            <button className="text-white mt-20 hover:underline bg-[#00a87e] mx-[46%] rounded-xl hover:opacity-40">Post new item</button>
        </Link>
        <div className="flex grow flex-col">
            <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
            </main>
        </div>
        <Footer/>
    </div>
  )
}
