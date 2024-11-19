import React, { useState } from 'react';
import { FaCoins } from "react-icons/fa6";
import { GrTransaction, GrUserAdmin } from "react-icons/gr";
import { SiImessage } from "react-icons/si";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(""); 
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  function handleNavigation(path, label) {
    setSelectedItem(label); 
    navigate(path);
  }



  return (
    <div className='flex h-screen'>
      <nav className="bg-[#CDDEFC] fixed top-0 left-0 h-screen w-64 flex flex-col px-3 py-6 ">
        <div className="relative mb-8">
          <img src="./WhatsApp Image 2024-09-08 at 19.10.34_d49591ad 3.png" alt="logo" className='w-[180px] ml-2' />
        </div>
        <ul className="space-y-4 flex-1 "> <button      onClick={() => handleNavigation("/Epaycoin", "Coin")}   className="text-gray-600 hover:text-white hover:bg-red-500 text-lg flex items-center w-full px-4 py-3 rounded transition-all">
            <FaCoins className='text-xl' />
            <span className='ml-3'>Coin</span>
          </button>
         
          <button    onClick={() => handleNavigation("/Transaction", "Transaction")}   className="text-gray-600 hover:text-white hover:bg-red-500 text-lg flex items-center w-full px-4 py-3 rounded transition-all">
            <GrTransaction />
            <span className='ml-3'>Transactions</span>
          </button>
          <button    onClick={() => handleNavigation("/admin", "Admin")}   className="text-gray-600 hover:text-white hover:bg-red-500 text-lg flex items-center w-full px-4 py-3 rounded transition-all">
            <GrUserAdmin className='text-xl' />
            <span className='ml-3'>Admins</span>
          </button>
          <button       onClick={() => handleNavigation("/Inbox","Inbox")}  className="text-gray-600 hover:text-white hover:bg-red-500 text-lg flex items-center w-full px-4 py-3 rounded transition-all">
            <SiImessage className='text-xl' />
            <span className='ml-3'>Inbox</span>
          </button>
        </ul>
        <button     onClick={() => handleNavigation("/", "Logout")}  className="text-gray-600 hover:text-white hover:bg-red-500 text-lg flex items-center w-full px-4 py-3 rounded transition-all">
          <FiLogOut className='text-xl' />
          <span className='ml-3'>Logout</span>
        </button>
      </nav>
    </div>
  );
}
