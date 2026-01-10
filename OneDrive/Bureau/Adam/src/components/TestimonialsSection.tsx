import { Star } from 'lucide-react';
import { HoverEffect } from "./ui/card-hover-effect";

const testimonials = [
  {
    title: 'Marie Dubois',
    description: 'Grâce à Adam, ma famille et moi avons obtenu notre résidence permanente en moins de 8 mois. Un accompagnement exceptionnel du début à la fin.',
    role: 'Résidente Permanente',
    rating: 5,
  },
  {
    title: 'Ahmed Hassan',
    description: 'Professionnalisme exemplaire. Adam a su naviguer les complexités de mon dossier avec expertise. Je recommande à 100%.',
    role: 'Travailleur Qualifié',
    rating: 5,
  },
  {
    title: 'Sophie Martin',
    description: 'J\'étais perdue dans les démarches pour mon permis d\'études. Adam m\'a guidée pas à pas. Aujourd\'hui je suis à Toronto!',
    role: 'Étudiante Internationale',
    rating: 5,
  },
  {
    title: 'Jean Tremblay',
    description: 'Service impeccable et réactif. Adam a transformé un processus complexe en une expérience fluide et rassurante.',
    role: 'Entrepreneur',
    rating: 5,
  },
  {
    title: 'Fatima Benali',
    description: 'Mon rêve de rejoindre mon conjoint au Canada est devenu réalité grâce à l\'expertise et au dévouement d\'Adam.',
    role: 'Regroupement Familial',
    rating: 5,
  },
  {
    title: 'Carlos Rodriguez',
    description: 'Une équipe professionnelle qui connaît vraiment son métier. Mon permis de travail a été approuvé rapidement.',
    role: 'Professionnel',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="relative py-32 md:py-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary text-base font-semibold mb-6">
            Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ce Que Disent{' '}
            <span className="text-gradient">Nos Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez les expériences de ceux qui ont réalisé leur rêve canadien avec notre accompagnement.
          </p>
        </div>

        {/* Testimonials Grid with Hover Effect */}
        <div className="max-w-6xl mx-auto">
          <HoverEffect items={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
