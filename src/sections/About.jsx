import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLinkedin, FaCode, FaChalkboardTeacher, FaShieldAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

// Chaque highlight a sa propre identité chromatique
const highlightThemes = [
  {
    icon: FaCode,
    bg: 'bg-violet-50 dark:bg-violet-900/20',
    border: 'border-violet-100 dark:border-violet-800/30',
    iconWrap: 'bg-gradient-to-br from-violet-500/15 to-indigo-500/15',
    iconColor: 'text-violet-500 dark:text-violet-400',
    dot: 'bg-violet-500',
  },
  {
    icon: FaChalkboardTeacher,
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-100 dark:border-amber-800/30',
    iconWrap: 'bg-gradient-to-br from-amber-500/15 to-yellow-500/15',
    iconColor: 'text-amber-500 dark:text-amber-400',
    dot: 'bg-amber-500',
  },
  {
    icon: FaShieldAlt,
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    border: 'border-rose-100 dark:border-rose-800/30',
    iconWrap: 'bg-gradient-to-br from-rose-500/15 to-red-500/15',
    iconColor: 'text-rose-500 dark:text-rose-400',
    dot: 'bg-rose-500',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55 } },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={item} className="mb-16">
            <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">
              {t.about.tag}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {t.about.title}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: image + stats */}
            <motion.div variants={item} className="space-y-8">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-accent-light/20 rounded-3xl transform rotate-3 scale-105" />
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                />
              </div>

              {/* Stats — chacun avec sa propre teinte */}
              <div className="grid grid-cols-3 gap-4">
                {t.about.stats.map((s, i) => {
                  const colors = [
                    'from-violet-500 to-indigo-500',
                    'from-amber-500 to-orange-400',
                    'from-rose-500 to-pink-400',
                  ];
                  const borders = [
                    'border-violet-100 dark:border-violet-800/30',
                    'border-amber-100 dark:border-amber-800/30',
                    'border-rose-100 dark:border-rose-800/30',
                  ];
                  return (
                    <div
                      key={s.label}
                      className={`text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border ${borders[i]}`}
                    >
                      <div className={`text-3xl font-bold bg-gradient-to-r ${colors[i]} bg-clip-text text-transparent mb-1`}>
                        {s.value}
                      </div>
                      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 leading-tight">
                        {s.label}
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{s.sub}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: text + highlights + CTA */}
            <motion.div variants={item} className="space-y-8">
              <div className="space-y-4">
                {t.about.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Highlights — couleur différente par bloc */}
              <div className="space-y-3 pt-2">
                {t.about.highlights.map(({ title, text }, i) => {
                  const theme = highlightThemes[i];
                  const Icon = theme.icon;
                  return (
                    <div
                      key={title}
                      className={`flex gap-4 p-4 rounded-2xl ${theme.bg} border ${theme.border} transition-all duration-200`}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl ${theme.iconWrap}`}>
                        <Icon className={`w-5 h-5 ${theme.iconColor}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} flex-shrink-0`} />
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{title}</span>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* LinkedIn CTA */}
              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-light to-accent-light text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
                {t.about.linkedin_cta}
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
