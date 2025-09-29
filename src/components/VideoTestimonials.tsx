import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoTestimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      company: "Indústria Metalúrgica XYZ",
      thumbnail: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      name: "Maria Santos",
      company: "Hospital Central",
      thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      name: "Pedro Costa",
      company: "Shopping Downtown",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Veja o Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de empresas que confiam em nossos serviços
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
              <div className="relative aspect-video">
                <img 
                  src={testimonial.thumbnail} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground fill-current" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
