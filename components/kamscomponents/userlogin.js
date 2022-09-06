/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import axios from 'axios'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import Router from 'next/router'
import Link from 'next/link'



const Userlogin = () => {
  const {register, errors, handleSubmit} = useform()
  const onSubmit = (data) => console.log({data})
  const [username, setUsername] =useState('')
  const [password, setPassword] =useState('')
  const [currentUser, setCurrentUser] = useState('')
  // http://localhost:8000/api/authenticate',
  const login = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:8000/api/authenticate/${username}/${password}`)
                .then(data => {

                  console.log(data.data, 'data from db ')
                  if (data.data.bool === false){ // email/password is not valid
                  } else if (data.data.bool === true){ // email/password is valid
                    setCurrentUser(username)
                    Router.push({
                      pathname: '/',
                      query: { data: JSON.stringify(data), test: 'test' }
                    })


                  } else { // edge case 
                    console.log("issue with user email ")
                  }
                })
                .catch(err => console.log(err))     
              }
 
  return (
 <div className='p-8  justify-center items-center h-screen flex'>
      <form className="flex border-2 rounded-3xl p-7 shadow-xl  h-[80%] w-[40%] " >
      <div className="divide-y-4 divide-white  h-6 w-full text-center font-extrabold space-y-2 grid justify-items-stretch">
      <a href="/"className="justify-self-end text-slate-400 font-light -mt-6">cancel</a> Log In
          <br></br> <br></br>
          <span className="text-emerald-600 text-3xl font-extrabold ">
            OfferDown
          </span>
        <div >
        <label
              className="block text-left text-gray-700 text-sm font-bold mb-2"
              
            >
              Name
            </label>
          <input 
            className="bg-white border-emerald-500 border-2 shadow-inner rounded font-thin p-2 flex-1 w-full "
            onSubmit={handleSubmit(onSubmit)}
            name="password"
            ref={register({
              required: "password", 
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            id='username' 
            type='text'
            value={username}
            onChange={event => setUsername(event.target.value)} // username is set to value of input
            aria-label='username' 
            placeholder='Ex. johndoe@offerdown.com' />
          </div>
        <div>
        <label
              className="block text-left text-gray-700 text-sm font-bold mb-2"
              
            >
              Password
            </label>
          <input 
            className="bg-white border-emerald-500 border-2 shadow-inner rounded  p-2 flex-1 w-full "
            id='password'
            minLength="6"
            required
            type='password'
            value={password}
            onChange={event => setPassword(event.target.value)} //password is set to value of input
            aria-label='password' 
            placeholder='' />
            </div>
          <a href="#" className="text-small justify-self-start font-light underline">Forgot your password?</a>
          <div >
            <a href='signup' className='text-small justify-self-start  text-sm text-emerald-600 font-bold '>Don't have an account? Sign up</a>
            <button 
            type='submit'
            onClick={login}
            className="bg-slate-100 text-slate-400 hover:bg-emerald-600 hover:text-white duration-300  shadow p-2 mt-2 mr-6 rounded-full  ml-2 w-[95%]">
            Log in  
            </button>
        </div>
        <div className="text-xs ">
        By tapping any of the buttons above, you agree to nothing and acknowledge nothing <br></br><br></br>
This site is protected by e-ducks and the  e-ducks Privacy Policy and the e-ducks Terms of Service apply
</div>
      </div>
      </form>
    </div>
  )
}

export default Userlogin