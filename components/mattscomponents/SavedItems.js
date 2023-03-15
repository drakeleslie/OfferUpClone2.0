import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function SavedItems() {
  const [savedItems, setSavedItems] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    let dataObj = JSON.parse(localStorage.getItem("data"));
    setData(dataObj);

    axios
      .get(`/api/saved`, {
        params: {
          user_id: dataObj.user_id,
        },
      })
      .then((res) => {
        res.data.forEach((element) => updatePrice(element));
        setSavedItems(res.data);
      });
  }, []);

  function updatePrice(element) {
    let postedItemId = element.posted_item_id;
    axios
      .get(`/api/postedItems`, {
        params: {
          posted_item_id: postedItemId,
        },
      })
      .then((res) => {
        if (res.data[0].price != element.price) {
          element.price = res.data[0].price;
          let dataObj = JSON.parse(localStorage.getItem("data"));
          axios.patch(`/api/saved`, {
            params: {
              item_id: element.item_id,
              user_id: element.user_id,
              price: res.data[0].price,
            },
          });
        }
      });
    return element;
  }

  let userId = parseInt(data.user_id);

  const handleDelete = (event) => {
    const newList = savedItems.filter(
      (item) => item.item_id != event.target.id
    );
    setSavedItems(newList);
    axios.delete(`/api/saved`, {
      params: {
        user_id: userId,
        item_id: event.target.id,
      },
    });
  };

  return (
    <div>
      <div className={"min-w-full mt-4 ml-4 text-sm font-light"}>
        <Link href="/">Home/</Link> Account/ Saved Items
      </div>
      <div className={"flex flex-grow-1 flex-row ml-4 mt-4"}>
        <div
          className={
            "block border-solid border-zinc-200 border-[1px] rounded h-46 w-22 mt-1 mr-10"
          }
        >
          <div className={"text-xl font-medium p-1 pl-3 pb-1 pt-4"}>
            Account
          </div>
          <div className={"font-medium p-1 pl-3 pb-2"}>Transactions</div>
          <div className="hover:bg-green-100 ">
            <button className={"p-1 pl-3 font-light pb-2"}>
              Purchases / Sales
            </button>
          </div>
          <div className="hover:bg-green-100 ">
            <button className={" p-1 pl-3 font-light pb-2"}>
              Payment / Deposite methods
            </button>
          </div>
          <div className={"font-medium p-1 pl-3 pb-2"}>Saves</div>
          <div className="hover:bg-green-100">
            <button className={"font-light p-1 pl-3 pb-2"}>Saved items</button>
          </div>
          <div className={"font-medium p-1 pl-3 pb-2"}>Account</div>
          <Link href="/account">
            <div className="hover:bg-green-100 ">
              <button className={"p-1 pl-3 font-light pb-3 cursor-pointer"}>
                Account settings
              </button>
            </div>
          </Link>
          <hr className={"h-px bg-zinc-300 pl-3 mx-4"}></hr>
          <Link href="/profile">
            <button
              className={
                "underline p-1 pl-3 pt-3 hover:text-zinc-400 pb-4 text-sm font-light"
              }
            >
              View public profile
            </button>
          </Link>
        </div>
        <div
          className={"flex-grow-1 font-normal text-base p-1 font-serif ml-1"}
        >
          <h2 className="font-serif text-2xl font-black mt-4 mb-5">
            {savedItems[0] ? "Saved Items" : "No Saved Items"}
          </h2>
          {savedItems.map((item, i) => (
            <div key={i} className="flex flex-wrap box-border mt-4 max-w-xl">
              <div className="flex-grow-0 display-block box-border pl-3 pr-12">
                <ul>
                  <li className="h-18 flex flex-row">
                    <img src={item.image} className="h-16 w-16 border-2 "></img>
                    <div className="flex flex-col">
                      <div className=" pl-4 text-lg truncate max-w-lg">
                        ${item.price}
                      </div>
                      <div className=" pl-4 text-lg truncate max-w-lg">
                        {item.title}
                      </div>
                      <button
                        className="hover:text-[#00a87eb2] text-[#00a87e] font-semibold ml-4 text-sm pt-1 w-12"
                        id={item.item_id}
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SavedItems;
