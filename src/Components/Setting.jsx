import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; 

export const Setting = () => {
  const [modalOpen, setModalOpen] = useState(false); 
  const [transactionLimit, setTransactionLimit] = useState('');
  const [transactionsPerDay, setTransactionsPerDay] = useState('');

  const handleEditClick = () => {
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    // Handle saving logic here
    console.log('Transaction Limit:', transactionLimit);
    console.log('Transactions Per Day:', transactionsPerDay);
    closeModal(); // Close modal after saving
  };

  return (
    <div className='container'>
      <div className='text-2xl font-bold mt-24'>Setting</div>
      <div className='row mt-4 flex justify-between border'>
        <div className='input-group mb-4 flex-1 mr-2'>
          <label className='block mb-2'>Transaction Limit</label>
          <input 
            type='number' 
            value={transactionLimit} 
            onChange={(e) => setTransactionLimit(e.target.value)} 
            className='border rounded p-2 w-full'
            placeholder='Enter transaction limit' 
          />
        </div>
        <div className='input-group mb-4 flex-1 ml-2'>
          <label className='block mb-2'>Transactions Per Day</label>
          <input 
            type='number' 
            value={transactionsPerDay} 
            onChange={(e) => setTransactionsPerDay(e.target.value)} 
            className='border rounded p-2 w-full'
            placeholder='Enter transactions per day' 
          />
        </div>
      </div>
      <button 
        onClick={handleSave} 
        className='bg-red-500 w-32 text-white rounded-lg p-2 mt-4 float-end'
      >
        Save Change
      </button>
    </div>
  );
};
