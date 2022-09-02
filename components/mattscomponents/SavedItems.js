import React, { useState, useEffect } from "react";
import axios from "axios";
import QuickSave from "./QuickSave";
import Link from "next/link";

function SavedItems(props) {
    const [savedItems, setSavedItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/saved/${1}`).then((res) => {
            setSavedItems(res.data);
        })
    }, [])

    const handleDelete = (event) => {
        const newList = savedItems.filter((item) => item.item_id != event.target.id);
        setSavedItems(newList);
        console.log("id", event.target.id)
        console.log("key")
            axios.delete(`http://localhost:8000/api/saved/${1}/${event.target.id}`).then((res) => {
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
                    <div className={"hover:bg-zinc-200 p-1 pl-3 font-light pb-3"}>Account settings</div>
                    <hr className={"h-px bg-zinc-300 pl-3 mx-4"}></hr>
                    <div className={"underline p-1 pl-3 pt-3 hover:text-zinc-400 pb-4 text-sm font-light"}>View public profile</div>
                </div>
                <div className={"flex-grow-1 font-normal text-base p-1 font-serif ml-1"}>
                    <h2 className="font-serif text-2xl font-black mt-4 mb-5">Saved Items</h2>
                    {savedItems.map((item, i) => (
                    <div key={i} className ="flex flex-wrap box-border mt-4 max-w-xl">
                        <div className ="hover:bg-zinc-200 flex-grow-0 display-block box-border pl-3 pr-12">
                            <ul>
                                <li className="h-16 flex flex-row">
                                    {/* <img src={item.image}></img> */}
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqBEzRduwaunqttBNlrwoEM6QcxjZyJ38KlluuWck2mwpgCS9I6X-FG2YGuef3hfFwis&usqp=CAU"} className="h-16 rounded"></img>
                                    <div className='flex flex-col'>
                                        <div className="pl-4 text-lg truncate max-w-lg">{item.title} plus a bit more title and more and more and more</div>
                                        <div className="hover:underline text-emerald-500 font-semibold pl-4 text-sm pt-1" id={item.item_id}
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