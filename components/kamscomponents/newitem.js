import React from "react";

function Newitem() {
  return (
    <div>
      <form>
        <div className="h-auto m-[2rem] grid grid-col-1 grid-row-1 gap-8  content-center ">
          <div className="flex flex-col m-[2rem] h-[60rem] w-[50rem]  ">
            <div className=" h-[30rem] bg-slate-200">
              <div className="h-[30rem] bg-slate-100  border solid border-1 border-black rounded-med">
            
                    <input className=" ml-[25%] mt-[25%]"
                        type="file"
                        name="upload"
                        accept="image\*"
                    />
              
              </div>
            </div>
            <div className="rounded-none boder-slate-500">
              <input className=" text-center text-2xl border-solid border-t-4 border-2 border-black rounded-t-none rounded w-full" placeholder="item name"/>
              <input className=" text-center mb-[.5rem] w w-full h-52 border-solid border-2 border-black rounded-t-none rounded" placeholder="Description of item"/>
            </div>
          </div>
          <div className="flex flex-col m-[2rem] rounded-none h-[30rem] ">
            <div>
                <label className="mt-[1rem] mb-[8px] text-xl">title</label>
                <input placeholder="title" className="ml-2 -mb-1"/>
            </div>
            <div className="mt-[1rem] mb-[8px]">
            <div>
                <label className="bg-slate-100"></label>
                <input placeholder="price"/>
            </div>
            </div>
            <div className="mt-[1rem] text-2xl font-normal leading-6  ">Condition: Used(normal wear)</div>
            <div className="mt-[1rem] text-2xl font-normal leading-6">Category: catagory</div>
            </div>
          </div>
      </form>
    </div>
  );
}

export default Newitem;
