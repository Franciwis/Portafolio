import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 pr-10 bg-black text-white " >
        
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full justify-items-center items-center ">
      <Image src='https://img.freepik.com/vector-premium/mujer-feliz-sonriendo_478440-350.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1705276800&semt=ais' width={400} height={400} alt="mom" className="rounded-xl"/>
      <div className="flex flex-col gap-5">
        
        <p className="text-lg">
          Bienvenidos!
        </p>
        
        <p className="text-sm">
          


 Soy una desarrolladora web comprometida con la excelencia, la innovación y la entrega de productos de alta calidad que impactan de manera positiva a los usuarios. Estoy emocionada de seguir creciendo profesionalmente en este emocionante campo y contribuir al éxito de proyectos web inspiradores y significativos.
        </p>
        <button className="p-5 bg-pink-500 rounded-xl hover:bg-pink-700 transition-all w-full xl:w-1/6 px-5 text-sm" >descargar CV</button>
      </div>
      </div>
      
    </div>

  );
}

