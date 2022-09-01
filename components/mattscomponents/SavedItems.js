import React, { useState, useEffect } from "react";
import axios from "axios";
import QuickSave from "./QuickSave";
import Link from "next/link";

function SavedItems(props) {
    const [savedItems, setSavedItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/saved`).then((res) => {
            console.log("res.data", res.data);
            setSavedItems(res.data);
        })
    }, [])
    console.log("savedItems", savedItems);

    const handleDelete = () => {
        console.log("deleted")
    }

    return (
        <div className={""}>
            <div className={"min-w-full"}><Link href="/">Home/</Link> Account/ Saved Items</div>
            <div className={"flex flex-grow-1 flex-row"}>
                <div className={"block border-solid border-zinc-300 border-4 rounded-lg h-30 w-18 mt-8"}>
                    <div>Account</div>
                    <div>Transactions</div>
                    <div>Purchases / Sales</div>
                    <div>Payment / Deposite methods</div>
                    <div>Saves</div>
                    <div className={"bg-green-100"}>Saved items</div>
                    <div>Account</div>
                    <div>Account settings</div>
                    <div className="underline">View public profile</div>
                </div>
                <div className={"flex-grow-1 font-normal text-base p-1 font-serif ml-7"}>
                    <h2 className="font-serif text-xl font-black">Saved Items</h2>
                    {savedItems.map((item, i) => (
                    <div key={i} className ="flex flex-wrap box-border mt-2">
                        <div className ="hover:bg-zinc-200 flex-grow-0 display-block box-border pl-3 pr-12">
                            <ul>
                                <li className="h-24">
                                    <div>{item.image}</div>
                                    <div>{item.title}</div>
                                     {item.price} {item.category} {item.description}
                                     <div className="hover:underline"
                                        onClick={handleDelete}>Delete
                                    </div>
                                </li>
                                <hr className={"h-0.5 bg-zinc-300 "}></hr>
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