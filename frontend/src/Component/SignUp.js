import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const[name,setName]=useState()
  const[mobileNumber,setMobileNumber]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate=useNavigate()
  const handleSubmit=()=>{
    navigate('/login')
  }
  return (
    <div className='signup1'>
        <div className='signup2'>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br/>
                <input required type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <label>Mobile Number</label><br/>
                <input required type='number' value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/><br/>
                <label>Email</label><br/>
                <input required type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <label>Password</label><br/>
                <input required type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button type='submit'>Sign Up</button>        
            </form> 
        </div>      
    </div>
  )
}
