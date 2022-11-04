import React from 'react'

function Contact() {
  return (
    <>
    {/* --------------------------------------Contact me Main Container----------------------------------------- */}
      <div className='ContactMe h-[100vh] text-white w-screen mx-auto py-10 flex flex-col justify-center items-center '>
        <div>
          <h1 className='font-bold text-3xl py-5 text-gray-700 '>CONTACT ME</h1>
        </div>
        {/* --------------------------------------------Below Heading Provides Responsive Width and height------------------------------- */}
        <div className='FormContainer w-[90%] sm:w-[60%] h-[80%] rounded-lg shadow-lg shadow-gray-700 py-10 px-10'>
          <div className='py-20'>
            {/*------Form Control Provides Flex Column Property to Form and Text Adjustments are done inside the particular container itself---- */}
            <form action="" className='flex flex-col w-[70%] mx-auto'>
              {/* -----------------------------------Name input----------------------------------------- */}
              <label htmlFor="Name" className='text-xs pb-2'>Enter Your Name</label>
              <input type="text" placeholder='Name' id='Name'  required className='mb-7 rounded-lg text-black font-semibold px-3 h-10' />
              {/* -----------------------------------Email Input ----------------------------------------- */}
              <label htmlFor="Name" className='text-xs pb-2'>Email</label>
              <input type="email" placeholder='Email' required id='Name' className='mb-7 rounded-lg text-black font-semibold px-3 h-10' />
              {/* -------------------------------------Phone Number */}
              <label htmlFor="Name" className='text-xs pb-2'>Phone Number(*Optional)</label>
              <input type="number" placeholder='Number' id='Name' className='mb-7 rounded-lg text-black font-semibold px-3 h-10' />
              {/* -------------------------------Submit------------------- */}
              <button className='px-5 py-2 rounded-md border border-1 border-gray-600 w-32 mx-auto duration-300 hover:scale-105'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;