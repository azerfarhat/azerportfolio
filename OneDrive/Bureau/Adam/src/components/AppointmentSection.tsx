import { Calendar, ExternalLink, Clock, CreditCard, Check } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

const AppointmentSection = () => {
  const calendlyBaseUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/votre-lien';
  const calendlyUrl = `${calendlyBaseUrl}/30min`;

  const isPlaceholder = calendlyBaseUrl.includes('votre-lien');

  const consultant = {
    name: 'Adam Nafouki',
    title: 'Consultant en immigration',
    duration: '30 min',
    price: 'CA$69',
    img: '/src/image/logo.png',
    bullets: [
      'Évaluation rapide de votre dossier',
      'Choix du programme le plus adapté',
      'Checklist des documents essentiels',
      'Questions en direct sur votre situation'
    ]
  };

  return (
    <section id="rendez-vous" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5">
            Réservation en Ligne
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Prenez <span className="text-gradient">Rendez-vous</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Réservez en quelques secondes via Calendly. Créneaux à jour, confirmation instantanée.
          </p>
          {isPlaceholder && (
            <p className="mt-4 text-sm text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-3 inline-block">
              Configurez votre lien Calendly dans <strong>VITE_CALENDLY_URL</strong> pour activer la réservation.
            </p>
          )}
        </div>

        <div className="max-w-6xl mx-auto rounded-2xl border border-border/60 bg-background/90 backdrop-blur-xl shadow-2xl shadow-primary/10 p-5 md:p-8">
          <div className="grid gap-6 md:grid-cols-[320px,1fr]">
            {/* colonne résumé consultant */}
            <div className="glass-card rounded-2xl p-5 md:p-6 md:sticky md:top-24 h-fit border border-border/60">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={consultant.img}
                  alt={consultant.name}
                  className="w-14 h-14 rounded-full object-contain border border-border"
                />
                <div>
                  <p className="text-sm text-muted-foreground">{consultant.title}</p>
                  <h3 className="font-display text-xl font-bold leading-tight">Prendre consultation</h3>
                  <p className="font-semibold text-foreground">avec {consultant.name}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4 text-sm text-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{consultant.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Sélectionnez votre date et heure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{consultant.price}</span>
                </div>
              </div>

              <div className="border-t border-border/60 pt-4">
                <p className="text-sm font-semibold mb-3 text-foreground">Inclus pendant l'appel :</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {consultant.bullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* colonne calendly */}
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-tight">Agenda</h3>
                    <p className="text-sm text-muted-foreground">Fixons un rendez-vous.</p>
                  </div>
                </div>

                {!isPlaceholder && (
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                  >
                    Ouvrir dans un nouvel onglet
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="rounded-xl overflow-hidden border border-border/60 bg-background shadow-inner relative">
                <InlineWidget
                  styles={{ height: '720px', width: '100%' }}
                  url={calendlyUrl}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    primaryColor: 'dc2626',
                    textColor: '0b1224',
                    hideLandingPageDetails: true,
                    hideEventTypeDetails: true,
                    hideGdprBanner: true,
                  }}
                />
                <style>{`
                  .calendly-badge-widget,
                  .calendly-badge-content,
                  [data-component="badge"],
                  iframe[src*="calendly"] + div,
                  div[class*="badge"],
                  a[href*="calendly.com"][target="_blank"]:not([class*="event"]) {
                    display: none !important;
                    visibility: hidden !important;
                    opacity: 0 !important;
                    pointer-events: none !important;
                  }
                `}</style>
              </div>

              <p className="mt-4 text-sm text-muted-foreground text-center">
                Astuce : si l'agenda charge lentement, utilisez le lien « Ouvrir dans un nouvel onglet » ci-dessus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
