import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; 

export const Inbox = () => {
  const [modalOpen, setModalOpen] = useState(false); 

  const handleEditClick = () => {
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='container'>
      <div className='text-2xl font-bold mt-24'>Inbox</div>
      <div className='row'>
       
        <div className='col-10 border-opacity-45 mt-7 ml-12'>
          <div className='row border-solid border-2 border-gray-40 rounded-2xl h-20 mt-10'>
            <div className='col-2 text-center mt-2 text-neutral-500'>
              Coin Name 
              <div className='mt-1 text-slate-900 font-bold'>Epay</div>
            </div>
            <div className='col-2 text-center mt-2 text-neutral-500'>
              USDT
              <div className='mt-1 text-slate-900 font-bold'>1 USDT</div>
            </div>
            <div className='col-2 text-center mt-2 text-neutral-500'>
              Order Limit
              <div className='mt-1 text-slate-900 font-bold'>400-10.000</div>
            </div>
            <div className='col-3'></div>
            <div className='col-3 float-end'>
              <button
                type="button"
                onClick={handleEditClick}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-3 dark:bg-red-500 dark:hover:bg-red-700 ml-24 mt-3 dark:focus:ring-red-500"
              >
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>

     
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-5/12">
           
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              <AiOutlineClose size={24} />
            </button>

            <h2 className="text-xl font-bold mb-4">Edit Coin Details</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Coin Name
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter coin name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  USDT Value
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter USDT value"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Order Limit
                </label>
                <div className='flex flex-row space-x-4'>

                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Min order"
                />
                 <input
                  type="text"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Max order"
                />

                </div>
               
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
