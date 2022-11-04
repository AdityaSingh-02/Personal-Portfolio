import React from 'react';
import myImage from '../assets/bWjMbx6FQXuDmF2PJbEj_dummy.png';


function Home() {
  return (
    <>
        <div name="Home" className='h-screen w-full  bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg text-white mx-auto h-full px-4 flex flex-col justify-center items-center  md:flex-row'>
                <div className='my-14 md:my-0'>
                    <h1 className='text-4xl sm:text-7xl font-bold my-4'>Hey! I'm Aditya</h1>
                    <p className='text-2xl sm:text-3xl text-gray-400'>I'm a Full Stack Web Developer</p>
                </div>
                <div >
                    <img src={myImage} alt="myImage" className='w-2/3 md:w-full mx-auto'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home