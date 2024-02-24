'use client'
import Image from 'next/image';
import React from 'react'

import { motion } from 'framer-motion';



const CardProjects = () => {
    
    return (
        <div className=' text-white'>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} className='grid grid-cols-2 w-full h-screen justify-center items-center px-28
         gap-10 bg-black text-white'>
                <div>
                    <Image src='https://okdiario.com/img/2016/05/21/recetas-cocteles-fruta-sin-alcohol.jpg' width={400} height={400} alt="BOTIKA" className="rounded-xl" />
                    <p>La Botika Ecommerce</p>
                   
                </div>
                <div>
                   
                    <p>nombre proyecto</p>
                   
                </div>
                <div>
                  
                    <p>nombre proyecto</p>
                   
                </div>
                <div>
                   
                    <p>nombre proyecto</p>
                   
                </div>
            </motion.div>

        </div>

    )
}

export default CardProjects