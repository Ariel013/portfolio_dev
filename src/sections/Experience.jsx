import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Mon Parcours
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent-light mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Mon évolution professionnelle et mes expériences enrichissantes
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-light via-accent-light to-primary-dark"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-6 h-6 bg-white dark:bg-gray-900 border-4 border-primary-light rounded-full z-10"
                    >
                      <div className="absolute inset-0 bg-primary-light rounded-full animate-ping opacity-75"></div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`flex-1 ${
                      index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-left">
                      {/* Company & Position */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-light font-semibold mb-3">
                          <FaBriefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <FaCalendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-primary-light mt-1">▪</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {(exp.technologies || []).map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-light/10 to-accent-light/10 text-primary-light rounded-full border border-primary-light/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
