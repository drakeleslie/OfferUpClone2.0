import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Router from "next/router";

function Newitem() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    let dataObj = JSON.parse(localStorage.getItem("data"));
    setData(dataObj);
  }, []);
  const createNewPost = (event) => {
    event.preventDefault();
    axios.post("/api/posted", {
      title: title,
      price: price,
      category: category,
      image: image,
      user_id: data.user_id,
    })
    .then((data) =>{
      Router.push({
        pathname: "selling"
    })
  })}

  return (
    <div id="container" className=" flex justify-evenly mt-10 ml-14 h-/6 w-full">
    
      <form className=" justify-center flex flex-col border-solid border-4 border-slate-500 rounded-xl h-full w-3/6 max-w-2xl shadow-xl">
        <div className="ml-14 flex justify-start">
          <input
            require
            required  
            placeholder="image URL"
            className=" m-6 -mb-1 border-[#00a87e] border-solid border-2 rounded-full placeholder:text-center shadow-lg text-center required:border-red-500 valid:border-[#00a87e]"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>

        <div className="ml-14 flex justify-start">
          <input
            require
            required  
            placeholder="title"
            className="m-6 -mb-1 border-[#00a87e] border-solid border-2 rounded-full placeholder:text-center shadow-lg text-center required:border-red-500 valid:border-[#00a87e] "
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="ml-14 flex justify-start">
          <input
            require
            required  
            placeholder="category"
            className="m-6 -mb-1 border-[#00a87e] border-solid border-2 rounded-full placeholder:text-center shadow-lg text-center required:border-red-500 valid:border-[#00a87e] "
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>

        <div className=" ml-14 flex justify-start">
          <input
            require
            required  
            placeholder="price"
            className="m-6 -mb-1 border-[#00a87e] border-solid border-2 rounded-full placeholder:text-center shadow-lg text-center required:border-red-500 valid:border-[#00a87e] "
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>

        <div className=" ml-14 flex justify-start">
          <input
            require
            required  
            placeholder="Description"
            className="m-6 mb-1 border-[#00a87e] border-solid border-2 rounded-full placeholder:text-center shadow-lg text-center required:border-red-500 valid:border-[#00a87e]"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="flex justify-start"> 
        <button className=" p-2 m-6 bg-yellow-400 rounded-full border-solid w-3/6 shadow-inner hover:bg-[#00a87e] required:border-red-500 valid:border-[#00a87e] disabled:bg-red-500"
                onClick={createNewPost}
                type="submit">
                  submit
        </button>
        </div>
        
      </form>
      <img src={image} className="flex content-center h-52 w-52  rounded-full" alt="Image" />
      
      
    </div>

    // <div id="container" className="h-4/6 w-full ">
    //   <form className=" flex justify-center">
    //     <div id="leftside" className="">
    //     <div className=" m-[2rem] h-[42rem] w-[50rem]  ">
    //         <div className=" h-[30rem] bg-slate-200">
    //           <div className="h-[30rem] bg-slate-100  border solid border-1 border-black rounded-med " >
    //             <input className=" ml-[25%] mt-[25%]" placeholder="Image URL"
    //               type="url"
    //               name="upload"
    //               value={image}
    //               onChange={(event) => setImage(event.target.value)}
    //             />
    //           </div>
    //         </div>
    //         <div className="rounded-none boder-slate-500">
    //           {/* <input className=" text-center text-2xl border-solid border-t-4 border-2 border-black rounded-t-none rounded w-full" placeholder="item name"/> */}
    //           <input className="break-words mb-[.5rem] pb-44 w-full border-solid border-2 border-black rounded-t-none rounded" placeholder="Description of item"
    //                 value={description}
    //                 onChange={(event) => setDescription(event.target.value)}
    //                 />
    //         </div>
    //       </div>
    //     </div>
    //     <div id="rightside" className="">
    //     <div className=" mt-20 mb-3 space-y-3 ">
    //               <input placeholder="title" className=" bg-slate-200 placeholder:text-black border-black border-solid border-2 hover:bg-emerald-400 rounded-full p-4 h-9 w-64 "
    //                   value={title}
    //                   onChange={(event) => setTitle(event.target.value)}
    //                 />
    //           <div>
    //               <input placeholder="price" className=" bg-slate-200 placeholder:text-black border-black border-solid border-2 hover:bg-emerald-400 rounded-full p-4 h-9 w-64 "
    //                 value={price}
    //                 onChange={(event) => setPrice(event.target.value)}
    //                 />
    //           </div>
    //           <div>
    //               <input
    //               className=" bg-slate-200 placeholder:text-black border-black border-solid border-2 hover:bg-emerald-400 rounded-full p-4 h-9 w-64"
    //               placeholder="category"
    //                 value={category}
    //                 onChange={(event) => setCategory(event.target.value)}
    //                 />
    //           </div>
    //         <button
    //         className=" w-44 border-solid border-2 border-black rounded-full  hover:bg-emerald-400 bg-yellow-400 ml-9 "
    //         onClick={createNewPost}
    //         type="submit">submit</button>
    //         </div>
    //     </div>

    //   </form>
    // </div>
    // <div className="h-[45rem] grid grid-cols-2">
    //   <form className="h-full  ">
    //     <div id="img_and_desc col-span-1">
    //       <div className=" m-[2rem] h-[42rem] w-[50rem]  ">
    //         <div className=" h-[30rem] bg-slate-200">
    //           <div className="h-[30rem] bg-slate-100  border solid border-1 border-black rounded-med">
    //             <input className=" ml-[25%] mt-[25%]" placeholder="Image URL"
    //               type="url"
    //               name="upload"
    //               value={image}
    //               onChange={(event) => setImage(event.target.value)}
    //             />
    //           </div>
    //         </div>
    //         <div className="rounded-none boder-slate-500">
    //           {/* <input className=" text-center text-2xl border-solid border-t-4 border-2 border-black rounded-t-none rounded w-full" placeholder="item name"/> */}
    //           <input className="break-words mb-[.5rem] pb-44 w-full border-solid border-2 border-black rounded-t-none rounded" placeholder="Description of item"
    //                 value={description}
    //                 onChange={(event) => setDescription(event.target.value)}
    //                 />
    //         </div>
    //       </div>
    //     </div>
    //     <div id="title_price_catag" className="col-span-1">
    //       <div className="m-[1.5rem] h-[30rem] ">
    //           <div className="">
    //               <input placeholder="title" className="ml-2 -mb-1 border-[#00a87e] border-solid border-2 ml-2 "
    //                   value={title}
    //                   onChange={(event) => setTitle(event.target.value)}
    //                 />
    //           </div>
    //           <div className="mt-[1rem] mb-[8px]">
    //           <div>
    //               <input placeholder="price" className="ml-2 -mb-1 border-[#00a87e] border-solid border-2 ml-2 "
    //                 value={price}
    //                 onChange={(event) => setPrice(event.target.value)}
    //                 />
    //           </div>
    //           </div>
    //           <div >
    //               <input
    //               className="ml-2 -mb-1 border-[#00a87e] border-solid border-2 ml-2 "
    //               placeholder="category"
    //                 value={category}
    //                 onChange={(event) => setCategory(event.target.value)}
    //                 />
    //           </div>
    //         </div>
    //         <button
    //         className=" w-44 justify-items-center border-solid border-2 border-black rounded-full mt-2 ml-[40%]"
    //         onClick={createNewPost}
    //         type="submit">submit</button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Newitem;
