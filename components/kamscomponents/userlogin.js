import axios from 'axios'
import {useState} from 'react'
import Router from 'next/router'
import Link from 'next/link'

const Userlogin = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')
    const [currentUser, setCurrentUser] = useState('')
        
      const login = async (event) =>{
            event.preventDefault()
                await axios({
                  method: 'post',
                  url: 'http://localhost:8000/api/authenticate', 
                  data:{
                    username: username,
                    password: password
                  }
                })
                .then(data => {
                  console.log(data)
                  if (data.data === false){ // email/password is not valid
                    console.log('In userlogin post request --- username or password is not valid')
                  } else if (data.data === true){ // email/password is valid
                    console.log('In userlogin post request --- username or password is valid')
                    Router.push('/')
                    currentUser = username
                    console.log("current user is set to ",currentUser)
                  } else { // edge case 
                    console.log("issue with user email ")
                  }
                })
                .catch(err => console.log(err))     

 }
  return (
 <div className='p-8  justify-center items-center h-screen flex'>
      <form className='flex border-2 rounded-3xl p-7 shadow-xl'>
        <div className='divide-y-4 divide-white'>
        <div >
          <input 
            className='bg-gray-200 shadow-inner rounded  p-2 flex-1' 
            id='username' 
            type='text'
            value={username}
            onChange={event => setUsername(event.target.value)} // username is set to value of input
            aria-label='username' 
            placeholder='Enter your username' />
          </div>
        <div>
          <input 
            className='bg-gray-200 shadow-inner rounded p-2 flex-1' 
            id='password' 
            type='text'
            value={password}
            onChange={event => setPassword(event.target.value)} //password is set to value of input
            aria-label='password' 
            placeholder='Enter your password' />
            </div>
          
          <div >
            <button 
            type='submit'
            onClick={login}
            className='bg-green-600 hover:bg-red-700 duration-300 text-white shadow p-2 mt-2 mr-6 rounded-full'>
            Sign in  
            </button>
            <Link href='signup' className='text-blue-500 underline '>Need to sign up?</Link>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Userlogin