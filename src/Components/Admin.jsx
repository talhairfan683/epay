import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; 

export const Admin = () => {
  const [modalOpen, setModalOpen] = useState(false); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEditClick = () => {
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false); 
    // Optionally reset the input fields
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log({ name, email, password });
    closeModal(); // Close the modal after submission
  };

  return (
    <>
      <p className='text-2xl tracking-wide font-semibold mt-24 ml-10'>Admins</p>

      <div className='m-14 w-5/6 text-center'>
        {/* Admins list */}
        {Array(5).fill(null).map((_, index) => (
          <div className='border-opacity-45 m-3' key={index}>
            <div className='border-solid border-2 border-gray-40 rounded-2xl h-20 grid grid-cols-5 items-center'>
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
                  <label className='text-red-400'>|</label> Payoneer
                </div>
              </div>
              <div className='text-center col-span-2 pr-6 flex justify-end'>
                <button
                  type='button'
                  onClick={handleEditClick}
                  className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 text-gray-500 hover:text-gray-700'
                  aria-label='More options'
                >
                  <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M10 6C11.1 6 12 5.1 12 4C12 2.9 11.1 2 10 2C8.9 2 8 2.9 8 4C8 5.1 8.9 6 10 6ZM10 10C11.1 10 12 9.1 12 8C12 6.9 11.1 6 10 6C8.9 6 8 6.9 8 8C8 9.1 8.9 10 10 10ZM10 16C11.1 16 12 15.1 12 14C12 12.9 11.1 12 10 12C8.9 12 8 12.9 8 14C8 15.1 8.9 16 10 16Z' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        {modalOpen && (
          <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50'>
            <div className='relative bg-white p-6 rounded-lg shadow-lg w-4/12'>
              <button
                className='absolute top-2 right-2 text-gray-700 hover:text-gray-900'
                onClick={closeModal}
              >
                <AiOutlineClose size={24} />
              </button>

              <h2 className='text-xl font-semibold mb-4 text-left'>Add Sub Admin</h2>
              <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2 float-start'>
                    Name
                  </label>
                  <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='Enter name'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2 float-start'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='Enter email'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2 float-start'>
                    Password
                  </label>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder='Enter password'
                    required
                  />
                </div>
                <div className='flex justify-end'>
                  <button
                    type='submit'
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  >
                    Add Sub Admin
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
