import React, { useState, useEffect } from "react";
import axios from "axios";

function Newitem() {
  const[title, setTitle] = useState('');    
  const[price, setPrice] = useState('');
  const[category, setCategory] = useState('');
  const[description, setDescription] = useState('');
  const[image, setImage] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
      let dataObj = JSON.parse(localStorage.getItem('data'))
      setData(dataObj);
  }, [])

  const createNewPost = (event) => {
    event.preventDefault();
    axios.post('/api/posted', { 
          title: title,
          price: price,
          category: category,
          image: image,
          user_id: data.user_id
    })
  };

  return (
    <div id="container" className="ml-[10%]  ">
      <form className="grid grid-cols-2 ">
        <div id="leftside" className="w-5/6">
        <div className=" m-[2rem] h-[42rem] w-[50rem]  ">
            <div className=" h-[30rem] bg-slate-200">
              <div className="h-[30rem] bg-slate-100  border solid border-1 border-black rounded-med " >
                <input className=" ml-[25%] mt-[25%]" placeholder="Image URL"
                  type="url"
                  name="upload"
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                />
              </div>
            </div>
            <div className="rounded-none boder-slate-500">
              {/* <input className=" text-center text-2xl border-solid border-t-4 border-2 border-black rounded-t-none rounded w-full" placeholder="item name"/> */}
              <input className="break-words mb-[.5rem] pb-44 w-full border-solid border-2 border-black rounded-t-none rounded" placeholder="Description of item"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    />
            </div>
          </div>
        </div>
        <div id="rightside" className="ml-44 ">
        <div className=" mt-20 mb-3 space-y-3 ">
                  <input placeholder="title" className=" bg-slate-200 placeholder:text-black border-black border-solid border-2 hover:bg-emerald-400 rounded-full p-4 ml-2 h-9 w-64 "
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                    />
              <div>
                  <input placeholder="price" className=" bg-slate-200 placeholder:text-black border-black border-solid border-2 hover:bg-emerald-400 rounded-full p-4 ml-2 h-9 w-64 "
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    />
              </div>
              <div>
                  <input 
                  className=" bg-slate-200 placeholder:text-black border-black border-solid border-2 hover:bg-emerald-400 rounded-full p-4 ml-2 h-9 w-64"
                  placeholder="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    />
              </div>
            <button 
            className=" w-44 border-solid border-2 border-black rounded-full ml-10 hover:bg-emerald-400 bg-yellow-400"
            onClick={createNewPost} 
            type="submit">submit</button>
            </div>
        </div>
    
      </form>
    </div>
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
