import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillTwitterCircle } from 'react-icons/ai';

function SocialConnections() {

    const socials = [
        {
            id: 1,
            child: (
                <>
                    {<FaLinkedin size={30} />}

                </>
            ),
            href: "https://www.linkedin.com/in/aditya-singh-76065422b/",
            styles: "rounded-tl-md rounded-bl-md"
        },
        {
            id: 2,
            child: (
                <>
                    {<FaGithub size={30} />}
                </>
            ),
            href: "https://github.com/AdityaSingh-02",
        },
        {
            id: 3,
            child: (
                <>
                    {<HiOutlineMail size={30} />}
                </>
            ),
            href: "mailto:asaditya2002@gmail.com",

        },
        {
            id: 4,
            child: (
                <>
                    {<AiFillTwitterCircle size={35} />}
                </>
            ),
            href: "https://twitter.com/Go_D_Aditya",
            styles: "rounded-tr-md rounded-br-md"
        }
    ];

    return (
        <>
            <div className='hidden lg:flex flex-col text-white  top-[90%] left-[50%] right-[50%] absolute'>
                <ul className='flex flex-row justify-center '>
                    {socials.map(({ id, child, href, styles }) => (
                        <li key={id} className={`${"flex justify-between items-center w-14 h-14 px-4   shadow-gray-700 hover: duration-500 hover:my-2 hover:shadow-none "} + " " + ${styles}`} >
                            <a href={href} className='flex justify-between items-center w-full'>
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SocialConnections;