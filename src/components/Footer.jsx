import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaMap } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900'>
      <div className='container grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10 py-10 text-white'>
        <div>
          <h3 className='text-2xl pb-5 font-bold'>Contact Us</h3>
          <div className='flex justify-start items-center gap-3 mb-2'>
            <FaPhoneAlt size={18} />
            <p className='text-[17px]'>(251)999-9999</p>
          </div>

          <div className='flex justify-start items-center gap-3 mb-2'>
            <FaEnvelope size={18} />
            <p className='text-[17px]'> Support@apptheme.text</p>
          </div>

          <div className='flex justify-start items-center gap-3 mb-2'>
            <FaMap size={18} />
            <p className='text-[17px]'>400 Main St, boston MA</p>
          </div>
        </div>

        <div>
          <h3 className='text-2xl pb-5 font-bold'>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            tempora!
          </p>
        </div>
        <div>
          <h3 className='text-2xl pb-5 font-bold'>Newsletter</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className='flex  items-center mt-3 '>
            <input
              type='email'
              placeholder='Enter Email'
              className='border-2 border-gray-500 rounded-l-[5px] p-2  outline-none'
            />
            <button
              type='submit'
              className='text-white bg-gray-800 p-2 border-2 border-gray-500 border-l-gray-800 rounded-r-[5px] cursor-pointer font-bold hover:opacity-60'>
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className='bg-green-500 text-center p-8'>
        <p className='text-white font-bold text-lg'>
          Copyright © {new Date().getFullYear()} | AppTheme
        </p>
      </div>
    </footer>
  );
};

export default Footer;
