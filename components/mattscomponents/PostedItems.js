import React, { useState, useEffect } from "react";
import axios from "axios";

function PostedItems(props) {
    const [postedItems, setPostedItems] = useState([]);
    const [data, setData] = useState({})

    useEffect(() => {
        let dataObj = JSON.parse(localStorage.getItem('data'))
        setData(dataObj)
        axios.get(`/api/posted`, {
            params: {
                user_id: dataObj.user_id
            }
        }).then((res) => {
            setPostedItems(res.data);
        })
    }, [])

    let userId = parseInt(data.user_id)

    const handleDelete = (event) => {
        const newList = postedItems.filter((item) => item.item_id != event.target.id);
        setPostedItems(newList);
        console.log("id", event.target.id)
        console.log("key")
            axios.delete(`/api/posted`, {
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
            <h2 className="flex justify-center font-serif text-2xl font-black mt-4 mb-4">{postedItems[0] ? "Posted Items" : "No Posted Items"}</h2>
            <div className="flex justify-center">
                <div className={"font-normal text-base font-serif mt-6 grid grid-cols-3 gap-20 grid-flow-row grid-"}>
                    {postedItems.map((item, i) => (
                    <div key={i} className ="flex flex-wrap box-border mt-4 max-w-xl">
                        <div className ="hover:bg-zinc-200 flex-grow-0 display-block box-border pl-3 pr-12">
                            <ul>
                                <li className="h-16 flex flex-row">
                                    <img src={item.image} className="h-16 rounded"></img>
                                    <div className='flex flex-col'>
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

export default PostedItems;