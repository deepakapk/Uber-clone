import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({})


  const submitHandler = (e)=>{
    e.preventDefault()
    setUserData({email:email, password:password})
    console.log(email, password,userData);
    setEmail("")
    setPassword("")
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div >
        <img className='w-16 mb-5' src="/logo.png" alt="" />
        <form onSubmit={submitHandler}>
            <h3 className='text-xl mb-2'>What's your email?</h3>
            <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base' type="email" name="email"  required placeholder='email@example.com' value={email} onChange={(e)=>setEmail(e.target.value)} />

            <h3 className='text-xl mb-2'>Enter Password</h3>
            <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base' type="password" name="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button type='submit' className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full'>Login</button>
        </form>
        <p className='text-center'>New here?<Link to={"/signup"} className='text-blue-600 inline-block mb-7'>Create new Account</Link></p>
    </div>
    <div>
        <Link to={"/captain-login"}><button className='bg-[#10b461] text-white font-semibold rounded px-4 py-2 w-full'>Sign in as Captain</button></Link>
    </div>
    </div>
  )
}

export default UserLogin