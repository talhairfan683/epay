import { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';

function Email() {
  const navigate = useNavigate();

  function gotologin() {
     navigate ("/Layout")
  }

  return (
    <>
      <div className="container-flude h-screen overflow-hidden" >
          <div className="row ">
                <div className='col-6 coin '>
                  <img className=' ml-28 ' src=".\WhatsApp Image 2024-09-08 at 19.10.34_d49591ad 3.png" alt="" />
                </div>
            
            <div className="col-4 ">
               
            </div>
            <div className="col-2 mt-">
            <img src=".\WhatsApp Image 2024-09-08 at 19.10.34_d49591ad 2.png" alt="" /> 
            </div>
          </div>
       
          <div className="row">
                <div className='col-6 coin'>
                  <img className='h-96  ml-48 ' src=".\coin (1) 1.png" alt="" />
                </div>
            
            <div className="col-6 ">
              <div className=''>
                    <form className='flex-col ml-60'>
                      <h1><div className='text-center text-xl font-bold m-7 mr-80'>Sign in to ePay</div></h1>
                      <div className="inputGroup ">
                              <label for="name">Email Address</label>
                              <input type="text"placeholder='youremail@gmail.com' required="" autocomplete="off"></input>
                      </div>
                        
                      <div className="inputGroup">
                              <label for="name">Password</label>
                              <input type="password"placeholder='Password' required="" autocomplete="off"></input>
                      </div>

                         
                      <div className="mb-4">
                              <input type="checkbox"placeholder='checkbox' required="" autocomplete="off"></input>
                              <label className='ml-2'>Remember Me</label>
                              <label className='ml-32'>Forget Password?</label>
                      </div>
                     
                      
                        <button onClick={gotologin} class="button-22 " role="button">Log in</button>
                      
                    </form>
                </div>
            </div>
          </div>
      </div>
      
    </>
  )
}

export default Email
