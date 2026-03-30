import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [direction, setDirection] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.featured);

  const handleFilter = (f) => {
    setFilter(f);
    setCurrentIndex(0);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? filteredProjects.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((i) => (i === filteredProjects.length - 1 ? 0 : i + 1));
  };

  const current = filteredProjects[currentIndex];

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
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
                Mes Projets
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent-light mx-auto rounded-full" />
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez une sélection de mes réalisations récentes
              </p>
            </div>

            {/* Filters */}
            <div className="flex justify-center gap-4 mb-10">
              <button
                onClick={() => handleFilter('all')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === 'all'
                    ? 'bg-gradient-to-r from-primary-light to-accent-light text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => handleFilter('featured')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === 'featured'
                    ? 'bg-gradient-to-r from-primary-light to-accent-light text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
                }`}
              >
                <FaStar /> Favoris
              </button>
            </div>

            {filteredProjects.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">
                Aucun projet à afficher.
              </p>
            ) : (
              <>
                {/* Carousel */}
                <div className="relative flex items-center gap-4">
                  <button
                    onClick={prev}
                    className="flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 text-gray-700 dark:text-gray-300 z-10"
                    aria-label="Projet précédent"
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex-1 overflow-hidden">
                    <AnimatePresence custom={direction} mode="wait">
                      <motion.div
                        key={current.id}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        onClick={() => setSelectedProject(current)}
                        className="cursor-pointer group relative h-72 rounded-2xl overflow-hidden shadow-xl"
                        style={{
                          backgroundImage: `url(${current.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/50" />

                        {/* Featured badge */}
                        {current.featured && (
                          <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 z-10">
                            <FaStar className="w-3 h-3" /> Favori
                          </div>
                        )}

                        {/* Hint */}
                        <div className="absolute top-4 right-4 text-xs text-white/70 italic z-10">
                          Cliquer pour les détails
                        </div>

                        {/* Bottom info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {current.title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {current.technologies.slice(0, 4).map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                            {current.technologies.length > 4 && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full">
                                +{current.technologies.length - 4}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={next}
                    className="flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 text-gray-700 dark:text-gray-300 z-10"
                    aria-label="Projet suivant"
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center items-center gap-2 mt-6">
                  {filteredProjects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                      className={`rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? 'w-8 h-3 bg-gradient-to-r from-primary-light to-accent-light'
                          : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                      }`}
                      aria-label={`Aller au projet ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Counter */}
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {currentIndex + 1} / {filteredProjects.length}
                </p>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
              {/* Header image */}
              <div
                className="h-48 w-full"
                style={{
                  backgroundImage: `url(${selectedProject.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <div className="flex items-center gap-2">
                    {selectedProject.featured && (
                      <span className="bg-yellow-400 text-gray-900 px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                        <FaStar className="w-3 h-3" /> Favori
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-light/10 to-accent-light/10 text-primary-light rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-light to-accent-light text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" /> Voir le projet
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:border-primary-light hover:text-primary-light transition-all"
                    >
                      <FaGithub className="w-4 h-4" /> GitHub
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
