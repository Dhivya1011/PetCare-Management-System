import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/signup')    
  }
  return (
    <div className='index1'>
        <div className='index2'>
            <h1 className='head1'>Welcome to PAW PURFUCT !!!</h1>
            <h2 className='head2'>Your one-step solution for pet care services</h2>
            <button className='button1' onClick={handleClick}>Get Started<a href="#"><i class="fa-solid fa-circle-arrow-right"></i></a></button>
        </div>
    </div>
  )
}
