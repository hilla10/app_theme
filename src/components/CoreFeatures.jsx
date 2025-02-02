import React from 'react';
import phone from '../assets/phone.jpg';
import { FaCheck } from 'react-icons/fa6';
import { coreFeatures } from '../utils';

const CoreFeatures = () => {
  return (
    <section className='feature-bg w-full h-auto'>
      <div className=' container grid sm:grid-cols-2 grid-cols-1 text-center justify-between items-start p-10'>
        <div className='w-[250px]'>
          <img src={phone} alt='phone' className='w-full sm:block hidden' />
        </div>
        <div className='flex  flex-col  items-center pt-10'>
          <h2 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl pb-5'>
            Core Features
          </h2>
          <ul>
            {coreFeatures.map(({ id, text, icon: Icon }) => (
              <li key={id} className='text-white flex items-center  gap-3 py-2'>
                <Icon />
                <p className='text-lg font-medium text-left'>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
