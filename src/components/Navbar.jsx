import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import NavbarContactLink from './NavbarContactLink';
import NavBarContactMobile from './NavBarContactMobile';
// import NavMobileComponents from './NavMobileComponents';

function Navbar() {

  const [navMenu, changeMenu] = useState(false);

  const navigations = [
    {
      id: 1,
      navigate: "About Me",
      link: 'About'
    },
    {
      id: 2,
      navigate: "Projects",
      link: 'Projects'
    },
    {
      id: 3,
      navigate: "Experiences",
      link: 'Experiences'
    },
  ];

  return (
    <>
      <div className="Navbar fixed flex justify-between items-center h-20 w-[100%] px-9 z-10 text-white ">
        <div className="heading text-4xl font-signature">Aditya</div>
        <ul className='hidden md:flex'>
          {navigations.map(({ id, navigate, link }) => (
            <li key={id} className="px-5 text-gray-400 font-semibold cursor-pointer capitalize hover:text-red-500 duration-500" ><Link smooth={true} to={link}>{navigate}</Link></li>
          ))}
          <NavbarContactLink />
        </ul>
        {/* -----------------------Mobile View-----------------------------------------------*/}
        <div className="hamburger text-2xl z-10 text-gray-400 md:hidden" onClick={() => { changeMenu(!navMenu) }}>
          {navMenu ? <FaTimes /> : <FaBars />}
        </div>
        {navMenu && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
            {navigations.map(({ id, navigate, link }) => (
              <li key={id} className='py-4 cursor-pointer capitalize font-medium text-4xl text-gray-400'><Link onClick={() => (changeMenu(!navMenu))} smooth={true} to={link}>{navigate}</Link></li>
            ))}
            <NavBarContactMobile setNav={navMenu} updtNav={changeMenu} />
          </ul>
        )}
      </div>
    </>
  )
}

export default Navbar;