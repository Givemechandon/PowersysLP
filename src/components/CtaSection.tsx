import ctaimage from "@/assets/ctaimage.jpg";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá, gostaria de saber mais e contratar os serviços da Powersys!"
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section
      className="relative py-16 px-4 flex items-center justify-center"
      style={{
        backgroundImage: `url(${ctaimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Energia sem limites para o seu negócio!
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">
          Contrate agora e conte com a Powersys para garantir funcionamento
          contínuo e segurança energética.
        </p>
        <a
          href="https://wa.me/552130306060?text=Olá!%20Quero%20Contratar%20os%20serviços%20da%20Powersys!"
          target="_blank"
        >
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-primary/80"
          >
            Contratar Serviços
            <ArrowRight className="w-5 h-5" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
