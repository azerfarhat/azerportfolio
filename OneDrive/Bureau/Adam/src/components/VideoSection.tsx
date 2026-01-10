import { Play } from 'lucide-react';
import { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="relative py-32 md:py-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-base font-semibold mb-6">
            Découvrez Notre Approche
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comment Nous Pouvons{' '}
            <span className="text-gradient">Vous Aider</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Regardez cette courte vidéo pour comprendre notre processus d'accompagnement et découvrir comment nous transformons vos rêves en réalité.
          </p>
        </div>

        {/* video container */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-2 glow-accent">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-secondary to-card">
              {!isPlaying ? (
                <>
                  {/* Placeholder with play button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Decorative maple leaves */}
                    <svg viewBox="0 0 100 100" className="absolute w-40 h-40 text-primary/10 top-10 left-10">
                      <path fill="currentColor" d="M50 5L55 25L75 15L65 35L85 40L65 50L80 70L55 60L50 95L45 60L20 70L35 50L15 40L35 35L25 15L45 25Z" />
                    </svg>
                    <svg viewBox="0 0 100 100" className="absolute w-32 h-32 text-accent/10 bottom-10 right-10">
                      <path fill="currentColor" d="M50 5L55 25L75 15L65 35L85 40L65 50L80 70L55 60L50 95L45 60L20 70L35 50L15 40L35 35L25 15L45 25Z" />
                    </svg>

                    <button
                      onClick={() => setIsPlaying(true)}
                      className="relative group"
                    >
                      <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 glow-primary">
                        <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                    </button>

                    <p className="mt-8 text-foreground font-display text-xl">Cliquez pour lancer la vidéo</p>
                    <p className="mt-2 text-muted-foreground">Durée: 3 minutes</p>
                  </div>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Présentation Adam Nafouki Immigration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </div>
        </div>

        {/* Features below video */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">Minutes de consultation offerte</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-accent mb-2">100%</div>
            <p className="text-muted-foreground">Transparence sur les frais</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-foreground mb-2">24/7</div>
            <p className="text-muted-foreground">Support disponible</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
