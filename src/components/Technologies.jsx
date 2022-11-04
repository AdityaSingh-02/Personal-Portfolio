import React from 'react';
import HtmlImage from '../assets/html.png';
import CSS from '../assets/CSS.png';
import ExpressJs from '../assets/ExpressJs.png';
import java from '../assets/java.png';
import docker from '../assets/docker.png';
import Kubernetes from '../assets/Kubernetes.png';
import js from '../assets/js.png';
import Mongodb from '../assets/Mongodb.png';
import NodeJs from '../assets/NodeJs.png';
import reactLogo from '../assets/logo192.png';
import TailwindLogo from '../assets/TailwindLogo.png';


function Technologies() {
    const techStacks = [
        {
            id: 1,
            logo: HtmlImage,
            title: 'HTML',
            Style: 'text-orange-700 shadow-orange-700'
        },
        {
            id: 2,
            logo: CSS,
            title: 'CSS',
            Style: 'text-blue-700 shadow-blue-700'
        },
        {
            id: 3,
            logo: js,
            title: 'JavaScript',
            Style: 'text-yellow-500 shadow-yellow-500'
        },
        {
            id: 4,
            logo: reactLogo,
            title: 'React',
            Style: 'text-blue-500 shadow-blue-500'
        },
        {
            id: 5,
            logo: ExpressJs,
            title: 'ExpressJs',
            Style: 'text-gray-700 shadow-gray-700'
        },
        {
            id: 6,
            logo: NodeJs,
            title: 'NodeJs',
            Style: 'text-green-700 shadow-green-700'
        },
        {
            id: 7,
            logo: TailwindLogo,
            title: 'Tailwind',
            Style: 'text-blue-400 shadow-blue-400'
        },
        {
            id: 8,
            logo: Mongodb,
            title: 'Mongodb',
            Style: 'text-green-700 shadow-green-700'
        },
        {
            id: 9,
            logo: java,
            title: 'Java',
            Style: 'text-orange-700 shadow-orange-700'
        },
        {
            id: 10,
            logo: docker,
            title: 'Docker',
            Style: 'text-blue-600 shadow-blue-600'
        },
        {
            id: 11,
            logo: Kubernetes,
            title: 'Kubernetes',
            Style: 'text-blue-700 shadow-blue-700'
        },
    ]

    return (
        <>
            {/* -------------- Code for the TechStacks------------------- */}
            <div id='Experiences' className='flex flex-col pt-10 justify-center items-center md:h-screen   sm:h-[190vh] w-[100%] bg-gradient-to-b from-black to-gray-800'>
                <div className='pb-7 text-white'>
                    <h2 className='text-3xl font-bold border-0 border-b-4 border-gray-500'>Tech Stacks That I Know</h2>
                </div>
                {/* -------------------Tech Box Of Content--------------------------------- */}
                <div className='TechBox w-[80%] h-[80%] rounded-md'>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-9 px-7 '>
                        {
                            techStacks.map(({ id, logo, title, Style }) => (
                                <div key={id} className={`${'flex flex-col justify-center items-center shadow-md px-10 rounded-lg '}+" "+${Style}`}>
                                    <img src={logo} alt="" className='duration-300 hover:scale-110'/>
                                    <div>
                                        <p className='text-xl mt-6 font-semibold'>{title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technologies;