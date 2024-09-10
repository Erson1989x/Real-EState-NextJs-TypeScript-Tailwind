
import mobileBG from "../../public/mobileBG.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center p-4">
      <Image src={mobileBG} alt="mobileBG" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 bg-opacity-70 h-32 w-80 flex flex-col items-center justify-center rounded shadow p-4 animate-pulse">
        <h1 className="text-3xl font-bold underline text-slate-700 text-center">Hello World!</h1>
        <p className="text-slate-700 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, fugiat.</p>
      </div>
    </div>
  );
}