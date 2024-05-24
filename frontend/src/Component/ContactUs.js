import React, { useState } from 'react'

export default function ContactUs() {
    const[name,setName]=useState()
    const[number,setNumber]=useState()
    const[email,setEmail]=useState()
    const[message,setMessage]=useState()
    const handleSubmit=()=>{
        alert('Submitted Successfully')
    }
  return (
    <div className='cont'>
        <div className='contact'>
            <div className='contact1'>
                <h5>CONTACT US</h5><br/>
                <p>We're here to answer your questions and meet your pet's needs</p><br/>
                <h3><i class="fa-solid fa-location-dot"></i>Saravanampatti,Coimbatore</h3><br/>
                <h3><i class="fa-solid fa-envelope"></i>connect@pawpurfuct.in</h3><br/>
                <h3><i class="fa-solid fa-phone"></i>Info on Service-01234-56789</h3><br/>
            </div>

            <div className='contact2'>
                <h5>GET IN TOUCH</h5><br/>
                <input required type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <input required type='number' placeholder='Phone Number' value={number} onChange={(e)=>setNumber(e.target.value)}/><br/>
                <input required type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <select>
                    <option>City</option>
                    <option>Chennai</option>
                    <option>Coimbatore</option>
                    <option>Bangalore</option>
                </select><br/>
                <textarea required type='text' placeholder='Message'value={message} onChange={(e)=>setMessage(e.target.value)} /><br/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
       </div>


{/* FOOTER */}
        <div className='footer'>
            <div className='footer1'>
                <div className='foot1'>
                    <h3>Service</h3><br/>
                </div>

                <div className='foot2'>
                    <h5>Grooming</h5><br/>
                    <h5>Training</h5><br/>
                    <h5>Walking</h5><br/>
                    <h5>Relocation</h5><br/>
                    <h5>Boarding</h5><br/>
                </div>
            </div>

            <div className='footer2'>
                <div className='foot1'>
                    <h3>Important Links</h3><br/>
                </div>

                <div className='foot2'>
                    <h5>Blogs</h5><br/>
                    <h5>About Us</h5><br/>
                    <h5>Contact Us</h5><br/>
                    <h5>FAQ's</h5><br/>
                    <h5>Privacy Policy</h5><br/>
                    <h5>Terms & Conditions</h5><br/>
                </div>
            </div>

            <div className='footer3'>
                <div className='foot1'>
                    <h3>Contact Us</h3><br/><br/>
                </div>
                
                <div className='foot2'>
                    <h5>Info on Service - 98765-43210</h5><br/>
                    <h5>Join as a Pet Career - 01234-56789</h5><br/>
                    <h5>Email id - connect@pawpurfuct.in</h5><br/>
                </div>

                <div className='footer4'>
                    <div className='foot3'>
                        <i class="fa-brands fa-instagram fa-xl" id='insta'></i>    
                        <i class="fa-brands fa-facebook fa-xl" id='facebook'></i>
                        <i class="fa-brands fa-x-twitter fa-xl" id='twitter'></i>
                        <i class="fa-brands fa-youtube fa-xl" id='youtube'></i> 
                    </div>
                </div>

                <div className='footer5'>
                    <div className='foot4'>
                        <h3>Subscribe to our Newsletter</h3><br/>
                        <input placeholder='Enter your E-mail'/><br/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>    
    </div>
    )
}
