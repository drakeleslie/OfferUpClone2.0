import React from 'react'
import Header from "../components/johnscomponents/Header";
import Footer from "../components/mattscomponents/Footer";
import Link from "next/link";
import PostedItems from "../components/mattscomponents/PostedItems";
import AccountInfo from '../components/mattscomponents/AccountInfo';

export default function account ()  {
  return ( 
    <div className="flex flex-col w-full min-h-screen text-black">
        <Header /> 
        <div className="mt-auto mx-auto">
            <AccountInfo/>
        </div>
        <div className="mt-auto">
            <Footer/>
        </div>
    </div>
  )
}