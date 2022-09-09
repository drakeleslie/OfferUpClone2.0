import React, { useState, useEffect } from "react";
import axios from "axios";

function AccountInfo() {
    const [userInfo, setUserInfo] = useState([]);
    const [data, setData] = useState({})

    useEffect(() => {
        let dataObj = JSON.parse(localStorage.getItem('data'))
        setData(dataObj)
        axios.get(`/api/userPage`, {
            params: {
                user_id: dataObj.user_id
            }
        }).then((res) => {
            setUserInfo(res.data);
            console.log(userInfo);
        })
    }, [])
    return (
        <div className="flex justify-center w-fit">
            {userInfo.map((item, i) => (
                <div key={i} className="border-solid border-2 border-[#00a87e]">
                    <div className="flex justify-center mb-6 m-3">
                        <img src={item.picture} className="h-auto rounded"></img>
                    </div>
                    <div className="flex justify-center mb-6 border-solid border-b-[1px] border-slate-300">
                        <p>Username: {item.username}</p>
                    </div>
                    <div className="flex justify-center mb-6 border-solid border-b-[1px] border-slate-300">
                        <p>Password: {item.password}</p>
                    </div>
                    <div className="flex justify-center mb-6 border-solid border-b-[1px] border-slate-300">
                        <p>Email: {item.email}</p>
                    </div>
                    <div className="flex justify-center mb-1">
                        <p>City: {item.city}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AccountInfo;