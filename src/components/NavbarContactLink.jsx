import React from 'react';
import { Link } from 'react-router-dom'

function NavbarContactLink() {
  return (
    <>
          <li className="px-5 text-gray-400 font-semibold cursor-pointer capitalize hover:text-red-500 duration-500"><Link to={'/Contact'}>Contact me</Link></li>
    </>
  )
}

export default NavbarContactLink;