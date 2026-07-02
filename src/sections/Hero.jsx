import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaDownload, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const stackPills = [
  { label: 'Node.js', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
  { label: 'React', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
  { label: 'MongoDB', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
  { label: 'Next.js', color: 'bg-gray-500/10 text-gray-700 dark:text-gray-300 border-gray-500/20' },
  { label: 'Docker', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900 pt-16"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #4F46E5 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/8 dark:bg-indigo-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/6 dark:bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left: text */}
          <motion.div variants={container} initial="hidden" animate="visible">

            {/* Available badge */}
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {t.hero.available}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 leading-none"
            >
              {personalInfo.name.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
                {personalInfo.name.split(' ').slice(2).join(' ')}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={item} className="text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-6">
              {t.hero.subtitle}
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-lg"
            >
              {t.hero.tagline}
            </motion.p>

            {/* CTA */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-light to-accent-light text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300"
              >
                {t.hero.cta_contact}
                <FaArrowRight className="w-3.5 h-3.5" />
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:border-primary-light dark:hover:border-primary-light hover:text-primary-light dark:hover:text-primary-light transition-all duration-300 shadow-sm"
              >
                <FaDownload className="w-3.5 h-3.5" />
                {t.hero.cta_cv}
              </motion.a>
            </motion.div>

            {/* Social + Stack */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <motion.a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-light hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-light hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
              </div>

              <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />

              <div className="flex flex-wrap gap-2">
                {stackPills.map((pill) => (
                  <span
                    key={pill.label}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md border ${pill.color}`}
                  >
                    {pill.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-indigo-300/40 dark:border-indigo-700/40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 to-accent-light/30 rounded-full blur-2xl" />
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-primary-light to-accent-light shadow-2xl shadow-indigo-500/20">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating XP badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-6 top-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 shadow-xl shadow-black/5"
              >
                {/* <div className="text-2xl font-bold text-gray-900 dark:text-white leading-none">2+</div> */}
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {t.about.stats[0].sub}
                </div>
              </motion.div>

              {/* Floating projects badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-8 bottom-10 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 shadow-xl shadow-black/5"
              >
                {/* <div className="text-2xl font-bold text-gray-900 dark:text-white leading-none">5+</div> */}
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {t.about.stats[1].sub}
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
