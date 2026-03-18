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
  avatar: "/Identity.png",

  // CV PDF - Mettez votre CV dans le dossier public et indiquez le chemin
  resumeUrl: "/Ariel_Kevin_SODJINOU.pdf",
  
  // Réseaux sociaux
  social: {
    linkedin: "https://www.linkedin.com/in/ariel-kevin-sodjinou/",
    github: "https://github.com/Ariel013",
    // twitter: "https://twitter.com/votre-username",
    portfolio: "https://votre-site.com"
  },
  
  // À propos de moi
  about: [
    // "Développeur Full Stack avec plus de 3 ans d'expérience dans la création d'applications web modernes et scalables.",
    // "Spécialisé dans l'écosystème JavaScript/TypeScript (React, Node.js, Next.js) avec une forte orientation vers les meilleures pratiques de développement et l'architecture logicielle.",
    // "Passionné par l'innovation technologique, j'aime relever des défis complexes et transformer des idées en solutions concrètes et performantes.",
    // "Toujours en veille technologique, je m'efforce de rester à jour avec les dernières tendances et outils du développement web."
    "Passionné d'innovation technologiques, j'évolue en tant que Backend Developer avec des compétences en NodeJs et en architecture MERN.",
    "Avec une approche pédagogique, je partage mes connaissances en tant qu'Accompagnateur Pédagogique à EPITECH Bénin, tout en portant une attention particulière à la gestion de projet et aux nouvelles technologies.",
    "Mon parcours s’enrichit constamment grâce à mon esprit curieux et mon envie de repousser les limites dans tout ce que j'entreprends."
  ]
};

export const skills = [
  // Frontend
  { name: "React", category: "Frontend", level: 70, icon: "FaReact" },
  { name: "Next.js", category: "Frontend", level: 70, icon: "SiNextdotjs" },
  { name: "TypeScript", category: "Frontend", level: 60, icon: "SiTypescript" },
  // { name: "Tailwind CSS", category: "Frontend", level: 92, icon: "SiTailwindcss" },
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
  // { name: "Docker", category: "Outils", level: 75, icon: "FaDocker" },
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
      "Développement d'outils internes"
    ],
    technologies: ["Node.js", "MongoDB", "Docker", "Python"]
  },
  {
    id: 2,
    company: "ASIN",
    position: "Analyste Cybersécurité",
    period: "Décembre 2022 - Mai 2023",
    location: "Cotonou, Bénin",
    description: [
      "Réalisation de tests d'intrusion sur applications web ",
      "Rédaction de bulletins d'alerte et de rapports SOC",
      "Monitoring d'outils de surveillance",
      "Veille de vulnérabilités"
    ],
    technologies: ["FortiSIEM", "Python", "Scripting"]
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
      "Mise en place d'un proxy cache pour le contrôl des utilisateurs."
    ],
    // technologies: ["JavaScript", "Vue.js", "HTML/CSS", "Git"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Bluelock",
    description: "Plateforme de challenges CTF développée pour EPITECH Bénin, inspirée de HackTheBox. Elle intègre un système de score, un classement, la création de challenges personnalisés et une interface d’administration. Les règles du jeu sont inspirées du manga Blue Lock afin de rendre l’expérience plus immersive et originale.",
    image: "https://via.placeholder.com/600x400", // Remplacez par votre image
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind", "Docker"],
    liveUrl: "https://epi-bluelock.bj/",
    // githubUrl: "https://github.com/username/project",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec système de notifications en temps réel.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Generator",
    description: "Générateur de portfolio personnalisable avec templates professionnels et export PDF.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "Tailwind", "Firebase", "jsPDF"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Tableau de bord météo interactif avec prévisions, graphiques et géolocalisation.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "Chart.js", "OpenWeather API", "Leaflet"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Dashboard d'analyse de réseaux sociaux avec métriques et visualisations de données.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "D3.js", "Node.js", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Plateforme de blog moderne avec éditeur Markdown, commentaires et système de tags.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false
  }
];

export const education = [
  {
    id: 1,
    degree: "Master en Informatique",
    school: "Université de Paris",
    period: "2018 - 2020",
    description: "Spécialisation en développement web et génie logiciel. Projet de fin d'études sur les architectures microservices.",
    grade: "Mention Bien"
  },
  {
    id: 2,
    degree: "Licence Informatique",
    school: "Université Lyon 1",
    period: "2015 - 2018",
    description: "Formation généraliste en informatique couvrant les fondamentaux de la programmation, des bases de données et des réseaux.",
    grade: "Mention Assez Bien"
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://aws.amazon.com/certification/"
  },
  {
    id: 2,
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022",
    url: "https://www.scrum.org/"
  },
  {
    id: 3,
    name: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2021",
    url: "https://www.udemy.com/"
  },
  {
    id: 4,
    name: "Node.js - Advanced Concepts",
    issuer: "Udemy",
    date: "2021",
    url: "https://www.udemy.com/"
  }
];

// Configuration EmailJS
export const emailJsConfig = {
  serviceId: "YOUR_SERVICE_ID", // À remplacer
  templateId: "YOUR_TEMPLATE_ID", // À remplacer
  publicKey: "YOUR_PUBLIC_KEY" // À remplacer
};
