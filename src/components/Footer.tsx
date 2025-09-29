import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-powersys.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src={logo} 
              alt="POWERSYS" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-sm opacity-90">
              Especialistas em manutenção e locação de geradores e nobreaks desde 2010.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(21) 3030-6060</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>comercial@powersys.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Rio de Janeiro - RJ</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="font-semibold">Site:</span>
                <a href="https://powersys.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  powersys.com.br
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Horário de Atendimento</h4>
            <div className="text-sm space-y-2">
              <p>Atendimento 24/7 para emergências</p>
              <p className="opacity-90">Comercial: Seg-Sex, 8h-18h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 POWERSYS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
