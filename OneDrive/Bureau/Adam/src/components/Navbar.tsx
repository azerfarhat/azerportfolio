import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* desktop navbar */}
      <div className="hidden lg:block relative w-full">
        <div className={cn("fixed top-10 inset-x-0 z-50")}>
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            {/* left: logo and name */}
            <a href="#accueil" className="flex items-center gap-2 flex-shrink-0">
              <div className="relative w-8 h-8">
                <img 
                  src="/src/image/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display text-lg font-bold text-foreground">Adam Nafouki</span>
            </a>

            {/* center: navigation menu */}
            <div className="flex-1 flex justify-center">
              <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Accueil">
                <div className="flex flex-row space-x-6 text-sm">
                  <HoveredLink href="#accueil">Page d'Accueil</HoveredLink>
                  <HoveredLink href="#apropos">À Propos</HoveredLink>
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-row space-x-6 text-sm">
                  <HoveredLink href="#services">Tous les Services</HoveredLink>
                  <HoveredLink href="#services">Résidence Permanente</HoveredLink>
                  <HoveredLink href="#services">Permis de Travail</HoveredLink>
                  <HoveredLink href="#services">Regroupement Familial</HoveredLink>
                  <HoveredLink href="#services">Permis d'Études</HoveredLink>
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Témoignages">
                <div className="flex flex-row space-x-6 text-sm">
                  <HoveredLink href="#temoignages">Avis Clients</HoveredLink>
                  <HoveredLink href="#temoignages">Histoires de Succès</HoveredLink>
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Contact">
                <div className="flex flex-row space-x-6 text-sm">
                  <HoveredLink href="#contact">Nous Contacter</HoveredLink>
                  <HoveredLink href="#rendez-vous">Prendre Rendez-vous</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
            </div>

            {/* right: theme toggle and button */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <ThemeToggle />
              <Button
                onClick={() => scrollToSection('#rendez-vous')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2 text-sm"
              >
                Rendez-vous
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#accueil" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <img 
                  src="/src/image/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display text-lg font-bold text-foreground">Adam Nafouki</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
              <button onClick={() => scrollToSection('#accueil')} className="text-left text-muted-foreground hover:text-foreground transition-colors py-2">
                Accueil
              </button>
              <button onClick={() => scrollToSection('#services')} className="text-left text-muted-foreground hover:text-foreground transition-colors py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('#apropos')} className="text-left text-muted-foreground hover:text-foreground transition-colors py-2">
                À Propos
              </button>
              <button onClick={() => scrollToSection('#temoignages')} className="text-left text-muted-foreground hover:text-foreground transition-colors py-2">
                Témoignages
              </button>
              <button onClick={() => scrollToSection('#contact')} className="text-left text-muted-foreground hover:text-foreground transition-colors py-2">
                Contact
              </button>
              <div className="flex items-center gap-4 py-2">
                <span className="text-muted-foreground text-sm">Thème:</span>
                <ThemeToggle />
              </div>
              <button
                onClick={() => scrollToSection('#rendez-vous')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2 px-4 py-2 rounded-lg"
              >
                Prendre Rendez-vous
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
