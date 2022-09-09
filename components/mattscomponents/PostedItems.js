import React, { useState, useEffect } from "react";
import axios from "axios";

function PostedItems(props) {
  const [postedItems, setPostedItems] = useState([]);
  const [price, setPrice] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    let dataObj = JSON.parse(localStorage.getItem("data"));
    setData(dataObj);
    axios
      .get(`/api/posted`, {
        params: {
          user_id: dataObj.user_id,
        },
      })
      .then((res) => {
        setPostedItems(res.data);
      });
  }, []);

  let userId = parseInt(data.user_id);

  const handleDelete = (event) => {
    const newList = postedItems.filter(
      (item) => item.posted_item_id != event.target.id
    );
    console.log(newList);
    setPostedItems(newList);
    axios
      .delete(`/api/posted`, {
        params: {
          user_id: userId,
          posted_item_id: event.target.id,
        },
      })
      .then((res) => {});
  };

  const handleChangePrice = (event) => {
    // event.preventDefault();
    console.log("id", event.target.id);
    console.log("price", price);
    console.log("posted item id", event.target.id);
    axios
      .patch(`/api/posted`, {
        params: {
          user_id: userId,
          posted_item_id: event.target.id,
          price: price,
        },
      })
      .then((res) => {
        setPostedItems(res.data);
      })
      .then((res) => {
        let dataObj = JSON.parse(localStorage.getItem("data"));
        setData(dataObj);
        axios
          .get(`/api/posted`, {
            params: {
              user_id: dataObj.user_id,
            },
          })
          .then((res) => {
            setPostedItems(res.data);
          });
      });
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <h2 className="flex justify-center font-serif text-2xl font-black mt-4 mb-4">
        {postedItems[0] ? "Posted Items" : "No Posted Items"}
      </h2>
      <div className="flex justify-center">
        <div
          className={
            "font-normal text-base font-serif mt-6 grid grid-cols-3 gap-20 grid-flow-row grid-"
          }
        >
          {postedItems.map((item, i) => (
            <div key={i} className="flex flex-wrap box-border mt-4 max-w-xl">
              <div className="hover:bg-zinc-200 flex-grow-0 display-block box-border pl-3 pr-12">
                <ul>
                  <li className="h-18 flex flex-row">
                    <img src={item.image} className="h-16 rounded"></img>
                    <div className="flex flex-col">
                      <div className="hover:underline pl-4 text-lg truncate max-w-lg">
                        ${item.price}
                      </div>
                      <div className="hover:underline pl-4 text-lg truncate max-w-lg">
                        {item.title}
                      </div>
                      <div
                        className="hover:underline text-[#00a87e] font-semibold ml-4 text-sm pt-1 w-12"
                        id={item.posted_item_id}
                        onClick={handleDelete}
                      >
                        Delete
                      </div>
                    </div>
                    <div id={item.posted_item_id}>
                      <form id={item.posted_item_id}>
                        <input
                          className="relative left-10 top-[58px] font-semibold w-20 text-sm"
                          id={item.posted_item_id}
                          onChange={(event) => setPrice(event.target.value)}
                          placeholder="New Price"
                        />
                        <button
                          className="relative top-[58px] left-[46px] border-1 border-solid border-black fa fa-save"
                          onClick={handleChangePrice}
                          type="submit"
                          id={item.posted_item_id}
                        ></button>
                      </form>
                    </div>
                  </li>
                  <hr className={"h-0.5 bg-zinc-200 mt-4"}></hr>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostedItems;
