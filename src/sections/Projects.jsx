import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [direction, setDirection] = useState(1);

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

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="relative flex items-center gap-3 md:gap-6">
                {/* Prev button */}
                <button
                  onClick={prev}
                  className="flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 text-gray-700 dark:text-gray-300 z-10"
                  aria-label="Projet précédent"
                >
                  <FaChevronLeft className="w-5 h-5" />
                </button>

                {/* Card area */}
                <div className="flex-1 overflow-hidden">
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={filteredProjects[currentIndex].id}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl"
                    >
                      <div className="md:flex min-h-[340px]">
                        {/* Image */}
                        <div className="relative md:w-1/2 h-56 md:h-auto overflow-hidden">
                          <img
                            src={filteredProjects[currentIndex].image}
                            alt={filteredProjects[currentIndex].title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {filteredProjects[currentIndex].featured && (
                            <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                              <FaStar className="w-3 h-3" /> Favori
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                              {filteredProjects[currentIndex].title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                              {filteredProjects[currentIndex].description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {filteredProjects[currentIndex].technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-light/10 to-accent-light/10 text-primary-light rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            <a
                              href={filteredProjects[currentIndex].liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-light to-accent-light text-white rounded-full font-medium hover:shadow-lg transition-all duration-200"
                            >
                              <FaExternalLinkAlt className="w-3 h-3" /> Voir le projet
                            </a>
                            <a
                              href={filteredProjects[currentIndex].githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2 border-2 border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-primary-light hover:text-primary-light transition-all duration-200"
                            >
                              <FaGithub className="w-4 h-4" /> GitHub
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Next button */}
                <button
                  onClick={next}
                  className="flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 text-gray-700 dark:text-gray-300 z-10"
                  aria-label="Projet suivant"
                >
                  <FaChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center items-center gap-2 mt-8">
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
  );
};

export default Projects;
