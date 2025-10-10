import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle2, ArrowDown } from "lucide-react";
import logo from "@/assets/LOGO MONOCROMATICA.png";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Quero Contratar os serviços da Powersys."
    );
    window.open(`https://wa.me/552130306060?text=${message}`, "_blank");
  };

  return (
    <section className="relative bg-background py-24 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40  to-[#1a1a1a]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center animate-fade-in">
          {/* Logo */}
          <div className="-mb-16 -mt-64">
            <img src={logo} alt="POWERSYS" className="h-96 md:h-[28rem] mx-auto" />
          </div>

          {/* Urgency Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-destructive/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-destructive/30">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Apenas 5 vagas disponíveis esta semana</span>
          </div> */}

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Soluções em energia essencial e estratégica
            <br />
            <span className="text-primary-foreground"></span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Manutenção preventiva e locação de geradores e nobreaks com equipe
            especializada.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              "Atendimento em até 2 horas",
              "Equipe certificada",
              "Garantia de 12 meses",
              "Peças originais",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm font-medium text-white">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/552130306060?text=Olá!%20Quero%20Contratar%20os%20serviços%20da%20Powersys!"
              target="_blank"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/30 transition-transform duration-200 hover:scale-105 border-2"
                onClick={handleWhatsAppClick}
              >
                Garantir Minha Visita PowerSys
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a
              href="https://wa.me/552130306060?text=Olá!%20Quero%20Contratar%20os%20serviços%20da%20Powersys!"
              target="_blank"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-primary text-white border-2 transition-transform duration-200 hover:scale-105 hover:bg-primary/30"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Solicitar Orçamento
              </Button>
            </a>
          </div>

          {/* Trust indicators - Statistics */}
          <div className="bg-white rounded-lg p-10 shadow-md mt-6 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="text-center">
              <div className="text-3xl md:text-6xl font-bold text-blue-900/100 mb-1">
                +200
              </div>
              <div className="font-bold text-lg text-blue-900/100">Contratos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-6xl font-bold text-blue-900/100 mb-1">
                +15
              </div>
              <div className="font-bold text- text-blue-900/100">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-6xl font-bold text-blue-900/100 mb-1">
                +2.000
              </div>
              <div className="font-bold text-lg text-blue-900/100">
                Equipamentos Contratados
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center text-white animate-bounce z-20">
        <span className="text-sm">Role para Baixo</span>
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
