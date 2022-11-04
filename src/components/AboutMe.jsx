import React from 'react';
import myImage from '../assets/bWjMbx6FQXuDmF2PJbEj_dummy.png';


function AboutMe() {
    return (
        <>
            <div name="About" >
                <div name="About" className="AboutMe text-white">
                    <div className='Filter hidden md:flex justify-center items-center'>
                        <div className='flex px-7 w-[85%]'>
                            <div className='w-[70%]'>
                                <h1 className='font-bold text-5xl py-5' id='about'>About Me</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum deserunt magni, minus nemo ex praesentium a accusantium nisi placeat! Dignissimos cupiditate quis libero, itaque nulla illum fuga tempora. Voluptatem cupiditate consectetur mollitia adipisci ex pariatur sed dolor, in, debitis assumenda laudantium fugiat itaque, veritatis est aperiam atque! Recusandae, facilis.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum deserunt magni, minus nemo ex praesentium a accusantium nisi placeat! Dignissimos cupiditate quis libero, itaque nulla illum fuga tempora. Voluptatem cupiditate consectetur mollitia adipisci ex pariatur sed dolor, in, debitis assumenda laudantium fugiat itaque, veritatis est aperiam atque! Recusandae, facilis.</p>
                            </div>
                            <div>
                                <img src={myImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* -----------------Mobile View Changes ---------------------- */}
                <div className='MobileAbout flex justify-center items-center w-screen h-screen bg-gradient-to-b from-gray-800 to-black text-white md:hidden'>
                    <div className='px-8'>
                        <h1 className='font-bold text-5xl pb-11' id='about'>About Me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum deserunt magni, minus nemo ex praesentium a accusantium nisi placeat! Dignissimos cupiditate quis libero, itaque nulla illum fuga tempora. Voluptatem cupiditate consectetur mollitia adipisci ex pariatur sed dolor, in, debitis assumenda laudantium fugiat itaque, veritatis est aperiam atque! Recusandae, facilis.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;