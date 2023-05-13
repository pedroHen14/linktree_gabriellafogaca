import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Teste from "./assets/pexels-szabó-viktor-3227984.jpg";
import Teste2 from "./assets/e5e9ddf7-93d9-4712-943f-f270e70d08ad.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="w-full h-screen bg-cover"
      style={{
        backgroundImage: `url(${Teste})`,
      }}
    >
      <div className="rounded-lg p-8 flex flex-col items-center justify-start w-full h-full bg-opacity-20 backdrop-blur-sm drop-shadow-lg">
        <div className="relative flex items-center justify-center">
          <img
            src={Teste2}
            alt=""
            className="h-48 w-48 rounded-full shadow-md"
          />
          <h1 className="absolute -bottom-5 text-5xl">❤</h1>
        </div>
        <div className="w-full h-20  rounded-lg flex items-center justify-center">
          <h1 className="font-medium text-3xl text-white">GF Massoterapia</h1>
        </div>
        <p className="italic my-4 text-slate-300">
          "Todos tem um dom, o meu é cuidar com as mãos"
        </p>
        <div className="w-full flex flex-col justify-center gap-8 items-stretch">
          <a
            href="/"
            className="px-6 py-4 shadow-lg text-white rounded-lg"
            style={{
              backgroundColor: "#60455c",
            }}
          >
            Whatsapp
          </a>
          <a
            href="/"
            className="px-6 py-4 shadow-lg text-white rounded-lg"
            style={{
              backgroundColor: "#60455c",
            }}
          >
            Agenda
          </a>
          <a
            href="/"
            className="px-6 py-4 shadow-lg text-white rounded-lg"
            style={{
              backgroundColor: "#60455c",
            }}
          >
            Instagram
          </a>
          <a
            href="/"
            className="px-6 py-4 shadow-lg text-white rounded-lg"
            style={{
              backgroundColor: "#60455c",
            }}
          >
            Tiktok
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
