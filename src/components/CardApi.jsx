'use client'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TiArrowForwardOutline } from "react-icons/ti";

const CardApi = () => {
  return (
    <motion.div  initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} className='flex flex-col w-full h-screen justify-center items-center px-28
         gap-10 bg-black text-white'>
            <Image src='https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/429764901_717305177220664_5934272833078796478_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEFxev-Ypqy8uzIYmpw-zHHTejU3FXAMKBN6NTcVcAwoIp4ellGMrzCqNN1CelRIqxcMY30fdjwpFH2zgzXLKtl&_nc_ohc=86W5PO3ClucAX8wFVtK&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfCQg3MxKF6V4j4aZAyVHjxPcuYmUrJNmi-HMiUpH4awew&oe=65DF1077' width={300} height={300} alt="Api" className="rounded-xl" />
          
            <p>Proyecto Api</p>
            <p className='font-mono'>
            Este proyecto es un Dashboard de Clima que te permite obtener información meteorológica actualizada para diferentes ubicaciones. Está construido utilizando JavaScript, CSS y HTML para el frontend y Node.js para el backend.
            </p>
            <div className=' w-full flex gap-5 justify-center  bg-pink-300 p-6  hover:bg-pink-700 transition-all '>
                <Link href='https://franciwis.github.io/Dashboard/'><TiArrowForwardOutline  fontSize={30} color='black'/></Link>
              
                
            </div>
        </motion.div>
  )
}

export default CardApi