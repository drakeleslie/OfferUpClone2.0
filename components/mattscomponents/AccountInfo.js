import React, { useState, useEffect } from "react";
import axios from "axios";

function AccountInfo() {
    const [userInfo, setUserInfo] = useState([]);
    const [data, setData] = useState({});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [picture, setPicture] = useState('');

    useEffect(() => {
        let dataObj = JSON.parse(localStorage.getItem('data'))
        console.log('dataObj', dataObj)
        setData(dataObj)
        axios.get(`/api/userPage`, {
            params: {
                user_id: dataObj.user_id
            }
        }).then((res) => {
            console.log("res.data", res.data[0])
            setUserInfo(res.data);
            localStorage.setItem('data', JSON.stringify(res.data[0]))
        })
    }, [])

    const handleChangeUsername = (event) => {
        event.preventDefault();
            axios.patch(`/api/userPage`, {
                params: {
                    user_id: data.user_id,
                    username: username,
                }
            }).then((res) => {
                let input = document.getElementById(event.target.id);
                  input.value = '';
                  input.placeholder = username;
            })
    }

    const handleChangePassword = (event) => {
        event.preventDefault();
            axios.patch(`/api/userPage`, {
                params: {
                    user_id: data.user_id,
                    password: password,
                }
            }).then((res) => {
                let input = document.getElementById(event.target.id);
                  input.value = '';
                  input.placeholder = password;
            })
    }

    const handleChangeEmail = (event) => {
        event.preventDefault();
            axios.patch(`/api/userPage`, {
                params: {
                    user_id: data.user_id,
                    email: email,
                }
            }).then((res) => {
                let input = document.getElementById(event.target.id);
                  input.value = '';
                  input.placeholder = email;
            })
    }

    const handleChangeCity = (event) => {
        event.preventDefault();
            axios.patch(`/api/userPage`, {
                params: {
                    user_id: data.user_id,
                    city: city,
                }
            }).then((res) => {
                let input = document.getElementById(event.target.id);
                  input.value = '';
                  input.placeholder = city;
            })
    }

    const handleChangePicture = (event) => {
        event.preventDefault();
            axios.patch(`/api/userPage`, {
                params: {
                    user_id: data.user_id,
                    picture: picture,
                }
            }).then((res) => {
                let input = document.getElementById(event.target.id);
                  input.value = '';
                  input.placeholder = picture;
            })
    }

    return (
        <div className="flex justify-center w-fit">
            {userInfo.map((item, i) => (
                <div key={i} className="border-solid border-2 border-[#00a87e]">
                    <div className="flex justify-center mb-6 m-3">
                        <img src={item.picture} className="h-auto rounded"></img>
                        <form className='flex flex-row'>
                                <input className='ml-1 w-[200px] h-10 mt-32 rounded' id={item.picture}
                                    onChange={(event) => setPicture(event.target.value)} placeholder={item.picture}/>
                                <button className="text-black fa fa-save ml-2" 
                                    onClick={handleChangePicture} type="submit" id={item.picture}></button>
                            </form>
                    </div>
                    <div className="flex flex-row justify-center mb-6 border-solid border-b-[1px] border-slate-300">
                        <div>
                            <label>Username:</label>
                            <form className='flex flex-row'>
                                <input className='ml-1 w-[240px] rounded' id={item.username}
                                    onChange={(event) => setUsername(event.target.value)} placeholder={item.username}/>
                                <button className="text-black fa fa-save ml-2" 
                                    onClick={handleChangeUsername} type="submit" id={item.username}></button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center mb-6 border-solid border-b-[1px] border-slate-300">
                        <div>
                            <label>Password:</label>
                            <form className='flex flex-row'>
                                <input className='ml-1 w-[240px] rounded' id={item.password}
                                    onChange={(event) => setPassword(event.target.value)} placeholder={item.password}/>
                                <button className="text-black fa fa-save ml-2" 
                                    onClick={handleChangePassword} type="submit" id={item.password}></button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center mb-6 border-solid border-b-[1px] border-slate-300">
                        <div>
                            <label>Email:</label>
                            <form className='flex flex-row'>
                                <input className='ml-1 w-[240px] rounded' id={item.email}
                                    onChange={(event) => setEmail(event.target.value)} placeholder={item.email}/>
                                <button className="text-black fa fa-save ml-2" 
                                    onClick={handleChangeEmail} type="submit" id={item.email}></button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center mb-6 border-solid border-b-[1px] border-slate-300">
                        <div>
                            <label>City:</label>
                            <form className='flex flex-row'>
                                <input className='ml-1 w-[240px] rounded' id={item.city}
                                    onChange={(event) => setCity(event.target.value)} placeholder={item.city}/>
                                <button className="text-black fa fa-save ml-2" 
                                    onClick={handleChangeCity} type="submit" id={item.city}></button>
                            </form>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AccountInfo;