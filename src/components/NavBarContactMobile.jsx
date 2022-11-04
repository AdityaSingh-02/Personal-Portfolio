import React from 'react';
import { Link } from 'react-router-dom'

function NavBarContactMobile(props) {
  return (
    <>
        <li onClick={()=>(props.updtNav(!props.setNav))} className='py-4 cursor-pointer capitalize font-medium text-4xl text-gray-400'><Link to={'/Contact'}>Contact Me</Link></li>
    </>
  )
}

export default NavBarContactMobile