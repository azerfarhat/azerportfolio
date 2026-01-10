import { ArrowRight, Play, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Consultant Certifié RCIC</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Votre Rêve Canadien{' '}
              <span className="text-gradient">Commence Ici</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Expert en immigration canadienne, Adam Nafouki vous accompagne dans chaque étape de votre parcours vers le Canada. 
              Des conseils personnalisés pour un avenir prometteur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('#rendez-vous')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-primary transition-all duration-300 hover:scale-105"
              >
                Consultation Gratuite
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => scrollToSection('#video')}
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary text-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 group"
              >
                <Play className="w-5 h-5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                Voir la Vidéo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Taux de Succès</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Ans d'Expérience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              <div className="glass-card rounded-2xl p-2 glow-primary">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 relative group">
                  <img 
                    src="/src/image/pic1.png" 
                    alt="Adam Nafouki - Consultant en Immigration Canadienne" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center z-10">
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg px-6 py-4 mx-auto inline-block">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Adam Nafouki</h3>
                      <p className="text-foreground/90 font-medium">Consultant Réglementé en Immigration Canadienne</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 glass-card rounded-xl p-4 animate-float-leaf z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">+50 Clients</div>
                  <div className="text-xs text-muted-foreground">Ce mois</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 animate-float-leaf z-20" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Réponse Rapide</div>
                  <div className="text-xs text-muted-foreground">24h Maximum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
