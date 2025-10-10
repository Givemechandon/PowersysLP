import React, { useState, useEffect } from 'react';

// Função para o contador de tempo regressivo (20 minutos com horas, minutos e segundos)
const useCountdown = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        setTime(initialTime); 
      } else {
        setTime((prevTime) => prevTime - 1); 
      }
    }, 1000); 

    return () => clearInterval(interval); 
  }, [time, initialTime]);

  const hours = Math.floor(time / 3600); 
  const minutes = Math.floor((time % 3600) / 60); 
  const seconds = time % 60; 
  return { hours, minutes, seconds };
};


const PromotionBar: React.FC = () => {
  const { hours, minutes, seconds } = useCountdown(20 * 60); 

  return (
    <div className="bg-blue-900 text-white w-full py-2 flex justify-center items-center px-4">
      <div className="text-lg font-bold animate-pulse text-yellow-300" style={{ animation: 'blink 1s linear infinite alternate' }}>
        Entre em contato conosco e faça seu orçamento agora com os melhores preços!
      </div>

      <div className="flex items-center ml-4">
        <div
          className="text-lg font-bold p-2 bg-yellow-300 text-black rounded-md border-4 shadow-lg"
          style={{
            animation: 'grow 1s ease-in-out infinite',
            width: '120px', 
            textAlign: 'center',
            fontSize: '18px',
          }}
        >
          {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    </div>
  );
};

export default PromotionBar;
