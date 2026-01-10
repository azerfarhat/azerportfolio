import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const QuotesSection = () => {
  const quotes = [
    "Votre rêve canadien mérite un accompagnement expert.",
    "Simplifiez vos démarches, réussissez votre immigration.",
    "Chaque projet est unique, chaque solution aussi.",
    "Un pas vers le Canada, un pas vers votre futur."
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000); // Change toutes les 4 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-48 md:h-40">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentQuote 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <div className="glass-card rounded-2xl p-8 md:p-12 glow-primary h-full flex items-center">
                  <div className="flex gap-6 items-start w-full">
                    <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary flex-shrink-0" />
                    <p className="font-display text-xl md:text-3xl text-foreground italic leading-relaxed">
                      {quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center gap-3 mt-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote 
                    ? 'w-12 bg-primary' 
                    : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
