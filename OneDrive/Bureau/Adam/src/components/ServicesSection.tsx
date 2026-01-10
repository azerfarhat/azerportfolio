import { Briefcase, GraduationCap, Users, Home, Plane, FileCheck } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Permis de Travail',
    description: 'Accompagnement complet pour l\'obtention de votre permis de travail canadien.',
  },
  {
    icon: GraduationCap,
    title: 'Permis d\'Études',
    description: 'Guidez votre parcours académique au Canada avec notre expertise.',
  },
  {
    icon: Users,
    title: 'Regroupement Familial',
    description: 'Réunissez votre famille au Canada grâce à notre accompagnement personnalisé.',
  },
  {
    icon: Home,
    title: 'Résidence Permanente',
    description: 'Votre chemin vers la résidence permanente canadienne simplifié.',
  },
  {
    icon: Plane,
    title: 'Visa Visiteur',
    description: 'Obtenez votre visa touristique pour découvrir le Canada.',
  },
  {
    icon: FileCheck,
    title: 'Citoyenneté',
    description: 'Accompagnement dans votre demande de citoyenneté canadienne.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 md:py-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary text-base font-semibold mb-6">
            Nos Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Des Solutions pour{' '}
            <span className="text-gradient">Chaque Projet</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez notre gamme complète de services d'immigration adaptés à vos besoins spécifiques.
          </p>
        </div>

        {/* services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl p-8 transition-all duration-500 hover:glow-primary hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
