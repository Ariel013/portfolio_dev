import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaExternalLinkAlt, FaShieldAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { SiPostman, SiFortinet } from 'react-icons/si';
import { certifications } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

// Icône + couleur + thème chromatique par issuer
const issuerMap = {
  'SecOps Group': {
    icon: FaShieldAlt,
    iconColor: 'text-red-500',
    bg: 'from-red-500/8 to-rose-500/8 dark:from-red-900/20 dark:to-rose-900/20',
    border: 'border-red-100 dark:border-red-800/30',
    glow: 'shadow-red-500/10',
    badge: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    dot: 'bg-red-500',
    iconWrap: 'from-red-500/15 to-rose-500/15',
  },
  'Postman': {
    icon: SiPostman,
    iconColor: 'text-orange-500',
    bg: 'from-orange-500/8 to-amber-500/8 dark:from-orange-900/20 dark:to-amber-900/20',
    border: 'border-orange-100 dark:border-orange-800/30',
    glow: 'shadow-orange-500/10',
    badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    dot: 'bg-orange-500',
    iconWrap: 'from-orange-500/15 to-amber-500/15',
  },
  'Fortinet': {
    icon: SiFortinet,
    iconColor: 'text-red-600',
    bg: 'from-red-600/8 to-red-500/8 dark:from-red-900/20 dark:to-red-900/20',
    border: 'border-red-100 dark:border-red-800/30',
    glow: 'shadow-red-600/10',
    badge: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
    dot: 'bg-red-600',
    iconWrap: 'from-red-600/15 to-red-500/15',
  },
  'CodinGame': {
    img: 'codingame.png',
    bg: 'from-green-500/8 to-emerald-500/8 dark:from-green-900/20 dark:to-emerald-900/20',
    border: 'border-green-100 dark:border-green-800/30',
    glow: 'shadow-green-500/10',
    badge: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    dot: 'bg-green-500',
    iconWrap: 'from-green-500/15 to-emerald-500/15',
  },
};

const defaultTheme = {
  icon: FaShieldAlt,
  iconColor: 'text-primary-light',
  bg: 'from-indigo-500/8 to-violet-500/8',
  border: 'border-indigo-100 dark:border-indigo-800/30',
  glow: 'shadow-indigo-500/10',
  badge: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
  dot: 'bg-indigo-500',
  iconWrap: 'from-indigo-500/15 to-violet-500/15',
};

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

const CertIcon = ({ issuer, size = 'w-8 h-8' }) => {
  const mapping = issuerMap[issuer];
  if (mapping?.img) return <img src={mapping.img} alt={issuer} className={`${size} object-contain`} />;
  const Icon = mapping?.icon || FaShieldAlt;
  const color = mapping?.iconColor || 'text-primary-light';
  return <Icon className={`${size} ${color}`} />;
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedCert, setSelectedCert] = useState(null);
  const { t } = useLanguage();

  const prev = () => { setDirection(-1); setCurrentIndex((i) => (i === 0 ? certifications.length - 1 : i - 1)); };
  const next = () => { setDirection(1); setCurrentIndex((i) => (i === certifications.length - 1 ? 0 : i + 1)); };

  const cert = certifications[currentIndex];
  const theme = issuerMap[cert.issuer] || defaultTheme;

  return (
    <>
      <section
        id="certifications"
        ref={ref}
        className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="mb-12">
              <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">
                {t.certifications.tag}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t.certifications.title}
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                {t.certifications.subtitle}
              </p>
            </div>

            {/* Carousel */}
            <div className="relative flex items-center gap-4">
              <button onClick={prev} className="flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary-light transition-all duration-200" aria-label="Previous">
                <FaChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={cert.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedCert(cert)}
                    className={`cursor-pointer group bg-gradient-to-br ${theme.bg} rounded-2xl p-6 shadow-md hover:shadow-xl ${theme.glow} transition-all duration-300 relative overflow-hidden border ${theme.border}`}
                  >
                    <div className="relative z-10 flex items-center gap-5">
                      {/* Icon */}
                      <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${theme.iconWrap} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <CertIcon issuer={cert.issuer} size="w-10 h-10" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} flex-shrink-0`} />
                          <span className={`text-xs font-bold uppercase tracking-wider ${theme.badge.split(' ').filter(c => c.startsWith('text')).join(' ')}`}>
                            {cert.issuer}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1">
                          {cert.name}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${theme.badge}`}>
                            {cert.date}
                          </span>
                        </div>
                      </div>

                      <div className="flex-shrink-0 text-xs text-gray-400 dark:text-gray-500 italic hidden sm:block">
                        {t.certifications.click_hint}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button onClick={next} className="flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary-light transition-all duration-200" aria-label="Next">
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots — colorés selon l'issuer de chaque certif */}
            <div className="flex justify-center gap-2 mt-6">
              {certifications.map((c, i) => {
                const th = issuerMap[c.issuer] || defaultTheme;
                return (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                    className={`rounded-full transition-all duration-200 ${
                      i === currentIndex
                        ? `w-6 h-2.5 ${th.dot}`
                        : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (() => {
          const mTheme = issuerMap[selectedCert.issuer] || defaultTheme;
          return (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }} transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              >
                {/* Modal header teinté */}
                <div className={`p-6 bg-gradient-to-br ${mTheme.bg} border-b ${mTheme.border}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-br ${mTheme.iconWrap} rounded-xl`}>
                        <CertIcon issuer={selectedCert.issuer} size="w-10 h-10" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${mTheme.dot}`} />
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            {selectedCert.issuer}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                          {selectedCert.name}
                        </h3>
                      </div>
                    </div>
                    <button onClick={() => setSelectedCert(null)} className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-white/60 dark:hover:bg-gray-700 transition-colors">
                      <FaTimes className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-0">
                  {[
                    { label: t.certifications.modal.issuer, value: selectedCert.issuer },
                    { label: t.certifications.modal.year, value: selectedCert.date },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{value}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.certifications.modal.status}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {t.certifications.modal.obtained}
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  {selectedCert.url ? (
                    <a
                      href={selectedCert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r ${mTheme.iconWrap} font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200 ${mTheme.badge.split(' ').filter(c => c.startsWith('text')).join(' ')}`}
                    >
                      {t.certifications.modal.view_link}
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <p className="mt-2 text-center text-sm text-gray-400 dark:text-gray-500 italic">
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
