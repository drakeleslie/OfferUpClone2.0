import {useState} from 'react'

const Userlogin = () => {
    const [input, setInput] = useState('')

        const login = async (event) =>{
            event.preventDefault()
            console.log("In userlogin component",input)

            try{
                const res = await fetch('http://localhost:8000/api/authenticate', )
        } catch(err) {console.log(err)}

 }
  return (
 <div className='p-8 justify-center items-center h-screen flex'>
      <form className='flex'>
        <input 
            className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' 
            id='email' 
            type='text'
            value={input}
            onChange={event => setInput(event.target.value)} 
            aria-label='email address' 
            placeholder='Enter your email address' />
        <button 
            type='submit'
            onClick={login}
            className='bg-green-600 hover:bg-red-700 duration-300 text-white shadow p-2 rounded-r' 
          >
          Sign in
        </button>
      </form>
    </div>
  )
}

export default Userlogin