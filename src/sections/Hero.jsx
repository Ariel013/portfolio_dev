import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-light/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent-light rounded-full blur-xl opacity-50"></div>
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title with Typing Effect */}
          <motion.div variants={itemVariants} className="mb-6">
            <TypeAnimation
              sequence={[
                personalInfo.title,
                2000,
                'Créateur d\'expériences web modernes',
                2000,
                'Expert en développement Full Stack',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent"
              repeat={Infinity}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-light to-primary-dark text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaDownload />
              Télécharger CV
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-primary-light border-2 border-primary-light rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaEnvelope />
              Me Contacter
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
