import React from 'react';

const Contact = () => {
  return (
    <section className='container'>
      <h1 className='text-gray-900 lg:text-4xl md:text-3xl text-2xl font-medium py-5 font-bold'>
        Contact
      </h1>
      <h2 className='text-3xl font-bold text-center pb-6'>
        <span className='text-green-500'>Get</span> In Touch
      </h2>
      <p className='text-center pb-4 font-bold tracking-wide'>
        Please use this form to contact us
      </p>

      <form className='bg-gray-700 mb-10 p-8 w-[500px] md:w-[800px] mx-auto'>
        <div className='pb-3 flex flex-col justify-center items-center'>
          <label className='text-white text-[18px] font-medium block pb-4'>
            Name
          </label>
          <input
            type='text'
            className='w-full border-2 border-gray-200 p-2 rounded-md outline-none'
          />
        </div>
        <div className='pb-3  flex flex-col justify-center items-center'>
          <label className='text-white text-[18px] font-medium block pb-4'>
            Email
          </label>
          <input
            type='email'
            className='w-full border-2 border-gray-200 p-2 rounded-md outline-none'
          />
        </div>

        <div className='pb-3  flex flex-col justify-center items-center'>
          <label className='text-white text-[18px] font-medium block pb-4'>
            Message
          </label>
          <textarea className='w-full border-2 border-gray-200 p-2 rounded-md outline-none h-30'></textarea>
        </div>
        <button className='bg-white text-gray-800 w-full py-3 font-bold text-lg rounded-md hover:bg-gray-800 hover:text-white cursor-pointer transition-all duration-500'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
