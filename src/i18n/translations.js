export const translations = {
  fr: {
    // ── Navbar ───────────────────────────────────────────────────
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expériences',
      projects: 'Projets',
      contact: 'Contact',
      cta: 'Me contacter',
    },

    // ── Hero ─────────────────────────────────────────────────────
    hero: {
      available: 'Disponible pour de nouvelles opportunités',
      subtitle: 'Développeur Full Stack · Backend-first',
      tagline:
        "Je conçois des APIs robustes et des interfaces qui performent, du backend Node.js jusqu'au frontend React.",
      cta_contact: 'Me contacter',
      cta_cv: 'Télécharger CV',
    },

    // ── About ────────────────────────────────────────────────────
    about: {
      tag: 'Qui suis-je ?',
      title: 'À propos de moi',
      stats: [
        { value: '2+', label: "Années d'expérience", sub: 'en production' },
        { value: '5+', label: 'Projets livrés', sub: 'fullstack & IA' },
        { value: '3', label: 'Domaines maîtrisés', sub: 'Web · Sécu · IA' },
      ],
      paragraphs: [
        "Développeur Full Stack avec une préférence marquée pour le backend (Node.js, architecture MERN), je conçois des applications web robustes et performantes orientées vers la résolution de vrais problèmes.",
        "Accompagnateur à EPITECH, j'accompagne des étudiants en Data/IA et bonnes pratiques logicielles, alliant technique et pédagogie.",
        "Curieux par nature, je m'investis également dans la cybersécurité et l'intelligence artificielle, deux domaines qui enrichissent ma vision du développement logiciel.",
      ],
      highlights: [
        {
          title: 'Développeur Backend-first',
          text: "Node.js, Express, architecture MERN — je conçois des APIs robustes orientées scalabilité.",
        },
        {
          title: 'Pédagogue & Mentor',
          text: "Accompagnateur Epitech : revues de code, modules de formation Data/IA, mentorat technique.",
        },
        {
          title: 'Curiosité Cyber & IA',
          text: "Analyste cybersécurité certifié (CAP/CNSP), je nourris aussi ma vision avec l'intelligence artificielle.",
        },
      ],
      linkedin_cta: 'Connectons-nous sur LinkedIn',
    },

    // ── Skills ───────────────────────────────────────────────────
    skills: {
      tag: 'Stack technique',
      title: 'Mes compétences',
      subtitle:
        "Technologies que j'utilise pour concevoir des applications robustes, de l'API jusqu'à l'interface.",
      categories: {
        Frontend: { label: 'Frontend', description: 'Interfaces & expériences utilisateur' },
        Backend: { label: 'Backend', description: 'APIs, bases de données & architecture serveur' },
        Outils: { label: 'Outils & DevOps', description: 'Environnement de développement & infrastructure' },
      },
    },

    // ── Experience ───────────────────────────────────────────────
    experience: {
      tag: 'Parcours professionnel',
      title: 'Mon Parcours',
      subtitle: 'Mon évolution professionnelle et mes expériences+6',
      items: {
        1: {
          position: 'Accompagnateur Pédagogique Epitech',
          description: [
            'Conception de supports et animation de modules de formation',
            'Suivi pédagogique et évaluation de la progression',
            'Revue de code, assistance technique et mentorat',
            "Développement d'outils internes améliorant les processus pédagogiques et organisationnels avec MongoDB, Express, React et Node.js",
            'Formation et accompagnement d\'étudiants en développement web fullstack et bonnes pratiques logicielles',
            "Création de tutoriels techniques, ateliers et ressources d'apprentissage en ingénierie logicielle",
            'Supervision du réseau et résolution des incidents techniques',
            "Administration de système de contrôle d'accès (badgeuse, gestion des utilisateurs)",
            'Configuration, maintenance et optimisation de l\'infrastructure réseau (LAN, Wi-Fi, équipements)',
          ],
        },
        2: {
          position: 'Formateur Automatisation No.Code',
          description: [
            "Conception et animation d'un bootcamp d'automatisation no-code (Zapier + Baserow) pour une vingtaine de PMs juniors",
            "Création de cas pratiques métier : automatisation de flux de données, synchronisation d'applications, gestion d'emails et de notifications",
          ],
        },
        3: {
          position: 'Analyste Cybersécurité',
          description: [
            'Réalisation de tests d\'intrusion sur applications web',
            'Rédaction de bulletins d\'alerte et de rapports SOC',
            'Monitoring d\'outils de surveillance (FortiSIEM)',
            'Veille de vulnérabilités',
            "Formation d'initiation à la cybersécurité à un public cible",
          ],
        },
        4: {
          position: 'Technicien Réseaux',
          description: [
            "Installation de systèmes d'exploitation",
            "Gestion et configuration d'équipements réseau",
            'Câblage réseau',
            "Configuration et Mise en place d'un proxy cache (Artica Proxy) pour le contrôle des utilisateurs.",
          ],
        },
      },
    },

    // ── Projects ─────────────────────────────────────────────────
    projects: {
      tag: 'Réalisations',
      title: 'Mes Projets',
      // subtitle: 'Découvrez une sélection de mes réalisations récentes',
      filter_all: 'Tous',
      filter_featured: 'Favoris',
      view_project: 'Voir le projet',
      view_github: 'GitHub',
      click_hint: 'Cliquer pour les détails',
      no_projects: 'Aucun projet à afficher.',
      items: {
        1: {
          title: 'Bluelock',
          description:
            "Plateforme de challenges CTF développée pour EPITECH Bénin, inspirée de HackTheBox. Elle intègre un système de score, un classement, la création de challenges personnalisés et une interface d'administration. Les règles du jeu sont inspirées du manga Blue Lock afin de rendre l'expérience plus immersive et originale.",
        },
        2: {
          title: 'RAG RH Assistant',
          description:
            "Chatbot basé sur la méthode RAG (Retriever-Augmented Generation) pour répondre aux questions courantes des employés concernant les ressources humaines (politiques internes, avantages, congés, etc.). Ce système utilise un modèle d'IA pour récupérer des informations pertinentes et générer des réponses précises, automatisant ainsi les tâches RH et optimisant l'expérience des collaborateurs.",
        },
        3: {
          title: 'Hemosafe',
          description:
            "Conception et développement d'une application e-santé pour la gestion des demandes de transfusions sanguines dans les hôpitaux béninois.",
        },
        4: {
          title: 'Dashboard',
          description:
            "Développement collaboratif d'un système interne de suivi académique à EPITECH Bénin (structuration et backend).",
        },
        5: {
          title: 'United Kizdom World Congres',
          description:
            "Une plateforme internationale dédiée au rayonnement des danses afro-latines, au travers d'un congrès à Cotonou avec intégration de moyen de paiement.",
        },
      },
    },

    // ── Education ────────────────────────────────────────────────
    education: {
      tag: 'Formation',
      title: 'Mon Parcours Académique',
      // subtitle: 'Mon parcours académique et mes diplômes',
      items: {
        1: { degree: 'Certificat concepteur développeur Web et Mobile (RNCP Niveau 5)' },
        2: { degree: 'Licence en Informatique, Réseaux et Télécommunications' },
      },
    },

    // ── Certifications ───────────────────────────────────────────
    certifications: {
      tag: 'Certifications',
      title: 'Certifications',
      // subtitle: 'Mes certifications professionnelles et formations continues',
      click_hint: 'Cliquer pour les détails',
      modal: {
        issuer: 'Organisme',
        year: 'Année',
        status: 'Statut',
        obtained: 'Obtenue',
        view_link: 'Voir la certification',
        no_link: 'Lien de vérification non disponible',
      },
    },

    // ── Contact ──────────────────────────────────────────────────
    contact: {
      tag: 'Contact',
      title: 'Contactez-moi',
      subtitle: "Une question ? Un projet ? N'hésitez pas à me contacter !",
      info_title: 'Informations de Contact',
      email_label: 'Email',
      location_label: 'Localisation',
      phone_label: 'Téléphone',
      whatsapp_label: 'WhatsApp',
      whatsapp_sub: 'Discutons directement !',
      follow_title: 'Suivez-moi',
      whatsapp_msg: 'Bonjour {{name}}, je vous contacte depuis votre portfolio.',
      form: {
        name: 'Nom complet',
        name_placeholder: 'John Doe',
        email: 'Email',
        email_placeholder: 'john.doe@example.com',
        subject: 'Sujet',
        subject_placeholder: 'Objet de votre message',
        message: 'Message',
        message_placeholder: 'Votre message...',
        submit: 'Envoyer le message',
        submitting: 'Envoi en cours...',
        success: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
        error_fields: 'Veuillez remplir tous les champs.',
        error_send: 'Une erreur est survenue. Réessayez ou contactez-moi directement par email.',
      },
    },

    // ── Footer ───────────────────────────────────────────────────
    footer: {
      quick_links: 'Liens Rapides',
      contact: 'Contact',
      made_with: 'Fait avec',
      and: 'et React',
      links: [
        { label: 'Accueil', href: '#home' },
        { label: 'À propos', href: '#about' },
        { label: 'Projets', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  },

  // ════════════════════════════════════════════════════════════
  en: {
    // ── Navbar ───────────────────────────────────────────────────
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      cta: 'Contact me',
    },

    // ── Hero ─────────────────────────────────────────────────────
    hero: {
      available: 'Available for new opportunities',
      subtitle: 'Full Stack Developer · Backend-first',
      tagline:
        'I build robust APIs and high-performance interfaces — from Node.js backend to React frontend.',
      cta_contact: 'Contact me',
      cta_cv: 'Download Resume',
    },

    // ── About ────────────────────────────────────────────────────
    about: {
      tag: 'Who am I',
      title: 'About me',
      stats: [
        { value: '2+', label: 'Years of experience', sub: 'in production' },
        { value: '5+', label: 'Projects delivered', sub: 'fullstack & AI' },
        { value: '3', label: 'Fields mastered', sub: 'Web · Sec · AI' },
      ],
      paragraphs: [
        "Full Stack Developer with a strong backend focus (Node.js, MERN architecture), I build robust and performant web applications aimed at solving real-world problems.",
        "As a Teaching Assistant at EPITECH, I support students in Data/AI and software best practices, combining technical expertise with pedagogy.",
        "Naturally curious, I also invest in cybersecurity and artificial intelligence — two fields that enrich my vision of software development.",
      ],
      highlights: [
        {
          title: 'Backend-first Developer',
          text: 'Node.js, Express, MERN architecture — I design robust, scalable APIs.',
        },
        {
          title: 'Educator & Mentor',
          text: 'EPITECH Teaching Assistant: code reviews, Data/AI training modules, technical mentoring.',
        },
        {
          title: 'Cyber & AI Curiosity',
          text: 'Certified security analyst (CAP/CNSP), I also explore artificial intelligence to broaden my engineering vision.',
        },
      ],
      linkedin_cta: 'Connect on LinkedIn',
    },

    // ── Skills ───────────────────────────────────────────────────
    skills: {
      tag: 'Tech stack',
      title: 'My skills',
      subtitle:
        'Technologies I use to build robust applications, from the API layer to the interface.',
      categories: {
        Frontend: { label: 'Frontend', description: 'Interfaces & user experiences' },
        Backend: { label: 'Backend', description: 'APIs, databases & server architecture' },
        Outils: { label: 'Tools & DevOps', description: 'Development environment & infrastructure' },
      },
    },

    // ── Experience ───────────────────────────────────────────────
    experience: {
      tag: 'Career',
      title: 'My Journey',
      subtitle: 'My professional evolution and enriching experiences',
      items: {
        1: {
          position: 'Teaching Assistant at EPITECH',
          description: [
            'Design of training materials and facilitation of educational modules',
            'Academic monitoring and progress evaluation',
            'Code reviews, technical assistance and mentoring',
            'Development of internal tools improving pedagogical and organizational processes with MongoDB, Express, React and Node.js',
            'Training and mentoring students in fullstack web development and software best practices',
            'Creation of technical tutorials, workshops and learning resources in software engineering',
            'Network supervision and technical incident resolution',
            'Administration of access control systems (badge readers, user management)',
            'Configuration, maintenance and optimization of network infrastructure (LAN, Wi-Fi, equipment)',
          ],
        },
        2: {
          position: 'No-Code Automation Trainer',
          description: [
            'Design and facilitation of a no-code automation bootcamp (Zapier + Baserow) for around twenty junior PMs',
            'Creation of practical business use cases: data flow automation, application synchronization, email and notification management',
          ],
        },
        3: {
          position: 'Cybersecurity Analyst',
          description: [
            'Penetration testing on web applications',
            'Writing security bulletins and SOC reports',
            'Monitoring surveillance tools (FortiSIEM)',
            'Vulnerability watch',
            'Cybersecurity introduction training for target audiences',
          ],
        },
        4: {
          position: 'Network Technician',
          description: [
            'Operating system installation',
            'Management and configuration of network equipment',
            'Network cabling',
            'Configuration and deployment of a proxy cache (Artica Proxy) for user control',
          ],
        },
      },
    },

    // ── Projects ─────────────────────────────────────────────────
    projects: {
      tag: 'Work',
      title: 'My Projects',
      subtitle: 'A selection of my recent work',
      filter_all: 'All',
      filter_featured: 'Featured',
      view_project: 'View project',
      view_github: 'GitHub',
      click_hint: 'Click for details',
      no_projects: 'No projects to display.',
      items: {
        1: {
          title: 'Bluelock',
          description:
            'CTF challenge platform developed for EPITECH Benin, inspired by HackTheBox. It features a scoring system, leaderboard, custom challenge creation and an admin interface. Game rules inspired by the Blue Lock manga for a more immersive experience.',
        },
        2: {
          title: 'RAG HR Assistant',
          description:
            'Chatbot based on the RAG (Retriever-Augmented Generation) method to answer common employee questions about HR topics (internal policies, benefits, leave, etc.). The system uses an AI model to retrieve relevant information and generate accurate responses, automating HR tasks and optimizing the employee experience.',
        },
        3: {
          title: 'Hemosafe',
          description:
            'Design and development of an e-health application for managing blood transfusion requests in Beninese hospitals.',
        },
        4: {
          title: 'Dashboard',
          description:
            'Collaborative development of an internal academic tracking system at EPITECH Benin (data structuring and backend).',
        },
        5: {
          title: 'United Kizdom World Congress',
          description:
            'An international platform dedicated to promoting Afro-Latin dances through a congress in Cotonou, featuring integrated payment processing.',
        },
      },
    },

    // ── Education ────────────────────────────────────────────────
    education: {
      tag: 'Education',
      title: 'Academic Background',
      subtitle: 'My academic journey and degrees',
      items: {
        1: { degree: 'Certificate in Web & Mobile Application Design and Development (RNCP Level 5)' },
        2: { degree: "Bachelor's Degree in Computer Science, Networks and Telecommunications" },
      },
    },

    // ── Certifications ───────────────────────────────────────────
    certifications: {
      tag: 'Certifications',
      title: 'Certifications',
      subtitle: 'My professional certifications and continuing education',
      click_hint: 'Click for details',
      modal: {
        issuer: 'Issuer',
        year: 'Year',
        status: 'Status',
        obtained: 'Earned',
        view_link: 'View certification',
        no_link: 'Verification link not available',
      },
    },

    // ── Contact ──────────────────────────────────────────────────
    contact: {
      tag: 'Get in touch',
      title: 'Contact me',
      subtitle: 'A question? A project? Feel free to reach out!',
      info_title: 'Contact Information',
      email_label: 'Email',
      location_label: 'Location',
      phone_label: 'Phone',
      whatsapp_label: 'WhatsApp',
      whatsapp_sub: "Let's chat directly!",
      follow_title: 'Follow me',
      whatsapp_msg: 'Hello {{name}}, I am contacting you from your portfolio.',
      form: {
        name: 'Full name',
        name_placeholder: 'John Doe',
        email: 'Email',
        email_placeholder: 'john.doe@example.com',
        subject: 'Subject',
        subject_placeholder: 'Subject of your message',
        message: 'Message',
        message_placeholder: 'Your message...',
        submit: 'Send message',
        submitting: 'Sending...',
        success: 'Message sent successfully! I will get back to you soon.',
        error_fields: 'Please fill in all fields.',
        error_send: 'An error occurred. Please try again or contact me directly by email.',
      },
    },

    // ── Footer ───────────────────────────────────────────────────
    footer: {
      quick_links: 'Quick Links',
      contact: 'Contact',
      made_with: 'Made with',
      and: 'and React',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  },
};
