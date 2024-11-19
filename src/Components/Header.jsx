import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  function handleNavigation() {
     navigate ("/setting")
  }
  return (
    <div className='fixed top-0 left-0 w-full '>
      <div className='container mx-auto p-4'>
        <div className='row'>
        
          <div className='col-5'>
            <form className="max-w-md  ml-60">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="flex items-center px-4 py-3 rounded-md border-2 border-gray-300 overflow-hidden font-[sans-serif]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="25px" className="fill-gray-600 mr-3 rotate-90">
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full outline-none bg-transparent text-gray-600 text-lg"
                />
              </div>
            </form>
          </div>
          <div className='col-4'></div>
          <div className='col-3 flex items-center justify-end space-x-8'>
          <img className='w-10 h-10 rounded-full' src='Ellipse 8.png' alt="Admin" />
          <div className='text-gray-800 text-2xl mr-4'>
              Evano<br/><span className='text-sm text-gray-600'>Admin</span>
          </div>
          <IoSettingsOutline  onClick={() => handleNavigation("/Setting", "setting")} className='text-gray-600 text-xl cursor-pointer' />
          <GoBell className='text-gray-600 text-xl cursor-pointer' />
           
           
           
          </div>
        </div>
      </div>
    </div>
  );
};
