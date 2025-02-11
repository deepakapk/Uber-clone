import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [userData, setUserData] = useState({})


  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(email, password, firstname, lastname);
    setUserData({
      fullname:{
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    })
    setEmail("")
    setPassword("")
    setFirstname("")
    setLastname("")
    
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div >
        <img className='w-16 mb-5' src="/logo.png" alt="" />
        <form onSubmit={submitHandler}>
            <h3 className='text-xl mb-2'>What's your name?</h3>
          <div className='flex gap-4 mb-7'>
            <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2  text-lg placeholder:text-base' type="text" required placeholder='firstname'/>
            <input value={lastname} onChange={(e)=>setLastname(e.target.value)} className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2  text-lg placeholder:text-base' type="text" placeholder='lastname'/>
          </div>

            <h3 className='text-xl mb-2'>What's your email?</h3>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base' type="email"   required placeholder='email@example.com'/>

            <h3 className='text-xl mb-2'>Enter Password</h3>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base' type="password" placeholder='password'/>

            <button type='submit' className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full'>Singup</button>
        </form>
        <p className='text-center'>Already have an account?<Link to={"/login"} className='text-blue-600 inline-block mb-7'>Login here</Link></p>
    </div>
    <div>
        <p className='text-justify text-[6px]'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affliates to the number provided.</p>
    </div>
    </div>
  )
}

export default UserSignup