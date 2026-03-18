# 📧 Configuration EmailJS - Guide Complet

Ce guide vous explique comment configurer EmailJS pour que le formulaire de contact fonctionne.

## 🎯 Pourquoi EmailJS ?

EmailJS permet d'envoyer des emails directement depuis votre site React sans avoir besoin d'un serveur backend. C'est :
- ✅ Gratuit (jusqu'à 200 emails/mois)
- ✅ Simple à configurer
- ✅ Sécurisé
- ✅ Parfait pour les portfolios

---

## 📝 Étape 1 : Créer un compte EmailJS

1. Allez sur **[https://www.emailjs.com/](https://www.emailjs.com/)**
2. Cliquez sur **"Sign Up"**
3. Créez votre compte (gratuit)
4. Confirmez votre email

---

## ⚙️ Étape 2 : Ajouter un Service Email

Un "service" est la connexion entre EmailJS et votre boîte email.

### 2.1 Accéder aux services

1. Connectez-vous à EmailJS
2. Dans le menu de gauche, cliquez sur **"Email Services"**
3. Cliquez sur **"Add New Service"**

### 2.2 Choisir Gmail (Recommandé)

1. Sélectionnez **"Gmail"**
2. Cliquez sur **"Connect Account"**
3. Connectez-vous à votre compte Gmail
4. Autorisez EmailJS

### 2.3 Configurer le service

1. **Service Name** : Donnez un nom (ex: "Portfolio Contact")
2. Laissez les autres options par défaut
3. Cliquez sur **"Create Service"**

### 2.4 Récupérer le Service ID

⚠️ **IMPORTANT** : Notez le **Service ID** affiché (ex: `service_xyz123`)

---

## 📄 Étape 3 : Créer un Template Email

Le template définit comment vos emails seront formatés.

### 3.1 Créer le template

1. Dans le menu de gauche, cliquez sur **"Email Templates"**
2. Cliquez sur **"Create New Template"**

### 3.2 Configurer le template

#### Template Name
```
Portfolio Contact Form
```

#### Subject (Sujet de l'email)
```
Nouveau message de {{name}}
```

#### Content (Corps de l'email)
```
Vous avez reçu un nouveau message depuis votre portfolio :

------------------------------------
De : {{name}}
Email : {{email}}
------------------------------------

MESSAGE :
{{message}}

------------------------------------
Ce message a été envoyé via votre formulaire de contact.
Date : {{reply_to}}
```

#### From Name (Nom de l'expéditeur)
```
Portfolio Contact
```

#### From Email
```
Utilisez l'email de votre service Gmail
```

#### To Email (Votre email)
```
votre.email@gmail.com
```
⚠️ **Remplacez par VOTRE vrai email** où vous voulez recevoir les messages

### 3.3 Sauvegarder

1. Cliquez sur **"Save"**
2. **Notez le Template ID** (ex: `template_abc456`)

---

## 🔑 Étape 4 : Récupérer la Public Key

1. Cliquez sur votre nom en haut à droite
2. Allez dans **"Account"**
3. Dans l'onglet **"General"**, trouvez **"Public Key"**
4. **Notez votre Public Key** (ex: `AbCdEfGhIjKlMnOp`)

---

## 💻 Étape 5 : Configurer dans le Projet

### 5.1 Ouvrir le fichier de configuration

Ouvrez `src/data/portfolioData.js`

### 5.2 Modifier la configuration EmailJS

Trouvez cette section à la fin du fichier :

```javascript
export const emailJsConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
};
```

### 5.3 Remplacer avec vos identifiants

```javascript
export const emailJsConfig = {
  serviceId: "service_xyz123",      // ← Votre Service ID
  templateId: "template_abc456",    // ← Votre Template ID
  publicKey: "AbCdEfGhIjKlMnOp"    // ← Votre Public Key
};
```

### 5.4 Sauvegarder

Sauvegardez le fichier (Ctrl+S ou Cmd+S)

---

## ✅ Étape 6 : Tester le Formulaire

### 6.1 Lancer le projet

```bash
npm run dev
```

### 6.2 Tester

1. Ouvrez http://localhost:3000
2. Allez dans la section **"Contact"**
3. Remplissez le formulaire :
   - Nom : Test
   - Email : test@test.com
   - Message : Ceci est un test
4. Cliquez sur **"Envoyer le message"**

### 6.3 Vérifier

1. Vous devriez voir : ✅ "Message envoyé avec succès !"
2. Vérifiez votre boîte email
3. Vous devriez recevoir le message de test

---

## 🐛 Résolution des Problèmes

### Erreur "Service ID not found"

**Problème** : Le Service ID est incorrect

**Solution** :
1. Vérifiez que vous avez copié le bon Service ID
2. Il doit commencer par `service_`
3. Pas d'espaces avant/après

### Erreur "Template ID not found"

**Problème** : Le Template ID est incorrect

**Solution** :
1. Vérifiez que vous avez copié le bon Template ID
2. Il doit commencer par `template_`
3. Retournez dans EmailJS → Email Templates → Votre template

### Erreur "Public Key invalid"

**Problème** : La Public Key est incorrecte

**Solution** :
1. Allez dans Account → General
2. Copiez exactement la Public Key
3. Pas de guillemets ni d'espaces

### Le formulaire s'envoie mais pas d'email reçu

**Solutions** :
1. Vérifiez vos spams
2. Vérifiez que "To Email" dans le template est correct
3. Attendez quelques minutes (parfois ça prend du temps)
4. Vérifiez dans EmailJS Dashboard → History

### Erreur "Failed to send"

**Solutions** :
1. Vérifiez votre connexion internet
2. Ouvrez la console du navigateur (F12) pour voir l'erreur exacte
3. Vérifiez que tous les champs sont remplis

---

## 📊 Limites du Plan Gratuit

Le plan gratuit d'EmailJS permet :
- ✅ 200 emails par mois
- ✅ 2 services email
- ✅ Unlimited templates
- ✅ Support basique

Pour plus d'emails, passez au plan payant (à partir de 7$/mois).

---

## 🔒 Sécurité

### Bonnes pratiques

1. **Ne jamais commiter vos clés** dans Git
2. Utilisez des variables d'environnement en production
3. Configurez le CAPTCHA dans EmailJS pour éviter le spam

### Variables d'environnement (Production)

Pour un déploiement, créez un fichier `.env` :

```env
VITE_EMAILJS_SERVICE_ID=service_xyz123
VITE_EMAILJS_TEMPLATE_ID=template_abc456
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

Puis modifiez `portfolioData.js` :

```javascript
export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};
```

---

## 🎨 Personnalisation Avancée

### Template HTML personnalisé

Au lieu d'un texte simple, vous pouvez utiliser du HTML dans votre template :

```html
<div style="font-family: Arial, sans-serif; padding: 20px;">
  <h2 style="color: #4F46E5;">Nouveau Message Portfolio</h2>
  
  <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
    <p><strong>De :</strong> {{name}}</p>
    <p><strong>Email :</strong> {{email}}</p>
  </div>
  
  <div style="background: white; padding: 20px; border-left: 4px solid #4F46E5;">
    <p><strong>Message :</strong></p>
    <p>{{message}}</p>
  </div>
  
  <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
  
  <p style="color: #666; font-size: 12px;">
    Message envoyé depuis votre portfolio
  </p>
</div>
```

### Auto-réponse

Créez un second template pour envoyer une confirmation à l'expéditeur :

1. Créez un nouveau template "Auto Reply"
2. To Email : `{{email}}` (l'email de l'expéditeur)
3. Subject : "Merci pour votre message"
4. Modifiez `Contact.jsx` pour envoyer 2 emails

---

## 📱 Alternatives à EmailJS

Si EmailJS ne vous convient pas :

1. **Formspree** - https://formspree.io/
2. **Netlify Forms** - Si vous déployez sur Netlify
3. **Web3Forms** - https://web3forms.com/
4. **GetForm** - https://getform.io/

---

## ✅ Checklist de Configuration

- [ ] Compte EmailJS créé
- [ ] Service Gmail connecté
- [ ] Service ID récupéré
- [ ] Template créé et configuré
- [ ] Template ID récupéré
- [ ] Public Key récupérée
- [ ] Fichier `portfolioData.js` mis à jour
- [ ] Test envoyé avec succès
- [ ] Email de test reçu

---

## 🎯 Résumé Rapide

1. Créer compte EmailJS
2. Ajouter service Gmail
3. Créer template email
4. Copier : Service ID, Template ID, Public Key
5. Coller dans `src/data/portfolioData.js`
6. Tester

---

**Votre formulaire de contact est maintenant opérationnel ! 🎉**

Pour toute question, consultez la [documentation officielle EmailJS](https://www.emailjs.com/docs/).
