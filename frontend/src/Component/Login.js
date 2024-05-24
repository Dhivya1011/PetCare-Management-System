import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate=useNavigate()
  const handleSubmit=()=>{
    navigate('/home')
  }
  return (
    <div className='login1'>
        <div className='login2'>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br/>
                <input required type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <label>Email</label><br/>
                <input required type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <label>Password</label><br/>
                <input required type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button>Login</button>        
            </form>  
        </div>
    </div>
  )
}
