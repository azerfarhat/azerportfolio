import { Award, BookOpen, Shield, Heart } from 'lucide-react';

const AboutSection = () => {
  const qualities = [
    {
      icon: Award,
      title: 'Certifié RCIC',
      description: 'Membre du Collège des Consultants en Immigration et en Citoyenneté',
    },
    {
      icon: BookOpen,
      title: 'Expertise Approfondie',
      description: 'Plus de 10 ans d\'expérience dans tous les programmes d\'immigration',
    },
    {
      icon: Shield,
      title: 'Intégrité Totale',
      description: 'Transparence complète sur les processus et les frais',
    },
    {
      icon: Heart,
      title: 'Approche Humaine',
      description: 'Chaque client est unique, chaque dossier mérite une attention personnalisée',
    },
  ];

  return (
    <section id="apropos" className="relative py-32 md:py-40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Info */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 glow-accent">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 overflow-hidden relative group">
                <img 
                  src="/src/image/pic2.png" 
                  alt="Adam Nafouki" 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                    <span className="font-display text-5xl font-bold text-primary-foreground">AN</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Adam Nafouki</h3>
                  <p className="text-primary font-medium mt-2">RCIC - R123456</p>
                  <p className="text-muted-foreground mt-1">Consultant Réglementé</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-primary/20 rounded-2xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-accent/20 rounded-2xl" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent text-base font-semibold mb-6">
                À Propos
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Un Expert à{' '}
                <span className="text-gradient">Votre Service</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Passionné par l'immigration et le multiculturalisme, Adam Nafouki accompagne depuis plus de 10 ans des familles et des professionnels dans leur projet d'immigration au Canada. Son expertise couvre tous les programmes fédéraux et provinciaux.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {qualities.map((quality) => (
                <div
                  key={quality.title}
                  className="glass-card rounded-xl p-5 transition-all duration-300 hover:glow-primary group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <quality.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{quality.title}</h4>
                      <p className="text-sm text-muted-foreground">{quality.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-2">
              <p className="text-lg italic text-foreground">
                "Mon objectif est de transformer vos rêves canadiens en réalité, avec professionnalisme et humanité."
              </p>
              <cite className="text-muted-foreground mt-2 block">— Adam Nafouki</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
