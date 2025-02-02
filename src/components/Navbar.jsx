import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLink } from '../utils';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const width = window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(width);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const screenSize = () => {
      setWindowWidth(width);

      if (width > 768) {
        setMobileMenu(false);
      }
    };

    window.addEventListener('resize', screenSize);

    return () => {
      window.removeEventListener('resize', screenSize);
    };
  }, [windowWidth]);

  return (
    <nav className='  bg-white py-3 border-b-1 border-b-gray-500'>
      <div className='container flex justify-between items-center'>
        <h1 className='font-bold text-4xl'>
          <span className='text-green-500'>App</span>Theme.
        </h1>

        <ul
          className={`fixed z-10 md:static md:bg-transparent right-0 top-0 w-80 h-screen md:h-auto transition-all duration-500 ease-in-out md:flex bg-white items-center justify-center gap-10 text-center  ${
            mobileMenu ? 'translate-x-0 ' : 'translate-x-full md:translate-x-0'
          }`}>
          {navLink.map(({ id, text, url, linkClass }) => (
            <li
              key={id}
              className={`${
                window.innerWidth > 768
                  ? ''
                  : mobileMenu
                  ? linkClass
                    ? 'pt-20'
                    : 'pt-5 text-xl'
                  : linkClass
                  ? 'pt-20'
                  : 'pt-5 text-xl'
              }`}>
              <NavLink
                onClick={() => setMobileMenu(false)}
                to={url}
                className={({ isActive }) =>
                  `hover:border-b-3 hover:border-green-500 hover:text-green-500 t pb-1 tex-2xl font-medium ${
                    isActive
                      ? '!text-green-500 border-b-3 border-green-500'
                      : 'text-gray-500'
                  }`
                }>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className='fixed top-4 right-10 z-10 cursor-pointer md:hidden'
          onClick={() => setMobileMenu((prev) => !prev)}>
          {mobileMenu ? (
            <MdOutlineRestaurantMenu size={30} color='#333' />
          ) : (
            <FiMenu size={30} color='#333' />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
