import { useState } from 'react';
import { MessageCircle, X, Send, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{
    type: string;
    text: string;
    suggestions?: string[];
  }>>([
    {
      type: 'bot',
      text: 'Bonjour! 👋 Je suis l\'assistant d\'Adam Nafouki, consultant RCIC spécialisé en immigration canadienne. Je suis ici pour répondre à vos questions!'
    }
  ]);
  const [input, setInput] = useState('');
  const [showQuickReplies, setShowQuickReplies] = useState(true);

  const quickResponses = [
    { text: 'Permis de travail 💼', category: 'service' },
    { text: 'Résidence permanente 🏠', category: 'service' },
    { text: 'Permis d\'études 🎓', category: 'service' },
    { text: 'Délais de traitement ⏱️', category: 'info' },
    { text: 'Tarifs 💰', category: 'info' },
    { text: 'Prendre RDV 📅', category: 'action' }
  ];

  const knowledgeBase = {
    'permis de travail': {
      response: '💼 **Permis de Travail au Canada**\n\nAdam vous accompagne pour :\n• EIMT (Étude d\'impact sur le marché du travail)\n• Permis de travail fermé/ouvert\n• Mobilité francophone\n• Programme des travailleurs qualifiés\n\n⏱️ Délais : 2-4 mois en moyenne\n📞 Consultation gratuite pour évaluer votre admissibilité',
      suggestions: ['Voir les tarifs', 'Prendre rendez-vous', 'En savoir plus']
    },
    'résidence permanente': {
      response: '🏠 **Résidence Permanente**\n\nProgrammes disponibles :\n• Entrée Express (Fédéral)\n• Programme de l\'Expérience Québécoise (PEQ)\n• Programme des Travailleurs Qualifiés\n• Parrainage familial\n\n✅ Taux de succès : 98%\n⏱️ Délais : 6-18 mois selon le programme',
      suggestions: ['Évaluer mon profil', 'Voir les critères', 'Prendre rendez-vous']
    },
    'permis d\'études': {
      response: '🎓 **Permis d\'Études**\n\nServices inclus :\n• Choix de l\'établissement\n• Lettre d\'acceptation\n• CAQ (Québec)\n• Permis d\'études\n• Permis de travail post-diplôme\n\n💡 Adam aide 50+ étudiants par an\n⏱️ Délais : 4-8 semaines',
      suggestions: ['Documents requis', 'Tarifs étudiants', 'Réserver consultation']
    },
    'regroupement familial': {
      response: '👨‍👩‍👧‍👦 **Regroupement Familial**\n\nParrainez :\n• Conjoint(e) / Partenaire\n• Enfants\n• Parents et grands-parents\n\n❤️ Réunissez votre famille au Canada\n⏱️ Délais : 12-24 mois selon le lien',
      suggestions: ['Critères d\'admissibilité', 'Processus étape par étape', 'Consultation']
    },
    'citoyenneté': {
      response: '🍁 **Citoyenneté Canadienne**\n\nRequis :\n• 3 ans de résidence permanente\n• Déclaration de revenus\n• Test de langue\n• Test de citoyenneté\n\nAdam vous prépare à chaque étape!\n⏱️ Délais : 12-18 mois',
      suggestions: ['Suis-je éligible?', 'Préparation au test', 'Prendre RDV']
    },
    'délais': {
      response: '⏱️ **Délais de Traitement Moyens**\n\n• Permis de travail : 2-4 mois\n• Permis d\'études : 4-8 semaines\n• Résidence permanente : 6-18 mois\n• Regroupement familial : 12-24 mois\n• Citoyenneté : 12-18 mois\n\n⚡ Délais variables selon les programmes',
      suggestions: ['Accélérer ma demande', 'Suivre mon dossier', 'Contacter Adam']
    },
    'prix': {
      response: '💰 **Tarifs**\n\nNos honoraires varient selon :\n• Type de demande\n• Complexité du dossier\n• Services additionnels\n\n🎁 **Première consultation GRATUITE** (30 min)\n\nObtenez un devis personnalisé lors de votre consultation!',
      suggestions: ['Réserver consultation gratuite', 'Voir nos services', 'Contacter par email']
    },
    'contact': {
      response: '📞 **Contactez Adam Nafouki**\n\n📧 Email : nafouki@infoimmigration.net\n📱 Téléphone : +1 (514)-701-7382\n📍 1545 Bd de l\'Avenir, bureau 202, Laval, QC H7S 2N5\n\n🌐 Réseaux sociaux :\n• Facebook : Adam Nafouki\n• Instagram : @adam_nafouki\n\n⏰ Horaires : Lun-Ven 9h-17h',
      suggestions: ['Prendre rendez-vous', 'Voir la localisation', 'Envoyer un email']
    },
    'adam': {
      response: '👨‍💼 **À Propos d\'Adam Nafouki**\n\n🎓 Consultant Réglementé en Immigration Canadienne (RCIC)\n📊 Plus de 10 ans d\'expérience\n✅ 500+ clients satisfaits\n🏆 Taux de succès : 98%\n\n💼 Spécialiste en :\n• Immigration économique\n• Programmes francophones\n• Réunification familiale',
      suggestions: ['Voir témoignages', 'Nos services', 'Prendre rendez-vous']
    },
    'documents': {
      response: '📄 **Documents Généralement Requis**\n\n✓ Passeport valide\n✓ Photos d\'identité\n✓ Diplômes et relevés de notes\n✓ Lettres de référence d\'emploi\n✓ Certificats de police\n✓ Examens médicaux\n✓ Preuve de fonds\n\n📋 Liste exacte selon votre situation lors de la consultation',
      suggestions: ['Liste complète par programme', 'Aide aux documents', 'Consultation']
    }
  };

  const getResponse = (userInput: string): { response: string; suggestions: string[] } => {
    const input = userInput.toLowerCase();
    
    // recherche dans la base de connaissances
    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (input.includes(key) || input.includes(key.replace(/\s+/g, ''))) {
        return value;
      }
    }

    // réponses spécifiques par mots-clés
    if (input.includes('bonjour') || input.includes('salut') || input.includes('hello')) {
      return {
        response: 'Bonjour! 😊 Ravi de vous aider. Je peux vous renseigner sur tous nos services d\'immigration. Que souhaitez-vous savoir?',
        suggestions: ['Nos services', 'Prendre rendez-vous', 'Contacter Adam']
      };
    }

    if (input.includes('merci')) {
      return {
        response: 'Avec plaisir! 🌟 N\'hésitez pas si vous avez d\'autres questions. Adam et son équipe sont là pour vous accompagner.',
        suggestions: ['Autre question', 'Prendre rendez-vous', 'Fin de conversation']
      };
    }

    if (input.includes('rendez-vous') || input.includes('rdv') || input.includes('consultation')) {
      return {
        response: '📅 **Réserver une Consultation Gratuite**\n\n✨ Première consultation de 30 minutes OFFERTE!\n\nPour prendre rendez-vous :\n1. Cliquez sur "Prendre Rendez-vous" en haut de la page\n2. Ou appelez : +1 (514)-701-7382\n3. Ou écrivez : nafouki@infoimmigration.net',
        suggestions: ['Horaires disponibles', 'Appeler maintenant', 'Email']
      };
    }

    // réponse par défaut
    return {
      response: 'Je comprends votre question! Pour une réponse détaillée et personnalisée, je vous recommande de :\n\n📞 Contacter Adam : +1 (514)-701-7382\n📧 Email : nafouki@infoimmigration.net\n📅 Réserver une consultation gratuite\n\nQue puis-je faire d\'autre pour vous?',
      suggestions: ['Voir tous les services', 'Prendre rendez-vous', 'Parler à Adam']
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setShowQuickReplies(false);
    const userMessage = { type: 'user', text: input };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const { response, suggestions } = getResponse(input);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: response,
        suggestions 
      }]);
    }, 800);

    setInput('');
  };

  const handleQuickResponse = (response: string) => {
    setInput(response.replace(/[💼🏠🎓⏱️💰📅]/g, '').trim());
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setTimeout(() => handleSend(), 100);
  };

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center glow-primary ${
          isOpen ? 'rotate-90' : ''
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            !
          </span>
        )}
      </button>

      {/* fenêtre de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[420px] max-w-[calc(100vw-3rem)] animate-slide-up">
          <div className="glass-card rounded-2xl shadow-2xl overflow-hidden glow-primary">
          {/* header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">Adam Nafouki - RCIC</h3>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <p className="text-xs text-white/90">Assistant en ligne</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => window.location.href = 'tel:+15141234567'}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <Phone className="w-4 h-4 text-white" />
                  </button>
                  <button
                    onClick={() => scrollToSection('#rendez-vous')}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[450px] overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.map((message, index) => (
                <div key={index}>
                  <div
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-foreground border border-border/50'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                  
                  {/* suggestions */}
                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 ml-2">
                      {message.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors border border-primary/20"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* réponses rapides initiales */}
            {showQuickReplies && messages.length <= 1 && (
              <div className="px-4 pb-3 bg-background/50">
                <p className="text-xs text-muted-foreground mb-2">Questions fréquentes :</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickResponses.map((response, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickResponse(response.text)}
                      className="px-3 py-2 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-foreground text-sm font-medium hover:from-primary/20 hover:to-accent/20 transition-all border border-border/30 text-left"
                    >
                      {response.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* input */}
            <div className="p-4 border-t border-border/50 bg-background/80">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Posez votre question..."
                  className="flex-1 px-4 py-2.5 rounded-full bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="rounded-full bg-primary hover:bg-primary/90 w-10 h-10"
                  disabled={!input.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <Mail className="w-3 h-3" />
                <a href="mailto:nafouki@infoimmigration.net" className="hover:text-primary transition-colors">
                  nafouki@infoimmigration.net
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
