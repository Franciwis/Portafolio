'use client'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TiArrowForwardOutline } from "react-icons/ti";

const CardLanding = () => {
  return (
    <motion.div  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className='flex flex-col w-full h-screen justify-center items-center px-28
     gap-10 bg-black text-white'>
        <Image src='https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/429674490_717305257220656_6348208207622578820_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeG96FTp5m59joHpAVXa2MMLhCG48Q581qGEIbjxDnzWoZ3op4oOAprPIHn0zuZmKAs0MD3t3PFtQDv3d-0y9Zrr&_nc_ohc=FbL77eCbBVMAX8xIja3&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfAvN_mJk4uLazO9kEk3Y2JFGAHofClEfBqPvhlYl6RVig&oe=65DF62ED' width={300} height={300} alt="Landing" className="rounded-xl" />
      
        <p>Proyecto Landing Page</p>
        <p className='font-mono'>
        ¡Bienvenido/a al repositorio de la landing page de zapatos ergonómicos de bebé! Este proyecto tiene como objetivo presentar una página web atractiva y funcional para promover y vender zapatos ergonómicos diseñados específicamente para bebés.
        </p>
        <div className=' w-full flex gap-5 justify-center  bg-pink-300 p-6 hover:bg-pink-700 transition-all'>
            <Link href='https://franciwis.github.io/proyecto-01-Landing-Page/'><TiArrowForwardOutline  fontSize={30} color='black'/></Link>
          
            
        </div>
    </motion.div>
  )
}

export default CardLanding