import React from 'react';
import Microsoft from '../assets/Microsoft.png';
import FaceBook from '../assets/FaceBook.png';
import Ems from '../assets/Ems.png';
import MovieTicketing from '../assets/MovieTicketing.png';
import ResumeBuilder from '../assets/ResumeBuilder.png';
import DailyNotes from '../assets/DailyNotes.png';

function Projects() {
    const Portfolios = [
        {
            id: 1,
            src: Microsoft
        },
        {
            id: 2,
            src: DailyNotes
        },
        {
            id: 3,
            src: Ems
        },
        {
            id: 4,
            src: MovieTicketing
        },
        {
            id: 5,
            src: FaceBook
        },
        {
            id: 6,
            src: ResumeBuilder
        },
    ]
    return (
        <>
        {/* ---------------------------Heading ,Paragraph and Containers----------------------------- */}
            <div name="Projects" className="Projects w-[100%] md:h-[100%] text-white">
                <div className='flex flex-col mx-auto max-w-full-lg justify-center w-full h-[100%]'>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-4xl font-bold  py-4'>Projects</h2>
                        <p className='text-2xl pb-5'>Check Out Some Of My Projects</p>
                    </div>
                    {/* ------------------Grid Layout And Images and Buttons Design------------------- */}
                    <div className='grid  lg:grid-cols-3 sm:grid-cols-2 gap-8 px-12 sm:px-16'>
                        {Portfolios.map(({id,src})=>(
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-300 hover:scale-105' />
                            <div className='flex justify-center items-center'>
                                <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105 font-semibold text-lg'>Code</button>
                                <button className='w-1/2 px-5 py-3 m-4 duration-200 hover:scale-105 font-semibold text-lg'>View</button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;