import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Qual o prazo para atendimento emergencial?",
      answer: "Nosso tempo médio de resposta é de 2 horas para toda região metropolitana. Em casos urgentes, priorizamos o atendimento para garantir que seu negócio não seja afetado."
    },
    {
      question: "Vocês trabalham com que marcas de geradores?",
      answer: "Trabalhamos com as principais marcas do mercado: Cummins, Stemac, Toyama, Branco, entre outras. Utilizamos apenas peças originais em todas as manutenções."
    },
    {
      question: "Como funciona a locação de geradores?",
      answer: "Oferecemos locação de curto e longo prazo. Inclui entrega, instalação, operador qualificado e suporte 24/7. Equipamentos de última geração e em perfeito estado de conservação."
    },
    {
      question: "Qual a garantia dos serviços?",
      answer: "Todos os nossos serviços possuem garantia de 12 meses. As peças trocadas são originais e certificadas. Oferecemos também contrato de manutenção preventiva com descontos especiais."
    },
    {
      question: "Atendem em finais de semana e feriados?",
      answer: "Sim! Nosso atendimento é 24 horas por dia, 7 dias por semana, incluindo feriados. Sabemos que emergências não escolhem hora para acontecer."
    },
    {
      question: "Como solicitar um orçamento?",
      answer: "Você pode solicitar através do WhatsApp, preenchendo o formulário nesta página ou ligando para nossa central. Respondemos todos os orçamentos em até 24 horas."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
