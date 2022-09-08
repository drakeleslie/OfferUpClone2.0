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
    <div className="flex flex-row flex-wrap">
      <form>
        <div className="h-auto m-[2rem] flex-col content-center ">
          <div className="flex flex-col m-[2rem] h-[60rem] w-[50rem]  ">
            <div className=" h-[30rem] bg-slate-200">
              <div className="h-[30rem] bg-slate-100  border solid border-1 border-black rounded-med">
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
        <div className="flex flex-col m-[2rem] rounded-none h-[30rem] ">
            <div className="">
                <input placeholder="title" className="ml-2 -mb-1 border-[#00a87e] border-solid border-2"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
            </div>
            <div className="mt-[1rem] mb-[8px]">
            <div>
                <input placeholder="price" className="ml-2 -mb-1 border-[#00a87e] border-solid border-2"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  />
            </div>
            </div>
            <div className="mt-[1rem] text-2xl font-normal leading-6 border-[#00a87e] border-solid border-2">
                <input placeholder="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  />
            </div>
            <button onClick={createNewPost} type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default Newitem;
