import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaExternalLinkAlt, FaShieldAlt, FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';
import { SiPostman, SiFortinet } from 'react-icons/si';
import { certifications } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const issuerMap = {
  'SecOps Group': {
    bg: 'from-red-500/12 to-rose-500/12 dark:from-red-900/30 dark:to-rose-900/30',
    border: 'border-red-200 dark:border-red-800/40',
    dot: 'bg-red-500',
    iconWrap: 'from-red-500/20 to-rose-500/20',
    badge: 'bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300',
    accent: 'text-red-500',
  },
  'Postman': {
    icon: SiPostman,
    iconColor: 'text-orange-500',
    bg: 'from-orange-500/12 to-amber-500/12 dark:from-orange-900/30 dark:to-amber-900/30',
    border: 'border-orange-200 dark:border-orange-800/40',
    dot: 'bg-orange-500',
    iconWrap: 'from-orange-500/20 to-amber-500/20',
    badge: 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300',
    accent: 'text-orange-500',
  },
  'Fortinet': {
    icon: SiFortinet,
    iconColor: 'text-red-600',
    bg: 'from-red-700/12 to-red-400/12 dark:from-red-900/30 dark:to-red-900/20',
    border: 'border-red-200 dark:border-red-800/40',
    dot: 'bg-red-600',
    iconWrap: 'from-red-700/20 to-red-400/20',
    badge: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300',
    accent: 'text-red-600',
  },
  'CodinGame': {
    img: 'https://res.cloudinary.com/dywgshhwp/image/upload/v1778554012/codingame_rnjttu.png',
    bg: 'from-green-500/12 to-emerald-500/12 dark:from-green-900/30 dark:to-emerald-900/30',
    border: 'border-green-200 dark:border-green-800/40',
    dot: 'bg-green-500',
    iconWrap: 'from-green-500/20 to-emerald-500/20',
    badge: 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300',
    accent: 'text-green-600',
  },
  'GoMyCode': {
    img: 'https://res.cloudinary.com/dywgshhwp/image/upload/v1778556543/gomycode_v62qew.png',
    bg: 'from-orange-400/12 to-yellow-500/12 dark:from-orange-900/30 dark:to-yellow-900/30',
    border: 'border-orange-200 dark:border-orange-800/40',
    dot: 'bg-orange-400',
    iconWrap: 'from-orange-400/20 to-yellow-500/20',
    badge: 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300',
    accent: 'text-orange-500',
  },
  'Duolingo': {
    img: 'https://res.cloudinary.com/dywgshhwp/image/upload/v1778554792/duolingo_mwtcsn.png',
    bg: 'from-green-400/12 to-lime-500/12 dark:from-green-900/30 dark:to-lime-900/30',
    border: 'border-green-200 dark:border-green-800/40',
    dot: 'bg-green-400',
    iconWrap: 'from-green-400/20 to-lime-500/20',
    badge: 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300',
    accent: 'text-green-500',
  },
};

const defaultTheme = {
  icon: FaShieldAlt,
  iconColor: 'text-indigo-500',
  bg: 'from-indigo-500/12 to-violet-500/12 dark:from-indigo-900/30 dark:to-violet-900/30',
  border: 'border-indigo-200 dark:border-indigo-800/40',
  dot: 'bg-indigo-500',
  iconWrap: 'from-indigo-500/20 to-violet-500/20',
  badge: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300',
  accent: 'text-indigo-500',
};

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 100 : -100 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -100 : 100 }),
};

const CertIcon = ({ issuer, image, size = 'w-12 h-12' }) => {
  if (image) return <img src={image} alt={issuer} className={`${size} object-contain`} />;
  const mapping = issuerMap[issuer];
  if (mapping?.img) return <img src={mapping.img} alt={issuer} className={`${size} object-contain`} />;
  const Icon = mapping?.icon || FaShieldAlt;
  const color = mapping?.iconColor || 'text-primary-light';
  return <Icon className={`${size} ${color}`} />;
};

const getCredentialId = (url) => {
  if (!url) return null;
  const parts = url.split('/');
  return parts[parts.length - 1] || null;
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const { t } = useLanguage();

  const prev = () => { setDirection(-1); setCurrentIndex((i) => (i === 0 ? certifications.length - 1 : i - 1)); };
  const next = () => { setDirection(1); setCurrentIndex((i) => (i === certifications.length - 1 ? 0 : i + 1)); };

  const cert = certifications[currentIndex];
  const theme = issuerMap[cert.issuer] || defaultTheme;
  const credentialId = getCredentialId(cert.url);

  return (
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

        {/* Card carousel */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[600px]" style={{ height: '300px' }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={cert.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                {/* Blurred background */}
                {cert.image && (
                  <div
                    className="absolute inset-0 rounded-3xl overflow-hidden"
                    style={{ filter: 'blur(18px)', opacity: 0.18, backgroundImage: `url(${cert.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                )}

                {/* Card */}
                <div className={`relative h-full rounded-3xl bg-white dark:bg-gray-800 border ${theme.border} shadow-xl overflow-hidden flex flex-col`}>

                  {/* Gradient top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.iconWrap}`} />

                  <div className="flex gap-6 p-7 flex-1">
                    {/* Logo */}
                    <div className={`flex-shrink-0 self-start p-4 bg-gradient-to-br ${theme.iconWrap} rounded-2xl shadow-md`}>
                      <CertIcon issuer={cert.issuer} image={cert.image} size="w-14 h-14" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="text-xl font-bold italic text-gray-900 dark:text-white leading-snug mb-2">
                        {cert.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mb-4">
                        <FaCheckCircle className={`w-3.5 h-3.5 ${theme.accent}`} />
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{cert.issuer}</span>
                      </div>

                      <div className="border-t border-gray-100 dark:border-gray-700 mb-4" />

                      <div className="grid grid-cols-2 gap-4 mb-5">
                        {credentialId && (
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                              ID DE VALIDATION
                            </p>
                            <p className={`text-sm font-semibold truncate ${theme.accent}`}>{credentialId}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                            DATE D'ÉMISSION
                          </p>
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{cert.date}</p>
                        </div>
                      </div>

                      {cert.url ? (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-xs uppercase tracking-widest rounded-xl hover:opacity-80 transition-opacity w-fit"
                        >
                          VOIR LE CERTIFICAT
                          <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="mt-auto text-xs text-gray-400 dark:text-gray-500 italic">
                          {t.certifications.modal.no_link}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Counter bottom-right */}
                  <div className="absolute bottom-3 right-5 text-xs text-gray-300 dark:text-gray-600 font-medium tabular-nums">
                    {currentIndex + 1} / {certifications.length}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Flèches + dots */}
        <div className="flex justify-center items-center gap-4 mt-6">
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
  );
};

export default Certifications;
