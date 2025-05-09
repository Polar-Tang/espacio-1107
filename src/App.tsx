import { Instagram, Facebook, Twitter, CircleSmall } from "lucide-react"
import './index.css'
import { WireDiagram } from "./assets/WireDiagram";
import { WireDiagramUl } from "./assets/WIreDiagramUl";

function App() {

  return (
    <>
      <div className='flex items-center justify-center overflow-hidden h-dvh w-full bg-[url(/background.webp)]  bg-cover bg-norepeat bg-center'
      // style={{background: "url('/background.webp')"}}
      >

        {/* Main content */}
        <div className="z-10 bg-white/40 rounded-lg text-elegantBlack min-h-160 ">
          <div className="grid  grid-cols-[1.4fr_1fr_2fr] h-full min-w-full">
            <div className="text-elegantBlack flex flex-col justify-between min-h-160 ml-10">
              <div >

                <h1 className="font-serif md:text-[74px] tracking-wider mx-6 md:mt-14 leading-[88px] tracking-[0.054em]">
                  ESPACIO
                </h1>
                <div className="mx-6 relative inline-block">
                  <span className="tracking-[0.667em] leading-[88px] text-[74px]">
                    1700
                  </span>
                  <CircleSmall className="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full stroke-3" />
                </div>

                <div className=" uppercase mx-6 tracking-wider  ">
                  <p className='text-[21.4144px] 
  leading-[31px] 
  tracking-[0.052em] 
  uppercase 
  list-none'
                  >GENERANDO CIRCUITOS</p>
                  <p className='text-[21.4144px] 
  leading-[31px] 
  tracking-[-0.007em] 
  uppercase 
  list-none'>GESTIONANDO RECURSOS</p>
                </div>
              </div>

              {/* Social media icons at bottom */}
              <div className="flex space-x-6 mb-12 mx-6">
                <Instagram className="stroke-2 w-8 h-8" />
                <Facebook className="stroke-2 w-8 h-8" />
                <Twitter className="stroke-2 w-8 h-8" />
              </div>
            </div>
            <div className="relative text-elegantBlack h-full flex flex-col items-end w-full">
              <WireDiagram height={440} className="absolute w-full bottom-6" />
            </div>
            {/* Right side - Wire diagram with menu items */}
            <div className="relative z-20 text-elegantBlack flex flex-col h-full w-full ">
              {/* 1280
              <WireDiagramUl height={340} className="absolute w-full top-4 right-33"/> */}
              <MenuItem text="Nosotros" />
              <MenuItem text="Misión" />
              <MenuItem text="Visión" />
              <MenuItem text="MB | Soluciones eléctricas" />
              <MenuItem text="Solid | Automatizaciones" />
              <MenuItem text="Invernaderos Inteligentes" />
              <MenuItem text="Colaboración" />
            </div>
          </div>
        </div>
      </div>
      <div id="Nosotros" className="relative w-full h-dvh  bg-gradient-to-r from-gray-300 to-white flex">
        <div className="w-full p-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-medium text-gray-800 mb-2">NOSOTROS</h2>
              <hr className="border-gray-800 w-full mb-6" />
            </div>

            <div className="w-full md:w-2/3 md:pl-16 flex items-start">
              <h3 className="text-xl text-gray-800">Desarrollos colaborativos</h3>
            </div>
          </div>
        </div>
      </div>
      <div id="Misión" className="relative w-full h-dvh  bg-[url(/background.webp)]  bg-cover bg-norepeat bg-center flex">
        <div className="w-full p-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-medium text-gray-800 mb-2">MISION</h2>
              <hr className="border-gray-800 w-full mb-6" />
            </div>

            <div className="w-full md:w-2/3 md:pl-16 flex items-start">
              <h3 className="text-xl text-white">Desarrollos colaborativos</h3>
            </div>
          </div>
        </div>
      </div>
      <div id ="Visión" className="relative w-full h-dvh  bg-gradient-to-r from-gray-300 to-white  bg-cover bg-norepeat bg-center flex">
        <div className="w-full p-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-medium text-gray-800 mb-2">MISION</h2>
              <hr className="border-gray-800 w-full mb-6" />
            </div>

            <div className="w-full md:w-2/3 md:pl-16 flex items-start">
              <h3 className="text-xl text-black">Bla blablablabal Bla blablablabal Bla blablablabal Bla blablablabal Bla blablablabal Bla blablablabal Bla blablablabal
                Bla blablablabal Bla blablablabal Bla blablablabal Bla blablablabal
                Bla blablablabal Bla blablablabal Bla blablablabal Bla blablablabal Bla blablablabal Bla blablablabal Bla blablablabal
                Bla blablablabal
                Bla blablablabal</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function MenuItem({ text }: { text: string; }) {
  return (
    <div className="relative flex flex-grow items-center"> {/* Full width container */}
      <CircleSmall className=" stroke-3 -ml-2 " />
      <span className='font-medium text-2xl flex-grow tracking-[-0.015em] leading-6'>
        <a href={`#${text}`}>{text}</a>
      </span>
    </div>
  )
}







export default App

// font-family: "YAFdJs2qTWQ 0", _fb_, auto;
// --cAuMqQ: 20px;
// color: rgb(52, 42, 49);
// line-height: 24px;
// letter-spacing: -0.015em;
// --pY_8zA: 0;
// text-transform: none;
// --oJepFA: 0;
// --uYCVzQ: none;
// list-style-type: none;