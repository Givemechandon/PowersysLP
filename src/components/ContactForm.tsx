import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ContactForm = () => {
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/comercial@powersys.com.br", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setSuccessOpen(true);
      } else {
        setErrorOpen(true);
      }
    } catch (error) {
      setErrorOpen(true);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Solicite Seu Orçamento
          </h2>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário e nossa equipe entrará em contato
          </p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-card p-8 rounded-lg shadow-lg"
        >
          {/* Nome e Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome Completo</label>
              <Input
                type="text"
                name="name"
                placeholder="Seu nome"
                required
                maxLength={100}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="seu@email.com"
                required
                maxLength={255}
              />
            </div>
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm font-medium mb-2">Telefone/WhatsApp</label>
            <Input
              type="tel"
              name="phone"
              placeholder="(11) 99999-9999"
              required
              maxLength={15}
            />
          </div>

          {/* Mensagem */}
          <div>
            <label className="block text-sm font-medium mb-2">Mensagem</label>
            <Textarea
              name="message"
              placeholder="Descreva o serviço que você precisa..."
              rows={5}
              required
              maxLength={1000}
            />
          </div>

          {/* Configurações extras do FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Novo contato via site Powersys" />

          <Button 
            type="submit" 
            size="lg" 
            className="w-full transition-transform duration-200 hover:scale-105"
          >
            Enviar Mensagem
          </Button>
        </form>
      </div>

      {/* Modal de sucesso */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-green-600 text-center text-2xl">
              ✅ Certo!
            </DialogTitle>
            <p className="text-center text-muted-foreground mt-2">
              Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.
            </p>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Modal de erro */}
      <Dialog open={errorOpen} onOpenChange={setErrorOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-600 text-center text-2xl">
              ❌ Ops!
            </DialogTitle>
            <p className="text-center text-muted-foreground mt-2">
              Não foi possível enviar sua mensagem. Tente novamente mais tarde.
            </p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactForm;
