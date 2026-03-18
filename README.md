# 🚀 Portfolio Professionnel React

Un portfolio moderne, élégant et entièrement responsive construit avec React, Vite, Tailwind CSS et Framer Motion.

![Portfolio Preview](https://via.placeholder.com/1200x600)

## ✨ Fonctionnalités

- ⚛️ **React 18** avec Vite pour un développement ultra-rapide
- 🎨 **Tailwind CSS** pour un design moderne et personnalisable
- ✨ **Framer Motion** pour des animations fluides et élégantes
- 🌙 **Dark/Light Mode** avec toggle et sauvegarde de préférence
- 📱 **100% Responsive** - Optimisé pour tous les appareils
- 📩 **EmailJS** - Formulaire de contact fonctionnel
- 💬 **WhatsApp** - Intégration directe
- ⚡ **Performances optimisées**
- ♿ **Accessibilité** - Bonnes pratiques WCAG
- 🎯 **SEO** - Meta tags optimisés

## 📁 Structure du Projet

```
portfolio-pro/
├── public/              # Fichiers statiques
│   └── cv.pdf          # Votre CV (à ajouter)
├── src/
│   ├── assets/         # Images et ressources
│   ├── components/     # Composants réutilisables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── ScrollToTop.jsx
│   ├── sections/       # Sections du portfolio
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── data/          # Données du portfolio
│   │   └── portfolioData.js
│   ├── context/       # Context API
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner ou télécharger le projet**

```bash
cd portfolio-pro
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

Le projet sera accessible sur `http://localhost:3000`

## 📝 Personnalisation

### 1. Modifier vos informations personnelles

Ouvrez le fichier `src/data/portfolioData.js` et modifiez :

```javascript
export const personalInfo = {
  name: "Votre Nom",
  title: "Votre Titre",
  email: "votre@email.com",
  // ... autres informations
};
```

### 2. Ajouter votre photo de profil

- Placez votre photo dans le dossier `public/` ou `src/assets/`
- Mettez à jour le chemin dans `portfolioData.js` :

```javascript
avatar: "/votre-photo.jpg"
```

### 3. Ajouter votre CV

- Placez votre CV (format PDF) dans le dossier `public/`
- Nommez-le `cv.pdf` ou mettez à jour le chemin dans `portfolioData.js`

### 4. Configurer EmailJS

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template email
4. Récupérez vos identifiants :
   - Service ID
   - Template ID
   - Public Key

5. Mettez à jour `src/data/portfolioData.js` :

```javascript
export const emailJsConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
};
```

**Template EmailJS recommandé :**

```
Nouveau message de {{name}}

Email: {{email}}

Message:
{{message}}
```

### 5. Personnaliser les couleurs

Modifiez `tailwind.config.js` pour changer la palette de couleurs :

```javascript
colors: {
  primary: {
    light: '#4F46E5',    // Indigo
    DEFAULT: '#4338CA',
    dark: '#3730A3',
  },
  accent: {
    light: '#06B6D4',    // Cyan
    DEFAULT: '#0891B2',
    dark: '#0E7490',
  }
}
```

### 6. Ajouter vos projets

Dans `src/data/portfolioData.js`, mettez à jour le tableau `projects` :

```javascript
export const projects = [
  {
    id: 1,
    title: "Nom du Projet",
    description: "Description...",
    image: "/chemin/vers/image.jpg",
    technologies: ["React", "Node.js"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
    featured: true
  },
  // ... autres projets
];
```

## 🎨 Personnalisation du Design

### Changer les polices

Modifiez le fichier `index.html` pour importer de nouvelles polices Google Fonts :

```html
<link href="https://fonts.googleapis.com/css2?family=VotrePolice:wght@300;400;600&display=swap" rel="stylesheet">
```

Puis mettez à jour `tailwind.config.js` :

```javascript
fontFamily: {
  sans: ['VotrePolice', 'system-ui', 'sans-serif'],
}
```

### Modifier les animations

Les animations sont dans `src/index.css`. Vous pouvez :
- Modifier la durée
- Changer les effets
- Ajouter de nouvelles animations

## 📦 Build pour la production

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`

## 🚀 Déploiement

### Vercel (Recommandé)

1. Créez un compte sur [Vercel](https://vercel.com)
2. Importez votre projet GitHub
3. Vercel détectera automatiquement Vite
4. Déployez !

### Netlify

1. Créez un compte sur [Netlify](https://netlify.com)
2. Glissez-déposez le dossier `dist/` après `npm run build`
3. Ou connectez votre repository GitHub

### GitHub Pages

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

## 🛠️ Technologies Utilisées

- **React** - Bibliothèque JavaScript
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Bibliothèque d'animations
- **React Icons** - Icônes
- **EmailJS** - Service d'envoi d'emails
- **React Type Animation** - Effet de typing

## 📱 Responsive Design

Le portfolio est optimisé pour :
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## ⚡ Performance

- ✅ Lazy loading des images
- ✅ Code splitting automatique avec Vite
- ✅ Animations optimisées
- ✅ CSS minifié
- ✅ JavaScript optimisé

## 🐛 Problèmes Courants

### Les animations ne fonctionnent pas
- Vérifiez que Framer Motion est bien installé : `npm install framer-motion`

### Le formulaire de contact ne fonctionne pas
- Vérifiez vos identifiants EmailJS
- Assurez-vous d'avoir configuré le template correctement

### Le dark mode ne se sauvegarde pas
- Vérifiez que localStorage est autorisé dans votre navigateur

## 📄 License

Ce projet est open source et disponible sous la [MIT License](LICENSE).

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📧 Support

Pour toute question ou problème :
- Ouvrez une issue sur GitHub
- Contactez-moi via le formulaire du portfolio

## 🙏 Remerciements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)

---

Fait avec ❤️ et React
