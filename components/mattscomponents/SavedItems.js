import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function SavedItems(props) {
    const [savedItems, setSavedItems] = useState([]);
    const [data, setData] = useState({})

    function updatePrice(element) {
        // element is a saved item object
        // get latest posted item
        // save it as postItem
        // compare postItem and element prices
        // if different update price from postItem to element
        // else return
        console.log("here")
        let id = element.posted_item_id
        console.log("id", id);
        axios.get(`/api/postedItems`, {
            params: {
                posted_item_id: id
            }
        }).then((res) => {
            if (res.data[0].price != element.price) {
                element.price = res.data[0].price
            }
            console.log('data.user_id', data.user_id)
            console.log("res.data[0].item_id", res.data[0].item_id)
            axios.patch(`/api/saved`, {
                params: {
                    price: res.data[0].price,
                    user_id: data.user_id,
                    item_id: res.data[0].item_id
                }
            })
        })
        return element;
    }

    useEffect(() => {
        let dataObj = JSON.parse(localStorage.getItem('data'))
        setData(dataObj)
        axios.get(`/api/saved`, {
            params: {
                user_id: dataObj.user_id
            }
        }).then((res) => {
            // setSavedItems(res.data);
            console.log("res.data", res.data)
            let tempSaved = res.data;
            tempSaved.forEach(element => 
                updatePrice(element)       
            );
            console.log(tempSaved)
            setSavedItems(tempSaved);
        })
    }, [])


    let userId = parseInt(data.user_id)

    const handleDelete = (event) => {
        const newList = savedItems.filter((item) => item.item_id != event.target.id);
        setSavedItems(newList);
        console.log("id", event.target.id)
        console.log("key")
            axios.delete(`/api/saved`, {
                params: {
                    user_id: userId,
                    item_id: event.target.id
                }
            }).then((res) => {
                console.log(res.body)
            })
    }

    return (
        <div>
            <div className={"min-w-full mt-4 ml-4 text-sm font-light"}><Link href="/">Home/</Link> Account/ Saved Items</div>
            <div className={"flex flex-grow-1 flex-row ml-4 mt-4"}>
                <div className={"block border-solid border-zinc-200 border-[1px] rounded h-46 w-22 mt-1 mr-10"}>
                    <div className={"text-xl font-medium p-1 pl-3 pb-1 pt-4"}>Account</div>
                    <div className={"font-medium p-1 pl-3 pb-2"}>Transactions</div>
                    <div className={"hover:bg-zinc-200 p-1 pl-3 font-light pb-2"}>Purchases / Sales</div>
                    <div className={"hover:bg-zinc-200 p-1 pl-3 font-light pb-2"}>Payment / Deposite methods</div>
                    <div className={"font-medium p-1 pl-3 pb-2"}>Saves</div>
                    <div className={"bg-green-100 font-medium p-1 pl-3 pb-2"}>Saved items</div>
                    <div className={"font-medium p-1 pl-3 pb-2"}>Account</div>
                    <Link href="/account">
                        <div className={"hover:bg-zinc-200 p-1 pl-3 font-light pb-3 cursor-pointer"}>Account settings</div>
                    </Link>
                    <hr className={"h-px bg-zinc-300 pl-3 mx-4"}></hr>
                    <Link href="/profile" ><div className={"underline p-1 pl-3 pt-3 hover:text-zinc-400 pb-4 text-sm font-light"}>View public profile</div></Link>
                </div>
                <div className={"flex-grow-1 font-normal text-base p-1 font-serif ml-1"}>
                    <h2 className="font-serif text-2xl font-black mt-4 mb-5">{savedItems[0] ? "Saved Items" : "No Saved Items"}</h2>
                    {savedItems.map((item, i) => (
                    <div key={i} className ="flex flex-wrap box-border mt-4 max-w-xl">
                        <div className ="hover:bg-zinc-200 flex-grow-0 display-block box-border pl-3 pr-12">
                            <ul>
                                <li className="h-18 flex flex-row">
                                    <img src={item.image} className="h-16 rounded"></img>
                                    <div className='flex flex-col'>
                                    <div className="hover:underline pl-4 text-lg truncate max-w-lg">${item.price}</div>
                                        <div className="hover:underline pl-4 text-lg truncate max-w-lg">{item.title}</div>
                                        <div className="hover:underline text-[#00a87e] font-semibold ml-4 text-sm pt-1 w-12" id={item.item_id}
                                            onClick={handleDelete}>Delete
                                        </div>
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

export default SavedItems;