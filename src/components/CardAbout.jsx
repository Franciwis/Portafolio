'use client'

import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";


const CardAbout = () => {
  return (
    <div className='bg-black'>
    <motion.div  initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} className='flex flex-col w-full h-screen justify-center items-center px-28
         gap-10 bg-black text-white'>
            <Image src='https://img.freepik.com/vector-premium/mujer-feliz-sonriendo_478440-350.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1705276800&semt=ais' width={300} height={300} alt="Francis" className="rounded-xl" />
            <p className='text-lg '>
           Soy Francis Yañez
            </p>
            <p className='text-sm'>
            y estoy emocionada de tener la oportunidad de compartir un poco sobre mí como profesional he estado inmersa en este campo durante 7 meses y cada proyecto me brinda la oportunidad de fusionar creatividad con habilidades técnicas para construir soluciones innovadoras. 

Mi experiencia abarca lenguaje de programación como HTML 5, JavaScript y CSS, diferentes framework como Node js, React js, . Estoy comprometida con el aprendizaje continuo y siempre busco estar al tanto de las últimas tendencias y avances en la industria.



 Estoy emocionada de aprender y explorar oportunidades de colaboración en el futuro.

¡Muchas gracias!  
            </p>
            <p>Algunas de mis Redes Sociales</p>
            <div className=' w-full flex gap-5 justify-center  bg-pink-300 p-6  hover:bg-pink-700 transition-all'>
                <Link href='https://github.com/'><FaGithub fontSize={30} color='black'/></Link>
                <Link href='https://www.instagram.com/'><FaInstagram fontSize={30} color='black'/></Link>
                <Link href='https://www.facebook.com/'><FaFacebook fontSize={30} color='black'/></Link>
                
            </div>
        </motion.div>
        </div>
  )
}

export default CardAbout