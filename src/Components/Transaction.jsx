import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export const Transaction = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false); 
  };

  return (
    <>
      <p className='text-2xl tracking-wide font-semibold  mt-24 ml-10'>Transactions</p>

    <div className='ml-16'>
      <div className=' border-opacity-45 m-3'>
        <div className='border-solid border-2 border-gray-40 rounded-2xl h-20 grid grid-cols-7 items-center'>
          <div className='text-center text-neutral-500'>
            Name
            <div className='mt-1 text-slate-900 font-semibold'>John Smith</div>
          </div>
          <div className='text-center text-neutral-500'>
            Email Address
            <div className='mt-1 text-slate-900 font-semibold'>johnSmith@gmail.com</div>
          </div>
          <div className='text-center text-neutral-500'>
            Payment Method
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>Payoneer
            </div>
          </div>
          <div className='text-center text-neutral-500'>
            Account
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>$40.10
            </div>
          </div>
          <div className='text-center text-neutral-500'>
            USDT
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>27.6 USDT
            </div>
          </div>

        
          <div className='text-center pr-4'>
            <button
              type='button'
              onClick={handleEditClick}
              className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-3 dark:bg-red-500 dark:hover:bg-red-700 mt-3 dark:focus:ring-red-500'
            >
            Release Fund
            </button>
          </div>

         
          <div className='text-center pr-4'>
            <button
              type='button'
              className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 text-gray-500 hover:text-gray-700'
              aria-label='More options'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6 10C6 11.1 5.1 12 4 12C2.9 12 2 11.1 2 10C2 8.9 2.9 8 4 8C5.1 8 6 8.9 6 10ZM10 12C11.1 12 12 11.1 12 10C12 8.9 11.1 8 10 8C8.9 8 8 8.9 8 10C8 11.1 8.9 12 10 12ZM16 10C16 11.1 15.1 12 14 12C12.9 12 12 11.1 12 10C12 8.9 12.9 8 14 8C15.1 8 16 8.9 16 10Z' />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className=' border-opacity-45 m-3'>
        <div className='border-solid border-2 border-gray-40 rounded-2xl h-20 grid grid-cols-7 items-center'>
          <div className='text-center text-neutral-500'>
            Name
            <div className='mt-1 text-slate-900 font-semibold'>John Smith</div>
          </div>
          <div className='text-center text-neutral-500'>
            Email Address
            <div className='mt-1 text-slate-900 font-semibold'>johnSmith@gmail.com</div>
          </div>
          <div className='text-center text-neutral-500'>
            Payment Method
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>Payoneer
            </div>
          </div>
          <div className='text-center text-neutral-500'>
            Account
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>$40.10
            </div>
          </div>
          <div className='text-center text-neutral-500'>
            USDT
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>27.6 USDT
            </div>
          </div>

        
          <div className='text-center pr-4'>
            <button
              type='button'
              onClick={handleEditClick}
              className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-3 dark:bg-red-500 dark:hover:bg-red-700 mt-3 dark:focus:ring-red-500'
            >
            Release Fund
            </button>
          </div>

         
          <div className='text-center pr-4'>
            <button
              type='button'
              className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 text-gray-500 hover:text-gray-700'
              aria-label='More options'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6 10C6 11.1 5.1 12 4 12C2.9 12 2 11.1 2 10C2 8.9 2.9 8 4 8C5.1 8 6 8.9 6 10ZM10 12C11.1 12 12 11.1 12 10C12 8.9 11.1 8 10 8C8.9 8 8 8.9 8 10C8 11.1 8.9 12 10 12ZM16 10C16 11.1 15.1 12 14 12C12.9 12 12 11.1 12 10C12 8.9 12.9 8 14 8C15.1 8 16 8.9 16 10Z' />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className=' border-opacity-45 m-3'>
        <div className='border-solid border-2 border-gray-40 rounded-2xl h-20 grid grid-cols-7 items-center'>
          <div className='text-center text-neutral-500'>
            Name
            <div className='mt-1 text-slate-900 font-semibold'>John Smith</div>
          </div>
          <div className='text-center text-neutral-500'>
            Email Address
            <div className='mt-1 text-slate-900 font-semibold'>johnSmith@gmail.com</div>
          </div>
          <div className='text-center text-neutral-500'>
            Payment Method
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>Payoneer
            </div>
          </div>
          <div className='text-center text-neutral-500'>
            Account
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>$40.10
            </div>
          </div>
          <div className='text-center text-neutral-500'>
            USDT
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>27.6 USDT
            </div>
          </div>

         
          <div className='text-center pr-4'>
            <button
              type='button'
              onClick={handleEditClick}
              className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-3 dark:bg-red-500 dark:hover:bg-red-700 mt-3 dark:focus:ring-red-500'
            >
            Release Fund
            </button>
          </div>

          
          <div className='text-center pr-4'>
            <button
              type='button'
              className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 text-gray-500 hover:text-gray-700'
              aria-label='More options'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6 10C6 11.1 5.1 12 4 12C2.9 12 2 11.1 2 10C2 8.9 2.9 8 4 8C5.1 8 6 8.9 6 10ZM10 12C11.1 12 12 11.1 12 10C12 8.9 11.1 8 10 8C8.9 8 8 8.9 8 10C8 11.1 8.9 12 10 12ZM16 10C16 11.1 15.1 12 14 12C12.9 12 12 11.1 12 10C12 8.9 12.9 8 14 8C15.1 8 16 8.9 16 10Z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className=' border-opacity-45 m-3'>
        <div className='border-solid border-2 border-gray-40 rounded-2xl h-20 grid grid-cols-7 items-center'>
          <div className='text-center text-neutral-500'>
            Name
            <div className='mt-1 text-slate-900 font-semibold'>John Smith</div>
          </div>
          <div className='text-center text-neutral-500'>
            Email Address
            <div className='mt-1 text-slate-900 font-semibold'>johnSmith@gmail.com</div>
          </div>
          <div className='text-center text-neutral-500'>
            Payment Method
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>Payoneer
            </div>
          </div>
          <div className='text-center text-neutral-500'>
            Account
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>$40.10
            </div>
          </div>
          <div className='text-center text-neutral-500'>
            USDT
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>27.6 USDT
            </div>
          </div>

         
          <div className='text-center pr-4'>
            <button
              type='button'
              onClick={handleEditClick}
              className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-3 dark:bg-red-500 dark:hover:bg-red-700 mt-3 dark:focus:ring-red-500'
            >
            Release Fund
            </button>
          </div>

        
          <div className='text-center pr-4'>
            <button
              type='button'
              className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 text-gray-500 hover:text-gray-700'
              aria-label='More options'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6 10C6 11.1 5.1 12 4 12C2.9 12 2 11.1 2 10C2 8.9 2.9 8 4 8C5.1 8 6 8.9 6 10ZM10 12C11.1 12 12 11.1 12 10C12 8.9 11.1 8 10 8C8.9 8 8 8.9 8 10C8 11.1 8.9 12 10 12ZM16 10C16 11.1 15.1 12 14 12C12.9 12 12 11.1 12 10C12 8.9 12.9 8 14 8C15.1 8 16 8.9 16 10Z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className=' border-opacity-45 m-3'>
        <div className='border-solid border-2 border-gray-40 rounded-2xl h-20 grid grid-cols-7 items-center'>
          <div className='text-center text-neutral-500'>
            Name
            <div className='mt-1 text-slate-900 font-semibold'>John Smith</div>
          </div>
          <div className='text-center text-neutral-500'>
            Email Address
            <div className='mt-1 text-slate-900 font-semibold'>johnSmith@gmail.com</div>
          </div>
          <div className='text-center text-neutral-500'>
            Payment Method
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>Payoneer
            </div>
          </div>
          <div className='text-center text-neutral-500'>
            Account
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>$40.10
            </div>
          </div>
          <div className='text-center text-neutral-500'>
            USDT
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>27.6 USDT
            </div>
          </div>

         
          <div className='text-center pr-4'>
            <button
              type='button'
              onClick={handleEditClick}
              className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-3 dark:bg-red-500 dark:hover:bg-red-700 mt-3 dark:focus:ring-red-500'
            >
            Release Fund
            </button>
          </div>

         
          <div className='text-center pr-4'>
            <button
              type='button'
              className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 text-gray-500 hover:text-gray-700'
              aria-label='More options'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6 10C6 11.1 5.1 12 4 12C2.9 12 2 11.1 2 10C2 8.9 2.9 8 4 8C5.1 8 6 8.9 6 10ZM10 12C11.1 12 12 11.1 12 10C12 8.9 11.1 8 10 8C8.9 8 8 8.9 8 10C8 11.1 8.9 12 10 12ZM16 10C16 11.1 15.1 12 14 12C12.9 12 12 11.1 12 10C12 8.9 12.9 8 14 8C15.1 8 16 8.9 16 10Z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className=' border-opacity-45 m-3'>
        <div className='border-solid border-2 border-gray-40 rounded-2xl h-20 grid grid-cols-7 items-center'>
          <div className='text-center text-neutral-500'>
            Name
            <div className='mt-1 text-slate-900 font-semibold'>John Smith</div>
          </div>
          <div className='text-center text-neutral-500'>
            Email Address
            <div className='mt-1 text-slate-900 font-semibold'>johnSmith@gmail.com</div>
          </div>
          <div className='text-center text-neutral-500'>
            Payment Method
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>Payoneer
            </div>
          </div>
          <div className='text-center text-neutral-500'>
            Account
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>$40.10
            </div>
          </div>
          <div className='text-center text-neutral-500'>
            USDT
            <div className='mt-1 text-slate-900 font-semibold'>
              <label className='text-red-400'>|</label>27.6 USDT
            </div>
          </div>

         
          <div className='text-center pr-4'>
            <button
              type='button'
              onClick={handleEditClick}
              className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2.5 mb-3 dark:bg-red-500 dark:hover:bg-red-700 mt-3 dark:focus:ring-red-500'
            >
              Edit Details
            </button>
          </div>

         
          <div className='text-center pr-4'>
            <button
              type='button'
              className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 text-gray-500 hover:text-gray-700'
              aria-label='More options'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M6 10C6 11.1 5.1 12 4 12C2.9 12 2 11.1 2 10C2 8.9 2.9 8 4 8C5.1 8 6 8.9 6 10ZM10 12C11.1 12 12 11.1 12 10C12 8.9 11.1 8 10 8C8.9 8 8 8.9 8 10C8 11.1 8.9 12 10 12ZM16 10C16 11.1 15.1 12 14 12C12.9 12 12 11.1 12 10C12 8.9 12.9 8 14 8C15.1 8 16 8.9 16 10Z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

      



      {modalOpen && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='relative bg-white p-6 rounded-lg shadow-lg w-5/12'>
           
            <button
              className='absolute top-2 right-2 text-gray-700 hover:text-gray-900'
              onClick={closeModal}
            >
              <AiOutlineClose size={24} />
            </button>

            <h2 className='text-xl font-semibold mb-4'>Edit Coin Details</h2>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                  Email Address
                </label>
                <input
                  type='text'
                  className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder='Enter email'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                  USDT Value
                </label>
                <input
                  type='text'
                  className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder='Enter USDT value'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                  Order Limit
                </label>
                <div className='flex flex-row space-x-4'>
                  <input
                    type='text'
                    className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='Enter Min order'
                  />
                  <input
                    type='text'
                    className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='Enter Max order'
                  />
                </div>
              </div>
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
