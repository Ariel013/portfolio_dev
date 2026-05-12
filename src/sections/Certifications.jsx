import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaExternalLinkAlt, FaShieldAlt, FaChevronLeft, FaChevronRight, FaTimes, FaCheckCircle } from 'react-icons/fa';
import { SiPostman, SiFortinet } from 'react-icons/si';
import { certifications } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const issuerMap = {
  'SecOps Group': {
    // icon: FaShieldAlt,
    // iconColor: 'text-red-500',
    img: '',
    bg: 'from-red-500/12 to-rose-500/12 dark:from-red-900/30 dark:to-rose-900/30',
    border: 'border-red-200 dark:border-red-800/40',
    glow: 'shadow-red-500/15',
    badge: 'bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300',
    dot: 'bg-red-500',
    iconWrap: 'from-red-500/20 to-rose-500/20',
    iconLarge: 'text-red-400/50 dark:text-red-600/30',
  },
  'Postman': {
    icon: SiPostman,
    iconColor: 'text-orange-500',
    bg: 'from-orange-500/12 to-amber-500/12 dark:from-orange-900/30 dark:to-amber-900/30',
    border: 'border-orange-200 dark:border-orange-800/40',
    glow: 'shadow-orange-500/15',
    badge: 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300',
    dot: 'bg-orange-500',
    iconWrap: 'from-orange-500/20 to-amber-500/20',
    iconLarge: 'text-orange-400/50 dark:text-orange-600/30',
  },
  'Fortinet': {
    icon: SiFortinet,
    iconColor: 'text-red-600',
    bg: 'from-red-700/12 to-red-400/12 dark:from-red-900/30 dark:to-red-900/20',
    border: 'border-red-200 dark:border-red-800/40',
    glow: 'shadow-red-600/15',
    badge: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300',
    dot: 'bg-red-600',
    iconWrap: 'from-red-700/20 to-red-400/20',
    iconLarge: 'text-red-500/40 dark:text-red-700/30',
  },
  'CodinGame': {
    img: 'https://res.cloudinary.com/dywgshhwp/image/upload/v1778554012/codingame_rnjttu.png',
    bg: 'from-green-500/12 to-emerald-500/12 dark:from-green-900/30 dark:to-emerald-900/30',
    border: 'border-green-200 dark:border-green-800/40',
    glow: 'shadow-green-500/15',
    badge: 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300',
    dot: 'bg-green-500',
    iconWrap: 'from-green-500/20 to-emerald-500/20',
    iconLarge: 'text-green-400/50 dark:text-green-600/30',
  },
  'GoMyCode': {
    img: 'https://res.cloudinary.com/dywgshhwp/image/upload/v1778556543/gomycode_v62qew.png',
    bg: 'from-orange-400/12 to-yellow-500/12 dark:from-orange-900/30 dark:to-yellow-900/30',
    border: 'border-orange-200 dark:border-orange-800/40',
    glow: 'shadow-orange-400/15',
    badge: 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300',
    dot: 'bg-orange-400',
    iconWrap: 'from-orange-400/20 to-yellow-500/20',
    iconLarge: 'text-orange-400/50 dark:text-orange-600/30',
  },
  'Duolingo': {
    img: 'https://res.cloudinary.com/dywgshhwp/image/upload/v1778554792/duolingo_mwtcsn.png',
    bg: 'from-green-400/12 to-lime-500/12 dark:from-green-900/30 dark:to-lime-900/30',
    border: 'border-green-200 dark:border-green-800/40',
    glow: 'shadow-green-400/15',
    badge: 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300',
    dot: 'bg-green-400',
    iconWrap: 'from-green-400/20 to-lime-500/20',
    iconLarge: 'text-green-400/50 dark:text-green-600/30',
  },
};

const defaultTheme = {
  icon: FaShieldAlt,
  iconColor: 'text-indigo-500',
  bg: 'from-indigo-500/12 to-violet-500/12 dark:from-indigo-900/30 dark:to-violet-900/30',
  border: 'border-indigo-200 dark:border-indigo-800/40',
  glow: 'shadow-indigo-500/15',
  badge: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300',
  dot: 'bg-indigo-500',
  iconWrap: 'from-indigo-500/20 to-violet-500/20',
  iconLarge: 'text-indigo-400/50 dark:text-indigo-600/30',
};

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 120 : -120 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -120 : 120 }),
};

// image = image spécifique à la certif (priorité), sinon image/icône de l'issuer
const CertIcon = ({ issuer, image, size = 'w-10 h-10', className = '' }) => {
  if (image) return <img src={image} alt={issuer} className={`${size} object-contain ${className}`} />;
  const mapping = issuerMap[issuer];
  if (mapping?.img) return <img src={mapping.img} alt={issuer} className={`${size} object-contain ${className}`} />;
  const Icon = mapping?.icon || FaShieldAlt;
  const color = mapping?.iconColor || 'text-primary-light';
  return <Icon className={`${size} ${color} ${className}`} />;
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedCert, setSelectedCert] = useState(null);
  const { t } = useLanguage();

  const prev = () => { setDirection(-1); setCurrentIndex((i) => (i === 0 ? certifications.length - 1 : i - 1)); };
  const next = () => { setDirection(1); setCurrentIndex((i) => (i === certifications.length - 1 ? 0 : i + 1)); };

  const cert = certifications[currentIndex];
  const theme = issuerMap[cert.issuer] || defaultTheme;
  const IconComponent = theme.icon;

  return (
    <>
      <section
        id="certifications"
        ref={ref}
        className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">
              {t.certifications.tag}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.certifications.title}
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
              {t.certifications.subtitle}
            </p>
          </motion.div>

          {/* Carousel — card centrée */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden w-[420px] shadow-2xl" style={{ height: '220px', position: 'relative' }}>
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={cert.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                  onClick={() => setSelectedCert(cert)}
                  className={`absolute inset-0 cursor-pointer bg-gradient-to-br ${theme.bg} border ${theme.border} flex flex-col justify-between p-6 group`}
                >
                  {/* Shine au hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)' }}
                  />

                  {/* Counter top-right */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${theme.dot}`} />
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        {cert.issuer}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-medium tabular-nums">
                      {currentIndex + 1} / {certifications.length}
                    </span>
                  </div>

                  {/* Logo + nom */}
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 p-3.5 bg-gradient-to-br ${theme.iconWrap} rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      <CertIcon issuer={cert.issuer} image={cert.image} size="w-14 h-14" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                      {cert.name}
                    </h3>
                  </div>

                  {/* Footer : date + hint */}
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 text-xs font-bold rounded-xl ${theme.badge}`}>
                      {cert.date}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                      {cert.url && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      )}
                      <span className="italic">{t.certifications.click_hint}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Flèches + dots sous la card */}
          <div className="flex justify-center items-center gap-4 mt-5">
            <button
              onClick={prev}
              className="p-2.5 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary-light transition-all duration-200 hover:scale-110"
              aria-label="Previous"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {certifications.map((c, i) => {
                const th = issuerMap[c.issuer] || defaultTheme;
                return (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                    className={`rounded-full transition-all duration-250 ${
                      i === currentIndex
                        ? `w-7 h-2.5 ${th.dot}`
                        : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    aria-label={`Certif ${i + 1}`}
                  />
                );
              })}
            </div>

            <button
              onClick={next}
              className="p-2.5 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary-light transition-all duration-200 hover:scale-110"
              aria-label="Next"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (() => {
          const mTheme = issuerMap[selectedCert.issuer] || defaultTheme;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.88, opacity: 0, y: 16 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: 16 }}
                transition={{ duration: 0.26, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
              >
                {/* Header teinté + grande icône centrée */}
                <div className={`p-8 bg-gradient-to-br ${mTheme.bg} border-b ${mTheme.border} flex flex-col items-center text-center`}>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-white/60 dark:hover:bg-gray-700 transition-colors"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>

                  <div className={`p-5 bg-gradient-to-br ${mTheme.iconWrap} rounded-3xl mb-4 shadow-lg`}>
                    <CertIcon issuer={selectedCert.issuer} image={selectedCert.image} size="w-16 h-16" />
                  </div>

                  <span className={`text-xs font-bold uppercase tracking-widest mb-2 ${mTheme.badge.split(' ').filter(c => c.startsWith('text')).join(' ')}`}>
                    {selectedCert.issuer}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
                    {selectedCert.name}
                  </h3>
                </div>

                {/* Details */}
                <div className="px-6 py-2">
                  {[
                    { label: t.certifications.modal.issuer, value: selectedCert.issuer },
                    { label: t.certifications.modal.year, value: selectedCert.date },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-3.5 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{value}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between py-3.5">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{t.certifications.modal.status}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-3 py-1.5 rounded-full">
                      <FaCheckCircle className="w-3 h-3" />
                      {t.certifications.modal.obtained}
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  {selectedCert.url ? (
                    <a
                      href={selectedCert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-primary-light to-accent-light text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20 text-sm"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      {t.certifications.modal.view_link}
                    </a>
                  ) : (
                    <p className="text-center text-sm text-gray-400 dark:text-gray-500 italic py-2">
                      {t.certifications.modal.no_link}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </>
  );
};

export default Certifications;
