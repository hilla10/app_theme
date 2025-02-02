import React from 'react';
import { services } from '../utils';

const Services = () => {
  return (
    <section className='container py-5'>
      <h1 className='text-gray-900 lg:text-4xl md:text-3xl text-2xl font-medium py-5 font-bold'>
        Services
      </h1>
      <h2 className='text-3xl font-bold text-center pb-6'>
        <span className='text-green-500'>See</span> What We Offer
      </h2>

      {services.map(({ id, title, text, bgColor, textColor }) => (
        <div key={id} className={`${bgColor} p-5 text-center text-white`}>
          <h3 className={`${textColor} pb-8 text-2xl font-bold`}>{title}</h3>
          <p className={`${textColor} pb-4 text-[17px]`}>{text}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
