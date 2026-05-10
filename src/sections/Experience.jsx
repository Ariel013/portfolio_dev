import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { experiences } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

// Couleur propre par expérience : dev/pédagogie = violet, cyber = rose, réseau = sky
const expTheme = {
  1: {
    dot: 'border-violet-400 shadow-violet-500/30',
    tag: 'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-800/40',
    company: 'text-violet-600 dark:text-violet-400',
    cardBorder: 'border-violet-100 dark:border-violet-800/30',
    cardAccent: 'from-violet-500/5 to-indigo-500/5',
    label: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300',
  },
  2: {
    dot: 'border-rose-400 shadow-rose-500/30',
    tag: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-800/40',
    company: 'text-rose-600 dark:text-rose-400',
    cardBorder: 'border-rose-100 dark:border-rose-800/30',
    cardAccent: 'from-rose-500/5 to-red-500/5',
    label: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300',
  },
  3: {
    dot: 'border-sky-400 shadow-sky-500/30',
    tag: 'bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-800/40',
    company: 'text-sky-600 dark:text-sky-400',
    cardBorder: 'border-sky-100 dark:border-sky-800/30',
    cardAccent: 'from-sky-500/5 to-blue-500/5',
    label: 'bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-300',
  },
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">
            {t.experience.tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experience.title}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Scrollable container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 overflow-hidden"
        >
          {/* Fade top */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 z-10 bg-gradient-to-b from-gray-50 dark:from-gray-800/40 to-transparent" />
          {/* Fade bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 z-10 bg-gradient-to-t from-gray-50 dark:from-gray-800/40 to-transparent" />

          <div className="overflow-y-auto px-6 py-6" style={{ maxHeight: '560px' }}>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-violet-400 via-rose-400 to-sky-400 rounded-full" />

              <div className="space-y-6 pl-12">
                {experiences.map((exp, index) => {
                  const tr = t.experience.items[exp.id] || {};
                  const theme = expTheme[exp.id] || expTheme[1];

                  return (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.45, delay: 0.2 + index * 0.12 }}
                      className="relative"
                    >
                      {/* Timeline dot — couleur de l'expérience */}
                      <div className="absolute -left-[2.35rem] top-5 flex items-center justify-center">
                        <div className={`w-3.5 h-3.5 rounded-full bg-white dark:bg-gray-900 border-2 ${theme.dot} shadow-sm`} />
                      </div>

                      {/* Card */}
                      <div className={`bg-gradient-to-br ${theme.cardAccent} bg-white dark:bg-gray-800 rounded-2xl border ${theme.cardBorder} p-5 shadow-sm hover:shadow-md transition-shadow duration-300`}>

                        {/* Top row */}
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                              {tr.position || exp.position}
                            </h3>
                            <div className={`flex items-center gap-1.5 font-semibold text-sm mt-1 ${theme.company}`}>
                              <FaBriefcase className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>{exp.company}</span>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-1 text-xs text-gray-500 dark:text-gray-400 shrink-0">
                            <div className="flex items-center gap-1.5">
                              <FaCalendar className="w-3 h-3" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <FaMapMarkerAlt className="w-3 h-3" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-1.5 mb-4">
                          {(tr.description || exp.description).map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <span className={`mt-0.5 flex-shrink-0 text-xs ${theme.company}`}>▪</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        {exp.technologies?.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech, i) => (
                              <span key={i} className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${theme.tag}`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
