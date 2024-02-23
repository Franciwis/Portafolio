'use client'

import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";


const CardAbout = () => {
  return (
    <motion.div  initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} className='flex flex-col w-full h-screen justify-center items-center px-28
         gap-10'>
            <Image src='https://th.bing.com/th/id/OIP.YZKFQa7tfP68Gzejkz01iwHaJ4?rs=1&pid=ImgDetMain' width={300} height={300} alt="mom" className="rounded-xl" />
            <p>Se entiende por texto una composición ordenada de signos inscritos en un sistema de escritura, cuya lectura permite recobrar un sentido específico referido por el emisor. La palabra texto proviene del latín textus, que significa “tejido” o “entrelazado”, de modo que en el origen mismo de la idea del texto se encuentra su capacidad para contener ideas en un hilo o una secuencia de caracteres.

                De modo que un texto viene a ser una cantidad de enunciados hilados entre sí y ordenados en base a un argumento (explicativo, narrativo, descriptivo, etc.), empleando para ello un sistema concreto de signos, que llamaremos lenguaje, y dentro de dicho sistema un código concreto que llamaremos lengua.

                De ese modo, todo texto contiene una serie de mensajes cifrados que el lector debe poder recuperar, y que puede ser de diversa índole, conforme a los cometidos expresivos de quien lo redactó: son textos las instrucciones de uso de una lavadora, pero también un poema de amor, las noticias del diario o un grafiti de protesta en una pared en la calle.</p>
            <div className=' w-full flex gap-5 justify-center  bg-pink-300 p-6'>
                <Link href='https://github.com/'><FaGithub fontSize={30} color='pink'/></Link>
                <Link href='https://github.com/'><FaGithub fontSize={30}/></Link>
                <Link href='https://github.com/'><FaGithub fontSize={30}/></Link>
                <Link href='https://github.com/'><FaGithub fontSize={30}/></Link>
            </div>
        </motion.div>
  )
}

export default CardAbout