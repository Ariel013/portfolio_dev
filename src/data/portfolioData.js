// 📝 FICHIER DE DONNÉES PERSONNELLES
// Remplacez toutes les informations ci-dessous par vos vraies données

export const personalInfo = {
  name: "Ariel Kevin SODJINOU",
  title: "Développeur Full Stack",
  tagline: "Passionné par la création d'applications web modernes et performantes",
  email: "kevin.sodjinou@epitech.eu",
  phone: "+225 0502407474",
  whatsapp: "22961566704", // Numéro sans + ni espaces pour WhatsApp
  location: "Abidjan, Côte-d'Ivoire",
  
  // Photo de profil - Remplacez par le chemin de votre photo
  // avatar: import.meta.env.BASE_URL + "https://res.cloudinary.com/dywgshhwp/image/upload/v1774098701/Identity_uql9xt.png",
  avatar: "https://res.cloudinary.com/dywgshhwp/image/upload/v1774098701/Identity_uql9xt.png",

  // CV PDF - Mettez votre CV dans le dossier public et indiquez le chemin
  resumeUrl: import.meta.env.BASE_URL + "Ariel_Kevin_SODJINOU.pdf",
  
  // Réseaux sociaux
  social: {
    linkedin: "https://www.linkedin.com/in/ariel-kevin-sodjinou/",
    github: "https://github.com/Ariel013",
    twitter: "https://twitter.com/aarielkev",
    discord: "https://discord.com/users/931712339793821746",
    codingame: "https://www.codingame.com/profile/33efd4d25f08a990da64f683baf3a3385218355",
    portfolio: "https://ariel013.github.io/portfolio_dev/"
  },
  
  // À propos de moi
  about: [
    "Développeur Full Stack avec une préférence marquée pour le backend (Node.js, architecture MERN), je conçois des applications web robustes et performantes orientées vers la résolution de vrais problèmes.",
    "Accompagnateur à EPITECH, j’accompagne des étudiants en Data/IA et bonnes pratiques logicielles, alliant technique et pédagogie.",
    "Curieux par nature, je m’investis également dans la cybersécurité et l’intelligence artificielle, deux domaines qui enrichissent ma vision du développement logiciel."
  ]
};

export const skills = [
  // Frontend
  { name: "React", category: "Frontend", level: 70, icon: "FaReact" },
  { name: "Next.js", category: "Frontend", level: 70, icon: "SiNextdotjs" },
  { name: "TypeScript", category: "Frontend", level: 60, icon: "SiTypescript" },
  { name: "Tailwind CSS", category: "Frontend", level: 85, icon: "SiTailwindcss" },
  { name: "JavaScript", category: "Frontend", level: 80, icon: "FaJs" },
  { name: "HTML/CSS", category: "Frontend", level: 70, icon: "FaHtml5" },
  
  // Backend
  { name: "Node.js", category: "Backend", level: 80, icon: "FaNodeJs" },
  { name: "Express.js", category: "Backend", level: 80, icon: "SiExpress" },
  { name: "MongoDB", category: "Backend", level: 80, icon: "SiMongodb" },
  { name: "PostgreSQL", category: "Backend", level: 65, icon: "SiPostgresql" },
  { name: "REST API", category: "Backend", level: 85, icon: "FaCode" },
  
  // Outils
  { name: "Git", category: "Outils", level: 80, icon: "FaGitAlt" },
  { name: "Docker", category: "Outils", level: 75, icon: "FaDocker" },
  // { name: "VS Code", category: "Outils", level: 95, icon: "SiVisualstudiocode" },
  // { name: "Figma", category: "Outils", level: 85, icon: "FaFigma" },
];

export const experiences = [
  {
    id: 1,
    company: "EPITECH",
    position: "Accompagnateur Pédagogique Epitech",
    period: "Janvier 2024 - Présent",
    location: "Abidjan, Côte-d'Ivoire",
    description: [
      "Conception de supports et animation de modules de formation",
      "Suivi pédagogique et évaluation de la progression",
      // "Evaluation de la progression et adapatation du contenu pédagogique.",
      "Revue de code, assistance technique et mentorat",
      "Développement d'outils internes améliorant les processus pédagogiques et organisationnels avec MongoDB, Express, React et Node.js",
      "Formation et accompagnement d'étudiants en développement web fullstack et bonnes pratiques logicielles",
      "Création de tutoriels techniques, ateliers et ressources d'apprentissage en ingénierie logicielle",
    ],
    technologies: ["Développement Web", "Backend", "Data/IA", "Pédagogie", "Machine Learning", "NLP","Data Analysis"]
  },
  {
    id: 2,
    company: "Agence des Systèmes d'Informations et du Numérique (ASIN)",
    position: "Analyste Cybersécurité",
    period: "Décembre 2022 - Mai 2023",
    location: "Cotonou, Bénin",
    description: [
      "Réalisation de tests d'intrusion sur applications web ",
      "Rédaction de bulletins d'alerte et de rapports SOC",
      "Monitoring d'outils de surveillance (FortiSIEM)",
      "Veille de vulnérabilités",
      "Formation d'initiation à la cybersécurité à un public cible"
    ],
    technologies: ["Pentest","FortiSIEM", "Shell Scripting"]
  },
  {
    id: 3,
    company: "MA-INFO",
    position: "Technicien Réseaux",
    period: "Avril 2022 - Septembre 2022",
    location: "Cotonou, Bénin",
    description: [
      "Installation de systèmes d'exploitation",
      "Gestion et configuration d'équipements réseau",
      "Câblage réseau",
      "Configuration et Mise en place d'un proxy cache (Artica Proxy) pour le contrôle des utilisateurs."
    ],
    technologies: ["Packet Tracer", "Voix IP", "Réseaux"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Bluelock",
    description: "Plateforme de challenges CTF développée pour EPITECH Bénin, inspirée de HackTheBox. Elle intègre un système de score, un classement, la création de challenges personnalisés et une interface d’administration. Les règles du jeu sont inspirées du manga Blue Lock afin de rendre l’expérience plus immersive et originale.",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/bluelock_dnrkfh.png", // Remplacez par votre image
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind", "Docker"],
    liveUrl: "https://epi-bluelock.bj/",
    // githubUrl: "https://github.com/username/project",
    featured: true
  },
  {
    id: 2,
    title: "RAG RH Assistant",
    description: "Chatbot basé sur la méthode RAG (Retriever-Augmented Generation) pour répondre aux questions courantes des employés concernant les ressources humaines (politiques internes, avantages, congés, etc.). Ce système utilise un modèle d'IA pour récupérer des informations pertinentes et générer des réponses précises, automatisant ainsi les tâches RH et optimisant l'expérience des collaborateurs.",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/rag_kyoa3y.png",
    technologies: ["FastAPI", "ChromaDB", "Python"],
    liveUrl: "https://arieldev13-assistant-rh-rag.hf.space",
    githubUrl: "https://github.com/Ariel013/Rag-RH.git",
    featured: true
  },
  {
    id: 3,
    title: "Hemosafe",
    description: "Conception et développement d’une application e-santé pour la gestion des demandes de transfusions sanguines dans les hôpitaux béninois.",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/hemosafe_dc8cle.png",
    technologies: ["Next", "Nest", "Prisma", "Postgresql"],
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com/username/project",
    featured: false
  },
  {
    id: 4,
    title: "Dashboard",
    description: "Développement collaboratif d’un système interne de suivi académique à EPITECH Bénin (structuration et backend).",
    image: "https://placehold.co/600x400/1e40af/ffffff?text=Dashboard", // TODO: Remplacer par une vraie capture d’écran
    technologies: ["React", "Node.js", "MongoDB"],
    // liveUrl: "", // TODO: Ajouter l’URL du projet si disponible
    // githubUrl: "", // TODO: Ajouter l’URL du repo GitHub
    featured: false
  },
  {
    id: 5,
    title: "United Kizdom World Congres",
    description: " Une plateforme internationale dédiée au rayonnement des danses afro, afro-latines, caribéennes et des expressions culturelles africaines.",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/v1776611686/Capture_d_%C3%A9cran_2026-04-19_151135_iuvwc3.png",
    technologies: ["Laravel", "Nuxt.js", "Mysql"],
    liveUrl: "https://unitedkizdom.com",
    // githubUrl: "https://github.com/username/project",
    featured: false
  },
  // {
  //   id: 6,
  //   title: "Blog Platform",
  //   description: "Plateforme de blog moderne avec éditeur Markdown, commentaires et système de tags.",
  //   image: "https://via.placeholder.com/600x400",
  //   technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/username/project",
  //   featured: false
  // }
];

export const education = [
  {
    id: 1,
    degree: "Certificat concepteur développeur Web et Mobile (RNCP Niveau 5)",
    school: "EPITECH Bénin",
    period: "2022 - 2023",
    // description: "Spécialisation en développement web et génie logiciel.",
    // grade: "Mention Bien"
  },
  {
    id: 2,
    degree: "Licence en Informatique, Réseaux et Télécommunications",
    school: "ESGIS Bénin",
    period: "2019 - 2022",
    // description: "Formation généraliste en informatique couvrant les fondamentaux des réseaux, systèmes et de la sécurité informatique.",
    // grade: "Mention Bien"
  }
];

export const certifications = [
  {
    id: 1,
    name: "Certified Application Pentester (CAP)",
    issuer: "SecOps Group",
    date: "2023",
    // url: "" // TODO: Ajouter le lien de vérification SecOps Group
  },
  {
    id: 2,
    name: "Certified Network Security Practitioner (CNSP)",
    issuer: "SecOps Group",
    date: "2023",
    // url: "" // TODO: Ajouter le lien de vérification SecOps Group
  },
  {
    id: 3,
    name: "Postman Student Expert",
    issuer: "Postman",
    date: "2023",
    url: "https://api.badgr.io/public/assertions/NZjEI44kSFWvECEOHSaDkw"
  },
  {
    id: 4,
    name: "Network Security Expert 1 & 2",
    issuer: "Fortinet",
    date: "2022",
    // url: "" // TODO: Ajouter le lien de vérification Fortinet
  },
  {
    id: 5,
    name: "Certification Python3",
    issuer: "CodinGame",
    date: "2026",
    url: "https://www.codingame.com/certification/ZD-U-UVUtL22OVlXF4NkBg"
  }
];

// Configuration EmailJS — valeurs chargées depuis le fichier .env
export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
