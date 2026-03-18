# 🚀 Instructions d'Installation Rapide

## Méthode 1 : Installation Complète (Recommandée)

### Prérequis
- Node.js version 16 ou supérieure ([Télécharger Node.js](https://nodejs.org/))
- Un éditeur de code (VS Code recommandé)

### Étapes

1. **Télécharger le projet**
   - Téléchargez et décompressez le dossier `portfolio-pro`

2. **Ouvrir un terminal dans le dossier**
   - Windows : Clic droit → "Ouvrir dans le Terminal"
   - Mac/Linux : Terminal → `cd portfolio-pro`

3. **Installer les dépendances**
```bash
npm install
```
⏱️ Cela prend environ 1-2 minutes

4. **Lancer le projet**
```bash
npm run dev
```

5. **Ouvrir dans le navigateur**
   - Le terminal affichera : `Local: http://localhost:3000`
   - Ouvrez cette URL dans votre navigateur

✅ **C'est tout ! Votre portfolio est maintenant accessible.**

---

## Méthode 2 : Installation Manuelle des Dépendances

Si `npm install` ne fonctionne pas, installez les packages un par un :

```bash
# Dépendances principales
npm install react@^18.2.0 react-dom@^18.2.0

# Animations et UI
npm install framer-motion@^10.16.4
npm install react-icons@^4.11.0
npm install react-type-animation@^3.2.0

# EmailJS pour le formulaire
npm install @emailjs/browser@^3.11.0

# Dépendances de développement
npm install -D vite@^4.5.0
npm install -D @vitejs/plugin-react@^4.1.0
npm install -D tailwindcss@^3.3.5
npm install -D postcss@^8.4.31
npm install -D autoprefixer@^10.4.16
```

Puis lancez :
```bash
npm run dev
```

---

## Commandes Utiles

```bash
# Lancer le serveur de développement
npm run dev

# Créer la version de production
npm run build

# Prévisualiser la version de production
npm run preview
```

---

## Vérifier l'installation de Node.js

Pour vérifier si Node.js est installé :

```bash
node --version
npm --version
```

Vous devriez voir :
```
v16.x.x ou supérieur
8.x.x ou supérieur
```

Si ce n'est pas le cas, téléchargez Node.js depuis [nodejs.org](https://nodejs.org/)

---

## 🐛 Problèmes courants

### Erreur "npm: command not found"
- Node.js n'est pas installé → [Télécharger Node.js](https://nodejs.org/)

### Erreur "EACCES: permission denied"
```bash
# Mac/Linux
sudo npm install
```

### Port 3000 déjà utilisé
Le projet utilisera automatiquement un autre port (3001, 3002, etc.)

### Installation très lente
- Vérifiez votre connexion internet
- Essayez : `npm install --legacy-peer-deps`

---

## 📁 Structure après installation

```
portfolio-pro/
├── node_modules/        ← Créé après npm install (ne pas modifier)
├── public/
├── src/
├── package.json
├── package-lock.json    ← Créé après npm install
└── ...
```

---

## ✅ Checklist d'installation

- [ ] Node.js installé (v16+)
- [ ] Projet téléchargé et décompressé
- [ ] Terminal ouvert dans le dossier du projet
- [ ] `npm install` exécuté avec succès
- [ ] `npm run dev` lancé
- [ ] Site accessible sur http://localhost:3000

---

## 🎯 Prochaines étapes

Une fois l'installation réussie :

1. Consultez `GUIDE.md` pour personnaliser votre portfolio
2. Modifiez `src/data/portfolioData.js` avec vos informations
3. Testez le formulaire de contact avec EmailJS
4. Déployez sur Vercel ou Netlify

---

**Besoin d'aide ?** Consultez le fichier `GUIDE.md` pour un guide complet étape par étape.
