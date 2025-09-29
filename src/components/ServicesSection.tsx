import { Card } from "@/components/ui/card";
import { Wrench, Battery, Clock, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      description: "Evite paradas não programadas com nossa manutenção especializada",
      features: ["Inspeção completa", "Troca de peças originais", "Relatório técnico detalhado"]
    },
    {
      icon: Battery,
      title: "Locação de Geradores",
      description: "Equipamentos de última geração para eventos e emergências",
      features: ["Entrega e instalação", "Operador qualificado", "Suporte 24/7"]
    },
    {
      icon: Clock,
      title: "Atendimento Emergencial",
      description: "Equipe pronta para atender sua emergência em até 2 horas",
      features: ["Disponível 24/7", "Diagnóstico rápido", "Reparo imediato"]
    },
    {
      icon: Shield,
      title: "Garantia Estendida",
      description: "Proteção completa para seu investimento",
      features: ["12 meses de garantia", "Revisões incluídas", "Peças certificadas"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Soluções Completas em Energia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos serviços especializados para garantir que seu negócio nunca fique sem energia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="w-full max-w-md p-8 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-xl"
              >
                <div className="mb-6">
                  <div className="bg-primary/10 p-6 rounded-xl flex items-center justify-center">
                    <Icon className="w-20 h-20 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;