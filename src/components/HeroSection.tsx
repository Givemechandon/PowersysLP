import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo-powersys.png";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero garantir minha vaga com desconto!");
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section className="relative bg-background py-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={logo} 
              alt="POWERSYS" 
              className="h-16 md:h-20 mx-auto"
            />
          </div>

          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-destructive/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-destructive/30">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Apenas 5 vagas disponíveis esta semana</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Energia Ininterrupta para<br />
            <span className="text-primary-foreground">Seu Negócio Nunca Parar</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Manutenção preventiva e locação de geradores e nobreaks com equipe especializada. 
            Atendimento emergencial 24/7 em toda região metropolitana.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              "Atendimento em até 2 horas",
              "Equipe certificada",
              "Garantia de 12 meses",
              "Peças originais"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm font-medium text-white">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              onClick={handleWhatsAppClick}
            >
              Garantir Minha Vaga com Desconto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Trust indicators - Statistics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">+200</div>
              <div className="text-sm text-white/80">Contratos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">+15</div>
              <div className="text-sm text-white/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">+2.000</div>
              <div className="text-sm text-white/80">Equipamentos Contratados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
