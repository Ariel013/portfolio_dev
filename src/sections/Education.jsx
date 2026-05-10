import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCalendar, FaUniversity } from 'react-icons/fa';
import { education } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

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
            {education.map((edu) => {
              const translated = t.education.items[edu.id] || {};
              return (
                <motion.div
                  key={edu.id}
                  variants={item}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                >
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-primary-light/10 to-accent-light/10 rounded-2xl">
                      <FaGraduationCap className="w-10 h-10 text-primary-light" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {translated.degree || edu.degree}
                  </h3>

                  <div className="flex items-center gap-2 text-primary-light font-semibold mb-2">
                    <FaUniversity className="w-4 h-4" />
                    <span>{edu.school}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                    <FaCalendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>

                  {edu.grade && (
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-light/20 to-accent-light/20 text-primary-light font-semibold rounded-full">
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
