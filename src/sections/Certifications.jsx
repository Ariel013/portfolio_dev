import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaExternalLinkAlt, FaShieldAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { SiPostman, SiFortinet } from 'react-icons/si';
import { certifications } from '../data/portfolioData';

const issuerIconMap = {
  'SecOps Group': { icon: FaShieldAlt, color: 'text-red-500' },
  'Postman': { icon: SiPostman, color: 'text-orange-500' },
  'Fortinet': { icon: SiFortinet, color: 'text-red-600' },
  'CodinGame': { img: 'codingame.png' },
};

const CertIcon = ({ issuer, size = 'w-8 h-8' }) => {
  const mapping = issuerIconMap[issuer];
  if (mapping?.img) {
    return <img src={mapping.img} alt={issuer} className={`${size} object-contain`} />;
  }
  const IconComponent = mapping ? mapping.icon : FaShieldAlt;
  const colorClass = mapping ? mapping.color : 'text-primary-light';
  return <IconComponent className={`${size} ${colorClass}`} />;
};

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedCert, setSelectedCert] = useState(null);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? certifications.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((i) => (i === certifications.length - 1 ? 0 : i + 1));
  };

  const cert = certifications[currentIndex];

  return (
    <>
      <section
        id="certifications"
        ref={ref}
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Certifications
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent-light mx-auto rounded-full" />
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Mes certifications professionnelles et formations continues
              </p>
            </div>

            {/* Carousel */}
            <div className="relative flex items-center gap-4">
              {/* Prev */}
              <button
                onClick={prev}
                className="flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-all duration-200"
                aria-label="Précédent"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>

              {/* Card */}
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
                    className="cursor-pointer group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-accent-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0 p-4 bg-gradient-to-br from-primary-light/10 to-accent-light/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <CertIcon issuer={cert.issuer} size="w-10 h-10" />
                      </div>
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                        <p className="text-sm font-semibold text-primary-light mt-1">{cert.date}</p>
                      </div>
                      {/* Hint */}
                      <div className="flex-shrink-0 text-xs text-gray-400 dark:text-gray-500 italic">
                        Cliquer pour les détails
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next */}
              <button
                onClick={next}
                className="flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-all duration-200"
                aria-label="Suivant"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {certifications.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    i === currentIndex
                      ? 'bg-primary-light w-6'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 bg-gradient-to-br from-primary-light/10 to-accent-light/10 rounded-xl">
                  <CertIcon issuer={selectedCert.issuer} size="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                    {selectedCert.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{selectedCert.issuer}</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Organisme</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{selectedCert.issuer}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Année</span>
                  <span className="text-sm font-semibold text-primary-light">{selectedCert.date}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Statut</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Obtenue
                  </span>
                </div>
              </div>

              {/* Link */}
              {selectedCert.url ? (
                <a
                  href={selectedCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-light to-accent-light text-white font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200"
                >
                  Voir la certification
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                </a>
              ) : (
                <p className="mt-6 text-center text-sm text-gray-400 dark:text-gray-500 italic">
                  Lien de vérification non disponible
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;
