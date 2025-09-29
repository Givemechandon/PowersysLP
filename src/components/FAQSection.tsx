import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Qual a diferença entre um nobreak e um gerador?",
      answer: "O nobreak é um equipamento que garante energia imediata e estabilizada em caso de queda de energia, evitando desligamentos repentinos. Já o gerador fornece energia elétrica por longos períodos, ideal para manter sistemas funcionando em situações prolongadas de falta de energia."
    },
    {
      question: "O nobreak substitui o uso de um gerador?",
      answer: "Não. O nobreak atua como uma solução imediata e de curta duração, enquanto o gerador é indicado para suportar a operação por horas ou até dias. Muitas empresas utilizam os dois em conjunto para garantir continuidade total."
    },
    {
      question: "Como escolher o nobreak ideal para minha empresa?",
      answer: "É necessário avaliar a potência total dos equipamentos que serão conectados, o tempo de autonomia desejado e a sensibilidade dos aparelhos às variações de energia."
    },
    {
      question: "Quais são os principais tipos de geradores disponíveis?",
      answer: "Os geradores podem ser a diesel, gasolina ou gás natural. A escolha depende da aplicação, da autonomia necessária e do custo-benefício para cada cenário."
    },
    {
      question: "É necessário manutenção em nobreaks e geradores?",
      answer: "Sim. Tanto nobreaks quanto geradores precisam de manutenção preventiva para garantir o funcionamento adequado. Isso inclui testes de bateria no nobreak e revisões periódicas no motor e sistema de combustão dos geradores."
    },
    {
      question: "Por que investir em sistemas de energia de backup?",
      answer: "Eles evitam prejuízos causados por interrupções de energia, protegem equipamentos sensíveis e garantem a continuidade de operações críticas em empresas, indústrias e residências."
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
