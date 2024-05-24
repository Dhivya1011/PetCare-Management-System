import React from 'react'

export default function Home() {
    const handleSubmit=()=>{
        alert('Successfully Booked')
    }
 
  return (
    <div className='home'>
         <div className='home1'>
            <h2>Home Based Pet Care</h2> 
                <div className='dog'>
                    <h4>I'm looking for a service for my:</h4><br/>
                    <h4><button><i class="fa-solid fa-paw"></i></button>Dog</h4>
                        <form onSubmit={handleSubmit}>
                            <h4>Looking for help with:</h4><br/>
                                <button>Dog Boarding</button>
                                <button>Training</button>
                                <button>Grooming</button>
                                <button>Dog Walking</button>
                                <button>Day Care</button>
                                <button>Night Care</button><br/>
                            <h4>Select Date Range</h4>
                                <input type='date'/><br/>
                            <h3>Dog Size</h3><br/>
                                <button>Small<br/>0-7 Kg</button>
                                <button>Medium<br/>8-18 Kg</button>
                                <button>Large<br/>19-45 Kg</button>
                                <button>Giant<br/>46 Kg+</button>
                            <h3>How many Pets ?</h3>
                                <button>1</button>
                                <button>2</button>          
                                <button>3+</button><br/>
                            <h3>Location</h3><br/>
                            <select>
                                <option>Coimbatore</option>
                                <option>Chennai</option>
                                <option>Bangalore</option>
                            </select><br/>
                            <button type='submit'>Submit</button>
                        </form>  
                </div>  
        </div> 


        <div className='home2'>
            <div className='image1'> 
                <div className='img1'>
                    <img src="https://pawspace.in/wp-content/uploads/2023/11/Pawspace-discover-service.png" alt='no img'/><br/>
                </div>

                <div className='img2'>
                    <img src="https://pawspace.in/wp-content/uploads/2023/11/Pawspace-payment-service.png" alt='no img'/><br/>
                </div>

                <div className='img3'>
                    <img src="https://pawspace.in/wp-content/uploads/2023/11/Pawspace-yoga-pose.png" alt='no img'/><br/>
                </div>
            </div>

            <div className='content1'>
                <div className='cont1'>
                    <h4>Select Your Service</h4><br/>
                    <h6>Discover personalized care plans tailored to your pet's unique needs.Choose the perfect service<br/>to keep your furry friend happy and healthy!</h6><br/>
                </div>

                <div className='cont2'>
                    <h4>Book and Pay</h4><br/>
                    <h6>Securely reserve your preferred service with ease and make hassle-free payments</h6>
                </div>

                <div className='cont3'>
                    <h4>Relax! We’ll take care</h4><br/>
                    <h6>Our team of trusted and vetted petters will take care of your furry friend like their own</h6>
                </div>
            </div>
        </div>


        <div className='home3'>
            <div className='home4'>
                <h3>Our Service Providers</h3>
                <h6>Pawspace is your one-stop solution for all your pet care needs.We have one of the largest<br/>networks of trusted, certified, and affordable pet care providers from the local pet-loving<br/>
                    community.Our mission is to simplify pet parenting by offering a wide range of services<br/>dedicated to the well-being of your furry companions.</h6>
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
