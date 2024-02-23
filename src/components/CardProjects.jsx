'use client'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";

const CardProjects = () => {
    return (
        <div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} className='grid grid-cols-2 w-full h-screen justify-center items-center px-28
         gap-10 bg-black text-white'>
                <div>
                    <Image src='https://th.bing.com/th/id/OIP.YZKFQa7tfP68Gzejkz01iwHaJ4?rs=1&pid=ImgDetMain' width={300} height={300} alt="mom" className="rounded-xl" />
                    <p>nombre proyecto</p>
                    <div className=' flex gap-5 justify-center rounded-lg  bg-pink-300 p-4  hover:bg-pink-700 transition-all w-full xl:w-1/2 px-5'>
                        <button>presiona</button>
                    </div>
                </div>
                <div>
                    <Image src='https://th.bing.com/th/id/OIP.YZKFQa7tfP68Gzejkz01iwHaJ4?rs=1&pid=ImgDetMain' width={300} height={300} alt="mom" className="rounded-xl" />
                    <p>nombre proyecto</p>
                    <div className=' flex gap-5 justify-center rounded-lg  bg-pink-300 p-4  hover:bg-pink-700 transition-all w-full xl:w-1/2 px-5'>
                        <button>presiona</button>
                    </div>
                </div>
                <div>
                    <Image src='https://th.bing.com/th/id/OIP.YZKFQa7tfP68Gzejkz01iwHaJ4?rs=1&pid=ImgDetMain' width={300} height={300} alt="mom" className="rounded-xl" />
                    <p>nombre proyecto</p>
                    <div className=' flex gap-5 justify-center rounded-lg  bg-pink-300 p-4  hover:bg-pink-700 transition-all w-full xl:w-1/2 px-5'>
                        <button>presiona</button>
                    </div>
                </div>
                <div>
                    <Image src='https://th.bing.com/th/id/OIP.YZKFQa7tfP68Gzejkz01iwHaJ4?rs=1&pid=ImgDetMain' width={300} height={300} alt="mom" className="rounded-xl" />
                    <p>nombre proyecto</p>
                    <div className=' flex gap-5 justify-center rounded-lg  bg-pink-300 p-4  hover:bg-pink-700 transition-all w-full xl:w-1/2 px-5'>
                        <button>presiona</button>
                    </div>
                </div>
            </motion.div>

        </div>

    )
}

export default CardProjects