import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <svg
                viewBox="0 0 100 100"
                className="w-10 h-10 text-primary"
              >
                <path
                  fill="currentColor"
                  d="M50 5L55 25L75 15L65 35L85 40L65 50L80 70L55 60L50 95L45 60L20 70L35 50L15 40L35 35L25 15L45 25Z"
                />
              </svg>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-foreground">Adam Nafouki</span>
                <span className="text-xs text-muted-foreground">Immigration Canadienne</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Consultant réglementé en immigration canadienne (RCIC), spécialisé dans l'accompagnement personnalisé pour tous vos projets d'immigration.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/adam.nafouki.7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/adam_nafouki/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@adamnafouki" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-muted-foreground hover:text-primary transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#apropos" className="text-muted-foreground hover:text-primary transition-colors">À Propos</a>
              </li>
              <li>
                <a href="#rendez-vous" className="text-muted-foreground hover:text-primary transition-colors">Rendez-vous</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Permis de Travail</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Permis d'Études</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Résidence Permanente</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Regroupement Familial</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Citoyenneté</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Adam Nafouki. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground">
            Développé par <span className="text-primary font-semibold">Azer Farhat</span>
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Politique de Confidentialité</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;