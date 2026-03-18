
# 📘 Guide de Personnalisation du Portfolio

Ce guide vous explique étape par étape comment personnaliser votre portfolio professionnel.

## 🎯 Étape 1 : Installation

### Option A : Si vous avez Git installé

```bash
# Cloner le projet
git clone <url-du-repo>
cd portfolio-pro

# Installer les dépendances
npm install

# Lancer le projet
npm run dev
```

### Option B : Sans Git

1. Téléchargez le dossier du projet
2. Ouvrez un terminal dans le dossier
3. Exécutez :

```bash
npm install
npm run dev
```

Le portfolio s'ouvrira automatiquement sur `http://localhost:3000`

---

## 📝 Étape 2 : Personnaliser vos informations

### Fichier principal : `src/data/portfolioData.js`

Ce fichier contient TOUTES vos données personnelles. C'est le seul fichier que vous devez modifier pour personnaliser le contenu.

### 2.1 Informations de base

```javascript
export const personalInfo = {
  name: "Jean Dupont",                    // ← Votre nom complet
  title: "Développeur Full Stack",       // ← Votre titre professionnel
  tagline: "Passionné par...",           // ← Votre phrase d'accroche
  email: "jean.dupont@email.com",        // ← Votre email
  phone: "+33 6 12 34 56 78",            // ← Votre téléphone
  whatsapp: "33612345678",               // ← WhatsApp (sans + ni espaces)
  location: "Paris, France",              // ← Votre ville
  
  // Photo de profil
  avatar: "/ma-photo.jpg",               // ← Chemin vers votre photo
  
  // CV PDF
  resumeUrl: "/cv.pdf",                  // ← Chemin vers votre CV
  
  // Réseaux sociaux
  social: {
    linkedin: "https://www.linkedin.com/in/jean-dupont",
    github: "https://github.com/jeandupont",
    twitter: "https://twitter.com/jeandupont",
  }
};
```

### 2.2 À propos de vous

```javascript
about: [
  "Premier paragraphe sur vous...",
  "Deuxième paragraphe...",
  "Troisième paragraphe...",
  "Quatrième paragraphe..."
]
```

**Conseils :**
- 3-4 paragraphes courts
- Mettez en avant vos compétences principales
- Parlez de votre passion et motivation
- Restez professionnel mais authentique

---

## 🛠️ Étape 3 : Ajouter vos compétences

```javascript
export const skills = [
  {
    name: "React",              // Nom de la compétence
    category: "Frontend",       // Frontend, Backend, ou Outils
    level: 95,                  // Niveau de 0 à 100
    icon: "FaReact"            // Icône (voir liste ci-dessous)
  },
  // ... autres compétences
];
```

### Icônes disponibles :

**Frontend:**
- `FaReact` - React
- `SiNextdotjs` - Next.js
- `SiTypescript` - TypeScript
- `SiTailwindcss` - Tailwind
- `FaJs` - JavaScript
- `FaHtml5` - HTML/CSS

**Backend:**
- `FaNodeJs` - Node.js
- `SiExpress` - Express
- `SiMongodb` - MongoDB
- `SiPostgresql` - PostgreSQL

**Outils:**
- `FaGitAlt` - Git
- `FaDocker` - Docker
- `SiVisualstudiocode` - VS Code
- `FaFigma` - Figma

---

## 💼 Étape 4 : Ajouter vos expériences

```javascript
export const experiences = [
  {
    id: 1,
    company: "Nom de l'entreprise",
    position: "Votre poste",
    period: "Janvier 2023 - Présent",
    location: "Paris, France",
    description: [
      "Première mission ou responsabilité",
      "Deuxième mission",
      "Troisième mission",
      "Quatrième mission"
    ],
    technologies: ["React", "Node.js", "MongoDB"]
  },
  // ... autres expériences
];
```

**Conseils :**
- Listez vos expériences de la plus récente à la plus ancienne
- Utilisez des verbes d'action (Développement, Création, Mise en place...)
- Soyez concret et quantifiable si possible
- 3-5 points par expérience

---

## 🚀 Étape 5 : Ajouter vos projets

```javascript
export const projects = [
  {
    id: 1,
    title: "Nom du Projet",
    description: "Description courte du projet (2-3 phrases max)",
    image: "/images/projet1.jpg",        // Votre image
    technologies: ["React", "Node.js"],   // Technologies utilisées
    liveUrl: "https://projet.com",        // URL du projet en ligne
    githubUrl: "https://github.com/...",  // URL GitHub
    featured: true                         // true pour les projets importants
  },
  // ... autres projets
];
```

**Comment ajouter des images :**

1. Créez un dossier `public/images/`
2. Placez vos images dedans
3. Référencez-les : `image: "/images/mon-projet.jpg"`

**Conseils :**
- Mettez vos 2-3 meilleurs projets en `featured: true`
- Utilisez des images de qualité (ratio 3:2 recommandé)
- Description claire et concise

---

## 🎓 Étape 6 : Ajouter votre formation

```javascript
export const education = [
  {
    id: 1,
    degree: "Master en Informatique",
    school: "Université de Paris",
    period: "2018 - 2020",
    description: "Description de votre formation...",
    grade: "Mention Bien"  // Optionnel
  },
  // ... autres diplômes
];
```

---

## 🏆 Étape 7 : Ajouter vos certifications

```javascript
export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://lien-vers-certification"  // Optionnel
  },
  // ... autres certifications
];
```

---

## 📧 Étape 8 : Configurer EmailJS (Formulaire de Contact)

### 8.1 Créer un compte EmailJS

1. Allez sur [EmailJS.com](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Cliquez sur "Add New Service"

### 8.2 Configurer votre service email

1. Choisissez votre fournisseur d'email (Gmail recommandé)
2. Connectez votre compte email
3. Notez le **Service ID**

### 8.3 Créer un template

1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce contenu :

```
Subject: Nouveau message de {{name}}

Vous avez reçu un nouveau message depuis votre portfolio.

De: {{name}}
Email: {{email}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre portfolio.
```

4. Sauvegardez et notez le **Template ID**

### 8.4 Récupérer votre Public Key

1. Allez dans "Account" → "General"
2. Copiez votre **Public Key**

### 8.5 Configurer dans le projet

Ouvrez `src/data/portfolioData.js` et modifiez :

```javascript
export const emailJsConfig = {
  serviceId: "votre_service_id",      // ← Collez votre Service ID
  templateId: "votre_template_id",    // ← Collez votre Template ID
  publicKey: "votre_public_key"       // ← Collez votre Public Key
};
```

🎉 **Votre formulaire est maintenant fonctionnel !**

---

## 🎨 Étape 9 : Personnaliser les couleurs (Optionnel)

Ouvrez `tailwind.config.js` :

```javascript
colors: {
  primary: {
    light: '#4F46E5',    // Couleur principale claire
    DEFAULT: '#4338CA',  // Couleur principale
    dark: '#3730A3',     // Couleur principale foncée
  },
  accent: {
    light: '#06B6D4',    // Couleur d'accent claire
    DEFAULT: '#0891B2',  // Couleur d'accent
    dark: '#0E7490',     // Couleur d'accent foncée
  }
}
```

**Ressources pour choisir des couleurs :**
- [Coolors.co](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)

---

## 📸 Étape 10 : Ajouter vos images

### Photo de profil

1. Préparez une photo professionnelle (carré, 500x500px minimum)
2. Placez-la dans `public/` : `public/avatar.jpg`
3. Mettez à jour dans `portfolioData.js` :

```javascript
avatar: "/avatar.jpg"
```

### Images de projets

1. Créez le dossier `public/images/`
2. Ajoutez vos images (format recommandé : 1200x800px)
3. Référencez-les dans vos projets :

```javascript
image: "/images/projet1.jpg"
```

### CV PDF

1. Placez votre CV dans `public/` : `public/cv.pdf`
2. Il sera automatiquement téléchargeable via le bouton "Télécharger CV"

---

## 🚀 Étape 11 : Déploiement

### Option 1 : Vercel (Recommandé - Gratuit)

1. Créez un compte sur [Vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre projet depuis GitHub
4. Vercel détecte automatiquement Vite
5. Cliquez sur "Deploy"
6. Votre site est en ligne ! 🎉

### Option 2 : Netlify (Gratuit)

1. Buildez votre projet : `npm run build`
2. Allez sur [Netlify.com](https://netlify.com)
3. Glissez-déposez le dossier `dist/`
4. Votre site est en ligne ! 🎉

### Option 3 : GitHub Pages (Gratuit)

```bash
npm install --save-dev gh-pages
```

Ajoutez dans `package.json` :

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Puis :

```bash
npm run deploy
```

---

## ✅ Checklist avant déploiement

- [ ] Toutes les informations personnelles sont à jour
- [ ] Photo de profil ajoutée
- [ ] CV PDF ajouté
- [ ] Images de projets ajoutées
- [ ] Liens GitHub et démos fonctionnels
- [ ] EmailJS configuré et testé
- [ ] WhatsApp configuré
- [ ] Test sur mobile
- [ ] Test dark/light mode
- [ ] Vérification orthographe

---

## 🐛 Problèmes fréquents

### Le site ne se lance pas

```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules
npm install
npm run dev
```

### Les images ne s'affichent pas

- Vérifiez que les images sont dans `public/`
- Vérifiez les chemins (avec `/` au début)
- Format supporté : jpg, png, webp

### Le formulaire ne fonctionne pas

1. Vérifiez vos identifiants EmailJS
2. Ouvrez la console (F12) pour voir les erreurs
3. Testez d'abord avec un email test

### Le dark mode ne fonctionne pas

- Videz le cache du navigateur (Ctrl + F5)
- Vérifiez localStorage (F12 → Application → Local Storage)

---

## 📞 Besoin d'aide ?

Si vous rencontrez un problème :

1. Consultez ce guide
2. Vérifiez la [documentation React](https://react.dev/)
3. Cherchez l'erreur sur Google
4. Ouvrez une issue sur GitHub

---

## 🎓 Pour aller plus loin

### Ajouter Google Analytics

1. Créez un compte [Google Analytics](https://analytics.google.com/)
2. Installez : `npm install react-ga4`
3. Configurez dans `App.jsx`

### Ajouter un blog

1. Installez : `npm install @contentlayer/next`
2. Créez un dossier `content/`
3. Suivez la documentation de Contentlayer

### Optimiser le SEO

1. Ajoutez un `sitemap.xml`
2. Créez un `robots.txt`
3. Optimisez les balises meta dans `index.html`

---

**Félicitations ! Votre portfolio est prêt ! 🎉**

N'oubliez pas de le partager sur vos réseaux sociaux et LinkedIn !
