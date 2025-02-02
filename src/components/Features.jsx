import React from 'react';
import { features } from '../utils';

const Features = () => {
  return (
    <section className=' container bg-white p-10'>
      <h1 className='text-center text-4xl font-bold pb-4'>Core Features</h1>
      <p className='text-center text-[17px] font-medium pb-10'>
        What's Included
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-7 mx-auto'>
        {features.map(({ id, icon: Icon, title, desc }) => (
          <div
            key={id}
            className='flex flex-col justify-center items-center md:w-[250px] text-center '>
            <Icon size={60} color='#56a79a' />
            <h3 className='text-xl font-medium text-center py-3'>{title}</h3>
            <p className='text-[15px] text-gray-500 font-medium text-center '>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
