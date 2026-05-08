# Azer Farhat – Portfolio Angular

Portfolio personnel complet développé avec **Angular 17** (standalone components).

## 🚀 Démarrage rapide

### Prérequis
- Node.js **18+** → [nodejs.org](https://nodejs.org)
- Angular CLI : `npm install -g @angular/cli`

### Installation
```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
ng serve

# 3. Ouvrir dans le navigateur
# http://localhost:4200
```

### Build production
```bash
ng build --configuration production
# Fichiers générés dans dist/portfolio-azer/
```

## 📁 Structure du projet

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/        → Barre de navigation sticky
│   │   ├── hero/          → Section hero (typewriter + glitch)
│   │   ├── about/         → À propos + stats
│   │   ├── skills/        → Grille de compétences
│   │   ├── experience/    → Timeline des stages
│   │   ├── projects/      → Grille projets + featured
│   │   ├── contact/       → Formulaire + liens
│   │   └── footer/        → Pied de page
│   ├── directives/
│   │   ├── scramble.directive.ts      → Effet scramble sur les titres
│   │   ├── word-reveal.directive.ts   → Révélation mot par mot au scroll
│   │   └── scroll-reveal.directive.ts → Fade-in au scroll
│   ├── app.component.ts
│   └── app.config.ts
├── assets/
│   └── screenshots/       → Tes captures d'écran de projets
├── index.html
└── styles.scss             → Variables CSS globales
```

## 🖼️ Ajouter tes captures d'écran

Place tes images dans `src/assets/screenshots/` :

| Fichier                | Projet              |
|------------------------|---------------------|
| `cabinet-ichraf.png`   | Cabinet Ichraf MVP  |
| `firstparc.png`        | FirstParc           |
| `gdepot.png`           | G-Depot             |
| `events.png`           | Event Management    |
| `chatbot.png`          | AI Chatbot          |

Taille recommandée : **600 × 360 px**. Si un fichier est absent, un placeholder s'affiche automatiquement.

## 🎨 Effets texte intégrés

| Directive             | Usage                                  |
|-----------------------|----------------------------------------|
| `[appScramble]`       | Scramble aléatoire au scroll           |
| `appWordReveal`       | Révélation mot par mot au scroll       |
| `appScrollReveal`     | Fade + slide au scroll                 |
| Typewriter (Hero)     | Cycle automatique dans HeroComponent   |
| Glitch CSS (Hero)     | Effet glitch sur le nom via `::before/after` |

## 🌐 Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
ng build --configuration production
vercel dist/portfolio-azer/browser
```

### Netlify
1. `ng build --configuration production`
2. Drag & drop `dist/portfolio-azer/browser` sur [netlify.com/drop](https://netlify.com/drop)

### GitHub Pages
```bash
ng add angular-cli-ghpages
ng deploy --base-href=/NOM_DU_REPO/
```

## 🔧 Personnalisation rapide

- **Couleurs** → `src/styles.scss` (variables `:root`)
- **Données projets** → `src/app/components/projects/projects.component.ts`
- **Expériences** → `src/app/components/experience/experience.component.ts`
- **Liens contact** → `src/app/components/contact/contact.component.ts`
