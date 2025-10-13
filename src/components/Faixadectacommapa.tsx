import React from "react";
import MapaBrasil from "../assets/Mapa-Brasil-PowerSys-1-300x300.png";
import { Button } from "./ui/button"; // Assuming you have a button component
import { FaWhatsapp } from "react-icons/fa";

const Faixadectacommapa: React.FC = () => {
  return (
    <section className="py-12 bg-blue-900 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Atendemos em todo o Brasil.
            </h2>
            <p className="mt-4 text-base text-white font-bold">
              Nossa equipe está pronta para atender suas necessidades em
              qualquer lugar do país.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 "
                style={{
                  animation: "grow 1s ease-in-out infinite",
                }}
              >
                <FaWhatsapp />
                Fale conosco no whatsapp para ser atendido agora mesmo.
              </Button>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-full max-w-sm mx-auto"
              src={MapaBrasil}
              alt="Mapa do Brasil"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faixadectacommapa;
