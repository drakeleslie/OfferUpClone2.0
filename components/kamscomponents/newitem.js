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
    axios
      .post("/api/posted", {
        title: title,
        price: price,
        category: category,
        image: image,
        description: description,
        user_id: data.user_id,
      })
      .then((data) => {
        Router.push({
          pathname: "selling",
        });
      });
  };

  return (
    <div id="container" className=" flex justify-center mt-20  h-/6 w-full">
      <form className=" justify-center mr-2 flex flex-col border-solid border-1 h-full w-1/4 max-w-2xl shadow-xl">
        <div className=" flex justify-center">
          <input
            require
            required
            placeholder="image URL"
            className="m-6 mb-1 border-[#000000] border-solid border-2  placeholder:text-center shadow-lg text-center valid:border-[#00a87e]"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <input
            require
            required
            placeholder="title"
            className="m-6 mb-1 border-[#000000] border-solid border-2  placeholder:text-center shadow-lg text-center valid:border-[#00a87e]"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <input
            require
            required
            placeholder="price"
            className="m-6 mb-1 border-[#000000] border-solid border-2 placeholder:text-center shadow-lg text-center valid:border-[#00a87e]"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>

        <div className=" flex justify-center">
          <input
            require
            required
            placeholder="Description"
            className="m-6 mb-1 border-[#000000] border-solid border-2 placeholder:text-center shadow-lg text-center valid:border-[#00a87e]"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <select
            onChange={(event) => setCategory(event.target.value)}
            className="m-6 mb-1 h-7 w-2/5 border-[#000000] border-solid border-2 placeholder:text-center shadow-lg text-center "
          >
            <option key="Clothes" value="Clothes">
              Clothes
            </option>
            <option key="Electronics" value="Electronics">
              Electronics
            </option>
            <option key="Furniture" value="Furniture">
              Furniture
            </option>
            <option key="Shoes" value="Shoes">
              Shoes
            </option>
            <option key="Others" value="Others">
              Others
            </option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            className=" p-2 m-6 text-white  border-[#000000] bg-[#00a87e] border-solid w-3/6 shadow-inner  hover:bg-[#00a87eaf]"
            onClick={createNewPost}
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
      <div className="justify-center ml-2 flex  border-solid border-1 h-full w-3/4 max-w-2xl shadow-xl">
        <img
          src={image ? image : "placeholderimage.webp"}
          className="mt-10 mb-10 border-2 h-100 w-80"
          alt={image ? image : "placeholderimage.webp"}
        />
      </div>
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
