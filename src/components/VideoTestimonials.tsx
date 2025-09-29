import { Card } from "@/components/ui/card";
import { Star, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import Cadu from "@/assets/Cadu.mp4";
import Carlos from "@/assets/Carlos.mp4";
import Sergio from "@/assets/Sergio.mp4";

const VideoTestimonials = () => {
  const testimonials = [
    {
      name: "Sergio",
      company: "Grupo 2154",
      videoUrl: Sergio,
    },
    {
      name: "Cadu",
      company: "Berenguer Engenharia",
      videoUrl: Cadu,
    },
    {
      name: "Carlos",
      company: "HarperCollins",
      videoUrl: Carlos,
    }
  ];

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [mutedStates, setMutedStates] = useState([true, true, true]);
  const videoRefs = testimonials.map(() => useRef<HTMLVideoElement>(null));

  const handlePlayPause = (index: number) => {
    const videoRef = videoRefs[index];
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setPlayingIndex(index);
      } else {
        videoRef.current.pause();
        setPlayingIndex(null);
      }
    }
  };

  const handlePlay = (index: number) => {
    videoRefs.forEach((ref, i) => {
      if (i !== index && ref.current) {
        ref.current.pause();
      }
    });
    setPlayingIndex(index);
  };

  const handlePause = () => {
    setPlayingIndex(null);
  };

  const handleToggleMute = (index: number) => {
    const videoRef = videoRefs[index];
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMutedStates((prev) => {
        const newStates = [...prev];
        newStates[index] = videoRef.current.muted;
        return newStates;
      });
    }
  };

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

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="w-full max-w-xs flex flex-col items-center overflow-hidden group cursor-pointer duration-200 hover:scale-105 hover:shadow-xl transition-all"
              style={{ aspectRatio: "9/16", minHeight: 445 }}
            >
              <div className="relative w-full h-full flex-1 flex items-center justify-center bg-black">
                <video
                  ref={videoRefs[index]}
                  className="w-full h-full object-cover rounded-none"
                  controls={false}
                  src={testimonial.videoUrl}
                  muted={mutedStates[index]}
                  onClick={() => handlePlayPause(index)}
                  onPlay={() => handlePlay(index)}
                  onPause={handlePause}
                  style={{ width: "100%", height: "100%" }}
                />
                <button
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full px-4 py-2 shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
                  onClick={() => handlePlayPause(index)}
                >
                  {playingIndex === index ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6" />
                  )}
                </button>
                <button
                  className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-full p-2 shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
                  onClick={() => handleToggleMute(index)}
                >
                  {mutedStates[index] ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="p-4 w-full text-center bg-background">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
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