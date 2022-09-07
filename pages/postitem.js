import React from 'react'
import Header from '../components/johnscomponents/Header'
import Footer from '../components/mattscomponents/Footer'
import Link from 'next/link'
import Newitem from '../components/kamscomponents/newitem'

function PostItem() {
  return (
    <div className="flex flex-col w-full min-h-screen text-black">
    <Header /> 
      <Newitem />
    <div className="flex grow flex-col">
        <main className="w-full max-w-screen-2xl my-0 mr-auto ml-auto">
        </main>
    </div>
    <Footer/>
</div>
  )
}

export default PostItem