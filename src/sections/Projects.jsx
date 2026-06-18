import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useCallback, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaTimes, FaEye, FaArrowRight, FaReact, FaNodeJs, FaDocker, FaPython, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss, SiNestjs, SiFlask, SiBootstrap, SiMysql, SiFlutter, SiNextdotjs, SiFastapi, SiPrisma, SiPostgresql, SiNuxtdotjs, SiLaravel, SiVuedotjs } from 'react-icons/si';
import { projects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const TECH_MAP = {
  'React':        { icon: FaReact,      color: '#61DAFB' },
  'Node.js':      { icon: FaNodeJs,     color: '#339933' },
  'MongoDB':      { icon: SiMongodb,    color: '#47A248' },
  'Express.js':   { icon: SiExpress,    color: '#ffffff' },
  'Tailwind':     { icon: SiTailwindcss,color: '#06B6D4' },
  'Tailwind CSS': { icon: SiTailwindcss,color: '#06B6D4' },
  'Docker':       { icon: FaDocker,     color: '#2496ED' },
  'TypeScript':   { icon: SiTypescript, color: '#3178C6' },
  'Python':       { icon: FaPython,     color: '#F7C948' },
  'FastAPI':      { icon: SiFastapi,    color: '#009688' },
  'ChromaDB':     { icon: FaCode,       color: '#A855F7' },
  'Nest':         { icon: SiNestjs,     color: '#E0234E' },
  'NestJs':       { icon: SiNestjs,     color: '#E0234E' },
  'Prisma':       { icon: SiPrisma,     color: '#5A67D8' },
  'Postgresql':   { icon: SiPostgresql, color: '#4169E1' },
  'PostgreSQL':   { icon: SiPostgresql, color: '#4169E1' },
  'Laravel':      { icon: SiLaravel,    color: '#FF2D20' },
  'Nuxt.js':      { icon: SiNuxtdotjs,  color: '#00DC82' },
  'Next':         { icon: SiNextdotjs,  color: '#ffffff' },
  'Next.js':      { icon: SiNextdotjs,  color: '#ffffff' },
  'Mysql':        { icon: SiMysql,      color: '#4479A1' },
  'MySQL':        { icon: SiMysql,      color: '#4479A1' },
  'Flutter':      { icon: SiFlutter,    color: '#54C5F8' },
  'Vue.js':       { icon: SiVuedotjs,   color: '#42B883' },
  'Flask':        { icon: SiFlask,      color: '#ffffff' },
  'Bootstrap':    { icon: SiBootstrap,  color: '#7952B3' },
  'gRPC':         { icon: FaCode,       color: '#5BA3E0' },
};

const TechPill = ({ tech }) => {
  const meta = TECH_MAP[tech];
  const Icon = meta?.icon ?? FaCode;
  const color = meta?.color ?? '#ffffff';
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/50 backdrop-blur-sm text-white border border-white/10">
      <Icon style={{ color }} className="w-3 h-3 flex-shrink-0" />
      {tech}
    </span>
  );
};

const VISIBLE = 3;

const Projects = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDot, setActiveDot] = useState(0);
  const { t } = useLanguage();

  const filteredProjects = projects;
  const totalDots = Math.ceil(filteredProjects.length / VISIBLE);

  const getTitle = (p) => t.projects.items[p.id]?.title || p.title;
  const getDesc = (p) => t.projects.items[p.id]?.description || p.description;

  const getCardWidth = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return 0;
    const gap = 20;
    return (container.clientWidth - gap * (VISIBLE - 1)) / VISIBLE;
  }, []);

  const scrollToPage = useCallback((page) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = getCardWidth();
    const gap = 20;
    container.scrollTo({ left: page * VISIBLE * (cardWidth + gap), behavior: 'smooth' });
  }, [getCardWidth]);

  const handleNext = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 8) {
      scrollToPage(0);
    } else {
      const cardWidth = getCardWidth();
      container.scrollBy({ left: VISIBLE * (cardWidth + 20), behavior: 'smooth' });
    }
  }, [scrollToPage, getCardWidth]);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = getCardWidth();
    const page = Math.round(container.scrollLeft / (VISIBLE * (cardWidth + 20)));
    setActiveDot(Math.min(page, totalDots - 1));
  }, [getCardWidth, totalDots]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll, filteredProjects]);

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            </div>

            {filteredProjects.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 py-12">{t.projects.no_projects}</p>
            ) : (
              <>
                {/* Scrollable strip */}
                <div
                  ref={scrollRef}
                  className="flex gap-5 overflow-x-auto"
                  style={{
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    paddingBottom: '4px',
                  }}
                >
                  <style>{`.projects-scroll::-webkit-scrollbar{display:none}`}</style>
                  {filteredProjects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex-shrink-0"
                      style={{
                        width: `calc((100% - ${(VISIBLE - 1) * 20}px) / ${VISIBLE})`,
                        minHeight: '340px',
                        scrollSnapAlign: 'start',
                      }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/50 to-black/15" />

                      {project.type && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-black/40 backdrop-blur-sm text-white/90 text-xs font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-full">
                            {project.type}
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                        <h3 className="text-lg font-bold text-white leading-tight mb-2">
                          {getTitle(project)}
                        </h3>
                        <p className="text-white/60 text-xs leading-relaxed mb-3 line-clamp-2">
                          {getDesc(project)}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies.slice(0, 4).map((tech, idx) => (
                            <TechPill key={idx} tech={tech} />
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/40 backdrop-blur-sm text-white/70 border border-white/10">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                          className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors shadow-md w-fit"
                        >
                          <FaEye className="w-3 h-3" />
                          Voir
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom: DÉFILER + dots */}
                <div className="flex items-center justify-between mt-7">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-light to-accent-light text-white rounded-full font-semibold text-sm shadow-md shadow-indigo-500/25 hover:opacity-90 transition-opacity"
                  >
                    DÉFILER
                    <FaArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalDots }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToPage(i)}
                        className={`rounded-full transition-all duration-300 ${
                          i === activeDot
                            ? 'w-6 h-2.5 bg-gradient-to-r from-primary-light to-accent-light'
                            : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
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
                <div className="absolute bottom-4 left-6 flex items-center gap-2">
                  {selectedProject.type && (
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                      {selectedProject.type}
                    </span>
                  )}
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
