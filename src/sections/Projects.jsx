import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaChevronLeft, FaChevronRight, FaTimes, FaArrowRight } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 120 : -120 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -120 : 120 }),
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [direction, setDirection] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.featured);
  const current = filteredProjects[currentIndex];

  const handleFilter = (f) => { setFilter(f); setCurrentIndex(0); };
  const prev = () => { setDirection(-1); setCurrentIndex((i) => (i === 0 ? filteredProjects.length - 1 : i - 1)); };
  const next = () => { setDirection(1); setCurrentIndex((i) => (i === filteredProjects.length - 1 ? 0 : i + 1)); };

  const getTitle = (p) => t.projects.items[p.id]?.title || p.title;
  const getDesc = (p) => t.projects.items[p.id]?.description || p.description;

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Header + filters */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
              <div>
                <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">
                  {t.projects.tag}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {t.projects.title}
                </h2>
              </div>
              <div className="flex gap-2 shrink-0">
                {[
                  { key: 'all', label: t.projects.filter_all },
                  { key: 'featured', label: t.projects.filter_featured, icon: FaStar },
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => handleFilter(key)}
                    className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                      filter === key
                        ? 'bg-gradient-to-r from-primary-light to-accent-light text-white shadow-md shadow-indigo-500/20'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {Icon && <Icon className="w-3 h-3" />}
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {filteredProjects.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 py-12">{t.projects.no_projects}</p>
            ) : (
              <>
                {/* Image carousel */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '340px' }}>
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={current.id}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${current.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                      {current.featured && (
                        <div className="absolute top-5 left-5 z-10 flex items-center gap-1.5 bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                          <FaStar className="w-3 h-3" />
                          {t.projects.filter_featured}
                        </div>
                      )}

                      <div className="absolute top-5 right-5 z-10 bg-black/40 backdrop-blur-sm text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {currentIndex + 1} / {filteredProjects.length}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                          {getTitle(current)}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2 max-w-2xl">
                          {getDesc(current)}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex flex-wrap gap-2">
                            {current.technologies.slice(0, 5).map((tech, i) => (
                              <span key={i} className="px-2.5 py-1 text-xs font-medium bg-white/15 backdrop-blur-sm text-white rounded-lg border border-white/20">
                                {tech}
                              </span>
                            ))}
                            {current.technologies.length > 5 && (
                              <span className="px-2.5 py-1 text-xs font-medium bg-white/15 backdrop-blur-sm text-white rounded-lg border border-white/20">
                                +{current.technologies.length - 5}
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => setSelectedProject(current)}
                            className="ml-auto flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                          >
                            Détails
                            <FaArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Flèches + dots sous la card */}
                <div className="flex items-center justify-center gap-4 mt-5">
                  <button
                    onClick={prev}
                    className="p-2.5 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary-light transition-all duration-200 hover:scale-110 border border-gray-100 dark:border-gray-700"
                    aria-label="Previous project"
                  >
                    <FaChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    {filteredProjects.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                        className={`rounded-full transition-all duration-300 ${
                          i === currentIndex
                            ? 'w-8 h-2.5 bg-gradient-to-r from-primary-light to-accent-light'
                            : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                        aria-label={`Project ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={next}
                    className="p-2.5 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary-light transition-all duration-200 hover:scale-110 border border-gray-100 dark:border-gray-700"
                    aria-label="Next project"
                  >
                    <FaChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Thumbnail strip */}
                <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
                  {filteredProjects.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                      className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                        i === currentIndex
                          ? 'border-primary-light shadow-md shadow-indigo-500/20 scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                      style={{
                        backgroundImage: `url(${p.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      aria-label={getTitle(p)}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
            >
              <div
                className="h-56 w-full relative"
                style={{
                  backgroundImage: `url(${selectedProject.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  {selectedProject.featured && (
                    <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                      <FaStar className="w-3 h-3" /> {t.projects.filter_featured}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {getTitle(selectedProject)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-5">
                  {getDesc(selectedProject)}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary-light/10 to-accent-light/10 text-primary-light rounded-lg border border-primary-light/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-light to-accent-light text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      {t.projects.view_project}
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      {t.projects.view_github}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
