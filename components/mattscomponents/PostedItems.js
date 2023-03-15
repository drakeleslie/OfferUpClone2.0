import React, { useState, useEffect } from "react";
import axios from "axios";

function PostedItems() {
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
    event.preventDefault();
    axios
      .patch(`/api/posted`, {
        params: {
          user_id: userId,
          posted_item_id: parseInt(event.target.id),
          price: price,
        },
      })
      .then((res) => {
        let priceInput = document.getElementById(
          parseInt(event.target.id) + "s"
        );
        priceInput.value = "";
        priceInput.placeholder = "New Price";
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
            <div
              key={i}
              className="flex flex-wrap box-border mt-4 max-w-xl pt-2"
            >
              <div className="flex-grow-0 display-block box-border pl-3 pr-2">
                <ul>
                  <li className="h-18 flex flex-row">
                    <img src={item.image} className="h-16 rounded mt-2"></img>
                    <div className="flex flex-col">
                      <div className=" pl-4 text-lg truncate max-w-lg">
                        ${item.price}
                      </div>
                      <div className=" pl-4 text-lg truncate max-w-lg">
                        {item.title}
                      </div>
                      <div className="flex flex-row">
                        <button
                          className="hover:text-[#00a87eb2] text-[#00a87e] font-semibold ml-4 text-sm pt-1 w-12 flex flex-row"
                          id={item.posted_item_id}
                          onClick={handleDelete}
                        >
                          Delete
                        </button>
                        <form className="flex flex-row">
                          <input
                            className="ml-8 w-[75px] rounded"
                            id={item.posted_item_id + "s"}
                            onChange={(event) => setPrice(event.target.value)}
                            placeholder="New Price"
                          />
                          <button
                            className="text-black fa fa-save ml-2"
                            onClick={handleChangePrice}
                            type="submit"
                            id={item.posted_item_id + "b"}
                          ></button>
                        </form>
                      </div>
                    </div>
                  </li>
                  <hr className={"h-0.5 bg-zinc-200 mt-4 min-w-[300px]"}></hr>
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
