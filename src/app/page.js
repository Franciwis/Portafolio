import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2" >
        
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full justify-items-center items-center ">
      <Image src='https://th.bing.com/th/id/OIP.YZKFQa7tfP68Gzejkz01iwHaJ4?rs=1&pid=ImgDetMain' width={300} height={300} alt="mom" className="rounded-xl"/>
      <div className="flex flex-col gap-5">
        <p>Se entiende por texto una composición ordenada de signos inscritos en un sistema de escritura, cuya lectura permite recobrar un sentido específico referido por el emisor. La palabra texto proviene del latín textus, que significa “tejido” o “entrelazado”, de modo que en el origen mismo de la idea del texto se encuentra su capacidad para contener ideas en un hilo o una secuencia de caracteres.

De modo que un texto viene a ser una cantidad de enunciados hilados entre sí y ordenados en base a un argumento (explicativo, narrativo, descriptivo, etc.), empleando para ello un sistema concreto de signos, que llamaremos lenguaje, y dentro de dicho sistema un código concreto que llamaremos lengua.

De ese modo, todo texto contiene una serie de mensajes cifrados que el lector debe poder recuperar, y que puede ser de diversa índole, conforme a los cometidos expresivos de quien lo redactó: son textos las instrucciones de uso de una lavadora, pero también un poema de amor, las noticias del diario o un grafiti de protesta en una pared en la calle.</p>
        <button className="p-5 bg-pink-500 rounded-xl hover:bg-pink-700 transition-all w-full xl:w-1/6 px-10" >descargar CV</button>
      </div>
      </div>
      
    </div>

  );
}

