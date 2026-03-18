import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const About = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
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
              À Propos de Moi
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent-light mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-accent-light/20 rounded-2xl transform rotate-6"></div>
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-6 -right-6 w-24 h-24 border-4 border-primary-light/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-accent-light/30 rounded-full"
              />
            </motion.div>

            {/* Content Side */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                {personalInfo.about.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={itemVariants}
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* LinkedIn Link */}
              <motion.div
                variants={itemVariants}
                className="pt-6"
              >
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-light to-accent-light text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <FaLinkedin className="w-5 h-5" />
                  Connectons-nous sur LinkedIn
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-light mb-2">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-light mb-2">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-light mb-2">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client satisfait</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
