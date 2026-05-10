import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCalendar, FaUniversity } from 'react-icons/fa';
import { education } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

// Couleur distincte par diplôme
const eduTheme = [
  {
    gradient: 'from-violet-500/8 to-indigo-500/8 dark:from-violet-900/20 dark:to-indigo-900/20',
    border: 'border-violet-100 dark:border-violet-800/30 hover:border-violet-300 dark:hover:border-violet-600/50',
    iconWrap: 'from-violet-500/15 to-indigo-500/15',
    iconColor: 'text-violet-500 dark:text-violet-400',
    schoolColor: 'text-violet-600 dark:text-violet-400',
    dot: 'bg-violet-500',
    shadow: 'hover:shadow-violet-500/10',
  },
  {
    gradient: 'from-blue-500/8 to-sky-500/8 dark:from-blue-900/20 dark:to-sky-900/20',
    border: 'border-blue-100 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-600/50',
    iconWrap: 'from-blue-500/15 to-sky-500/15',
    iconColor: 'text-blue-500 dark:text-blue-400',
    schoolColor: 'text-blue-600 dark:text-blue-400',
    dot: 'bg-blue-500',
    shadow: 'hover:shadow-blue-500/10',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const item = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={item} className="mb-16">
            <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">
              {t.education.tag}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.education.title}
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
              {t.education.subtitle}
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => {
              const translated = t.education.items[edu.id] || {};
              const theme = eduTheme[index] || eduTheme[0];

              return (
                <motion.div
                  key={edu.id}
                  variants={item}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-gradient-to-br ${theme.gradient} rounded-2xl p-8 shadow-md hover:shadow-xl ${theme.shadow} transition-all duration-300 border ${theme.border}`}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${theme.iconWrap} rounded-2xl`}>
                      <FaGraduationCap className={`w-10 h-10 ${theme.iconColor}`} />
                    </div>
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                    {translated.degree || edu.degree}
                  </h3>

                  {/* School */}
                  <div className={`flex items-center gap-2 font-semibold mb-2 ${theme.schoolColor}`}>
                    <FaUniversity className="w-4 h-4 flex-shrink-0" />
                    <span>{edu.school}</span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <FaCalendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>

                  {edu.grade && (
                    <div className={`mt-4 inline-block px-4 py-1.5 bg-gradient-to-r ${theme.iconWrap} font-semibold rounded-full text-sm ${theme.schoolColor}`}>
                      {edu.grade}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
